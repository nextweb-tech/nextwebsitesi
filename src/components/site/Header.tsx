import { useEffect, useState } from "react";

import { Logo } from "./Logo";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const NAV = [
  { id: "cozumler", label: "Çözümler" },
  { id: "hakkimizda", label: "Hakkımızda" },
  { id: "urunler", label: "Ürünler" },
  { id: "neden-next", label: "Neden NEXT" },
  { id: "iletisim", label: "İletişim" },
];

function scrollToId(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function Header() {
  const [scrolled, setScrolled] = useState(false);

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
          aria-label="NEXT ana sayfa"
        >
          <Logo tone={scrolled ? "dark" : "light"} />
        </button>

        <nav className="hidden items-center gap-8 lg:flex">
          {NAV.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => scrollToId(item.id)}
              className={cn(
                "text-sm font-medium transition-colors",
                scrolled
                  ? "text-steel hover:text-primary"
                  : "text-white/80 hover:text-white",
              )}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <Button
          onClick={() => scrollToId("teklif")}
          className="rounded-sm px-5 text-xs font-bold tracking-[0.14em] uppercase"
        >
          Teklif Al
        </Button>
      </div>
    </header>
  );
}
