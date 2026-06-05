"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { LANDING_STYLES } from "@/components/landing-chrome";

export default function AdminLoginPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const form = new FormData(e.currentTarget);

    try {
      const res = await fetch("/api/admin/auth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: form.get("email"),
          password: form.get("password"),
        }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error ?? "Connexion impossible");
        return;
      }
      router.push("/admin/tickets");
    } catch {
      setError("Erreur réseau");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <style>{LANDING_STYLES}</style>
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: 24,
          background: "var(--cr)",
        }}
      >
        <div
          style={{
            width: "100%",
            maxWidth: 400,
            background: "#fff",
            borderRadius: 18,
            padding: 36,
            border: "1px solid rgba(10,42,30,.08)",
          }}
        >
          <div style={{ textAlign: "center", marginBottom: 28 }}>
            <h1
              style={{
                fontFamily: "'Syne',sans-serif",
                fontSize: 24,
                fontWeight: 800,
                color: "var(--dk)",
              }}
            >
              Admin Support
            </h1>
            <p style={{ fontSize: 14, color: "#888", marginTop: 8 }}>Compta Soft — gestion des tickets</p>
          </div>
          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: 16 }}>
              <label className="form-lbl" htmlFor="email">
                Email
              </label>
              <input className="form-inp" id="email" name="email" type="email" required autoComplete="username" />
            </div>
            <div style={{ marginBottom: 20 }}>
              <label className="form-lbl" htmlFor="password">
                Mot de passe
              </label>
              <input
                className="form-inp"
                id="password"
                name="password"
                type="password"
                required
                autoComplete="current-password"
              />
            </div>
            {error && <p style={{ color: "#C0392B", fontSize: 14, marginBottom: 16 }}>{error}</p>}
            <button type="submit" className="btn-gn" style={{ width: "100%" }} disabled={loading}>
              {loading ? "Connexion…" : "Se connecter"}
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
