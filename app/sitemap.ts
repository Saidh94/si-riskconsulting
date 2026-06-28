import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.si-riskconsulting.fr";

  return [
    // Pages principales
    { url: base, lastModified: new Date(), changeFrequency: "weekly", priority: 1.0 },
    { url: `${base}/expertises`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/blog`, lastModified: new Date(), changeFrequency: "daily", priority: 0.9 },
    { url: `${base}/devis`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/contact`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },

    // Pages piliers SEO — Coordination SSI
    { url: `${base}/coordination-ssi`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/moe-ssi`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.85 },

    // Pages piliers SEO — Audits
    { url: `${base}/audit-incendie`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },

    // Pages piliers SEO — APSAD
    { url: `${base}/apsad`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },

    // Pages piliers SEO — Systèmes
    { url: `${base}/sprinkler`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.85 },
    { url: `${base}/desenfumage`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.85 },

    // Pages légales
    { url: `${base}/mentions-legales`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
    { url: `${base}/politique-de-confidentialite`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
  ];
}
