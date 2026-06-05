"use client";

import type { MessageAuteur, TicketStatut, TicketType } from "@prisma/client";
import { FormEvent, useCallback, useEffect, useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { LandingShell } from "@/components/landing-chrome";
import { StatutBadge, TypeBadge, formatDate } from "@/components/support-ui";
import { MESSAGE_AUTEUR_LABELS } from "@/lib/ticket-labels";

type Message = {
  id: string;
  auteur: MessageAuteur;
  contenu: string;
  createdAt: string;
};

type Ticket = {
  numero: string;
  email: string;
  societe: string | null;
  type: TicketType;
  sujet: string;
  description: string;
  statut: TicketStatut;
  createdAt: string;
  messages: Message[];
};

export default function SupportTicketPage() {
  const { token } = useParams<{ token: string }>();
  const [ticket, setTicket] = useState<Ticket | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [replyLoading, setReplyLoading] = useState(false);
  const [replyError, setReplyError] = useState("");

  const loadTicket = useCallback(async () => {
    try {
      const res = await fetch(`/api/support/tickets/${token}`);
      if (!res.ok) {
        setError("Ticket introuvable ou lien invalide");
        return;
      }
      setTicket(await res.json());
    } catch {
      setError("Impossible de charger le ticket");
    } finally {
      setLoading(false);
    }
  }, [token]);

  useEffect(() => {
    let cancelled = false;

    (async () => {
      try {
        const res = await fetch(`/api/support/tickets/${token}`);
        if (cancelled) return;
        if (!res.ok) {
          setError("Ticket introuvable ou lien invalide");
          return;
        }
        setTicket(await res.json());
      } catch {
        if (!cancelled) setError("Impossible de charger le ticket");
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [token]);

  const handleReply = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setReplyLoading(true);
    setReplyError("");

    const form = new FormData(e.currentTarget);
    const contenu = form.get("contenu") as string;

    try {
      const res = await fetch(`/api/support/tickets/${token}/messages`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ contenu }),
      });
      const data = await res.json();
      if (!res.ok) {
        setReplyError(data.error ?? "Erreur lors de l'envoi");
        return;
      }
      e.currentTarget.reset();
      await loadTicket();
    } catch {
      setReplyError("Impossible d'envoyer le message");
    } finally {
      setReplyLoading(false);
    }
  };

  return (
    <LandingShell>
      <section className="hero" style={{ paddingBottom: 32 }}>
        <div className="hero-grid">
          <div className="hero-left rev" style={{ gridColumn: "1 / -1" }}>
            <Link href="/support" style={{ fontSize: 13, color: "var(--g)", marginBottom: 16, display: "inline-block" }}>
              ← Nouveau ticket
            </Link>
            {loading ? (
              <p style={{ color: "#666" }}>Chargement…</p>
            ) : error ? (
              <div>
                <h1
                  style={{
                    fontFamily: "'Syne',sans-serif",
                    fontSize: 28,
                    fontWeight: 800,
                    color: "var(--dk)",
                  }}
                >
                  Ticket introuvable
                </h1>
                <p style={{ color: "#666", marginTop: 12 }}>{error}</p>
              </div>
            ) : ticket ? (
              <>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 10, alignItems: "center", marginBottom: 12 }}>
                  <span style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, color: "var(--g)", fontSize: 14 }}>
                    {ticket.numero}
                  </span>
                  <StatutBadge statut={ticket.statut} />
                  <TypeBadge type={ticket.type} />
                </div>
                <h1
                  style={{
                    fontFamily: "'Syne',sans-serif",
                    fontSize: "clamp(24px,3vw,36px)",
                    fontWeight: 800,
                    lineHeight: 1.15,
                    color: "var(--dk)",
                  }}
                >
                  {ticket.sujet}
                </h1>
                <p style={{ fontSize: 14, color: "#888", marginTop: 10 }}>
                  Ouvert le {formatDate(ticket.createdAt)}
                  {ticket.societe ? ` · ${ticket.societe}` : ""}
                </p>
              </>
            ) : null}
          </div>
        </div>
      </section>

      {ticket && (
        <section className="page-section rev" style={{ padding: "0 60px 90px", maxWidth: 800, margin: "0 auto" }}>
          <div
            style={{
              background: "#fff",
              borderRadius: 18,
              padding: 28,
              border: "1px solid rgba(10,42,30,.08)",
              marginBottom: 24,
            }}
          >
            <h2
              style={{
                fontFamily: "'Syne',sans-serif",
                fontSize: 14,
                fontWeight: 700,
                color: "#888",
                textTransform: "uppercase",
                letterSpacing: 1,
                marginBottom: 12,
              }}
            >
              Description initiale
            </h2>
            <p style={{ fontSize: 15, color: "#444", lineHeight: 1.7, whiteSpace: "pre-wrap" }}>
              {ticket.description}
            </p>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 16, marginBottom: 32 }}>
            {ticket.messages.map((m) => (
              <div
                key={m.id}
                style={{
                  background: m.auteur === "ADMIN" ? "var(--lt)" : "#fff",
                  borderRadius: 14,
                  padding: 20,
                  border: `1px solid ${m.auteur === "ADMIN" ? "rgba(29,158,117,.2)" : "rgba(10,42,30,.08)"}`,
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 10, gap: 12 }}>
                  <span style={{ fontSize: 13, fontWeight: 600, color: m.auteur === "ADMIN" ? "var(--g)" : "var(--dk)" }}>
                    {MESSAGE_AUTEUR_LABELS[m.auteur]}
                  </span>
                  <span style={{ fontSize: 12, color: "#999" }}>{formatDate(m.createdAt)}</span>
                </div>
                <p style={{ fontSize: 14, color: "#444", lineHeight: 1.65, whiteSpace: "pre-wrap" }}>{m.contenu}</p>
              </div>
            ))}
          </div>

          {ticket.statut !== "FERME" ? (
            <div
              style={{
                background: "#fff",
                borderRadius: 18,
                padding: 28,
                border: "1px solid rgba(10,42,30,.08)",
              }}
            >
              <h2
                style={{
                  fontFamily: "'Syne',sans-serif",
                  fontSize: 18,
                  fontWeight: 800,
                  color: "var(--dk)",
                  marginBottom: 16,
                }}
              >
                Ajouter un message
              </h2>
              <form onSubmit={handleReply}>
                <textarea
                  className="form-inp"
                  name="contenu"
                  required
                  rows={4}
                  style={{ resize: "vertical", minHeight: 100, marginBottom: 16 }}
                  placeholder="Précisez votre demande ou répondez au support…"
                />
                {replyError && (
                  <p style={{ color: "#C0392B", fontSize: 14, marginBottom: 12 }}>{replyError}</p>
                )}
                <button type="submit" className="btn-gn" disabled={replyLoading}>
                  {replyLoading ? "Envoi…" : "Envoyer"}
                </button>
              </form>
            </div>
          ) : (
            <p
              style={{
                textAlign: "center",
                padding: 24,
                background: "rgba(10,42,30,.04)",
                borderRadius: 12,
                color: "#666",
                fontSize: 14,
              }}
            >
              Ce ticket est fermé. Pour une nouvelle demande,{" "}
              <Link href="/support" style={{ color: "var(--g)", fontWeight: 600 }}>
                ouvrez un nouveau ticket
              </Link>
              .
            </p>
          )}
        </section>
      )}
    </LandingShell>
  );
}
