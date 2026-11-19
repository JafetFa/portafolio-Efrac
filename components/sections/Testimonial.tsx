"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { motion } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
import { testimonials } from "@/content/testimonials";
import { FadeUp } from "@/components/motion";

export function Testimonial() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "center" });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((index: number) => emblaApi && emblaApi.scrollTo(index), [emblaApi]);

  // Actualizar el índice seleccionado
  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    onSelect();
  }, [emblaApi]);

  // Autoplay
  useEffect(() => {
    if (!emblaApi || !isPlaying) return;
    const interval = setInterval(() => {
      emblaApi.scrollNext();
    }, 5000); // Cambia cada 5 segundos
    return () => clearInterval(interval);
  }, [emblaApi, isPlaying]);

  return (
    <section className="relative py-24 md:py-32 px-6 overflow-hidden bg-secondary/10">
      {/* Fondo con gradiente sutil */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-5xl mx-auto">
        <FadeUp>
          <div className="text-center mb-16">
            <p className="text-primary font-medium text-sm tracking-widest uppercase mb-3">
              Testimonios
            </p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
              Lo que dicen de mi trabajo
            </h2>
            <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
              Personas con las que he colaborado y que confían en mi enfoque técnico.
            </p>
          </div>
        </FadeUp>

        {/* Contenedor del Slider */}
        <div 
          className="relative"
          onMouseEnter={() => setIsPlaying(false)}
          onMouseLeave={() => setIsPlaying(true)}
        >
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {testimonials.map((t, index) => (
                <div 
                  key={index} 
                  className="flex-[0_0_100%] min-w-0 px-4 md:px-8"
                >
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ 
                      opacity: selectedIndex === index ? 1 : 0.4, 
                      scale: selectedIndex === index ? 1 : 0.95 
                    }}
                    transition={{ duration: 0.5 }}
                    className="relative bg-card border border-border rounded-3xl p-8 md:p-12 shadow-xl text-center"
                  >
                    <Quote className="h-12 w-12 text-primary/20 mx-auto mb-6" />
                    <blockquote className="font-display text-xl md:text-2xl lg:text-3xl font-medium leading-relaxed text-foreground mb-8">
                      "{t.quote}"
                    </blockquote>
                    <div className="flex items-center justify-center gap-4">
                      <div className="h-12 w-12 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary font-bold">
                        {t.initials}
                      </div>
                      <div className="text-left">
                        <p className="font-semibold text-foreground">{t.author}</p>
                        <p className="text-sm text-muted-foreground">{t.role} · {t.company}</p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>

          {/* Controles Inferiores */}
          <div className="flex items-center justify-center gap-6 mt-10">
            <button
              onClick={scrollPrev}
              className="h-10 w-10 rounded-full border border-border flex items-center justify-center hover:bg-secondary transition-colors"
              aria-label="Anterior testimonio"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            {/* Indicadores (Dots) */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => scrollTo(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    selectedIndex === index ? "w-8 bg-primary" : "w-2 bg-border hover:bg-primary/50"
                  }`}
                  aria-label={`Ir al testimonio ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={scrollNext}
              className="h-10 w-10 rounded-full border border-border flex items-center justify-center hover:bg-secondary transition-colors"
              aria-label="Siguiente testimonio"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>

          {/* Botón de Play/Pause (Opcional, sutil) */}
          <div className="flex justify-center mt-4">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="inline-flex items-center gap-2 text-xs font-medium text-muted-foreground hover:text-primary transition-colors"
              aria-label={isPlaying ? "Pausar slider" : "Reproducir slider"}
            >
              {isPlaying ? (
                <>
                  <Pause className="h-3 w-3" /> Pausar
                </>
              ) : (
                <>
                  <Play className="h-3 w-3" /> Reproducir
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}