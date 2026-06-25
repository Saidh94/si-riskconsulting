import { NextResponse } from "next/server";

// ─────────────────────────────────────────────────────────────
// Vercel Cron Job — LinkedIn Auto-Post
// Déclenché chaque lundi et jeudi à 8h00 UTC
// Variables d'environnement requises (Vercel Dashboard) :
//   ANTHROPIC_API_KEY      — clé Claude API
//   LINKEDIN_ACCESS_TOKEN  — token OAuth LinkedIn (60 jours)
//   LINKEDIN_AUTHOR_URN    — urn:li:person:XXXX ou urn:li:organization:XXXX
//   CRON_SECRET            — secret pour sécuriser l'endpoint
// ─────────────────────────────────────────────────────────────

// Sujets rotatifs — 1 par appel, en boucle sur la semaine
const TOPICS = [
  {
    theme: "Coordination SSI",
    brief: "Parle d'une erreur fréquente que tu vois sur les chantiers dans la mission CSSI. Sois concret, donne un exemple de projet (anonymisé). Mentionne le CCF SSI ou le DI-SSI.",
    hashtags: "#CoordinationSSI #CSSI #SécuritéIncendie #SSI #BureauEtudes",
  },
  {
    theme: "APSAD R1 Sprinkler",
    brief: "Explique un point technique sur les sprinklers ou la règle APSAD R1 que les maîtres d'ouvrage méconnaissent. Donne un exemple concret d'entrepôt logistique ou d'industrie.",
    hashtags: "#APSAD #Sprinkler #ExtinictionAutomatique #IncendieIndustriel #SécuritéIncendie",
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
- Ne PAS inclure les hashtags dans le texte, ils seront ajoutés séparément`,
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

  // Ajouter les hashtags en fin de post
  return `${postText}\n\n${topic.hashtags}`;
}

async function publishToLinkedIn(text: string): Promise<string> {
  const accessToken = process.env.LINKEDIN_ACCESS_TOKEN;
  const authorUrn = process.env.LINKEDIN_AUTHOR_URN;

  if (!accessToken) throw new Error("LINKEDIN_ACCESS_TOKEN manquant");
  if (!authorUrn) throw new Error("LINKEDIN_AUTHOR_URN manquant");

  // Utilise la nouvelle API LinkedIn Posts (v2024)
  const response = await fetch("https://api.linkedin.com/rest/posts", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
      "X-Restli-Protocol-Version": "2.0.0",
      "LinkedIn-Version": "202504",
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

  // LinkedIn retourne l'ID du post dans le header x-restli-id
  const postId = response.headers.get("x-restli-id") || "unknown";
  return postId;
}

async function sendEmailNotification(postText: string, postId: string, topic: string) {
  const web3FormsKey = process.env.WEB3FORMS_KEY || "d5e1f1de-f384-4961-b4da-2305abdd73fc";

  await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      access_key: web3FormsKey,
      subject: `✅ LinkedIn publié — ${topic}`,
      from_name: "Agent LinkedIn SI RISKCONSULTING",
      name: "Agent LinkedIn",
      email: "si-riskconsulting@outlook.com",
      message: `Post publié avec succès sur LinkedIn.\n\nSujet : ${topic}\nID du post : ${postId}\n\n---\n\nTexte publié :\n\n${postText}`,
    }),
  });
}

export async function GET(request: Request) {
  // Vérification du secret cron (sécurité)
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

    // 2. Publier sur LinkedIn
    const postId = await publishToLinkedIn(postText);
    console.log(`[LinkedIn Agent] Publié — ID : ${postId}`);

    // 3. Notification email
    await sendEmailNotification(postText, postId, topic.theme);
    console.log(`[LinkedIn Agent] Notification email envoyée`);

    return NextResponse.json({
      success: true,
      topic: topic.theme,
      postId,
      length: postText.length,
      preview: postText.slice(0, 100) + "...",
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    console.error(`[LinkedIn Agent] Erreur : ${message}`);

    // Notification email d'erreur
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
          message: `Erreur lors de la publication automatique :\n\n${message}`,
        }),
      });
    } catch {}

    return NextResponse.json({ success: false, error: message }, { status: 500 });
  }
}
