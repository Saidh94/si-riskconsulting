import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    const {
      nom, societe, email, telephone,
      typeEtablissement, surface, typePrestation,
      description, delai,
    } = data;

    if (!nom || !email || !typePrestation) {
      return NextResponse.json({ error: "Champs requis manquants." }, { status: 400 });
    }

    await resend.emails.send({
      from: "SI RISKCONSULTING <onboarding@resend.dev>",
      to: ["si-riskconsulting@outlook.com"],
      replyTo: email,
      subject: `[Devis] ${typePrestation} – ${nom}${societe ? ` (${societe})` : ""}`,
      text: `
DEMANDE DE DEVIS – SI RISKCONSULTING

Nom : ${nom}
Société : ${societe || "Non renseigné"}
Email : ${email}
Téléphone : ${telephone || "Non renseigné"}

Type d'établissement : ${typeEtablissement || "Non renseigné"}
Surface (m²) : ${surface || "Non renseigné"}
Type de prestation : ${typePrestation}
Délai souhaité : ${delai || "Non renseigné"}

Description du projet :
${description || "Aucune description"}
      `.trim(),
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: #0c1f3d; padding: 24px; border-radius: 8px 8px 0 0;">
            <h2 style="color: white; margin: 0; font-size: 18px;">Demande de devis – SI RISKCONSULTING</h2>
          </div>
          <div style="background: #f8fafc; padding: 24px; border-radius: 0 0 8px 8px; border: 1px solid #e2e8f0; border-top: none;">
            <h3 style="color: #0c1f3d; font-size: 14px; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 12px;">Contact</h3>
            <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
              <tr><td style="padding: 6px 0; color: #64748b; font-size: 14px; width: 160px;">Nom</td><td style="padding: 6px 0; font-weight: bold; color: #0c1f3d;">${nom}</td></tr>
              <tr><td style="padding: 6px 0; color: #64748b; font-size: 14px;">Société</td><td style="padding: 6px 0; color: #0c1f3d;">${societe || "Non renseigné"}</td></tr>
              <tr><td style="padding: 6px 0; color: #64748b; font-size: 14px;">Email</td><td style="padding: 6px 0; color: #0c1f3d;"><a href="mailto:${email}">${email}</a></td></tr>
              <tr><td style="padding: 6px 0; color: #64748b; font-size: 14px;">Téléphone</td><td style="padding: 6px 0; color: #0c1f3d;">${telephone || "Non renseigné"}</td></tr>
            </table>
            <h3 style="color: #0c1f3d; font-size: 14px; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 12px;">Projet</h3>
            <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
              <tr><td style="padding: 6px 0; color: #64748b; font-size: 14px; width: 160px;">Type d'établissement</td><td style="padding: 6px 0; color: #0c1f3d;">${typeEtablissement || "Non renseigné"}</td></tr>
              <tr><td style="padding: 6px 0; color: #64748b; font-size: 14px;">Surface</td><td style="padding: 6px 0; color: #0c1f3d;">${surface ? `${surface} m²` : "Non renseigné"}</td></tr>
              <tr><td style="padding: 6px 0; color: #64748b; font-size: 14px;">Prestation</td><td style="padding: 6px 0; font-weight: bold; color: #2563eb;">${typePrestation}</td></tr>
              <tr><td style="padding: 6px 0; color: #64748b; font-size: 14px;">Délai souhaité</td><td style="padding: 6px 0; color: #0c1f3d;">${delai || "Non renseigné"}</td></tr>
            </table>
            ${description ? `
            <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 16px 0;" />
            <p style="color: #64748b; font-size: 14px; margin-bottom: 8px;">Description du projet :</p>
            <p style="color: #0c1f3d; white-space: pre-wrap;">${description}</p>
            ` : ""}
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Erreur lors de l'envoi." }, { status: 500 });
  }
}
