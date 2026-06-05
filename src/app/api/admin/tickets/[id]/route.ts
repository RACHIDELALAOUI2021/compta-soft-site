export const dynamic = "force-dynamic";

import { NextRequest, NextResponse } from "next/server";
import { getAdminSession } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const session = await getAdminSession();
  if (!session) {
    return NextResponse.json({ error: "Non autorisé" }, { status: 401 });
  }

  try {
    const { id } = await params;

    const ticket = await prisma.ticket.findUnique({
      where: { id },
      include: {
        messages: { orderBy: { createdAt: "asc" } },
      },
    });

    if (!ticket) {
      return NextResponse.json({ error: "Ticket introuvable" }, { status: 404 });
    }

    return NextResponse.json({
      id: ticket.id,
      numero: ticket.numero,
      email: ticket.email,
      societe: ticket.societe,
      type: ticket.type,
      sujet: ticket.sujet,
      description: ticket.description,
      statut: ticket.statut,
      token: ticket.token,
      createdAt: ticket.createdAt,
      updatedAt: ticket.updatedAt,
      messages: ticket.messages.map((m) => ({
        id: m.id,
        auteur: m.auteur,
        contenu: m.contenu,
        createdAt: m.createdAt,
      })),
    });
  } catch (err) {
    console.error("[GET /api/admin/tickets/[id]]", err);
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}
