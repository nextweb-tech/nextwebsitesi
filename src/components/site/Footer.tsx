import { Mail, MapPin } from "lucide-react";

import { Logo } from "./Logo";
import type { LegalKey } from "./LegalDialog";
import { useI18n } from "@/lib/i18n";

export function Footer({ onOpenLegal }: { onOpenLegal: (key: LegalKey) => void }) {
  const { t } = useI18n();

  return (
    <footer id="iletisim" className="bg-navy pt-16 pb-8 text-white/70">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-10 border-b border-white/10 pb-12 lg:grid-cols-[1.2fr_1fr_1fr]">
          <div>
            <Logo tone="light" />
          </div>

          <div>
            <h3 className="text-xs font-bold tracking-[0.2em] text-white uppercase">
              {t.footer.addressTitle}
            </h3>
            <p className="mt-5 flex gap-3 text-sm leading-relaxed">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              Harbiye Mah. Darülbedai Cad. No:4/2
              <br />
              Şişli / İstanbul, Türkiye
            </p>
          </div>

          <div>
            <h3 className="text-xs font-bold tracking-[0.2em] text-white uppercase">
              {t.footer.contactTitle}
            </h3>
            <div className="mt-5 space-y-3 text-sm">
              <a
                href="mailto:info@next-web.com.tr"
                className="flex items-center gap-3 transition-colors hover:text-white"
              >
                <Mail className="h-4 w-4 text-primary" />
                info@next-web.com.tr
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 pt-7 text-xs sm:flex-row">
          <p>
            © {new Date().getFullYear()} NEXT. {t.footer.rights}
          </p>
          <div className="flex items-center gap-6">
            <button
              type="button"
              onClick={() => onOpenLegal("privacy")}
              className="transition-colors hover:text-white"
            >
              {t.footer.privacy}
            </button>
            <button
              type="button"
              onClick={() => onOpenLegal("terms")}
              className="transition-colors hover:text-white"
            >
              {t.footer.terms}
            </button>
            <button
              type="button"
              onClick={() => onOpenLegal("kvkk")}
              className="transition-colors hover:text-white"
            >
              {t.footer.kvkk}
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
