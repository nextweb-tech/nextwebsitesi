import registration from "@/assets/product-registration.jpg";
import accommodation from "@/assets/product-accommodation.jpg";
import transfer from "@/assets/product-transfer.jpg";
import app from "@/assets/product-app.jpg";
import { cn } from "@/lib/utils";

const PRODUCTS = [
  {
    image: registration,
    title: "Kayıt & LCV Yönetimi",
    text: "Davetiye gönderiminden LCV takibine, kotalı kayıt formlarından QR'lı yaka kartı ve hızlı check-in ekranlarına kadar tüm katılımcı yolculuğu tek panelden yönetilir. Katılım durumu anlık raporlanır, davet listesi tekrar tekrar temizlenmek zorunda kalmaz.",
    points: ["Çok dilli kayıt formları", "QR check-in ve yaka kartı", "Anlık katılım raporları"],
  },
  {
    image: accommodation,
    title: "Konaklama & Oda Planlama",
    text: "Otel blokajı, oda tipi kotaları, refakatçi ve oda arkadaşı eşleştirmeleri, giriş-çıkış tarihleri ve rooming list süreçleri otomatikleşir. Otel ile paylaşılan liste her zaman güncel kalır, iptal ve değişiklikler anında yansır.",
    points: ["Blokaj ve kota kontrolü", "Otomatik rooming list", "Değişiklik geçmişi"],
  },
  {
    image: transfer,
    title: "Ulaşım & Transfer Operasyonu",
    text: "Uçuş bilgileri, karşılama ekipleri, araç kapasiteleri ve transfer saatleri tek bir plan üzerinde birleşir. Sahadaki ekip mobil ekrandan yolcu listesini görür, gecikmeler ve boş koltuklar anında yönetime düşer.",
    points: ["Uçuş–yolcu eşleştirme", "Araç ve kapasite planı", "Saha ekibi mobil takibi"],
  },
  {
    image: app,
    title: "Mobil Uygulama & Etkinlik Web Sitesi",
    text: "Katılımcının cebinde program, konuşmacı bilgileri, kişisel ajanda, anlık bildirim, anket ve oylama; markanızın kimliğiyle tasarlanmış etkinlik web sitesiyle bütünleşir. Tek içerik girişi, tüm kanallarda aynı bilgi.",
    points: ["Kişisel ajanda ve bildirim", "Anket, oylama ve soru-cevap", "Marka uyumlu etkinlik sitesi"],
  },
];

export function Products() {
  return (
    <section id="urunler" className="bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <p className="eyebrow">Ürünlerimiz</p>
        <h2 className="mt-4 max-w-3xl text-3xl text-navy sm:text-4xl">
          Etkinliğin her aşaması için üretilmiş, birbiriyle konuşan modüller.
        </h2>

        <div className="mt-16 space-y-16 sm:space-y-24">
          {PRODUCTS.map((product, index) => (
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
                  src={product.image}
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
