import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.si-riskconsulting.fr";
  const now = new Date();

  return [
    { url: base, lastModified: now, changeFrequency: "monthly", priority: 1.0 },
    { url: `${base}/expertises`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/devis`, lastModified: now, changeFrequency: "yearly", priority: 0.8 },
    { url: `${base}/contact`, lastModified: now, changeFrequency: "yearly", priority: 0.7 },
    { url: `${base}/mentions-legales`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
  ];
}
