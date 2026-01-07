import { useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

const Gallery = () => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const images = [
    { src: "/images/img-1.jpg", alt: t.gallery.images[0].alt },
    { src: "/images/img-2.jpg", alt: t.gallery.images[1].alt },
    { src: "/images/img-3.jpg", alt: t.gallery.images[2].alt },
    { src: "/images/img-4.jpg", alt: t.gallery.images[3].alt },
    { src: "/images/img-5.jpg", alt: t.gallery.images[4].alt },
    { src: "/images/img-6.jpg", alt: t.gallery.images[5].alt },
    { src: "/images/img-7.jpg", alt: t.gallery.images[6].alt },
    { src: "/images/img-8.jpg", alt: t.gallery.images[7].alt },
  ];

  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const handlePrevious = () => {
    setSelectedIndex((prev) =>
      prev === null ? 0 : prev === 0 ? images.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setSelectedIndex((prev) =>
      prev === null ? 0 : prev === images.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <section id="galerie" className="py-20 md:py-32 bg-card">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="text-sm uppercase tracking-widest text-primary">
            {t.gallery.label}
          </span>
          <h2 className="mt-3 font-serif text-4xl md:text-5xl mb-4">
            {t.gallery.title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t.gallery.description}
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={
                isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }
              }
              transition={{ duration: 0.4, delay: index * 0.05 }}
              onClick={() => setSelectedIndex(index)}
              className="group relative aspect-square cursor-pointer overflow-hidden rounded-2xl bg-muted"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-xs font-medium text-white">{image.alt}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedIndex(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl"
            >
              <img
                src={images[selectedIndex].src}
                alt={images[selectedIndex].alt}
                className="w-full h-auto rounded-2xl"
              />

              <button
                onClick={() => setSelectedIndex(null)}
                className="absolute top-4 right-4 p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
              >
                <X className="h-6 w-6 text-white" />
              </button>

              <button
                onClick={handlePrevious}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
              >
                <ChevronLeft className="h-6 w-6 text-white" />
              </button>

              <button
                onClick={handleNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
              >
                <ChevronRight className="h-6 w-6 text-white" />
              </button>

              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-sm">
                {selectedIndex + 1} / {images.length}
              </div>

              <p className="text-white text-center mt-4">
                {images[selectedIndex].alt}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;
