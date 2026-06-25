"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function MerciPage() {
  // Événement de conversion pour Google Analytics 4
  useEffect(() => {
    if (typeof window !== "undefined" && (window as Window & { gtag?: Function }).gtag) {
      (window as Window & { gtag?: Function }).gtag?.("event", "conversion", {
        event_category: "formulaire",
        event_label: "demande_envoyee",
      });
    }
  }, []);

  return (
    <section className="min-h-[80vh] bg-[#0a0f1e] flex items-center justify-center px-4">
      <div className="text-center max-w-lg">
        {/* Icône succès */}
        <div className="mx-auto mb-6 w-20 h-20 rounded-full flex items-center justify-center"
          style={{ background: "linear-gradient(135deg, rgba(249,115,22,0.15), rgba(220,38,38,0.15))", border: "2px solid rgba(249,115,22,0.3)" }}>
          <svg className="w-10 h-10 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
          </svg>
        </div>

        <h1 className="text-3xl sm:text-4xl font-black text-white mb-4">
          Message envoyé !
        </h1>
        <p className="text-slate-400 text-lg mb-2">
          Merci pour votre demande.
        </p>
        <p className="text-slate-500 mb-10 leading-relaxed">
          Notre équipe vous répond sous <strong className="text-white">24 heures ouvrées</strong>.
          Pensez à vérifier vos courriers indésirables si vous ne recevez pas de réponse.
        </p>

        {/* Infos de contact directes */}
        <div className="rounded-xl bg-[#0d1626] border border-white/8 p-6 mb-8 text-left space-y-3">
          <p className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-4">Nous contacter directement</p>
          <a href="tel:+33189629492" className="flex items-center gap-3 text-slate-300 hover:text-orange-400 transition-colors">
            <svg className="w-4 h-4 text-orange-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <span className="text-sm">01 89 62 94 92</span>
          </a>
          <a href="tel:+33780992417" className="flex items-center gap-3 text-slate-300 hover:text-orange-400 transition-colors">
            <svg className="w-4 h-4 text-orange-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
            <span className="text-sm">07 80 99 24 17</span>
          </a>
          <a href="mailto:si-riskconsulting@outlook.com" className="flex items-center gap-3 text-slate-300 hover:text-orange-400 transition-colors">
            <svg className="w-4 h-4 text-orange-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <span className="text-sm">si-riskconsulting@outlook.com</span>
          </a>
        </div>

        <div className="flex flex-wrap gap-4 justify-center">
          <Link href="/" className="px-6 py-3 rounded-lg font-bold text-white transition-all hover:opacity-90"
            style={{ background: "linear-gradient(135deg, #f97316, #dc2626)" }}>
            Retour à l&apos;accueil
          </Link>
          <Link href="/expertises" className="px-6 py-3 rounded-lg bg-white/8 border border-white/15 text-white font-semibold hover:bg-white/15 transition-colors">
            Nos expertises
          </Link>
        </div>
      </div>
    </section>
  );
}
