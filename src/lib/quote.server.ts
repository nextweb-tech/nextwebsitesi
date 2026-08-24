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
        `<tr><td style="padding:6px 12px;color:#64748B">${k}</td><td style="padding:6px 12px;color:#0D1B2A"><strong>${v
          .replace(/&/g, "&amp;")
          .replace(/</g, "&lt;")}</strong></td></tr>`,
    )
    .join("")}</table>`;

  return { subject: `NEXT | Yeni teklif talebi — ${data.company}`, text, html };
}

/**
 * E-posta gönderimi. SMTP bilgileri projeye eklendiğinde bu fonksiyon
 * ilgili sağlayıcının HTTP API'si üzerinden gönderim yapacak şekilde
 * tamamlanacaktır. Şu an talep sunucu tarafında loglanır.
 */
export async function deliverQuoteMail(data: QuotePayload) {
  const { subject, text } = renderQuoteEmail(data);
  console.info("[teklif-talebi]", subject, "\n", text);
  return { delivered: false as const };
}
