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

    // Pages piliers SEO — A