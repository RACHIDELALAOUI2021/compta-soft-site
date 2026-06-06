"use client";

import { FormEvent, useState } from "react";
import { LandingShell } from "@/components/landing-chrome";

export default function PartenairesPage() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
  };

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
              Programme partenaires
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
              Devenez partenaire HEBERSOFT
            </h1>
            <p style={{ fontSize: 16, color: "#555", lineHeight: 1.7, marginTop: 16, maxWidth: 560 }}>
              Revendeurs, intégrateurs et cabinets comptables — distribuez Compta Soft et accompagnez vos clients dans
              leur transformation comptable.
            </p>
          </div>
        </div>
      </section>

      <section className="page-section rev" style={{ padding: "0 60px 90px", maxWidth: 720, margin: "0 auto" }}>
        <div
          style={{
            background: "#fff",
            borderRadius: 18,
            padding: 36,
            border: "1px solid rgba(10,42,30,.08)",
          }}
        >
          {sent ? (
            <div style={{ textAlign: "center", padding: "24px 12px" }}>
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
                ✓
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
                Demande envoyée
              </h2>
              <p style={{ fontSize: 15, color: "#666", lineHeight: 1.6 }}>
                Merci pour votre intérêt. L&apos;équipe HEBERSOFT vous contactera sous 48 h ouvrées.
              </p>
            </div>
          ) : (
            <>
              <p style={{ fontSize: 15, color: "#555", lineHeight: 1.7, marginBottom: 24 }}>
                Laissez-nous votre email et un court message. Nous vous recontacterons pour présenter le programme
                partenaire, les conditions et les outils de déploiement.
              </p>
              <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: 16 }}>
                  <label className="form-lbl" htmlFor="email">
                    Email professionnel *
                  </label>
                  <input className="form-inp" id="email" name="email" type="email" required autoComplete="email" />
                </div>
                <div style={{ marginBottom: 16 }}>
                  <label className="form-lbl" htmlFor="societe">
                    Société / Cabinet
                  </label>
                  <input className="form-inp" id="societe" name="societe" type="text" autoComplete="organization" />
                </div>
                <div style={{ marginBottom: 20 }}>
                  <label className="form-lbl" htmlFor="message">
                    Message
                  </label>
                  <textarea
                    className="form-inp"
                    id="message"
                    name="message"
                    rows={4}
                    style={{ resize: "vertical", minHeight: 100 }}
                    placeholder="Votre activité, zone géographique, nombre de clients…"
                  />
                </div>
                <button type="submit" className="btn-gn" style={{ width: "100%" }}>
                  Envoyer ma candidature
                </button>
              </form>
            </>
          )}
        </div>
      </section>
    </LandingShell>
  );
}
