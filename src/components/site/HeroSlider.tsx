import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowRight, ChevronDown } from "lucide-react";

import video1 from "@/assets/next-hero-1.mp4.asset.json";
import video2 from "@/assets/next-hero-2.mp4.asset.json";
import poster1 from "@/assets/hero-1.jpg";
import poster2 from "@/assets/hero-2.jpg";
import { Button } from "@/components/ui/button";
import { useI18n } from "@/lib/i18n";
import { cn } from "@/lib/utils";

const MEDIA = [
  { video: video1.url, poster: poster1 },
  { video: video2.url, poster: poster2 },
];

const DURATION = 8000;

export function HeroSlider() {
  const { t } = useI18n();
  const [active, setActive] = useState(0);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const goTo = useCallback((index: number) => {
    setActive(((index % MEDIA.length) + MEDIA.length) % MEDIA.length);
  }, []);

  useEffect(() => {
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => goTo(active + 1), DURATION);
    return () => {
      if (timer.current) clearTimeout(timer.current);
    };
  }, [active, goTo]);

  const slide = t.hero.slides[active]!;

  return (
    <section className="relative h-[100svh] min-h-[620px] w-full overflow-hidden bg-navy">
      {MEDIA.map((media, index) => (
        <div
          key={media.video}
          className={cn(
            "absolute inset-0 transition-opacity duration-1000",
            index === active ? "opacity-100" : "pointer-events-none opacity-0",
          )}
          aria-hidden={index !== active}
        >
          <video
            className="h-full w-full object-cover"
            src={media.video}
            poster={media.poster}
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
          <p className="eyebrow text-primary">{slide.eyebrow}</p>
          <h1 className="mt-5 text-4xl leading-[1.05] text-white sm:text-6xl lg:text-7xl">
            {slide.title.map((line, i) => (
              <span key={line} className="block">
                {i === 1 ? <span className="text-brand-gradient">{line}</span> : line}
              </span>
            ))}
          </h1>
          <p className="mt-6 max-w-xl text-base text-white/70 sm:text-lg">{slide.text}</p>
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
              {slide.cta}
            <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 z-10 flex -translate-x-1/2 items-center gap-3">
        {MEDIA.map((media, index) => (
          <button
            key={media.video}
            type="button"
            onClick={() => goTo(index)}
            aria-label={t.hero.slideLabel(index + 1)}
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
