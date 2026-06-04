"use client";

import { FeatureList, LandingShell, MockupChrome } from "@/components/landing-chrome";

const SECTIONS = [
  {
    id: "saisie",
    title: "Saisie & validation comptable",
    desc: "Du brouillon à la validation, chaque pièce suit un workflow rigoureux conforme aux normes CGNC — v1.0.0.",
    features: [
      "Pièces BROUILLON → VALIDE → CONTRE_PASSE",
      "Saisie unitaire et par lot (CSV/Excel)",
      "Validation en masse par l'administrateur",
      "Journaux ACH, VTE, BNQ, CAI, OD",
      "PCM complet — 720 comptes classes 1 à 8",
      "Contrepartie automatique banque/caisse",
    ],
    label: "JOURNAL BNQ — HEBERSOFT 2026",
    float: true,
    table: (
      <table>
        <thead>
          <tr>
            {["N° PIÈCE", "COMPTE", "LIBELLÉ", "DÉBIT", "STATUT"].map((h) => (
              <th key={h}>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {[
            ["BNQ-001", "5141", "Virement client", "45 200,00", "VALIDE", "bg"],
            ["BNQ-002", "4411", "Fournisseur Maroc", "12 800,00", "VALIDE", "bg"],
            ["BNQ-003", "6111", "Achats marchandises", "8 500,00", "BROUILLON", "bo"],
            ["BNQ-004", "3421", "Client HEBERSOFT", "28 000,00", "VALIDE", "bg"],
          ].map(([n, c, l, m, s, sc]) => (
            <tr key={n}>
              <td>{n}</td>
              <td>{c}</td>
              <td>{l}</td>
              <td>{m}</td>
              <td>
                <span className={sc}>{s}</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    ),
  },
  {
    id: "etats",
    title: "États de synthèse",
    desc: "Tous les états réglementaires CGNC générés automatiquement, avec export PDF et XLSX.",
    features: [
      "Bilan, CPC, ESG, Tableau de financement",
      "Notes ETIC complètes",
      "Balance 9 colonnes (générale, auxiliaires)",
      "Grand livre et balance tiers",
      "Balance âgée et lettrage",
      "Export PDF / XLSX en un clic",
    ],
    label: "BALANCE 9 COLONNES — HEBERSOFT 2026",
    flip: true,
    table: (
      <table>
        <thead>
          <tr>
            {["COMPTE", "INTITULÉ", "DÉBIT N", "CRÉDIT N", "SOLDE"].map((h) => (
              <th key={h}>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {[
            ["3421", "Clients", "280 000", "120 000", "160 000", "#4ECFA0"],
            ["4411", "Fournisseurs", "45 000", "195 000", "150 000", "#ff8a8a"],
            ["5141", "Banque", "520 000", "380 000", "140 000", "#4ECFA0"],
            ["6111", "Achats M/ses", "95 000", "0", "95 000", "#ff8a8a"],
          ].map(([c, l, d, cr, s, col]) => (
            <tr key={c}>
              <td>{c}</td>
              <td>{l}</td>
              <td>{d}</td>
              <td>{cr}</td>
              <td style={{ color: col, fontWeight: 600 }}>{s}</td>
            </tr>
          ))}
        </tbody>
      </table>
    ),
  },
  {
    id: "fiscal",
    title: "Fiscalité IS",
    desc: "Pipeline fiscal complet conforme au CGI marocain jusqu'à la génération XML pour la DGI.",
    features: [
      "Résultat fiscal IS → CM → crédits CM → CSS",
      "Loi de finances paramétrable (2026)",
      "Réintégrations, déductions, déficits reportés",
      "Liasse EDI XML Simpl-IS (CDC DGI 1.9.4)",
      "Agenda fiscal et déclarations rectificatives",
      "Gel à clôture — immutabilité garantie",
    ],
    label: "RÉSULTAT FISCAL IS — 2026",
    table: (
      <table>
        <thead>
          <tr>
            {["LIGNE", "LIBELLÉ", "MONTANT MAD"].map((h) => (
              <th key={h}>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {[
            ["RF01", "Résultat comptable", "185 400,00", "#4ECFA0"],
            ["RF12", "Réintégrations", "+12 600,00", "#ff8a8a"],
            ["RF18", "Déductions", "-8 200,00", "#4ECFA0"],
            ["RF25", "Résultat fiscal brut", "189 800,00", "#fff"],
            ["IS", "IS dû (taux 20%)", "37 960,00", "#FFA032"],
          ].map(([l, n, m, col]) => (
            <tr key={l}>
              <td style={{ color: "rgba(255,255,255,.6)" }}>{l}</td>
              <td>{n}</td>
              <td style={{ color: col, fontWeight: 600 }}>{m}</td>
            </tr>
          ))}
        </tbody>
      </table>
    ),
  },
  {
    id: "tresorerie",
    title: "Trésorerie IA",
    desc: "Importez vos relevés PDF — l'IA extrait les lignes et les rapproche automatiquement.",
    features: [
      "Import relevé bancaire PDF (extraction IA)",
      "Rapprochement automatique ±0,01 MAD",
      "Effets de commerce et omissions bancaires",
      "Position trésorerie et prévisions",
      "Exports rapprochement",
      "Clé IA chiffrée — vos données restent chez vous",
    ],
    label: "RAPPROCHEMENT BNQ — CIH BANK",
    flip: true,
    table: (
      <>
        <table>
          <thead>
            <tr>
              {["DATE", "LIBELLÉ", "MONTANT", "STATUT"].map((h) => (
                <th key={h}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {[
              ["02/06", "VIR HEBERSOFT CLIENT", "28 000", "RAPPROCHÉ", "bg"],
              ["03/06", "PRLV FOURNISSEUR", "12 800", "RAPPROCHÉ", "bg"],
              ["04/06", "COMMISSION BANQUE", "450", "EN ATTENTE", "bo"],
            ].map(([d, l, m, s, sc]) => (
              <tr key={d}>
                <td>{d}</td>
                <td>{l}</td>
                <td>{m}</td>
                <td>
                  <span className={sc}>{s}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div style={{ marginTop: 10, padding: "7px 10px", background: "rgba(29,158,117,.1)", borderRadius: 6, fontSize: 9, color: "#4ECFA0" }}>
          ✓ 2/3 lignes rapprochées automatiquement par IA
        </div>
      </>
    ),
  },
  {
    id: "analytique",
    title: "Analytique",
    desc: "Ventilez vos charges et produits par axe analytique pour un pilotage fin de l'activité.",
    features: [
      "Axes analytiques configurables (centres de coût, projets)",
      "Ventilation à la saisie et en masse",
      "Balance et grand livre analytiques",
      "Reporting comparatif N / N-1 par axe",
      "Croisement comptabilité générale ↔ analytique",
      "Export XLSX des extraits analytiques",
    ],
    label: "BALANCE ANALYTIQUE — PROJET A",
    table: (
      <table>
        <thead>
          <tr>
            {["AXE", "SECTION", "DÉBIT", "CRÉDIT", "SOLDE"].map((h) => (
              <th key={h}>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {[
            ["CC-01", "Production", "42 000", "8 000", "34 000", "#4ECFA0"],
            ["CC-02", "Commercial", "18 500", "2 100", "16 400", "#4ECFA0"],
            ["PRJ-A", "Projet Alpha", "9 200", "0", "9 200", "#FFA032"],
            ["CC-03", "Administration", "6 800", "1 200", "5 600", "#ff8a8a"],
          ].map(([a, s, d, c, sol, col]) => (
            <tr key={a}>
              <td>{a}</td>
              <td>{s}</td>
              <td>{d}</td>
              <td>{c}</td>
              <td style={{ color: col, fontWeight: 600 }}>{sol}</td>
            </tr>
          ))}
        </tbody>
      </table>
    ),
  },
  {
    id: "immobilisations",
    title: "Immobilisations",
    desc: "Gérez le cycle de vie des immobilisations et les dotations conformément au CGNC.",
    features: [
      "Fiches immobilisations corporelles et incorporelles",
      "Plans d'amortissement linéaire et dégressif",
      "Dotations mensuelles et écritures automatiques",
      "Registre des immobilisations et état des amortissements",
      "Cession et mise au rebut avec plus/moins-values",
      "Intégration bilan (brut, amortissements, net)",
    ],
    label: "REGISTRE IMMOBILISATIONS — 2026",
    flip: true,
    table: (
      <table>
        <thead>
          <tr>
            {["N°", "DÉSIGNATION", "VALEUR", "AMORT.", "VNC"].map((h) => (
              <th key={h}>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {[
            ["IM-01", "Matériel informatique", "85 000", "42 500", "42 500", "#4ECFA0"],
            ["IM-02", "Véhicule utilitaire", "240 000", "96 000", "144 000", "#4ECFA0"],
            ["IM-03", "Mobilier bureau", "32 000", "24 000", "8 000", "#FFA032"],
            ["IM-04", "Logiciel licence", "18 000", "18 000", "0", "#ff8a8a"],
          ].map(([n, d, v, a, vnc, col]) => (
            <tr key={n}>
              <td>{n}</td>
              <td>{d}</td>
              <td>{v}</td>
              <td>{a}</td>
              <td style={{ color: col, fontWeight: 600 }}>{vnc}</td>
            </tr>
          ))}
        </tbody>
      </table>
    ),
  },
] as const;

export default function FonctionnalitesPage() {
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
          <div className="hero-left rev">
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                background: "#fff",
                border: "1px solid rgba(29,158,117,.3)",
                borderRadius: 100,
                padding: "5px 14px",
                fontSize: 11,
                color: "var(--g)",
                fontWeight: 500,
                marginBottom: 28,
              }}
            >
              v1.0.0 · Conforme CGNC · PCM 720 comptes
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
              Toutes les fonctionnalités
            </h1>
            <p style={{ fontSize: 16, color: "#555", lineHeight: 1.7, marginTop: 20, maxWidth: 480 }}>
              Saisie, états de synthèse, fiscalité IS, trésorerie IA, analytique et immobilisations — le périmètre complet de Compta Soft pour la comptabilité marocaine.
            </p>
            <div style={{ display: "flex", gap: 12, marginTop: 28 }}>
              <a href="/contact" className="btn-dk" style={{ display: "inline-block" }}>
                Demander une démo →
              </a>
              <a href="/tarifs" className="btn-ol" style={{ display: "inline-block" }}>
                Voir les tarifs
              </a>
            </div>
          </div>
          <div className="hero-right rev" style={{ height: 520, borderRadius: 20, overflow: "hidden" }}>
            <MockupChrome label="APERÇU — COMPTA SOFT v1.0.0">
              <table>
                <thead>
                  <tr>
                    {["MODULE", "STATUT", "VERSION"].map((h) => (
                      <th key={h}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Saisie CGNC", "Actif", "bg"],
                    ["États synthèse", "Actif", "bg"],
                    ["Fiscalité IS", "Actif", "bg"],
                    ["Trésorerie IA", "Actif", "bg"],
                    ["Analytique", "Actif", "bg"],
                    ["Immobilisations", "Actif", "bg"],
                  ].map(([m, s, sc]) => (
                    <tr key={m}>
                      <td>{m}</td>
                      <td>
                        <span className={sc}>{s}</span>
                      </td>
                      <td style={{ color: "#4ECFA0" }}>1.0.0</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </MockupChrome>
          </div>
        </div>
      </section>

      <section className="page-section rev" style={{ background: "#fff", padding: "0 60px 90px", maxWidth: 1200, margin: "0 auto" }}>
        {SECTIONS.map((s) => (
          <div key={s.id} id={s.id} className={`feat-row rev${"flip" in s && s.flip ? " flip" : ""}`}>
            <div>
              <h2
                style={{
                  fontFamily: "'Syne',sans-serif",
                  fontSize: 28,
                  fontWeight: 800,
                  letterSpacing: -1,
                  marginBottom: 14,
                  color: "var(--dk)",
                }}
              >
                {s.title}
              </h2>
              <p style={{ fontSize: 15, color: "#555", lineHeight: 1.7, marginBottom: 22 }}>{s.desc}</p>
              <FeatureList items={[...s.features]} />
            </div>
            <MockupChrome label={s.label} float={"float" in s && s.float}>
              {s.table}
            </MockupChrome>
          </div>
        ))}
      </section>

      <section className="rev" style={{ background: "var(--dk)", padding: "72px 60px", textAlign: "center" }}>
        <h2
          style={{
            fontFamily: "'Syne',sans-serif",
            fontSize: "clamp(28px,3vw,40px)",
            fontWeight: 800,
            color: "#fff",
            letterSpacing: -1,
            lineHeight: 1.1,
          }}
        >
          Prêt à tester Compta Soft ?
        </h2>
        <p style={{ fontSize: 15, color: "rgba(255,255,255,.5)", marginTop: 14 }}>Demandez une démo personnalisée pour votre structure.</p>
        <a href="/contact" className="btn-gn" style={{ display: "inline-block", marginTop: 28 }}>
          Nous contacter →
        </a>
      </section>
    </LandingShell>
  );
}
