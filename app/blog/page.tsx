import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog sécurité incendie — Guides, réglementation et conseils",
  description:
    "Articles techniques sur la sécurité incendie : coordination SSI, APSAD, désenfumage, sprinkler, réglementation ERP/IGH/ICPE. Par les experts de SI RISKCONSULTING.",
  alternates: { canonical: "https://www.si-riskconsulting.fr/blog" },
  openGraph: {
    title: "Blog sécurité incendie | SI RISKCONSULTING",
    description: "Guides techniques, analyses réglementaires et conseils d'experts en sécurité incendie.",
    url: "https://www.si-riskconsulting.fr/blog",
  },
};

const articles = [
  {
    slug: "/coordination-ssi",
    tag: "Coordination SSI",
    title: "Coordination SSI : le guide complet pour maîtriser votre CSSI",
    excerpt: "Missions du CSSI, CCF SSI, DI-SSI, obligations réglementaires ERP/IGH/ICPE. Tout ce qu'il faut savoir sur la coordination des Systèmes de Sécurité Incendie.",
    date: "Juin 2026",
    readTime: "8 min",
  },
  {
    slug: "/apsad",
    tag: "APSAD",
    title: "APSAD sécurité incendie : guide complet des règles R1, R7, R13, D9",
    excerpt: "Les règles APSAD définissent les conditions d'installation et de vérification des systèmes de protection incendie. Indispensables pour les assureurs.",
    date: "Juin 2026",
    readTime: "7 min",
  },
  {
    slug: "/audit-incendie",
    tag: "Audit",
    title: "Audit incendie bâtiment : méthode, livrables et obligations",
    excerpt: "Comment se déroule un audit incendie ? Méthode, documents analysés, livrables (rapport, plan d'actions) et coût selon le type d'établissement.",
    date: "Juin 2026",
    readTime: "6 min",
  },
  {
    slug: "/moe-ssi",
    tag: "MOE SSI",
    title: "MOE SSI : Maîtrise d'Œuvre SSI, missions de la conception à la réception",
    excerpt: "La mission de MOE SSI couvre la conception du système SSI, la rédaction du CCTP, le suivi de chantier et la réception. Tout savoir sur cette prestation.",
    date: "Juin 2026",
    readTime: "5 min",
  },
  {
    slug: "/sprinkler",
    tag: "Systèmes",
    title: "Sprinkler : extinction automatique à eau, APSAD R1 et classes de risques",
    excerpt: "Principe de fonctionnement, règle APSAD R1, classes de risques (GO1 à GO4), obligations de vérification. Le guide complet sur les systèmes sprinkler.",
    date: "Juin 2026",
    readTime: "6 min",
  },
  {
    slug: "/desenfumage",
    tag: "Systèmes",
    title: "Désenfumage : naturel ou mécanique, réglementation par établissement",
    excerpt: "Désenfumage naturel (exutoires) vs mécanique (ventilateurs). Obligations par type de bâtiment : ERP, IGH, ICPE, Code du Travail.",
    date: "Juin 2026",
    readTime: "5 min",
  },
];

const cocons = [
  { label: "Coordination SSI", href: "/coordination-ssi", count: "12 articles" },
  { label: "APSAD", href: "/apsad", count: "8 articles" },
  { label: "Audits incendie", href: "/audit-incendie", count: "9 articles" },
  { label: "Systèmes SSI", href: "/sprinkler", count: "7 articles" },
  { label: "Réglementation", href: "/expertises", count: "10 articles" },
  { label: "Secteurs", href: "/expertises", count: "8 articles" },
];

export default function BlogPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-[#0a0f1e] pt-28 pb-16 border-b border-white/8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-sm text-slate-500 mb-8">
            <Link href="/" className="hover:text-orange-400 transition-colors">Accueil</Link>
            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            <span className="text-white">Blog</span>
          </nav>
          <span className="text-orange-400 font-semibold text-xs uppercase tracking-widest">Expertise · Réglementation · Conseils</span>
          <h1 className="mt-3 text-4xl sm:text-5xl font-black text-white mb-4">
            Blog sécurité incendie
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl">
            Guides techniques, analyses réglementaires et retours d&apos;expérience par les experts
            de SI RISKCONSULTING. Coordination SSI, APSAD, désenfumage, sprinkler, ERP, IGH, ICPE.
          </p>
        </div>
      </section>

      {/* Contenu principal + sidebar */}
      <section className="py-16 bg-[#0d1626]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

            {/* Articles */}
            <div className="lg:col-span-2 space-y-8">
              {articles.map(({ slug, tag, title, excerpt, date, readTime }) => (
                <article key={slug} className="rounded-2xl bg-[#0a0f1e] border border-white/8 p-6 hover:border-orange-400/30 transition-colors group">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="px-3 py-1 rounded-full bg-orange-500/15 border border-orange-500/25 text-orange-400 text-xs font-semibold">
                      {tag}
                    </span>
                    <span className="text-slate-600 text-xs">{date} · {readTime} de lecture</span>
                  </div>
                  <Link href={slug}>
                    <h2 className="text-white font-bold text-xl mb-3 group-hover:text-orange-400 transition-colors leading-snug">
                      {title}
                    </h2>
                  </Link>
                  <p className="text-slate-400 text-sm leading-relaxed mb-4">{excerpt}</p>
                  <Link href={slug} className="inline-flex items-center gap-1.5 text-orange-400 text-sm font-semibold hover:gap-2.5 transition-all">
                    Lire l&apos;article
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                  </Link>
                </article>
              ))}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Thématiques */}
              <div className="rounded-2xl bg-[#0a0f1e] border border-white/8 p-6">
                <h3 className="text-white font-bold text-sm uppercase tracking-widest mb-4">Thématiques</h3>
                <ul className="space-y-2">
                  {cocons.map(({ label, href }) => (
                    <li key={label}>
                      <Link href={href} className="flex items-center justify-between text-slate-400 hover:text-orange-400 transition-colors text-sm py-1">
                        <span>{label}</span>
                        <svg className="w-4 h-4 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA contact */}
              <div className="rounded-2xl p-6 border border-orange-500/25" style={{ background: "linear-gradient(135deg, rgba(249,115,22,0.1), rgba(220,38,38,0.1))" }}>
                <h3 className="text-white font-bold mb-2">Un projet à étudier ?</h3>
                <p className="text-slate-400 text-sm mb-4">
                  Nos experts répondent à toutes vos questions en sécurité incendie.
                </p>
                <Link href="/devis" className="block text-center px-4 py-2.5 rounded-lg font-bold text-white text-sm transition-all hover:opacity-90" style={{ background: "linear-gradient(135deg, #f97316, #dc2626)" }}>
                  Demander un devis
                </Link>
              </div>

              {/* Pages de service */}
              <div className="rounded-2xl bg-[#0a0f1e] border border-white/8 p-6">
                <h3 className="text-white font-bold text-sm uppercase tracking-widest mb-4">Nos prestations</h3>
                <ul className="space-y-2">
                  {[
                    { href: "/coordination-ssi", label: "Coordination SSI" },
                    { href: "/moe-ssi", label: "MOE SSI" },
                    { href: "/audit-incendie", label: "Audit incendie" },
                    { href: "/expertises", label: "Toutes nos expertises" },
                  ].map(({ href, label }) => (
                    <li key={href}>
                      <Link href={href} className="flex items-center gap-2 text-slate-400 hover:text-orange-400 transition-colors text-sm py-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-orange-400 shrink-0" />
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
