import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "MOE SSI : Maîtrise d'Œuvre SSI, missions et prestations",
  description:
    "La MOE SSI (Maîtrise d'Œuvre Système de Sécurité Incendie) : conception technique, suivi de chantier, réception. Bureau d'études SSI indépendant en Île-de-France.",
  alternates: { canonical: "https://www.si-riskconsulting.fr/moe-ssi" },
  openGraph: {
    title: "MOE SSI : Maîtrise d'Œuvre SSI | SI RISKCONSULTING",
    description: "Prestations de Maîtrise d'Œuvre SSI : conception, suivi de chantier, réception des systèmes de sécurité incendie.",
    url: "https://www.si-riskconsulting.fr/moe-ssi",
  },
};

const faqItems = [
  {
    question: "Qu'est-ce que la MOE SSI ?",
    answer: "La MOE SSI (Maîtrise d'Œuvre Système de Sécurité Incendie) est une mission d'ingénierie qui consiste à concevoir, diriger et contrôler la réalisation d'un système SSI. Le maître d'œuvre SSI est mandaté par le maître d'ouvrage pour définir les solutions techniques et superviser leur mise en œuvre.",
  },
  {
    question: "Quelle est la différence entre MOE SSI et CSSI ?",
    answer: "Le MOE SSI conçoit et dirige la réalisation du système SSI (dimensionnement, plans d'exécution, CCTP). Le CSSI (Coordinateur SSI) assure la cohérence entre les différents intervenants et vérifie que le résultat final est conforme au CCF SSI. Les deux missions sont souvent assurées par le même bureau d'études mais restent distinctes.",
  },
  {
    question: "La MOE SSI est-elle obligatoire ?",
    answer: "La MOE SSI n'est pas une mission réglementairement obligatoire au même titre que la mission CSSI. Cependant, elle est fortement recommandée pour les projets complexes (SSI catégorie A, ERP de 1ère et 2ème catégorie, IGH) car elle garantit la qualité technique des installations et facilite les essais et la réception.",
  },
  {
    question: "Quels bâtiments sont concernés par la MOE SSI ?",
    answer: "La MOE SSI est pertinente pour tous les bâtiments neufs ou en réhabilitation nécessitant un SSI de catégorie A ou B : ERP de 1ère à 3ème catégorie, IGH, ICPE à risque élevé, grands entrepôts logistiques, établissements de santé.",
  },
];

export default function MOESSIPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              { "@type": "BreadcrumbList", itemListElement: [
                { "@type": "ListItem", position: 1, name: "Accueil", item: "https://www.si-riskconsulting.fr" },
                { "@type": "ListItem", position: 2, name: "MOE SSI", item: "https://www.si-riskconsulting.fr/moe-ssi" },
              ]},
              { "@type": "FAQPage", mainEntity: faqItems.map(({ question, answer }) => ({
                "@type": "Question", name: question,
                acceptedAnswer: { "@type": "Answer", text: answer },
              }))},
            ],
          }),
        }}
      />

      {/* Header */}
      <section className="bg-[#0a0f1e] pt-28 pb-16 border-b border-white/8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-sm text-slate-500 mb-8">
            <Link href="/" className="hover:text-orange-400 transition-colors">Accueil</Link>
            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            <span className="text-white">MOE SSI</span>
          </nav>
          <span className="text-orange-400 font-semibold text-xs uppercase tracking-widest">Maîtrise d&apos;Œuvre · Conception SSI</span>
          <h1 className="mt-3 text-4xl sm:text-5xl font-black text-white mb-4 leading-tight">
            MOE SSI :<br />
            <span style={{ background: "linear-gradient(135deg, #f97316, #dc2626)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Maîtrise d&apos;Œuvre SSI
            </span>
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl mb-8">
            Conception technique, rédaction des pièces de marché, suivi de chantier et réception
            des Systèmes de Sécurité Incendie (SSI) pour vos opérations de construction et réhabilitation.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/devis" className="px-6 py-3 rounded-lg font-bold text-white text-sm transition-all hover:opacity-90" style={{ background: "linear-gradient(135deg, #f97316, #dc2626)" }}>
              Demander un devis
            </Link>
            <Link href="/contact" className="px-6 py-3 rounded-lg bg-white/8 border border-white/15 text-white font-semibold text-sm hover:bg-white/15 transition-colors">
              Nous contacter
            </Link>
          </div>
        </div>
      </section>

      {/* Définition */}
      <section className="py-16 bg-[#0d1626]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-2xl sm:text-3xl font-black text-white mb-4">Qu&apos;est-ce que la MOE SSI ?</h2>
              <p className="text-slate-400 leading-relaxed mb-4">
                La <strong className="text-white">Maîtrise d&apos;Œuvre SSI</strong> est une mission d&apos;ingénierie de conception et
                de suivi d&apos;exécution des Systèmes de Sécurité Incendie. Elle est assurée par un bureau d&apos;études spécialisé,
                mandaté par le maître d&apos;ouvrage pour définir et faire réaliser le système SSI le mieux adapté à son projet.
              </p>
              <p className="text-slate-400 leading-relaxed mb-4">
                La mission couvre l&apos;ensemble des phases du projet : de l&apos;esquisse aux essais de réception,
                en passant par la rédaction du <strong className="text-white">CCTP SSI</strong> (cahier des clauses techniques
                particulières), le dépouillement des offres et le suivi de chantier.
              </p>
              <p className="text-slate-400 leading-relaxed">
                Elle est souvent couplée avec la mission de <strong className="text-white">Coordination SSI (CSSI)</strong>
                pour une prise en charge globale de la maîtrise d&apos;œuvre SSI du projet.
              </p>
            </div>
            <div className="rounded-2xl bg-[#0a0f1e] border border-white/8 p-8">
              <h3 className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-6">Missions couvertes</h3>
              <ul className="space-y-3">
                {[
                  "Définition des besoins et niveaux SSI requis",
                  "Rédaction du CCTP SSI (pièces de marché)",
                  "Assistance au dépouillement des offres installateurs",
                  "Visa des plans d'exécution",
                  "Direction de l'exécution des travaux SSI",
                  "Participation aux essais et réception du SSI",
                  "Vérification des DOE (dossiers des ouvrages exécutés)",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-slate-300">
                    <span className="mt-0.5 w-5 h-5 rounded-full flex items-center justify-center shrink-0 bg-orange-500/20 text-orange-400">
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

      {/* Phases */}
      <section className="py-16 bg-[#0a0f1e]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-orange-400 font-semibold text-xs uppercase tracking-widest">Phases de mission</span>
            <h2 className="mt-3 text-2xl sm:text-3xl font-black text-white">Déroulement de la MOE SSI</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { phase: "PRO / DCE", title: "Conception", items: ["Étude du programme", "Choix du niveau SSI", "Rédaction CCTP + DPGF"] },
              { phase: "ACT", title: "Assistance consultation", items: ["Analyse des offres", "Négociation technique", "Mise au point du marché"] },
              { phase: "VISA / DET", title: "Exécution", items: ["Visa plans d'exécution", "Suivi de chantier SSI", "Levée des réserves"] },
              { phase: "AOR", title: "Réception", items: ["Essais SSI", "Réception des travaux", "Vérification des DOE"] },
            ].map(({ phase, title, items }) => (
              <div key={phase} className="rounded-2xl bg-[#0d1626] border border-white/8 p-6">
                <span className="inline-block px-3 py-1 rounded-full bg-orange-500/15 border border-orange-500/25 text-orange-400 text-xs font-bold mb-3">
                  {phase}
                </span>
                <h3 className="text-white font-bold text-lg mb-3">{title}</h3>
                <ul className="space-y-2">
                  {items.map((item) => (
                    <li key={item} className="text-slate-400 text-sm flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-orange-400 shrink-0" />
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
      <section className="py-16 bg-[#0d1626]">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-orange-400 font-semibold text-xs uppercase tracking-widest">Questions fréquentes</span>
            <h2 className="mt-3 text-2xl sm:text-3xl font-black text-white">FAQ — MOE SSI</h2>
          </div>
          <div className="space-y-4">
            {faqItems.map(({ question, answer }) => (
              <div key={question} className="rounded-xl bg-[#0a0f1e] border border-white/8 p-6">
                <h3 className="text-white font-bold mb-2">{question}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Liens internes */}
      <section className="py-12 bg-[#0a0f1e] border-t border-white/8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-slate-500 text-xs uppercase tracking-widest font-semibold mb-4">Voir aussi</p>
          <div className="flex flex-wrap gap-3">
            {[
              { href: "/coordination-ssi", label: "Coordination SSI" },
              { href: "/audit-incendie", label: "Audit incendie" },
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
      <section className="py-16 bg-[#0d1626] border-t border-white/8">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-black text-white mb-4">
            Un projet SSI à concevoir ?
          </h2>
          <p className="text-slate-400 mb-8">
            SI RISKCONSULTING assure votre mission de MOE SSI de la conception à la réception,
            en toute indépendance vis-à-vis des entreprises installatrices.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/devis" className="px-7 py-3 rounded-lg font-bold text-white transition-all hover:opacity-90" style={{ background: "linear-gradient(135deg, #f97316, #dc2626)" }}>
              Demander un devis
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
