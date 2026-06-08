"use client";
import { LandingShell } from "@/components/landing-chrome";

const RELEASES = [
  {
    version: "v1.2.0",
    date: "8 juin 2026",
    tag: "Déclarations DGI",
    color: "#4ECFA0",
    highlights: [
      "Attestation de régularité fiscale fournisseur — modèle AAC271B-24I (Art. 117-IV CGI 2026)",
      "Badge statut attestation en temps réel dans la liste fournisseurs (valide / expirée / absente)",
      "Déclenchement automatique RAS TVA 100% au paiement si attestation absente ou expirée",
      "RAS IS dividendes — taux transitoire 11,25% pour 2026 (Art. 158 + Art. 247-XXXVII-C CGI)",
      "Écriture automatique D/1161 C/44551 C/1162 à la distribution de dividendes",
      "Page déclaration RAS IS dividendes par dossier et par année",
      "Liasse fiscale IS EDI Simpl-IS — export XML conforme CDC DGI 1.9.4",
      "Correction typage PDFKit RTL — helper centralisé ar-text-options.ts",
      "Build 0 erreur TypeScript — 8 modules actifs",
    ],
  },
  {
    version: "v1.1.0",
    date: "7 juin 2026",
    tag: "Fiscalité complète",
    color: "#4ECFA0",
    highlights: [
      "TVA SIMPL-TVA v2 — 4 taux (7/10/14/20%), sections A-F, fait générateur DÉBIT/ENCAISSEMENT (Art. 95-117 CGI 2026)",
      "Export XML TVA conforme portail DGI",
      "Déclaration IS + 4 acomptes provisionnels (Art. 20-I / 144 / 170 / 247-XXXVII-A CGI 2026)",
      "Cotisation minimale 0,25% (Art. 144 CGI) et CSS (Art. 267-273 CGI)",
      "RAS TVA — modèle ADC086B-26I (Art. 117 IV-V CGI) — taux 75%/100%",
      "Délais de paiement — ADC500B-23I — amendes BAM + 0,85%/mois (Loi 69-21)",
      "État des ventes par client — ADC020B-21I (Art. 20-I + 82-I CGI)",
      "Déclaration rémunérations tiers — ADC030B-26I (Art. 151 CGI)",
      "État gasoil carburant — ADC083B-20I (Art. 106 I-4° CGI)",
      "FEC export conforme Avis CNC N°24 — 18 champs obligatoires",
    ],
  },
  {
    version: "v1.0.0",
    date: "5 juin 2026",
    tag: "Première version",
    color: "var(--g)",
    highlights: [
      "Saisie comptable conforme CGNC — journaux ACH, VTE, BNQ, CAI, OD",
      "Plan Comptable Marocain complet (720 comptes, classes 1 à 8)",
      "États de synthèse : Bilan, CPC, ESG, Tableau de financement, notes ETIC",
      "Balance 9 colonnes, grand livre, balance tiers et lettrage",
      "Module fiscal IS — liasse Simpl-IS et agenda fiscal",
      "Trésorerie avec rapprochement bancaire assisté IA",
      "Analytique multi-axes et budget",
      "Immobilisations — amortissement linéaire et dégressif",
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
            <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: 2, textTransform: "uppercase", color: "var(--g)", marginBottom: 14 }}>
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
              <span style={{ fontFamily: "'Syne',sans-serif", fontSize: 22, fontWeight: 800, color: release.color }}>
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
