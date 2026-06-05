"use client";

import { LandingShell } from "@/components/landing-chrome";

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
              Blog
            </h1>
            <p style={{ fontSize: 16, color: "#555", lineHeight: 1.7, marginTop: 16, maxWidth: 520 }}>
              Actualités comptabilité, fiscalité marocaine et nouveautés Compta Soft.
            </p>
          </div>
        </div>
      </section>

      <section className="page-section rev" style={{ padding: "0 60px 90px", maxWidth: 560, margin: "0 auto" }}>
        <div
          style={{
            background: "#fff",
            borderRadius: 18,
            padding: "56px 36px",
            border: "1px solid rgba(10,42,30,.08)",
            textAlign: "center",
          }}
        >
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: "50%",
              background: "var(--lt)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "0 auto 20px",
              fontSize: 24,
              color: "var(--g)",
            }}
          >
            ✎
          </div>
          <h2
            style={{
              fontFamily: "'Syne',sans-serif",
              fontSize: 22,
              fontWeight: 800,
              color: "var(--dk)",
              marginBottom: 12,
            }}
          >
            Articles bientôt disponibles
          </h2>
          <p style={{ fontSize: 15, color: "#666", lineHeight: 1.7 }}>
            Notre équipe prépare des contenus sur la comptabilité CGNC, la fiscalité marocaine et les bonnes pratiques
            Compta Soft. Revenez prochainement.
          </p>
        </div>
      </section>
    </LandingShell>
  );
}
