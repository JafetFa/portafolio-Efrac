import { FadeUp } from "@/components/motion";
import { experience } from "@/content/experience";
import { Briefcase } from "lucide-react";

export function Experience() {
  return (
    <section className="py-24 md:py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <FadeUp>
          <p className="text-primary font-medium text-sm tracking-widest uppercase mb-3 text-center">
            Trayectoria
          </p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-center tracking-tight">
            Experiencia
          </h2>
          <p className="text-muted-foreground text-center mb-16 max-w-xl mx-auto">
            Roles donde combiné desarrollo, infraestructura y liderazgo técnico.
          </p>
        </FadeUp>

        <div className="relative">
          {/* Línea vertical */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2" />

          <div className="space-y-12">
            {experience.map((e, i) => {
              const isLeft = i % 2 === 0;
              return (
                <FadeUp key={e.company} delay={0.08 * i}>
                  <div
                    className={`relative flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-12 ${
                      isLeft ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                  >
                    {/* Card */}
                    <div className="w-full md:w-1/2 pl-12 md:pl-0">
                      <div className="p-6 rounded-2xl border border-border bg-card hover:border-primary/50 hover:shadow-lg transition-all duration-300">
                        <div className="flex items-center gap-2 text-xs text-primary font-medium mb-2">
                          <Briefcase className="h-3.5 w-3.5" />
                          {e.period}
                        </div>
                        <h3 className="font-display text-lg font-semibold mb-1">
                          {e.role}
                        </h3>
                        <p className="text-sm text-muted-foreground mb-3">
                          {e.company}
                        </p>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {e.description}
                        </p>
                      </div>
                    </div>

                    {/* Punto en la línea */}
                    <div className="absolute left-4 md:left-1/2 top-6 md:top-1/2 -translate-x-1/2 md:-translate-y-1/2">
                      <span className="relative flex h-4 w-4">
                        <span className="absolute inline-flex h-full w-full rounded-full bg-primary/40 animate-ping" />
                        <span className="relative inline-flex h-4 w-4 rounded-full bg-primary ring-4 ring-background" />
                      </span>
                    </div>

                    {/* Espacio vacío en desktop */}
                    <div className="hidden md:block md:w-1/2" />
                  </div>
                </FadeUp>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}