import Image from "next/image";
import { FadeUp } from "@/components/motion";

const images = [
  { src: "/gallery/1.jpg", alt: "Setup de trabajo", span: "md:col-span-2 md:row-span-2" },
  { src: "/gallery/2.jpg", alt: "Sesión de código", span: "" },
  { src: "/gallery/3.jpg", alt: "Diagrama de arquitectura", span: "" },
];

export function Gallery() {
  return (
    <section className="py-24 md:py-32 px-6 bg-secondary/20">
      <div className="max-w-6xl mx-auto">
        <FadeUp>
          <p className="text-primary font-medium text-sm tracking-widest uppercase mb-3 text-center">
            Detrás del código
          </p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-16 text-center tracking-tight">
            En el trabajo
          </h2>
        </FadeUp>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px] md:auto-rows-[240px]">
          {images.map((img, i) => (
            <FadeUp
              key={img.src}
              delay={0.1 * i}
              className={`${img.span} ${i === 0 ? "col-span-2 row-span-2" : ""}`}
            >
              <div className="relative h-full w-full rounded-2xl overflow-hidden bg-secondary group">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <p className="absolute bottom-4 left-4 text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                  {img.alt}
                </p>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}