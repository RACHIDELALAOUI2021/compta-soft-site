"use client";

import type { TicketStatut, TicketType } from "@prisma/client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { AdminShell } from "@/components/admin-shell";
import { StatutBadge, TypeBadge, formatDate } from "@/components/support-ui";

type TicketRow = {
  id: string;
  numero: string;
  email: string;
  societe: string | null;
  type: TicketType;
  sujet: string;
  statut: TicketStatut;
  messageCount: number;
  createdAt: string;
  updatedAt: string;
};

const STATUTS: { value: string; label: string }[] = [
  { value: "", label: "Tous les statuts" },
  { value: "NOUVEAU", label: "Nouveau" },
  { value: "EN_COURS", label: "En cours" },
  { value: "RESOLU", label: "Résolu" },
  { value: "FERME", label: "Fermé" },
];

const TYPES: { value: string; label: string }[] = [
  { value: "", label: "Tous les types" },
  { value: "BUG", label: "Bug" },
  { value: "QUESTION", label: "Question" },
  { value: "AMELIORATION", label: "Amélioration" },
];

export default function AdminTicketsPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [tickets, setTickets] = useState<TicketRow[]>([]);
  const [nouveauCount, setNouveauCount] = useState(0);
  const [statutFilter, setStatutFilter] = useState("");
  const [typeFilter, setTypeFilter] = useState("");
  const [loading, setLoading] = useState(true);

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

      const params = new URLSearchParams();
      if (statutFilter) params.set("statut", statutFilter);
      if (typeFilter) params.set("type", typeFilter);

      const res = await fetch(`/api/admin/tickets?${params}`);
      if (res.status === 401) {
        router.replace("/admin/login");
        return;
      }
      const data = await res.json();
      if (cancelled) return;
      setTickets(data.tickets);
      setNouveauCount(data.nouveauCount);
      setLoading(false);
    })();

    return () => {
      cancelled = true;
    };
  }, [statutFilter, typeFilter, router]);

  const handleLogout = async () => {
    await fetch("/api/admin/auth", { method: "DELETE" });
    router.replace("/admin/login");
  };

  return (
    <AdminShell email={email} onLogout={handleLogout}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 28, flexWrap: "wrap", gap: 12 }}>
        <h1
          style={{
            fontFamily: "'Syne',sans-serif",
            fontSize: 28,
            fontWeight: 800,
            color: "var(--dk)",
          }}
        >
          Tickets
          {nouveauCount > 0 && <span className="badge-nouveau">{nouveauCount} nouveau{nouveauCount > 1 ? "x" : ""}</span>}
        </h1>
      </div>

      <div className="filter-bar">
        <select
          className="filter-select"
          value={statutFilter}
          onChange={(e) => setStatutFilter(e.target.value)}
        >
          {STATUTS.map((s) => (
            <option key={s.value} value={s.value}>
              {s.label}
            </option>
          ))}
        </select>
        <select className="filter-select" value={typeFilter} onChange={(e) => setTypeFilter(e.target.value)}>
          {TYPES.map((t) => (
            <option key={t.value} value={t.value}>
              {t.label}
            </option>
          ))}
        </select>
      </div>

      <div
        style={{
          background: "#fff",
          borderRadius: 16,
          border: "1px solid rgba(10,42,30,.08)",
          overflow: "hidden",
        }}
      >
        {loading ? (
          <p style={{ padding: 32, color: "#888", textAlign: "center" }}>Chargement…</p>
        ) : tickets.length === 0 ? (
          <p style={{ padding: 32, color: "#888", textAlign: "center" }}>Aucun ticket trouvé</p>
        ) : (
          <div style={{ overflowX: "auto" }}>
            <table className="admin-table">
              <thead>
                <tr>
                  <th>Numéro</th>
                  <th>Sujet</th>
                  <th>Email</th>
                  <th>Type</th>
                  <th>Statut</th>
                  <th>Mis à jour</th>
                </tr>
              </thead>
              <tbody>
                {tickets.map((t) => (
                  <tr key={t.id}>
                    <td>
                      <Link href={`/admin/tickets/${t.id}`} className="ticket-link">
                        {t.numero}
                      </Link>
                    </td>
                    <td style={{ maxWidth: 220, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                      {t.sujet}
                    </td>
                    <td>{t.email}</td>
                    <td>
                      <TypeBadge type={t.type} />
                    </td>
                    <td>
                      <StatutBadge statut={t.statut} />
                    </td>
                    <td style={{ fontSize: 13, color: "#888" }}>{formatDate(t.updatedAt)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </AdminShell>
  );
}
