import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { useLanguage } from "@/hooks/useLanguage";

const About = () => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="a-propos" className="py-20 md:py-32 bg-card">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="text-sm uppercase tracking-widest text-primary">
            {t.about.label}
          </span>
          <h2 className="mt-3 font-serif text-4xl md:text-5xl">
            {t.about.title1}
            <br />
            <span className="text-accent">{t.about.title2}</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-lg text-foreground/80 mb-6">{t.about.p1}</p>
            <p className="text-lg text-foreground/80">{t.about.p2}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-3 gap-4"
          >
            <div className="text-center p-6 rounded-lg bg-background border border-border">
              <div className="font-serif text-3xl font-bold text-primary mb-2">
                10+
              </div>
              <div className="text-sm text-muted-foreground">
                {t.about.stat1}
              </div>
            </div>
            <div className="text-center p-6 rounded-lg bg-background border border-border">
              <div className="font-serif text-3xl font-bold text-primary mb-2">
                500+
              </div>
              <div className="text-sm text-muted-foreground">
                {t.about.stat2}
              </div>
            </div>
            <div className="text-center p-6 rounded-lg bg-background border border-border">
              <div className="font-serif text-3xl font-bold text-primary mb-2">
                100%
              </div>
              <div className="text-sm text-muted-foreground">
                {t.about.stat3}
              </div>
            </div>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.about.features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              className="p-6 rounded-lg bg-background border border-border hover:shadow-soft transition-shadow"
            >
              <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center mb-4">
                <span className="text-2xl font-serif text-accent">✓</span>
              </div>
              <h3 className="font-serif text-lg mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
