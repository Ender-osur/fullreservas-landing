import { useState } from "react";
import type { BentoItem } from "@/lib/translations";
import { getBentoIcon } from "@/lib/translations";

interface BentoCardProps {
  item: BentoItem;
  index: number;
}

export function BentoCard({ item }: BentoCardProps) {
  const [imageError, setImageError] = useState(false);
  const Icon = getBentoIcon(item.icon);
  const isLarge = item.size === "large";
  const isWide = item.size === "wide";
  const hasImage = item.image && !imageError;

  const sizeClasses = [
    isLarge ? "md:col-span-2 md:row-span-2" : "",
    isWide ? "md:col-span-2" : "",
  ].join(" ");

  return (
    <a
      href="/register"
      className={`group relative overflow-hidden rounded-2xl border-2 border-border bg-card transition-all duration-300 hover:border-primary-500 hover:shadow-lg hover:-translate-y-1 ${sizeClasses}`}
    >
      {hasImage ? (
        <>
          <div className="absolute inset-0">
            <img
              src={item.image}
              alt={item.name}
              loading="lazy"
              onError={() => setImageError(true)}
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
          </div>
          <div
            className={`relative flex flex-col p-6 text-white ${
              isLarge ? "h-full justify-end" : "min-h-[140px] justify-end"
            }`}
          >
            <div className={`rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center w-fit ${isLarge ? "w-14 h-14 mb-4" : "w-10 h-10 mb-2"}`}>
              <Icon className={`text-primary-400 ${isLarge ? "h-7 w-7" : "h-5 w-5"}`} />
            </div>
            <h3 className={`font-semibold ${isLarge ? "text-2xl" : "text-lg"}`}>
              {item.name}
            </h3>
            <p className={`opacity-90 ${isLarge ? "text-base" : "text-sm"}`}>
              {item.description}
            </p>
          </div>
        </>
      ) : (
        <div className={`flex flex-col p-6 ${isLarge ? "h-full justify-between" : "gap-3"}`}>
          <div
            className={`rounded-xl bg-primary-500/10 flex items-center justify-center ${isLarge ? "w-16 h-16" : "w-12 h-12"}`}
          >
            <Icon className={`text-primary-500 ${isLarge ? "h-8 w-8" : "h-6 w-6"}`} />
          </div>
          <div>
            <h3 className={`font-semibold text-foreground ${isLarge ? "text-2xl" : "text-lg"}`}>
              {item.name}
            </h3>
            <p className={`text-muted-foreground mt-1 ${isLarge ? "text-base" : "text-sm"}`}>
              {item.description}
            </p>
          </div>
        </div>
      )}
    </a>
  );
}
