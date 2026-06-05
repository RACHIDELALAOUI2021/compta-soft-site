import { Resend } from "resend";

function getResend() {
  const key = process.env.RESEND_API_KEY;
  if (!key) return null;
  return new Resend(key);
}

function getFromEmail() {
  return process.env.RESEND_FROM_EMAIL ?? "Compta Soft <onboarding@resend.dev>";
}

function getSiteUrl() {
  return process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
}

function emailLayout(content: string) {
  return `
<!DOCTYPE html>
<html lang="fr">
<head><meta charset="utf-8"></head>
<body style="margin:0;padding:0;background:#F7F4EF;font-family:'DM Sans',Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#F7F4EF;padding:32px 16px;">
    <tr><td align="center">
      <table width="560" cellpadding="0" cellspacing="0" style="background:#fff;border-radius:16px;overflow:hidden;border:1px solid rgba(10,42,30,.08);">
        <tr>
          <td style="background:#0A2A1E;padding:24px 32px;">
            <span style="font-family:Arial,sans-serif;font-size:20px;font-weight:800;color:#fff;">Compta</span>
            <span style="font-family:Arial,sans-serif;font-size:20px;font-weight:800;color:#1D9E75;"> Soft</span>
          </td>
        </tr>
        <tr>
          <td style="padding:32px;color:#0A2A1E;font-size:15px;line-height:1.6;">
            ${content}
          </td>
        </tr>
        <tr>
          <td style="padding:20px 32px;background:#F7F4EF;font-size:12px;color:#888;border-top:1px solid rgba(10,42,30,.06);">
            CasaSoft · Compta Soft — Support technique
          </td>
        </tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`;
}

export async function sendTicketConfirmationEmail(params: {
  to: string;
  numero: string;
  sujet: string;
  token: string;
}) {
  const resend = getResend();
  if (!resend) {
    console.warn("[email] RESEND_API_KEY missing — skipping confirmation email");
    return;
  }

  const trackingUrl = `${getSiteUrl()}/support/${params.token}`;

  await resend.emails.send({
    from: getFromEmail(),
    to: params.to,
    subject: `[${params.numero}] Votre demande de support Compta Soft`,
    html: emailLayout(`
      <h2 style="margin:0 0 16px;font-size:22px;font-weight:800;color:#0A2A1E;">Demande enregistrée</h2>
      <p style="margin:0 0 16px;color:#555;">Votre ticket de support a bien été créé. Notre équipe vous répondra dans les meilleurs délais.</p>
      <table style="width:100%;margin:0 0 24px;background:#F7F4EF;border-radius:10px;padding:16px;">
        <tr><td style="padding:8px 16px;font-size:13px;color:#888;">Numéro</td><td style="padding:8px 16px;font-weight:600;color:#1D9E75;">${params.numero}</td></tr>
        <tr><td style="padding:8px 16px;font-size:13px;color:#888;">Sujet</td><td style="padding:8px 16px;color:#0A2A1E;">${params.sujet}</td></tr>
      </table>
      <p style="margin:0 0 20px;color:#555;">Suivez l'avancement et ajoutez des précisions via votre espace dédié :</p>
      <a href="${trackingUrl}" style="display:inline-block;background:#1D9E75;color:#fff;padding:14px 28px;border-radius:100px;font-weight:600;text-decoration:none;font-size:14px;">Voir mon ticket</a>
      <p style="margin:24px 0 0;font-size:12px;color:#999;word-break:break-all;">${trackingUrl}</p>
    `),
  });
}

export async function sendAdminReplyEmail(params: {
  to: string;
  numero: string;
  sujet: string;
  token: string;
  replyContent: string;
}) {
  const resend = getResend();
  if (!resend) {
    console.warn("[email] RESEND_API_KEY missing — skipping reply notification");
    return;
  }

  const trackingUrl = `${getSiteUrl()}/support/${params.token}`;

  await resend.emails.send({
    from: getFromEmail(),
    to: params.to,
    subject: `[${params.numero}] Nouvelle réponse — ${params.sujet}`,
    html: emailLayout(`
      <h2 style="margin:0 0 16px;font-size:22px;font-weight:800;color:#0A2A1E;">Nouvelle réponse du support</h2>
      <p style="margin:0 0 16px;color:#555;">L'équipe Compta Soft a répondu à votre ticket <strong style="color:#1D9E75;">${params.numero}</strong>.</p>
      <div style="background:#F7F4EF;border-radius:10px;padding:20px;margin:0 0 24px;border-left:4px solid #1D9E75;">
        <p style="margin:0;color:#0A2A1E;white-space:pre-wrap;">${params.replyContent.replace(/</g, "&lt;").replace(/>/g, "&gt;")}</p>
      </div>
      <a href="${trackingUrl}" style="display:inline-block;background:#1D9E75;color:#fff;padding:14px 28px;border-radius:100px;font-weight:600;text-decoration:none;font-size:14px;">Répondre au ticket</a>
    `),
  });
}
