import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sprinkler : extinction automatique à eau, réglementation et APSAD R1",
  description:
    "Guide complet sur les systèmes sprinkler (extinction automatique à eau) : réglementation, APSAD R1, classes de risques, installation et vérification.",
  alternates: { canonical: "https://www.si-riskconsulting.fr/sprinkler" },
  openGraph: {
    title: "Sprinkler : réglementation et APSAD R1 | SI RISKCONSULTING",
    description: "Tout savoir sur les systèmes sprinkler : APSAD R1, classes de risques, installation, vérification périodique.",
    url: "https://www.si-riskconsulting.fr/sprinkler",
  },
};

const faqItems = [
  {
    question: "Quand un système sprinkler est-il obligatoire ?",
    answer: "Le sprinkler est obligatoire réglementairement dans certains ERP de grande capacité (type M de 1ère catégorie, type R, certains type O), les IGH de grande hauteur, les ICPE entrepôts (rubrique 1510 au-dessus de certains seuils). Il peut aussi être exigé par les assureurs indépendamment de la réglementation.",
  },
  {
    question: "Qu'est-ce que la règle APSAD R1 ?",
    answer: "La règle APSAD R1 définit les conditions d'installation des systèmes sprinkler à eau. Elle classe les risques (ordinaires GO1 à GO4, industriels spéciaux) et fixe pour chacun les densités d'arrosage, les surfaces maximales couvertes par poste, les conditions de stockage. Elle est le référentiel principal des assureurs.",
  },
  {
    question: "Quelle est la durée de vie d'un système sprinkler ?",
    answer: "Un système sprinkler correctement entretenu peut fonctionner pendant 25 à 50 ans. Les têtes sprinkler elles-mêmes ont une durée de vie garantie par le fabricant (généralement 20 ans pour les têtes à bulbe rapide). La maintenance doit être assurée par une entreprise certifiée APSAD I7, avec des vérifications périodiques annuelles.",
  },
  {
    question: "Peut-on installer des rayonnages hauts dans un entrepôt sprinklerisé ?",
    answer: "Oui, mais sous conditions strictes. La règle APSAD R1 et les arrêtés ICPE 1510 imposent des dispositions spécifiques pour le stockage en rayonnages hauts : sprinklers intermédiaires entre les niveaux de stockage, classes de risques spécifiques. Une étude technique est nécessaire.",
  },
];

export default function SprinklerPage() {
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
                { "@type": "ListItem", position: 2, name: "Sprinkler", item: "https://www.si-riskconsulting.fr/sprinkler" },
              ]},
              { "@type": "FAQPage", mainEntity: faqItems.map(({ question, answer }) => ({
                "@type": "Question", name: question,
                acceptedAnswer: { "@type": "Answer", text: answer },
              }))},
            ],
          }),
        }}
      />

      <section className="bg-[#0a0f1e] pt-28 pb-16 border-b border-white/8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-sm text-slate-500 mb-8">
            <Link href="/" className="hover:text-orange-400 transition-colors">Accueil</Link>
            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            <span className="text-white">Sprinkler</span>
          </nav>
          <span className="text-orange-400 font-semibold text-xs uppercase tracking-widest">Extinction automatique · APSAD R1</span>
          <h1 className="mt-3 text-4xl sm:text-5xl font-black text-white mb-4 leading-tight">
            Sprinkler :<br />
            <span style={{ background: "linear-gradient(135deg, #f97316, #dc2626)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              extinction automatique à eau
            </span>
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl mb-8">
            Principe, réglementation, règle APSAD R1, classes de risques, obligations de vérification :
            tout ce qu&apos;il faut savoir sur les systèmes sprinkler pour vos entrepôts, industries et ERP.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/devis" className="px-6 py-3 rounded-lg font-bold text-white text-sm transition-all hover:opacity-90" style={{ background: "linear-gradient(135deg, #f97316, #dc2626)" }}>
              Demander un audit sprinkler
            </Link>
            <Link href="/apsad" className="px-6 py-3 rounded-lg bg-white/8 border border-white/15 text-white font-semibold text-sm hover:bg-white/15 transition-colors">
              Voir les règles APSAD
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#0d1626]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-2xl sm:text-3xl font-black text-white mb-4">Comment fonctionne un sprinkler ?</h2>
              <p className="text-slate-400 leading-relaxed mb-4">
                Un système <strong className="text-white">sprinkler</strong> (extinction automatique à eau) est composé d&apos;un réseau
                de canalisations sous pression alimentant des têtes sprinkler thermosensibles. En cas d&apos;incendie, la chaleur fait
                éclater le bulbe de la tête la plus proche du foyer, déclenchant l&apos;arrosage localement.
              </p>
              <p className="text-slate-400 leading-relaxed mb-4">
                À la différence des idées reçues, <strong className="text-white">toutes les têtes ne s&apos;ouvrent pas simultanément</strong> :
                seules celles directement exposées à la chaleur s&apos;activent, limitant ainsi les dommages causés par l&apos;eau.
              </p>
              <p className="text-slate-400 leading-relaxed">
                Le système est relié à une centrale SDI et déclenche une alarme sonore et lumineuse. Il est
                dimensionné selon la <strong className="text-white">règle APSAD R1</strong> en fonction de la classe de risque
                du bâtiment.
              </p>
            </div>
            <div className="rounded-2xl bg-[#0a0f1e] border border-white/8 p-8">
              <h3 className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-6">Classes de risques APSAD R1</h3>
              <ul className="space-y-4">
                {[
                  { classe: "GO1", desc: "Risque ordinaire faible : bureaux, hôtels, logements collectifs" },
                  { classe: "GO2", desc: "Risque ordinaire moyen : grandes surfaces, entrepôts de petite hauteur" },
                  { classe: "GO3", desc: "Risque ordinaire élevé : stockage de matières combustibles en quantité" },
                  { classe: "GO4", desc: "Risque ordinaire très élevé : stockage de produits inflammables" },
                  { classe: "IS", desc: "Risque industriel spécial : peintures, aérosols, caoutchouc, pneus" },
                ].map(({ classe, desc }) => (
                  <li key={classe} className="flex items-start gap-3 pb-4 border-b border-white/5 last:border-0 last:pb-0">
                    <span className="px-2 py-0.5 rounded bg-orange-500/20 text-orange-400 text-xs font-bold shrink-0">{classe}</span>
                    <span className="text-slate-400 text-sm">{desc}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#0a0f1e]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-black text-white">Notre accompagnement sprinkler</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "Audit de conformité", items: ["Vérification APSAD R1 et réglementation applicable", "Contrôle de l'installation existante", "Rapport avec plan d'actions"] },
              { title: "Assistance projet", items: ["Définition de la classe de risque", "Vérification de l'étude installateur", "Suivi de chantier et réception"] },
              { title: "Interface assureurs", items: ["Préparation des dossiers assureurs", "Accompagnement lors des inspections APSAD", "Levée des réserves assureur"] },
            ].map(({ title, items }) => (
              <div key={title} className="rounded-2xl bg-[#0d1626] border border-white/8 p-6">
                <h3 className="text-white font-bold text-lg mb-4">{title}</h3>
                <ul className="space-y-2">
                  {items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-slate-400">
                      <span className="mt-1 w-1.5 h-1.5 rounded-full bg-orange-400 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#0d1626]">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="mt-3 text-2xl sm:text-3xl font-black text-white">FAQ — Sprinkler</h2>
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

      <section className="py-12 bg-[#0a0f1e] border-t border-white/8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-slate-500 text-xs uppercase tracking-widest font-semibold mb-4">Voir aussi</p>
          <div className="flex flex-wrap gap-3">
            {[
              { href: "/apsad", label: "Règles APSAD" },
              { href: "/desenfumage", label: "Désenfumage" },
              { href: "/audit-incendie", label: "Audit incendie" },
              { href: "/coordination-ssi", label: "Coordination SSI" },
            ].map(({ href, label }) => (
              <Link key={href} href={href} className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-slate-300 text-sm hover:text-orange-400 hover:border-orange-400/30 transition-colors">
                {label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#0d1626] border-t border-white/8">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-black text-white mb-4">Votre installation sprinkler est-elle conforme ?</h2>
          <p className="text-slate-400 mb-8">
            SI RISKCONSULTING réalise vos audits APSAD R1, vérifie la conformité de vos sprinklers
            et vous accompagne dans les mises en conformité.
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
