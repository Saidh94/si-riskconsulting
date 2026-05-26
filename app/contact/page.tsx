"use client";

import { useState } from "react";
import Link from "next/link";

type Status = "idle" | "loading" | "success" | "error";

const inputCls =
  "w-full px-4 py-2.5 rounded-lg border border-white/10 bg-[#0a0f1e] text-sm text-white placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition";
const labelCls = "block text-sm font-medium text-slate-300 mb-1.5";

export default function ContactPage() {
  const [form, setForm] = useState({
    nom: "", email: "", telephone: "", sujet: "", message: "",
  });
  const [status, setStatus] = useState<Status>("idle");

  const set = (k: keyof typeof form) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      setStatus(res.ok ? "success" : "error");
    } catch {
      setStatus("error");
    }
  };

  return (
    <>
      {/* Header */}
      <section className="bg-[#0a0f1e] pt-28 pb-16 border-b border-white/8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-sm text-slate-500 mb-8">
            <Link href="/" className="hover:text-orange-400 transition-colors">Accueil</Link>
            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <span className="text-white">Contact</span>
          </nav>
          <span className="text-orange-400 font-semibold text-xs uppercase tracking-widest">Contact</span>
          <h1 className="mt-3 text-4xl sm:text-5xl font-black text-white mb-4">Nous contacter</h1>
          <p className="text-slate-400 text-lg max-w-2xl">
            Une question, un projet ? Écrivez-nous, nous vous répondons sous 24h.
          </p>
        </div>
      </section>

      <section className="py-16 bg-[#0d1626]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Info */}
            <div className="space-y-5">
              <div>
                <h2 className="text-sm font-semibold text-white uppercase tracking-widest mb-5">Coordonnées</h2>
                <ul className="space-y-4">
                  {[
                    {
                      icon: (
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      ),
                      label: "Email",
                      value: "si-riskconsulting@outlook.com",
                      href: "mailto:si-riskconsulting@outlook.com",
                    },
                    {
                      icon: (
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      ),
                      label: "Tél. fixe",
                      value: "01 89 62 94 92",
                      href: "tel:+33189629492",
                    },
                    {
                      icon: (
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                        </svg>
                      ),
                      label: "Portable",
                      value: "07 80 99 24 17",
                      href: "tel:+33780992417",
                    },
                  ].map(({ icon, label, value, href }) => (
                    <li key={label} className="flex items-start gap-3">
                      <span className="w-10 h-10 rounded-lg bg-orange-500/15 text-orange-400 flex items-center justify-center shrink-0">
                        {icon}
                      </span>
                      <div>
                        <div className="text-xs text-slate-500 font-medium">{label}</div>
                        <a href={href} className="text-sm text-white font-medium hover:text-orange-400 transition-colors">
                          {value}
                        </a>
                      </div>
                    </li>
                  ))}
                  <li className="flex items-start gap-3">
                    <span className="w-10 h-10 rounded-lg bg-orange-500/15 text-orange-400 flex items-center justify-center shrink-0">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </span>
                    <div>
                      <div className="text-xs text-slate-500 font-medium">Localisation</div>
                      <p className="text-sm text-white font-medium">Noisy-le-Grand (93160)</p>
                      <p className="text-xs text-slate-500 mt-0.5">Île-de-France · Interventions sur toute la France</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="p-4 rounded-xl bg-orange-500/10 border border-orange-500/20">
                <div className="flex items-start gap-2.5">
                  <svg className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Notre cabinet est basé en <span className="text-orange-400 font-medium">Île-de-France (Noisy-le-Grand)</span> et intervient sur l&apos;ensemble du territoire national.
                  </p>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-[#0a0f1e] border border-white/8">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 rounded-full bg-green-400" />
                  <span className="text-sm font-medium text-white">Réponse garantie</span>
                </div>
                <p className="text-xs text-slate-500">
                  Nous répondons à toutes les demandes sous 24h ouvrées.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-[#0a0f1e] border border-orange-500/20">
                <h3 className="text-white font-bold text-sm mb-1">Notre cabinet vous répond</h3>
                <p className="text-orange-400 text-xs mb-4">Ingénierie en prévention incendie</p>
                <Link
                  href="/devis"
                  className="inline-block w-full text-center px-4 py-2.5 rounded-lg text-white text-sm font-bold transition-all hover:opacity-90"
                  style={{ background: "linear-gradient(135deg, #f97316, #dc2626)" }}
                >
                  Demander un devis
                </Link>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              <div className="bg-[#0a0f1e] rounded-2xl border border-white/8 p-8">
                {status === "success" ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 rounded-full bg-green-500/15 text-green-400 flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h2 className="text-xl font-bold text-white mb-2">Message envoyé !</h2>
                    <p className="text-slate-400 mb-6">Nous vous répondrons sous 24h.</p>
                    <button
                      onClick={() => { setStatus("idle"); setForm({ nom: "", email: "", telephone: "", sujet: "", message: "" }); }}
                      className="text-orange-400 font-semibold text-sm hover:underline"
                    >
                      Envoyer un autre message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={submit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className={labelCls}>Nom complet <span className="text-red-400">*</span></label>
                        <input type="text" value={form.nom} onChange={set("nom")} required placeholder="Prénom Nom" className={inputCls} />
                      </div>
                      <div>
                        <label className={labelCls}>Email <span className="text-red-400">*</span></label>
                        <input type="email" value={form.email} onChange={set("email")} required placeholder="vous@exemple.fr" className={inputCls} />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className={labelCls}>Téléphone</label>
                        <input type="tel" value={form.telephone} onChange={set("telephone")} placeholder="01 89 62 94 92" className={inputCls} />
                      </div>
                      <div>
                        <label className={labelCls}>Sujet</label>
                        <select value={form.sujet} onChange={set("sujet")} className={inputCls}>
                          <option value="">Sélectionner...</option>
                          <option>CSSI / MOE SSI</option>
                          <option>AMO sécurité incendie</option>
                          <option>Audit & analyse de risques</option>
                          <option>Conformité réglementaire</option>
                          <option>Autre</option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <label className={labelCls}>Message <span className="text-red-400">*</span></label>
                      <textarea
                        value={form.message}
                        onChange={set("message")}
                        required
                        rows={5}
                        placeholder="Décrivez votre projet ou votre question..."
                        className={`${inputCls} resize-none`}
                      />
                    </div>
                    <div className="flex items-start gap-3 p-4 rounded-xl bg-white/3 border border-white/8">
                      <input
                        type="checkbox"
                        id="rgpd-contact"
                        required
                        className="mt-0.5 w-4 h-4 shrink-0 accent-orange-500 cursor-pointer"
                      />
                      <label htmlFor="rgpd-contact" className="text-xs text-slate-400 leading-relaxed cursor-pointer">
                        J&apos;accepte la{" "}
                        <Link href="/politique-de-confidentialite" className="text-orange-400 hover:underline">
                          politique de confidentialité
                        </Link>{" "}
                        et le traitement de mes données personnelles conformément au RGPD.{" "}
                        <span className="text-red-400">*</span>
                      </label>
                    </div>
                    {status === "error" && (
                      <p className="text-red-400 text-sm">Une erreur est survenue. Veuillez réessayer.</p>
                    )}
                    <button
                      type="submit"
                      disabled={status === "loading"}
                      className="w-full py-3 rounded-lg text-white font-semibold disabled:opacity-60 disabled:cursor-not-allowed transition-all hover:opacity-90"
                      style={{ background: "linear-gradient(135deg, #f97316, #dc2626)" }}
                    >
                      {status === "loading" ? "Envoi en cours..." : "Envoyer le message"}
                    </button>
                    <p className="text-xs text-slate-600 text-center">
                      Vos données sont utilisées uniquement pour répondre à votre demande.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Google Maps */}
      <section className="bg-[#060c18] border-t border-white/8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-9 h-9 rounded-lg bg-orange-500/15 text-orange-400 flex items-center justify-center shrink-0">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </span>
            <div>
              <h2 className="text-white font-bold text-lg">Basé à Noisy-le-Grand</h2>
              <p className="text-slate-500 text-sm">93160 · Île-de-France · Interventions sur toute la France</p>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden border border-white/8 h-80">
            <iframe
              title="Localisation SI RISKCONSULTING – Noisy-le-Grand"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d21007.45!2d2.5500!3d48.8450!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e60e1b2f3c3b3b%3A0x40b82c3688c9e00!2sNoisy-le-Grand%2C%2093160!5e0!3m2!1sfr!2sfr!4v1700000000000"
              width="100%"
              height="100%"
              style={{ border: 0, filter: "invert(90%) hue-rotate(180deg)" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </>
  );
}
