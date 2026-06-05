"use client";

import type { TicketStatut, TicketType } from "@prisma/client";
import { STATUT_COLORS, TICKET_STATUT_LABELS, TICKET_TYPE_LABELS } from "@/lib/ticket-labels";

export function StatutBadge({ statut }: { statut: TicketStatut }) {
  const colors = STATUT_COLORS[statut];
  return (
    <span
      style={{
        display: "inline-block",
        padding: "4px 12px",
        borderRadius: 100,
        fontSize: 12,
        fontWeight: 600,
        background: colors.bg,
        color: colors.text,
      }}
    >
      {TICKET_STATUT_LABELS[statut]}
    </span>
  );
}

export function TypeBadge({ type }: { type: TicketType }) {
  return (
    <span
      style={{
        display: "inline-block",
        padding: "4px 12px",
        borderRadius: 100,
        fontSize: 12,
        fontWeight: 500,
        background: "rgba(10,42,30,.06)",
        color: "#555",
      }}
    >
      {TICKET_TYPE_LABELS[type]}
    </span>
  );
}

export function formatDate(date: string | Date) {
  return new Date(date).toLocaleString("fr-FR", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}
