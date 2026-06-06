import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page introuvable – SI RISKCONSULTING",
  robots: { index: false },
};

export default function NotFound() {
  return (
    <section className="min-h-[80vh] bg-[#0a0f1e] flex items-center justify-center px-4">
      <div className="text-center max-w-lg">
        <div
          className="text-[120px] font-black leading-none mb-4 select-none"
          style={{
            background: "linear-gradient(135deg, #f97316, #dc2626)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          404
        </div>
        <h1 className="text-2xl sm:text-3xl font-black text-white mb-4">
          Page introuvable
        </h1>
        <p className="text-slate-400 mb-8 leading-relaxed">
          La page que vous recherchez n&apos;existe pas ou a été déplacée.
          Retournez à l&apos;accueil ou consultez nos expertises.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link
            href="/"
            className="px-6 py-3 rounded-lg font-bold text-white transition-all hover:opacity-90"
            style={{ background: "linear-gradient(135deg, #f97316, #dc2626)" }}
          >
            Retour à l&apos;accueil
          </Link>
          <Link
            href="/contact"
            className="px-6 py-3 rounded-lg bg-white/8 border border-white/15 text-white font-semibold hover:bg-white/15 transition-colors"
          >
            Nous contacter
          </Link>
        </div>
      </div>
    </section>
  );
}
