import { useLanguage } from "@/hooks/useLanguage";
import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="font-serif text-2xl font-bold mb-4">INU</h3>
            <p className="text-sm text-background/80">{t.footer.tagline}</p>
          </div>

          <div>
            <h4 className="font-serif text-lg font-bold mb-6">
              {t.footer.navigation}
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#a-propos" className="text-background/80 hover:text-background transition-colors">
                  {t.nav.about}
                </a>
              </li>
              <li>
                <a href="#prestations" className="text-background/80 hover:text-background transition-colors">
                  {t.nav.services}
                </a>
              </li>
              <li>
                <a href="#galerie" className="text-background/80 hover:text-background transition-colors">
                  {t.nav.gallery}
                </a>
              </li>
              <li>
                <a href="#horaires" className="text-background/80 hover:text-background transition-colors">
                  {t.nav.hours}
                </a>
              </li>
              <li>
                <a href="#contact" className="text-background/80 hover:text-background transition-colors">
                  {t.nav.contact}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg font-bold mb-6">
              {t.nav.contact}
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <a href="tel:+41799363280" className="text-background/80 hover:text-background transition-colors">
                  +41 79 936 32 80
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <a href="mailto:saloninu@gmail.com" className="text-background/80 hover:text-background transition-colors">
                  saloninu@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span className="text-background/80">
                  Rue de la Paix 63<br />2300 La Chaux-de-Fonds
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8">
          <p className="text-center text-sm text-background/70">
            © {new Date().getFullYear()} Salon de toilettage INU. {t.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
