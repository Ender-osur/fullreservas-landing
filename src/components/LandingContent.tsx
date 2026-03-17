import { useState } from "react";
import { translations } from "@/lib/translations";
import { InteractiveDots } from "./InteractiveDots";
import { Navbar } from "./Navbar";
import {
  HeroSection,
  BentoSection,
  FeaturesSection,
  PricingSection,
  ContactSection,
  FooterSection,
} from "./landing";

export function LandingContent() {
  const [language, setLanguage] = useState<"es" | "en">("es");
  const t = translations[language];

  return (
    <>
      <InteractiveDots />
      <Navbar
        translations={t.nav}
        onLanguageChange={(lang) => setLanguage(lang as "es" | "en")}
        currentLanguage={language}
      />

      <main className="relative">
        <HeroSection
          title={t.hero.title}
          subtitle={t.hero.subtitle}
          description={t.hero.description}
          cta={t.hero.cta}
          ctaSecondary={t.hero.ctaSecondary}
          slides={t.hero.slides}
        />

        <BentoSection
          title={t.bento.title}
          subtitle={t.bento.subtitle}
          items={t.bento.items}
        />

        <FeaturesSection
          title={t.features.title}
          subtitle={t.features.subtitle}
          list={t.features.list}
        />

        <PricingSection
          title={t.pricing.title}
          subtitle={t.pricing.subtitle}
          plans={t.pricing.plans}
          ctaLabel={language === "es" ? "Empezar" : "Get Started"}
        />

        <ContactSection
          title={t.contact.title}
          description={t.contact.description}
          cta={t.contact.cta}
        />

        <FooterSection
          brand="Fullreservas.net"
          copyright="© 2024 Fullreservas.net."
          credits={
            language === "es"
              ? "Componentes hechos con Shadcn y Tailwind CSS."
              : "Components made with Shadcn and Tailwind CSS."
          }
        />
      </main>
    </>
  );
}
