import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Coordination SSI (CSSI) : missions, obligations et guide complet",
  description:
    "Tout savoir sur la mission de Coordination SSI (CSSI) : rôle du coordinateur, obligations réglementaires, CCF SSI, DI-SSI. Bureau d'études indépendant en Île-de-France.",
  alternates: { canonical: "https://www.si-riskconsulting.fr/coordination-ssi" },
  openGraph: {
    title: "Coordination SSI (CSSI) : le guide complet | SI RISKCONSULTING",
    description:
      "Missions du CSSI, CCF SSI, DI-SSI, obligations ERP/IGH/ICPE. Tout ce qu'il faut savoir sur la coordination SSI.",
    url: "https://www.si-riskconsulting.fr/coordination-ssi",
  },
};

const faqItems = [
  {
    question: "Quand la mission de coordination SSI est-elle obligatoire ?",
    answer:
      "La mission CSSI est obligatoire pour tout bâtiment neuf ou en réhabilitation équipé d'un SSI de catégorie A ou B (ERP de 1ère à 3ème catégorie, IGH, ICPE à risque élevé). Elle est définie par la norme NF S61-932 et les arrêtés de prescriptions de sécurité.",
  },
  {
    question: "Quelle est la différence entre CSSI et MOE SSI ?",
    answer:
      "Le CSSI (Coordinateur SSI) a une mission de coordination entre les différents intervenants du projet SSI : il vérifie la cohérence des prestations, valide le CCF SSI et signe le DI-SSI. Le MOE SSI (Maître d'Œuvre SSI) a une mission plus large incluant la conception technique du système.",
  },
  {
    question: "Qu'est-ce que le CCF SSI ?",
    answer:
      "Le Cahier des Charges Fonctionnel SSI (CCF SSI) est le document fondateur de la mission CSSI. Il décrit les fonctions de sécurité attendues du SSI, les interactions entre systèmes (SDI, SMSI, désenfumage, compartimentage) et les hypothèses de conception. Il est établi en phase conception et sert de référence contractuelle pour tous les intervenants.",
  },
  {
    question: "Qu'est-ce que le DI-SSI ?",
    answer:
      "Le Dossier d'Identité du SSI (DI-SSI) est le document de synthèse remis à l'exploitant en fin de mission CSSI. Il regroupe les plans, schémas fonctionnels, PV d'essais et notices techniques du SSI installé. Il est indispensable pour la maintenance et les vérifications périodiques.",
  },
  {
    question: "Combien coûte une mission de coordination SSI ?",
    answer:
      "Le coût d'une mission CSSI dépend de la taille du projet, de la catégorie du SSI et des surfaces concernées. Contactez SI RISKCONSULTING pour un devis adapté à votre opération.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Accueil", item: "https://www.si-riskconsulting.fr" },
        { "@type": "ListItem", position: 2, name: "Coordination SSI", item: "https://www.si-riskconsulting.fr/coordination-ssi" },
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

const steps = [
  { num: "01", title: "Analyse des besoins", desc: "Étude du programme, identification des contraintes réglementaires (ERP, IGH, ICPE), définition du niveau SSI requis." },
  { num: "02", title: "Rédaction du CCF SSI", desc: "Cahier des charges fonctionnel : description des fonctions de sécurité, interactions entre systèmes, hypothèses de conception." },
  { num: "03", title: "Coordination des intervenants", desc: "Suivi des études du concepteur SSI, vérification de la cohérence avec le CCF SSI, interface avec l'architecte et le BET fluides." },
  { num: "04", title: "Suivi de chantier", desc: "Contrôle de la conformité des installations au CCF SSI, vérification des matériels mis en œuvre." },
  { num: "05", title: "Essais et réception", desc: "Assistance lors des essais SSI, vérification du bon fonctionnement des fonctions de sécurité, signature du procès-verbal." },
  { num: "06", title: "Remise du DI-SSI", desc: "Constitution et remise à l'exploitant du Dossier d'Identité du SSI (DI-SSI) : plans, schémas, PV, notices." },
];

export default function CoordinationSSIPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Header */}
      <section className="bg-[#0a0f1e] pt-28 pb-16 border-b border-white/8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-sm text-slate-500 mb-8">
            <Link href="/" className="hover:text-orange-400 transition-colors">Accueil</Link>
            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            <span className="text-white">Coordination SSI</span>
          </nav>
          <span className="text-orange-400 font-semibold text-xs uppercase tracking-widest">CSSI · Mission réglementaire</span>
          <h1 className="mt-3 text-4xl sm:text-5xl font-black text-white mb-4 leading-tight">
            Coordination SSI :<br />
            <span style={{ background: "linear-gradient(135deg, #f97316, #dc2626)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              le guide complet
            </span>
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl mb-8">
            Missions, obligations réglementaires, CCF SSI, DI-SSI : tout ce qu'il faut savoir sur la coordination
            des Systèmes de Sécurité Incendie (SSI) pour vos projets ERP, IGH et ICPE.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/devis" className="px-6 py-3 rounded-lg font-bold text-white text-sm transition-all hover:opacity-90" style={{ background: "linear-gradient(135deg, #f97316, #dc2626)" }}>
              Demander un devis CSSI
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-orange-400 font-semibold text-xs uppercase tracking-widest">Définition</span>
              <h2 className="mt-3 text-2xl sm:text-3xl font-black text-white mb-4">
                Qu&apos;est-ce que la coordination SSI ?
              </h2>
              <p className="text-slate-400 leading-relaxed mb-4">
                La <strong className="text-white">Coordination SSI</strong> est une mission réglementaire exercée par un
                <strong className="text-white"> Coordinateur Sécurité des Systèmes Incendie (CSSI)</strong>. Elle vise à assurer
                la cohérence globale du Système de Sécurité Incendie (SSI) sur les opérations de construction neuve ou de réhabilitation.
              </p>
              <p className="text-slate-400 leading-relaxed mb-4">
                Définie par la norme <strong className="text-white">NF S61-932</strong> et rendue obligatoire par les arrêtés
                réglementaires (ERP, IGH, Code du Travail, ICPE), cette mission est distincte de la prestation de l&apos;installateur SSI :
                le CSSI est un <strong className="text-white">tiers indépendant</strong> au service du maître d&apos;ouvrage.
              </p>
              <p className="text-slate-400 leading-relaxed">
                Elle débute dès la phase de conception et se termine par la remise du <strong className="text-white">Dossier d&apos;Identité
                du SSI (DI-SSI)</strong> à l&apos;exploitant, en passant par la rédaction du <strong className="text-white">CCF SSI</strong> et
                la participation aux essais de réception.
              </p>
            </div>
            <div className="rounded-2xl bg-[#0a0f1e] border border-white/8 p-8">
              <h3 className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-6">Périmètre de la mission</h3>
              <ul className="space-y-4">
                {[
                  { label: "Norme de référence", value: "NF S61-932" },
                  { label: "Établissements concernés", value: "ERP, IGH, ICPE, Code du Travail" },
                  { label: "Catégories SSI", value: "A et B (obligatoire), C à E (recommandée)" },
                  { label: "Phase de démarrage", value: "Dès le programme / APS" },
                  { label: "Documents produits", value: "CCF SSI, DI-SSI, PV d'essais" },
                  { label: "Indépendance", value: "Tiers indépendant de l'installateur" },
                ].map(({ label, value }) => (
                  <li key={label} className="flex items-start justify-between gap-4 pb-4 border-b border-white/5 last:border-0 last:pb-0">
                    <span className="text-slate-500 text-sm">{label}</span>
                    <span className="text-white text-sm font-semibold text-right">{value}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Étapes de la mission */}
      <section className="py-16 bg-[#0a0f1e]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-orange-400 font-semibold text-xs uppercase tracking-widest">Déroulé</span>
            <h2 className="mt-3 text-2xl sm:text-3xl font-black text-white">
              Les 6 phases de la mission CSSI
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {steps.map(({ num, title, desc }) => (
              <div key={num} className="rounded-2xl bg-[#0d1626] border border-white/8 p-6">
                <div className="text-5xl font-black leading-none mb-3 select-none"
                  style={{ background: "linear-gradient(135deg, #f97316, #dc2626)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                  {num}
                </div>
                <h3 className="text-white font-bold text-lg mb-2">{title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Obligations réglementaires */}
      <section className="py-16 bg-[#0d1626]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-orange-400 font-semibold text-xs uppercase tracking-widest">Réglementation</span>
          <h2 className="mt-3 text-2xl sm:text-3xl font-black text-white mb-8">
            Quand la mission CSSI est-elle obligatoire ?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { type: "ERP", desc: "1ère à 3ème catégorie équipés d'un SSI de catégorie A ou B. Applicable dès la phase conception.", ref: "Arrêté du 25/06/1980" },
              { type: "IGH", desc: "Tous les Immeubles de Grande Hauteur, quelle que soit leur affectation.", ref: "Arrêté du 18/10/1977" },
              { type: "ICPE", desc: "Sites classés à risque élevé nécessitant un SSI avec interconnexion de systèmes.", ref: "Arrêtés ministériels ICPE" },
              { type: "Code du Travail", desc: "Bâtiments à usage professionnel (BUP) avec SSI de catégorie A ou B.", ref: "Code du Travail – Art. R4216" },
            ].map(({ type, desc, ref }) => (
              <div key={type} className="rounded-2xl bg-[#0a0f1e] border border-white/8 p-6">
                <span className="inline-block px-3 py-1 rounded-full bg-orange-500/15 border border-orange-500/25 text-orange-400 text-xs font-bold mb-3">
                  {type}
                </span>
                <p className="text-slate-400 text-sm leading-relaxed mb-3">{desc}</p>
                <p className="text-xs text-slate-600">{ref}</p>
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
            <h2 className="mt-3 text-2xl sm:text-3xl font-black text-white">FAQ — Coordination SSI</h2>
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
              { href: "/moe-ssi", label: "MOE SSI" },
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
      <section className="py-16 bg-[#0a0f1e] border-t border-white/8">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-black text-white mb-4">
            Besoin d&apos;un CSSI pour votre projet ?
          </h2>
          <p className="text-slate-400 mb-8">
            SI RISKCONSULTING assure la mission de coordination SSI en toute indépendance pour vos opérations
            ERP, IGH, ICPE et Code du Travail, en Île-de-France et sur toute la France.
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
