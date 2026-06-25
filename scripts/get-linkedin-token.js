/**
 * Helper pour obtenir le token OAuth LinkedIn
 * Usage : node scripts/get-linkedin-token.js
 *
 * Pré-requis :
 *  1. Avoir créé une app sur https://developer.linkedin.com
 *  2. Avoir ajouté http://localhost:3001/callback comme URL de redirection dans l'app
 *  3. Avoir les scopes : openid, profile, w_member_social, w_organization_social
 *  4. Renseigner CLIENT_ID et CLIENT_SECRET ci-dessous
 */

const http = require("http");
const { exec } = require("child_process");

// ⚠️  À REMPLIR avec tes valeurs (depuis developer.linkedin.com)
const CLIENT_ID = "COLLE_TON_CLIENT_ID_ICI";
const CLIENT_SECRET = "COLLE_TON_CLIENT_SECRET_ICI";
const REDIRECT_URI = "http://localhost:3001/callback";
const SCOPES = ["openid", "profile", "w_member_social", "w_organization_social"].join("%20");

const authUrl = `https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=${CLIENT_ID}&redirect_uri=${encodeURIComponent(REDIRECT_URI)}&scope=${SCOPES}`;

console.log("\n🔗 Ouverture du navigateur pour l'autorisation LinkedIn...");
console.log("Si le navigateur ne s'ouvre pas, copie cette URL :\n");
console.log(authUrl + "\n");

// Ouvre le navigateur automatiquement
const openCmd = process.platform === "win32" ? `start "${authUrl}"` : `open "${authUrl}"`;
exec(openCmd);

// Serveur local temporaire pour récupérer le code OAuth
const server = http.createServer(async (req, res) => {
  if (!req.url.startsWith("/callback")) return;

  const url = new URL(req.url, "http://localhost:3001");
  const code = url.searchParams.get("code");

  if (!code) {
    res.end("<h1>Erreur : pas de code reçu</h1>");
    return;
  }

  console.log("✅ Code OAuth reçu, échange contre un token...");

  try {
    const tokenRes = await fetch("https://www.linkedin.com/oauth/v2/accessToken", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        grant_type: "authorization_code",
        code,
        redirect_uri: REDIRECT_URI,
        client_id: CLIENT_ID,
        client_secret: CLIENT_SECRET,
      }),
    });

    const token = await tokenRes.json();

    if (token.access_token) {
      // Récupère l'ID LinkedIn de l'utilisateur
      const profileRes = await fetch("https://api.linkedin.com/v2/userinfo", {
        headers: { Authorization: `Bearer ${token.access_token}` },
      });
      const profile = await profileRes.json();

      console.log("\n" + "=".repeat(60));
      console.log("🎉 TOKEN OBTENU AVEC SUCCÈS");
      console.log("=".repeat(60));
      console.log("\nAjoute ces 2 variables dans Vercel Dashboard :");
      console.log("\nLINKEDIN_ACCESS_TOKEN=");
      console.log(token.access_token);
      console.log("\nLINKEDIN_AUTHOR_URN=");
      console.log(`urn:li:person:${profile.sub}`);
      console.log("\nExpire dans : " + Math.floor(token.expires_in / 86400) + " jours");
      console.log("=".repeat(60) + "\n");

      res.end(`
        <html><body style="font-family:sans-serif;padding:30px;background:#0a0f1e;color:white">
          <h1 style="color:#f97316">✅ Token LinkedIn obtenu !</h1>
          <p>Retourne dans ton terminal pour copier les valeurs.</p>
          <p style="color:#94a3b8">Tu peux fermer cette fenêtre.</p>
        </body></html>
      `);
    } else {
      console.error("❌ Erreur :", JSON.stringify(token, null, 2));
      res.end("<h1>Erreur lors de l'échange du token. Voir le terminal.</h1>");
    }
  } catch (err) {
    console.error("❌ Erreur réseau :", err.message);
    res.end("<h1>Erreur réseau. Voir le terminal.</h1>");
  }

  server.close();
});

server.listen(3001, () => {
  console.log("⏳ En attente de l'autorisation LinkedIn sur http://localhost:3001...\n");
});
