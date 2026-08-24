import aboutImage from "@/assets/about-architect.jpg";
import { useI18n } from "@/lib/i18n";

export function About() {
  const { t } = useI18n();

  return (
    <section id="hakkimizda" className="surface-navy relative overflow-hidden py-20 sm:py-28">
      <div className="pointer-events-none absolute -right-24 top-1/2 h-[520px] w-[520px] -translate-y-1/2 rounded-full bg-primary/15 blur-3xl" />
      <div className="relative mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <p className="eyebrow">{t.about.eyebrow}</p>
          <h2 className="mt-4 text-3xl leading-tight text-white sm:text-4xl">
            {t.about.titleLead} <span className="text-brand-gradient">{t.about.titleAccent}</span>
          </h2>
          <div className="mt-8 overflow-hidden border border-white/10">
            <img
              src={aboutImage}
              alt={t.about.titleAccent}
              loading="lazy"
              width={1280}
              height={960}
              className="aspect-[4/3] w-full object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>
        </div>
        <div className="space-y-5 text-base leading-relaxed text-white/70">
          {t.about.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
