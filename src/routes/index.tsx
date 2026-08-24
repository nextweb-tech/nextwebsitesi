import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

import { About } from "@/components/site/About";
import { Footer } from "@/components/site/Footer";
import { Header } from "@/components/site/Header";
import { HeroSlider } from "@/components/site/HeroSlider";
import { LegalDialog, type LegalKey } from "@/components/site/LegalDialog";
import { Products } from "@/components/site/Products";
import { QuoteForm } from "@/components/site/QuoteForm";
import { Stats } from "@/components/site/Stats";
import { WhyUs } from "@/components/site/WhyUs";

const TITLE = "NEXT | Etkinlikler İçin Kayıt, Konaklama ve Transfer Yazılımları";
const DESCRIPTION =
  "NEXT, kongre, bayi toplantısı ve kurumsal etkinlikler için kayıt, LCV, konaklama, ulaşım, transfer, mobil uygulama ve web sitesi çözümleri geliştirir.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  const [legal, setLegal] = useState<LegalKey>(null);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSlider />
        <Stats />
        <About />
        <Products />
        <WhyUs />
        <QuoteForm onOpenLegal={setLegal} />
      </main>
      <Footer onOpenLegal={setLegal} />
      <LegalDialog active={legal} onClose={() => setLegal(null)} />
    </div>
  );
}
