import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Audit incendie bâtiment : méthode, livrables et obligations",
  description:
    "Tout savoir sur l'audit incendie : diagnostic de conformité ERP, IGH, ICPE et Code du Travail. Méthode, livrables, plan d'actions. Bureau d'études indépendant.",
  alternates: { canonical: "https://www.si-riskconsulting.fr/audit-incendie" },
  openGraph: {
    title: "Audit incendie bâtiment : méthode et livrables | SI RISKCONSULTING",
    description: "Audit de conformité incendie ERP, IGH, ICPE, Code du Travail. Diagnostic complet, rapport d'audit, plan d'actions priorisé.",
    url: "https://www.si-riskconsulting.fr/audit-incendie",
  },
};

const faqItems = [
  {
    question: "Qu'est-ce qu'un audit incendie ?",
    answer: "Un audit incendie est un diagnostic complet de la conformité réglementaire d'un bâtiment en matière de sécurité incendie. Il comprend la visite des locaux, l'analyse des documents techniques (registre de sécurité, plans, PV de vérification) et la rédaction d'un rapport avec un plan d'actions priorisé.",
  },
  {
    question: "Quand réaliser un audit incendie ?",
    answer: "Un audit incendie est recommandé lors de l'acquisition d'un bâtiment, avant une commission de sécurité, après des travaux de rénovation, lors d'un changement d'affectation, ou simplement pour s'assurer de la conformité des installations. Il est particulièrement important pour les ERP, IGH, ICPE et les sites soumis au Code du Travail.",
  },
  {
    question: "Quelle est la différence entre un audit et un diagnostic incendie ?",
    answer: "Les termes sont souvent utilisés indifféremment. En pratique, un diagnostic peut être plus sommaire (visite rapide, liste des non-conformités sans analyse de fond), tandis qu'un audit est plus complet et méthodique : il inclut l'analyse des documents, la vérification des systèmes actifs (SSI, sprinkler, désenfumage) et un plan d'actions détaillé avec estimation budgétaire.",
  },
  {
    question: "Qui réalise un audit incendie ?",
    answer: "Un audit incendie doit être réalisé par un professionnel qualifié en sécurité incendie : ingénieur prévention incendie, bureau d'études spécialisé ou consultant indépendant. Il est préférable de faire appel à un prestataire indépendant de l'installateur et du bureau de maintenance pour garantir l'objectivité du diagnostic.",
  },
  {
    question: "Quels documents sont nécessaires pour un audit incendie ?",
    answer: "Les documents utiles sont : le registre de sécurité, les plans de masse et de coupe, les PV de vérification périodique des systèmes (SSI, sprinkler, désenfumage, extincteurs), les notices descriptives des installations, les autorisations préfectorales (pour les ICPE), le rapport de la dernière commission de sécurité (pour les ERP).",
  },
];

const deliverables = [
  { icon: "📋", title: "Rapport d'audit détaillé", desc: "Document structuré recensant toutes les non-conformités identifiées avec leur référence réglementaire exacte." },
  { icon: "⚠️", title: "Cartographie des risques", desc: "Hiérarchisation des non-conformités selon leur niveau de criticité (bloquant, majeur, mineur)." },
  { icon: "📊", title: "Plan d'actions priorisé", desc: "Liste des travaux et mesures correctives à mettre en œuvre, classés par priorité et par domaine." },
  { icon: "💰", title: "Estimation budgétaire", desc: "Ordre de grandeur du coût des travaux de mise en conformité pour faciliter la programmation financière." },
  { icon: "📅", title: "Planning de mise en conformité", desc: "Proposition d'un calendrier de réalisation tenant compte des contraintes d'exploitation." },
  { icon: "🔄", title: "Suivi de levée des non-conformités", desc: "Accompagnement optionnel pour vérifier la bonne réalisation des travaux et mettre à jour le registre." },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Accueil", item: "https://www.si-riskconsulting.fr" },
        { "@type": "ListItem", position: 2, name: "Audit incendie", item: "https://www.si-riskconsulting.fr/audit-incendie" },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: faqItems.map(({ question, answer }) => ({
        "@type": "Question",
        name: question,
        acceptedAnswer: { "@type": "Answer", text: answer },
      })),
    },
  ],
};

export default function AuditIncendiePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Header */}
      <section className="bg-[#0a0f1e] pt-28 pb-16 border-b border-white/8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-sm text-slate-500 mb-8">
            <Link href="/" className="hover:text-orange-400 transition-colors">Accueil</Link>
            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            <span className="text-white">Audit incendie</span>
          </nav>
          <span className="text-orange-400 font-semibold text-xs uppercase tracking-widest">Diagnostic · Plan d&apos;actions</span>
          <h1 className="mt-3 text-4xl sm:text-5xl font-black text-white mb-4 leading-tight">
            Audit incendie bâtiment :<br />
            <span style={{ background: "linear-gradient(135deg, #f97316, #dc2626)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              méthode et livrables
            </span>
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl mb-8">
            Diagnostic complet de conformité incendie pour vos bâtiments ERP, IGH, ICPE et Code du Travail.
            Rapport d&apos;audit, cartographie des risques, plan d&apos;actions priorisé et estimation budgétaire.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/devis" className="px-6 py-3 rounded-lg font-bold text-white text-sm transition-all hover:opacity-90" style={{ background: "linear-gradient(135deg, #f97316, #dc2626)" }}>
              Demander un audit
            </Link>
            <Link href="/contact" className="px-6 py-3 rounded-lg bg-white/8 border border-white/15 text-white font-semibold text-sm hover:bg-white/15 transition-colors">
              Nous contacter
            </Link>
          </div>
        </div>
      </section>

      {/* Définition + domaines */}
      <section className="py-16 bg-[#0d1626]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-2xl sm:text-3xl font-black text-white mb-4">
                Qu&apos;est-ce qu&apos;un audit incendie ?
              </h2>
              <p className="text-slate-400 leading-relaxed mb-4">
                Un <strong className="text-white">audit incendie</strong> est un examen indépendant et exhaustif de la conformité
                réglementaire d&apos;un bâtiment en matière de sécurité incendie. Il couvre l&apos;ensemble des dispositions passives
                (compartimentage, désenfumage, dégagements) et actives (SSI, sprinkler, extinction).
              </p>
              <p className="text-slate-400 leading-relaxed mb-4">
                SI RISKCONSULTING réalise des audits de conformité incendie pour tous types de bâtiments :
                ERP (Établissements Recevant du Public), IGH (Immeubles de Grande Hauteur), ICPE (Installations
                Classées) et locaux soumis au Code du Travail.
              </p>
              <p className="text-slate-400 leading-relaxed">
                Le résultat est un <strong className="text-white">rapport d&apos;audit structuré</strong> avec les
                non-conformités classées par criticité et un plan d&apos;actions priorisé, utilisable directement
                pour programmer les travaux de mise en conformité.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { type: "ERP", icon: "🏢", items: ["Classements 1ère à 5ème catégorie", "Types M, N, O, P, R, S, T, U, V, W, X, Y", "Arrêté du 25/06/1980 modifié"] },
                { type: "IGH", icon: "🏗️", items: ["Immeubles > 28m / 50m", "Classe A à GHI", "Arrêté du 18/10/1977 modifié"] },
                { type: "ICPE", icon: "🏭", items: ["Entrepôts 1510", "Industries chimiques", "Arrêtés ministériels ICPE"] },
                { type: "Code du Travail", icon: "🏗️", items: ["BUP – Bâtiments professionnels", "Locaux techniques", "Code du Travail Art. R4216"] },
              ].map(({ type, icon, items }) => (
                <div key={type} className="rounded-xl bg-[#0a0f1e] border border-white/8 p-5">
                  <div className="text-2xl mb-2">{icon}</div>
                  <h3 className="text-white font-bold text-sm mb-2">{type}</h3>
                  <ul className="space-y-1">
                    {items.map((item) => (
                      <li key={item} className="text-slate-500 text-xs">{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Méthode */}
      <section className="py-16 bg-[#0a0f1e]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-orange-400 font-semibold text-xs uppercase tracking-widest">Notre méthode</span>
            <h2 className="mt-3 text-2xl sm:text-3xl font-black text-white">Déroulement de l&apos;audit incendie</h2>
          </div>
          <div className="relative">
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2" />
            <div className="space-y-8">
              {[
                { num: "01", title: "Collecte des documents", desc: "Réception et analyse des plans, registre de sécurité, PV de vérifications périodiques, notices d'installations, rapports de la commission de sécurité." },
                { num: "02", title: "Visite du site", desc: "Inspection complète des locaux : dégagements, issues de secours, compartimentage, désenfumage, installations SSI, sprinkler, extincteurs, éclairage de sécurité." },
                { num: "03", title: "Analyse réglementaire", desc: "Confrontation des constats de visite avec la réglementation applicable (ERP, IGH, ICPE, Code du Travail) et les normes techniques associées." },
                { num: "04", title: "Rédaction du rapport", desc: "Rapport structuré avec toutes les non-conformités référencées, classées par domaine et par niveau de criticité (bloquant / majeur / mineur)." },
                { num: "05", title: "Plan d'actions & budget", desc: "Liste des mesures correctives avec priorités, estimation budgétaire des travaux et proposition de calendrier de mise en conformité." },
              ].map(({ num, title, desc }, i) => (
                <div key={num} className={`flex gap-8 items-start ${i % 2 === 0 ? "flex-row" : "flex-row lg:flex-row-reverse"}`}>
                  <div className="flex-1 rounded-2xl bg-[#0d1626] border border-white/8 p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-3xl font-black" style={{ background: "linear-gradient(135deg, #f97316, #dc2626)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>{num}</span>
                      <h3 className="text-white font-bold text-lg">{title}</h3>
                    </div>
                    <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Livrables */}
      <section className="py-16 bg-[#0d1626]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-orange-400 font-semibold text-xs uppercase tracking-widest">Ce que vous recevez</span>
            <h2 className="mt-3 text-2xl sm:text-3xl font-black text-white">Les livrables de l&apos;audit</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {deliverables.map(({ icon, title, desc }) => (
              <div key={title} className="rounded-2xl bg-[#0a0f1e] border border-white/8 p-6">
                <div className="text-3xl mb-3">{icon}</div>
                <h3 className="text-white font-bold mb-2">{title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-[#0a0f1e]">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-orange-400 font-semibold text-xs uppercase tracking-widest">Questions fréquentes</span>
            <h2 className="mt-3 text-2xl sm:text-3xl font-black text-white">FAQ — Audit incendie</h2>
          </div>
          <div className="space-y-4">
            {faqItems.map(({ question, answer }) => (
              <div key={question} className="rounded-xl bg-[#0d1626] border border-white/8 p-6">
                <h3 className="text-white font-bold mb-2">{question}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Liens internes */}
      <section className="py-12 bg-[#0d1626] border-t border-white/8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-slate-500 text-xs uppercase tracking-widest font-semibold mb-4">Voir aussi</p>
          <div className="flex flex-wrap gap-3">
            {[
              { href: "/coordination-ssi", label: "Coordination SSI" },
              { href: "/moe-ssi", label: "MOE SSI" },
              { href: "/apsad", label: "APSAD" },
              { href: "/expertises", label: "Toutes nos expertises" },
            ].map(({ href, label }) => (
              <Link key={href} href={href} className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-slate-300 text-sm hover:text-orange-400 hover:border-orange-400/30 transition-colors">
                {label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#0a0f1e] border-t border-white/8">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-black text-white mb-4">
            Votre bâtiment est-il en conformité incendie ?
          </h2>
          <p className="text-slate-400 mb-8">
            SI RISKCONSULTING réalise vos audits incendie ERP, IGH, ICPE et Code du Travail, partout en France.
            Rapport d&apos;audit remis sous 2 semaines.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/devis" className="px-7 py-3 rounded-lg font-bold text-white transition-all hover:opacity-90" style={{ background: "linear-gradient(135deg, #f97316, #dc2626)" }}>
              Demander un audit
            </Link>
            <Link href="/contact" className="px-7 py-3 rounded-lg bg-white/8 border border-white/15 text-white font-semibold hover:bg-white/15 transition-colors">
              Nous contacter
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
