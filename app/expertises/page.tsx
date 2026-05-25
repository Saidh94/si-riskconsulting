import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Nos expertises",
  description:
    "CSSI et MOE SSI, AMO sécurité incendie, audits et analyses de risques, conformité réglementaire ERP/IGH/ICPE. Toutes les prestations de SI RISKCONSULTING.",
  alternates: { canonical: "https://www.si-riskconsulting.fr/expertises" },
};

const expertises = [
  {
    number: "01",
    title: "CSSI & MOE SSI",
    tag: "Coordination · Maîtrise d'Œuvre",
    desc: "Notre cabinet assure la mission de Coordinateur Sécurité des Systèmes Incendie (CSSI) et de Maître d'Œuvre SSI pour vos opérations de construction neuve ou de réhabilitation.",
    details: [
      "Analyse des besoins SSI dès la phase conception",
      "Coordination des intervenants SSI (concepteur, installateur, vérificateur)",
      "Rédaction du cahier des charges SSI",
      "Contrôle de la conformité des installations SSI",
      "Assistance lors des essais et réception du SSI",
      "Élaboration du dossier d'identité du SSI (DISS)",
    ],
  },
  {
    number: "02",
    title: "AMO Sécurité Incendie",
    tag: "Assistance à Maîtrise d'Ouvrage",
    desc: "Nous défendons les intérêts du maître d'ouvrage en matière de sécurité incendie tout au long du projet : programmation, conception, réalisation, réception.",
    details: [
      "Analyse des documents de conception (PC, APS, APD, PRO, EXE)",
      "Vérification de la conformité réglementaire incendie",
      "Interface avec les services instructeurs et commissions de sécurité",
      "Suivi de chantier et réception des travaux",
      "Aide à la constitution du dossier d'ouverture au public",
      "Conseil et assistance lors des passages en commission",
    ],
  },
  {
    number: "03",
    title: "Audits & Analyses de risques",
    tag: "Diagnostic · Plan d'actions",
    desc: "Nous réalisons des diagnostics complets de vos bâtiments existants, identifions les non-conformités et proposons un plan d'actions priorisé et budgétisé.",
    details: [
      "Visite complète et relevé de l'existant",
      "Analyse des registres de sécurité et documents techniques",
      "Rapport de diagnostic détaillé avec cartographie des risques",
      "Hiérarchisation des non-conformités par criticité",
      "Plan d'actions avec estimation budgétaire associée",
      "Suivi de la mise en œuvre et levée des non-conformités",
    ],
  },
  {
    number: "04",
    title: "Conformité Réglementaire",
    tag: "ERP · IGH · Code du Travail · ICPE",
    desc: "Nous vous accompagnons dans toutes vos démarches de mise en conformité incendie : dossiers de sécurité, commissions, notices, prescriptions.",
    details: [
      "Vérification de la conformité ERP, IGH, Code du travail, ICPE",
      "Montage des dossiers de demande d'autorisation de travaux",
      "Rédaction des notices de sécurité incendie",
      "Préparation et représentation en commission de sécurité",
      "Suivi des prescriptions imposées par la commission",
      "Mise à jour et gestion du dossier d'établissement",
    ],
  },
];

export default function ExpertisesPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-[#0a0f1e] pt-28 pb-16 border-b border-white/8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-sm text-slate-500 mb-8">
            <Link href="/" className="hover:text-orange-400 transition-colors">Accueil</Link>
            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <span className="text-white">Expertises</span>
          </nav>
          <span className="text-orange-400 font-semibold text-xs uppercase tracking-widest">Nos expertises</span>
          <h1 className="mt-3 text-4xl sm:text-5xl font-black text-white mb-4">
            Prestations & missions
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl">
            Conseil, coordination SSI, MOE SSI, audits et conformité réglementaire —
            un spectre complet pour tous vos projets incendie.
          </p>
        </div>
      </section>

      {/* Expertises list */}
      <section className="py-20 bg-[#0d1626]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {expertises.map(({ number, title, tag, desc, details }, idx) => (
              <div
                key={number}
                className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start"
              >
                <div className={idx % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="text-7xl font-black leading-none mb-4 select-none"
                    style={{ background: "linear-gradient(135deg, #f97316, #dc2626)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                    {number}
                  </div>
                  <span className="inline-block px-3 py-1 rounded-full bg-orange-500/15 border border-orange-500/25 text-orange-400 text-xs font-medium mb-3">
                    {tag}
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-black text-white mb-4">
                    {title}
                  </h2>
                  <p className="text-slate-400 leading-relaxed mb-6">{desc}</p>
                  <Link
                    href="/devis"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-semibold text-white text-sm transition-all hover:opacity-90"
                    style={{ background: "linear-gradient(135deg, #f97316, #dc2626)" }}
                  >
                    Demander un devis
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>

                <div className={`rounded-2xl bg-[#0a0f1e] border border-white/8 p-8 ${idx % 2 === 1 ? "lg:order-1" : ""}`}>
                  <h3 className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-5">
                    Ce que comprend la prestation
                  </h3>
                  <ul className="space-y-3">
                    {details.map((d) => (
                      <li key={d} className="flex items-start gap-3 text-sm text-slate-300">
                        <span className="mt-0.5 w-5 h-5 rounded-full flex items-center justify-center shrink-0 bg-orange-500/20 text-orange-400">
                          <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        </span>
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#0a0f1e] border-t border-white/8">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-black text-white mb-4">
            Besoin d&apos;une expertise sur mesure ?
          </h2>
          <p className="text-slate-400 mb-8">
            Chaque projet est unique. Décrivez-nous votre besoin, nous vous répondons
            sous 24h avec une proposition adaptée.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/devis"
              className="px-7 py-3 rounded-lg font-bold text-white transition-all hover:opacity-90"
              style={{ background: "linear-gradient(135deg, #f97316, #dc2626)" }}
            >
              Demander un devis
            </Link>
            <Link
              href="/contact"
              className="px-7 py-3 rounded-lg bg-white/8 border border-white/15 text-white font-semibold hover:bg-white/15 transition-colors"
            >
              Nous contacter
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
