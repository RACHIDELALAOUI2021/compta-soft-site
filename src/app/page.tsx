const navLinks = [
  { label: "Fonctionnalités", href: "#fonctionnalites" },
  { label: "Tarifs", href: "#tarifs" },
  { label: "Témoignages", href: "#temoignages" },
];

const features = [
  {
    title: "Gestion multi-dossiers",
    description:
      "Pilotez plusieurs entités juridiques, basculez en un clic et consolidez vos indicateurs.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M3 7h5l2 2h11v9a2 2 0 01-2 2H5a2 2 0 01-2-2V7zm0 0l2-2h5l2 2"
      />
    ),
  },
  {
    title: "Plan comptable CGNC",
    description:
      "Comptes, journaux et écritures alignés sur le référentiel marocain officiel.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
      />
    ),
  },
  {
    title: "Liasse fiscale Simpl-IS",
    description:
      "Génération assistée des états fiscaux et export prêt pour la télédéclaration.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
      />
    ),
  },
  {
    title: "Installation locale",
    description:
      "Déploiement on-premise : confidentialité maximale et accès hors ligne.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9 3v2m6-2v2M5 7h14v12a2 2 0 01-2 2H7a2 2 0 01-2-2V7zm3 8h4m-4 3h4"
      />
    ),
  },
  {
    title: "Facturation & TVA",
    description:
      "Devis, factures, avoirs et déclarations TVA adaptés au cadre marocain.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
      />
    ),
  },
  {
    title: "Support dédié",
    description:
      "Hotline, mise à jour et accompagnement par des experts basés au Maroc.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M18 10a6 6 0 11-12 0 6 6 0 0112 0zm-6 3v3m0 3h.01"
      />
    ),
  },
];

const plans = [
  {
    name: "Starter",
    price: "4 900",
    unit: "MAD / an",
    description: "Idéal pour les TPE et indépendants qui démarrent.",
    features: [
      "1 dossier société",
      "Plan CGNC complet",
      "Facturation & TVA",
      "Support email",
    ],
    highlighted: false,
    cta: "Choisir Starter",
  },
  {
    name: "PME",
    price: "9 900",
    unit: "MAD / an",
    description: "Pour les PME en croissance avec plusieurs flux.",
    features: [
      "Jusqu'à 5 dossiers",
      "Liasse Simpl-IS incluse",
      "Multi-utilisateurs",
      "Support prioritaire",
    ],
    highlighted: true,
    cta: "Choisir PME",
  },
  {
    name: "Cabinet",
    price: "Sur devis",
    unit: "",
    description: "Pour cabinets comptables et fiduciaires multi-clients.",
    features: [
      "Dossiers illimités",
      "Déploiement serveur",
      "Formation équipe",
      "SLA & intégrations",
    ],
    highlighted: false,
    cta: "Nous contacter",
  },
];

function CheckIcon() {
  return (
    <svg
      className="mt-0.5 h-5 w-5 shrink-0 text-brand"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      aria-hidden
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M5 13l4 4L19 7"
      />
    </svg>
  );
}

function FeatureIcon({ children }: { children: React.ReactNode }) {
  return (
    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-brand-light text-brand">
      <svg
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        aria-hidden
      >
        {children}
      </svg>
    </span>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-cream text-neutral-900">
      {/* Navigation sticky */}
      <header className="sticky top-0 z-50 px-4 pt-4 sm:px-6">
        <nav className="mx-auto flex max-w-6xl items-center justify-between gap-4 rounded-2xl border border-neutral-200/80 bg-white px-4 py-3 shadow-sm sm:px-6">
          <a href="#" className="flex shrink-0 items-center">
            <img
              src="/brand/compta-soft-full.svg"
              alt="Compta Soft"
              className="h-8 w-auto sm:h-9"
            />
          </a>

          <ul className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="rounded-full px-4 py-2 text-sm font-medium text-neutral-600 transition-colors hover:bg-neutral-100 hover:text-neutral-900"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <a
              href="#tarifs"
              className="hidden rounded-full px-4 py-2 text-sm font-medium text-neutral-600 transition-colors hover:bg-neutral-100 sm:inline-block"
            >
              Connexion
            </a>
            <a
              href="#demo"
              className="rounded-full bg-brand px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-dark"
            >
              Demander une démo
            </a>
          </div>
        </nav>
      </header>

      <main>
        {/* Hero */}
        <section className="px-6 pb-8 pt-16 md:pt-24">
          <div className="mx-auto max-w-6xl text-center">
            <div className="mb-10 inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-4 py-2 text-sm text-neutral-600 shadow-sm">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-brand-light text-xs font-bold text-brand">
                H
              </span>
              <span>
                <strong className="font-semibold text-neutral-900">
                  HEBERSOFT
                </strong>{" "}
                nous fait confiance
              </span>
            </div>

            <h1 className="mx-auto max-w-4xl text-[40px] font-semibold leading-[1.1] tracking-tight text-neutral-950 sm:text-[52px]">
              La comptabilité marocaine,{" "}
              <em className="font-medium italic text-brand">enfin simple</em>
              <br className="hidden sm:block" />
              et <em className="font-medium italic text-brand">conforme</em> au
              CGNC
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-neutral-500">
              Compta Soft réunit plan comptable marocain, multi-dossiers,
              installation locale et liasse Simpl-IS — pour les entreprises et
              cabinets qui veulent gagner du temps sans compromis réglementaire.
            </p>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              <a
                href="#demo"
                className="rounded-full bg-brand px-8 py-3.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-brand-dark"
              >
                Demander une démo gratuite
              </a>
              <a
                href="#tarifs"
                className="rounded-full border border-neutral-200 bg-white px-8 py-3.5 text-sm font-semibold text-neutral-800 shadow-sm transition-colors hover:border-neutral-300 hover:bg-neutral-50"
              >
                Voir les tarifs
              </a>
            </div>
          </div>
        </section>

        {/* Fonctionnalités */}
        <section id="fonctionnalites" className="px-6 py-24">
          <div className="mx-auto max-w-6xl">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-sm font-semibold uppercase tracking-wider text-brand">
                Fonctionnalités
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-neutral-950 md:text-4xl">
                Tout pour votre comptabilité, au même endroit
              </h2>
              <p className="mt-4 text-lg text-neutral-500">
                Une suite complète pensée pour le cadre réglementaire marocain
                et le quotidien des professionnels.
              </p>
            </div>

            <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {features.map((feature) => (
                <article
                  key={feature.title}
                  className="rounded-2xl border border-neutral-100 bg-white p-8 transition-all duration-200 hover:border-neutral-200 hover:shadow-md"
                >
                  <FeatureIcon>{feature.icon}</FeatureIcon>
                  <h3 className="mt-5 text-lg font-semibold text-neutral-950">
                    {feature.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-neutral-500">
                    {feature.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Tarifs */}
        <section id="tarifs" className="px-6 py-24">
          <div className="mx-auto max-w-6xl">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-sm font-semibold uppercase tracking-wider text-brand">
                Tarifs
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-neutral-950 md:text-4xl">
                Des offres transparentes, en dirhams
              </h2>
              <p className="mt-4 text-lg text-neutral-500">
                Choisissez la formule adaptée à votre structure. Pas de frais
                cachés.
              </p>
            </div>

            <div className="mt-16 grid gap-6 lg:grid-cols-3">
              {plans.map((plan) => (
                <article
                  key={plan.name}
                  className={`relative flex flex-col rounded-2xl border p-8 ${
                    plan.highlighted
                      ? "border-brand bg-white shadow-lg ring-2 ring-brand"
                      : "border-neutral-200 bg-white shadow-sm"
                  }`}
                >
                  {plan.highlighted && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-brand px-4 py-1 text-xs font-semibold text-white">
                      Le plus populaire
                    </span>
                  )}
                  <h3 className="text-xl font-semibold text-neutral-950">
                    {plan.name}
                  </h3>
                  <p className="mt-2 text-sm text-neutral-500">
                    {plan.description}
                  </p>
                  <div className="mt-6">
                    <span className="text-4xl font-semibold text-neutral-950">
                      {plan.price}
                    </span>
                    {plan.unit && (
                      <span className="ml-2 text-sm text-neutral-400">
                        {plan.unit}
                      </span>
                    )}
                  </div>
                  <ul className="mt-8 flex-1 space-y-3">
                    {plan.features.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 text-sm text-neutral-700"
                      >
                        <CheckIcon />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#demo"
                    className={`mt-8 block rounded-full py-3 text-center text-sm font-semibold transition-colors ${
                      plan.highlighted
                        ? "bg-brand text-white hover:bg-brand-dark"
                        : "border border-neutral-200 bg-white text-neutral-800 hover:bg-neutral-50"
                    }`}
                  >
                    {plan.cta}
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Témoignage */}
        <section id="temoignages" className="px-6 py-24">
          <div className="mx-auto max-w-6xl rounded-2xl bg-brand px-8 py-16 text-white md:px-16 md:py-20">
            <div className="mx-auto max-w-3xl text-center">
              <span
                className="text-5xl font-serif leading-none text-white/30"
                aria-hidden
              >
                &ldquo;
              </span>
              <blockquote className="mt-8 text-xl font-medium leading-relaxed md:text-2xl">
                « Depuis Compta Soft, nous tenons la comptabilité de nos
                mandants plus vite, avec une liasse Simpl-IS fiable. L&apos;outil
                est enfin pensé pour le Maroc. »
              </blockquote>
              <footer className="mt-10">
                <p className="font-semibold">Karim Benali</p>
                <p className="mt-1 text-sm text-white/80">
                  Directeur, cabinet HEBERSOFT — Casablanca
                </p>
              </footer>
            </div>
          </div>
        </section>

        {/* CTA démo */}
        <section id="demo" className="px-6 pb-24 pt-0">
          <div className="mx-auto max-w-6xl rounded-2xl border border-neutral-200 bg-white px-8 py-14 text-center shadow-sm md:px-16">
            <h2 className="text-3xl font-semibold tracking-tight text-neutral-950">
              Prêt à simplifier votre comptabilité ?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-neutral-500">
              Réservez une démonstration personnalisée. Sans engagement,
              installation guidée par notre équipe.
            </p>
            <a
              href="mailto:demo@compta-soft.ma"
              className="mt-8 inline-block rounded-full bg-brand px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-brand-dark"
            >
              Demander une démo
            </a>
          </div>
        </section>
      </main>

      {/* Footer 4 colonnes */}
      <footer className="border-t border-neutral-200 bg-white px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <a href="#" className="inline-block">
                <img
                  src="/brand/compta-soft-full.svg"
                  alt="Compta Soft"
                  className="h-8 w-auto"
                />
              </a>
              <p className="mt-4 text-sm leading-relaxed text-neutral-500">
                Solution de comptabilité et fiscalité marocaine éditée par
                CasaSoft. Conforme CGNC, multi-dossiers, installation locale.
              </p>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-neutral-950">Produit</h4>
              <ul className="mt-4 space-y-3 text-sm text-neutral-500">
                <li>
                  <a
                    href="#fonctionnalites"
                    className="transition-colors hover:text-brand"
                  >
                    Fonctionnalités
                  </a>
                </li>
                <li>
                  <a
                    href="#tarifs"
                    className="transition-colors hover:text-brand"
                  >
                    Tarifs
                  </a>
                </li>
                <li>
                  <a
                    href="#demo"
                    className="transition-colors hover:text-brand"
                  >
                    Démo gratuite
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-neutral-950">
                Ressources
              </h4>
              <ul className="mt-4 space-y-3 text-sm text-neutral-500">
                <li>
                  <a href="#" className="transition-colors hover:text-brand">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="transition-colors hover:text-brand">
                    Documentation
                  </a>
                </li>
                <li>
                  <a href="#" className="transition-colors hover:text-brand">
                    CGNC & Simpl-IS
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-neutral-950">
                Contact
              </h4>
              <ul className="mt-4 space-y-3 text-sm text-neutral-500">
                <li>Casablanca, Maroc</li>
                <li>
                  <a
                    href="mailto:contact@casasoft.ma"
                    className="transition-colors hover:text-brand"
                  >
                    contact@casasoft.ma
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+212500000000"
                    className="transition-colors hover:text-brand"
                  >
                    +212 5 00 00 00 00
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-neutral-100 pt-8 text-xs text-neutral-400 md:flex-row">
            <p>© {new Date().getFullYear()} CasaSoft — Tous droits réservés.</p>
            <p>Compta Soft est une marque CasaSoft</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
