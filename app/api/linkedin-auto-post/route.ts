import { NextResponse } from "next/server";

// ─────────────────────────────────────────────────────────────
// Vercel Cron Job — LinkedIn Auto-Post (mode validation)
// Déclenché chaque lundi et jeudi à 8h00 UTC
// Le post est généré et envoyé par email pour validation.
// Un clic sur le lien "Publier" dans l'email déclenche la publication.
// ─────────────────────────────────────────────────────────────

const TOPICS = [
  {
    theme: "Coordination SSI",
    brief: "Parle d'une erreur fréquente que tu vois sur les chantiers dans la mission CSSI. Sois concret, donne un exemple de projet (anonymisé). Mentionne le CCF SSI ou le DI-SSI.",
    hashtags: "#CoordinationSSI #CSSI #SécuritéIncendie #SSI #BureauEtudes",
  },
  {
    theme: "APSAD R1 Sprinkler",
    brief: "Explique un point technique sur les sprinklers ou la règle APSAD R1 que les maîtres d'ouvrage méconnaissent. Donne un exemple concret d'entrepôt logistique ou d'industrie.",
    hashtags: "#APSAD #Sprinkler #ExtinctionAutomatique #IncendieIndustriel #SécuritéIncendie",
  },
  {
    theme: "Lithium-ion et incendie",
    brief: "Parle du risque incendie lithium-ion : entrepôts de batteries, véhicules électriques, ICPE 2925. Donne 2-3 faits concrets. Mentionne l'arrêté ICPE ou les préconisations CNPP.",
    hashtags: "#LithiumIon #IncendieLithium #ICPE #VéhiculesElectriques #PréventionIncendie",
  },
  {
    theme: "Audit incendie",
    brief: "Raconte une situation réelle d'audit (anonymisée) : bâtiment non conforme, non-conformité surprenante, problème découvert. Donne la leçon à retenir pour les exploitants.",
    hashtags: "#AuditIncendie #ConformitéIncendie #ERP #SécuritéIncendie #BureauEtudes",
  },
  {
    theme: "Réglementation ERP",
    brief: "Explique une évolution réglementaire récente ou un point souvent mal interprété sur la réglementation ERP ou IGH. Sois pédagogique.",
    hashtags: "#ERP #IGH #RéglementationIncendie #SécuritéIncendie #CoordinationSSI",
  },
  {
    theme: "Désenfumage",
    brief: "Parle d'un problème courant sur les systèmes de désenfumage : exutoires bloqués, volets non conformes, calculs erronés. Exemple concret, leçon pratique.",
    hashtags: "#Désenfumage #ExutoiresIncendie #SSI #ConformitéIncendie #SécuritéIncendie",
  },
  {
    theme: "Carrière et expertise",
    brief: "Partage une réflexion personnelle sur le métier d'expert sécurité incendie indépendant : pourquoi l'indépendance est une valeur clé, ce que ça change pour le client.",
    hashtags: "#ExpertIncendie #BureauEtudes #ConsultantIndépendant #SécuritéIncendie #Ingénierie",
  },
  {
    theme: "ICPE entrepôts",
    brief: "Parle des obligations incendie dans les entrepôts ICPE rubrique 1510 : sprinkler, désenfumage par exutoires, murs séparatifs coupe-feu. Un point pratique pour les exploitants.",
    hashtags: "#ICPE #Entrepôt #Logistique #Sprinkler #SécuritéIncendie",
  },
];

function getTopicOfTheWeek(): (typeof TOPICS)[0] {
  const weekNumber = Math.floor(Date.now() / (1000 * 60 * 60 * 24 * 7));
  return TOPICS[weekNumber % TOPICS.length];
}

async function generatePost(topic: (typeof TOPICS)[0]): Promise<string> {
  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) throw new Error("ANTHROPIC_API_KEY manquante");

  const response = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: {
      "x-api-key": apiKey,
      "anthropic-version": "2023-06-01",
      "content-type": "application/json",
    },
    body: JSON.stringify({
      model: "claude-haiku-4-5-20251001",
      max_tokens: 600,
      system: `Tu es le ghostwriter expert de Said H., ingénieur prévention incendie avec plus de 15 ans d'expérience. Tu écris en son nom, à la première personne.

Règles absolues :
- Ton direct, concret, terrain. Jamais de jargon inutile.
- Structure : accroche forte (chiffre ou fait surprenant en 1 ligne) → problème → solution ou leçon → question ou invitation à commenter
- Entre 800 et 1200 caractères maximum
- Jamais de formules pompeuses ("En conclusion", "Il est important de noter")
- Jamais de majuscules excessives
- Terminer par une question courte pour susciter l'engagement
- Ne PAS inclure les hashtags dans le texte, ils seront ajoutés séparément
- IMPORTANT : Ne jamais inventer de références réglementaires, de normes ou de chiffres non vérifiés. Si tu cites une norme, cite-la correctement (ex: NF S 61-932, arrêté du 25/06/1980, etc.)`,
      messages: [
        {
          role: "user",
          content: `Sujet : ${topic.theme}\n\nBrief : ${topic.brief}\n\nÉcris le post LinkedIn maintenant. Pas de préambule, commence directement par l'accroche.`,
        },
      ],
    }),
  });

  if (!response.ok) {
    const err = await response.text();
    throw new Error(`Claude API error: ${err}`);
  }

  const data = await response.json();
  const postText = data.content[0].text.trim();
  return `${postText}\n\n${topic.hashtags}`;
}

async function sendValidationEmail(postText: string, approvalUrl: string, topic: string) {
  const web3FormsKey = process.env.WEB3FORMS_KEY || "d5e1f1de-f384-4961-b4da-2305abdd73fc";

  await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      access_key: web3FormsKey,
      subject: `📝 Post LinkedIn à valider — ${topic}`,
      from_name: "Agent LinkedIn SI RISKCONSULTING",
      name: "Agent LinkedIn",
      email: "si-riskconsulting@outlook.com",
      message: `Un nouveau post LinkedIn a été généré. Lis-le, corrige-le si besoin, puis clique sur le lien pour publier.\n\n${"=".repeat(50)}\n\nSUJET : ${topic}\n\n${postText}\n\n${"=".repeat(50)}\n\n✅ PUBLIER CE POST :\n${approvalUrl}\n\n⚠️ Ce lien est valable 7 jours. Si tu ne publies pas, le post sera ignoré.\n\nBonne lecture !`,
    }),
  });
}

export async function GET(request: Request) {
  const cronSecret = process.env.CRON_SECRET;
  if (cronSecret) {
    const authHeader = request.headers.get("authorization");
    if (authHeader !== `Bearer ${cronSecret}`) {
      return NextResponse.json({ error: "Non autorisé" }, { status: 401 });
    }
  }

  try {
    const topic = getTopicOfTheWeek();
    console.log(`[LinkedIn Agent] Sujet : ${topic.theme}`);

    // 1. Générer le post avec Claude
    const postText = await generatePost(topic);
    console.log(`[LinkedIn Agent] Post généré (${postText.length} caractères)`);

    // 2. Encoder le post pour l'URL d'approbation
    const encodedPost = Buffer.from(postText).toString("base64");
    const approvalUrl = `https://www.si-riskconsulting.fr/api/linkedin-publish?token=${cronSecret}&text=${encodeURIComponent(encodedPost)}`;

    // 3. Envoyer l'email de validation
    await sendValidationEmail(postText, approvalUrl, topic.theme);
    console.log(`[LinkedIn Agent] Email de validation envoyé`);

    return NextResponse.json({
      success: true,
      status: "En attente de validation",
      topic: topic.theme,
      length: postText.length,
      preview: postText.slice(0, 100) + "...",
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    console.error(`[LinkedIn Agent] Erreur : ${message}`);

    try {
      await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: "d5e1f1de-f384-4961-b4da-2305abdd73fc",
          subject: "❌ LinkedIn Agent — Erreur",
          from_name: "Agent LinkedIn SI RISKCONSULTING",
          name: "Agent LinkedIn",
          email: "si-riskconsulting@outlook.com",
          message: `Erreur lors de la génération du post :\n\n${message}`,
        }),
      });
    } catch {}

    return NextResponse.json({ success: false, error: message }, { status: 500 });
  }
}
