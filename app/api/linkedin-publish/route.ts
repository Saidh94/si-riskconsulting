import { NextResponse } from "next/server";

// ─────────────────────────────────────────────────────────────
// Endpoint de publication LinkedIn après validation par email
// Appelé via le lien dans l'email de validation
// GET /api/linkedin-publish?token=XXX&text=BASE64_ENCODED_POST
// ─────────────────────────────────────────────────────────────

async function publishToLinkedIn(text: string): Promise<string> {
  const accessToken = process.env.LINKEDIN_ACCESS_TOKEN;
  const authorUrn = process.env.LINKEDIN_AUTHOR_URN;

  if (!accessToken) throw new Error("LINKEDIN_ACCESS_TOKEN manquant");
  if (!authorUrn) throw new Error("LINKEDIN_AUTHOR_URN manquant");

  const response = await fetch("https://api.linkedin.com/rest/posts", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
      "X-Restli-Protocol-Version": "2.0.0",
      "LinkedIn-Version": "202601",
    },
    body: JSON.stringify({
      author: authorUrn,
      commentary: text,
      visibility: "PUBLIC",
      distribution: {
        feedDistribution: "MAIN_FEED",
        targetEntities: [],
        thirdPartyDistributionChannels: [],
      },
      lifecycleState: "PUBLISHED",
      isReshareDisabledByAuthor: false,
    }),
  });

  if (!response.ok) {
    const err = await response.text();
    throw new Error(`LinkedIn API error ${response.status}: ${err}`);
  }

  const postId = response.headers.get("x-restli-id") || "unknown";
  return postId;
}

async function sendConfirmationEmail(postText: string, postId: string) {
  const web3FormsKey = process.env.WEB3FORMS_KEY || "d5e1f1de-f384-4961-b4da-2305abdd73fc";

  await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      access_key: web3FormsKey,
      subject: "✅ Post LinkedIn publié avec succès",
      from_name: "Agent LinkedIn SI RISKCONSULTING",
      name: "Agent LinkedIn",
      email: "si-riskconsulting@outlook.com",
      message: `Ton post LinkedIn a été publié avec succès.\n\nID du post : ${postId}\n\n---\n\nTexte publié :\n\n${postText}`,
    }),
  });
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const token = searchParams.get("token");
  const encodedText = searchParams.get("text");

  const cronSecret = process.env.CRON_SECRET;

  // Vérification du token
  if (!token || token !== cronSecret) {
    return new Response(
      `<html><body style="font-family:sans-serif;padding:40px;background:#0a0f1e;color:white;text-align:center">
        <h1 style="color:#dc2626">❌ Non autorisé</h1>
        <p style="color:#94a3b8">Lien invalide ou expiré.</p>
      </body></html>`,
      { headers: { "Content-Type": "text/html" } }
    );
  }

  if (!encodedText) {
    return new Response(
      `<html><body style="font-family:sans-serif;padding:40px;background:#0a0f1e;color:white;text-align:center">
        <h1 style="color:#dc2626">❌ Texte manquant</h1>
      </body></html>`,
      { headers: { "Content-Type": "text/html" } }
    );
  }

  try {
    // Décoder le post
    const postText = Buffer.from(decodeURIComponent(encodedText), "base64").toString("utf-8");

    // Publier sur LinkedIn
    const postId = await publishToLinkedIn(postText);

    // Email de confirmation
    await sendConfirmationEmail(postText, postId);

    return new Response(
      `<html><body style="font-family:sans-serif;padding:40px;background:#0a0f1e;color:white;text-align:center;max-width:600px;margin:0 auto">
        <div style="margin-top:60px">
          <div style="font-size:64px;margin-bottom:20px">✅</div>
          <h1 style="color:#f97316;font-size:28px;margin-bottom:16px">Post publié sur LinkedIn !</h1>
          <p style="color:#94a3b8;margin-bottom:32px">Un email de confirmation t'a été envoyé.</p>
          <div style="background:#1e293b;padding:24px;border-radius:12px;text-align:left;border:1px solid #334155">
            <p style="color:#64748b;font-size:12px;margin-bottom:8px;text-transform:uppercase;letter-spacing:1px">Texte publié</p>
            <p style="color:#e2e8f0;font-size:14px;line-height:1.6;white-space:pre-wrap">${postText.replace(/</g, "&lt;").replace(/>/g, "&gt;")}</p>
          </div>
          <p style="color:#475569;font-size:13px;margin-top:24px">Tu peux fermer cette fenêtre.</p>
        </div>
      </body></html>`,
      { headers: { "Content-Type": "text/html; charset=utf-8" } }
    );
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);

    return new Response(
      `<html><body style="font-family:sans-serif;padding:40px;background:#0a0f1e;color:white;text-align:center">
        <h1 style="color:#dc2626">❌ Erreur lors de la publication</h1>
        <p style="color:#94a3b8">${message}</p>
        <p style="color:#64748b;font-size:13px;margin-top:24px">Contacte le support ou réessaie.</p>
      </body></html>`,
      { headers: { "Content-Type": "text/html; charset=utf-8" }, status: 500 }
    );
  }
}
