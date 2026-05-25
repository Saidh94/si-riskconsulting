import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Politique de confidentialité – SI RISKCONSULTING",
  description: "Politique de confidentialité et gestion des cookies de SI RISKCONSULTING.",
  robots: { index: false },
};

export default function PolitiqueConfidentialitePage() {
  return (
    <>
      <section className="bg-[#0a0f1e] pt-28 pb-16 border-b border-white/8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-sm text-slate-500 mb-8">
            <Link href="/" className="hover:text-orange-400 transition-colors">Accueil</Link>
            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <span className="text-white">Politique de confidentialité</span>
          </nav>
          <span className="text-orange-400 font-semibold text-xs uppercase tracking-widest">RGPD & Cookies</span>
          <h1 className="mt-3 text-4xl sm:text-5xl font-black text-white">Politique de confidentialité</h1>
        </div>
      </section>

      <section className="py-16 bg-[#0d1626]">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">

            {/* Intro */}
            <div className="bg-orange-500/10 border border-orange-500/20 rounded-2xl p-6">
              <p className="text-slate-300 text-sm leading-relaxed">
                SI RISKCONSULTING s&apos;engage à protéger votre vie privée. Cette politique explique quelles données nous collectons, pourquoi, et comment vous pouvez exercer vos droits. Responsable du traitement : <strong className="text-white">SI RISKCONSULTING</strong> – Noisy-le-Grand (93), Île-de-France.
              </p>
            </div>

            {/* Données collectées */}
            <div className="bg-[#0a0f1e] rounded-2xl border border-white/8 p-8">
              <h2 className="text-lg font-bold text-white mb-4 pb-3 border-b border-white/8">1. Données collectées</h2>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">
                Nous collectons uniquement les données que vous nous transmettez volontairement via nos formulaires :
              </p>
              <div className="overflow-hidden rounded-xl border border-white/8">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-white/5 text-left">
                      <th className="px-4 py-3 text-slate-300 font-semibold">Donnée</th>
                      <th className="px-4 py-3 text-slate-300 font-semibold">Obligatoire</th>
                      <th className="px-4 py-3 text-slate-300 font-semibold">Finalité</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    {[
                      { data: "Nom / prénom", required: "Oui", purpose: "Identification" },
                      { data: "Adresse email", required: "Oui", purpose: "Réponse à votre demande" },
                      { data: "Téléphone", required: "Non", purpose: "Contact rapide si besoin" },
                      { data: "Société", required: "Non", purpose: "Qualification du projet" },
                      { data: "Description du besoin", required: "Oui", purpose: "Traitement de votre demande" },
                    ].map(({ data, required, purpose }) => (
                      <tr key={data} className="text-slate-400">
                        <td className="px-4 py-3">{data}</td>
                        <td className="px-4 py-3">
                          <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${required === "Oui" ? "bg-orange-500/15 text-orange-400" : "bg-white/8 text-slate-500"}`}>
                            {required}
                          </span>
                        </td>
                        <td className="px-4 py-3">{purpose}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Finalité & conservation */}
            <div className="bg-[#0a0f1e] rounded-2xl border border-white/8 p-8">
              <h2 className="text-lg font-bold text-white mb-4 pb-3 border-b border-white/8">2. Finalité & durée de conservation</h2>
              <div className="space-y-4 text-sm text-slate-400">
                <p className="leading-relaxed">
                  <strong className="text-white">Finalité :</strong> Vos données sont traitées dans le seul but de répondre à vos demandes de devis et de contact. Elles ne font l&apos;objet d&apos;aucun traitement commercial, marketing ou de prospection.
                </p>
                <p className="leading-relaxed">
                  <strong className="text-white">Durée de conservation :</strong> Les données sont conservées pendant <strong className="text-white">3 ans</strong> à compter de la dernière interaction, puis supprimées définitivement.
                </p>
                <p className="leading-relaxed">
                  <strong className="text-white">Transfert de données :</strong> Aucune donnée personnelle n&apos;est vendue, louée ou transmise à des tiers. Aucun transfert hors Union Européenne n&apos;est effectué.
                </p>
              </div>
            </div>

            {/* Cookies */}
            <div className="bg-[#0a0f1e] rounded-2xl border border-white/8 p-8">
              <h2 className="text-lg font-bold text-white mb-4 pb-3 border-b border-white/8">3. Politique cookies</h2>

              <div className="space-y-5 text-sm">
                <div className="flex items-start gap-3 p-4 rounded-xl bg-green-500/8 border border-green-500/20">
                  <svg className="w-5 h-5 text-green-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="text-slate-300 leading-relaxed">
                    Ce site utilise <strong className="text-white">uniquement des cookies techniques</strong> strictement nécessaires à son fonctionnement. <strong className="text-white">Aucun cookie publicitaire, analytique ou de tracking tiers</strong> n&apos;est déposé.
                  </p>
                </div>

                <div className="overflow-hidden rounded-xl border border-white/8">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-white/5 text-left">
                        <th className="px-4 py-3 text-slate-300 font-semibold">Cookie</th>
                        <th className="px-4 py-3 text-slate-300 font-semibold">Type</th>
                        <th className="px-4 py-3 text-slate-300 font-semibold">Durée</th>
                        <th className="px-4 py-3 text-slate-300 font-semibold">Finalité</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                      <tr className="text-slate-400">
                        <td className="px-4 py-3 font-mono text-xs">cookie_consent</td>
                        <td className="px-4 py-3">
                          <span className="px-2 py-0.5 rounded-full text-xs bg-blue-500/15 text-blue-400 font-medium">Technique</span>
                        </td>
                        <td className="px-4 py-3">1 an</td>
                        <td className="px-4 py-3">Mémorisation de votre choix cookies</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div>
                  <h3 className="text-white font-semibold mb-2">Non utilisé sur ce site</h3>
                  <ul className="space-y-1.5">
                    {[
                      "Google Analytics / Google Tag Manager",
                      "Pixels publicitaires (Meta, LinkedIn, etc.)",
                      "Cookies de session tiers",
                      "Outils de heatmap ou d'enregistrement de session",
                    ].map((item) => (
                      <li key={item} className="flex items-center gap-2.5 text-slate-400">
                        <svg className="w-4 h-4 text-red-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-white font-semibold mb-2">Comment supprimer les cookies</h3>
                  <p className="text-slate-400 leading-relaxed">
                    Vous pouvez à tout moment supprimer les cookies stockés dans votre navigateur via ses paramètres (Paramètres → Confidentialité → Effacer les données de navigation). La suppression du cookie <code className="text-orange-400 bg-white/5 px-1.5 py-0.5 rounded">cookie_consent</code> fera réapparaître la bannière de consentement.
                  </p>
                </div>
              </div>
            </div>

            {/* Droits */}
            <div className="bg-[#0a0f1e] rounded-2xl border border-white/8 p-8">
              <h2 className="text-lg font-bold text-white mb-4 pb-3 border-b border-white/8">4. Vos droits</h2>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">
                Conformément au RGPD (Règlement UE 2016/679), vous disposez des droits suivants :
              </p>
              <ul className="space-y-2 mb-5">
                {[
                  "Droit d'accès – obtenir une copie de vos données",
                  "Droit de rectification – corriger vos données inexactes",
                  "Droit à l'effacement – demander la suppression de vos données",
                  "Droit d'opposition – vous opposer au traitement",
                  "Droit à la portabilité – recevoir vos données dans un format structuré",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-slate-400">
                    <span className="mt-0.5 w-4 h-4 rounded-full flex items-center justify-center shrink-0 bg-orange-500/20 text-orange-400">
                      <svg className="w-2.5 h-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="p-4 rounded-xl bg-white/4 border border-white/8 text-sm">
                <p className="text-slate-400">
                  Pour exercer vos droits ou contacter notre DPO :{" "}
                  <a href="mailto:si-riskconsulting@outlook.com" className="text-orange-400 hover:underline font-medium">
                    si-riskconsulting@outlook.com
                  </a>
                </p>
                <p className="text-slate-500 text-xs mt-2">
                  Vous pouvez également déposer une réclamation auprès de la CNIL — www.cnil.fr
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-3 justify-center pt-2">
              <Link href="/mentions-legales" className="text-sm text-slate-500 hover:text-orange-400 transition-colors">
                ← Mentions légales
              </Link>
              <span className="text-slate-700">·</span>
              <Link href="/contact" className="text-sm text-slate-500 hover:text-orange-400 transition-colors">
                Nous contacter
              </Link>
            </div>

            <p className="text-xs text-slate-600 text-center">
              Dernière mise à jour : mai 2026
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
