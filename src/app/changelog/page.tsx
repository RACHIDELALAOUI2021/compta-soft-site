"use client";

import { LandingShell } from "@/components/landing-chrome";

const RELEASES = [
  {
    version: "v1.0.0",
    date: "5 juin 2026",
    tag: "Première version",
    highlights: [
      "Saisie comptable conforme CGNC — journaux ACH, VTE, BNQ, CAI, OD",
      "Plan Comptable Marocain complet (720 comptes, classes 1 à 8)",
      "États de synthèse : Bilan, CPC, ESG, Tableau de financement, notes ETIC",
      "Balance 9 colonnes, grand livre, balance tiers et lettrage",
      "Module fiscal IS — liasse Simpl-IS et agenda fiscal",
      "Trésorerie avec rapprochement bancaire assisté",
      "Export PDF et XLSX sur tous les états",
      "Multi-dossiers et gestion des droits utilisateurs",
    ],
  },
];

export default function ChangelogPage() {
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
              Produit
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
              Changelog
            </h1>
            <p style={{ fontSize: 16, color: "#555", lineHeight: 1.7, marginTop: 16, maxWidth: 520 }}>
              Suivez l&apos;évolution de Compta Soft — nouvelles fonctionnalités, corrections et améliorations.
            </p>
          </div>
        </div>
      </section>

      <section className="page-section rev" style={{ padding: "0 60px 90px", maxWidth: 760, margin: "0 auto" }}>
        {RELEASES.map((release) => (
          <article
            key={release.version}
            style={{
              background: "#fff",
              borderRadius: 18,
              padding: 36,
              border: "1px solid rgba(10,42,30,.08)",
              marginBottom: 24,
            }}
          >
            <div style={{ display: "flex", flexWrap: "wrap", gap: 12, alignItems: "center", marginBottom: 20 }}>
              <span
                style={{
                  fontFamily: "'Syne',sans-serif",
                  fontSize: 22,
                  fontWeight: 800,
                  color: "var(--g)",
                }}
              >
                {release.version}
              </span>
              <span style={{ fontSize: 13, color: "#888" }}>{release.date}</span>
              <span
                style={{
                  fontSize: 11,
                  fontWeight: 600,
                  padding: "4px 12px",
                  borderRadius: 100,
                  background: "var(--lt)",
                  color: "var(--g)",
                }}
              >
                {release.tag}
              </span>
            </div>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 10 }}>
              {release.highlights.map((item) => (
                <li key={item} style={{ display: "flex", gap: 10, fontSize: 14, color: "#444", lineHeight: 1.6 }}>
                  <span style={{ color: "var(--g)", fontWeight: 700, flexShrink: 0 }}>→</span>
                  {item}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </section>
    </LandingShell>
  );
}
