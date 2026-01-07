import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Clock, CheckCircle } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

const Hours = () => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const schedule = [
    { hours: "09:00 - 19:00" },
    { hours: "09:00 - 19:00" },
    { hours: "09:00 - 19:00" },
    { hours: "09:00 - 19:00" },
    { hours: "09:00 - 19:00" },
    { hours: "09:00 - 19:00" },
    { hours: t.hours.closed },
  ];

  const todayIndex = [6, 0, 1, 2, 3, 4, 5][new Date().getDay()];

  return (
    <section id="horaires" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm uppercase tracking-widest text-primary">
            {t.hours.label}
          </span>
          <h2 className="mt-3 font-serif text-4xl md:text-5xl">
            {t.hours.title}
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto max-w-2xl rounded-2xl border bg-card shadow-medium overflow-hidden"
        >
          <div className="flex items-center gap-3 border-b bg-primary/5 px-6 py-6">
            <Clock className="h-5 w-5 text-primary" />
            <span className="font-serif text-xl">{t.hours.header}</span>
          </div>
          <div className="divide-y">
            {schedule.map((item, i) => {
              const isToday = i === todayIndex;
              const isClosed = item.hours === t.hours.closed;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.05 }}
                  className={`px-6 py-5 flex justify-between items-center transition-colors ${
                    isToday ? "bg-primary/5" : ""
                  }`}
                >
                  <div className="flex items-center gap-3">
                    {isToday && (
                      <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                    )}
                    <span
                      className={`${
                        isToday ? "font-semibold text-primary" : "text-foreground"
                      }`}
                    >
                      {t.hours.days[i]}
                    </span>
                    {isToday && (
                      <span className="text-xs bg-primary/10 text-primary px-2.5 py-1 rounded-full font-medium">
                        {t.hours.today}
                      </span>
                    )}
                  </div>
                  <span
                    className={`${
                      isClosed ? "text-muted-foreground font-medium" : ""
                    }`}
                  >
                    {item.hours}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hours;
