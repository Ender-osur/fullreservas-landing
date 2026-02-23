import { useState } from "react";
import {
  Calendar,
  MapPin,
  Clock,
  Users,
  CheckCircle,
  Star,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { InteractiveDots } from "./InteractiveDots";
import { Navbar } from "./Navbar";

const translations = {
  es: {
    nav: {
      home: "Inicio",
      features: "Características",
      pricing: "Precios",
      contact: "Contacto",
      login: "Iniciar Sesión",
      register: "Registrarse",
    },
    hero: {
      title: "Reserva tu cancha de fútbol",
      subtitle: "en segundos",
      description:
        "La plataforma más fácil y rápida para encontrar y reservar canchas de fútbol cerca de ti.",
      cta: "Comenzar Ahora",
      ctaSecondary: "Ver Demo",
    },
    features: {
      title: "Todo lo que necesitas",
      subtitle: "para gestionar tus reservas",
      list: [
        {
          title: "Reserva Instantánea",
          description:
            "Encuentra y reserva canchas disponibles en tiempo real, sin complicaciones.",
          icon: "calendar",
        },
        {
          title: "Ubicación Cercana",
          description:
            "Descubre las mejores canchas cerca de tu ubicación con mapas interactivos.",
          icon: "map",
        },
        {
          title: "Horarios Flexibles",
          description:
            "Elige el horario que mejor se adapte a tu equipo y agenda.",
          icon: "clock",
        },
        {
          title: "Gestión de Equipos",
          description:
            "Organiza a tus jugadores, crea equipos y mantén el control total.",
          icon: "users",
        },
      ],
    },
    pricing: {
      title: "Precios transparentes",
      subtitle: "para todos",
      plans: [
        {
          name: "Jugador",
          price: "Gratis",
          description: "Perfecto para jugadores individuales",
          features: [
            "Reservas ilimitadas",
            "Ver todas las canchas",
            "Notificaciones básicas",
            "Soporte por email",
          ],
        },
        {
          name: "Equipo",
          price: "$9.99",
          period: "/mes",
          description: "Ideal para equipos y grupos",
          features: [
            "Todo del plan Jugador",
            "Gestión de equipo",
            "Calendario compartido",
            "Estadísticas del equipo",
            "Soporte prioritario",
          ],
          popular: true,
        },
        {
          name: "Cancha",
          price: "$49.99",
          period: "/mes",
          description: "Para dueños de canchas",
          features: [
            "Todo del plan Equipo",
            "Panel de administración",
            "Gestión de horarios",
            "Reportes avanzados",
            "API integración",
            "Soporte 24/7",
          ],
        },
      ],
    },
    contact: {
      title: "Comienza hoy mismo",
      description:
        "Únete a miles de jugadores que ya están disfrutando de la forma más fácil de reservar canchas.",
      cta: "Crear Cuenta Gratis",
    },
  },
  en: {
    nav: {
      home: "Home",
      features: "Features",
      pricing: "Pricing",
      contact: "Contact",
      login: "Sign In",
      register: "Sign Up",
    },
    hero: {
      title: "Book your soccer field",
      subtitle: "in seconds",
      description:
        "The easiest and fastest platform to find and book soccer fields near you.",
      cta: "Get Started",
      ctaSecondary: "Watch Demo",
    },
    features: {
      title: "Everything you need",
      subtitle: "to manage your bookings",
      list: [
        {
          title: "Instant Booking",
          description:
            "Find and book available fields in real-time, hassle-free.",
          icon: "calendar",
        },
        {
          title: "Nearby Locations",
          description:
            "Discover the best fields near your location with interactive maps.",
          icon: "map",
        },
        {
          title: "Flexible Schedules",
          description:
            "Choose the time slot that best fits your team and schedule.",
          icon: "clock",
        },
        {
          title: "Team Management",
          description:
            "Organize your players, create teams, and stay in full control.",
          icon: "users",
        },
      ],
    },
    pricing: {
      title: "Transparent pricing",
      subtitle: "for everyone",
      plans: [
        {
          name: "Player",
          price: "Free",
          description: "Perfect for individual players",
          features: [
            "Unlimited bookings",
            "View all fields",
            "Basic notifications",
            "Email support",
          ],
        },
        {
          name: "Team",
          price: "$9.99",
          period: "/month",
          description: "Ideal for teams and groups",
          features: [
            "Everything in Player",
            "Team management",
            "Shared calendar",
            "Team statistics",
            "Priority support",
          ],
          popular: true,
        },
        {
          name: "Field",
          price: "$49.99",
          period: "/month",
          description: "For field owners",
          features: [
            "Everything in Team",
            "Admin dashboard",
            "Schedule management",
            "Advanced reports",
            "API integration",
            "24/7 support",
          ],
        },
      ],
    },
    contact: {
      title: "Start today",
      description:
        "Join thousands of players already enjoying the easiest way to book fields.",
      cta: "Create Free Account",
    },
  },
};

const getIcon = (iconName: string) => {
  const icons = {
    calendar: Calendar,
    map: MapPin,
    clock: Clock,
    users: Users,
  };
  return icons[iconName as keyof typeof icons] || Calendar;
};

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
        <section
          id="home"
          className="min-h-screen flex items-center justify-center pt-16"
        >
          <div className="container mx-auto px-4 py-20">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
                {t.hero.title}
                <span className="block text-primary-500 mt-2">
                  {t.hero.subtitle}
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground dark:text-primary-50 leading-relaxed shadow-aurora p-4 rounded-full bg-primary-50 dark:bg-primary-900">
                {t.hero.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button
                  size="lg"
                  className="bg-primary-500 text-secondary-500 hover:bg-primary-500/90 text-lg px-8 py-6"
                  asChild
                >
                  <a href="/register">{t.hero.cta}</a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary-500 text-primary-500 hover:bg-primary-500/10 text-lg px-8 py-6"
                  asChild
                >
                  <a href="#features">{t.hero.ctaSecondary}</a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold">
                {t.features.title}
                <span className="block text-primary-500 mt-2">
                  {t.features.subtitle}
                </span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
              {t.features.list.map((feature, index) => {
                const Icon = getIcon(feature.icon);
                return (
                  <Card
                    key={index}
                    className="border-2 hover:border-primary-500 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                  >
                    <CardHeader>
                      <div className="w-12 h-12 rounded-full bg-primary-500/10 flex items-center justify-center mb-4">
                        <Icon className="h-6 w-6 text-primary-500" />
                      </div>
                      <CardTitle className="text-xl">{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base leading-relaxed">
                        {feature.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        <section id="pricing" className="py-24">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold">
                {t.pricing.title}
                <span className="block text-primary-500 mt-2">
                  {t.pricing.subtitle}
                </span>
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {t.pricing.plans.map((plan, index) => (
                <Card
                  key={index}
                  className={`relative border-2 transition-all duration-300 hover:shadow-xl ${
                    plan.popular
                      ? "border-primary-500 shadow-lg scale-105"
                      : "hover:border-primary-500/50"
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <div className="bg-primary-500 text-secondary-500 px-4 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                        <Star className="h-4 w-4 fill-current" />
                        Popular
                      </div>
                    </div>
                  )}
                  <CardHeader className="text-center space-y-4 pb-8">
                    <CardTitle className="text-2xl">{plan.name}</CardTitle>
                    <div>
                      <span className="text-4xl font-bold">{plan.price}</span>
                      {plan.period && (
                        <span className="text-muted-foreground">
                          {plan.period}
                        </span>
                      )}
                    </div>
                    <CardDescription className="text-base">
                      {plan.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <ul className="space-y-3">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-primary-500 shrink-0 mt-0.5" />
                          <span className="text-sm leading-relaxed">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                    <Button
                      className={`w-full ${
                        plan.popular
                          ? "bg-primary-500 text-secondary-500 hover:bg-primary-500/90"
                          : "bg-secondary-500 text-white hover:bg-secondary-500/90"
                      }`}
                      size="lg"
                      asChild
                    >
                      <a href="/register">
                        {language === "es" ? "Empezar" : "Get Started"}
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="py-24 bg-secondary-500 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center space-y-8">
              <h2 className="text-4xl md:text-5xl font-bold">
                {t.contact.title}
              </h2>
              <p className="text-xl leading-relaxed opacity-90">
                {t.contact.description}
              </p>
              <Button
                size="lg"
                className="bg-primary-500 text-secondary-500 hover:bg-primary-500/90 text-lg px-8 py-6"
                asChild
              >
                <a href="/register">{t.contact.cta}</a>
              </Button>
            </div>
          </div>
        </section>

        <footer className="py-12 border-t border-border">
          <div className="container mx-auto px-4">
            <div className="text-center space-y-4">
              <p className="text-2xl font-bold text-primary-500">
                Fullreservas.net
              </p>
              <p className="text-muted-foreground">© 2024 Fullreservas.net.</p>
              <p className="text-muted-foreground">
                {language === "es"
                  ? "Componentes hechos con Shadcn y Tailwind CSS."
                  : "Components made with Shadcn and Tailwind CSS."}
              </p>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
