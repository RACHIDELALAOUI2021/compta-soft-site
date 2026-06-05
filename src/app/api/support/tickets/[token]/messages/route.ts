export const dynamic = "force-dynamic";

import { MessageAuteur } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(
  req: NextRequest,
  { params }: { params: Promise<{ token: string }> }
) {
  try {
    const { token } = await params;
    const body = await req.json();
    const { contenu } = body as { contenu?: string };

    if (!contenu?.trim()) {
      return NextResponse.json({ error: "Message vide" }, { status: 400 });
    }

    const ticket = await prisma.ticket.findUnique({ where: { token } });
    if (!ticket) {
      return NextResponse.json({ error: "Ticket introuvable" }, { status: 404 });
    }

    if (ticket.statut === "FERME") {
      return NextResponse.json({ error: "Ce ticket est fermé" }, { status: 403 });
    }

    const message = await prisma.message.create({
      data: {
        ticketId: ticket.id,
        auteur: MessageAuteur.CLIENT,
        contenu: contenu.trim(),
      },
    });

    if (ticket.statut === "RESOLU") {
      await prisma.ticket.update({
        where: { id: ticket.id },
        data: { statut: "EN_COURS" },
      });
    } else {
      await prisma.ticket.update({
        where: { id: ticket.id },
        data: { updatedAt: new Date() },
      });
    }

    return NextResponse.json({
      id: message.id,
      auteur: message.auteur,
      contenu: message.contenu,
      createdAt: message.createdAt,
    });
  } catch (err) {
    console.error("[POST /api/support/tickets/[token]/messages]", err);
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}
