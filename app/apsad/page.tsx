import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "APSAD sécurité incendie : guide complet des règles et certifications",
  description:
    "Guide complet des référentiels en sécurité incendie : APSAD R1 (sprinkler), R7 (détection), R13 (gaz), D9 (besoins en eau), NF S 61-933 (maintenance SSI), certifications I7/F7. Bureau d'études indépendant.",
  alternates: { canonical: "https://www.si-riskconsulting.fr/apsad" },
  openGraph: {
    title: "APSAD sécurité incendie : guide complet | SI RISKCONSULTING",
    description: "Tout savoir sur les règles APSAD R1, R7, R13, D9 et la certification APSAD pour vos installations de sécurité incendie.",
    url: "https://www.si-riskconsulting.fr/apsad",
  },
};

const faqItems = [
  {
    question: "Qu'est-ce que l'APSAD ?",
    answer: "L'APSAD (Assemblée Plénière des Sociétés d'Assurances Dommages) est un organisme qui émet des règles techniques et des certifications pour la prévention incendie. Les règles APSAD sont souvent exigées par les assureurs des sites industriels et des entrepôts logistiques.",
  },
  {
    question: "La certification APSAD est-elle obligatoire ?",
    answer: "La certification APSAD n'est pas obligatoire réglementairement au sens du Code de la construction. En revanche, elle peut être imposée contractuellement par les assureurs comme condition de couverture, ou exigée dans les contrats de bail de certains entrepôts.",
  },
  {
    question: "Quelle est la différence entre APSAD et NF ?",
    answer: "Les règles APSAD sont émises par les assureurs via le CNPP, tandis que les normes NF sont publiées par l'AFNOR. Dans certains cas, une règle APSAD et une norme NF couvrent le même système (ex. APSAD R7 et NF S61-930 pour la détection incendie). Les règles APSAD sont souvent plus exigeantes que la réglementation minimale.",
  },
  {
    question: "Qu'est-ce que la règle APSAD R1 ?",
    answer: "La règle APSAD R1 définit les conditions d'installation des systèmes sprinkler (extinction automatique à eau). Elle fixe les densités d'arrosage, les hauteurs de stockage, les classes de risque et les conditions de mise en œuvre selon le type de bâtiment et d'activité.",
  },
  {
    question: "Combien coûte un audit APSAD ?",
    answer: "Le coût d'un audit APSAD dépend de la surface du site, du nombre de systèmes à vérifier et des non-conformités identifiées. Contactez SI RISKCONSULTING pour un devis personnalisé.",
  },
];

const rules = [
  { ref: "R1", title: "Sprinkler", desc: "Conditions d'installation des systèmes d'extinction automatique à eau (sprinkler). Classement des risques, densités d'arrosage, surfaces protégées.", color: "from-orange-600 to-red-600" },
  { ref: "R7", title: "Détection incendie", desc: "Systèmes de détection incendie (SDI). Implantation des détecteurs, câblage, tableaux de signalisation, interactions avec le SSI.", color: "from-orange-600 to-red-600" },
  { ref: "R13", title: "Extinction gaz", desc: "Systèmes d'extinction automatique à gaz. Conditions d'emploi, dimensionnement, confinement des locaux protégés.", color: "from-orange-600 to-red-600" },
  { ref: "D9", title: "Besoins en eau", desc: "Guide de calcul des besoins en eau pour les installations sprinkler : débits, réserves, pressions. Document de référence pour le dimensionnement hydraulique.", color: "from-orange-600 to-red-600" },
  { ref: "NF S 61-933", title: "Maintenance SSI", desc: "Norme AFNOR définissant les règles de maintenance et d'exploitation des Systèmes de Sécurité Incendie (SSI). Fréquences, opérations requises, niveaux d'intervention.", color: "from-orange-600 to-red-600" },
  { ref: "I7 / F7", title: "Certifications APSAD", desc: "Certifications APSAD des entreprises de maintenance : I7 pour les installateurs et mainteneurs sprinkler, F7 pour la détection incendie (SDI). Exigées par les assureurs.", color: "from-orange-600 to-red-600" },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Accueil", item: "https://www.si-riskconsulting.fr" },
        { "@type": "ListItem", position: 2, name: "APSAD", item: "https://www.si-riskconsulting.fr/apsad" },
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

export default function APSADPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Header */}
      <section className="bg-[#0a0f1e] pt-28 pb-16 border-b border-white/8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-sm text-slate-500 mb-8">
            <Link href="/" className="hover:text-orange-400 transition-colors">Accueil</Link>
            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            <span className="text-white">APSAD</span>
          </nav>
          <span className="text-orange-400 font-semibold text-xs uppercase tracking-widest">Référentiels assureurs · CNPP</span>
          <h1 className="mt-3 text-4xl sm:text-5xl font-black text-white mb-4 leading-tight">
            APSAD sécurité incendie :<br />
            <span style={{ background: "linear-gradient(135deg, #f97316, #dc2626)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              guide complet des règles
            </span>
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl mb-8">
            Les règles APSAD (R1, R7, R13, D9), les normes AFNOR (NF S 61-933) et les certifications (I7, F7)
            constituent les référentiels de protection incendie exigés par les assureurs pour les sites industriels,
            entrepôts logistiques et bâtiments à risque.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/devis" className="px-6 py-3 rounded-lg font-bold text-white text-sm transition-all hover:opacity-90" style={{ background: "linear-gradient(135deg, #f97316, #dc2626)" }}>
              Demander un audit APSAD
            </Link>
            <Link href="/contact" className="px-6 py-3 rounded-lg bg-white/8 border border-white/15 text-white font-semibold text-sm hover:bg-white/15 transition-colors">
              Nous contacter
            </Link>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 bg-[#0d1626]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl font-black text-white mb-4">Qu&apos;est-ce que l&apos;APSAD ?</h2>
              <p className="text-slate-400 leading-relaxed mb-4">
                L&apos;<strong className="text-white">APSAD</strong> (Assemblée Plénière des Sociétés d&apos;Assurances Dommages)
                est l&apos;organisme historique des assureurs français qui a mis en place un ensemble de <strong className="text-white">règles
                techniques de protection incendie</strong> et un système de certification des installateurs.
              </p>
              <p className="text-slate-400 leading-relaxed mb-4">
                Ces règles, aujourd&apos;hui gérées par le <strong className="text-white">CNPP (Centre National de Prévention et de Protection)</strong>,
                définissent les conditions d&apos;installation, de maintenance et de vérification des systèmes de protection incendie :
                sprinklers, détection, extinction à gaz, RIA...
              </p>
              <p className="text-slate-400 leading-relaxed">
                Elles sont <strong className="text-white">souvent plus exigeantes</strong> que la réglementation minimale (Code de la
                construction, arrêtés ERP) et constituent une condition incontournable pour assurer des sites industriels et logistiques
                à risque élevé.
              </p>
            </div>
            <div className="rounded-2xl bg-[#0a0f1e] border border-white/8 p-8">
              <h3 className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-6">Secteurs concernés</h3>
              <ul className="space-y-3">
                {[
                  "Entrepôts logistiques (ICPE 1510)",
                  "Sites industriels à risque élevé",
                  "Data centers et salles informatiques",
                  "Parkings et locaux de charge",
                  "ERP de grande capacité",
                  "IGH à usage de bureaux ou d'habitation",
                  "Bâtiments à stockage de lithium-ion",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-slate-300">
                    <span className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 bg-orange-500/20 text-orange-400">
                      <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Règles APSAD */}
      <section className="py-16 bg-[#0a0f1e]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-orange-400 font-semibold text-xs uppercase tracking-widest">Référentiels</span>
            <h2 className="mt-3 text-2xl sm:text-3xl font-black text-white">Référentiels et normes</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rules.map(({ ref, title, desc }) => (
              <div key={ref} className="rounded-2xl bg-[#0d1626] border border-white/8 p-6">
                <div className="inline-flex items-center gap-2 mb-4">
                  <span className="px-3 py-1 rounded-full text-white text-xs font-black" style={{ background: "linear-gradient(135deg, #f97316, #dc2626)" }}>
                    {ref}
                  </span>
                </div>
                <h3 className="text-white font-bold text-lg mb-2">{title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Notre prestation */}
      <section className="py-16 bg-[#0d1626]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-orange-400 font-semibold text-xs uppercase tracking-widest">Notre prestation</span>
          <h2 className="mt-3 text-2xl sm:text-3xl font-black text-white mb-8">
            Accompagnement APSAD par SI RISKCONSULTING
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: "Audit APSAD existant", items: ["Vérification de la conformité des installations aux règles APSAD applicables", "Identification des écarts et non-conformités", "Rapport d'audit avec plan d'actions priorisé", "Estimation budgétaire des travaux de mise en conformité"] },
              { title: "Assistance projet APSAD", items: ["Analyse des exigences assureurs dès la conception", "Vérification des études de l'installateur (R1, R7, R13)", "Interface avec le bureau de contrôle et l'assureur", "Assistance lors des inspections APSAD"] },
            ].map(({ title, items }) => (
              <div key={title} className="rounded-2xl bg-[#0a0f1e] border border-white/8 p-8">
                <h3 className="text-white font-bold text-xl mb-4">{title}</h3>
                <ul className="space-y-3">
                  {items.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-slate-300">
                      <span className="mt-0.5 w-5 h-5 rounded-full flex items-center justify-center shrink-0 bg-orange-500/20 text-orange-400">
                        <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
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
            <h2 className="mt-3 text-2xl sm:text-3xl font-black text-white">FAQ — APSAD</h2>
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
              { href: "/sprinkler", label: "Sprinkler" },
              { href: "/audit-incendie", label: "Audit incendie" },
              { href: "/coordination-ssi", label: "Coordination SSI" },
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
            Votre site est-il conforme aux règles APSAD ?
          </h2>
          <p className="text-slate-400 mb-8">
            SI RISKCONSULTING réalise vos audits APSAD et vous accompagne dans la mise en conformité
            de vos installations incendie, en toute indépendance vis-à-vis des installateurs.
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
