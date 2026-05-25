"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie_consent");
    if (!consent) setVisible(true);
  }, []);

  const accept = () => {
    localStorage.setItem("cookie_consent", "accepted");
    setVisible(false);
  };

  const refuse = () => {
    localStorage.setItem("cookie_consent", "refused");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 sm:p-6">
      <div className="mx-auto max-w-4xl bg-[#0d1626] border border-white/15 rounded-2xl shadow-[0_-4px_40px_rgba(0,0,0,0.6)] p-5 sm:p-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
          {/* Icon + text */}
          <div className="flex items-start gap-3 flex-1 min-w-0">
            <span className="text-2xl shrink-0">🍪</span>
            <div>
              <p className="text-sm text-slate-300 leading-relaxed">
                Nous utilisons uniquement des <strong className="text-white">cookies techniques nécessaires</strong> au fonctionnement du site. Aucun cookie publicitaire ou de tracking.{" "}
                <Link href="/mentions-legales" className="text-orange-400 hover:underline whitespace-nowrap">
                  En savoir plus
                </Link>
              </p>
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3 shrink-0 w-full sm:w-auto">
            <button
              onClick={refuse}
              className="flex-1 sm:flex-none px-4 py-2 rounded-lg border border-white/15 text-sm text-slate-400 font-medium hover:border-white/30 hover:text-white transition-colors whitespace-nowrap"
            >
              Refuser les optionnels
            </button>
            <button
              onClick={accept}
              className="flex-1 sm:flex-none px-5 py-2 rounded-lg text-white text-sm font-bold transition-all hover:opacity-90 whitespace-nowrap"
              style={{ background: "linear-gradient(135deg, #f97316, #dc2626)" }}
            >
              Accepter
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
