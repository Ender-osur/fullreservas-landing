import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Calendar, MapPin, Clock, Users } from "lucide-react";

const icons: Record<string, React.ComponentType<{ className?: string }>> = {
  calendar: Calendar,
  map: MapPin,
  clock: Clock,
  users: Users,
};

interface Feature {
  title: string;
  description: string;
  icon: string;
}

interface FeaturesSectionProps {
  title: string;
  subtitle: string;
  list: Feature[];
}

export function FeaturesSection({ title, subtitle, list }: FeaturesSectionProps) {
  return (
    <section id="features" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            {title}
            <span className="block text-primary-500 mt-2">{subtitle}</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {list.map((feature, index) => {
            const Icon = icons[feature.icon] ?? Calendar;
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
  );
}
