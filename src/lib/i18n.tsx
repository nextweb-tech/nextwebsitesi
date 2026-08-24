import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Lang = "tr" | "en";

const STORAGE_KEY = "next-lang";

export const content = {
  tr: {
    nav: {
      solutions: "Çözümler",
      about: "Hakkımızda",
      products: "Ürünler",
      why: "Neden NEXT",
      contact: "İletişim",
      cta: "Teklif Al",
      home: "NEXT ana sayfa",
    },
    hero: {
      slides: [
        {
          eyebrow: "5 Kişiden 25.000 Kişiye",
          title: ["Her ölçekte etkinliği", "tek platformda yönetin."],
          text: "Kongreden bayi gezisine, kurum içi motivasyon toplantısından uluslararası zirveye kadar; kayıt, konaklama, ulaşım ve saha operasyonunun tamamı tek merkezde buluşur.",
          cta: "Teklif Al",
        },
        {
          eyebrow: "Etkinliklerin Dijital Mimarı",
          title: ["Operasyonun görünmeyen", "altyapısını biz kuruyoruz."],
          text: "LCV'den mobil uygulamaya, transferden yaka kartına; binlerce katılımcının verisi saniyeler içinde akar, saha ekibi ve yönetim aynı gerçeği görür.",
          cta: "Projenizi Konuşalım",
        },
      ],
      secondary: "Ürünleri İncele",
      slideLabel: (n: number) => `${n}. slayt`,
    },
    stats: {
      eyebrow: "Sektördeki Ölçeğimiz",
      title: "Rakamlar, sahada kanıtlanmış bir operasyonun özetidir.",
      items: [
        {
          label: "Kayıt & Check-in",
          text: "Kongre, zirve ve bayi buluşmalarında sistemlerimiz üzerinden tamamlanan katılımcı kaydı.",
        },
        {
          label: "Tek Etkinlikte Katılımcı",
          text: "5 kişilik yönetim toplantısından 25.000 kişilik organizasyona kadar aynı altyapı, aynı istikrar.",
        },
        {
          label: "Konaklama & Transfer Hareketi",
          text: "Oda blokajı, rooming list, uçuş eşleştirme ve transfer planlaması dijital olarak yönetildi.",
        },
      ],
    },
    about: {
      eyebrow: "Hakkımızda",
      titleLead: "Etkinlik sektörünün",
      titleAccent: "dijital mimarıyız.",
      paragraphs: [
        "NEXT, etkinlik sektörünün kendine özgü temposunu bilen bir yazılım kurumudur. Bir kongrenin açılış saatinin ertelenemeyeceğini, 3.000 kişilik bir bayi gezisinde uçuş saatinin bir gecede değişebileceğini ve sahada geçen her dakikanın maliyet olduğunu bildiğimiz için ürünlerimizi masa başında değil, operasyonun içinde tasarladık.",
        "Kayıt, LCV, konaklama, ulaşım ve transfer, mobil uygulama, etkinlik web sitesi ve saha yönetimi modüllerimiz birbirinden bağımsız çalışabildiği gibi tek bir bütün olarak da kurgulanabilir. Bir modülde girilen veri, diğerinin doğal girdisi olur; böylece Excel trafiği, mükerrer kayıt ve son dakika sürprizleri ortadan kalkar.",
        "5 kişilik bir yönetim toplantısından 25.000 kişilik uluslararası bir organizasyona kadar aynı altyapıyı, aynı güvenlik standardını ve aynı ekip disiplinini sunarız. İşimiz yazılım geliştirmek; sorumluluğumuz ise etkinliğinizin ilk katılımcısından son transferine kadar her adımın plana uygun ilerlemesidir.",
      ],
    },
    products: {
      eyebrow: "Ürünlerimiz",
      title: "Etkinliğin her aşaması için üretilmiş, birbiriyle konuşan modüller.",
      items: [
        {
          title: "Kayıt & LCV Yönetimi",
          text: "Davetiye gönderiminden LCV takibine, kotalı kayıt formlarından QR'lı yaka kartı ve hızlı check-in ekranlarına kadar tüm katılımcı yolculuğu tek panelden yönetilir. Katılım durumu anlık raporlanır, davet listesi tekrar tekrar temizlenmek zorunda kalmaz.",
          points: ["Çok dilli kayıt formları", "QR check-in ve yaka kartı", "Anlık katılım raporları"],
        },
        {
          title: "Konaklama & Oda Planlama",
          text: "Otel blokajı, oda tipi kotaları, refakatçi ve oda arkadaşı eşleştirmeleri, giriş-çıkış tarihleri ve rooming list süreçleri otomatikleşir. Otel ile paylaşılan liste her zaman güncel kalır, iptal ve değişiklikler anında yansır.",
          points: ["Blokaj ve kota kontrolü", "Otomatik rooming list", "Değişiklik geçmişi"],
        },
        {
          title: "Ulaşım & Transfer Operasyonu",
          text: "Uçuş bilgileri, karşılama ekipleri, araç kapasiteleri ve transfer saatleri tek bir plan üzerinde birleşir. Sahadaki ekip mobil ekrandan yolcu listesini görür, gecikmeler ve boş koltuklar anında yönetime düşer.",
          points: ["Uçuş–yolcu eşleştirme", "Araç ve kapasite planı", "Saha ekibi mobil takibi"],
        },
        {
          title: "Mobil Uygulama & Etkinlik Web Sitesi",
          text: "Katılımcının cebinde program, konuşmacı bilgileri, kişisel ajanda, anlık bildirim, anket ve oylama; markanızın kimliğiyle tasarlanmış etkinlik web sitesiyle bütünleşir. Tek içerik girişi, tüm kanallarda aynı bilgi.",
          points: ["Kişisel ajanda ve bildirim", "Anket, oylama ve soru-cevap", "Marka uyumlu etkinlik sitesi"],
        },
      ],
    },
    why: {
      eyebrow: "Neden NEXT",
      title: "Sektörün en büyük kurumları, işin en kritik anını neden bize emanet ediyor?",
      intro:
        "Büyük kurumlar yazılım satın almaz; risk devreder. Bir kongrenin açılışında kuyruk oluşmayacağına, 40 otobüsün doğru yolcuyla doğru saatte hareket edeceğine, binlerce katılımcının kişisel verisinin doğru şekilde korunacağına dair bir güvence ararlar. Bizi tercih etmelerinin sebebi ekranlarımızın güzelliği değil, işin en kritik anında hiçbir sürprizle karşılaşmamalarıdır. Yıllardır aynı kurumlarla çalışmaya devam ediyorsak, bunun nedeni her etkinlikte verdiğimiz sözü tutmuş olmamızdır.",
      items: [
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
      ],
    },
    quote: {
      eyebrow: "Teklif İste",
      titleLead: "Etkinliğinizi anlatın,",
      titleAccent: "planı biz kuralım.",
      text: "Katılımcı sayısı, tarih ve ihtiyaç duyduğunuz modülleri paylaşın; ekibimiz kapsamı netleştirip size özel bir teklif hazırlasın. Formunuz doğrudan ekibimizin e-posta adresine iletilir.",
      bullets: [
        "24 saat içinde geri dönüş",
        "Kapsam ve modül bazlı fiyatlama",
        "Demo ortamında canlı gösterim",
      ],
      eventTypes: [
        "Kongre / Zirve",
        "Bayi Toplantısı & Gezi",
        "Kurum İçi Motivasyon",
        "Lansman",
        "Eğitim / Workshop",
        "Diğer",
      ],
      labels: {
        name: "Ad Soyad *",
        company: "Kurum *",
        email: "E-posta *",
        phone: "Telefon *",
        eventType: "Etkinlik Tipi *",
        attendees: "Katılımcı Sayısı *",
        date: "Tahmini Tarih",
        message: "İhtiyacınız",
      },
      placeholders: {
        name: "Ad Soyad",
        company: "Kurum adı",
        email: "ad@kurum.com",
        phone: "+90 5xx xxx xx xx",
        attendees: "Örn. 850",
        date: "Örn. Kasım 2026",
        message: "Kayıt, konaklama, transfer, mobil uygulama...",
      },
      consentKvkk: ["Kişisel verilerimin ", " kapsamında işlenmesine ", "açık rıza", " veriyorum."],
      consentInfo: ["", "'ni okudum ve anladım."],
      submit: "Teklif Talebini Gönder",
      required: "Formu gönderebilmek için her iki onayın işaretlenmesi zorunludur.",
      consentError: "Devam etmek için KVKK ve aydınlatma metnini onaylamanız gerekir.",
      success: "Talebiniz alındı. Ekibimiz en kısa sürede sizinle iletişime geçecek.",
      error: "Gönderim sırasında bir sorun oluştu. Lütfen bilgileri kontrol edip tekrar deneyin.",
      doneTitle: "Talebiniz bize ulaştı",
      doneText:
        "En kısa sürede sizinle iletişime geçeceğiz. Acil bir konu varsa info@next-web.com.tr adresinden bize yazabilirsiniz.",
      doneAgain: "Yeni talep oluştur",
    },
    footer: {
      about:
        "Etkinlik sektörü için kayıt, LCV, konaklama, ulaşım, transfer, mobil uygulama ve web sitesi çözümleri geliştiriyoruz.",
      addressTitle: "Adres",
      contactTitle: "İletişim",
      rights: "Tüm hakları saklıdır.",
      privacy: "Gizlilik Politikası",
      terms: "Site Kullanım Koşulları",
      kvkk: "KVKK",
    },
    legal: {
      subtitle: "NEXT — Etkinliklerin Dijital Mimarı",
      privacy: {
        title: "Gizlilik Politikası",
        blocks: [
          { p: "NEXT olarak, web sitemiz üzerinden bizimle paylaştığınız kişisel verilerin korunmasına büyük önem veriyoruz. Bu politika, hangi verileri hangi amaçla işlediğimizi ve haklarınızı açıklar." },
          { h: "İşlenen Veriler", p: "Teklif formu üzerinden ilettiğiniz ad soyad, kurum adı, e-posta adresi, telefon numarası ve etkinliğinize ilişkin bilgiler işlenir. Site üzerinde pazarlama amaçlı takip çerezleri kullanılmaz." },
          { h: "İşleme Amacı", p: "Veriler yalnızca talebinizi değerlendirmek, size teklif sunmak ve iletişim kurmak amacıyla işlenir. Talebiniz sonuçlandıktan sonra makul saklama süresi boyunca muhafaza edilir." },
          { h: "Aktarım", p: "Kişisel verileriniz üçüncü kişilere satılmaz veya pazarlama amacıyla paylaşılmaz. Yalnızca yasal yükümlülükler kapsamında yetkili kurumlarla ve hizmet aldığımız e-posta altyapı sağlayıcımızla paylaşılabilir." },
          { h: "Haklarınız", p: "KVKK kapsamındaki tüm haklarınızı kullanmak için info@next-web.com.tr adresine yazabilirsiniz. Talepleriniz en geç 30 gün içinde sonuçlandırılır." },
        ],
      },
      terms: {
        title: "Site Kullanım Koşulları",
        blocks: [
          { p: "Bu web sitesini kullanarak aşağıdaki koşulları kabul etmiş sayılırsınız." },
          { h: "İçerik", p: "Sitedeki tüm metin, görsel, logo ve tasarım unsurları NEXT'e aittir; izinsiz kopyalanamaz, çoğaltılamaz veya ticari amaçla kullanılamaz." },
          { h: "Bilgilerin Doğruluğu", p: "Site içeriği bilgilendirme amaçlıdır. Ürün ve hizmet kapsamı projeye göre farklılık gösterebilir; bağlayıcı olan taraflar arasında imzalanan sözleşmedir." },
          { h: "Form Kullanımı", p: "Teklif formunu doldururken doğru ve güncel bilgi vermeniz beklenir. Sistemin kötüye kullanımı, otomatik gönderim ve spam girişimleri engellenebilir." },
          { h: "Değişiklikler", p: "NEXT, bu koşulları önceden bildirimde bulunmaksızın güncelleyebilir. Güncel metin her zaman bu sayfada yayınlanır." },
        ],
      },
      kvkk: {
        title: "KVKK Aydınlatma Metni",
        blocks: [
          { p: "6698 sayılı Kişisel Verilerin Korunması Kanunu uyarınca, veri sorumlusu sıfatıyla NEXT tarafından kişisel verilerinizin nasıl işlendiği aşağıda açıklanmıştır." },
          { h: "Veri Sorumlusu", p: "NEXT — Harbiye Mah. Darülbedai Cad. No:4/2 Şişli / İstanbul, Türkiye. İletişim: info@next-web.com.tr" },
          { h: "İşlenen Veriler ve Amaç", p: "Ad soyad, kurum, e-posta, telefon ve etkinlik bilgileriniz; teklif talebinizin değerlendirilmesi, sizinle iletişime geçilmesi ve sözleşme öncesi sürecin yürütülmesi amacıyla işlenir." },
          { h: "Hukuki Sebep", p: "Verileriniz, kanunun 5. maddesi kapsamında açık rızanıza ve sözleşmenin kurulması için gerekli olması hukuki sebebine dayanılarak işlenir." },
          { h: "Saklama Süresi", p: "Veriler, işleme amacının gerektirdiği süre ve yasal saklama süreleri boyunca muhafaza edilir; süre sonunda silinir veya anonim hale getirilir." },
          { h: "Haklarınız", p: "Verilerinize erişme, düzeltme, silme, işlemeye itiraz etme ve rızanızı geri çekme haklarına sahipsiniz. Başvurularınızı info@next-web.com.tr adresine iletebilirsiniz." },
        ],
      },
    },
  },
  en: {
    nav: {
      solutions: "Solutions",
      about: "About",
      products: "Products",
      why: "Why NEXT",
      contact: "Contact",
      cta: "Get a Quote",
      home: "NEXT home",
    },
    hero: {
      slides: [
        {
          eyebrow: "From 5 to 25,000 Attendees",
          title: ["Run events of any size", "on a single platform."],
          text: "From congresses to dealer trips, internal motivation meetings to international summits; registration, accommodation, transportation and on-site operations all meet in one place.",
          cta: "Get a Quote",
        },
        {
          eyebrow: "The Digital Architect of Events",
          title: ["We build the invisible", "infrastructure of operations."],
          text: "From RSVP to mobile apps, transfers to badges; the data of thousands of attendees flows in seconds and the field team and management see the same truth.",
          cta: "Let's Talk About Your Project",
        },
      ],
      secondary: "Explore Products",
      slideLabel: (n: number) => `Slide ${n}`,
    },
    stats: {
      eyebrow: "Our Scale in the Industry",
      title: "Numbers are the summary of an operation proven in the field.",
      items: [
        {
          label: "Registrations & Check-ins",
          text: "Attendee registrations completed through our systems at congresses, summits and dealer meetings.",
        },
        {
          label: "Attendees in a Single Event",
          text: "From a 5-person board meeting to a 25,000-person organisation: the same infrastructure, the same stability.",
        },
        {
          label: "Accommodation & Transfer Movements",
          text: "Room blocks, rooming lists, flight matching and transfer planning managed digitally.",
        },
      ],
    },
    about: {
      eyebrow: "About Us",
      titleLead: "We are the",
      titleAccent: "digital architect of events.",
      paragraphs: [
        "NEXT is a software company that understands the unique tempo of the event industry. Knowing that a congress opening cannot be postponed, that a flight time can change overnight during a 3,000-person dealer trip, and that every minute in the field is a cost, we designed our products inside the operation — not behind a desk.",
        "Our registration, RSVP, accommodation, transportation and transfer, mobile app, event website and on-site management modules work independently or as a single whole. Data entered in one module becomes the natural input of the next, eliminating Excel traffic, duplicate records and last-minute surprises.",
        "From a 5-person board meeting to a 25,000-person international organisation, we deliver the same infrastructure, the same security standard and the same team discipline. Our job is to build software; our responsibility is to make sure every step goes to plan, from the first attendee to the last transfer.",
      ],
    },
    products: {
      eyebrow: "Our Products",
      title: "Modules built for every stage of an event — and they talk to each other.",
      items: [
        {
          title: "Registration & RSVP Management",
          text: "From invitation delivery to RSVP tracking, quota-based registration forms to QR badges and fast check-in screens, the entire attendee journey is managed from one panel. Attendance is reported instantly and the invitation list never needs cleaning again and again.",
          points: ["Multilingual registration forms", "QR check-in and badges", "Real-time attendance reports"],
        },
        {
          title: "Accommodation & Room Planning",
          text: "Hotel blocks, room type quotas, companion and roommate matching, check-in/out dates and rooming list processes are automated. The list shared with the hotel always stays current; cancellations and changes are reflected instantly.",
          points: ["Block and quota control", "Automated rooming lists", "Full change history"],
        },
        {
          title: "Transportation & Transfer Operations",
          text: "Flight details, welcome teams, vehicle capacities and transfer times come together in a single plan. The field team sees the passenger list on mobile; delays and empty seats reach management immediately.",
          points: ["Flight–passenger matching", "Vehicle and capacity plan", "Mobile field team tracking"],
        },
        {
          title: "Mobile App & Event Website",
          text: "Programme, speaker details, personal agenda, push notifications, surveys and voting in the attendee's pocket, integrated with an event website designed in your brand identity. One content entry, the same information across all channels.",
          points: ["Personal agenda and push", "Surveys, voting and Q&A", "On-brand event website"],
        },
      ],
    },
    why: {
      eyebrow: "Why NEXT",
      title: "Why do the industry's largest organisations trust us with the most critical moment?",
      intro:
        "Large organisations do not buy software; they transfer risk. They look for assurance that there will be no queue at a congress opening, that 40 buses will depart on time with the right passengers, and that the personal data of thousands of attendees will be properly protected. They choose us not for beautiful screens, but because nothing surprises them at the most critical moment. If we still work with the same organisations year after year, it is because we have kept our promise at every single event.",
      items: [
        {
          title: "No fear of scale",
          text: "A 5-person board meeting and a 25,000-person congress run on the same infrastructure. As attendee numbers grow, the system does not slow down and the process does not get complicated — only the plan gets bigger.",
        },
        {
          title: "One dataset, one truth",
          text: "Registration, accommodation, transportation and field modules share the same data. Agency, client and hotel never work from different lists; everyone sees the same correct information at the same time.",
        },
        {
          title: "Support that lives on event time",
          text: "Problems do not appear during office hours. From build-up to breakdown we work with a team that answers in the middle of the night and a contingency plan that has been rehearsed.",
        },
        {
          title: "Data security and GDPR/KVKK discipline",
          text: "Attendee data is an organisation's most sensitive asset. Role-based access, audit trails, retention periods and compliant processes are the product's default setting, not a feature added later.",
        },
        {
          title: "Interfaces that speak your brand",
          text: "Attendees do not see NEXT, they see your organisation. From the registration page to the mobile app, every screen is produced in your brand's colour, language and tone.",
        },
        {
          title: "Measurable results",
          text: "How many invitations were opened, who attended, which session filled up, how long transfers took. When the event ends you are left with data to defend the next budget — not an anecdote.",
        },
      ],
    },
    quote: {
      eyebrow: "Request a Quote",
      titleLead: "Tell us about your event,",
      titleAccent: "we'll build the plan.",
      text: "Share the number of attendees, the dates and the modules you need; our team will define the scope and prepare a tailored proposal. Your form is delivered straight to our team's inbox.",
      bullets: [
        "Response within 24 hours",
        "Scope and module based pricing",
        "Live demo environment walkthrough",
      ],
      eventTypes: [
        "Congress / Summit",
        "Dealer Meeting & Trip",
        "Internal Motivation Event",
        "Product Launch",
        "Training / Workshop",
        "Other",
      ],
      labels: {
        name: "Full Name *",
        company: "Company *",
        email: "Email *",
        phone: "Phone *",
        eventType: "Event Type *",
        attendees: "Number of Attendees *",
        date: "Estimated Date",
        message: "Your Needs",
      },
      placeholders: {
        name: "Full name",
        company: "Company name",
        email: "name@company.com",
        phone: "+90 5xx xxx xx xx",
        attendees: "e.g. 850",
        date: "e.g. November 2026",
        message: "Registration, accommodation, transfers, mobile app...",
      },
      consentKvkk: ["I give my ", " to the processing of my personal data under the ", "explicit consent", "."],
      consentInfo: ["I have read and understood the ", "."],
      submit: "Send Quote Request",
      required: "Both approvals must be checked before the form can be submitted.",
      consentError: "You must approve the privacy and data protection notices to continue.",
      success: "We received your request. Our team will contact you shortly.",
      error: "Something went wrong while sending. Please check your details and try again.",
      doneTitle: "Your request has reached us",
      doneText:
        "We will get in touch shortly. For urgent matters you can write to info@next-web.com.tr.",
      doneAgain: "Create a new request",
    },
    footer: {
      about:
        "We build registration, RSVP, accommodation, transportation, transfer, mobile app and website solutions for the event industry.",
      addressTitle: "Address",
      contactTitle: "Contact",
      rights: "All rights reserved.",
      privacy: "Privacy Policy",
      terms: "Terms of Use",
      kvkk: "Data Protection",
    },
    legal: {
      subtitle: "NEXT — The Digital Architect of Events",
      privacy: {
        title: "Privacy Policy",
        blocks: [
          { p: "At NEXT we take great care to protect the personal data you share with us through our website. This policy explains which data we process, for what purpose, and what your rights are." },
          { h: "Data We Process", p: "The name, company, email address, phone number and event details you submit through the quote form are processed. No marketing tracking cookies are used on this site." },
          { h: "Purpose of Processing", p: "Data is processed solely to evaluate your request, prepare a proposal and contact you. It is kept for a reasonable retention period after your request is concluded." },
          { h: "Transfers", p: "Your personal data is never sold or shared for marketing purposes. It may only be shared with competent authorities under legal obligations and with our email infrastructure provider." },
          { h: "Your Rights", p: "To exercise your data protection rights, write to info@next-web.com.tr. Requests are answered within 30 days at the latest." },
        ],
      },
      terms: {
        title: "Terms of Use",
        blocks: [
          { p: "By using this website you are deemed to have accepted the terms below." },
          { h: "Content", p: "All text, imagery, logos and design elements on this site belong to NEXT and may not be copied, reproduced or used commercially without permission." },
          { h: "Accuracy of Information", p: "Site content is for information purposes. Product and service scope may vary per project; the binding document is the contract signed between the parties." },
          { h: "Use of the Form", p: "You are expected to provide accurate and current information in the quote form. Misuse, automated submissions and spam attempts may be blocked." },
          { h: "Changes", p: "NEXT may update these terms without prior notice. The current text is always published on this page." },
        ],
      },
      kvkk: {
        title: "Data Protection Notice",
        blocks: [
          { p: "Under Turkish Personal Data Protection Law No. 6698 (KVKK), the way NEXT processes your personal data as data controller is explained below." },
          { h: "Data Controller", p: "NEXT — Harbiye Mah. Darülbedai Cad. No:4/2 Şişli / Istanbul, Türkiye. Contact: info@next-web.com.tr" },
          { h: "Data and Purpose", p: "Your name, company, email, phone and event details are processed to evaluate your quote request, contact you and carry out the pre-contractual process." },
          { h: "Legal Basis", p: "Your data is processed on the basis of your explicit consent and the necessity of processing for the establishment of a contract under Article 5 of the law." },
          { h: "Retention", p: "Data is retained for as long as the purpose and statutory retention periods require, then deleted or anonymised." },
          { h: "Your Rights", p: "You have the right to access, correct and erase your data, object to processing and withdraw consent. Applications can be sent to info@next-web.com.tr." },
        ],
      },
    },
  },
} as const;

export type Dict = (typeof content)["tr"];

const I18nContext = createContext<{ lang: Lang; setLang: (lang: Lang) => void; t: Dict }>({
  lang: "tr",
  setLang: () => {},
  t: content.tr,
});

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("tr");

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === "en" || stored === "tr") setLangState(stored);
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = (next: Lang) => {
    setLangState(next);
    window.localStorage.setItem(STORAGE_KEY, next);
  };

  return (
    <I18nContext.Provider value={{ lang, setLang, t: content[lang] as unknown as Dict }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  return useContext(I18nContext);
}
