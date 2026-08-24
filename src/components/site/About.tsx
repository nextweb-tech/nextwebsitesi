export function About() {
  return (
    <section id="hakkimizda" className="surface-navy relative overflow-hidden py-20 sm:py-28">
      <div className="pointer-events-none absolute -right-24 top-1/2 h-[520px] w-[520px] -translate-y-1/2 rounded-full bg-primary/15 blur-3xl" />
      <div className="relative mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <p className="eyebrow">Hakkımızda</p>
          <h2 className="mt-4 text-3xl leading-tight text-white sm:text-4xl">
            Etkinlik sektörünün <span className="text-brand-gradient">dijital mimarıyız.</span>
          </h2>
        </div>
        <div className="space-y-5 text-base leading-relaxed text-white/70">
          <p>
            NEXT, etkinlik sektörünün kendine özgü temposunu bilen bir yazılım kurumudur. Bir
            kongrenin açılış saatinin ertelenemeyeceğini, 3.000 kişilik bir bayi gezisinde uçuş
            saatinin bir gecede değişebileceğini ve sahada geçen her dakikanın maliyet olduğunu
            bildiğimiz için ürünlerimizi masa başında değil, operasyonun içinde tasarladık.
          </p>
          <p>
            Kayıt, LCV, konaklama, ulaşım ve transfer, mobil uygulama, etkinlik web sitesi ve saha
            yönetimi modüllerimiz birbirinden bağımsız çalışabildiği gibi tek bir bütün olarak da
            kurgulanabilir. Bir modülde girilen veri, diğerinin doğal girdisi olur; böylece Excel
            trafiği, mükerrer kayıt ve son dakika sürprizleri ortadan kalkar.
          </p>
          <p>
            5 kişilik bir yönetim toplantısından 25.000 kişilik uluslararası bir organizasyona
            kadar aynı altyapıyı, aynı güvenlik standardını ve aynı ekip disiplinini sunarız.
            İşimiz yazılım geliştirmek; sorumluluğumuz ise etkinliğinizin ilk katılımcısından son
            transferine kadar her adımın plana uygun ilerlemesidir.
          </p>
        </div>
      </div>
    </section>
  );
}
