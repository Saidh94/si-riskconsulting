import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.si-riskconsulting.fr";
  const now = new Date();

  const pages = [
    { url: "/", priority: 1.0, changeFrequency: "weekly" as const },
    { url: "/expertises", priority: 0.9, changeFrequency: "monthly" as const },
    { url: "/contact", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/devis", priority: 0.9, changeFrequency: "monthly" as const },
    // Pages piliers SEO
    { url: "/coordination-ssi", priority: 0.9, changeFrequency: "monthly" as const },
    { url: "/moe-ssi", priority: 0.9, changeFrequency: "monthly" as const },
    { url: "/audit-incendie", priority: 0.9, changeFrequency: "monthly" as const },
    { url: "/apsad", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/sprinkler", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/desenfumage", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/commission-securite-erp", priority: 0.8, changeFrequency: "monthly" as const },
    // Pages locales
    { url: "/ile-de-france", priority: 0.8, changeFrequency: "monthly" as const },
    // Blog
    { url: "/blog", priority: 0.7, changeFrequency: "weekly" as const },
    // Légal
    { url: "/mentions-legales", priority: 0.3, changeFrequency: "yearly" as const },
    { url: "/politique-de-confidentialite", priority: 0.3, changeFrequency: "yearly" as const },
  ];

  return pages.map(({ url, priority, changeFrequency }) => ({
    url: `${base}${url}`,
    lastModified: now,
    changeFrequency,
    priority,
  }));
}
