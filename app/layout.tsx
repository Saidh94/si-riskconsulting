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
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" className={`${inter.variable} h-full antialiased`}>
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
