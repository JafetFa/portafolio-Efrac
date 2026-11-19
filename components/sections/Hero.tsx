"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { buttonVariants } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const titleContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.05, delayChildren: 0.3 },
  },
};

const letterVariants = {
  hidden: { y: "100%" },
  visible: {
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const fadeVariants = {
  hidden: { opacity: 0, y: 20, filter: "blur(10px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export function Hero() {
  const title = "Jafet Farías";

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 pt-24 pb-16 md:pt-20 md:pb-0 overflow-hidden bg-[#161615] text-[#fffcf2]">
      
      {/* FONDO PREMIUM */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#eb5e28]/15 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-0 translate-x-1/3 translate-y-1/3 w-[500px] h-[500px] bg-[#eb5e28]/10 rounded-full blur-[100px]" />
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(to right, #fffcf2 1px, transparent 1px),
              linear-gradient(to bottom, #fffcf2 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-10 lg:gap-16 items-center relative z-10">
        
        {/* TEXTO */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="order-2 md:order-1 text-center md:text-left"
        >
          <motion.div variants={fadeVariants} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#403d39] bg-[#403d39]/50 backdrop-blur-sm text-xs font-medium text-[#ccc5b9] tracking-wide uppercase mb-8">
            <span className="flex h-2 w-2 rounded-full bg-[#eb5e28] animate-pulse" />
            Disponible para nuevos proyectos
          </motion.div>

          <motion.h1 
            variants={titleContainerVariants}
            className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight mb-4 overflow-hidden flex flex-wrap justify-center md:justify-start"
          >
            {title.split("").map((char, i) => (
              <motion.span key={i} variants={letterVariants} className="inline-block">
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </motion.h1>

          <motion.h2 variants={fadeVariants} className="text-xl md:text-2xl font-medium text-[#ccc5b9] mb-6">
            Ingeniero de Sistemas <span className="text-[#eb5e28] mx-1">/</span> Fullstack & IA
          </motion.h2>

          <motion.p
            variants={fadeVariants}
            className="text-base md:text-lg text-[#ccc5b9]/80 leading-relaxed mb-10 max-w-md mx-auto md:mx-0"
          >
            Ayudo a empresas a construir productos digitales escalables, combinando desarrollo de vanguardia con una infraestructura sólida.
          </motion.p>

          <motion.div
            variants={fadeVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
          >
            <a 
              href="#contacto" 
              className={buttonVariants({ size: "lg", className: "group rounded-full px-8 bg-[#eb5e28] text-white hover:bg-[#eb5e28]/90 shadow-lg shadow-[#eb5e28]/20 hover:shadow-xl hover:shadow-[#eb5e28]/30 hover:-translate-y-0.5 transition-all" })}
            >
              Hablemos de tu proyecto
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#proyectos"
              className={buttonVariants({ size: "lg", variant: "outline", className: "rounded-full px-8 border-[#403d39] text-[#fffcf2] hover:bg-[#403d39] hover:text-[#fffcf2] transition-all" })}
            >
              Ver mi trabajo
            </a>
          </motion.div>
        </motion.div>

        {/* IMAGEN */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, x: 40 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="order-1 md:order-2 relative flex justify-center md:justify-end"
        >
          <motion.div 
            animate={{ rotate: [3, -3, 3] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-0 bg-gradient-to-tr from-[#eb5e28]/30 via-transparent to-[#eb5e28]/10 rounded-3xl blur-xl -z-10" 
          />
          
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="relative w-full max-w-sm lg:max-w-md aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/10 bg-[#403d39] group"
          >
            <Image
              src="/foto-principal.png"
              alt="Jafet Farías"
              fill
              sizes="(max-width: 768px) 100vw, 40vw"
              className="object-cover object-center grayscale-[30%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#252422]/60 via-transparent to-transparent" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}