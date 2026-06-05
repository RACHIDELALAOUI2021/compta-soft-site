import type { MessageAuteur, TicketStatut, TicketType } from "@prisma/client";

export const TICKET_TYPE_LABELS: Record<TicketType, string> = {
  BUG: "Bug logiciel",
  QUESTION: "Question utilisation",
  AMELIORATION: "Demande d'amélioration",
};

export const TICKET_STATUT_LABELS: Record<TicketStatut, string> = {
  NOUVEAU: "Nouveau",
  EN_COURS: "En cours",
  RESOLU: "Résolu",
  FERME: "Fermé",
};

export const MESSAGE_AUTEUR_LABELS: Record<MessageAuteur, string> = {
  CLIENT: "Vous",
  ADMIN: "Support Compta Soft",
};

export const STATUT_COLORS: Record<TicketStatut, { bg: string; text: string }> = {
  NOUVEAU: { bg: "rgba(29,158,117,.15)", text: "#1D9E75" },
  EN_COURS: { bg: "rgba(255,160,50,.15)", text: "#C47A00" },
  RESOLU: { bg: "rgba(29,158,117,.25)", text: "#0A2A1E" },
  FERME: { bg: "rgba(10,42,30,.08)", text: "#666" },
};
