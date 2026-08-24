import { useEffect, useState } from "react";

import { Logo } from "./Logo";
import { Button } from "@/components/ui/button";
import { useI18n } from "@/lib/i18n";
import { cn } from "@/lib/utils";

function scrollToId(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function Header() {
  const { t, lang, setLang } = useI18n();
  const [scrolled, setScrolled] = useState(false);

  const nav = [
    { id: "cozumler", label: t.nav.solutions },
    { id: "hakkimizda", label: t.nav.about },
    { id: "urunler", label: t.nav.products },
    { id: "neden-next", label: t.nav.why },
    { id: "iletisim", label: t.nav.contact },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-border bg-background/90 backdrop-blur-xl"
          : "border-b border-transparent",
      )}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8">
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label={t.nav.home}
        >
          <Logo tone={scrolled ? "dark" : "light"} />
        </button>

        <nav className="hidden items-center gap-8 lg:flex">
          {nav.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => scrollToId(item.id)}
              className={cn(
                "text-sm font-medium transition-colors",
                scrolled ? "text-steel hover:text-primary" : "text-white/80 hover:text-white",
              )}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <div
            className={cn(
              "flex items-center gap-1 text-xs font-bold tracking-[0.12em] uppercase",
              scrolled ? "text-steel" : "text-white/70",
            )}
          >
            {(["tr", "en"] as const).map((code, index) => (
              <span key={code} className="flex items-center gap-1">
                {index === 1 ? <span className="opacity-40">/</span> : null}
                <button
                  type="button"
                  onClick={() => setLang(code)}
                  aria-label={code === "tr" ? "Türkçe" : "English"}
                  className={cn(
                    "transition-colors",
                    lang === code
                      ? "text-primary"
                      : scrolled
                        ? "hover:text-navy"
                        : "hover:text-white",
                  )}
                >
                  {code.toUpperCase()}
                </button>
              </span>
            ))}
          </div>

          <Button
            onClick={() => scrollToId("teklif")}
            className="rounded-sm px-5 text-xs font-bold tracking-[0.14em] uppercase"
          >
            {t.nav.cta}
          </Button>
        </div>
      </div>
    </header>
  );
}
