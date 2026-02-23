import { useState, useEffect } from "react";
import { Moon, Sun, Globe, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface NavbarProps {
  translations: {
    home: string;
    features: string;
    pricing: string;
    contact: string;
    login: string;
    register: string;
  };
  onLanguageChange: (lang: string) => void;
  currentLanguage: string;
}

export function Navbar({
  translations,
  onLanguageChange,
  currentLanguage,
}: NavbarProps) {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
      .matches
      ? "dark"
      : "light";
    const initialTheme = savedTheme || systemTheme;
    setTheme(initialTheme);
    document.documentElement.classList.toggle("dark", initialTheme === "dark");
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
    localStorage.setItem("theme", newTheme);
  };

  const navLinks = [
    { href: "#home", label: translations.home },
    { href: "#features", label: translations.features },
    { href: "#pricing", label: translations.pricing },
    { href: "#contact", label: translations.contact },
  ];

  return (
    <nav className="fixed w-full flex justify-center items-center z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container flex justify-center items-center">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-8">
            <a
              href="/"
              className="text-2xl font-bold text-primary-500 hover:opacity-80 transition-opacity"
            >
              Fullreservas.net
            </a>

            <div className="hidden md:flex items-center space-x-6">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-foreground hover:text-primary-500 transition-colors font-medium"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <div className="flex items-center space-x-0">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="hidden md:flex"
                  >
                    <Globe className="h-5 w-5" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem
                    onClick={() => onLanguageChange("es")}
                    className={currentLanguage === "es" ? "bg-accent" : ""}
                  >
                    Español
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    onClick={() => onLanguageChange("en")}
                    className={currentLanguage === "en" ? "bg-accent" : ""}
                  >
                    English
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <Button
                variant="ghost"
                size="icon"
                onClick={toggleTheme}
                className="hidden md:flex"
              >
                {theme === "light" ? (
                  <Moon className="h-5 w-5" />
                ) : (
                  <Sun className="h-5 w-5" />
                )}
              </Button>
            </div>

            <div className="hidden md:flex items-center space-x-2">
              <Button variant="ghost" asChild>
                <a href="/login">{translations.login}</a>
              </Button>
              <Button
                className="bg-primary-500 text-secondary-500 hover:bg-primary-500/90"
                asChild
              >
                <a href="/register">{translations.register}</a>
              </Button>
            </div>

            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border animate-in slide-in-from-top-2">
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-foreground hover:text-primary-500 transition-colors font-medium py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <div className="flex items-center justify-between pt-3 border-t border-border">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="sm">
                      <Globe className="h-4 w-4 mr-2" />
                      {currentLanguage === "es" ? "Español" : "English"}
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem onClick={() => onLanguageChange("es")}>
                      Español
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => onLanguageChange("en")}>
                      English
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
                <Button variant="ghost" size="icon" onClick={toggleTheme}>
                  {theme === "light" ? (
                    <Moon className="h-5 w-5" />
                  ) : (
                    <Sun className="h-5 w-5" />
                  )}
                </Button>
              </div>
              <div className="flex flex-col space-y-2 pt-3">
                <Button variant="outline" asChild className="w-full">
                  <a href="/login">{translations.login}</a>
                </Button>
                <Button
                  className="bg-primary-500 text-secondary-500 hover:bg-primary-500/90 w-full"
                  asChild
                >
                  <a href="/register">{translations.register}</a>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
