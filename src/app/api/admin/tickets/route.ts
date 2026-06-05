export const dynamic = "force-dynamic";

import { TicketStatut, TicketType } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
import { getAdminSession } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

const VALID_STATUTS: TicketStatut[] = ["NOUVEAU", "EN_COURS", "RESOLU", "FERME"];
const VALID_TYPES: TicketType[] = ["BUG", "QUESTION", "AMELIORATION"];

export async function GET(req: NextRequest) {
  const session = await getAdminSession();
  if (!session) {
    return NextResponse.json({ error: "Non autorisé" }, { status: 401 });
  }

  try {
    const { searchParams } = req.nextUrl;
    const statut = searchParams.get("statut") as TicketStatut | null;
    const type = searchParams.get("type") as TicketType | null;

    const where: { statut?: TicketStatut; type?: TicketType } = {};
    if (statut && VALID_STATUTS.includes(statut)) where.statut = statut;
    if (type && VALID_TYPES.includes(type)) where.type = type;

    const [tickets, nouveauCount] = await Promise.all([
      prisma.ticket.findMany({
        where,
        orderBy: { updatedAt: "desc" },
        include: { _count: { select: { messages: true } } },
      }),
      prisma.ticket.count({ where: { statut: "NOUVEAU" } }),
    ]);

    return NextResponse.json({
      tickets: tickets.map((t) => ({
        id: t.id,
        numero: t.numero,
        email: t.email,
        societe: t.societe,
        type: t.type,
        sujet: t.sujet,
        statut: t.statut,
        messageCount: t._count.messages,
        createdAt: t.createdAt,
        updatedAt: t.updatedAt,
      })),
      nouveauCount,
    });
  } catch (err) {
    console.error("[GET /api/admin/tickets]", err);
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}

export async function PATCH(req: NextRequest) {
  const session = await getAdminSession();
  if (!session) {
    return NextResponse.json({ error: "Non autorisé" }, { status: 401 });
  }

  try {
    const body = await req.json();
    const { id, statut } = body as { id?: string; statut?: string };

    if (!id || !statut || !VALID_STATUTS.includes(statut as TicketStatut)) {
      return NextResponse.json({ error: "Données invalides" }, { status: 400 });
    }

    const ticket = await prisma.ticket.update({
      where: { id },
      data: { statut: statut as TicketStatut },
    });

    return NextResponse.json({
      id: ticket.id,
      statut: ticket.statut,
      updatedAt: ticket.updatedAt,
    });
  } catch (err) {
    console.error("[PATCH /api/admin/tickets]", err);
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}
