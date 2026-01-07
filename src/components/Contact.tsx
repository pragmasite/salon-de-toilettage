import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const contactInfo = [
    {
      icon: Phone,
      label: t.contact.phone,
      value: "+41 79 936 32 80",
      href: "tel:+41799363280",
    },
    {
      icon: Mail,
      label: t.contact.email,
      value: "saloninu@gmail.com",
      href: "mailto:saloninu@gmail.com",
    },
    {
      icon: MapPin,
      label: t.contact.address,
      value: "Rue de la Paix 63, 2300 La Chaux-de-Fonds",
      href: "https://maps.google.com/?q=Rue+de+la+Paix+63+La+Chaux-de-Fonds",
    },
  ];

  return (
    <section id="contact" className="py-20 md:py-32 bg-card">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="text-sm uppercase tracking-widest text-primary">
            {t.contact.label}
          </span>
          <h2 className="mt-3 font-serif text-4xl md:text-5xl">
            {t.contact.title1}
            <br />
            <span className="text-accent">{t.contact.title2}</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            {t.contact.description}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start mb-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <a
                  key={index}
                  href={info.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start gap-4 p-4 rounded-lg hover:bg-background transition-colors"
                >
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-muted-foreground font-medium">
                      {info.label}
                    </p>
                    <p className="text-foreground font-medium group-hover:text-primary transition-colors">
                      {info.value}
                    </p>
                  </div>
                </a>
              );
            })}

            <Button asChild size="lg" className="w-full mt-8">
              <a href="tel:+41799363280">
                <Phone className="mr-2 h-5 w-5" />
                {t.contact.callNow}
              </a>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="rounded-2xl overflow-hidden shadow-medium"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2729.9264945395327!2d6.823053!3d47.100982!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47910f7b7b7b7b7b%3A0x7b7b7b7b7b7b7b7b!2sRue%20de%20la%20Paix%2063%2C%202300%20La%20Chaux-de-Fonds!5e0!3m2!1sen!2sch!4v1234567890"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Salon de toilettage INU location map"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
