"use client";

import { useState } from "react";
import Link from "next/link";

type Status = "idle" | "loading" | "success" | "error";

export default function DevisPage() {
  const [form, setForm] = useState({
    nom: "", societe: "", email: "", telephone: "",
    typeEtablissement: "", surface: "", typePrestation: "", delai: "", description: "",
  });
  const [status, setStatus] = useState<Status>("idle");

  const set = (k: keyof typeof form) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: "d5e1f1de-f384-4961-b4da-2305abdd73fc",
          subject: `[Devis] ${form.typePrestation} – ${form.nom}${form.societe ? ` (${form.societe})` : ""}`,
          from_name: "SI RISKCONSULTING Site",
          name: form.nom,
          email: form.email,
          replyto: form.email,
          societe: form.societe || "Non renseigné",
          telephone: form.telephone || "Non renseigné",
          type_etablissement: form.typeEtablissement || "Non renseigné",
          surface: form.surface ? `${form.surface} m²` : "Non renseigné",
          type_prestation: form.typePrestation,
          delai: form.delai || "Non renseigné",
          message: form.description || "Aucune description",
        }),
      });
      const data = await res.json();
      setStatus(data.success ? "success" : "error");
    } catch {
      setStatus("error");
    }
  };

  const inputCls =
    "w-full px-4 py-2.5 rounded-lg border border-white/10 bg-[#0a0f1e] text-sm text-white placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition";
  const labelCls = "block text-sm font-medium text-slate-300 mb-1.5";

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
            <span className="text-white">Demander un devis</span>
          </nav>
          <span className="text-orange-400 font-semibold text-xs uppercase tracking-widest">Devis gratuit</span>
          <h1 className="mt-3 text-4xl sm:text-5xl font-black text-white mb-4">Demander un devis</h1>
          <p className="text-slate-400 text-lg max-w-2xl">
            Décrivez votre projet et recevez une proposition personnalisée sous 24h, sans engagement.
          </p>
        </div>
      </section>

      <section className="py-16 bg-[#0d1626]">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          {/* Guarantees */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
            {[
              { icon: "⚡", title: "Réponse sous 24h", desc: "Devis personnalisé rapide" },
              { icon: "🎯", title: "Sans engagement", desc: "Gratuit et sans obligation" },
              { icon: "🔒", title: "Confidentialité", desc: "Données protégées" },
            ].map(({ icon, title, desc }) => (
              <div key={title} className="flex items-center gap-3 bg-[#0a0f1e] rounded-xl p-4 border border-white/8">
                <span className="text-2xl">{icon}</span>
                <div>
                  <div className="text-sm font-semibold text-white">{title}</div>
                  <div className="text-xs text-slate-500">{desc}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-[#0a0f1e] rounded-2xl border border-white/8 p-8">
            {status === "success" ? (
              <div className="text-center py-16">
                <div className="w-20 h-20 rounded-full bg-green-500/15 text-green-400 flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h2 className="text-2xl font-black text-white mb-3">Demande envoyée !</h2>
                <p className="text-slate-400 mb-2">
                  Merci pour votre demande de devis. Notre cabinet vous contactera
                  sous 24h ouvrées avec une proposition personnalisée.
                </p>
                <p className="text-slate-500 text-sm mb-8">Confirmation envoyée à {form.email}</p>
                <button
                  onClick={() => {
                    setStatus("idle");
                    setForm({ nom: "", societe: "", email: "", telephone: "", typeEtablissement: "", surface: "", typePrestation: "", delai: "", description: "" });
                  }}
                  className="text-orange-400 font-semibold text-sm hover:underline"
                >
                  Faire une nouvelle demande
                </button>
              </div>
            ) : (
              <form onSubmit={submit} className="space-y-6">
                {/* Contact */}
                <div>
                  <h2 className="text-sm font-semibold text-white uppercase tracking-widest mb-4 pb-3 border-b border-white/8">
                    Vos coordonnées
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className={labelCls}>Nom complet <span className="text-red-400">*</span></label>
                      <input type="text" value={form.nom} onChange={set("nom")} required placeholder="Prénom Nom" className={inputCls} />
                    </div>
                    <div>
                      <label className={labelCls}>Société / Organisation</label>
                      <input type="text" value={form.societe} onChange={set("societe")} placeholder="Nom de la société" className={inputCls} />
                    </div>
                    <div>
                      <label className={labelCls}>Email <span className="text-red-400">*</span></label>
                      <input type="email" value={form.email} onChange={set("email")} required placeholder="vous@exemple.fr" className={inputCls} />
                    </div>
                    <div>
                      <label className={labelCls}>Téléphone</label>
                      <input type="tel" value={form.telephone} onChange={set("telephone")} placeholder="01 89 62 94 92" className={inputCls} />
                    </div>
                  </div>
                </div>

                {/* Project */}
                <div>
                  <h2 className="text-sm font-semibold text-white uppercase tracking-widest mb-4 pb-3 border-b border-white/8">
                    Votre projet
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className={labelCls}>Type d&apos;établissement</label>
                      <select value={form.typeEtablissement} onChange={set("typeEtablissement")} className={inputCls}>
                        <option value="">Sélectionner...</option>
                        <optgroup label="ERP">
                          <option>ERP – Type M (commerce)</option>
                          <option>ERP – Type N (restauration)</option>
                          <option>ERP – Type O (hôtel)</option>
                          <option>ERP – Type R (enseignement)</option>
                          <option>ERP – Type U (sanitaire)</option>
                          <option>ERP – Type W (bureaux)</option>
                          <option>ERP – Autre type</option>
                        </optgroup>
                        <optgroup label="IGH">
                          <option>IGH – Bureaux</option>
                          <option>IGH – Résidentiel</option>
                          <option>IGH – Usage mixte</option>
                        </optgroup>
                        <optgroup label="Bâtiment à Usage Professionnel (BUP)">
                          <option>BUP – Bâtiment à usage professionnel</option>
                        </optgroup>
                        <optgroup label="Industrie / Logistique">
                          <option>Entrepôt logistique</option>
                          <option>Site industriel / ICPE</option>
                          <option>Site technique</option>
                          <option>Habitation</option>
                        </optgroup>
                      </select>
                    </div>
                    <div>
                      <label className={labelCls}>Surface approximative (m²)</label>
                      <input type="number" value={form.surface} onChange={set("surface")} placeholder="ex. 25000" min="0" className={inputCls} />
                    </div>
                    <div>
                      <label className={labelCls}>Type de prestation <span className="text-red-400">*</span></label>
                      <select value={form.typePrestation} onChange={set("typePrestation")} required className={inputCls}>
                        <option value="">Sélectionner...</option>
                        <option>CSSI (Coordination SSI)</option>
                        <option>MOE SSI (Maîtrise d&apos;Œuvre SSI)</option>
                        <option>AMO sécurité incendie</option>
                        <option>Audit & analyse de risques</option>
                        <option>Conformité réglementaire</option>
                        <option>Plusieurs prestations</option>
                      </select>
                    </div>
                    <div>
                      <label className={labelCls}>Délai souhaité</label>
                      <select value={form.delai} onChange={set("delai")} className={inputCls}>
                        <option value="">Sélectionner...</option>
                        <option>Urgent (moins d&apos;1 semaine)</option>
                        <option>Sous 2 à 4 semaines</option>
                        <option>1 à 3 mois</option>
                        <option>Plus de 3 mois</option>
                        <option>À définir ensemble</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <div>
                  <label className={labelCls}>Description du projet</label>
                  <textarea
                    value={form.description}
                    onChange={set("description")}
                    rows={4}
                    placeholder="Décrivez votre projet, le contexte réglementaire, les contraintes particulières..."
                    className={`${inputCls} resize-none`}
                  />
                </div>

                {/* RGPD consent */}
                <div className="flex items-start gap-3 p-4 rounded-xl bg-white/3 border border-white/8">
                  <input
                    type="checkbox"
                    id="rgpd-devis"
                    required
                    className="mt-0.5 w-4 h-4 shrink-0 accent-orange-500 cursor-pointer"
                  />
                  <label htmlFor="rgpd-devis" className="text-xs text-slate-400 leading-relaxed cursor-pointer">
                    J&apos;accepte la{" "}
                    <Link href="/politique-de-confidentialite" className="text-orange-400 hover:underline">
                      politique de confidentialité
                    </Link>{" "}
                    et le traitement de mes données personnelles conformément au RGPD.{" "}
                    <span className="text-red-400">*</span>
                  </label>
                </div>

                {status === "error" && (
                  <p className="text-red-400 text-sm">Une erreur est survenue. Veuillez réessayer ou nous contacter directement.</p>
                )}

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full py-3.5 rounded-lg text-white font-bold text-base disabled:opacity-60 disabled:cursor-not-allowed transition-all hover:opacity-90"
                  style={{ background: "linear-gradient(135deg, #f97316, #dc2626)" }}
                >
                  {status === "loading" ? "Envoi en cours..." : "Envoyer ma demande de devis"}
                </button>
                <p className="text-xs text-slate-600 text-center">
                  Devis gratuit, sans engagement. Réponse sous 24h ouvrées.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
