import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowRight, ChevronDown } from "lucide-react";

import video1 from "@/assets/next-hero-1.mp4.asset.json";
import video2 from "@/assets/next-hero-2.mp4.asset.json";
import poster1 from "@/assets/hero-1.jpg";
import poster2 from "@/assets/hero-2.jpg";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const SLIDES = [
  {
    video: video1.url,
    poster: poster1,
    eyebrow: "5 Kişiden 25.000 Kişiye",
    title: ["Her ölçekte etkinliği", "tek platformda yönetin."],
    text: "Kongreden bayi gezisine, kurum içi motivasyon toplantısından uluslararası zirveye kadar; kayıt, konaklama, ulaşım ve saha operasyonunun tamamı tek merkezde buluşur.",
    cta: "Teklif Al",
  },
  {
    video: video2.url,
    poster: poster2,
    eyebrow: "Etkinliklerin Dijital Mimarı",
    title: ["Operasyonun görünmeyen", "altyapısını biz kuruyoruz."],
    text: "LCV'den mobil uygulamaya, transferden yaka kartına; binlerce katılımcının verisi saniyeler içinde akar, saha ekibi ve yönetim aynı gerçeği görür.",
    cta: "Projenizi Konuşalım",
  },
];

const DURATION = 8000;

export function HeroSlider() {
  const [active, setActive] = useState(0);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const goTo = useCallback((index: number) => {
    setActive(((index % SLIDES.length) + SLIDES.length) % SLIDES.length);
  }, []);

  useEffect(() => {
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => goTo(active + 1), DURATION);
    return () => {
      if (timer.current) clearTimeout(timer.current);
    };
  }, [active, goTo]);

  return (
    <section className="relative h-[100svh] min-h-[620px] w-full overflow-hidden bg-navy">
      {SLIDES.map((slide, index) => (
        <div
          key={slide.video}
          className={cn(
            "absolute inset-0 transition-opacity duration-1000",
            index === active ? "opacity-100" : "pointer-events-none opacity-0",
          )}
          aria-hidden={index !== active}
        >
          <video
            className="h-full w-full object-cover"
            src={slide.video}
            poster={slide.poster}
            autoPlay
            muted
            loop
            playsInline
            preload={index === 0 ? "auto" : "metadata"}
          />
          <div className="absolute inset-0 bg-[linear-gradient(100deg,oklch(0.16_0.04_259.4/0.94)_0%,oklch(0.16_0.04_259.4/0.7)_45%,oklch(0.16_0.04_259.4/0.35)_100%)]" />
        </div>
      ))}

      <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-5 sm:px-8">
        <div key={active} className="reveal max-w-3xl pt-24">
          <p className="eyebrow text-primary">{SLIDES[active]!.eyebrow}</p>
          <h1 className="mt-5 text-4xl leading-[1.05] text-white sm:text-6xl lg:text-7xl">
            {SLIDES[active]!.title.map((line, i) => (
              <span key={line} className="block">
                {i === 1 ? <span className="text-brand-gradient">{line}</span> : line}
              </span>
            ))}
          </h1>
          <p className="mt-6 max-w-xl text-base text-white/70 sm:text-lg">
            {SLIDES[active]!.text}
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-3">
            <Button
              size="lg"
              onClick={() =>
                document
                  .getElementById("teklif")
                  ?.scrollIntoView({ behavior: "smooth", block: "start" })
              }
              className="group rounded-sm px-7 text-xs font-bold tracking-[0.16em] uppercase shadow-[var(--shadow-brand)]"
            >
              {SLIDES[active]!.cta}
              <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() =>
                document
                  .getElementById("urunler")
                  ?.scrollIntoView({ behavior: "smooth", block: "start" })
              }
              className="rounded-sm border-white/30 bg-transparent px-7 text-xs font-bold tracking-[0.16em] text-white uppercase hover:bg-white/10 hover:text-white"
            >
              Ürünleri İncele
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 z-10 flex -translate-x-1/2 items-center gap-3">
        {SLIDES.map((slide, index) => (
          <button
            key={slide.video}
            type="button"
            onClick={() => goTo(index)}
            aria-label={`${index + 1}. slayt`}
            className={cn(
              "h-[3px] rounded-full transition-all",
              index === active ? "w-14 bg-primary" : "w-7 bg-white/35 hover:bg-white/60",
            )}
          />
        ))}
      </div>

      <ChevronDown className="absolute bottom-8 right-8 z-10 hidden h-5 w-5 animate-bounce text-white/50 lg:block" />
    </section>
  );
}
