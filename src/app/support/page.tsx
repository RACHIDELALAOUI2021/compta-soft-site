"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import { LandingShell } from "@/components/landing-chrome";

const TICKET_TYPES = [
  { value: "BUG", label: "Bug logiciel" },
  { value: "QUESTION", label: "Question utilisation" },
  { value: "AMELIORATION", label: "Demande d'amélioration" },
] as const;

export default function SupportPage() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState<{ numero: string; trackingUrl: string } | null>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const form = new FormData(e.currentTarget);
    const payload = {
      email: form.get("email"),
      codeClient: form.get("codeClient"),
      societe: form.get("societe"),
      type: form.get("type"),
      sujet: form.get("sujet"),
      description: form.get("description"),
    };

    try {
      const res = await fetch("/api/support/tickets", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error ?? "Une erreur est survenue");
        return;
      }
      setSuccess({ numero: data.numero, trackingUrl: data.trackingUrl });
    } catch {
      setError("Impossible de contacter le serveur");
    } finally {
      setLoading(false);
    }
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
              Support technique
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
              Ouvrir un ticket
            </h1>
            <p style={{ fontSize: 16, color: "#555", lineHeight: 1.7, marginTop: 16, maxWidth: 520 }}>
              Réservé aux clients licenciés. Saisissez votre code client (ex. HEBERSOFT, GBS) pour ouvrir un ticket —
              vous recevrez un email avec un lien de suivi unique.
            </p>
          </div>
        </div>
      </section>

      <section
        className="page-section rev"
        style={{ padding: "0 60px 90px", maxWidth: 720, margin: "0 auto" }}
      >
        <div
          style={{
            background: "#fff",
            borderRadius: 18,
            padding: 36,
            border: "1px solid rgba(10,42,30,.08)",
          }}
        >
          {success ? (
            <div style={{ textAlign: "center", padding: "32px 12px" }}>
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
                Ticket créé
              </h2>
              <p style={{ fontSize: 15, color: "#555", marginBottom: 8 }}>
                Numéro : <strong style={{ color: "var(--g)" }}>{success.numero}</strong>
              </p>
              <p style={{ fontSize: 14, color: "#666", marginBottom: 24, lineHeight: 1.6 }}>
                Un email de confirmation avec le lien de suivi vous a été envoyé.
              </p>
              <Link href={success.trackingUrl} className="btn-gn" style={{ display: "inline-block" }}>
                Suivre mon ticket
              </Link>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div style={{ marginBottom: 16 }}>
                <label className="form-lbl" htmlFor="email">
                  Email *
                </label>
                <input className="form-inp" id="email" name="email" type="email" required autoComplete="email" />
              </div>
              <div style={{ marginBottom: 16 }}>
                <label className="form-lbl" htmlFor="codeClient">
                  Code client *
                </label>
                <input
                  className="form-inp"
                  id="codeClient"
                  name="codeClient"
                  type="text"
                  required
                  autoComplete="off"
                  placeholder="HEBERSOFT, GBS…"
                  style={{ textTransform: "uppercase" }}
                />
              </div>
              <div style={{ marginBottom: 16 }}>
                <label className="form-lbl" htmlFor="societe">
                  Société
                </label>
                <input className="form-inp" id="societe" name="societe" type="text" autoComplete="organization" />
              </div>
              <div style={{ marginBottom: 16 }}>
                <label className="form-lbl" htmlFor="type">
                  Type de demande *
                </label>
                <select className="form-inp" id="type" name="type" required defaultValue="">
                  <option value="" disabled>
                    Sélectionnez un type
                  </option>
                  {TICKET_TYPES.map((t) => (
                    <option key={t.value} value={t.value}>
                      {t.label}
                    </option>
                  ))}
                </select>
              </div>
              <div style={{ marginBottom: 16 }}>
                <label className="form-lbl" htmlFor="sujet">
                  Sujet *
                </label>
                <input className="form-inp" id="sujet" name="sujet" type="text" required maxLength={200} />
              </div>
              <div style={{ marginBottom: 20 }}>
                <label className="form-lbl" htmlFor="description">
                  Description *
                </label>
                <textarea
                  className="form-inp"
                  id="description"
                  name="description"
                  required
                  rows={6}
                  style={{ resize: "vertical", minHeight: 140 }}
                  placeholder="Décrivez le problème, les étapes pour le reproduire, la version utilisée…"
                />
              </div>
              {error && (
                <p style={{ color: "#C0392B", fontSize: 14, marginBottom: 16 }}>{error}</p>
              )}
              <button type="submit" className="btn-gn" style={{ width: "100%" }} disabled={loading}>
                {loading ? "Envoi en cours…" : "Soumettre"}
              </button>
            </form>
          )}
        </div>
      </section>
    </LandingShell>
  );
}
