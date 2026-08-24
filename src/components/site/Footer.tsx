import { Mail, MapPin, Phone } from "lucide-react";

import { Logo } from "./Logo";
import type { LegalKey } from "./LegalDialog";

export function Footer({ onOpenLegal }: { onOpenLegal: (key: LegalKey) => void }) {
  return (
    <footer id="iletisim" className="bg-navy pt-16 pb-8 text-white/70">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-10 border-b border-white/10 pb-12 lg:grid-cols-[1.2fr_1fr_1fr]">
          <div>
            <Logo tone="light" />
            <p className="mt-6 max-w-sm text-sm leading-relaxed">
              Etkinlik sektörü için kayıt, LCV, konaklama, ulaşım, transfer, mobil uygulama ve web
              sitesi çözümleri geliştiriyoruz.
            </p>
          </div>

          <div>
            <h3 className="text-xs font-bold tracking-[0.2em] text-white uppercase">Adres</h3>
            <p className="mt-5 flex gap-3 text-sm leading-relaxed">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              Levent Mah. Etkinlik Cad. No: 1<br />
              Kat 4, Beşiktaş / İstanbul
            </p>
          </div>

          <div>
            <h3 className="text-xs font-bold tracking-[0.2em] text-white uppercase">İletişim</h3>
            <div className="mt-5 space-y-3 text-sm">
              <a
                href="mailto:info@next.com.tr"
                className="flex items-center gap-3 transition-colors hover:text-white"
              >
                <Mail className="h-4 w-4 text-primary" />
                info@next.com.tr
              </a>
              <a
                href="tel:+902120000000"
                className="flex items-center gap-3 transition-colors hover:text-white"
              >
                <Phone className="h-4 w-4 text-primary" />
                +90 212 000 00 00
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 pt-7 text-xs sm:flex-row">
          <p>© {new Date().getFullYear()} NEXT. Tüm hakları saklıdır.</p>
          <div className="flex items-center gap-6">
            <button
              type="button"
              onClick={() => onOpenLegal("privacy")}
              className="transition-colors hover:text-white"
            >
              Gizlilik Politikası
            </button>
            <button
              type="button"
              onClick={() => onOpenLegal("terms")}
              className="transition-colors hover:text-white"
            >
              Site Kullanım Koşulları
            </button>
            <button
              type="button"
              onClick={() => onOpenLegal("kvkk")}
              className="transition-colors hover:text-white"
            >
              KVKK
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
