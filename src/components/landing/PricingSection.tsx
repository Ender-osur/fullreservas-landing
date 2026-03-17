import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CheckCircle, Star } from "lucide-react";

interface Plan {
  name: string;
  price: string;
  period?: string;
  description: string;
  features: string[];
  popular?: boolean;
}

interface PricingSectionProps {
  title: string;
  subtitle: string;
  plans: Plan[];
  ctaLabel: string;
}

export function PricingSection({
  title,
  subtitle,
  plans,
  ctaLabel,
}: PricingSectionProps) {
  return (
    <section id="pricing" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            {title}
            <span className="block text-primary-500 mt-2">{subtitle}</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
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
                    <span className="text-muted-foreground">{plan.period}</span>
                  )}
                </div>
                <CardDescription className="text-base">
                  {plan.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6 flex flex-col justify-between h-full">
                <ul className="space-y-3">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary-500 shrink-0 mt-0.5" />
                      <span className="text-sm leading-relaxed">{feature}</span>
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
                  <a href="/register">{ctaLabel}</a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
