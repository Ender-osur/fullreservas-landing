import type { BentoItem } from "@/lib/translations";
import { BentoCard } from "./BentoCard";

interface BentoSectionProps {
  title: string;
  subtitle: string;
  items: BentoItem[];
}

export function BentoSection({ title, subtitle, items }: BentoSectionProps) {
  return (
    <section id="bento" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">{title}</h2>
          <p className="text-xl text-muted-foreground">{subtitle}</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 md:grid-rows-3 gap-4 max-w-5xl mx-auto">
          {items.map((item, index) => (
            <BentoCard key={index} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
