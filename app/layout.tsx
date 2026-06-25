import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";
import ScrollToTop from "@/components/ScrollToTop";
import FloatingContact from "@/components/FloatingContact";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.si-riskconsulting.fr"),
  title: {
    default: "SI RISKCONSULTING – Bureau d'études en sécurité incendie",
    template: "%s | SI RISKCONSULTING",
  },
  description:
    "SI RISKCONSULTING, bureau d'études spécialisé en sécurité incendie. Études réglementaires ERP, IGH, Code du travail. Cabinet indépendant en ingénierie prévention incendie.",
  keywords: [
    "sécurité incendie",
    "bureau d'études incendie",
    "ERP",
    "IGH",
    "prévention incendie",
    "étude de sécurité",
    "SI RISKCONSULTING",
    "cabinet incendie",
    "ingénieur prévention",
  ],
  authors: [{ name: "SI RISKCONSULTING" }],
  creator: "SI RISKCONSULTING",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://www.si-riskconsulting.fr",
    siteName: "SI RISKCONSULTING",
    title: "SI RISKCONSULTING – Bureau d'études en sécurité incendie",
    description:
      "Expertise en sécurité incendie pour ERP, IGH et milieu industriel. Études réglementaires, audit, AMO et formation.",
  },
  twitter: {
    card: "summary_large_image",
    title: "SI RISKCONSULTING – Bureau d'études en sécurité incendie",
    description:
      "Expertise en sécurité incendie pour ERP, IGH et milieu industriel.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  verification: {
    google: "xew99152NQiOb7z1cDTfGtRDX3eCbeS3Jrw7FLpw5_g",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "SI RISKCONSULTING",
  url: "https://www.si-riskconsulting.fr",
  logo: "https://www.si-riskconsulting.fr/logo.png",
  description:
    "Bureau d'études indépendant spécialisé en sécurité incendie : CSSI, MOE SSI, AMO, audits et conformité réglementaire ERP, IGH, ICPE.",
  telephone: "+33189629492",
  email: "si-riskconsulting@outlook.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Noisy-le-Grand",
    addressLocality: "Noisy-le-Grand",
    postalCode: "93160",
    addressCountry: "FR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 48.847,
    longitude: 2.55,
  },
  areaServed: {
    "@type": "Country",
    name: "France",
  },
  serviceType: [
    "Coordination SSI",
    "MOE SSI",
    "AMO sécurité incendie",
    "Audit incendie",
    "Conformité réglementaire ERP",
    "Conformité IGH",
    "Conformité ICPE",
    "APSAD",
    "Sprinkler",
    "Désenfumage",
  ],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "19:00",
    },
  ],
  priceRange: "Sur devis",
  sameAs: ["https://www.linkedin.com/in/si-risk-consulting-42a08a35a/"],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" className={`${inter.variable} h-full antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <div id="top" aria-hidden="true" />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <CookieBanner />
        <ScrollToTop />
        <FloatingContact />
      </body>
    </html>
  );
}
