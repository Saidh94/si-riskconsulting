import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const { nom, email, telephone, sujet, message } = await req.json();

    if (!nom || !email || !message) {
      return NextResponse.json({ error: "Champs requis manquants." }, { status: 400 });
    }

    await resend.emails.send({
      from: "SI RISKCONSULTING <onboarding@resend.dev>",
      to: ["si-riskconsulting@outlook.com"],
      replyTo: email,
      subject: `[Contact] ${sujet || "Nouveau message"} – ${nom}`,
      text: `Nom : ${nom}\nEmail : ${email}\nTéléphone : ${telephone || "Non renseigné"}\nSujet : ${sujet || "Non renseigné"}\n\nMessage :\n${message}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: #0c1f3d; padding: 24px; border-radius: 8px 8px 0 0;">
            <h2 style="color: white; margin: 0; font-size: 18px;">Nouveau message – SI RISKCONSULTING</h2>
          </div>
          <div style="background: #f8fafc; padding: 24px; border-radius: 0 0 8px 8px; border: 1px solid #e2e8f0; border-top: none;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr><td style="padding: 8px 0; color: #64748b; font-size: 14px; width: 120px;">Nom</td><td style="padding: 8px 0; font-weight: bold; color: #0c1f3d;">${nom}</td></tr>
              <tr><td style="padding: 8px 0; color: #64748b; font-size: 14px;">Email</td><td style="padding: 8px 0; color: #0c1f3d;"><a href="mailto:${email}">${email}</a></td></tr>
              <tr><td style="padding: 8px 0; color: #64748b; font-size: 14px;">Téléphone</td><td style="padding: 8px 0; color: #0c1f3d;">${telephone || "Non renseigné"}</td></tr>
              <tr><td style="padding: 8px 0; color: #64748b; font-size: 14px;">Sujet</td><td style="padding: 8px 0; color: #0c1f3d;">${sujet || "Non renseigné"}</td></tr>
            </table>
            <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 16px 0;" />
            <p style="color: #64748b; font-size: 14px; margin-bottom: 8px;">Message :</p>
            <p style="color: #0c1f3d; white-space: pre-wrap;">${message}</p>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Erreur lors de l'envoi." }, { status: 500 });
  }
}
