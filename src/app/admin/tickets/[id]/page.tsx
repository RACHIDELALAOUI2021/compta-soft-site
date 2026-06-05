"use client";

import type { MessageAuteur, TicketStatut, TicketType } from "@prisma/client";
import { FormEvent, useCallback, useEffect, useState } from "react";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { AdminShell } from "@/components/admin-shell";
import { StatutBadge, TypeBadge, formatDate } from "@/components/support-ui";
import { MESSAGE_AUTEUR_LABELS, TICKET_STATUT_LABELS } from "@/lib/ticket-labels";

type Message = {
  id: string;
  auteur: MessageAuteur;
  contenu: string;
  createdAt: string;
};

type Ticket = {
  id: string;
  numero: string;
  email: string;
  societe: string | null;
  type: TicketType;
  sujet: string;
  description: string;
  statut: TicketStatut;
  token: string;
  createdAt: string;
  messages: Message[];
};

const STATUTS: TicketStatut[] = ["NOUVEAU", "EN_COURS", "RESOLU", "FERME"];

export default function AdminTicketDetailPage() {
  const { id } = useParams<{ id: string }>();
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [ticket, setTicket] = useState<Ticket | null>(null);
  const [loading, setLoading] = useState(true);
  const [replyLoading, setReplyLoading] = useState(false);
  const [statutLoading, setStatutLoading] = useState(false);
  const [error, setError] = useState("");

  const loadTicket = useCallback(async () => {
    const res = await fetch(`/api/admin/tickets/${id}`);
    if (res.status === 401) {
      router.replace("/admin/login");
      return;
    }
    if (!res.ok) {
      setError("Ticket introuvable");
      setLoading(false);
      return;
    }
    setTicket(await res.json());
    setLoading(false);
  }, [id, router]);

  useEffect(() => {
    let cancelled = false;

    (async () => {
      const authRes = await fetch("/api/admin/auth");
      const authData = await authRes.json();
      if (!authData.authenticated) {
        router.replace("/admin/login");
        return;
      }
      if (cancelled) return;
      setEmail(authData.email);

      const res = await fetch(`/api/admin/tickets/${id}`);
      if (res.status === 401) {
        router.replace("/admin/login");
        return;
      }
      if (!res.ok) {
        if (!cancelled) {
          setError("Ticket introuvable");
          setLoading(false);
        }
        return;
      }
      if (!cancelled) {
        setTicket(await res.json());
        setLoading(false);
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [id, router]);

  const handleStatutChange = async (statut: TicketStatut) => {
    if (!ticket) return;
    setStatutLoading(true);
    const res = await fetch("/api/admin/tickets", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: ticket.id, statut }),
    });
    if (res.ok) await loadTicket();
    setStatutLoading(false);
  };

  const handleReply = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setReplyLoading(true);

    const form = new FormData(e.currentTarget);
    const contenu = form.get("contenu") as string;

    const res = await fetch(`/api/admin/tickets/${id}/reply`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ contenu }),
    });

    if (res.ok) {
      e.currentTarget.reset();
      await loadTicket();
    }
    setReplyLoading(false);
  };

  const handleLogout = async () => {
    await fetch("/api/admin/auth", { method: "DELETE" });
    router.replace("/admin/login");
  };

  if (loading) {
    return (
      <AdminShell email={email} onLogout={handleLogout}>
        <p style={{ color: "#888" }}>Chargement…</p>
      </AdminShell>
    );
  }

  if (error || !ticket) {
    return (
      <AdminShell email={email} onLogout={handleLogout}>
        <p style={{ color: "#C0392B" }}>{error ?? "Erreur"}</p>
        <Link href="/admin/tickets" style={{ color: "var(--g)", marginTop: 12, display: "inline-block" }}>
          ← Retour à la liste
        </Link>
      </AdminShell>
    );
  }

  return (
    <AdminShell email={email} onLogout={handleLogout}>
      <Link href="/admin/tickets" style={{ fontSize: 13, color: "var(--g)", marginBottom: 20, display: "inline-block" }}>
        ← Tous les tickets
      </Link>

      <div style={{ display: "flex", flexWrap: "wrap", gap: 10, alignItems: "center", marginBottom: 8 }}>
        <span style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, color: "var(--g)" }}>{ticket.numero}</span>
        <StatutBadge statut={ticket.statut} />
        <TypeBadge type={ticket.type} />
      </div>

      <h1
        style={{
          fontFamily: "'Syne',sans-serif",
          fontSize: 26,
          fontWeight: 800,
          color: "var(--dk)",
          marginBottom: 8,
        }}
      >
        {ticket.sujet}
      </h1>

      <p style={{ fontSize: 14, color: "#888", marginBottom: 28 }}>
        {ticket.email}
        {ticket.societe ? ` · ${ticket.societe}` : ""} · Ouvert le {formatDate(ticket.createdAt)}
      </p>

      <div className="admin-detail-grid" style={{ display: "grid", gridTemplateColumns: "1fr 280px", gap: 24, alignItems: "start" }}>
        <div>
          <div
            style={{
              background: "#fff",
              borderRadius: 16,
              padding: 24,
              border: "1px solid rgba(10,42,30,.08)",
              marginBottom: 20,
            }}
          >
            <h2 style={{ fontSize: 12, fontWeight: 600, color: "#888", textTransform: "uppercase", letterSpacing: 1, marginBottom: 12 }}>
              Description
            </h2>
            <p style={{ fontSize: 14, color: "#444", lineHeight: 1.7, whiteSpace: "pre-wrap" }}>{ticket.description}</p>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 14, marginBottom: 24 }}>
            {ticket.messages.map((m) => (
              <div
                key={m.id}
                style={{
                  background: m.auteur === "ADMIN" ? "var(--lt)" : "#fff",
                  borderRadius: 12,
                  padding: 18,
                  border: `1px solid ${m.auteur === "ADMIN" ? "rgba(29,158,117,.2)" : "rgba(10,42,30,.08)"}`,
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
                  <span style={{ fontSize: 13, fontWeight: 600, color: m.auteur === "ADMIN" ? "var(--g)" : "var(--dk)" }}>
                    {MESSAGE_AUTEUR_LABELS[m.auteur]}
                  </span>
                  <span style={{ fontSize: 12, color: "#999" }}>{formatDate(m.createdAt)}</span>
                </div>
                <p style={{ fontSize: 14, color: "#444", lineHeight: 1.65, whiteSpace: "pre-wrap" }}>{m.contenu}</p>
              </div>
            ))}
          </div>

          <div
            style={{
              background: "#fff",
              borderRadius: 16,
              padding: 24,
              border: "1px solid rgba(10,42,30,.08)",
            }}
          >
            <h2 style={{ fontFamily: "'Syne',sans-serif", fontSize: 18, fontWeight: 800, marginBottom: 16 }}>
              Répondre au client
            </h2>
            <form onSubmit={handleReply}>
              <textarea
                className="form-inp"
                name="contenu"
                required
                rows={5}
                style={{ resize: "vertical", marginBottom: 16 }}
                placeholder="Votre réponse (envoyée par email au client)…"
              />
              <button type="submit" className="btn-gn" disabled={replyLoading}>
                {replyLoading ? "Envoi…" : "Envoyer la réponse"}
              </button>
            </form>
          </div>
        </div>

        <div>
          <div
            style={{
              background: "#fff",
              borderRadius: 16,
              padding: 24,
              border: "1px solid rgba(10,42,30,.08)",
              position: "sticky",
              top: 24,
            }}
          >
            <h2 style={{ fontSize: 12, fontWeight: 600, color: "#888", textTransform: "uppercase", letterSpacing: 1, marginBottom: 16 }}>
              Statut
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {STATUTS.map((s) => (
                <button
                  key={s}
                  type="button"
                  onClick={() => handleStatutChange(s)}
                  disabled={statutLoading || ticket.statut === s}
                  style={{
                    padding: "10px 16px",
                    borderRadius: 10,
                    border: ticket.statut === s ? "2px solid var(--g)" : "1px solid rgba(10,42,30,.1)",
                    background: ticket.statut === s ? "var(--lt)" : "#fff",
                    cursor: ticket.statut === s ? "default" : "pointer",
                    fontSize: 14,
                    fontWeight: ticket.statut === s ? 600 : 400,
                    color: "var(--dk)",
                    textAlign: "left",
                    fontFamily: "'DM Sans',sans-serif",
                  }}
                >
                  {TICKET_STATUT_LABELS[s]}
                </button>
              ))}
            </div>

            <div style={{ marginTop: 24, paddingTop: 20, borderTop: "1px solid rgba(10,42,30,.08)" }}>
              <p style={{ fontSize: 12, color: "#888", marginBottom: 8 }}>Lien client</p>
              <a
                href={`/support/${ticket.token}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{ fontSize: 12, color: "var(--g)", wordBreak: "break-all" }}
              >
                /support/{ticket.token.slice(0, 8)}…
              </a>
            </div>
          </div>
        </div>
      </div>
    </AdminShell>
  );
}
