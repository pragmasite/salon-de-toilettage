import { useState } from "react";
import { Link } from "react-router-dom";
import { Globe, Phone, Menu, X } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
import { Button } from "@/components/ui/button";

const Header = () => {
  const { t, otherLang, otherLangPath } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useState(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-soft"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        <a href="#" className="flex flex-col">
          <span
            className={`font-serif text-xl font-bold ${
              isScrolled ? "text-primary" : "text-white"
            }`}
          >
            INU
          </span>
          <span
            className={`text-xs tracking-widest ${
              isScrolled ? "text-muted-foreground" : "text-white/70"
            }`}
          >
            {t.nav.profession}
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-6">
          <a
            href="#a-propos"
            className={`text-sm font-medium transition-colors ${
              isScrolled
                ? "text-foreground hover:text-primary"
                : "text-white hover:text-white/80"
            }`}
          >
            {t.nav.about}
          </a>
          <a
            href="#prestations"
            className={`text-sm font-medium transition-colors ${
              isScrolled
                ? "text-foreground hover:text-primary"
                : "text-white hover:text-white/80"
            }`}
          >
            {t.nav.services}
          </a>
          <a
            href="#galerie"
            className={`text-sm font-medium transition-colors ${
              isScrolled
                ? "text-foreground hover:text-primary"
                : "text-white hover:text-white/80"
            }`}
          >
            {t.nav.gallery}
          </a>
          <a
            href="#horaires"
            className={`text-sm font-medium transition-colors ${
              isScrolled
                ? "text-foreground hover:text-primary"
                : "text-white hover:text-white/80"
            }`}
          >
            {t.nav.hours}
          </a>
          <a
            href="#contact"
            className={`text-sm font-medium transition-colors ${
              isScrolled
                ? "text-foreground hover:text-primary"
                : "text-white hover:text-white/80"
            }`}
          >
            {t.nav.contact}
          </a>

          <div className="h-6 w-px bg-white/20"></div>

          <Link
            to={otherLangPath}
            className={`flex items-center gap-1.5 text-sm transition-colors ${
              isScrolled
                ? "text-foreground hover:text-primary"
                : "text-white hover:text-white/80"
            }`}
          >
            <Globe className="h-4 w-4" />
            {otherLang.toUpperCase()}
          </Link>

          <Button asChild size="sm">
            <a href="tel:+41799363280">
              <Phone className="h-4 w-4 mr-2" />
              {t.nav.call}
            </a>
          </Button>
        </nav>

        <button
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X
              className={`h-6 w-6 ${isScrolled ? "text-foreground" : "text-white"}`}
            />
          ) : (
            <Menu
              className={`h-6 w-6 ${isScrolled ? "text-foreground" : "text-white"}`}
            />
          )}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-background border-b">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <a href="#a-propos" className="text-sm font-medium text-foreground">
              {t.nav.about}
            </a>
            <a href="#prestations" className="text-sm font-medium text-foreground">
              {t.nav.services}
            </a>
            <a href="#galerie" className="text-sm font-medium text-foreground">
              {t.nav.gallery}
            </a>
            <a href="#horaires" className="text-sm font-medium text-foreground">
              {t.nav.hours}
            </a>
            <a href="#contact" className="text-sm font-medium text-foreground">
              {t.nav.contact}
            </a>
            <div className="h-px bg-border"></div>
            <Link
              to={otherLangPath}
              className="flex items-center gap-2 text-sm font-medium text-foreground"
            >
              <Globe className="h-4 w-4" />
              {otherLang.toUpperCase()}
            </Link>
            <Button asChild className="w-full">
              <a href="tel:+41799363280">
                <Phone className="h-4 w-4 mr-2" />
                {t.nav.call}
              </a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
