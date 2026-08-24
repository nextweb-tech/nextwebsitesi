import { useI18n } from "@/lib/i18n";

export function WhyUs() {
  const { t } = useI18n();

  return (
    <section id="neden-next" className="border-y border-border bg-secondary py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-3xl">
          <p className="eyebrow">{t.why.eyebrow}</p>
          <h2 className="mt-4 text-3xl leading-tight text-navy sm:text-4xl">{t.why.title}</h2>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground">{t.why.intro}</p>
        </div>

        <div className="mt-14 grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {t.why.items.map((reason, index) => (
            <div key={reason.title} className="group bg-background p-8 transition-colors hover:bg-card">
              <span className="text-xs font-bold tracking-[0.2em] text-primary">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-4 text-lg text-navy">{reason.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{reason.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
