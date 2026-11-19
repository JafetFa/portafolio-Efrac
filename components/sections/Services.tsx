import { FadeUp } from "@/components/motion";
import { Code2, Cloud, Brain, Wrench, ArrowRight } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";

const services = [
  {
    icon: Code2,
    title: "Desarrollo Fullstack",
    desc: "Aplicaciones web completas con Next.js, Node.js y bases de datos modernas. Desde el MVP hasta producción.",
    deliverable: "Producto funcional, escalable y documentado.",
  },
  {
    icon: Cloud,
    title: "Infraestructura & DevOps",
    desc: "Despliegues confiables en AWS con Docker, CI/CD y monitoreo. Arquitecturas que no se caen.",
    deliverable: "Pipeline automatizado y 99.9% de uptime.",
  },
  {
    icon: Brain,
    title: "Integración de IA",
    desc: "Modelos LLM aplicados a tu producto: clasificación, generación, búsqueda semántica y agentes.",
    deliverable: "Funcionalidad de IA integrada y medible.",
  },
  {
    icon: Wrench,
    title: "Consultoría Técnica",
    desc: "Auditoría de arquitectura, optimización de performance y acompañamiento a equipos de desarrollo.",
    deliverable: "Plan de acción claro y priorizado.",
  },
];

export function Services() {
  return (
    <section id="servicios" className="py-24 md:py-32 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <FadeUp>
          <div className="text-center mb-16">
            <p className="text-primary font-medium text-sm tracking-widest uppercase mb-3">
              Servicios
            </p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4 tracking-tight">
              Cómo puedo ayudarte
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Trabajo con startups y empresas que necesitan construir, escalar o
              mejorar sus productos digitales.
            </p>
          </div>
        </FadeUp>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((s, i) => (
            <FadeUp key={s.title} delay={0.08 * i}>
              {/* Tarjeta con efecto de borde brillante al hover */}
              <div className="group relative h-full p-8 rounded-3xl border border-border bg-card transition-all duration-500 hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/5 hover:-translate-y-1">
                
                {/* Brillo de fondo al hacer hover (Glow) */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10">
                  <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                    <s.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="font-display text-2xl font-semibold mb-3">
                    {s.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {s.desc}
                  </p>
                  <div className="flex items-center gap-2 text-sm font-medium text-primary">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                    {s.deliverable}
                  </div>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>

        <FadeUp delay={0.3}>
          <div className="mt-16 text-center">
            <a
              href="https://www.instagram.com/jafetfarias07/"
              target="_blank"
              rel="noopener noreferrer"
              className={buttonVariants({ size: "lg", className: "group rounded-full px-8" })}
            >
              Hablemos de tu proyecto
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}