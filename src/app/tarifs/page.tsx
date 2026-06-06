"use client";

import { LandingShell } from "@/components/landing-chrome";

const PLANS = [
  {
    tag: "Starter",
    name: "TPE",
    price: "4 900",
    sub: "/an",
    desc: "Pour les indépendants et très petites entreprises",
    feat: [
      "1 dossier comptable",
      "2 utilisateurs",
      "Saisie & validation (5 journaux)",
      "PCM 720 comptes CGNC",
      "États de synthèse (Bilan, CPC, ESG, TF)",
      "Balance 9 colonnes & grand livre",
      "Export PDF / XLSX",
      "Support email",
    ],
    featured: false,
  },
  {
    tag: "Le plus choisi",
    name: "PME",
    price: "9 900",
    sub: "/an",
    desc: "Pour les PME marocaines en croissance",
    feat: [
      "3 dossiers comptables",
      "5 utilisateurs",
      "Tout le plan Starter",
      "Fiscalité IS complète + liasse Simpl-IS",
      "Trésorerie & rapprochement IA",
      "Analytique multi-axes",
      "Immobilisations & amortissements",
      "Agenda fiscal & clôture annuelle",
      "Support prioritaire",
    ],
    featured: true,
  },
  {
    tag: "Cabinet",
    name: "Multi-dossiers",
    price: "Sur devis",
    sub: "",
    desc: "Pour les cabinets comptables et experts-comptables",
    feat: [
      "Dossiers illimités",
      "Utilisateurs illimités",
      "Tout le plan PME",
      "Multi-dossiers & droits par client",
      "Formation équipe incluse",
      "Accompagnement déploiement",
      "Personnalisation & intégrations",
      "Support dédié HEBERSOFT",
    ],
    featured: false,
  },
];

const FAQ = [
  {
    q: "La licence est-elle annuelle ?",
    a: "Oui. Compta Soft est vendu en licence annuelle renouvelable (Starter et PME). Le tarif affiché couvre 12 mois d'utilisation, les mises à jour corrective et mineures de la version souscrite.",
  },
  {
    q: "Où sont hébergées mes données ?",
    a: "Compta Soft s'installe sur votre infrastructure (serveur local ou cloud de votre choix au Maroc). Vos écritures et pièces restent chez vous — pas de SaaS imposé.",
  },
  {
    q: "Les mises à jour sont-elles incluses ?",
    a: "Pendant la période de licence active, vous recevez les correctifs et évolutions mineures (ex. v1.0.x). Les versions majeures peuvent faire l'objet d'une extension de licence.",
  },
  {
    q: "Combien d'utilisateurs puis-je ajouter ?",
    a: "Starter : 2 utilisateurs. PME : 5 utilisateurs. Cabinet : illimité. Des utilisateurs supplémentaires peuvent être ajoutés sur devis pour les formules Starter et PME.",
  },
  {
    q: "Quel support est prévu ?",
    a: "Starter : support email sous 48 h ouvrées. PME : support prioritaire (email + téléphone). Cabinet : interlocuteur dédié HEBERSOFT et accompagnement à la prise en main.",
  },
];

export default function TarifsPage() {
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
          <div className="hero-left rev" style={{ gridColumn: "1 / -1", maxWidth: 720 }}>
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
              Tarifs simples et transparents
            </h1>
            <p style={{ fontSize: 16, color: "#555", lineHeight: 1.7, marginTop: 20, maxWidth: 520 }}>
              Licence annuelle en dirhams, hébergement chez vous, sans surprise. Choisissez la formule adaptée à votre structure.
            </p>
          </div>
        </div>
      </section>

      <section className="page-section rev" style={{ background: "var(--cr)", padding: "0 60px 90px" }}>
        <div className="pricing-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20, maxWidth: 1000, margin: "0 auto" }}>
          {PLANS.map((p) => (
            <div key={p.name} className={`pc rev${p.featured ? " feat" : ""}`}>
              <div
                style={{
                  display: "inline-block",
                  background: p.featured ? "rgba(29,158,117,.2)" : "var(--lt)",
                  color: p.featured ? "#4ECFA0" : "var(--g)",
                  fontSize: 11,
                  fontWeight: 600,
                  padding: "3px 11px",
                  borderRadius: 100,
                  marginBottom: 18,
                }}
              >
                {p.tag}
              </div>
              <div style={{ fontFamily: "'Syne',sans-serif", fontSize: 18, fontWeight: 800, color: p.featured ? "#fff" : "var(--dk)" }}>{p.name}</div>
              <div
                style={{
                  fontFamily: "'Syne',sans-serif",
                  fontSize: p.price === "Sur devis" ? 24 : 38,
                  fontWeight: 800,
                  margin: "14px 0 4px",
                  color: p.featured ? "#fff" : "var(--dk)",
                }}
              >
                {p.price !== "Sur devis" && <sup style={{ fontSize: 14 }}>MAD </sup>}
                {p.price}
                <span style={{ fontSize: 13, fontWeight: 400, opacity: 0.5 }}>{p.sub}</span>
              </div>
              <div
                style={{
                  fontSize: 12,
                  color: p.featured ? "rgba(255,255,255,.6)" : "#888",
                  marginBottom: 20,
                  paddingBottom: 20,
                  borderBottom: `1px solid ${p.featured ? "rgba(255,255,255,.1)" : "rgba(10,42,30,.08)"}`,
                }}
              >
                {p.desc}
              </div>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 9 }}>
                {p.feat.map((f) => (
                  <li
                    key={f}
                    style={{
                      fontSize: 13,
                      color: p.featured ? "rgba(255,255,255,.7)" : "#555",
                      display: "flex",
                      alignItems: "flex-start",
                      gap: 7,
                    }}
                  >
                    <span style={{ color: "var(--g)", fontWeight: 700, flexShrink: 0 }}>✓</span>
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="/contact"
                className={p.featured ? "btn-gn" : "btn-dk"}
                style={{ display: "block", textAlign: "center", marginTop: 24, padding: "12px 20px" }}
              >
                {p.price === "Sur devis" ? "Demander un devis" : "Choisir cette formule"}
              </a>
            </div>
          ))}
        </div>
      </section>

      <section className="page-section rev" style={{ background: "#fff", padding: "90px 60px", maxWidth: 800, margin: "0 auto" }}>
        <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: 2, textTransform: "uppercase", color: "var(--g)", marginBottom: 14, textAlign: "center" }}>
          FAQ
        </div>
        <h2
          style={{
            fontFamily: "'Syne',sans-serif",
            fontSize: "clamp(24px,3vw,36px)",
            fontWeight: 800,
            letterSpacing: -1,
            textAlign: "center",
            color: "var(--dk)",
            marginBottom: 40,
          }}
        >
          Questions fréquentes sur les tarifs
        </h2>
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          {FAQ.map((item) => (
            <div
              key={item.q}
              className="rev"
              style={{
                background: "var(--cr)",
                borderRadius: 14,
                padding: "24px 28px",
                border: "1px solid rgba(10,42,30,.06)",
              }}
            >
              <h3 style={{ fontFamily: "'Syne',sans-serif", fontSize: 16, fontWeight: 800, color: "var(--dk)", marginBottom: 10 }}>{item.q}</h3>
              <p style={{ fontSize: 14, color: "#555", lineHeight: 1.7 }}>{item.a}</p>
            </div>
          ))}
        </div>
      </section>
    </LandingShell>
  );
}
