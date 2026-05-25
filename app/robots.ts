import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const base = "https://www.si-riskconsulting.fr";
  return {
    rules: [
      {
        userAgent: "*",
        allow: ["/", "/expertises", "/devis", "/contact", "/mentions-legales"],
        disallow: ["/api/"],
      },
    ],
    sitemap: `${base}/sitemap.xml`,
  };
}
