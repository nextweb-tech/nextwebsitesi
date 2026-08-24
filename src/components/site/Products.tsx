import registration from "@/assets/product-registration.jpg";
import accommodation from "@/assets/product-accommodation.jpg";
import transfer from "@/assets/product-transfer.jpg";
import app from "@/assets/product-app.jpg";
import { useI18n } from "@/lib/i18n";
import { cn } from "@/lib/utils";

const IMAGES = [registration, accommodation, transfer, app];

export function Products() {
  const { t } = useI18n();

  return (
    <section id="urunler" className="bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <p className="eyebrow">{t.products.eyebrow}</p>
        <h2 className="mt-4 max-w-3xl text-3xl text-navy sm:text-4xl">{t.products.title}</h2>

        <div className="mt-16 space-y-16 sm:space-y-24">
          {t.products.items.map((product, index) => (
            <article
              key={product.title}
              className="grid items-center gap-8 lg:grid-cols-2 lg:gap-16"
            >
              <div
                className={cn(
                  "relative overflow-hidden border border-border",
                  index % 2 === 1 && "lg:order-2",
                )}
              >
                <img
                  src={IMAGES[index]}
                  alt={product.title}
                  loading="lazy"
                  width={1280}
                  height={960}
                  className="aspect-[4/3] w-full object-cover transition-transform duration-700 hover:scale-105"
                />
                <span className="absolute left-0 top-0 bg-primary px-3 py-1.5 text-[11px] font-bold tracking-[0.18em] text-primary-foreground">
                  0{index + 1}
                </span>
              </div>

              <div className={cn(index % 2 === 1 && "lg:order-1")}>
                <h3 className="text-2xl text-navy sm:text-3xl">{product.title}</h3>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                  {product.text}
                </p>
                <ul className="mt-6 space-y-2.5">
                  {product.points.map((point) => (
                    <li key={point} className="flex items-center gap-3 text-sm text-navy">
                      <span className="h-px w-6 bg-primary" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
