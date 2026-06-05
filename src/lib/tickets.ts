import { prisma } from "./prisma";

export {
  MESSAGE_AUTEUR_LABELS,
  STATUT_COLORS,
  TICKET_STATUT_LABELS,
  TICKET_TYPE_LABELS,
} from "./ticket-labels";

export async function generateTicketNumero(): Promise<string> {
  const year = new Date().getFullYear();
  const prefix = `TKT-${year}-`;
  const count = await prisma.ticket.count({
    where: { numero: { startsWith: prefix } },
  });
  return `${prefix}${String(count + 1).padStart(4, "0")}`;
}
