import { NextRequest, NextResponse } from "next/server";

const WEB3FORMS_KEY = process.env.WEB3FORMS_KEY || "d5e1f1de-f384-4961-b4da-2305abdd73fc";

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

    const body = {
      access_key: WEB3FORMS_KEY,
      subject: `[Devis] ${typePrestation} – ${nom}${societe ? ` (${societe})` : ""}`,
      from_name: "SI RISKCONSULTING Site",
      name: nom,
      email: email,
      replyto: email,
      societe: societe || "Non renseigné",
      telephone: telephone || "Non renseigné",
      type_etablissement: typeEtablissement || "Non renseigné",
      surface: surface ? `${surface} m²` : "Non renseigné",
      type_prestation: typePrestation,
      delai: delai || "Non renseigné",
      message: description || "Aucune description",
    };

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    const result = await res.json();

    if (!result.success) {
      return NextResponse.json({ error: "Erreur lors de l'envoi." }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Erreur lors de l'envoi." }, { status: 500 });
  }
}
