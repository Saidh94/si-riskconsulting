import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Commission de sécurité ERP : préparation, déroulement, suites | SI RISKCONSULTING",
  description:
    "Préparez votre passage en commission de sécurité ERP : documents obligatoires, déroulement de la visite, avis défavorable et levée de réserves. Accompagnement par un expert indépendant.",
  alternates: { canonical: "https://www.si-riskconsulting.fr/commission-securite-erp" },
  openGraph: {
    title: "Commission de sécurité ERP | SI RISKCONSULTING",
    description: "Tout savoir sur la commission de sécurité ERP : préparation, dossier, visite, avis et suites. Accompagnement expert en Île-de-France.",
    url: "https://www.si-riskconsulting.fr/commission-securite-erp",
  },
};

const faqItems = [
  {
    question: "Quand la commission de sécurité doit-elle être saisie ?",
    answer: "La commission de sécurité doit être saisie avant toute ouverture au public d'un ERP de 1ère à 4ème catégorie, avant tout travaux soumis à autorisation de travaux (AT) ou permis de construire (PC), et lors de changements de destination ou d'exploitation. Pour les ERP de 5ème catégorie, une visite peut être demandée par le maire. La périodicité des visites périodiques varie selon le type et la catégorie : de 2 à 5 ans.",
  },
  {
    question: "Quels documents préparer pour la commission de sécurité ?",
    answer: "Les documents à préparer sont : le registre de sécurité à jour, les rapports de vérification périodique des installations (électricité, gaz, SSI, désenfumage, ascenseurs), les contrats de maintenance, les attestations de formation du personnel, le plan du bâtiment, le dossier technique amiante (DTA) si applicable, et les procès-verbaux des précédentes visites avec les suites données.",
  },
  {
    question: "Que se passe-t-il en cas d'avis défavorable ?",
    answer: "Un avis défavorable de la commission de sécurité est transmis au maire, qui peut prononcer la fermeture administrative de l'établissement. L'exploitant dispose alors d'un délai pour réaliser les travaux prescrits et solliciter une contre-visite. SI RISKCONSULTING vous accompagne dans l'analyse des prescriptions, le chiffrage des travaux correctifs et la préparation de la contre-visite.",
  },
  {
    question: "Quelle différence entre visite de réception et visite périodique ?",
    answer: "La visite de réception (ou d'ouverture) intervient après des travaux soumis à autorisation, avant la première ouverture au public. Elle conditionne l'autorisation d'ouverture. La visite périodique est une visite de contrôle récurrente (tous les 2, 3 ou 5 ans selon le type et la catégorie) pour vérifier que l'établissement maintient un niveau de sécurité conforme. Les deux types de visites nécessitent un dossier complet et des installations en ordre.",
  },
  {
    question: "Un bureau d'études peut-il m'accompagner lors de la visite ?",
    answer: "Oui. SI RISKCONSULTING peut vous assister lors de la visite de la commission : préparer le dossier technique, briefer votre équipe, répondre aux questions des membres de la commission sur les aspects techniques (SSI, désenfumage, sprinkler, résistance au feu). Cet accompagnement réduit significativement le risque d'avis défavorable lié à des lacunes documentaires ou techniques.",
  },
];

export default function CommissionSecuriteERPPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "BreadcrumbList",
                itemListElement: [
                  { "@type": "ListItem", position: 1, name: "Accueil", item: "https://www.si-riskconsulting.fr" },
                  { "@type": "ListItem", position: 2, name: "Commission de sécurité ERP", item: "https://www.si-riskconsulting.fr/commission-securite-erp" },
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
          }),
        }}
      />

      {/* Header */}
      <section className="bg-[#0a0f1e] pt-28 pb-16 border-b border-white/8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-sm text-slate-500 mb-8">
            <Link href="/" className="hover:text-orange-400 transition-colors">Accueil</Link>
            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            <span className="text-white">Commission de sécurité ERP</span>
          </nav>
          <span className="text-orange-400 font-semibold text-xs uppercase tracking-widest">ERP · Réglementation · Accompagnement</span>
          <h1 className="mt-3 text-4xl sm:text-5xl font-black text-white mb-4 leading-tight">
            Commission de sécurité ERP :<br />
            <span style={{ background: "linear-gradient(135deg, #f97316, #dc2626)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              préparez votre passage sans stress
            </span>
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl mb-8">
            Visite d&apos;ouverture, visite périodique ou contre-visite après avis défavorable : SI RISKCONSULTING prépare votre dossier, analyse les prescriptions et vous accompagne face à la commission.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/devis" className="px-6 py-3 rounded-lg font-bold text-white text-sm transition-all hover:opacity-90" style={{ background: "linear-gradient(135deg, #f97316, #dc2626)" }}>
              Préparer ma commission
            </Link>
            <a href="tel:+33780629492" className="px-6 py-3 rounded-lg bg-white/8 border border-white/15 text-white font-semibold text-sm hover:bg-white/15 transition-colors">
              07 80 62 94 92
            </a>
          </div>
        </div>
      </section>

      {/* Types de visites */}
      <section className="py-16 bg-[#0d1626]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-black text-white mb-8">Types de visites de la commission</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                type: "Visite de réception",
                timing: "Avant ouverture au public",
                desc: "Intervient après travaux soumis à autorisation (permis de construire ou AT). Conditionne l'autorisation d'ouverture au public. Dossier technique complet obligatoire.",
                urgency: "Bloquante",
                color: "border-red-500/30 bg-red-500/5",
              },
              {
                type: "Visite périodique",
                timing: "Tous les 2 à 5 ans",
                desc: "Contrôle récurrent selon le type et la catégorie ERP. Vérifie le maintien du niveau de sécurité, les contrats de maintenance et le registre de sécurité.",
                urgency: "Réglementaire",
                color: "border-orange-500/30 bg-orange-500/5",
              },
              {
                type: "Contre-visite",
                timing: "Après avis défavorable",
                desc: "Sollicitée après la réalisation des travaux prescrits suite à un avis défavorable. L'enjeu est d'obtenir un avis favorable pour rouvrir ou maintenir l'activité.",
                urgency: "Critique",
                color: "border-yellow-500/30 bg-yellow-500/5",
              },
            ].map(({ type, timing, desc, urgency, color }) => (
              <div key={type} className={`rounded-2xl border p-6 ${color}`}>
                <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">{urgency}</span>
                <h3 className="text-white font-bold text-lg mt-1 mb-1">{type}</h3>
                <p className="text-orange-400 text-xs font-semibold mb-3">{timing}</p>
                <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Documents obligatoires */}
      <section className="py-16 bg-[#0a0f1e]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-black text-white mb-4">Documents à préparer</h2>
          <p className="text-slate-400 mb-8 max-w-2xl">Une commission qui arrive dans un établissement mal préparé peut prononcer un avis défavorable sur la seule base documentaire. Voici ce qu'il faut avoir en ordre.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { doc: "Registre de sécurité", detail: "À jour, signé, avec toutes les visites de contrôle, exercices d'évacuation et interventions consignés." },
              { doc: "Rapports de vérification périodique", detail: "Électricité, gaz, SSI (système de sécurité incendie), désenfumage, ascenseurs, sprinkler — tous signés par un organisme agréé." },
              { doc: "Contrats de maintenance en cours", detail: "SSI, extincteurs, RIA, colonnes sèches/humides, portes coupe-feu motorisées." },
              { doc: "Attestations de formation du personnel", detail: "Formation évacuation, manipulation des extincteurs, conduite à tenir en cas d'incendie." },
              { doc: "Plans du bâtiment", detail: "Plans d'évacuation à jour, plan du SSI, schémas des réseaux de désenfumage." },
              { doc: "Suites données aux prescriptions", detail: "Preuves que les prescriptions de la visite précédente ont été levées (devis, factures, rapports)." },
            ].map(({ doc, detail }) => (
              <div key={doc} className="flex gap-4 rounded-xl bg-[#0d1626] border border-white/8 p-5">
                <span className="mt-1 w-2 h-2 rounded-full bg-orange-400 shrink-0" />
                <div>
                  <p className="text-white font-semibold text-sm">{doc}</p>
                  <p className="text-slate-400 text-sm mt-1">{detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Notre accompagnement */}
      <section className="py-16 bg-[#0d1626]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-black text-white mb-8">Notre accompagnement</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Audit préalable", desc: "Analyse de votre dossier existant, identification des écarts et des points de blocage potentiels avant la visite." },
              { step: "02", title: "Mise en conformité", desc: "Préconisations priorisées, coordination avec vos prestataires, suivi des travaux correctifs et des vérifications." },
              { step: "03", title: "Préparation du dossier", desc: "Constitution du dossier technique complet, vérification des rapports, mise à jour du registre de sécurité." },
              { step: "04", title: "Assistance le jour J", desc: "Présence lors de la visite pour répondre aux questions techniques de la commission et limiter le risque d'avis défavorable." },
            ].map(({ step, title, desc }) => (
              <div key={step} className="rounded-2xl bg-[#0a0f1e] border border-white/8 p-6">
                <span className="text-orange-400 font-black text-3xl">{step}</span>
                <h3 className="text-white font-bold mt-2 mb-2">{title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Secteurs */}
      <section className="py-16 bg-[#0a0f1e]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-black text-white mb-8">Secteurs concernés</h2>
          <div className="flex flex-wrap gap-3">
            {["Hôtels & hébergements", "Restauration & débits de boissons", "Commerces & centres commerciaux", "Établissements scolaires", "Établissements de santé", "Bureaux & administrations ERP", "Salles de spectacle & cinémas", "Musées & expositions", "Établissements sportifs", "IGH (immeubles de grande hauteur)"].map((s) => (
              <span key={s} className="px-4 py-2 rounded-full bg-[#0d1626] border border-white/8 text-slate-300 text-sm">{s}</span>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-[#0d1626]">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-black text-white mb-8 text-center">Questions fréquentes</h2>
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

      {/* Maillage interne */}
      <section className="py-12 bg-[#0a0f1e] border-t border-white/8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-slate-500 text-xs uppercase tracking-widest font-semibold mb-4">Nos expertises associées</p>
          <div className="flex flex-wrap gap-3">
            {[
              { href: "/audit-incendie", label: "Audit incendie" },
              { href: "/coordination-ssi", label: "Coordination SSI" },
              { href: "/moe-ssi", label: "MOE SSI" },
              { href: "/desenfumage", label: "Désenfumage" },
              { href: "/sprinkler", label: "Sprinkler" },
              { href: "/apsad", label: "APSAD" },
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
          <h2 className="text-2xl sm:text-3xl font-black text-white mb-4">Votre commission approche ?</h2>
          <p className="text-slate-400 mb-8">
            Ne laissez pas un dossier incomplet ou une installation non conforme compromettre votre ouverture.
            SI RISKCONSULTING analyse votre situation et vous accompagne jusqu&apos;à l&apos;obtention de l&apos;avis favorable.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/devis" className="px-7 py-3 rounded-lg font-bold text-white transition-all hover:opacity-90" style={{ background: "linear-gradient(135deg, #f97316, #dc2626)" }}>
              Demander un accompagnement
            </Link>
            <a href="tel:+33780629492" className="px-7 py-3 rounded-lg bg-white/8 border border-white/15 text-white font-semibold hover:bg-white/15 transition-colors">
              07 80 62 94 92
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
