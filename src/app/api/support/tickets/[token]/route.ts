export const dynamic = "force-dynamic";

import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ token: string }> }
) {
  try {
    const { token } = await params;

    const ticket = await prisma.ticket.findUnique({
      where: { token },
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
      codeClient: ticket.codeClient,
      societe: ticket.societe,
      type: ticket.type,
      sujet: ticket.sujet,
      description: ticket.description,
      statut: ticket.statut,
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
    console.error("[GET /api/support/tickets/[token]]", err);
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}
