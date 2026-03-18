import type { VercelRequest, VercelResponse } from "@vercel/node";
import nodemailer from "nodemailer";

const LOGO_URL = "https://cdn.prod.website-files.com/618ac216f0fe430bdd7d4310/618ac4ef655edfae991f06b2_Group%20108.png";

// ── Schubert Design – Notification to Team ──
function buildNotificationHtml(data: {
  firstName: string;
  lastName: string;
  email: string;
  subject: string;
  message: string;
}) {
  return `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"/></head>
<body style="margin:0;padding:0;background:#f4f4f4;font-family:'Helvetica Neue',Arial,sans-serif">
  <div style="max-width:600px;margin:0 auto;background:#ffffff">
    <!-- Header -->
    <div style="background:#0a0a0a;padding:32px 40px;text-align:center">
      <img src="${LOGO_URL}" alt="Schubert Design" style="height:32px;filter:invert(1)" />
    </div>
    <!-- Content -->
    <div style="padding:40px">
      <p style="margin:0;font-size:11px;text-transform:uppercase;letter-spacing:2px;color:#999;font-weight:600">Neue Anfrage</p>
      <h1 style="font-family:Georgia,'Times New Roman',serif;font-weight:400;font-style:italic;font-size:26px;color:#111;margin:12px 0 28px">
        ${data.firstName} ${data.lastName}
      </h1>

      <table style="width:100%;border-collapse:collapse">
        <tr>
          <td style="padding:12px 0;border-bottom:1px solid #f0f0f0;font-size:12px;text-transform:uppercase;letter-spacing:1px;color:#999;font-weight:600;width:120px;vertical-align:top">Name</td>
          <td style="padding:12px 0;border-bottom:1px solid #f0f0f0;font-size:14px;color:#333">${data.firstName} ${data.lastName}</td>
        </tr>
        <tr>
          <td style="padding:12px 0;border-bottom:1px solid #f0f0f0;font-size:12px;text-transform:uppercase;letter-spacing:1px;color:#999;font-weight:600;vertical-align:top">E-Mail</td>
          <td style="padding:12px 0;border-bottom:1px solid #f0f0f0;font-size:14px;color:#333"><a href="mailto:${data.email}" style="color:#333;text-decoration:underline">${data.email}</a></td>
        </tr>
        <tr>
          <td style="padding:12px 0;border-bottom:1px solid #f0f0f0;font-size:12px;text-transform:uppercase;letter-spacing:1px;color:#999;font-weight:600;vertical-align:top">Betreff</td>
          <td style="padding:12px 0;border-bottom:1px solid #f0f0f0;font-size:14px;color:#333">${data.subject}</td>
        </tr>
      </table>

      <div style="margin:28px 0 0;padding:20px;background:#fafafa;border-left:3px solid #0a0a0a">
        <p style="margin:0 0 8px;font-size:11px;text-transform:uppercase;letter-spacing:1px;color:#999;font-weight:600">Nachricht</p>
        <p style="margin:0;font-size:14px;color:#555;line-height:1.8;white-space:pre-wrap">${data.message}</p>
      </div>

      <div style="margin-top:32px">
        <a href="mailto:${data.email}" style="display:inline-block;padding:12px 28px;background:#0a0a0a;color:#fff;font-size:12px;text-transform:uppercase;letter-spacing:1.5px;text-decoration:none;font-weight:600">Direkt antworten</a>
      </div>
    </div>

    <!-- Footer -->
    <div style="padding:24px 40px;border-top:1px solid #f0f0f0;text-align:center">
      <p style="margin:0;font-size:11px;color:#bbb">Diese Anfrage wurde über das Kontaktformular auf schubertdesign.de gesendet.</p>
    </div>
  </div>
</body>
</html>`;
}

// ── Schubert Design – Confirmation to Customer ──
function buildConfirmationHtml(data: {
  firstName: string;
  subject: string;
  message: string;
}) {
  return `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"/></head>
<body style="margin:0;padding:0;background:#f4f4f4;font-family:'Helvetica Neue',Arial,sans-serif">
  <div style="max-width:600px;margin:0 auto;background:#ffffff">
    <!-- Header -->
    <div style="background:#0a0a0a;padding:32px 40px;text-align:center">
      <img src="${LOGO_URL}" alt="Schubert Design" style="height:32px;filter:invert(1)" />
    </div>
    <!-- Content -->
    <div style="padding:40px">
      <h1 style="font-family:Georgia,'Times New Roman',serif;font-weight:400;font-style:italic;font-size:28px;color:#111;margin:0 0 8px">
        Vielen Dank, ${data.firstName}!
      </h1>
      <p style="font-size:15px;color:#555;line-height:1.8;margin:16px 0 0">
        Wir haben Ihre Anfrage erhalten und melden uns schnellstmöglich bei Ihnen – in der Regel innerhalb von <strong style="color:#111">1–2 Werktagen</strong>.
      </p>

      <div style="margin:28px 0;padding:20px;background:#fafafa;border-left:3px solid #0a0a0a">
        <p style="margin:0 0 4px;font-size:11px;text-transform:uppercase;letter-spacing:1px;color:#999;font-weight:600">Ihre Anfrage</p>
        <p style="margin:0;font-size:14px;color:#555;line-height:1.7">
          <strong>Betreff:</strong> ${data.subject}<br/>
          ${data.message ? `<strong>Nachricht:</strong> ${data.message.substring(0, 400)}${data.message.length > 400 ? "…" : ""}` : ""}
        </p>
      </div>

      <p style="font-size:15px;color:#555;line-height:1.8">
        In der Zwischenzeit können Sie gerne unseren <a href="https://schubertdesign.de/showroom" style="color:#111;text-decoration:underline">Showroom besuchen</a> oder uns direkt anrufen.
      </p>

      <div style="margin:28px 0 0;padding:20px;background:#fafafa">
        <table style="width:100%">
          <tr>
            <td style="font-size:13px;color:#555;line-height:1.7">
              <strong style="color:#111">Schubert Design</strong><br/>
              Schrobenhausener Str. 132<br/>
              85051 Ingolstadt<br/><br/>
              <a href="tel:+4984197474-0" style="color:#333;text-decoration:none">+49 (0) 841 97474 0</a><br/>
              <a href="mailto:schubert@schubertdesign.de" style="color:#333;text-decoration:none">schubert@schubertdesign.de</a>
            </td>
            <td style="vertical-align:top;text-align:right;font-size:13px;color:#555;line-height:1.7">
              <strong style="color:#111">Showroom</strong><br/>
              Di–Fr: 09–12:30 &amp; 14–17 Uhr<br/>
              Sa: 10–15 Uhr<br/>
              Mo: geschlossen
            </td>
          </tr>
        </table>
      </div>

      <p style="font-size:15px;color:#555;line-height:1.8;margin-top:28px">
        Mit besten Grüßen,<br/>
        <strong style="color:#111">Ihr Schubert Design Team</strong>
      </p>
    </div>

    <!-- Footer -->
    <div style="padding:24px 40px;border-top:1px solid #f0f0f0;text-align:center">
      <p style="margin:0 0 4px;font-size:11px;color:#bbb">Schubert GmbH &amp; Co. KG · Bad · Naturstein · Fliese</p>
      <p style="margin:0;font-size:11px;color:#bbb">Schrobenhausener Str. 132, 85051 Ingolstadt</p>
    </div>
  </div>
</body>
</html>`;
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method === "OPTIONS") {
    return res.status(200).setHeader("Access-Control-Allow-Origin", "*").setHeader("Access-Control-Allow-Methods", "POST, OPTIONS").setHeader("Access-Control-Allow-Headers", "Content-Type").end();
  }

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { firstName, lastName, email, subject, message } = req.body;

  if (!firstName || !lastName || !email || !message) {
    return res.status(400).json({ error: "Alle Pflichtfelder müssen ausgefüllt sein." });
  }

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT || 587),
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
    tls: {
      ciphers: "SSLv3",
      rejectUnauthorized: false,
    },
  });

  const fromAddress = `"Schubert Design" <${process.env.SMTP_USER}>`;

  try {
    await Promise.all([
      // Notification to Schubert
      transporter.sendMail({
        from: fromAddress,
        to: "schubert@schubertdesign.de",
        replyTo: email,
        subject: `Neue Anfrage: ${subject} – ${firstName} ${lastName}`,
        html: buildNotificationHtml({ firstName, lastName, email, subject, message }),
      }),
      // Confirmation to customer
      transporter.sendMail({
        from: fromAddress,
        to: email,
        subject: "Ihre Anfrage bei Schubert Design – Bestätigung",
        html: buildConfirmationHtml({ firstName, subject, message }),
      }),
    ]);

    return res.status(200).json({ success: true });
  } catch (error: any) {
    console.error("SMTP Error:", error);
    return res.status(500).json({ error: "E-Mail konnte nicht gesendet werden.", details: error.message });
  }
}
