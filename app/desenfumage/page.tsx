import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Désenfumage incendie : cantons, APSAD R17, IT 246, Code du Travail",
  description:
    "Guide technique du désenfumage incendie : balayage naturel/mécanique, cantons de désenfumage, surface utile APSAD R17, IT 246, obligations Code du Travail R4216-13.",
  alternates: { canonical: "https://www.si-riskconsulting.fr/desenfumage" },
  openGraph: {
    title: "Désenfumage incendie : APSAD R17, IT 246, Code du Travail | SI RISKCONSULTING",
    description: "Cantons, surface utile, taux α, DENFC — le guide technique complet du désenfumage par un bureau d'études indépendant.",
    url: "https://www.si-riskconsulting.fr/desenfumage",
  },
};

const faqItems = [
  {
    question: "Quelle est la différence entre surface géométrique et surface utile d'un exutoire ?",
    answer: "La surface géométrique (Av) est la surface brute de l'ouverture d'un exutoire. La surface utile (Aa) est la surface effectivement disponible pour l'écoulement des fumées, tenant compte de la géométrie du dispositif. Le coefficient de débit Cv = Aa/Av traduit cette efficacité. Le Code du Travail impose une surface géométrique ≥ 1/100 de la superficie du local, et une surface utile ≥ 1/200. C'est la surface utile qui est utilisée dans les calculs de dimensionnement APSAD R17.",
  },
  {
    question: "Qu'est-ce qu'un canton de désenfumage et quand est-il obligatoire ?",
    answer: "Un canton est un volume délimité par des écrans de cantonnement (retombées sous toiture, fixes ou mobiles) permettant de limiter la propagation des fumées. Les cantons sont obligatoires dès que la surface du bâtiment est ≥ 2000 m² (IT 246 et APSAD R17). Chaque canton a une surface comprise entre 1000 m² et 1600 m², une longueur ≤ 60 m, et un écran d'une hauteur minimale de 50 cm. L'épaisseur de couche de fumée représente 25 % de la hauteur de référence (minimum 2 m si la hauteur dépasse 8 m).",
  },
  {
    question: "Quels locaux sont concernés par le désenfumage selon le Code du Travail ?",
    answer: "L'article R4216-13 (applicable depuis le 1er janvier 1993) impose le désenfumage pour : tous les locaux de plus de 300 m², les locaux aveugles de plus de 100 m², les locaux en sous-sol de plus de 100 m², tous les escaliers encloisonnés, et les compartiments des bâtiments dont le plancher bas du dernier niveau est à plus de 8 m. Selon R4216-14, la surface géométrique totale doit être ≥ 1/100 de la superficie (minimum 1 m²) et la surface utile ≥ 1/200.",
  },
  {
    question: "Comment se calcule la surface utile de désenfumage selon APSAD R17 ?",
    answer: "La méthodologie APSAD R17 comporte 4 étapes : 1) Déterminer la catégorie de risque (RC 1-3, RTDA 1-3, RTDB 1-4 ou RS) via le fascicule de classement. 2) Déterminer le groupe de risque (1 à 4) selon la catégorie de risque et la hauteur de stockage. 3) Extraire le taux α (de 1% à 5,48%) dans les tables R17 en fonction de la hauteur de référence, de la hauteur libre de fumée ou de l'épaisseur de couche de fumée, et du groupe. 4) Surface utile du canton = taux α × surface du canton.",
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

      {/* Header */}
      <section className="bg-[#0a0f1e] pt-28 pb-16 border-b border-white/8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-sm text-slate-500 mb-8">
            <Link href="/" className="hover:text-orange-400 transition-colors">Accueil</Link>
            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            <span className="text-white">Désenfumage</span>
          </nav>
          <span className="text-orange-400 font-semibold text-xs uppercase tracking-widest">APSAD R17 · IT 246 · Code du Travail</span>
          <h1 className="mt-3 text-4xl sm:text-5xl font-black text-white mb-4 leading-tight">
            Désenfumage incendie :<br />
            <span style={{ background: "linear-gradient(135deg, #f97316, #dc2626)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              cantons, surface utile et APSAD R17
            </span>
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl mb-8">
            Balayage naturel ou mécanique, cantons de désenfumage, DENFC, surface utile selon APSAD R17 et IT 246 :
            le guide technique complet du désenfumage pour vos entrepôts, ERP et locaux de travail.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/devis" className="px-6 py-3 rounded-lg font-bold text-white text-sm transition-all hover:opacity-90" style={{ background: "linear-gradient(135deg, #f97316, #dc2626)" }}>
              Demander un audit désenfumage
            </Link>
            <Link href="/contact" className="px-6 py-3 rounded-lg bg-white/8 border border-white/15 text-white font-semibold text-sm hover:bg-white/15 transition-colors">
              Nous contacter
            </Link>
          </div>
        </div>
      </section>

      {/* Objectifs */}
      <section className="py-16 bg-[#0d1626]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-orange-400 font-semibold text-xs uppercase tracking-widest">Rappel fondamental</span>
          <h2 className="mt-3 text-2xl sm:text-3xl font-black text-white mb-8">Les trois objectifs du désenfumage</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { num: "01", title: "Faciliter l'évacuation des personnes", desc: "Maintenir une couche d'air libre respirable sous la couche de fumées pour permettre l'évacuation en sécurité." },
              { num: "02", title: "Limiter la propagation", desc: "Confiner les fumées dans le canton sinistré grâce aux écrans de cantonnement et éviter leur migration horizontale vers les zones adjacentes." },
              { num: "03", title: "Faciliter l'intervention des secours", desc: "Permettre aux pompiers d'accéder au foyer dans de meilleures conditions de visibilité et de température." },
            ].map(({ num, title, desc }) => (
              <div key={num} className="rounded-2xl bg-[#0a0f1e] border border-white/8 p-6">
                <span className="text-orange-400 font-black text-3xl">{num}</span>
                <h3 className="text-white font-bold text-lg mt-2 mb-2">{title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Balayage + Hiérarchie des pressions */}
      <section className="py-16 bg-[#0a0f1e]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-black text-white mb-8">Principes de fonctionnement</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="rounded-2xl bg-[#0d1626] border border-white/8 p-8">
              <h3 className="text-white font-bold text-xl mb-3">Le balayage</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">
                Le balayage consiste à éviter que la couche de fumée et de gaz chauds ne devienne trop importante en remplaçant le volume enfumé par un volume d&apos;air frais admis en partie basse, et en permettant l&apos;extraction en partie haute des fumées et de la chaleur.
              </p>
              <p className="text-slate-400 text-sm leading-relaxed">
                Ce balayage peut être réalisé par un désenfumage naturel, mécanique, ou un dispositif combinant les deux technologies (naturel/naturel, naturel/mécanique, mécanique/mécanique).
              </p>
            </div>
            <div className="rounded-2xl bg-[#0d1626] border border-white/8 p-8">
              <h3 className="text-white font-bold text-xl mb-3">La hiérarchie des pressions</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">
                La hiérarchie des pressions consiste à restreindre les transferts horizontaux de fumée vers d&apos;autres zones du bâtiment en assurant la ségrégation entre le local sinistré et les volumes mitoyens.
              </p>
              <p className="text-slate-400 text-sm leading-relaxed">
                Les locaux adjacents (couloirs, SAS, dégagements) sont mis en <strong className="text-white">surpression</strong> par balayage mécanique contrôlé, tandis que les fumées sont extraites mécaniquement du local sinistré.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Surface géométrique vs utile */}
      <section className="py-16 bg-[#0d1626]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-orange-400 font-semibold text-xs uppercase tracking-widest">Notion essentielle</span>
          <h2 className="mt-3 text-2xl sm:text-3xl font-black text-white mb-4">Surface géométrique vs surface utile</h2>
          <p className="text-slate-400 mb-8 max-w-3xl">
            Toute installation de désenfumage est dimensionnée en <strong className="text-white">surface utile (Aa)</strong>, et non en surface géométrique (Av). Le coefficient de débit <strong className="text-white">Cv = Aa / Av</strong> traduit l&apos;efficacité réelle du dispositif d&apos;ouverture.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { label: "Surface géométrique Av", desc: "Surface brute de l'ouverture de l'exutoire, mesurée en vue de dessus. C'est la dimension physique de l'ouvrant." },
              { label: "Coefficient de débit Cv", desc: "Rapport Aa/Av propre à chaque modèle d'exutoire, certifié par essais. Un exutoire dôme a un Cv typiquement inférieur à 1." },
              { label: "Surface utile Aa", desc: "Aa = Cv × Av. C'est la surface retenue dans tous les calculs réglementaires (Code du Travail, APSAD R17, IT 246)." },
            ].map(({ label, desc }) => (
              <div key={label} className="rounded-2xl bg-[#0a0f1e] border border-orange-500/20 p-6">
                <h3 className="text-orange-400 font-bold text-sm uppercase tracking-wide mb-2">{label}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 rounded-2xl bg-[#0a0f1e] border border-white/8 p-6">
            <p className="text-slate-400 text-sm"><strong className="text-white">Code du Travail (R4216-14) :</strong> surface géométrique totale ≥ <strong className="text-white">1/100</strong> de la superficie du local (minimum 1 m²) — surface utile minimale ≥ <strong className="text-white">1/200</strong> de la superficie.</p>
          </div>
        </div>
      </section>

      {/* Cantons de désenfumage */}
      <section className="py-16 bg-[#0a0f1e]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-orange-400 font-semibold text-xs uppercase tracking-widest">IT 246 et APSAD R17</span>
          <h2 className="mt-3 text-2xl sm:text-3xl font-black text-white mb-4">Cantons de désenfumage</h2>
          <p className="text-slate-400 mb-8 max-w-3xl">
            Un canton est un volume délimité par des <strong className="text-white">écrans de cantonnement</strong> (retombées sous toiture, fixes ou mobiles, flexibles ou rigides) limitant la propagation des fumées. Les cantons sont obligatoires dès que la surface du bâtiment est <strong className="text-white">≥ 2 000 m²</strong>.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {[
              { param: "Surface d'un canton", val: "1 000 m² à 1 600 m²" },
              { param: "Longueur maximale", val: "≤ 60 m" },
              { param: "Hauteur écran minimum", val: "≥ 50 cm" },
              { param: "Épaisseur couche de fumée", val: "25 % de Hréf (min 2 m si Hréf > 8 m)" },
            ].map(({ param, val }) => (
              <div key={param} className="rounded-xl bg-[#0d1626] border border-white/8 p-5">
                <p className="text-slate-500 text-xs uppercase tracking-wide mb-1">{param}</p>
                <p className="text-white font-bold text-sm">{val}</p>
              </div>
            ))}
          </div>
          <div className="rounded-2xl bg-[#0d1626] border border-white/8 p-6">
            <p className="text-white font-bold mb-2">Trois grandeurs clés du canton</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-slate-400">
              <div><strong className="text-orange-400">Hréf (hauteur de référence) :</strong> hauteur du point bas de la toiture au-dessus du sol.</div>
              <div><strong className="text-orange-400">Ef (épaisseur de couche de fumée) :</strong> 25 % de Hréf. Si Hréf ≤ 8 m → min 2 m. C'est la zone réservée aux fumées sous l'écran.</div>
              <div><strong className="text-orange-400">Hl (hauteur libre) :</strong> Hréf − Ef. C'est la hauteur d'air libre respirable maintenue au-dessus du sol.</div>
            </div>
          </div>
        </div>
      </section>

      {/* APSAD R17 Méthodologie */}
      <section className="py-16 bg-[#0d1626]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-orange-400 font-semibold text-xs uppercase tracking-widest">Calcul réglementaire</span>
          <h2 className="mt-3 text-2xl sm:text-3xl font-black text-white mb-4">Méthodologie APSAD R17</h2>
          <p className="text-slate-400 mb-8 max-w-3xl">
            Le référentiel APSAD R17 définit la méthode de calcul de la surface utile de désenfumage par canton en 4 étapes :
          </p>
          <div className="space-y-4">
            {[
              {
                step: "1",
                title: "Catégorie de risque",
                desc: "Classer l'activité ou la marchandise via le fascicule de classement APSAD. Résultat : RC 1 à 3 (risque courant), RTDA 1 à 3 (risque très difficile activités), RTDB 1 à 4 (risque très difficile bâtiment) ou RS (risque spécial). La nature des emballages est prise en compte pour les marchandises.",
              },
              {
                step: "2",
                title: "Groupe de risque",
                desc: "En associant la catégorie de risque obtenue et la hauteur de stockage, se reporter au tableau de correspondance APSAD R17. Résultat : groupe 1 à 4. Plus le groupe est élevé, plus la surface utile sera importante.",
              },
              {
                step: "3",
                title: "Taux α",
                desc: "Extraire le taux α des tables APSAD R17 en combinant la hauteur de référence (Hréf), la hauteur libre (Hl) ou l'épaisseur de couche de fumée (Ef), et le groupe. Le taux α varie de 1 % à 5,48 %.",
              },
              {
                step: "4",
                title: "Surface utile du canton",
                desc: "Surface utile canton (SU) = taux α × surface du canton. La surface utile totale est la somme des SU de chaque canton. Cette valeur doit être couverte par les DENFC installés.",
              },
            ].map(({ step, title, desc }) => (
              <div key={step} className="flex gap-5 rounded-2xl bg-[#0a0f1e] border border-white/8 p-6">
                <span className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center font-black text-white text-lg" style={{ background: "linear-gradient(135deg, #f97316, #dc2626)" }}>{step}</span>
                <div>
                  <h3 className="text-white font-bold mb-1">{title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Exemple chiffré */}
          <div className="mt-8 rounded-2xl bg-[#0a0f1e] border border-orange-500/20 p-6">
            <h3 className="text-orange-400 font-bold mb-3">Exemple de calcul — Biscuiterie (stockage 4 000 m², toit en shed 10/12 m, stockage racks 5 m, films plastiques + cartons)</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-slate-400">
              <div>
                <p className="text-white font-semibold mb-2">Code du Travail (R4216-14) :</p>
                <p>Surface géométrique = 4 000 / 100 = <strong className="text-white">40 m²</strong></p>
                <p>Surface utile minimum = 4 000 / 200 = <strong className="text-white">20 m²</strong></p>
              </div>
              <div>
                <p className="text-white font-semibold mb-2">APSAD R17 :</p>
                <p>Fascicule 7 → Stockage F2 / Emballage E3 → <strong className="text-white">Catégorie RTDB 3</strong></p>
                <p>Hauteur stockage 5 m &gt; 4 m → <strong className="text-white">Groupe 4</strong></p>
                <p>Hréf = 11 m, Ef = 2 m, Hl = 9 m → <strong className="text-white">Taux α = 3,16 %</strong></p>
                <p>4 cantons de 1 000 m² → SU/canton = 1 000 × 3,16 % = <strong className="text-white">31,6 m²</strong></p>
                <p>SU totale = 4 × 31,6 = <strong className="text-white">126,4 m²</strong></p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Obligations Code du Travail */}
      <section className="py-16 bg-[#0a0f1e]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-orange-400 font-semibold text-xs uppercase tracking-widest">Réglementation</span>
          <h2 className="mt-3 text-2xl sm:text-3xl font-black text-white mb-8">Obligations par référentiel</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                ref: "Code du Travail — R4216-13",
                note: "Applicable depuis le 1er janvier 1993",
                items: [
                  "Tous les locaux > 300 m²",
                  "Locaux aveugles > 100 m²",
                  "Locaux en sous-sol > 100 m²",
                  "Tous les escaliers encloisonnés",
                  "Compartiments si plancher bas > 8 m",
                ],
              },
              {
                ref: "ERP — IT 246",
                note: "Instruction technique désenfumage ERP",
                items: [
                  "Circulations > 30 m ou en sous-sol",
                  "Locaux > 300 m² en sous-sol",
                  "Escaliers encloisonnés",
                  "Cantons obligatoires si surface ≥ 2 000 m²",
                  "Parcs de stationnement",
                ],
              },
              {
                ref: "ICPE — Arrêté 1510",
                note: "Entrepôts soumis à autorisation",
                items: [
                  "Exutoires DENFC en toiture obligatoires",
                  "1 exutoire pour 250 m² minimum",
                  "Surface utile ≥ 2 % de la surface de la cellule",
                  "Écrans de cantonnement en plastique interdit",
                  "Coordination avec SDIS pour les ICPE AS",
                ],
              },
            ].map(({ ref, note, items }) => (
              <div key={ref} className="rounded-2xl bg-[#0d1626] border border-white/8 p-6">
                <span className="inline-block px-3 py-1 rounded-full bg-orange-500/15 border border-orange-500/25 text-orange-400 text-xs font-bold mb-1">{ref}</span>
                <p className="text-slate-600 text-xs mb-3">{note}</p>
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

      {/* FAQ */}
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

      {/* Voir aussi */}
      <section className="py-12 bg-[#0a0f1e] border-t border-white/8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-slate-500 text-xs uppercase tracking-widest font-semibold mb-4">Voir aussi</p>
          <div className="flex flex-wrap gap-3">
            {[
              { href: "/sprinkler", label: "Sprinkler APSAD R1" },
              { href: "/apsad", label: "Règles APSAD" },
              { href: "/coordination-ssi", label: "Coordination SSI" },
              { href: "/audit-incendie", label: "Audit incendie" },
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
          <h2 className="text-2xl sm:text-3xl font-black text-white mb-4">Votre désenfumage est-il correctement dimensionné ?</h2>
          <p className="text-slate-400 mb-8">
            SI RISKCONSULTING vérifie vos cantons, calcule vos surfaces utiles selon APSAD R17 et IT 246,
            et vous accompagne dans la mise en conformité ou la conception de votre système de désenfumage.
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
