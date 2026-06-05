export const dynamic = "force-dynamic";

import { TicketType } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
import { v4 as uuidv4 } from "uuid";
import { isValidClientCode, normalizeClientCode } from "@/lib/client-codes";
import { sendTicketConfirmationEmail } from "@/lib/email";
import { prisma } from "@/lib/prisma";
import { generateTicketNumero } from "@/lib/tickets";

const VALID_TYPES: TicketType[] = ["BUG", "QUESTION", "AMELIORATION"];

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { email, codeClient, societe, type, sujet, description } = body as {
      email?: string;
      codeClient?: string;
      societe?: string;
      type?: string;
      sujet?: string;
      description?: string;
    };

    if (!email?.trim() || !codeClient?.trim() || !sujet?.trim() || !description?.trim()) {
      return NextResponse.json({ error: "Champs obligatoires manquants" }, { status: 400 });
    }

    if (!isValidClientCode(codeClient)) {
      return NextResponse.json(
        { error: "Code client non reconnu. Vérifiez votre code de licence." },
        { status: 403 }
      );
    }

    if (!type || !VALID_TYPES.includes(type as TicketType)) {
      return NextResponse.json({ error: "Type de ticket invalide" }, { status: 400 });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      return NextResponse.json({ error: "Email invalide" }, { status: 400 });
    }

    const numero = await generateTicketNumero();
    const token = uuidv4();

    const ticket = await prisma.ticket.create({
      data: {
        numero,
        email: email.trim().toLowerCase(),
        codeClient: normalizeClientCode(codeClient),
        societe: societe?.trim() || null,
        type: type as TicketType,
        sujet: sujet.trim(),
        description: description.trim(),
        token,
      },
    });

    await sendTicketConfirmationEmail({
      to: ticket.email,
      numero: ticket.numero,
      sujet: ticket.sujet,
      token: ticket.token,
    });

    return NextResponse.json({
      numero: ticket.numero,
      token: ticket.token,
      trackingUrl: `/support/${ticket.token}`,
    });
  } catch (err) {
    console.error("[POST /api/support/tickets]", err);
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}
