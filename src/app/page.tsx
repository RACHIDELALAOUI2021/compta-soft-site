const primary = "#1D9E75";
const primaryDark = "#168a66";
const primaryLight = "#e8f7f1";

const navLinks = [
  { label: "Fonctionnalités", href: "#fonctionnalites" },
  { label: "Tarifs", href: "#tarifs" },
  { label: "Partenaires", href: "#partenaires" },
  { label: "Blog", href: "#blog" },
];

const stats = [
  {
    label: "Multi-dossiers",
    description: "Gérez plusieurs sociétés depuis une seule interface",
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
    label: "Installation locale",
    description: "Vos données restent sur votre poste ou serveur",
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
    label: "Support Maroc",
    description: "Équipe locale, en français et en darija",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M18 10a6 6 0 11-12 0 6 6 0 0112 0zm-6 3v3m0 3h.01"
      />
    ),
  },
  {
    label: "Liasse fiscale Simpl-IS",
    description: "Déclarations conformes aux exigences DGI",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
      />
    ),
  },
];

const features = [
  {
    title: "Gestion multi-dossiers",
    description:
      "Pilotez plusieurs entités juridiques, basculez en un clic et consolidez vos indicateurs.",
  },
  {
    title: "Plan comptable CGNC",
    description:
      "Comptes, journaux et écritures alignés sur le référentiel marocain officiel.",
  },
  {
    title: "Liasse fiscale Simpl-IS",
    description:
      "Génération assistée des états fiscaux et export prêt pour la télédéclaration.",
  },
  {
    title: "Installation locale",
    description:
      "Déploiement on-premise : confidentialité maximale et accès hors ligne.",
  },
  {
    title: "Facturation & TVA",
    description:
      "Devis, factures, avoirs et déclarations TVA adaptés au cadre marocain.",
  },
  {
    title: "Support dédié",
    description:
      "Hotline, mise à jour et accompagnement par des experts basés au Maroc.",
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

const partners = [
  {
    type: "Experts-comptables",
    description:
      "Automatisez la production comptable et la liasse fiscale pour vos mandants.",
  },
  {
    type: "Cabinets & fiduciaires",
    description:
      "Centralisez tous les dossiers clients avec des droits granulaires par collaborateur.",
  },
  {
    type: "PME & TPE",
    description:
      "Tenez votre comptabilité en interne sans complexité, avec un outil pensé pour le Maroc.",
  },
];

const articles = [
  {
    category: "Fiscalité",
    title: "Comprendre la liasse Simpl-IS en 2026",
    excerpt:
      "Les étapes clés pour préparer et déposer votre déclaration fiscale sans erreur.",
    date: "12 mai 2026",
  },
  {
    category: "Pratique",
    title: "Multi-dossiers : bonnes pratiques",
    excerpt:
      "Comment organiser vos sociétés et filiales dans un même environnement Compta Soft.",
    date: "28 avril 2026",
  },
  {
    category: "Produit",
    title: "Installation locale vs cloud",
    excerpt:
      "Pourquoi de nombreuses entreprises marocaines choisissent le déploiement on-premise.",
    date: "15 avril 2026",
  },
];

function IconBox({ children }: { children: React.ReactNode }) {
  return (
    <span
      className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl"
      style={{ backgroundColor: primaryLight, color: primary }}
    >
      {children}
    </span>
  );
}

function SvgIcon({ d }: { d: React.ReactNode }) {
  return (
    <svg
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      aria-hidden
    >
      {d}
    </svg>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-slate-800">
      {/* Navigation */}
      <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/95 backdrop-blur">
        <nav className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-6 py-4">
          <a href="#" className="flex items-center">
            <img
              src="/brand/compta-soft-full.svg"
              alt="Compta Soft"
              height={36}
            />
          </a>

          <ul className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm font-medium text-slate-600 transition-colors hover:text-slate-900"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#demo"
            className="rounded-lg px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-opacity hover:opacity-90"
            style={{ backgroundColor: primary }}
          >
            Demander une démo
          </a>
        </nav>
      </header>

      <main>
        {/* Hero */}
        <section className="relative overflow-hidden px-6 pb-20 pt-16 md:pb-28 md:pt-24">
          <div
            className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full opacity-30 blur-3xl"
            style={{ backgroundColor: primaryLight }}
          />
          <div
            className="pointer-events-none absolute -bottom-20 -left-20 h-72 w-72 rounded-full opacity-20 blur-3xl"
            style={{ backgroundColor: primaryLight }}
          />

          <div className="relative mx-auto max-w-6xl">
            <span
              className="inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-semibold uppercase tracking-wide"
              style={{
                borderColor: primary,
                color: primaryDark,
                backgroundColor: primaryLight,
              }}
            >
              <span
                className="h-1.5 w-1.5 rounded-full"
                style={{ backgroundColor: primary }}
              />
              Conforme CGNC
            </span>

            <h1 className="mt-6 max-w-3xl text-4xl font-bold leading-tight tracking-tight text-slate-900 md:text-5xl lg:text-6xl">
              La comptabilité marocaine,{" "}
              <span style={{ color: primary }}>enfin simple</span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-600">
              Compta Soft est la solution de comptabilité et de fiscalité
              conçue pour les entreprises et cabinets marocains : plan CGNC,
              multi-dossiers, installation locale et liasse Simpl-IS.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#demo"
                className="rounded-lg px-7 py-3.5 text-sm font-semibold text-white shadow-md transition-opacity hover:opacity-90"
                style={{ backgroundColor: primary }}
              >
                Demander une démo gratuite
              </a>
              <a
                href="#tarifs"
                className="rounded-lg border border-slate-200 bg-white px-7 py-3.5 text-sm font-semibold text-slate-700 transition-colors hover:border-slate-300 hover:bg-slate-50"
              >
                Voir les tarifs
              </a>
            </div>

            <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-slate-100 bg-slate-50/80 p-6 transition-shadow hover:shadow-md"
                >
                  <IconBox>
                    <SvgIcon d={stat.icon} />
                  </IconBox>
                  <h3 className="mt-4 font-semibold text-slate-900">
                    {stat.label}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    {stat.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Fonctionnalités */}
        <section
          id="fonctionnalites"
          className="border-t border-slate-100 bg-slate-50/50 px-6 py-20 md:py-28"
        >
          <div className="mx-auto max-w-6xl">
            <div className="max-w-2xl">
              <p
                className="text-sm font-semibold uppercase tracking-wide"
                style={{ color: primary }}
              >
                Fonctionnalités
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
                Tout ce dont vous avez besoin pour votre comptabilité
              </h2>
              <p className="mt-4 text-lg text-slate-600">
                Une suite complète, pensée pour le cadre réglementaire marocain
                et le quotidien des professionnels.
              </p>
            </div>

            <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {features.map((feature, index) => (
                <article
                  key={feature.title}
                  className="group rounded-2xl border border-slate-100 bg-white p-8 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-lg"
                >
                  <span
                    className="flex h-10 w-10 items-center justify-center rounded-lg text-sm font-bold text-white"
                    style={{ backgroundColor: primary }}
                  >
                    {index + 1}
                  </span>
                  <h3 className="mt-5 text-lg font-semibold text-slate-900">
                    {feature.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">
                    {feature.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Tarifs */}
        <section id="tarifs" className="px-6 py-20 md:py-28">
          <div className="mx-auto max-w-6xl text-center">
            <p
              className="text-sm font-semibold uppercase tracking-wide"
              style={{ color: primary }}
            >
              Tarifs
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
              Des offres transparentes, en dirhams
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-slate-600">
              Choisissez la formule adaptée à votre structure. Pas de frais
              cachés.
            </p>

            <div className="mt-14 grid gap-8 lg:grid-cols-3">
              {plans.map((plan) => (
                <article
                  key={plan.name}
                  className={`relative flex flex-col rounded-2xl border p-8 text-left ${
                    plan.highlighted
                      ? "border-transparent bg-[#e8f7f1] shadow-xl ring-2 ring-[#1D9E75]"
                      : "border-slate-200 bg-white shadow-sm"
                  }`}
                >
                  {plan.highlighted && (
                    <span
                      className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full px-4 py-1 text-xs font-semibold text-white"
                      style={{ backgroundColor: primary }}
                    >
                      Le plus populaire
                    </span>
                  )}
                  <h3 className="text-xl font-bold text-slate-900">
                    {plan.name}
                  </h3>
                  <p className="mt-2 text-sm text-slate-600">
                    {plan.description}
                  </p>
                  <div className="mt-6">
                    <span className="text-4xl font-bold text-slate-900">
                      {plan.price}
                    </span>
                    {plan.unit && (
                      <span className="ml-2 text-sm text-slate-500">
                        {plan.unit}
                      </span>
                    )}
                  </div>
                  <ul className="mt-8 flex-1 space-y-3">
                    {plan.features.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 text-sm text-slate-700"
                      >
                        <svg
                          className="mt-0.5 h-5 w-5 shrink-0"
                          style={{ color: primary }}
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
                        {item}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#demo"
                    className={`mt-8 block rounded-lg py-3 text-center text-sm font-semibold transition-opacity hover:opacity-90 ${
                      plan.highlighted
                        ? "text-white"
                        : "border border-slate-200 bg-white text-slate-800 hover:bg-slate-50"
                    }`}
                    style={
                      plan.highlighted
                        ? { backgroundColor: primary }
                        : undefined
                    }
                  >
                    {plan.cta}
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Partenaires */}
        <section
          id="partenaires"
          className="border-t border-slate-100 bg-slate-50/50 px-6 py-20 md:py-28"
        >
          <div className="mx-auto max-w-6xl">
            <div className="max-w-2xl">
              <p
                className="text-sm font-semibold uppercase tracking-wide"
                style={{ color: primary }}
              >
                Partenaires
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
                Une solution pour chaque profil
              </h2>
              <p className="mt-4 text-lg text-slate-600">
                Compta Soft s&apos;adapte aux experts-comptables, aux cabinets
                et aux entreprises qui gèrent leur comptabilité en interne.
              </p>
            </div>

            <div className="mt-14 grid gap-8 md:grid-cols-3">
              {partners.map((partner) => (
                <article
                  key={partner.type}
                  className="rounded-2xl border border-slate-100 bg-white p-8 shadow-sm"
                >
                  <div
                    className="mb-5 h-1 w-12 rounded-full"
                    style={{ backgroundColor: primary }}
                  />
                  <h3 className="text-xl font-semibold text-slate-900">
                    {partner.type}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-slate-600">
                    {partner.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Blog */}
        <section id="blog" className="px-6 py-20 md:py-28">
          <div className="mx-auto max-w-6xl">
            <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <div className="max-w-2xl">
                <p
                  className="text-sm font-semibold uppercase tracking-wide"
                  style={{ color: primary }}
                >
                  Blog
                </p>
                <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
                  Actualités & conseils
                </h2>
                <p className="mt-4 text-lg text-slate-600">
                  Fiscalité, bonnes pratiques et nouveautés produit.
                </p>
              </div>
              <a
                href="#"
                className="text-sm font-semibold transition-opacity hover:opacity-80"
                style={{ color: primary }}
              >
                Voir tous les articles →
              </a>
            </div>

            <div className="mt-14 grid gap-8 md:grid-cols-3">
              {articles.map((article) => (
                <article
                  key={article.title}
                  className="group overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm transition-shadow hover:shadow-md"
                >
                  <div
                    className="h-40"
                    style={{
                      background: `linear-gradient(135deg, ${primaryLight} 0%, ${primary}33 100%)`,
                    }}
                  />
                  <div className="p-6">
                    <span
                      className="text-xs font-semibold uppercase tracking-wide"
                      style={{ color: primary }}
                    >
                      {article.category}
                    </span>
                    <h3 className="mt-3 text-lg font-semibold text-slate-900 group-hover:underline">
                      {article.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-slate-600">
                      {article.excerpt}
                    </p>
                    <time className="mt-4 block text-xs text-slate-400">
                      {article.date}
                    </time>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CTA final */}
        <section
          id="demo"
          className="px-6 pb-20 md:pb-28"
        >
          <div
            className="mx-auto max-w-6xl rounded-3xl px-8 py-16 text-center md:px-16 md:py-20"
            style={{ backgroundColor: primary }}
          >
            <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
              Prêt à simplifier votre comptabilité ?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-white/90">
              Réservez une démonstration personnalisée avec notre équipe. Sans
              engagement, installation guidée.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <a
                href="mailto:demo@compta-soft.ma"
                className="rounded-lg bg-white px-8 py-3.5 text-sm font-semibold shadow-md transition-opacity hover:opacity-95"
                style={{ color: primaryDark }}
              >
                Demander une démo
              </a>
              <a
                href="tel:+212500000000"
                className="rounded-lg border border-white/40 px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
              >
                +212 5 00 00 00 00
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer CasaSoft */}
      <footer className="border-t border-slate-200 bg-slate-900 px-6 py-14 text-slate-300">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-10 md:grid-cols-4">
            <div className="md:col-span-2">
              <div className="flex items-center gap-2.5">
                <span
                  className="flex h-9 w-9 items-center justify-center rounded-lg text-sm font-bold text-white"
                  style={{ backgroundColor: primary }}
                >
                  CS
                </span>
                <span className="text-lg font-semibold text-white">
                  Compta Soft
                </span>
              </div>
              <p className="mt-4 max-w-sm text-sm leading-relaxed text-slate-400">
                Solution de comptabilité et fiscalité marocaine éditée par{" "}
                <strong className="text-slate-200">CasaSoft</strong>. Conforme
                CGNC, multi-dossiers, installation locale.
              </p>
            </div>

            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wide text-white">
                Produit
              </h4>
              <ul className="mt-4 space-y-2 text-sm">
                <li>
                  <a href="#fonctionnalites" className="hover:text-white">
                    Fonctionnalités
                  </a>
                </li>
                <li>
                  <a href="#tarifs" className="hover:text-white">
                    Tarifs
                  </a>
                </li>
                <li>
                  <a href="#partenaires" className="hover:text-white">
                    Partenaires
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wide text-white">
                CasaSoft
              </h4>
              <ul className="mt-4 space-y-2 text-sm">
                <li>Casablanca, Maroc</li>
                <li>
                  <a
                    href="mailto:contact@casasoft.ma"
                    className="hover:text-white"
                  >
                    contact@casasoft.ma
                  </a>
                </li>
                <li>
                  <a href="#blog" className="hover:text-white">
                    Blog
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-slate-800 pt-8 text-xs text-slate-500 md:flex-row">
            <p>© {new Date().getFullYear()} CasaSoft — Tous droits réservés.</p>
            <p>
              Compta Soft est une marque{" "}
              <span className="text-slate-400">CasaSoft</span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
