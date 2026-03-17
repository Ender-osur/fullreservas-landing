interface FooterSectionProps {
  brand: string;
  copyright: string;
  credits: string;
}

export function FooterSection({ brand, copyright, credits }: FooterSectionProps) {
  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4">
          <p className="text-2xl font-bold text-primary-500">{brand}</p>
          <p className="text-muted-foreground">{copyright}</p>
          <p className="text-muted-foreground">{credits}</p>
        </div>
      </div>
    </footer>
  );
}
