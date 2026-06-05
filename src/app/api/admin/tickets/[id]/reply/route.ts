export const dynamic = "force-dynamic";

import { MessageAuteur } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
import { getAdminSession } from "@/lib/auth";
import { sendAdminReplyEmail } from "@/lib/email";
import { prisma } from "@/lib/prisma";

export async function POST(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const session = await getAdminSession();
  if (!session) {
    return NextResponse.json({ error: "Non autorisé" }, { status: 401 });
  }

  try {
    const { id } = await params;
    const body = await req.json();
    const { contenu } = body as { contenu?: string };

    if (!contenu?.trim()) {
      return NextResponse.json({ error: "Message vide" }, { status: 400 });
    }

    const ticket = await prisma.ticket.findUnique({ where: { id } });
    if (!ticket) {
      return NextResponse.json({ error: "Ticket introuvable" }, { status: 404 });
    }

    const message = await prisma.message.create({
      data: {
        ticketId: ticket.id,
        auteur: MessageAuteur.ADMIN,
        contenu: contenu.trim(),
      },
    });

    if (ticket.statut === "NOUVEAU") {
      await prisma.ticket.update({
        where: { id: ticket.id },
        data: { statut: "EN_COURS" },
      });
    }

    await sendAdminReplyEmail({
      to: ticket.email,
      numero: ticket.numero,
      sujet: ticket.sujet,
      token: ticket.token,
      replyContent: contenu.trim(),
    });

    return NextResponse.json({
      id: message.id,
      auteur: message.auteur,
      contenu: message.contenu,
      createdAt: message.createdAt,
    });
  } catch (err) {
    console.error("[POST /api/admin/tickets/[id]/reply]", err);
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}
