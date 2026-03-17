import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export type HeroSlide = {
  image: string;
  label: string;
};

interface HeroSectionProps {
  title: string;
  subtitle: string;
  description: string;
  cta: string;
  ctaSecondary: string;
  slides?: HeroSlide[];
}

const SLIDE_INTERVAL_MS = 5000;

export function HeroSection({
  title,
  subtitle,
  description,
  cta,
  ctaSecondary,
  slides = [],
}: HeroSectionProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [intervalReset, setIntervalReset] = useState(0);
  const hasSlides = slides.length > 0;

  const goToSlide = (index: number) => {
    setActiveIndex(index);
    setIntervalReset((r) => r + 1);
  };

  useEffect(() => {
    if (!hasSlides || slides.length <= 1) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
    }, SLIDE_INTERVAL_MS);
    return () => clearInterval(interval);
  }, [hasSlides, slides.length, intervalReset]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden"
    >
      {/* Image slider background */}
      <div className="absolute inset-0 -z-10">
        {hasSlides ? slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              index === activeIndex ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            <img
              src={slide.image}
              alt={slide.label}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-black/50" />
          </div>
        )) : (
          <div className="absolute inset-0 bg-black/20" />
        )}
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-20 relative z-20">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white drop-shadow-lg">
            {title}
            <span className="block text-primary-500 mt-2">{subtitle}</span>
          </h1>
          <div className="inline-block pl-6 border-l-4 border-primary-500 py-3 pr-4 rounded-r backdrop-blur-md bg-white/20 dark:bg-black/30">
            <p className="text-xl md:text-2xl text-white/95 leading-relaxed m-0">
              {description}
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button
              size="lg"
              className="bg-primary-500 text-secondary-500 hover:bg-primary-500/90 text-lg px-8 py-6"
              asChild
            >
              <a href="/register">{cta}</a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary-500 text-white hover:bg-primary-500/20 text-lg px-8 py-6"
              asChild
            >
              <a href="#features">{ctaSecondary}</a>
            </Button>
          </div>
        </div>
      </div>

      {/* Prev/Next arrows */}
      {hasSlides && slides.length > 1 &&
        (["prev", "next"] as const).map((dir) => (
          <button
            key={dir}
            onClick={() =>
              goToSlide(
                dir === "prev"
                  ? (activeIndex - 1 + slides.length) % slides.length
                  : (activeIndex + 1) % slides.length
              )
            }
            className={`cursor-pointer absolute top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-black/40 hover:bg-black/60 text-white transition-colors ${
              dir === "prev" ? "left-4" : "right-4"
            }`}
            aria-label={dir === "prev" ? "Slide anterior" : "Slide siguiente"}
          >
            {dir === "prev" ? (
              <ChevronLeft className="h-8 w-8" />
            ) : (
              <ChevronRight className="h-8 w-8" />
            )}
          </button>
        ))}

      {/* Slide indicators (dots) */}
      {hasSlides && slides.length > 1 && (
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-20">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`rounded-full transition-all duration-300 ${
                index === activeIndex
                  ? "w-8 h-2 bg-primary-500"
                  : "w-2 h-2 bg-white/50 hover:bg-white/80"
              }`}
              aria-label={`Ir a slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </section>
  );
}
