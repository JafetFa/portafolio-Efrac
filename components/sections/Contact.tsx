import { buttonVariants } from "@/components/ui/button";
import { InstagramIcon } from "@/components/icons";
import { CVDownload } from "@/components/CVDownload";
import { FadeUp } from "@/components/motion";
import { ArrowUpRight } from "lucide-react";

export function Contact() {
  return (
    <section
      id="contacto"
      className="relative py-24 md:py-32 px-6 overflow-hidden bg-[#252422] text-[#fffcf2]"
    >
      {/* 🌟 NUEVO: Patrón de rejilla (Grid) moderno */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #fffcf2 1px, transparent 1px),
            linear-gradient(to bottom, #fffcf2 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />

      {/* 🌟 NUEVO: Brillo radial detrás del contenido */}
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[800px] rounded-full bg-[#eb5e28]/20 blur-[100px]"
      />

      <div className="relative max-w-3xl mx-auto text-center z-10">
        <FadeUp>
          <p className="text-[#eb5e28] font-medium text-sm tracking-widest uppercase mb-3">
            Contacto
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight leading-tight">
            ¿Construimos algo juntos?
          </h2>
          <p className="text-[#ccc5b9] mb-10 max-w-lg mx-auto leading-relaxed">
            Estoy disponible para proyectos freelance y oportunidades
            profesionales. La forma más directa de contactarme es por Instagram.
          </p>
        </FadeUp>

        <FadeUp delay={0.15}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="https://www.instagram.com/jafetfarias07/"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-xl bg-[#eb5e28] px-7 py-3.5 text-base font-medium text-white hover:bg-[#eb5e28]/90 transition-all shadow-lg shadow-[#eb5e28]/20 hover:shadow-xl hover:shadow-[#eb5e28]/40 hover:-translate-y-0.5"
            >
              <InstagramIcon className="h-5 w-5" />
              @jafetfarias07
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <div className="[&_button]:bg-transparent [&_button]:text-[#fffcf2] [&_button]:border-[#403d39] [&_button]:hover:bg-[#403d39] [&_button]:hover:text-[#fffcf2] [&_button]:transition-all [&_button]:hover:-translate-y-0.5">
              <CVDownload />
            </div>
          </div>
        </FadeUp>

        <FadeUp delay={0.25}>
          <p className="mt-12 text-xs text-[#ccc5b9]/60">
            Respuesta habitual en menos de 24 h · Freelance remoto · Perú
          </p>
        </FadeUp>
      </div>
    </section>
  );
}