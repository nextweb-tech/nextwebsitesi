const REASONS = [
  {
    title: "Ölçek korkusu yok",
    text: "5 kişilik bir yönetim toplantısıyla 25.000 kişilik bir kongre aynı altyapıda çalışır. Katılımcı sayısı arttığında sistem yavaşlamaz, süreç karmaşıklaşmaz; sadece plan büyür.",
  },
  {
    title: "Tek veri, tek gerçek",
    text: "Kayıt, konaklama, ulaşım ve saha modülleri aynı veriyi paylaşır. Ajans, kurum ve otel farklı listelerle çalışmaz; herkes aynı anda aynı doğru bilgiyi görür.",
  },
  {
    title: "Etkinlik saatinde yaşayan destek",
    text: "Sorunlar mesai saatlerine göre çıkmaz. Kurulumdan sökme anına kadar, gecenin ortasında bile yanıt veren bir ekip ve provası yapılmış bir yedek planla çalışırız.",
  },
  {
    title: "Veri güvenliği ve KVKK disiplini",
    text: "Katılımcı verisi kurumun en hassas varlığıdır. Yetki bazlı erişim, kayıt izleri, saklama süreleri ve KVKK uyumlu süreçler ürünün varsayılan ayarıdır, sonradan eklenen bir özellik değil.",
  },
  {
    title: "Kurumun kimliğiyle konuşan arayüzler",
    text: "Katılımcı NEXT'i değil, kurumunuzu görür. Kayıt sayfasından mobil uygulamaya kadar her ekran markanızın rengi, dili ve tonuyla üretilir.",
  },
  {
    title: "Ölçülebilir sonuç",
    text: "Kaç davet açıldı, kim geldi, hangi oturum doldu, transferler kaç dakika sürdü. Etkinlik bittiğinde elinizde hikâye değil, bir sonraki bütçeyi savunacak veri kalır.",
  },
];

export function WhyUs() {
  return (
    <section id="neden-next" className="border-y border-border bg-secondary py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-3xl">
          <p className="eyebrow">Neden NEXT</p>
          <h2 className="mt-4 text-3xl leading-tight text-navy sm:text-4xl">
            Sektörün en büyük kurumları, işin en kritik anını neden bize emanet ediyor?
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground">
            Büyük kurumlar yazılım satın almaz; risk devreder. Bir kongrenin açılışında kuyruk
            oluşmayacağına, 40 otobüsün doğru yolcuyla doğru saatte hareket edeceğine, binlerce
            katılımcının kişisel verisinin doğru şekilde korunacağına dair bir güvence ararlar. Bizi
            tercih etmelerinin sebebi ekranlarımızın güzelliği değil, işin en kritik anında hiçbir
            sürprizle karşılaşmamalarıdır. Yıllardır aynı kurumlarla çalışmaya devam ediyorsak, bunun
            nedeni her etkinlikte verdiğimiz sözü tutmuş olmamızdır.
          </p>
        </div>

        <div className="mt-14 grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {REASONS.map((reason, index) => (
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
