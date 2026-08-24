import { useEffect, useRef, useState } from "react";

import { useI18n } from "@/lib/i18n";

const STATS = [
  { value: 1_250_000, suffix: "+", sketch: <SketchBadge /> },
  { value: 25_000, suffix: "", sketch: <SketchHall /> },
  { value: 180_000, suffix: "+", sketch: <SketchRoute /> },
];


function useCountUp(target: number, run: boolean) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!run) return;
    const start = performance.now();
    const duration = 1600;
    let frame = 0;
    const tick = (now: number) => {
      const p = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setValue(Math.round(target * eased));
      if (p < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [target, run]);
  return value;
}

function StatCard({
  stat,
  copy,
  locale,
  run,
}: {
  stat: (typeof STATS)[number];
  copy: { label: string; text: string };
  locale: string;
  run: boolean;
}) {
  const value = useCountUp(stat.value, run);
  return (
    <article className="group relative overflow-hidden border border-border bg-card p-8 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[var(--shadow-elevated)]">
      <div className="absolute -right-6 -top-6 opacity-70 transition-opacity duration-300 group-hover:opacity-100">
        {stat.sketch}
      </div>
      <div className="relative">
        <div className="text-4xl font-bold tracking-tight text-navy sm:text-5xl">
          {value.toLocaleString(locale)}
          <span className="text-primary">{stat.suffix}</span>
        </div>
        <h3 className="mt-3 text-sm font-bold tracking-[0.14em] text-navy uppercase">
          {copy.label}
        </h3>
        <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted-foreground">{copy.text}</p>
      </div>
    </article>
  );
}


export function Stats() {
  const { t, lang } = useI18n();
  const ref = useRef<HTMLDivElement>(null);
  const [run, setRun] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setRun(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="cozumler" className="border-b border-border bg-background py-20 sm:py-28">
      <div ref={ref} className="mx-auto max-w-7xl px-5 sm:px-8">
        <p className="eyebrow">{t.stats.eyebrow}</p>
        <h2 className="mt-4 max-w-2xl text-3xl text-navy sm:text-4xl">{t.stats.title}</h2>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {STATS.map((stat, index) => (
            <StatCard
              key={stat.value}
              stat={stat}
              copy={t.stats.items[index]!}
              locale={lang === "tr" ? "tr-TR" : "en-US"}
              run={run}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

const sketchProps = {
  width: 168,
  height: 168,
  viewBox: "0 0 120 120",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.1,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  className: "text-primary/35",
  "aria-hidden": true,
};

function SketchBadge() {
  return (
    <svg {...sketchProps}>
      <rect x="30" y="18" width="58" height="78" rx="6" />
      <path d="M44 18v-6h30v6" />
      <circle cx="59" cy="44" r="11" />
      <path d="M42 72c4-9 11-13 17-13s13 4 17 13" />
      <path d="M42 84h34" />
      <path d="M18 30l10 6M18 60h10M18 90l10-6" />
    </svg>
  );
}

function SketchHall() {
  return (
    <svg {...sketchProps}>
      <path d="M14 92h92" />
      <path d="M22 92l14-30h48l14 30" />
      <path d="M36 74h48M31 84h58" />
      <rect x="44" y="20" width="32" height="20" rx="2" />
      <path d="M60 40v10" />
      <path d="M34 30l8 8M86 30l-8 8" />
      <circle cx="42" cy="68" r="2.4" />
      <circle cx="60" cy="68" r="2.4" />
      <circle cx="78" cy="68" r="2.4" />
    </svg>
  );
}

function SketchRoute() {
  return (
    <svg {...sketchProps}>
      <path d="M16 96c18 0 14-26 32-26s16 26 34 26 22-18 22-18" />
      <circle cx="30" cy="34" r="10" />
      <path d="M30 44v10" />
      <rect x="62" y="20" width="42" height="26" rx="4" />
      <path d="M62 32h42" />
      <path d="M72 46v6M94 46v6" />
      <circle cx="74" cy="52" r="3" />
      <circle cx="92" cy="52" r="3" />
    </svg>
  );
}
