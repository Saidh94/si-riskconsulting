import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#060c18] text-slate-400 border-t border-white/8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <span
                className="flex items-center justify-center w-9 h-9 rounded-lg text-white font-black text-sm"
                style={{ background: "linear-gradient(135deg, #f97316, #dc2626)" }}
              >
                SI
              </span>
              <span className="text-white font-black text-sm tracking-tight">
                <span className="text-orange-400">RISK</span>CONSULTING
              </span>
            </div>
            <p className="text-sm leading-relaxed text-slate-500">
              Bureau d&apos;études spécialisé en sécurité incendie. Conseil, Coordination SSI,
              MOE SSI, audits réglementaires.
            </p>
            <div className="flex items-center gap-2 text-xs text-slate-600">
              <svg className="w-3.5 h-3.5 text-orange-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>Noisy-le-Grand (93) · Interventions dans toute la France</span>
            </div>
            <a
              href="https://www.linkedin.com/in/si-risk-consulting-42a08a35a/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs text-slate-500 hover:text-[#0A66C2] transition-colors"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              Suivre sur LinkedIn
            </a>
            <a
              href="https://www.linkedin.com/in/si-risk-consulting-42a08a35a/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs text-slate-500 hover:text-[#0A66C2] transition-colors"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              Suivre sur LinkedIn
            </a>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-white font-semibold text-xs mb-4 uppercase tracking-widest">
              Navigation
            </h3>
            <ul className="space-y-2 text-sm">
              {[
                { href: "/", label: "Accueil" },
                { href: "/expertises", label: "Nos expertises" },
                { href: "/devis", label: "Demander un devis" },
                { href: "/contact", label: "Contact" },
                { href: "/mentions-legales", label: "Mentions légales" },
                { href: "/politique-de-confidentialite", label: "Politique de confidentialité" },
              ].map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className="text-slate-500 hover:text-orange-400 transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold text-xs mb-4 uppercase tracking-widest">
              Contact
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 mt-0.5 text-orange-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:si-riskconsulting@outlook.com" className="text-slate-500 hover:text-orange-400 transition-colors break-all">
                  si-riskconsulting@outlook.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 mt-0.5 text-orange-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <div className="flex flex-col gap-0.5">
                  <a href="tel:+33189629492" className="text-slate-500 hover:text-orange-400 transition-colors">01 89 62 94 92</a>
                  <a href="tel:+33780992417" className="text-slate-500 hover:text-orange-400 transition-colors">07 80 99 24 17</a>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 mt-0.5 text-orange-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div>
                  <span className="text-slate-500">Noisy-le-Grand (93)</span>
                  <span className="block text-xs text-slate-600">Interventions sur toute la France</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-600">
          <p>© {new Date().getFullYear()} SI RISKCONSULTING · Noisy-le-Grand (93) · Tous droits réservés.</p>
          <div className="flex items-center gap-4">
            <Link href="/mentions-legales" className="hover:text-slate-400 transition-colors">
              Mentions légales
            </Link>
            <span>·</span>
            <Link href="/politique-de-confidentialite" className="hover:text-slate-400 transition-colors">
              Politique de confidentialité
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
