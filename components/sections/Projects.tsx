"use client";

import { useState, useCallback, useEffect } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { projects, type Project } from "@/content/projects";
import { FadeUp } from "@/components/motion";
import { ArrowUpRight, X, ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card";

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    align: "start", 
    loop: false, 
    dragFree: true,
    containScroll: "trimSnaps" 
  });
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(true);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => {
      setPrevBtnEnabled(emblaApi.canScrollPrev());
      setNextBtnEnabled(emblaApi.canScrollNext());
    };
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    onSelect();
  }, [emblaApi]);

  return (
    <section id="proyectos" className="py-24 md:py-32 px-6 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <FadeUp>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <p className="text-primary font-medium text-sm tracking-widest uppercase mb-3">
                Portafolio
              </p>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
                Proyectos destacados
              </h2>
              <p className="text-muted-foreground mt-2 max-w-xl">
                Una selección de trabajos donde el resultado importó más que el código.
              </p>
            </div>
            <div className="hidden md:flex gap-2">
              <button
                onClick={scrollPrev}
                disabled={!prevBtnEnabled}
                className="h-10 w-10 rounded-full border border-border flex items-center justify-center hover:bg-secondary disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                aria-label="Anterior"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={scrollNext}
                disabled={!nextBtnEnabled}
                className="h-10 w-10 rounded-full border border-border flex items-center justify-center hover:bg-secondary disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                aria-label="Siguiente"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </FadeUp>

        {/* Slider Principal */}
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-4 lg:gap-6">
            {projects.map((p, i) => (
              <div 
                key={p.title} 
                className="flex-[0_0_85%] sm:flex-[0_0_45%] md:flex-[0_0_31%] min-w-0 py-4"
              >
                <FadeUp delay={0.05 * (i % 3)}>
                  <CardContainer className="inter-var w-full">
                    <CardBody className="bg-card relative group/card border-border hover:border-primary/50 w-full h-auto rounded-2xl p-0 overflow-hidden border transition-all duration-300">
                      
                      <CardItem translateZ="50" className="w-full">
                        <div className="relative aspect-[4/3] bg-secondary overflow-hidden">
                          <Image
                            src={p.image}
                            alt={p.title}
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 33vw, 25vw"
                            className="object-cover group-hover/card:scale-105 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity" />
                          
                          <div className="absolute top-3 right-3 bg-background/80 backdrop-blur-md px-2 py-1 rounded-md flex items-center gap-1 opacity-0 group-hover/card:opacity-100 transition-opacity">
                            <Maximize2 className="h-3 w-3" />
                            <span className="text-[10px] font-medium">{p.images?.length || 1}</span>
                          </div>
                        </div>
                      </CardItem>
                      
                      <div className="p-5 flex flex-col flex-1">
                        <CardItem translateZ="60" className="w-full">
                          <h3 className="font-display text-lg font-semibold mb-1 truncate">{p.title}</h3>
                          <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                            {p.description}
                          </p>
                        </CardItem>
                        
                        <CardItem translateZ="40" className="w-full">
                          <div className="flex flex-wrap gap-1.5 mb-4">
                            {p.stack.slice(0, 3).map((t) => (
                              <span key={t} className="px-2 py-0.5 rounded-md bg-secondary text-[11px] font-medium text-foreground/80">
                                {t}
                              </span>
                            ))}
                            {p.stack.length > 3 && (
                              <span className="px-2 py-0.5 rounded-md bg-secondary text-[11px] font-medium text-foreground/50">
                                +{p.stack.length - 3}
                              </span>
                            )}
                          </div>
                        </CardItem>

                        <CardItem translateZ="80" className="w-full mt-auto">
                          <button
                            onClick={() => setSelectedProject(p)}
                            className="inline-flex items-center justify-center gap-2 w-full rounded-lg bg-secondary/50 hover:bg-primary hover:text-primary-foreground px-4 py-2 text-sm font-medium transition-colors"
                          >
                            Ver proyecto
                            <ArrowUpRight className="h-4 w-4" />
                          </button>
                        </CardItem>
                      </div>
                    </CardBody>
                  </CardContainer>
                </FadeUp>
              </div>
            ))}
          </div>
        </div>
        
        <div className="md:hidden flex justify-center gap-2 mt-6">
          <span className="text-xs text-muted-foreground">Desliza para ver más</span>
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal 
            project={selectedProject} 
            onClose={() => setSelectedProject(null)} 
          />
        )}
      </AnimatePresence>
    </section>
  );
}

// --- MODAL REDISEÑADO: Solo Título, Descripción e Imagen ---
function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [currentIndex, setCurrentIndex] = useState(0);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => {
      setCurrentIndex(emblaApi.selectedScrollSnap());
    };
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    onSelect();
  }, [emblaApi]);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] bg-background/90 backdrop-blur-lg flex items-center justify-center p-4 md:p-6"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        onClick={(e) => e.stopPropagation()}
        className="bg-card w-full max-w-6xl rounded-3xl overflow-hidden shadow-2xl border border-border flex flex-col max-h-[95vh]"
      >
                {/* Cabecera del Modal: Título y Descripción con fondo sólido */}
        <div className="flex items-start justify-between p-4 md:p-6 border-b border-[#403d39] shrink-0 bg-[#252422]">
          <div className="pr-8">
            <h3 className="font-display text-xl md:text-3xl font-bold text-[#fffcf2]">
              {project.title}
            </h3>
            <p className="text-sm md:text-base text-[#ccc5b9] mt-1">
              {project.description}
            </p>
          </div>
          <button
            onClick={onClose}
            className="h-10 w-10 shrink-0 rounded-full bg-[#403d39] flex items-center justify-center hover:bg-[#eb5e28] hover:text-white transition-colors text-[#ccc5b9]"
            aria-label="Cerrar modal"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Slider de Imágenes (Protagonista del modal) */}
        <div className="relative bg-[#1a1a1a] flex items-center justify-center min-h-[40vh] md:min-h-[65vh]">
          
          <div className="overflow-hidden w-full h-full" ref={emblaRef}>
            <div className="flex h-full">
              {project.images?.map((img, index) => (
                <div 
                  key={index} 
                  className="flex-[0_0_100%] min-w-0 h-[40vh] md:h-[65vh] flex items-center justify-center p-4 md:p-8"
                >
                  <img
                    src={img}
                    alt={`${project.title} - Imagen ${index + 1}`}
                    className="max-w-full max-h-full object-contain rounded-lg shadow-lg"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Controles del slider */}
          {project.images && project.images.length > 1 && (
            <>
              <button
                onClick={scrollPrev}
                className="absolute left-4 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-background/40 backdrop-blur-md flex items-center justify-center hover:bg-background/80 transition-colors text-foreground shadow-lg"
                aria-label="Anterior imagen"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button
                onClick={scrollNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-background/40 backdrop-blur-md flex items-center justify-center hover:bg-background/80 transition-colors text-foreground shadow-lg"
                aria-label="Siguiente imagen"
              >
                <ChevronRight className="h-6 w-6" />
              </button>

              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-background/50 backdrop-blur-md px-3 py-1 rounded-full text-xs font-medium text-foreground">
                {currentIndex + 1} / {project.images.length}
              </div>
            </>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}