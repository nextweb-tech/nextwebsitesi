export interface QuotePayload {
  name: string;
  company: string;
  email: string;
  phone: string;
  eventType: string;
  attendees: string;
  eventDate: string;
  message: string;
}

const FROM = "next@next-web.com.tr";
const TO = "info@next-web.com.tr";

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export function renderQuoteEmail(data: QuotePayload) {
  const rows: [string, string][] = [
    ["Ad Soyad", data.name],
    ["Kurum", data.company],
    ["E-posta", data.email],
    ["Telefon", data.phone],
    ["Etkinlik Tipi", data.eventType],
    ["Katılımcı Sayısı", data.attendees],
    ["Tahmini Tarih", data.eventDate || "-"],
    ["Mesaj", data.message || "-"],
  ];

  const text = rows.map(([k, v]) => `${k}: ${v}`).join("\n");
  const html = `<table style="font-family:Arial,sans-serif;font-size:14px;border-collapse:collapse">${rows
    .map(
      ([k, v]) =>
        `<tr><td style="padding:6px 12px;color:#64748B">${k}</td><td style="padding:6px 12px;color:#0D1B2A"><strong>${escapeHtml(
          v,
        )}</strong></td></tr>`,
    )
    .join("")}</table>`;

  return { subject: `NEXT | Yeni teklif talebi — ${data.company}`, text, html };
}

/**
 * ZeptoMail HTTP API üzerinden gönderim. Sunucu ortamı SMTP (465) bağlantısını
 * desteklemediği için aynı hesabın "send mail token" değeri HTTP API ile kullanılır.
 */
export async function deliverQuoteMail(data: QuotePayload) {
  const token = process.env["ZEPTOMAIL_TOKEN"];
  const { subject, html, text } = renderQuoteEmail(data);

  if (!token) {
    console.error("[teklif-talebi] ZEPTOMAIL_TOKEN tanımlı değil", subject);
    throw new Error("mail_not_configured");
  }

  const response = await fetch("https://api.zeptomail.com/v1.1/email", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: token.startsWith("Zoho-enczapikey") ? token : `Zoho-enczapikey ${token}`,
    },
    body: JSON.stringify({
      from: { address: FROM, name: "NEXT Web" },
      to: [{ email_address: { address: TO, name: "NEXT" } }],
      reply_to: [{ address: data.email, name: data.name }],
      subject,
      htmlbody: html,
      textbody: text,
    }),
  });

  if (!response.ok) {
    const body = await response.text();
    console.error("[teklif-talebi] gönderim hatası", response.status, body);
    throw new Error("mail_send_failed");
  }

  return { delivered: true as const };
}
