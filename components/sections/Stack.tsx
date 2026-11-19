import Image from "next/image";
import { FadeUp } from "@/components/motion";
import {
  Code2,
  Server,
  Database,
  Cloud,
  Brain,
  GitBranch,
} from "lucide-react";

const groups = [
  {
    title: "Frontend",
    icon: Code2,
    items: ["TypeScript", "React", "Next.js", "Tailwind CSS"],
  },
  {
    title: "Backend",
    icon: Server,
    items: ["Node.js", "Python", "FastAPI", "REST / GraphQL"],
  },
  {
    title: "Datos",
    icon: Database,
    items: ["PostgreSQL", "Redis", "Prisma"],
  },
  {
    title: "Infraestructura",
    icon: Cloud,
    items: ["AWS", "Docker", "Terraform", "CI/CD"],
  },
  {
    title: "IA",
    icon: Brain,
    items: ["OpenAI API", "LangChain", "Embeddings"],
  },
  {
    title: "Herramientas",
    icon: GitBranch,
    items: ["Git", "GitHub Actions", "Linux"],
  },
];

export function Stack() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden min-h-[600px] flex items-center bg-[#252422]">
      
      {/* 1. FONDO CON GRADIENTE Y BRILLOS (Paleta de colores) */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        {/* Degradado base de carbon-black a charcoal-brown */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#252422] via-[#2a2926] to-[#403d39]" />
        
        {/* Brillo radial sutil en el centro-derecha */}
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[600px] bg-[#eb5e28]/10 rounded-full blur-[120px]" />
        
        {/* Patrón de cuadrícula muy sutil */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(to right, #fffcf2 1px, transparent 1px),
              linear-gradient(to bottom, #fffcf2 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="max-w-6xl w-full mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* 2. LADO IZQUIERDO: Imagen con marco de gradiente */}
          <FadeUp className="order-2 lg:order-1 relative">
            <div className="relative w-full aspect-square lg:aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl ring-1 ring-white/10 group">
              {/* Imagen de tu setup o perfil */}
              <Image
                src="/stack1.png" // <-- CAMBIA ESTO POR TU IMAGEN (ej: foto trabajando)
                alt="Setup de trabajo"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center grayscale-[30%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
              />
              {/* Overlay para integrar la imagen con el fondo oscuro */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#252422]/60 via-transparent to-transparent" />
            </div>
            
            {/* Marco decorativo con gradiente detrás de la imagen */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#eb5e28]/20 via-transparent to-transparent rounded-3xl -z-10 translate-x-3 translate-y-3 blur-md" />
          </FadeUp>

          {/* 3. LADO DERECHO: Tarjetas de Stack con glassmorphism */}
          <div className="order-1 lg:order-2">
            <FadeUp>
              <p className="text-[#eb5e28] font-medium text-sm tracking-widest uppercase mb-3">
                Herramientas
              </p>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4 tracking-tight text-[#fffcf2]">
                Stack técnico
              </h2>
              <p className="text-[#ccc5b9] mb-10 max-w-md">
                Tecnologías con las que construyo día a día, desde el frontend hasta la infraestructura.
              </p>
            </FadeUp>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {groups.map((g, i) => (
                <FadeUp key={g.title} delay={0.05 * i}>
                  <div className="p-5 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 hover:border-[#eb5e28]/40 transition-all duration-300 shadow-lg group">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="h-8 w-8 rounded-lg bg-[#eb5e28]/20 flex items-center justify-center shrink-0 group-hover:bg-[#eb5e28]/30 transition-colors">
                        <g.icon className="h-4 w-4 text-[#eb5e28]" />
                      </div>
                      <h3 className="font-display font-semibold text-sm text-[#fffcf2]">
                        {g.title}
                      </h3>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {g.items.map((item) => (
                        <span
                          key={item}
                          className="px-2.5 py-1 rounded-md bg-[#403d39]/50 text-xs font-medium text-[#ccc5b9] hover:bg-[#eb5e28] hover:text-white transition-colors cursor-default"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}