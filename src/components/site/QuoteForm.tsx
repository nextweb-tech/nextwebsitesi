import { useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import { CheckCircle2, Loader2 } from "lucide-react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { submitQuote } from "@/lib/quote.functions";
import type { LegalKey } from "./LegalDialog";

const EVENT_TYPES = [
  "Kongre / Zirve",
  "Bayi Toplantısı & Gezi",
  "Kurum İçi Motivasyon",
  "Lansman",
  "Eğitim / Workshop",
  "Diğer",
];

const initial = {
  name: "",
  company: "",
  email: "",
  phone: "",
  eventType: EVENT_TYPES[0]!,
  attendees: "",
  eventDate: "",
  message: "",
};

export function QuoteForm({ onOpenLegal }: { onOpenLegal: (key: LegalKey) => void }) {
  const send = useServerFn(submitQuote);
  const [form, setForm] = useState(initial);
  const [kvkk, setKvkk] = useState(false);
  const [aydinlatma, setAydinlatma] = useState(false);
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  const canSubmit = kvkk && aydinlatma && !loading;

  const set = (key: keyof typeof initial) => (value: string) =>
    setForm((prev) => ({ ...prev, [key]: value }));

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    if (!kvkk || !aydinlatma) {
      toast.error("Devam etmek için KVKK ve aydınlatma metnini onaylamanız gerekir.");
      return;
    }
    setLoading(true);
    try {
      await send({ data: { ...form, kvkk: true, aydinlatma: true } });
      setDone(true);
      setForm(initial);
      setKvkk(false);
      setAydinlatma(false);
      toast.success("Talebiniz alındı. Ekibimiz en kısa sürede sizinle iletişime geçecek.");
    } catch {
      toast.error("Gönderim sırasında bir sorun oluştu. Lütfen bilgileri kontrol edip tekrar deneyin.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="teklif" className="surface-navy relative overflow-hidden py-20 sm:py-28">
      <div className="pointer-events-none absolute -left-32 top-0 h-[420px] w-[420px] rounded-full bg-primary/20 blur-3xl" />
      <div className="relative mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="eyebrow">Teklif İste</p>
          <h2 className="mt-4 text-3xl leading-tight text-white sm:text-4xl">
            Etkinliğinizi anlatın, <span className="text-brand-gradient">planı biz kuralım.</span>
          </h2>
          <p className="mt-5 max-w-md text-base leading-relaxed text-white/70">
            Katılımcı sayısı, tarih ve ihtiyaç duyduğunuz modülleri paylaşın; ekibimiz kapsamı
            netleştirip size özel bir teklif hazırlasın. Formunuz doğrudan ekibimizin e-posta
            adresine iletilir.
          </p>
          <ul className="mt-8 space-y-3 text-sm text-white/70">
            {["24 saat içinde geri dönüş", "Kapsam ve modül bazlı fiyatlama", "Demo ortamında canlı gösterim"].map(
              (item) => (
                <li key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  {item}
                </li>
              ),
            )}
          </ul>
        </div>

        <div className="border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm sm:p-9">
          {done ? (
            <div className="flex min-h-[380px] flex-col items-center justify-center text-center">
              <CheckCircle2 className="h-12 w-12 text-primary" />
              <h3 className="mt-5 text-2xl text-white">Talebiniz bize ulaştı</h3>
              <p className="mt-3 max-w-sm text-sm text-white/70">
                En kısa sürede sizinle iletişime geçeceğiz. Acil bir konu varsa
                info@next.com.tr adresinden bize yazabilirsiniz.
              </p>
              <Button
                variant="outline"
                onClick={() => setDone(false)}
                className="mt-7 rounded-sm border-white/30 bg-transparent text-white hover:bg-white/10 hover:text-white"
              >
                Yeni talep oluştur
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Ad Soyad *">
                  <Input
                    required
                    maxLength={100}
                    value={form.name}
                    onChange={(e) => set("name")(e.target.value)}
                    className="rounded-sm border-white/15 bg-white/5 text-white placeholder:text-white/40"
                    placeholder="Ad Soyad"
                  />
                </Field>
                <Field label="Kurum *">
                  <Input
                    required
                    maxLength={120}
                    value={form.company}
                    onChange={(e) => set("company")(e.target.value)}
                    className="rounded-sm border-white/15 bg-white/5 text-white placeholder:text-white/40"
                    placeholder="Kurum adı"
                  />
                </Field>
                <Field label="E-posta *">
                  <Input
                    required
                    type="email"
                    maxLength={255}
                    value={form.email}
                    onChange={(e) => set("email")(e.target.value)}
                    className="rounded-sm border-white/15 bg-white/5 text-white placeholder:text-white/40"
                    placeholder="ad@kurum.com"
                  />
                </Field>
                <Field label="Telefon *">
                  <Input
                    required
                    maxLength={30}
                    value={form.phone}
                    onChange={(e) => set("phone")(e.target.value)}
                    className="rounded-sm border-white/15 bg-white/5 text-white placeholder:text-white/40"
                    placeholder="+90 5xx xxx xx xx"
                  />
                </Field>
                <Field label="Etkinlik Tipi *">
                  <select
                    required
                    value={form.eventType}
                    onChange={(e) => set("eventType")(e.target.value)}
                    className="h-10 w-full rounded-sm border border-white/15 bg-white/5 px-3 text-sm text-white outline-none focus-visible:ring-2 focus-visible:ring-primary"
                  >
                    {EVENT_TYPES.map((type) => (
                      <option key={type} value={type} className="text-navy">
                        {type}
                      </option>
                    ))}
                  </select>
                </Field>
                <Field label="Katılımcı Sayısı *">
                  <Input
                    required
                    maxLength={40}
                    value={form.attendees}
                    onChange={(e) => set("attendees")(e.target.value)}
                    className="rounded-sm border-white/15 bg-white/5 text-white placeholder:text-white/40"
                    placeholder="Örn. 850"
                  />
                </Field>
              </div>

              <Field label="Tahmini Tarih">
                <Input
                  maxLength={40}
                  value={form.eventDate}
                  onChange={(e) => set("eventDate")(e.target.value)}
                  className="rounded-sm border-white/15 bg-white/5 text-white placeholder:text-white/40"
                  placeholder="Örn. Kasım 2026"
                />
              </Field>

              <Field label="İhtiyacınız">
                <Textarea
                  rows={4}
                  maxLength={2000}
                  value={form.message}
                  onChange={(e) => set("message")(e.target.value)}
                  className="rounded-sm border-white/15 bg-white/5 text-white placeholder:text-white/40"
                  placeholder="Kayıt, konaklama, transfer, mobil uygulama..."
                />
              </Field>

              <div className="space-y-3 border-t border-white/10 pt-5">
                <Consent
                  id="kvkk"
                  checked={kvkk}
                  onChange={setKvkk}
                  text={
                    <>
                      Kişisel verilerimin{" "}
                      <LegalLink onClick={() => onOpenLegal("privacy")}>Gizlilik Politikası</LegalLink>{" "}
                      kapsamında işlenmesine <strong className="text-white">açık rıza</strong> veriyorum.
                    </>
                  }
                />
                <Consent
                  id="aydinlatma"
                  checked={aydinlatma}
                  onChange={setAydinlatma}
                  text={
                    <>
                      <LegalLink onClick={() => onOpenLegal("kvkk")}>KVKK Aydınlatma Metni</LegalLink>'ni
                      okudum ve anladım.
                    </>
                  }
                />
              </div>

              <Button
                type="submit"
                size="lg"
                disabled={!canSubmit}
                className="w-full rounded-sm text-xs font-bold tracking-[0.18em] uppercase disabled:opacity-40"
              >
                {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : "Teklif Talebini Gönder"}
              </Button>
              {!kvkk || !aydinlatma ? (
                <p className="text-center text-xs text-white/50">
                  Formu gönderebilmek için her iki onayın işaretlenmesi zorunludur.
                </p>
              ) : null}
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="space-y-2">
      <Label className="text-[11px] font-bold tracking-[0.16em] text-white/60 uppercase">
        {label}
      </Label>
      {children}
    </div>
  );
}

function Consent({
  id,
  checked,
  onChange,
  text,
}: {
  id: string;
  checked: boolean;
  onChange: (value: boolean) => void;
  text: React.ReactNode;
}) {
  return (
    <div className="flex items-start gap-3">
      <Checkbox
        id={id}
        checked={checked}
        onCheckedChange={(value) => onChange(value === true)}
        className="mt-0.5 border-white/30 data-[state=checked]:border-primary data-[state=checked]:bg-primary"
      />
      <Label htmlFor={id} className="text-xs leading-relaxed font-normal text-white/70">
        {text}
      </Label>
    </div>
  );
}

function LegalLink({ children, onClick }: { children: React.ReactNode; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="text-primary underline underline-offset-2 hover:text-white"
    >
      {children}
    </button>
  );
}
