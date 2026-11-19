import Image from "next/image";
import { FadeUp } from "@/components/motion";
import { Code2, Cloud, Brain } from "lucide-react";

const pillars = [
  {
    icon: Code2,
    title: "Desarrollo Fullstack",
    desc: "APIs robustas y frontends modernos con TypeScript.",
  },
  {
    icon: Cloud,
    title: "Infraestructura Cloud",
    desc: "Despliegues confiables en AWS con Docker y CI/CD.",
  },
  {
    icon: Brain,
    title: "IA Aplicada",
    desc: "Integración de modelos LLM en productos reales.",
  },
];

export function About() {
  return (
    <section id="sobre-mi" className="py-24 md:py-32 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
        <FadeUp className="order-2 md:order-1">
          <div className="relative">
            <div className="absolute -inset-3 bg-primary/10 rounded-3xl rotate-2" />
            <div className="relative aspect-square rounded-3xl overflow-hidden bg-secondary shadow-xl">
              <Image
                src="/foto-trabajo.png"
                alt="Jafet Farías trabajando"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </FadeUp>

        <div className="order-1 md:order-2">
          <FadeUp>
            <p className="text-primary font-medium text-sm tracking-widest uppercase mb-3">
              Sobre mí
            </p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6 tracking-tight">
              Ingeniería con foco en resultados
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Soy ingeniero de sistemas con más de 5 años de experiencia en
              empresas privadas, combinando desarrollo fullstack con
              infraestructura cloud y automatización.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Me especializo en construir soluciones que no solo funcionan,
              sino que escalan, con IA aplicada y despliegues confiables.
            </p>
          </FadeUp>

          <div className="space-y-4">
            {pillars.map((p, i) => (
              <FadeUp key={p.title} delay={0.1 * (i + 1)}>
                <div className="flex gap-4 p-4 rounded-2xl border border-border bg-card hover:border-primary/50 transition-colors">
                  <div className="shrink-0 h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <p.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold">{p.title}</p>
                    <p className="text-sm text-muted-foreground">{p.desc}</p>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}