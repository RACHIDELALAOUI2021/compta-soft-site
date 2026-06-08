"use client";
import Link from "next/link";
import { LandingShell } from "@/components/landing-chrome";

const ARTICLES = [
  {
    slug: "simpl-tva-maroc-2026",
    date: "8 juin 2026",
    tag: "TVA",
    title: "SIMPL-TVA 2026 : guide complet pour les entreprises marocaines",
    excerpt:
      "Comment déclarer la TVA au Maroc avec le portail SIMPL-TVA — taux applicables, fait générateur, sections A à F et export XML conforme DGI.",
    readTime: "5 min",
  },
  {
    slug: "attestation-regularite-fiscale-art-117",
    date: "8 juin 2026",
    tag: "RAS TVA",
    title: "Attestation de régularité fiscale fournisseur : tout savoir (Art. 117 CGI)",
    excerpt:
      "L'attestation de régularité fiscale (modèle AAC271B-24I) est obligatoire pour exonérer vos fournisseurs de la RAS TVA. Validité 6 mois, vérification sur tax.gov.ma.",
    readTime: "4 min",
  },
  {
    slug: "ras-is-dividendes-maroc-2026",
    date: "8 juin 2026",
    tag: "IS",
    title: "RAS IS sur dividendes au Maroc : taux 2026 et obligations (Art. 158 CGI)",
    excerpt:
      "La retenue à la source IS sur dividendes est opérée par la société distributrice. Taux transitoire 11,25% pour 2026 selon l'Art. 247-XXXVII-C CGI.",
    readTime: "4 min",
  },
  {
    slug: "fec-maroc-obligations-export",
    date: "7 juin 2026",
    tag: "FEC",
    title: "FEC Maroc : obligations légales et export depuis votre logiciel comptable",
    excerpt:
      "Le Fichier des Écritures Comptables (FEC) est exigible lors de tout contrôle fiscal au Maroc. 18 champs obligatoires définis par l'Avis CNC N°24.",
    readTime: "5 min",
  },
  {
    slug: "delais-paiement-loi-69-21",
    date: "7 juin 2026",
    tag: "Délais paiement",
    title: "Loi 69-21 sur les délais de paiement : ce que doit faire votre logiciel comptable",
    excerpt:
      "La loi 69-21 impose aux entreprises marocaines de déclarer leurs délais de paiement à Bank Al-Maghrib. Amende = taux BAM + 0,85%/mois de retard.",
    readTime: "5 min",
  },
  {
    slug: "liasse-fiscale-simpl-is-maroc",
    date: "6 juin 2026",
    tag: "Liasse IS",
    title: "Liasse fiscale IS au Maroc : générer le XML Simpl-IS pour la DGI",
    excerpt:
      "La liasse fiscale IS doit être déposée en ligne sur le portail DGI via le format XML Simpl-IS. Voici les prérequis, les tableaux réglementaires et les erreurs courantes.",
    readTime: "6 min",
  },
  {
    slug: "cgnc-plan-comptable-maroc",
    date: "5 juin 2026",
    tag: "CGNC",
    title: "CGNC : comprendre le Plan Comptable Marocain et ses 720 comptes",
    excerpt:
      "Le Code Général de la Normalisation Comptable (CGNC) structure la comptabilité marocaine en 8 classes. Tour d'horizon des comptes, journaux et états obligatoires.",
    readTime: "7 min",
  },
  {
    slug: "cotisation-minimale-maroc-2026",
    date: "5 juin 2026",
    tag: "IS / CM",
    title: "Cotisation minimale au Maroc : calcul, taux et exonérations (Art. 144 CGI 2026)",
    excerpt:
      "La cotisation minimale (CM) est due même en cas de déficit. Taux 0,25% sur les produits d'exploitation. Exonération les 36 premiers mois d'activité.",
    readTime: "4 min",
  },
];

const TAG_COLORS: Record<string, string> = {
  "TVA": "#1D9E75",
  "RAS TVA": "#0A2A1E",
  "IS": "#1D9E75",
  "FEC": "#0A2A1E",
  "Délais paiement": "#1D9E75",
  "Liasse IS": "#0A2A1E",
  "CGNC": "#1D9E75",
  "IS / CM": "#0A2A1E",
};

export default function BlogPage() {
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
              Blog & guides fiscaux
            </h1>
            <p style={{ fontSize: 16, color: "#555", lineHeight: 1.7, marginTop: 16, maxWidth: 560 }}>
              CGI 2026, TVA, IS, délais de paiement, FEC — des guides pratiques pour les comptables et dirigeants marocains.
            </p>
          </div>
        </div>
      </section>

      <section
        className="page-section rev"
        style={{ padding: "0 60px 90px", maxWidth: 1100, margin: "0 auto" }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
            gap: 24,
          }}
        >
          {ARTICLES.map((article) => (
            <article
              key={article.slug}
              className="rev"
              style={{
                background: "#fff",
                borderRadius: 18,
                padding: 28,
                border: "1px solid rgba(10,42,30,.08)",
                display: "flex",
                flexDirection: "column",
                gap: 14,
                transition: "all .3s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)";
                (e.currentTarget as HTMLElement).style.boxShadow = "0 16px 40px rgba(10,42,30,.1)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.transform = "none";
                (e.currentTarget as HTMLElement).style.boxShadow = "none";
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span
                  style={{
                    fontSize: 11,
                    fontWeight: 600,
                    padding: "3px 10px",
                    borderRadius: 100,
                    background: "var(--lt)",
                    color: TAG_COLORS[article.tag] ?? "var(--g)",
                  }}
                >
                  {article.tag}
                </span>
                <span style={{ fontSize: 12, color: "#aaa" }}>{article.readTime} de lecture</span>
              </div>
              <h2
                style={{
                  fontFamily: "'Syne',sans-serif",
                  fontSize: 17,
                  fontWeight: 800,
                  color: "var(--dk)",
                  lineHeight: 1.3,
                  letterSpacing: -0.3,
                }}
              >
                {article.title}
              </h2>
              <p style={{ fontSize: 13, color: "#666", lineHeight: 1.7, flexGrow: 1 }}>
                {article.excerpt}
              </p>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  paddingTop: 14,
                  borderTop: "1px solid rgba(10,42,30,.06)",
                }}
              >
                <span style={{ fontSize: 12, color: "#aaa" }}>{article.date}</span>
                <Link
                  href={`/blog/${article.slug}`}
                  style={{
                    fontSize: 13,
                    fontWeight: 600,
                    color: "var(--g)",
                    display: "flex",
                    alignItems: "center",
                    gap: 4,
                  }}
                >
                  Lire l&apos;article →
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div
          className="rev"
          style={{
            marginTop: 60,
            background: "var(--dk)",
            borderRadius: 20,
            padding: "40px 48px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 24,
            flexWrap: "wrap",
          }}
        >
          <div>
            <p style={{ fontFamily: "'Syne',sans-serif", fontSize: 20, fontWeight: 800, color: "#fff", letterSpacing: -0.5 }}>
              Besoin d&apos;une démo personnalisée ?
            </p>
            <p style={{ fontSize: 14, color: "rgba(255,255,255,.5)", marginTop: 6 }}>
              Nos experts vous montrent Compta Soft sur votre propre dossier.
            </p>
          </div>
          <Link href="/contact" className="btn-gn" style={{ display: "inline-block", whiteSpace: "nowrap" }}>
            Demander une démo →
          </Link>
        </div>
      </section>
    </LandingShell>
  );
}
