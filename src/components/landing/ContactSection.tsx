import { Button } from "@/components/ui/button";

interface ContactSectionProps {
  title: string;
  description: string;
  cta: string;
}

export function ContactSection({ title, description, cta }: ContactSectionProps) {
  return (
    <section id="contact" className="py-24 bg-secondary-500 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold">{title}</h2>
          <p className="text-xl leading-relaxed opacity-90">{description}</p>
          <Button
            size="lg"
            className="bg-primary-500 text-secondary-500 hover:bg-primary-500/90 text-lg px-8 py-6"
            asChild
          >
            <a href="/register">{cta}</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
