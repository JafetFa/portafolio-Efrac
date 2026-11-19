import { FadeUp } from "@/components/motion";
import { AnimatedNumber } from "@/components/AnimatedNumber";

const metrics = [
  { value: 30, prefix: "+", label: "Proyectos entregados" },
  { value: 99.9, suffix: "%", decimals: 1, label: "Uptime en producción" },
  { value: 5, prefix: "", suffix: "+", label: "Años de experiencia" },
  { value: 100, suffix: "%", label: "Compromiso" },
];

export function Metrics() {
  return (
    <section className="relative py-16 md:py-20 px-6 border-y border-border overflow-hidden">
      
      {/* 🌟 NUEVO: Fondo con degradado sutil y patrón */}
      <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-r from-secondary/20 via-background to-secondary/20" />
      <div 
        aria-hidden 
        className="absolute inset-0 -z-10 opacity-[0.03]"
        style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)",
          backgroundSize: "20px 20px",
        }}
      />

      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 relative z-10">
        {metrics.map((m, i) => (
          <FadeUp key={m.label} delay={0.08 * i} className="text-center">
            <p className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-primary to-[#f97316] tracking-tight">
              <AnimatedNumber
                value={m.value}
                prefix={m.prefix}
                suffix={m.suffix}
                decimals={m.decimals ?? 0}
              />
            </p>
            <p className="text-muted-foreground mt-2 text-xs md:text-sm uppercase tracking-widest font-medium">
              {m.label}
            </p>
          </FadeUp>
        ))}
      </div>
    </section>
  );
}