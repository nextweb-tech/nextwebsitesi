import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const quoteSchema = z.object({
  name: z.string().trim().min(2, "Ad soyad zorunludur").max(100),
  company: z.string().trim().min(2, "Kurum adı zorunludur").max(120),
  email: z.string().trim().email("Geçerli bir e-posta giriniz").max(255),
  phone: z.string().trim().min(7, "Telefon zorunludur").max(30),
  eventType: z.string().trim().min(2).max(60),
  attendees: z.string().trim().min(1).max(40),
  eventDate: z.string().trim().max(40).default(""),
  message: z.string().trim().max(2000).default(""),
  kvkk: z.literal(true),
  aydinlatma: z.literal(true),
});

export type QuoteInput = z.input<typeof quoteSchema>;

export const submitQuote = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => quoteSchema.parse(data))
  .handler(async ({ data }) => {
    const { deliverQuoteMail } = await import("./quote.server");
    const { kvkk: _kvkk, aydinlatma: _aydinlatma, ...payload } = data;
    await deliverQuoteMail(payload);
    return { ok: true as const };
  });
