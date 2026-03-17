import type { LucideIcon } from "lucide-react";
import {
  Calendar,
  MapPin,
  Clock,
  Users,
  CircleDot,
  Layout,
  Circle,
  Dumbbell,
  CalendarDays,
  Sparkles,
} from "lucide-react";

export type BentoItem = {
  name: string;
  icon: string;
  description: string;
  image?: string;
  size?: "default" | "large" | "wide";
};

export const getBentoIcon = (iconName: string): LucideIcon => {
  const icons: Record<string, LucideIcon> = {
    soccer: CircleDot,
    padel: Layout,
    tennis: Circle,
    gym: Dumbbell,
    events: CalendarDays,
    more: Sparkles,
  };
  return icons[iconName] ?? Sparkles;
};

export const translations = {
  es: {
    nav: {
      home: "Inicio",
      bento: "Reservar",
      features: "Características",
      pricing: "Precios",
      contact: "Contacto",
      login: "Iniciar Sesión",
      register: "Registrarse",
    },
    hero: {
      title: "Reserva lo que necesites",
      subtitle: "en segundos",
      description:
        "Canchas, gimnasios, salas de eventos y más. La plataforma más fácil para encontrar y reservar cualquier espacio cerca de ti.",
      cta: "Comenzar Ahora",
      ctaSecondary: "Ver Demo",
      slides: [
        { image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=1200&h=800&fit=crop", label: "Canchas de fútbol" },
        { image: "https://images.unsplash.com/photo-1554068865-24cecd4e34b8?w=1200&h=800&fit=crop", label: "Pádel y tenis" },
        { image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1200&h=800&fit=crop", label: "Gimnasios" },
        { image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200&h=800&fit=crop", label: "Salas de eventos" },
      ],
    },
    bento: {
      title: "Reserva lo que necesites",
      subtitle: "canchas, espacios y más",
      items: [
        {
          name: "Fútbol",
          icon: "soccer",
          description: "Canchas 5, 7 y 11",
          image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=600&h=400&fit=crop",
          size: "large",
        },
        {
          name: "Pádel",
          icon: "padel",
          description: "Pistas cubiertas y al aire",
          image: "https://images.unsplash.com/photo-1554068865-24cecd4e34b8?w=400&h=300&fit=crop",
        },
        {
          name: "Tenis",
          icon: "tennis",
          description: "Pistas de tierra y dura",
          image: "https://images.unsplash.com/photo-1554068865-24cecd4e34b8?w=400&h=300&fit=crop",
        },
        {
          name: "Gimnasio",
          icon: "gym",
          description: "Máquinas y clases",
          image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&h=300&fit=crop",
        },
        {
          name: "Eventos",
          icon: "events",
          description: "Salas y espacios",
          image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=300&fit=crop",
        },
        {
          name: "Y más",
          icon: "more",
          description: "Todo en un solo lugar",
          size: "wide",
        },
      ],
    },
    features: {
      title: "Todo lo que necesitas",
      subtitle: "para gestionar tus reservas",
      list: [
        {
          title: "Reserva Instantánea",
          description:
            "Encuentra y reserva espacios disponibles en tiempo real, sin complicaciones.",
          icon: "calendar",
        },
        {
          title: "Ubicación Cercana",
          description:
            "Descubre los mejores espacios cerca de tu ubicación con mapas interactivos.",
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
            "Organiza a tu grupo, crea equipos y mantén el control total.",
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
            "Ver todos los espacios",
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
          name: "Proveedor",
          price: "$49.99",
          period: "/mes",
          description: "Para dueños de espacios",
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
        "Únete a miles de usuarios que ya reservan canchas, gimnasios, salas y más en un solo lugar.",
      cta: "Crear Cuenta Gratis",
    },
  },
  en: {
    nav: {
      home: "Home",
      bento: "Book",
      features: "Features",
      pricing: "Pricing",
      contact: "Contact",
      login: "Sign In",
      register: "Sign Up",
    },
    hero: {
      title: "Book what you need",
      subtitle: "in seconds",
      description:
        "Courts, gyms, event spaces and more. The easiest platform to find and book any space near you.",
      cta: "Get Started",
      ctaSecondary: "Watch Demo",
      slides: [
        { image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=1200&h=800&fit=crop", label: "Soccer fields" },
        { image: "https://images.unsplash.com/photo-1554068865-24cecd4e34b8?w=1200&h=800&fit=crop", label: "Padel and tennis" },
        { image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1200&h=800&fit=crop", label: "Gyms" },
        { image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200&h=800&fit=crop", label: "Event spaces" },
      ],
    },
    bento: {
      title: "Book what you need",
      subtitle: "courts, spaces and more",
      items: [
        {
          name: "Soccer",
          icon: "soccer",
          description: "5, 7 and 11-a-side fields",
          image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=600&h=400&fit=crop",
          size: "large",
        },
        {
          name: "Padel",
          icon: "padel",
          description: "Indoor and outdoor courts",
          image: "https://images.unsplash.com/photo-1554068865-24cecd4e34b8?w=400&h=300&fit=crop",
        },
        {
          name: "Tennis",
          icon: "tennis",
          description: "Clay and hard courts",
          image: "https://images.unsplash.com/photo-1554068865-24cecd4e34b8?w=400&h=300&fit=crop",
        },
        {
          name: "Gym",
          icon: "gym",
          description: "Equipment and classes",
          image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&h=300&fit=crop",
        },
        {
          name: "Events",
          icon: "events",
          description: "Rooms and venues",
          image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=300&fit=crop",
        },
        {
          name: "And more",
          icon: "more",
          description: "All in one place",
          size: "wide",
        },
      ],
    },
    features: {
      title: "Everything you need",
      subtitle: "to manage your bookings",
      list: [
        {
          title: "Instant Booking",
          description:
            "Find and book available spaces in real-time, hassle-free.",
          icon: "calendar",
        },
        {
          title: "Nearby Locations",
          description:
            "Discover the best spaces near your location with interactive maps.",
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
            "View all spaces",
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
          name: "Provider",
          price: "$49.99",
          period: "/month",
          description: "For space owners",
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
        "Join thousands of users already booking courts, gyms, rooms and more in one place.",
      cta: "Create Free Account",
    },
  },
} as const;
