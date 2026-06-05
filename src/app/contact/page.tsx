"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import { LandingShell } from "@/components/landing-chrome";

export default function ContactPage() {
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
              Contactez-nous
            </h1>
            <p style={{ fontSize: 16, color: "#555", lineHeight: 1.7, marginTop: 16, maxWidth: 480 }}>
              Demande de démo, devis ou question technique — l&apos;équipe CasaSoft vous répond sous 48 h ouvrées.
            </p>
          </div>
        </div>
      </section>

      <section
        className="contact-grid page-section rev"
        style={{
          background: "#fff",
          padding: "0 60px 90px",
          maxWidth: 1100,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "38% 62%",
          gap: 56,
          alignItems: "start",
        }}
      >
        <div>
          <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: 2, textTransform: "uppercase", color: "var(--g)", marginBottom: 14 }}>
            CasaSoft
          </div>
          <h2
            style={{
              fontFamily: "'Syne',sans-serif",
              fontSize: 22,
              fontWeight: 800,
              letterSpacing: -0.5,
              color: "var(--dk)",
              marginBottom: 20,
            }}
          >
            Coordonnées
          </h2>
          <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 16, fontSize: 14, color: "#555", lineHeight: 1.6 }}>
            <li>
              <strong style={{ display: "block", color: "var(--dk)", marginBottom: 4 }}>Éditeur</strong>
              CasaSoft — éditeur de Compta Soft
            </li>
            <li>
              <strong style={{ display: "block", color: "var(--dk)", marginBottom: 4 }}>Adresse</strong>
              Casablanca, Maroc
            </li>
            <li>
              <strong style={{ display: "block", color: "var(--dk)", marginBottom: 4 }}>Email</strong>
              <a href="mailto:contact@comptasoft.ma" style={{ color: "var(--g)" }}>
                contact@comptasoft.ma
              </a>
            </li>
            <li>
              <strong style={{ display: "block", color: "var(--dk)", marginBottom: 4 }}>Téléphone</strong>
              <a href="tel:+212522000000" style={{ color: "var(--g)" }}>
                +212 5 22 00 00 00
              </a>
            </li>
          </ul>
          <div
            style={{
              marginTop: 32,
              padding: 20,
              background: "var(--lt)",
              borderRadius: 14,
              border: "1px solid rgba(29,158,117,.15)",
            }}
          >
            <p style={{ fontSize: 13, color: "#555", lineHeight: 1.6, marginBottom: 12 }}>
              Signaler un bug ou proposer une amélioration :
            </p>
            <Link
              href="/support"
              style={{
                fontSize: 14,
                fontWeight: 600,
                color: "var(--g)",
              }}
            >
              Ouvrir un ticket support →
            </Link>
          </div>
        </div>

        <div
          style={{
            background: "var(--cr)",
            borderRadius: 18,
            padding: 36,
            border: "1px solid rgba(10,42,30,.08)",
          }}
        >
          {sent ? (
            <div style={{ textAlign: "center", padding: "40px 20px" }}>
              <div style={{ fontSize: 40, marginBottom: 16 }}>✓</div>
              <h3 style={{ fontFamily: "'Syne',sans-serif", fontSize: 20, fontWeight: 800, color: "var(--dk)", marginBottom: 10 }}>
                Message envoyé
              </h3>
              <p style={{ fontSize: 14, color: "#666" }}>Merci — nous vous recontacterons rapidement.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 16 }}>
                <div>
                  <label className="form-lbl" htmlFor="nom">
                    Nom *
                  </label>
                  <input className="form-inp" id="nom" name="nom" type="text" required autoComplete="name" />
                </div>
                <div>
                  <label className="form-lbl" htmlFor="societe">
                    Société
                  </label>
                  <input className="form-inp" id="societe" name="societe" type="text" autoComplete="organization" />
                </div>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 16 }}>
                <div>
                  <label className="form-lbl" htmlFor="email">
                    Email *
                  </label>
                  <input className="form-inp" id="email" name="email" type="email" required autoComplete="email" />
                </div>
                <div>
                  <label className="form-lbl" htmlFor="telephone">
                    Téléphone
                  </label>
                  <input className="form-inp" id="telephone" name="telephone" type="tel" autoComplete="tel" />
                </div>
              </div>
              <div style={{ marginBottom: 20 }}>
                <label className="form-lbl" htmlFor="message">
                  Message *
                </label>
                <textarea
                  className="form-inp"
                  id="message"
                  name="message"
                  required
                  rows={5}
                  style={{ resize: "vertical", minHeight: 120 }}
                />
              </div>
              <button type="submit" className="btn-gn" style={{ width: "100%" }}>
                Envoyer
              </button>
            </form>
          )}
        </div>
      </section>
    </LandingShell>
  );
}
