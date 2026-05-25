import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mentions légales",
  description: "Mentions légales de SI RISKCONSULTING, bureau d'études en sécurité incendie.",
  robots: { index: false },
};

export default function MentionsLegalesPage() {
  return (
    <>
      <section className="bg-[#0a0f1e] pt-28 pb-16 border-b border-white/8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-sm text-slate-500 mb-8">
            <Link href="/" className="hover:text-orange-400 transition-colors">Accueil</Link>
            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <span className="text-white">Mentions légales</span>
          </nav>
          <span className="text-orange-400 font-semibold text-xs uppercase tracking-widest">Légal</span>
          <h1 className="mt-3 text-4xl sm:text-5xl font-black text-white">Mentions légales</h1>
        </div>
      </section>

      <section className="py-16 bg-[#0d1626]">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">

            {/* 1. Éditeur */}
            <div className="bg-[#0a0f1e] rounded-2xl border border-white/8 p-8">
              <h2 className="text-lg font-bold text-white mb-4 pb-3 border-b border-white/8">1. Éditeur du site</h2>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">
                Le site <strong className="text-white">www.si-riskconsulting.fr</strong> est édité par :
              </p>
              <div className="rounded-lg bg-white/4 border border-white/8 p-4 text-sm text-slate-400 space-y-1.5">
                <p><span className="text-white font-semibold">SI RISKCONSULTING</span></p>
                <p>Dirigeant : [À compléter]</p>
                <p>Forme juridique : [À compléter – EI / SASU / SARL…]</p>
                <p>SIRET : [À compléter]</p>
                <p>Adresse : Noisy-le-Grand (93), Île-de-France</p>
                <p>Tél. fixe : <a href="tel:+33189629492" className="text-orange-400 hover:underline">01 89 62 94 92</a></p>
                <p>Portable : <a href="tel:+33780992417" className="text-orange-400 hover:underline">07 80 99 24 17</a></p>
                <p>Email : <a href="mailto:si-riskconsulting@outlook.com" className="text-orange-400 hover:underline">si-riskconsulting@outlook.com</a></p>
              </div>
            </div>

            {/* 2. Hébergement */}
            <div className="bg-[#0a0f1e] rounded-2xl border border-white/8 p-8">
              <h2 className="text-lg font-bold text-white mb-4 pb-3 border-b border-white/8">2. Hébergement</h2>
              <p className="text-slate-400 text-sm leading-relaxed">
                Ce site est hébergé par <strong className="text-white">Vercel Inc.</strong>, 340 Pine Street Suite 701, San Francisco, CA 94104, États-Unis.
              </p>
            </div>

            {/* 3. Propriété intellectuelle */}
            <div className="bg-[#0a0f1e] rounded-2xl border border-white/8 p-8">
              <h2 className="text-lg font-bold text-white mb-4 pb-3 border-b border-white/8">3. Propriété intellectuelle</h2>
              <p className="text-slate-400 text-sm leading-relaxed">
                L&apos;ensemble des contenus présents sur ce site (textes, images, logos, structure) est protégé par le droit d&apos;auteur et est la propriété exclusive de SI RISKCONSULTING, sauf mention contraire. Toute reproduction, diffusion ou utilisation, même partielle, sans autorisation écrite préalable est strictement interdite.
              </p>
            </div>

            {/* 4. Responsabilité */}
            <div className="bg-[#0a0f1e] rounded-2xl border border-white/8 p-8">
              <h2 className="text-lg font-bold text-white mb-4 pb-3 border-b border-white/8">4. Responsabilité</h2>
              <p className="text-slate-400 text-sm leading-relaxed">
                SI RISKCONSULTING s&apos;efforce de maintenir les informations de ce site à jour et exactes. Cependant, le cabinet ne saurait être tenu responsable des erreurs ou omissions, ni des résultats qui pourraient être obtenus par un mauvais usage de ces informations. Les informations publiées sont données à titre indicatif et ne constituent pas un conseil professionnel.
              </p>
            </div>

            {/* 5. RGPD */}
            <div className="bg-[#0a0f1e] rounded-2xl border border-white/8 p-8" id="donnees-personnelles">
              <h2 className="text-lg font-bold text-white mb-4 pb-3 border-b border-white/8">5. Protection des données personnelles (RGPD)</h2>

              <div className="space-y-5 text-sm">
                <div>
                  <h3 className="text-white font-semibold mb-2">Responsable du traitement</h3>
                  <p className="text-slate-400 leading-relaxed">
                    SI RISKCONSULTING – Noisy-le-Grand (93), Île-de-France<br />
                    Contact : <a href="mailto:si-riskconsulting@outlook.com" className="text-orange-400 hover:underline">si-riskconsulting@outlook.com</a>
                  </p>
                </div>

                <div>
                  <h3 className="text-white font-semibold mb-2">Données collectées</h3>
                  <p className="text-slate-400 leading-relaxed mb-2">
                    Les formulaires de contact et de devis collectent les données suivantes :
                  </p>
                  <ul className="space-y-1.5">
                    {["Nom et prénom", "Adresse email", "Numéro de téléphone (optionnel)", "Société / organisation (optionnel)", "Description du besoin ou du projet"].map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-slate-400">
                        <span className="mt-0.5 w-4 h-4 rounded-full flex items-center justify-center shrink-0 bg-orange-500/20 text-orange-400">
                          <svg className="w-2.5 h-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-white font-semibold mb-2">Finalité du traitement</h3>
                  <p className="text-slate-400 leading-relaxed">
                    Les données collectées sont utilisées exclusivement pour répondre aux demandes de devis et aux messages de contact. Elles ne font l&apos;objet d&apos;aucun traitement commercial, marketing ou de prospection.
                  </p>
                </div>

                <div>
                  <h3 className="text-white font-semibold mb-2">Durée de conservation</h3>
                  <p className="text-slate-400 leading-relaxed">
                    Les données sont conservées pendant <strong className="text-white">3 ans</strong> à compter de la dernière interaction, puis supprimées.
                  </p>
                </div>

                <div>
                  <h3 className="text-white font-semibold mb-2">Transfert de données</h3>
                  <p className="text-slate-400 leading-relaxed">
                    Aucune donnée personnelle n&apos;est transmise à des tiers à des fins commerciales. Aucun transfert de données hors de l&apos;Union Européenne n&apos;est effectué.
                  </p>
                </div>

                <div>
                  <h3 className="text-white font-semibold mb-2">Vos droits</h3>
                  <p className="text-slate-400 leading-relaxed mb-3">
                    Conformément au RGPD (Règlement UE 2016/679) et à la loi Informatique et Libertés, vous disposez des droits suivants :
                  </p>
                  <ul className="space-y-1.5">
                    {[
                      "Droit d'accès à vos données personnelles",
                      "Droit de rectification des données inexactes",
                      "Droit à l'effacement (droit à l'oubli)",
                      "Droit d'opposition au traitement",
                      "Droit à la portabilité de vos données",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-slate-400">
                        <span className="mt-0.5 w-4 h-4 rounded-full flex items-center justify-center shrink-0 bg-orange-500/20 text-orange-400">
                          <svg className="w-2.5 h-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <p className="text-slate-400 leading-relaxed mt-3">
                    Pour exercer ces droits ou contacter notre délégué à la protection des données (DPO) :{" "}
                    <a href="mailto:si-riskconsulting@outlook.com" className="text-orange-400 hover:underline">
                      si-riskconsulting@outlook.com
                    </a>
                  </p>
                  <p className="text-slate-500 text-xs mt-2">
                    Vous pouvez également adresser une réclamation à la CNIL (Commission Nationale de l&apos;Informatique et des Libertés) — <span className="text-slate-400">www.cnil.fr</span>
                  </p>
                </div>
              </div>
            </div>

            {/* 6. Cookies */}
            <div className="bg-[#0a0f1e] rounded-2xl border border-white/8 p-8">
              <h2 className="text-lg font-bold text-white mb-4 pb-3 border-b border-white/8">6. Cookies</h2>
              <p className="text-slate-400 text-sm leading-relaxed mb-3">
                Ce site utilise uniquement des <strong className="text-white">cookies techniques strictement nécessaires</strong> au fonctionnement du site (mémorisation de vos préférences cookies). Aucun cookie publicitaire, de traçage ou d&apos;analyse n&apos;est utilisé.
              </p>
              <p className="text-slate-400 text-sm leading-relaxed">
                Aucune donnée de navigation n&apos;est cédée à des tiers à des fins commerciales. Pour en savoir plus :{" "}
                <Link href="/politique-de-confidentialite" className="text-orange-400 hover:underline">
                  Politique de confidentialité
                </Link>
              </p>
            </div>

            {/* 7. Liens */}
            <div className="bg-[#0a0f1e] rounded-2xl border border-white/8 p-8">
              <h2 className="text-lg font-bold text-white mb-4 pb-3 border-b border-white/8">7. Liens hypertextes</h2>
              <p className="text-slate-400 text-sm leading-relaxed">
                Ce site peut contenir des liens vers des sites tiers. SI RISKCONSULTING n&apos;exerce aucun contrôle sur ces sites et décline toute responsabilité quant à leur contenu. L&apos;établissement de liens vers le présent site est soumis à autorisation préalable.
              </p>
            </div>

            {/* 8. Droit applicable */}
            <div className="bg-[#0a0f1e] rounded-2xl border border-white/8 p-8">
              <h2 className="text-lg font-bold text-white mb-4 pb-3 border-b border-white/8">8. Droit applicable</h2>
              <p className="text-slate-400 text-sm leading-relaxed">
                Le présent site est soumis au droit français. En cas de litige, les tribunaux français seront seuls compétents.
              </p>
            </div>

            <p className="text-xs text-slate-600 text-center pt-2">
              Dernière mise à jour : mai 2026
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
