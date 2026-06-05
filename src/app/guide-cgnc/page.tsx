"use client";

import { FeatureList, LandingShell } from "@/components/landing-chrome";

const SECTIONS = [
  {
    title: "Conformité CGNC",
    intro:
      "Compta Soft est conçu autour du Code Général de Normalisation Comptable (CGNC) marocain. Chaque écriture, état et paramétrage respecte les normes en vigueur pour les entreprises soumises au Plan Comptable Marocain.",
    items: [
      "Plan Comptable Marocain (PCM) intégré — 720 comptes, classes 1 à 8",
      "Journaux réglementaires : achats, ventes, banque, caisse, opérations diverses",
      "Workflow de validation conforme (brouillon, validé, contre-passé)",
      "États de synthèse obligatoires : Bilan, CPC, ESG, Tableau de financement",
      "Notes ETIC et annexes réglementaires",
      "Balance générale 9 colonnes et balances auxiliaires",
    ],
  },
  {
    title: "Fiscalité CGI",
    intro:
      "Le module fiscal de Compta Soft couvre les obligations de la Code Général des Impôts (CGI) pour les sociétés soumises à l'impôt sur les sociétés au Maroc.",
    items: [
      "Calcul automatique de l'IS et génération de la liasse Simpl-IS",
      "Agenda fiscal avec échéances TVA, IS, CNSS et retenues à la source",
      "Gestion TVA conforme (collectée, déductible, régularisation)",
      "Immobilisations et amortissements selon les règles fiscales marocaines",
      "Export des données pour déclaration et archivage légal",
    ],
  },
  {
    title: "Pour qui ?",
    intro:
      "Compta Soft s'adresse aux TPE, PME et cabinets comptables marocains qui exigent rigueur réglementaire et productivité au quotidien.",
    items: [
      "Entreprises commerciales, industrielles et de services",
      "Professions libérales et sociétés de personnes",
      "Cabinets comptables en mode multi-dossiers",
      "Structures en croissance avec besoins analytiques et multi-utilisateurs",
    ],
  },
];

export default function GuideCgncPage() {
  return (
    <LandingShell>
      <section className="hero">
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "radial-gradient(ellipse 70% 60% at 65% 50%,rgba(29,158,117,.1) 0%,transparent 70%)",
            pointerEvents: "none",
          }}
        />
        <div className="hero-grid">
          <div className="hero-left rev" style={{ gridColumn: "1 / -1" }}>
            <div
              style={{
                fontSize: 11,
                fontWeight: 600,
                letterSpacing: 2,
                textTransform: "uppercase",
                color: "var(--g)",
                marginBottom: 14,
              }}
            >
              Ressources
            </div>
            <h1
              style={{
                fontFamily: "'Syne',sans-serif",
                fontSize: "clamp(28px,3vw,44px)",
                fontWeight: 800,
                lineHeight: 1.1,
                letterSpacing: -1,
                color: "var(--dk)",
              }}
            >
              Guide CGNC &amp; CGI
            </h1>
            <p style={{ fontSize: 16, color: "#555", lineHeight: 1.7, marginTop: 16, maxWidth: 560 }}>
              Compta Soft garantit une comptabilité conforme aux normes marocaines — du plan comptable aux déclarations fiscales.
            </p>
          </div>
        </div>
      </section>

      <section className="page-section rev" style={{ padding: "0 60px 90px", maxWidth: 760, margin: "0 auto" }}>
        {SECTIONS.map((section) => (
          <div
            key={section.title}
            style={{
              background: "#fff",
              borderRadius: 18,
              padding: 36,
              border: "1px solid rgba(10,42,30,.08)",
              marginBottom: 24,
            }}
          >
            <h2
              style={{
                fontFamily: "'Syne',sans-serif",
                fontSize: 20,
                fontWeight: 800,
                color: "var(--dk)",
                marginBottom: 12,
              }}
            >
              {section.title}
            </h2>
            <p style={{ fontSize: 15, color: "#555", lineHeight: 1.7, marginBottom: 20 }}>{section.intro}</p>
            <FeatureList items={section.items} />
          </div>
        ))}
      </section>
    </LandingShell>
  );
}
