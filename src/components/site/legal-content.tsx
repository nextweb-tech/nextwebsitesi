import type { ReactNode } from "react";

function P({ children }: { children: ReactNode }) {
  return <p className="text-sm leading-relaxed text-muted-foreground">{children}</p>;
}

function H({ children }: { children: ReactNode }) {
  return <h3 className="pt-2 text-base font-bold text-navy">{children}</h3>;
}

export const PRIVACY_TITLE = "Gizlilik Politikası";

export function PrivacyContent() {
  return (
    <div className="space-y-3">
      <P>
        NEXT olarak, web sitemiz üzerinden bizimle paylaştığınız kişisel verilerin korunmasına
        büyük önem veriyoruz. Bu politika, hangi verileri hangi amaçla işlediğimizi ve haklarınızı
        açıklar.
      </P>
      <H>İşlenen Veriler</H>
      <P>
        Teklif formu üzerinden ilettiğiniz ad soyad, kurum adı, e-posta adresi, telefon numarası ve
        etkinliğinize ilişkin bilgiler işlenir. Site üzerinde pazarlama amaçlı takip çerezleri
        kullanılmaz.
      </P>
      <H>İşleme Amacı</H>
      <P>
        Veriler yalnızca talebinizi değerlendirmek, size teklif sunmak ve iletişim kurmak amacıyla
        işlenir. Talebiniz sonuçlandıktan sonra makul saklama süresi boyunca muhafaza edilir.
      </P>
      <H>Aktarım</H>
      <P>
        Kişisel verileriniz üçüncü kişilere satılmaz veya pazarlama amacıyla paylaşılmaz. Yalnızca
        yasal yükümlülükler kapsamında yetkili kurumlarla paylaşılabilir.
      </P>
      <H>Güvenlik</H>
      <P>
        Veriler yetki bazlı erişim, şifreli iletim ve erişim kayıtları ile korunur. Yalnızca ilgili
        ekip üyeleri talebinize erişebilir.
      </P>
      <H>Haklarınız</H>
      <P>
        KVKK kapsamında verilerinize erişme, düzeltilmesini veya silinmesini talep etme hakkına
        sahipsiniz. Taleplerinizi info@next.com.tr adresine iletebilirsiniz.
      </P>
    </div>
  );
}

export const TERMS_TITLE = "Site Kullanım Koşulları";

export function TermsContent() {
  return (
    <div className="space-y-3">
      <P>
        Bu web sitesini kullanarak aşağıdaki koşulları kabul etmiş sayılırsınız. Koşulları kabul
        etmiyorsanız lütfen siteyi kullanmayınız.
      </P>
      <H>İçerik ve Fikri Mülkiyet</H>
      <P>
        Sitede yer alan metin, görsel, logo, tasarım ve yazılım unsurlarının tüm hakları NEXT'e
        aittir. Yazılı izin olmadan kopyalanamaz, çoğaltılamaz veya ticari amaçla kullanılamaz.
      </P>
      <H>Bilgilendirme Amacı</H>
      <P>
        Sitede yer alan bilgiler tanıtım amaçlıdır ve bağlayıcı bir teklif niteliği taşımaz.
        Hizmet kapsamı, fiyat ve süre bilgileri karşılıklı imzalanan sözleşme ile belirlenir.
      </P>
      <H>Form Kullanımı</H>
      <P>
        Teklif formunun doğru ve güncel bilgilerle doldurulması kullanıcının sorumluluğundadır.
        Yanıltıcı, hukuka aykırı veya otomatik yöntemlerle yapılan başvurular değerlendirilmez.
      </P>
      <H>Sorumluluğun Sınırı</H>
      <P>
        Sitenin kesintisiz veya hatasız çalışacağı garanti edilmez. Sitenin kullanımından doğabilecek
        dolaylı zararlardan NEXT sorumlu tutulamaz.
      </P>
      <H>Değişiklikler</H>
      <P>
        NEXT, bu koşulları önceden bildirimde bulunmaksızın güncelleme hakkını saklı tutar. Güncel
        metin bu sayfada yayımlandığı anda yürürlüğe girer.
      </P>
    </div>
  );
}

export const KVKK_TITLE = "KVKK Aydınlatma Metni";

export function KvkkContent() {
  return (
    <div className="space-y-3">
      <P>
        6698 sayılı Kişisel Verilerin Korunması Kanunu ("KVKK") uyarınca, veri sorumlusu sıfatıyla
        NEXT tarafından kişisel verilerinizin nasıl işlendiği hakkında sizi bilgilendiririz.
      </P>
      <H>Veri Sorumlusu</H>
      <P>NEXT — Etkinliklerin Dijital Mimarı. İletişim: info@next.com.tr</P>
      <H>İşlenen Kişisel Veriler</H>
      <P>
        Kimlik (ad, soyad), iletişim (e-posta, telefon), müşteri işlem (kurum bilgisi, etkinlik
        detayları ve talep içeriği) verileri.
      </P>
      <H>İşleme Amacı ve Hukuki Sebep</H>
      <P>
        Verileriniz; teklif talebinizin değerlendirilmesi, sizinle iletişime geçilmesi ve
        sözleşme öncesi görüşmelerin yürütülmesi amacıyla, KVKK m.5/2-(c) ve m.5/2-(f) kapsamında
        işlenir.
      </P>
      <H>Toplama Yöntemi</H>
      <P>Veriler, web sitemizdeki teklif formu aracılığıyla elektronik ortamda toplanır.</P>
      <H>Saklama Süresi</H>
      <P>
        Veriler, ilgili mevzuatta öngörülen süreler ve meşru menfaat kapsamında gerekli süre boyunca
        saklanır; sürenin sonunda silinir veya anonim hâle getirilir.
      </P>
      <H>İlgili Kişi Hakları</H>
      <P>
        KVKK m.11 uyarınca; verilerinizin işlenip işlenmediğini öğrenme, bilgi talep etme,
        düzeltilmesini, silinmesini veya yok edilmesini isteme ve işlemeye itiraz etme haklarına
        sahipsiniz. Başvurularınızı info@next.com.tr adresine iletebilirsiniz.
      </P>
    </div>
  );
}
