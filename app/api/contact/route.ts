import { NextRequest, NextResponse } from "next/server";

const WEB3FORMS_KEY = process.env.WEB3FORMS_KEY || "d5e1f1de-f384-4961-b4da-2305abdd73fc";

export async function POST(req: NextRequest) {
  try {
    const { nom, email, telephone, sujet, message } = await req.json();

    if (!nom || !email || !message) {
      return NextResponse.json({ error: "Champs requis manquants." }, { status: 400 });
    }

    const body = {
      access_key: WEB3FORMS_KEY,
      subject: `[Contact] ${sujet || "Nouveau message"} – ${nom}`,
      from_name: "SI RISKCONSULTING Site",
      name: nom,
      email: email,
      replyto: email,
      telephone: telephone || "Non renseigné",
      sujet: sujet || "Non renseigné",
      message: message,
    };

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    const data = await res.json();

    if (!data.success) {
      return NextResponse.json({ error: "Erreur lors de l'envoi." }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Erreur lors de l'envoi." }, { status: 500 });
  }
}
