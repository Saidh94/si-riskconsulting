import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Désenfumage : réglementation, types naturel et mécanique",
  description:
    "Guide complet sur le désenfumage incendie : désenfumage naturel, mécanique, exutoires, VMC de désenfumage. Réglementation ERP, IGH, Code du Travail.",
  alternates: { canonical: "https://www.si-riskconsulting.fr/desenfumage" },
  openGraph: {
    title: "Désenfumage incendie : réglementation complète | SI RISKCONSULTING",
    description: "Désenfumage naturel et mécanique, exutoires, réglementation ERP/IGH. Bureau d'études indépendant.",
    url: "https://www.si-riskconsulting.fr/desenfumage",
  },
};

const faqItems = [
  {
    question: "Quelle est la différence entre désenfumage naturel et mécanique ?",
    answer: "Le désenfumage naturel utilise la différence de densité entre les fumées chaudes et l'air froid : les fumées s'évacuent par des exutoires en partie haute (façade ou toiture) tandis que l'air frais entre par des amenées d'air en partie basse. Le désenfumage mécanique utilise des ventilateurs pour extraire les fumées de façon forcée, nécessaire quand le tirage naturel est insuffisant (grands volumes, grandes profondeurs).",
  },
  {
    question: "Le désenfumage est-il obligatoire dans tous les bâtiments ?",
    answer: "Non, le désenfumage n'est pas obligatoire dans tous les bâtiments. Il l'est dans de nombreux ERP dès certaines catégories (grandes surfaces, parkings, circulations), dans tous les IGH, dans les ICPE à risque d'incendie, et dans certains locaux du Code du Travail (locaux sans fenêtre, atelier, stockage). Les obligations varient selon le type et la catégorie d'établissement.",
  },
  {
    question: "Qu'est-ce qu'un exutoire de désenfumage ?",
    answer: "Un exutoire de désenfumage est un dispositif d'ouverture placé en partie haute d'un local ou d'une circulation pour permettre l'évacuation des fumées et des gaz chauds en cas d'incendie. Il existe des exutoires en toiture (EFC), des lanterneaux et des ouvrants en façade haute. Ils doivent être commandés automatiquement (par détection) et manuellement.",
  },
  {
    question: "Quelle est la fréquence de vérification des systèmes de désenfumage ?",
    answer: "Les systèmes de désenfumage font l'objet de vérifications périodiques annuelles par un organisme compétent. Ces vérifications incluent l'essai de fonctionnement des volets, des exutoires, des ventilateurs et des commandes manuelles. Les PV de vérification doivent être conservés dans le registre de sécurité.",
  },
];

export default function DesenfumagePage() {
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
                { "@type": "ListItem", position: 2, name: "Désenfumage", item: "https://www.si-riskconsulting.fr/desenfumage" },
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
            <span className="text-white">Désenfumage</span>
          </nav>
          <span className="text-orange-400 font-semibold text-xs uppercase tracking-widest">Désenfumage · Exutoires · VMC</span>
          <h1 className="mt-3 text-4xl sm:text-5xl font-black text-white mb-4 leading-tight">
            Désenfumage :<br />
            <span style={{ background: "linear-gradient(135deg, #f97316, #dc2626)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              réglementation et types
            </span>
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl mb-8">
            Désenfumage naturel ou mécanique, exutoires en toiture, volets de désenfumage :
            tout ce qu&apos;il faut savoir sur la réglementation désenfumage pour vos bâtiments ERP, IGH et Code du Travail.
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

      <section className="py-16 bg-[#0d1626]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-black text-white">Les deux types de désenfumage</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                type: "Désenfumage naturel",
                icon: "🌬️",
                desc: "Évacuation des fumées par différence de densité thermique. Les fumées chaudes montent et s'évacuent par des exutoires en partie haute pendant que l'air frais entre en partie basse.",
                items: ["Exutoires de toiture (EFC)", "Ouvrants de façade haute", "Lanterneaux motorisés", "Amenées d'air en partie basse", "Adapté aux volumes importants"],
                avantages: "Simple, pas d'énergie, maintenance légère",
                limites: "Dépend des conditions météo, inefficace pour grandes profondeurs",
              },
              {
                type: "Désenfumage mécanique",
                icon: "⚙️",
                desc: "Extraction forcée des fumées par des ventilateurs. Permet de désenfumer des locaux profonds, souterrains ou sans ouverture en façade.",
                items: ["Ventilateurs d'extraction (400°C/2h)", "Réseau de gaines de désenfumage", "Volets coupe-feu motorisés", "Soufflage d'air neuf compensateur", "Adapté aux parkings et sous-sols"],
                avantages: "Efficace quelle que soit la météo, applicable en sous-sol",
                limites: "Coût plus élevé, maintenance annuelle obligatoire",
              },
            ].map(({ type, icon, desc, items, avantages, limites }) => (
              <div key={type} className="rounded-2xl bg-[#0a0f1e] border border-white/8 p-8">
                <div className="text-4xl mb-3">{icon}</div>
                <h3 className="text-white font-bold text-xl mb-3">{type}</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-4">{desc}</p>
                <ul className="space-y-1 mb-4">
                  {items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-slate-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-orange-400 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="border-t border-white/8 pt-3 space-y-1">
                  <p className="text-xs text-green-400">✓ {avantages}</p>
                  <p className="text-xs text-slate-500">⚠ {limites}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#0a0f1e]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-orange-400 font-semibold text-xs uppercase tracking-widest">Réglementation</span>
          <h2 className="mt-3 text-2xl sm:text-3xl font-black text-white mb-8">Obligations par type d&apos;établissement</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { type: "ERP", items: ["Circulations horizontales > 30m", "Locaux > 300m² en sous-sol", "Parcs de stationnement", "Atrium et volumes atypiques"] },
              { type: "IGH", items: ["Désenfumage obligatoire partout", "Escaliers et couloirs pressurisés", "Extraction par niveaux", "Conception spécifique IGH"] },
              { type: "ICPE", items: ["Entrepôts 1510 : exutoires DEFC", "Locaux à risque élevé", "Selon étude de danger ICPE", "Coordination avec SDIS"] },
              { type: "Code du Travail", items: ["Locaux sans fenêtre", "Ateliers et locaux de travail", "Locaux de charge batteries", "Selon volume et occupation"] },
            ].map(({ type, items }) => (
              <div key={type} className="rounded-2xl bg-[#0d1626] border border-white/8 p-6">
                <span className="inline-block px-3 py-1 rounded-full bg-orange-500/15 border border-orange-500/25 text-orange-400 text-xs font-bold mb-3">{type}</span>
                <ul className="space-y-2">
                  {items.map((item) => (
                    <li key={item} className="text-slate-400 text-sm flex items-start gap-2">
                      <span className="mt-1 w-1 h-1 rounded-full bg-orange-400 shrink-0" />
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
            <h2 className="text-2xl sm:text-3xl font-black text-white">FAQ — Désenfumage</h2>
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
              { href: "/coordination-ssi", label: "Coordination SSI" },
              { href: "/sprinkler", label: "Sprinkler" },
              { href: "/audit-incendie", label: "Audit incendie" },
              { href: "/expertises", label: "Nos expertises" },
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
          <h2 className="text-2xl sm:text-3xl font-black text-white mb-4">Votre désenfumage est-il conforme ?</h2>
          <p className="text-slate-400 mb-8">
            SI RISKCONSULTING analyse votre système de désenfumage, vérifie sa conformité réglementaire
            et vous accompagne dans sa mise en conformité ou sa conception.
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
