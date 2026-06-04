const navLinks = [
  { label: "Saisie", href: "#saisie" },
  { label: "États", href: "#etats" },
  { label: "Fiscalité", href: "#fiscalite" },
  { label: "Trésorerie", href: "#tresorerie" },
  { label: "Tarifs", href: "#tarifs" },
];

const plans = [
  {
    name: "Starter",
    price: "4 900",
    unit: "MAD / an",
    description: "TPE et indépendants — 1 dossier, socle CGNC complet.",
    features: [
      "1 dossier société",
      "PCM CGNC · saisie & états",
      "Balance & grand livre",
      "Support email",
    ],
    highlighted: false,
    cta: "Choisir Starter",
  },
  {
    name: "PME",
    price: "9 900",
    unit: "MAD / an",
    description: "PME multi-flux — liasse Simpl-IS et multi-dossiers.",
    features: [
      "Jusqu'à 5 dossiers",
      "Liasse Simpl-IS & fiscalité IS",
      "Rapprochement bancaire IA",
      "Support prioritaire",
    ],
    highlighted: true,
    cta: "Choisir PME",
  },
  {
    name: "Cabinet",
    price: "Sur devis",
    unit: "",
    description: "Cabinets et fiduciaires — dossiers illimités, déploiement serveur.",
    features: [
      "Dossiers illimités",
      "Kit client on-premise",
      "Formation équipe",
      "SLA & accompagnement",
    ],
    highlighted: false,
    cta: "Nous contacter",
  },
];

function CheckIcon({ className = "text-brand" }: { className?: string }) {
  return (
    <svg
      className={`mt-0.5 h-5 w-5 shrink-0 ${className}`}
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

function MockupFrame({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className="overflow-hidden rounded-2xl bg-[#0D3D2E] p-3 shadow-xl shadow-[#0D3D2E]/25 sm:p-4"
      aria-hidden
    >
      <div className="mb-2 flex items-center gap-1.5 px-1">
        <span className="h-2 w-2 rounded-full bg-white/20" />
        <span className="h-2 w-2 rounded-full bg-white/20" />
        <span className="h-2 w-2 rounded-full bg-white/20" />
        <span className="ml-2 text-[10px] font-medium text-white/50">
          {title}
        </span>
      </div>
      <div className="overflow-hidden rounded-xl bg-white">{children}</div>
    </div>
  );
}

function FeatureBullets({ items }: { items: string[] }) {
  return (
    <ul className="mt-6 space-y-3">
      {items.map((item) => (
        <li
          key={item}
          className="flex items-start gap-3 text-sm leading-relaxed text-neutral-600 md:text-base"
        >
          <CheckIcon />
          {item}
        </li>
      ))}
    </ul>
  );
}

function HeroMockup() {
  return (
    <MockupFrame title="Compta Soft v1.0.0 — Journal BNQ">
      <div className="border-b border-neutral-100 bg-[#E8F5F0] px-4 py-2">
        <p className="text-xs font-semibold text-[#0D3D2E]">
          Exercice 2026 · Dossier HEBERSOFT · Journal BNQ
        </p>
      </div>
      <table className="w-full border-collapse text-left text-[11px]">
        <thead>
          <tr className="border-b border-neutral-100 bg-neutral-50 text-[10px] font-semibold uppercase tracking-wide text-neutral-500">
            <th className="px-3 py-2">Compte</th>
            <th className="px-2 py-2">Libellé</th>
            <th className="px-2 py-2 text-right">Débit</th>
            <th className="px-3 py-2 text-right">Crédit</th>
          </tr>
        </thead>
        <tbody className="text-neutral-700">
          <tr className="border-b border-neutral-50">
            <td className="px-3 py-2 font-mono text-[10px]">6111</td>
            <td className="px-2 py-2">Achats marchandises</td>
            <td className="px-2 py-2 text-right tabular-nums">12 400,00</td>
            <td className="px-3 py-2 text-right tabular-nums text-neutral-300">
              —
            </td>
          </tr>
          <tr className="border-b border-neutral-50 bg-[#E8F5F0]/40">
            <td className="px-3 py-2 font-mono text-[10px]">3421</td>
            <td className="px-2 py-2">Clients — ventes</td>
            <td className="px-2 py-2 text-right tabular-nums text-neutral-300">
              —
            </td>
            <td className="px-3 py-2 text-right tabular-nums">14 880,00</td>
          </tr>
          <tr>
            <td className="px-3 py-2 font-mono text-[10px]">5141</td>
            <td className="px-2 py-2">Banques — CIH</td>
            <td className="px-2 py-2 text-right tabular-nums">2 480,00</td>
            <td className="px-3 py-2 text-right tabular-nums text-neutral-300">
              —
            </td>
          </tr>
        </tbody>
        <tfoot>
          <tr className="border-t border-neutral-200 bg-neutral-50">
            <td colSpan={2} className="px-3 py-2 text-[10px] font-semibold text-neutral-900">
              Pièce n° 2026-BNQ-0042 · VALIDE
            </td>
            <td className="px-2 py-2 text-right text-[10px] font-semibold tabular-nums">
              14 880,00
            </td>
            <td className="px-3 py-2 text-right text-[10px] font-semibold tabular-nums">
              14 880,00
            </td>
          </tr>
        </tfoot>
      </table>
    </MockupFrame>
  );
}

function SaisieMockup() {
  const rows = [
    { ref: "ACH-0187", statut: "BROUILLON", color: "bg-amber-100 text-amber-800" },
    { ref: "VTE-0441", statut: "VALIDE", color: "bg-emerald-100 text-emerald-800" },
    { ref: "OD-0009", statut: "CONTRE_PASSE", color: "bg-neutral-200 text-neutral-700" },
  ];
  return (
    <MockupFrame title="Saisie — validation en masse">
      <div className="flex items-center justify-between border-b border-neutral-100 px-4 py-2">
        <span className="text-[10px] font-semibold text-neutral-500">
          Journaux · ACH / VTE / BNQ / CAI / OD
        </span>
        <span className="rounded-full bg-brand/10 px-2 py-0.5 text-[10px] font-semibold text-brand">
          PCM · 720 comptes
        </span>
      </div>
      <div className="divide-y divide-neutral-50">
        {rows.map((row) => (
          <div
            key={row.ref}
            className="flex items-center justify-between px-4 py-2.5 text-[11px]"
          >
            <span className="font-medium text-neutral-800">{row.ref}</span>
            <span className="text-neutral-500">24 500,00 MAD</span>
            <span
              className={`rounded-full px-2 py-0.5 text-[9px] font-bold tracking-wide ${row.color}`}
            >
              {row.statut}
            </span>
          </div>
        ))}
      </div>
      <div className="border-t border-neutral-100 bg-neutral-50 px-4 py-2 text-[10px] text-neutral-500">
        Saisie unitaire · saisie par lot · validation en masse
      </div>
    </MockupFrame>
  );
}

function EtatsMockup() {
  return (
    <MockupFrame title="Balance générale — 9 colonnes">
      <div className="flex flex-wrap gap-1 border-b border-neutral-100 px-3 py-2">
        {["Bilan", "CPC", "ESG", "TF", "ETIC"].map((tab) => (
          <span
            key={tab}
            className={`rounded-md px-2 py-0.5 text-[9px] font-semibold ${
              tab === "Bilan"
                ? "bg-brand text-white"
                : "bg-neutral-100 text-neutral-600"
            }`}
          >
            {tab}
          </span>
        ))}
      </div>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[320px] border-collapse text-[10px]">
          <thead>
            <tr className="bg-neutral-50 text-neutral-500">
              <th className="px-2 py-1.5 text-left font-semibold">Compte</th>
              <th className="px-1 py-1.5 text-right font-semibold">Déb. N</th>
              <th className="px-1 py-1.5 text-right font-semibold">Créd. N</th>
              <th className="px-2 py-1.5 text-right font-semibold">Solde N</th>
            </tr>
          </thead>
          <tbody className="text-neutral-700">
            <tr className="border-t border-neutral-50">
              <td className="px-2 py-1.5 font-mono">3421</td>
              <td className="px-1 py-1.5 text-right tabular-nums">—</td>
              <td className="px-1 py-1.5 text-right tabular-nums">186 200</td>
              <td className="px-2 py-1.5 text-right font-medium tabular-nums text-brand">
                186 200 Cr
              </td>
            </tr>
            <tr className="border-t border-neutral-50">
              <td className="px-2 py-1.5 font-mono">4411</td>
              <td className="px-1 py-1.5 text-right tabular-nums">94 500</td>
              <td className="px-1 py-1.5 text-right tabular-nums">—</td>
              <td className="px-2 py-1.5 text-right font-medium tabular-nums">
                94 500 Dé
              </td>
            </tr>
            <tr className="border-t border-neutral-50">
              <td className="px-2 py-1.5 font-mono">5141</td>
              <td className="px-1 py-1.5 text-right tabular-nums">312 400</td>
              <td className="px-1 py-1.5 text-right tabular-nums">—</td>
              <td className="px-2 py-1.5 text-right font-medium tabular-nums">
                312 400 Dé
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="flex justify-end gap-2 border-t border-neutral-100 px-3 py-2">
        <span className="rounded border border-neutral-200 px-2 py-0.5 text-[9px] font-medium text-neutral-600">
          PDF
        </span>
        <span className="rounded border border-neutral-200 px-2 py-0.5 text-[9px] font-medium text-neutral-600">
          XLSX
        </span>
      </div>
    </MockupFrame>
  );
}

function FiscalMockup() {
  return (
    <MockupFrame title="Fiscalité IS — liasse Simpl-IS">
      <div className="space-y-0 divide-y divide-neutral-100">
        <div className="flex items-center justify-between px-4 py-2.5">
          <span className="text-[11px] text-neutral-600">Résultat comptable</span>
          <span className="text-[11px] font-semibold tabular-nums text-neutral-900">
            428 150 MAD
          </span>
        </div>
        <div className="flex items-center justify-between bg-[#E8F5F0]/50 px-4 py-2.5">
          <span className="text-[11px] text-neutral-600">IS · CM · CSS</span>
          <span className="text-[11px] font-semibold tabular-nums text-[#0D3D2E]">
            86 420 MAD
          </span>
        </div>
        <div className="flex items-center justify-between px-4 py-2.5">
          <span className="text-[11px] text-neutral-600">Loi de finances 2026</span>
          <span className="rounded-full bg-brand/10 px-2 py-0.5 text-[9px] font-semibold text-brand">
            Paramétrée
          </span>
        </div>
        <div className="flex items-center justify-between px-4 py-2.5">
          <span className="text-[11px] text-neutral-600">Export liasse EDI DGI</span>
          <span className="text-[10px] font-medium text-emerald-700">
            XML validé XSD
          </span>
        </div>
      </div>
      <div className="border-t border-neutral-100 bg-neutral-50 px-4 py-2 text-[10px] text-neutral-500">
        Agenda fiscal · déclarations rectificatives
      </div>
    </MockupFrame>
  );
}

function TresorerieMockup() {
  return (
    <MockupFrame title="Trésorerie — rapprochement BNQ">
      <div className="border-b border-neutral-100 px-4 py-2">
        <p className="text-[10px] font-semibold text-neutral-500">
          Relevé CIH · import PDF (extraction IA)
        </p>
      </div>
      <div className="divide-y divide-neutral-50">
        {[
          { lib: "Virement client Atlas", montant: "+ 18 200,00", match: true },
          { lib: "Prélèvement CNSS", montant: "- 4 820,00", match: true },
          { lib: "Chèque effet n° 8842", montant: "- 12 000,00", match: false },
        ].map((op) => (
          <div
            key={op.lib}
            className="flex items-center justify-between gap-2 px-4 py-2 text-[11px]"
          >
            <span className="truncate text-neutral-700">{op.lib}</span>
            <span
              className={`shrink-0 tabular-nums font-medium ${
                op.montant.startsWith("+") ? "text-emerald-700" : "text-neutral-800"
              }`}
            >
              {op.montant}
            </span>
            <span
              className={`shrink-0 rounded-full px-1.5 py-0.5 text-[8px] font-bold ${
                op.match
                  ? "bg-emerald-100 text-emerald-800"
                  : "bg-amber-100 text-amber-800"
              }`}
            >
              {op.match ? "Rapproché" : "À pointer"}
            </span>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-between border-t border-neutral-100 bg-[#E8F5F0]/60 px-4 py-2">
        <span className="text-[10px] text-neutral-600">Position trésorerie</span>
        <span className="text-[11px] font-bold tabular-nums text-[#0D3D2E]">
          298 640 MAD
        </span>
      </div>
    </MockupFrame>
  );
}

function FeatureSection({
  id,
  bgClass,
  reverse,
  eyebrow,
  title,
  description,
  bullets,
  mockup,
}: {
  id: string;
  bgClass: string;
  reverse?: boolean;
  eyebrow: string;
  title: string;
  description: string;
  bullets: string[];
  mockup: React.ReactNode;
}) {
  return (
    <section id={id} className={`px-6 py-20 md:py-28 ${bgClass}`}>
      <div
        className={`mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2 lg:gap-16 ${
          reverse ? "lg:[&>*:first-child]:order-2" : ""
        }`}
      >
        <div className="text-left">
          <p className="text-sm font-semibold uppercase tracking-wider text-brand">
            {eyebrow}
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-neutral-950 md:text-4xl">
            {title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-neutral-600 md:text-lg">
            {description}
          </p>
          <FeatureBullets items={bullets} />
        </div>
        <div>{mockup}</div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FAFAF7] text-neutral-900">
      <header className="sticky top-0 z-50 px-4 pt-4 sm:px-6">
        <nav className="mx-auto flex max-w-6xl items-center justify-between gap-4 rounded-2xl border border-neutral-200/80 bg-white px-4 py-3 shadow-sm sm:px-6">
          <a href="#" className="flex shrink-0 items-center">
            <img
              src="/brand/compta-soft-full.svg"
              alt="Compta Soft"
              className="h-8 w-auto sm:h-9"
            />
          </a>

          <ul className="hidden items-center gap-0.5 lg:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="rounded-full px-3 py-2 text-sm font-medium text-neutral-600 transition-colors hover:bg-neutral-100 hover:text-neutral-900"
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
              Tarifs
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
        <section className="bg-[#FAFAF7] px-6 pb-16 pt-12 md:pb-24 md:pt-20">
          <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2 lg:gap-14">
            <div className="text-left">
              <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-3 py-1.5 text-xs font-medium text-neutral-600">
                <span className="rounded-full bg-brand/10 px-2 py-0.5 font-semibold text-brand">
                  v1.0.0
                </span>
                Installation locale · conforme CGNC
              </p>

              <h1 className="text-[40px] font-bold leading-[1.08] tracking-tight text-neutral-950 sm:text-[56px]">
                La comptabilité marocaine, enfin simple et conforme au CGNC
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-relaxed text-neutral-600">
                Compta Soft v1.0.0 : saisie et validation des pièces, états de
                synthèse (bilan, CPC, ESG), fiscalité IS avec liasse Simpl-IS EDI
                DGI, trésorerie et rapprochement bancaire — plan comptable PCM
                720 comptes, multi-dossiers PostgreSQL, déploiement on-premise.
              </p>

              <div className="mt-10 flex flex-wrap items-center gap-3">
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

            <div className="w-full">
              <HeroMockup />
            </div>
          </div>
        </section>

        <FeatureSection
          id="saisie"
          bgClass="bg-[#E8F5F0]"
          eyebrow="Comptabilité générale"
          title="Saisie & validation comptable"
          description="Cycle de vie des pièces BROUILLON → VALIDE → CONTRE_PASSE, avec immutabilité des écritures validées et équilibre débit/crédit contrôlé à la validation."
          bullets={[
            "Saisie unitaire et saisie par lot",
            "Validation en masse des pièces brouillon",
            "Journaux ACH, VTE, BNQ, CAI et OD",
            "Plan comptable marocain PCM CGNC — 720 comptes",
          ]}
          mockup={<SaisieMockup />}
        />

        <FeatureSection
          id="etats"
          bgClass="bg-white"
          reverse
          eyebrow="Reporting CGNC"
          title="États de synthèse & balances"
          description="États réglementaires et balances issues du grand livre : bilan, CPC, ESG, tableau de financement, notes ETIC, avec exports PDF et XLSX."
          bullets={[
            "Bilan, CPC, ESG, TF et notes ETIC",
            "Balance générale à 9 colonnes",
            "Grand livre et balance tiers",
            "Export PDF (PDFKit) et XLSX (ExcelJS)",
          ]}
          mockup={<EtatsMockup />}
        />

        <FeatureSection
          id="fiscalite"
          bgClass="bg-[#E8F5F0]"
          eyebrow="Impôt sur les sociétés"
          title="Fiscalité IS & liasse Simpl-IS"
          description="Pipeline fiscal IS, contribution minimale et CSS, loi de finances paramétrable, export liasse EDI vers la DGI et suivi des échéances déclaratives."
          bullets={[
            "Résultat fiscal IS, CM et CSS",
            "Loi de finances paramétrable (ex. LF 2026)",
            "Liasse Simpl-IS — export EDI DGI (XML / XSD)",
            "Agenda fiscal et déclarations rectificatives",
          ]}
          mockup={<FiscalMockup />}
        />

        <FeatureSection
          id="tresorerie"
          bgClass="bg-white"
          reverse
          eyebrow="Banque & caisse"
          title="Trésorerie & rapprochement bancaire"
          description="Import de relevés bancaires PDF avec extraction assistée par IA, rapprochement automatique des opérations, effets de commerce et position de trésorerie consolidée."
          bullets={[
            "Import relevé bancaire PDF (extraction IA)",
            "Rapprochement bancaire automatique",
            "Effets de commerce (chèques, LCR)",
            "Position de trésorerie en temps réel",
          ]}
          mockup={<TresorerieMockup />}
        />

        {/* Tarifs */}
        <section id="tarifs" className="bg-[#FAFAF7] px-6 py-20 md:py-28">
          <div className="mx-auto max-w-6xl">
            <div className="max-w-2xl text-left">
              <p className="text-sm font-semibold uppercase tracking-wider text-brand">
                Tarifs
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-neutral-950 md:text-4xl">
                Licences annuelles en dirhams
              </h2>
              <p className="mt-4 text-lg text-neutral-600">
                Modèle installation locale : 1 licence = 1 poste. Formules
                alignées sur le périmètre v1.0.0 — sans frais cachés.
              </p>
            </div>

            <div className="mt-14 grid gap-6 lg:grid-cols-3">
              {plans.map((plan) => (
                <article
                  key={plan.name}
                  className={`relative flex flex-col rounded-2xl border p-8 ${
                    plan.highlighted
                      ? "border-brand bg-white shadow-xl ring-2 ring-brand"
                      : "border-neutral-200 bg-white shadow-sm"
                  }`}
                >
                  {plan.highlighted && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-brand px-4 py-1 text-xs font-semibold text-white">
                      Recommandé PME
                    </span>
                  )}
                  <h3 className="text-xl font-bold text-neutral-950">
                    {plan.name}
                  </h3>
                  <p className="mt-2 text-sm text-neutral-500">
                    {plan.description}
                  </p>
                  <div className="mt-6">
                    <span className="text-4xl font-bold text-neutral-950">
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

        {/* CTA */}
        <section id="demo" className="px-6 pb-8">
          <div className="mx-auto max-w-6xl rounded-2xl bg-[#0D3D2E] px-8 py-14 text-center text-white md:px-16">
            <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
              Pilotez votre comptabilité CGNC en local
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-white/75 md:text-base">
              Démo guidée sur vos données : saisie, états, liasse Simpl-IS et
              rapprochement bancaire. Kit client v1.0.0 — PostgreSQL, sans SaaS.
            </p>
            <a
              href="mailto:demo@compta-soft.ma"
              className="mt-8 inline-block rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-[#0D3D2E] transition-colors hover:bg-[#E8F5F0]"
            >
              Demander une démo
            </a>
          </div>
        </section>
      </main>

      <footer className="bg-[#0D2B2B] px-6 py-16 text-white md:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 flex items-center gap-3">
            <img
              src="/brand/compta-soft-full.svg"
              alt="Compta Soft"
              className="h-8 w-auto brightness-0 invert"
            />
            <p className="max-w-md text-sm text-white/60">
              Compta Soft v1.0.0 — CasaSoft · CGNC · installation locale
            </p>
          </div>

          <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <h4 className="text-sm font-semibold text-white">Produit</h4>
              <ul className="mt-4 space-y-3 text-sm text-white/60">
                <li>
                  <a href="#saisie" className="transition-colors hover:text-white">
                    Saisie comptable
                  </a>
                </li>
                <li>
                  <a href="#etats" className="transition-colors hover:text-white">
                    États de synthèse
                  </a>
                </li>
                <li>
                  <a href="#tarifs" className="transition-colors hover:text-white">
                    Tarifs
                  </a>
                </li>
                <li>
                  <a href="#demo" className="transition-colors hover:text-white">
                    Démo gratuite
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-white">
                Fonctionnalités
              </h4>
              <ul className="mt-4 space-y-3 text-sm text-white/60">
                <li>
                  <a
                    href="#fiscalite"
                    className="transition-colors hover:text-white"
                  >
                    Liasse Simpl-IS
                  </a>
                </li>
                <li>
                  <a
                    href="#tresorerie"
                    className="transition-colors hover:text-white"
                  >
                    Rapprochement bancaire
                  </a>
                </li>
                <li>Multi-dossiers PostgreSQL</li>
                <li>PCM CGNC 720 comptes</li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-white">Ressources</h4>
              <ul className="mt-4 space-y-3 text-sm text-white/60">
                <li>
                  <a
                    href="https://github.com/RACHIDELALAOUI2021/compta-soft-feedback"
                    className="transition-colors hover:text-white"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Issues & feedback
                  </a>
                </li>
                <li>Documentation CGNC</li>
                <li>Guide Simpl-IS EDI</li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-white">Support</h4>
              <ul className="mt-4 space-y-3 text-sm text-white/60">
                <li>Casablanca, Maroc</li>
                <li>
                  <a
                    href="mailto:contact@casasoft.ma"
                    className="transition-colors hover:text-white"
                  >
                    contact@casasoft.ma
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:demo@compta-soft.ma"
                    className="transition-colors hover:text-white"
                  >
                    demo@compta-soft.ma
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-14 flex flex-col items-start justify-between gap-3 border-t border-white/10 pt-8 text-xs text-white/40 md:flex-row md:items-center">
            <p>© {new Date().getFullYear()} CasaSoft — Tous droits réservés.</p>
            <p>Compta Soft v1.0.0 — marque CasaSoft</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
