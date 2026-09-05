import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Bureau d'études sécurité incendie Île-de-France — Noisy-le-Grand, Paris, 93 | SI RISKCONSULTING",
  description:
    "Bureau d'études sécurité incendie basé à Noisy-le-Grand (93), intervenant sur toute l'Île-de-France : Paris, Seine-Saint-Denis, Val-de-Marne, Hauts-de-Seine. Coordination SSI, MOE SSI, audit incendie, commission de sécurité ERP.",
  alternates: { canonical: "https://www.si-riskconsulting.fr/ile-de-france" },
  openGraph: {
    title: "Bureau d'études sécurité incendie Île-de-France | SI RISKCONSULTING",
    description: "Expert sécurité incendie basé à Noisy-le-Grand (93). Interventions Paris, Île-de-France, Seine-Saint-Denis. Coordination SSI, audit, MOE SSI.",
    url: "https://www.si-riskconsulting.fr/ile-de-france",
  },
};

const zones = [
  { dept: "Paris (75)", villes: ["Paris 1er–20e", "La Défense", "Boulogne-Billancourt"] },
  { dept: "Seine-Saint-Denis (93)", villes: ["Noisy-le-Grand (siège)", "Montreuil", "Saint-Denis", "Bobigny", "Aubervilliers", "Pantin"] },
  { dept: "Val-de-Marne (94)", villes: ["Créteil", "Vincennes", "Vitry-sur-Seine", "Ivry-sur-Seine", "Champigny-sur-Marne"] },
  { dept: "Hauts-de-Seine (92)", villes: ["Nanterre", "Courbevoie", "Issy-les-Moulineaux", "Levallois-Perret", "Antony"] },
  { dept: "Seine-et-Marne (77)", villes: ["Marne-la-Vallée", "Meaux", "Melun", "Chelles", "Lognes"] },
  { dept: "Essonne (91) & Yvelines (78)", villes: ["Évry-Courcouronnes", "Versailles", "Saint-Quentin-en-Yvelines", "Massy"] },
];

export default function IleDeFrancePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "SI RISKCONSULTING",
            description: "Bureau d'études spécialisé en sécurité incendie — Coordination SSI, MOE SSI, audit incendie, commission de sécurité ERP",
            url: "https://www.si-riskconsulting.fr",
            telephone: "+33780629492",
            email: "si-riskconsulting@outlook.com",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Noisy-le-Grand",
              postalCode: "93160",
              addressRegion: "Seine-Saint-Denis",
              addressCountry: "FR",
            },
            areaServed: [
              { "@type": "State", name: "Île-de-France" },
              { "@type": "City", name: "Paris" },
              { "@type": "City", name: "Noisy-le-Grand" },
              { "@type": "City", name: "Montreuil" },
              { "@type": "City", name: "Saint-Denis" },
            ],
            openingHoursSpecification: {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
              opens: "09:00",
              closes: "18:00",
            },
          }),
        }}
      />

      {/* Header */}
      <section className="bg-[#0a0f1e] pt-28 pb-16 border-b border-white/8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-sm text-slate-500 mb-8">
            <Link href="/" className="hover:text-orange-400 transition-colors">Accueil</Link>
            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            <span className="text-white">Île-de-France</span>
          </nav>
          <span className="text-orange-400 font-semibold text-xs uppercase tracking-widest">Noisy-le-Grand · Seine-Saint-Denis · Paris · Île-de-France</span>
          <h1 className="mt-3 text-4xl sm:text-5xl font-black text-white mb-4 leading-tight">
            Bureau d&apos;études sécurité incendie<br />
            <span style={{ background: "linear-gradient(135deg, #f97316, #dc2626)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              en Île-de-France
            </span>
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl mb-8">
            Basé à Noisy-le-Grand (93), SI RISKCONSULTING intervient sur l&apos;ensemble de la région Île-de-France pour vos missions de coordination SSI, MOE SSI, audit incendie et accompagnement en commission de sécurité ERP.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/devis" className="px-6 py-3 rounded-lg font-bold text-white text-sm transition-all hover:opacity-90" style={{ background: "linear-gradient(135deg, #f97316, #dc2626)" }}>
              Demander un devis
            </Link>
            <a href="tel:+33780629492" className="px-6 py-3 rounded-lg bg-white/8 border border-white/15 text-white font-semibold text-sm hover:bg-white/15 transition-colors">
              07 80 62 94 92
            </a>
          </div>
        </div>
      </section>

      {/* Implantation */}
      <section className="py-16 bg-[#0d1626]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-black text-white mb-4">Notre zone d&apos;intervention</h2>
          <p className="text-slate-400 mb-8 max-w-2xl">
            Implanté à Noisy-le-Grand au cœur de la Seine-Saint-Denis, nous intervenons sur tous les départements franciliens pour des missions de courte ou longue durée.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {zones.map(({ dept, villes }) => (
              <div key={dept} className="rounded-2xl bg-[#0a0f1e] border border-white/8 p-5">
                <h3 className="text-orange-400 font-bold text-sm mb-3">{dept}</h3>
                <ul className="space-y-1">
                  {villes.map((v) => (
                    <li key={v} className="text-slate-400 text-sm flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-orange-400/60 shrink-0" />
                      {v}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Prestations */}
      <section className="py-16 bg-[#0a0f1e]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-black text-white mb-8">Nos prestations en Île-de-France</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Coordination SSI Île-de-France",
                desc: "Mission CSSI sur vos chantiers ERP, IGH ou ICPE en Île-de-France : CCF SSI, DI-SSI, suivi de réception des équipements SSI.",
                href: "/coordination-ssi",
              },
              {
                title: "MOE SSI Paris & banlieue",
                desc: "Maîtrise d'œuvre SSI pour vos projets de construction ou rénovation en Île-de-France : CCTP SSI, suivi de chantier, réception.",
                href: "/moe-ssi",
              },
              {
                title: "Audit incendie Seine-Saint-Denis",
                desc: "Audit de conformité incendie de vos bâtiments en 93, 94, 92, 75 : analyse des écarts réglementaires, plan d'actions priorisé.",
                href: "/audit-incendie",
              },
              {
                title: "Commission de sécurité ERP",
                desc: "Préparation du dossier et assistance lors des visites de commissions de sécurité ERP en Île-de-France.",
                href: "/commission-securite-erp",
              },
              {
                title: "Désenfumage Île-de-France",
                desc: "Études et vérification des systèmes de désenfumage : cantons, surface utile APSAD R17, IT 246, entrepôts ICPE 1510.",
                href: "/desenfumage",
              },
              {
                title: "Sprinkler & APSAD",
                desc: "Vérification des installations sprinkler selon la règle APSAD R1 (NF EN 12845), classes de risques, ECS et rapports.",
                href: "/sprinkler",
              },
            ].map(({ title, desc, href }) => (
              <Link key={href} href={href} className="group rounded-2xl bg-[#0d1626] border border-white/8 p-6 hover:border-orange-400/30 transition-colors block">
                <h3 className="text-white font-bold mb-2 group-hover:text-orange-400 transition-colors">{title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
                <span className="inline-flex items-center gap-1 text-orange-400 text-sm font-semibold mt-4">
                  En savoir plus
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Pourquoi nous */}
      <section className="py-16 bg-[#0d1626]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-black text-white mb-8">Pourquoi choisir un expert local ?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "Réactivité locale", desc: "Basé en Seine-Saint-Denis, nous pouvons intervenir rapidement sur vos sites franciliens sans délai lié à l'éloignement géographique." },
              { title: "Connaissance du tissu local", desc: "Nos équipes connaissent les SDIS, bureaux de contrôle et commissions de sécurité actifs en Île-de-France et leurs pratiques." },
              { title: "Indépendance totale", desc: "Bureau d'études indépendant de tout installateur ou fabricant : nos préconisations sont uniquement guidées par votre intérêt et la réglementation." },
            ].map(({ title, desc }) => (
              <div key={title} className="rounded-2xl bg-[#0a0f1e] border border-white/8 p-6">
                <h3 className="text-white font-bold mb-2">{title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#0a0f1e] border-t border-white/8">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-black text-white mb-4">Un projet en Île-de-France ?</h2>
          <p className="text-slate-400 mb-8">
            Contactez-nous pour une analyse de votre situation. Réponse sous 24h, devis gratuit et sans engagement.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/devis" className="px-7 py-3 rounded-lg font-bold text-white transition-all hover:opacity-90" style={{ background: "linear-gradient(135deg, #f97316, #dc2626)" }}>
              Demander un devis gratuit
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
