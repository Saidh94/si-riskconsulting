import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "SI RISKCONSULTING – Conseil & Ingénierie Sécurité Incendie",
  description:
    "SI RISKCONSULTING, bureau d'études en sécurité incendie. Conseil, Coordination SSI, MOE SSI, audits réglementaires pour ERP, IGH, logistique, industrie.",
  alternates: { canonical: "https://www.si-riskconsulting.fr" },
};

const expertises = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18" />
      </svg>
    ),
    title: "CSSI & MOE SSI",
    desc: "Coordination Sécurité des Systèmes Incendie et Maîtrise d'Œuvre SSI pour vos opérations de construction et réhabilitation.",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
    imageAlt: "Coordination chantier avec plans – CSSI MOE SSI",
    eager: true,
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "AMO Sécurité Incendie",
    desc: "Assistance à Maîtrise d'Ouvrage : accompagnement stratégique et technique de vos projets, de la programmation à la réception.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
    imageAlt: "Ingénieur analysant des plans techniques – AMO sécurité incendie",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
    title: "Audits & Analyses de risques",
    desc: "Diagnostics approfondis, identification des non-conformités et plans d'actions priorisés pour vos bâtiments existants.",
    image: "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?w=800&q=80",
    imageAlt: "Site industriel – audit et analyse de risques incendie",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "Conformité Réglementaire",
    desc: "Vérification de la conformité incendie selon les réglementations ERP, IGH, Code du travail et ICPE. Dossiers de sécurité et commissions.",
    image: "https://images.unsplash.com/photo-1553413077-190dd305871c?w=600&q=80",
    imageAlt: "Entrepôt logistique ERP avec allées et rayonnages",
  },
];

const secteurs = [
  { label: "Logistique", image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&q=80" },
  { label: "Industrie", image: "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=600&q=80" },
  { label: "Tertiaire", image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80" },
  { label: "ERP", image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=600&q=80" },
  { label: "ICPE", image: "https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?w=600&q=80" },
  { label: "IGH", image: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=600&q=80" },
  { label: "Habitation", image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&q=80" },
];

const references = [
  { name: "CBRE", sector: "Immobilier d'entreprise" },
  { name: "ID LOGISTICS", sector: "Logistique" },
  { name: "SEGRO", sector: "Immobilier industriel & logistique" },
  { name: "VINTED GO", sector: "Logistique" },
  { name: "SNCF IMMOBILIER", sector: "Infrastructure & tertiaire" },
  { name: "Ville de Sucy-en-Brie", sector: "Collectivité" },
  { name: "Ville de Montreuil", sector: "Collectivité" },
  { name: "AUBAY", sector: "Tertiaire & numérique" },
];

export default function HomePage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center bg-[#0a0f1e] overflow-hidden pt-16">
        {/* Gradient blobs */}
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute top-0 left-0 w-full h-full opacity-20"
            style={{
              backgroundImage:
                "radial-gradient(ellipse at 15% 60%, #f97316 0%, transparent 45%), radial-gradient(ellipse at 85% 20%, #7c3aed 0%, transparent 40%)",
            }}
          />
          <div className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 80px, rgba(255,255,255,0.5) 80px, rgba(255,255,255,0.5) 81px), repeating-linear-gradient(90deg, transparent, transparent 80px, rgba(255,255,255,0.5) 80px, rgba(255,255,255,0.5) 81px)",
            }}
          />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Text */}
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-orange-500/15 border border-orange-500/30 text-orange-400 text-xs font-semibold mb-8 uppercase tracking-widest">
                <span className="w-1.5 h-1.5 rounded-full bg-orange-400" />
                Bureau d&apos;études – Sécurité incendie
              </span>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-[1.05] mb-6">
                Maîtriser le risque incendie,
                <span className="block mt-1" style={{ background: "linear-gradient(90deg, #f97316, #dc2626)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                  sécuriser vos projets.
                </span>
              </h1>

              <p className="text-lg sm:text-xl text-slate-400 font-medium mb-3">
                Conseil · Coordination SSI · MOE SSI · Audits réglementaires
              </p>
              <p className="text-slate-500 text-base leading-relaxed mb-12 max-w-xl">
                SI RISKCONSULTING accompagne maîtres d&apos;ouvrage, promoteurs et exploitants
                dans toutes leurs démarches de prévention incendie — de la conception à la réception.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/devis"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg font-bold text-white transition-all hover:opacity-90 hover:scale-[1.02]"
                  style={{ background: "linear-gradient(135deg, #f97316, #dc2626)" }}
                >
                  Demander un devis gratuit
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
                <Link
                  href="/expertises"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg bg-white/8 border border-white/15 text-white font-semibold hover:bg-white/15 transition-colors"
                >
                  Nos expertises
                </Link>
              </div>

              <div className="mt-16 flex flex-wrap gap-10 pt-10 border-t border-white/10">
                {[
                  { value: "15+", label: "ans d'expérience" },
                  { value: "200+", label: "projets réalisés" },
                  { value: "8", label: "secteurs couverts" },
                ].map(({ value, label }) => (
                  <div key={label}>
                    <div className="text-4xl font-black text-orange-400">{value}</div>
                    <div className="text-sm text-slate-500 mt-1">{label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Hero image */}
            <div className="hidden lg:block relative h-[580px] rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=900&q=80"
                alt="Bâtiment industriel moderne – sécurité incendie"
                fill
                sizes="50vw"
                className="object-cover"
                priority
              />
              {/* Dark gradient blending left edge into background */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#0a0f1e] via-[#0a0f1e]/20 to-transparent" />
              {/* Orange accent badge overlay */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-[#0a0f1e]/80 backdrop-blur-sm border border-white/10">
                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-orange-400 shrink-0" />
                  <p className="text-sm text-slate-300 font-medium">
                    Expertise ERP · IGH · ICPE · Logistique sur toute la France
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── EXPERTISES ── */}
      <section id="expertises" className="py-24 bg-[#0d1626]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-orange-400 font-semibold text-xs uppercase tracking-widest">Nos expertises</span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-black text-white">
              Un accompagnement complet
            </h2>
            <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
              De l&apos;étude préalable à la réception des travaux, notre cabinet intervient
              à chaque étape de votre projet.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {expertises.map(({ icon, title, desc, image, imageAlt, eager }) => (
              <div
                key={title}
                className="group rounded-2xl border border-white/8 bg-[#0a0f1e] hover:border-orange-500/30 hover:bg-[#111827] transition-all overflow-hidden"
              >
                {/* Card image */}
                <div className="relative h-44 overflow-hidden">
                  <Image
                    src={image}
                    alt={imageAlt}
                    fill
                    sizes="(max-width: 640px) 100vw, 50vw"
                    loading={eager ? "eager" : "lazy"}
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-[#0a0f1e]/55" />
                  {/* Orange gradient bottom fade */}
                  <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#0a0f1e] to-transparent" />
                </div>
                {/* Card body */}
                <div className="p-8 pt-6">
                  <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-5 text-orange-400 border border-orange-500/20 bg-orange-500/10 group-hover:bg-orange-500 group-hover:text-white group-hover:border-orange-500 transition-all">
                    {icon}
                  </div>
                  <h3 className="font-bold text-white text-lg mb-2">{title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/expertises"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-orange-500/40 text-orange-400 font-semibold hover:bg-orange-500 hover:text-white hover:border-orange-500 transition-all text-sm"
            >
              Détail de nos prestations
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ── DOMAINES ── */}
      <section className="py-24 bg-[#060c18]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Texte */}
            <div>
              <span className="text-orange-400 font-semibold text-xs uppercase tracking-widest">Domaines d&apos;intervention</span>
              <h2 className="mt-3 text-3xl sm:text-4xl font-black text-white mb-6">
                SSI · Sprinkler · Détection · Extinction
              </h2>
              <p className="text-slate-400 leading-relaxed mb-6">
                Notre bureau d&apos;études intervient sur l&apos;ensemble des systèmes de sécurité
                incendie actifs et passifs : <strong className="text-white">Systèmes de Sécurité Incendie (SSI)</strong>,
                réseaux d&apos;extinction automatique à eau <strong className="text-white">(sprinkler, brouillard d&apos;eau)</strong>,
                désenfumage, détection incendie, et moyens de première intervention.
              </p>
              <p className="text-slate-400 leading-relaxed">
                Que ce soit en phase conception, travaux ou exploitation, nous vérifions la conformité
                de ces installations aux référentiels en vigueur : <strong className="text-white">règlement ERP, IGH,
                Code du travail, ICPE, règles APSAD</strong> et normes NF S61-9xx.
              </p>
            </div>

            {/* Images SSI + SPK */}
            <div className="grid grid-cols-2 gap-4">
              <div className="relative rounded-2xl overflow-hidden border border-white/8 h-64">
                <Image
                  src="https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=600&q=80"
                  alt="Tableau SSI – Système de Sécurité Incendie"
                  fill
                  sizes="(max-width: 1024px) 50vw, 25vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#060c18] via-[#060c18]/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <span className="text-xs font-bold text-white uppercase tracking-wider">SSI</span>
                  <p className="text-xs text-slate-400 mt-0.5">Système de Sécurité Incendie</p>
                </div>
              </div>
              <div className="relative rounded-2xl overflow-hidden border border-white/8 h-64">
                <Image
                  src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80"
                  alt="Réseau sprinkler – extinction automatique à eau"
                  fill
                  sizes="(max-width: 1024px) 50vw, 25vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#060c18] via-[#060c18]/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <span className="text-xs font-bold text-white uppercase tracking-wider">Sprinkler</span>
                  <p className="text-xs text-slate-400 mt-0.5">Extinction automatique à eau</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTEURS ── */}
      <section id="secteurs" className="py-24 bg-[#0a0f1e]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-orange-400 font-semibold text-xs uppercase tracking-widest">Secteurs d&apos;intervention</span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-black text-white">
              Tous types d&apos;établissements
            </h2>
            <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
              Notre expertise couvre l&apos;ensemble du parc bâti français, des entrepôts
              logistiques aux établissements recevant du public.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {secteurs.map(({ label, image }) => (
              <div
                key={label}
                className="group relative rounded-2xl overflow-hidden cursor-default"
                style={{ height: "200px" }}
              >
                <Image
                  src={image}
                  alt={label}
                  fill
                  sizes="(max-width: 640px) 50vw, 25vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Gradient overlay noir/bleu */}
                <div
                  className="absolute inset-0 transition-opacity duration-300 group-hover:opacity-70"
                  style={{ background: "linear-gradient(to top, rgba(6,12,24,0.9) 0%, rgba(10,15,30,0.55) 50%, rgba(10,15,30,0.25) 100%)" }}
                />
                {/* Label centré */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-base font-bold text-white drop-shadow-lg tracking-wide text-center px-3">
                    {label}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── RÉFÉRENCES ── */}
      <section id="references" className="py-24 bg-[#0d1626]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-orange-400 font-semibold text-xs uppercase tracking-widest">Références</span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-black text-white">
              Ils nous font confiance
            </h2>
            <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
              Grands groupes privés, acteurs publics et collectivités — notre cabinet
              intervient pour des clients exigeants dans des secteurs variés.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {references.map(({ name, sector }) => (
              <div
                key={name}
                className="group flex flex-col justify-center items-center gap-2 p-6 rounded-2xl border border-white/8 bg-[#0a0f1e] hover:border-orange-500/20 transition-all"
              >
                <div className="text-base font-black text-white text-center tracking-tight">
                  {name}
                </div>
                <div className="text-xs text-slate-500 text-center">{sector}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── À PROPOS ── */}
      <section id="apropos" className="py-24 bg-[#0a0f1e]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <span className="text-orange-400 font-semibold text-xs uppercase tracking-widest">À propos</span>
              <div className="mt-2 mb-1 flex items-center gap-2 text-sm text-slate-500">
                <svg className="w-4 h-4 text-orange-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Basé à Noisy-le-Grand (93) · Interventions dans toute la France
              </div>
              <h2 className="mt-3 text-3xl sm:text-4xl font-black text-white mb-6">
                L&apos;expertise au service
                <br />de votre sécurité
              </h2>
              <p className="text-slate-400 leading-relaxed mb-4">
                SI RISKCONSULTING est un bureau d&apos;études indépendant spécialisé dans la
                sécurité incendie. Notre équipe d&apos;ingénieurs diplômés intervient sur
                l&apos;ensemble du territoire national pour des projets de toutes envergures.
              </p>
              <p className="text-slate-400 leading-relaxed mb-10">
                Notre approche combine rigueur réglementaire et conseil pragmatique, pour
                trouver les solutions adaptées à chaque projet et chaque contexte.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
                {[
                  "Indépendance et objectivité",
                  "Réactivité garantie",
                  "Expertise pluridisciplinaire",
                  "Suivi personnalisé",
                ].map((val) => (
                  <div key={val} className="flex items-center gap-2.5 text-sm text-slate-300">
                    <span className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 bg-orange-500/20 text-orange-400">
                      <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    {val}
                  </div>
                ))}
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-white transition-all hover:opacity-90"
                style={{ background: "linear-gradient(135deg, #f97316, #dc2626)" }}
              >
                Nous contacter
              </Link>
            </div>

            {/* À propos image with overlay */}
            <div className="relative h-[480px] rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=900&q=80"
                alt="Réunion technique d'ingénieurs en prévention incendie"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              {/* Dark gradient from bottom */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1e] via-[#0a0f1e]/30 to-transparent" />
              {/* Info overlay at bottom */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="bg-[#0a0f1e]/85 backdrop-blur-sm rounded-xl border border-white/10 p-5">
                  <h3 className="text-white font-bold text-base mb-1">Notre cabinet</h3>
                  <p className="text-orange-400 text-xs mb-4">Ingénierie en prévention incendie</p>
                  <ul className="space-y-2">
                    {[
                      "Ingénieurs diplômés – prévention des risques incendie",
                      "Experts ERP / IGH / Code du travail / ICPE",
                      "Intervention sur toute la France",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-xs text-slate-400">
                        <span className="w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5 bg-orange-500/20 text-orange-400">
                          <svg className="w-2.5 h-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 relative overflow-hidden bg-[#0d1626]">
        <div
          className="absolute inset-0 opacity-15"
          style={{
            backgroundImage: "radial-gradient(ellipse at 50% 50%, #f97316 0%, transparent 60%)",
          }}
        />
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-5xl font-black text-white mb-5">
            Un projet ? Une question ?
          </h2>
          <p className="text-slate-400 text-lg mb-12 max-w-xl mx-auto">
            Décrivez-nous votre besoin et recevez une proposition personnalisée sous 24h, sans engagement.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/devis"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-lg font-bold text-white text-base transition-all hover:opacity-90 hover:scale-[1.02]"
              style={{ background: "linear-gradient(135deg, #f97316, #dc2626)" }}
            >
              Demander un devis gratuit
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-white/8 border border-white/15 text-white font-semibold hover:bg-white/15 transition-colors"
            >
              Nous écrire
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
