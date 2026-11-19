"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { InstagramIcon } from "@/components/icons";

const links = [
  { href: "#sobre-mi", label: "Sobre mí" },
  { href: "#servicios", label: "Servicios" },
  { href: "#proyectos", label: "Proyectos" },
  { href: "#experiencia", label: "Experiencia" },
  { href: "#contacto", label: "Contacto" },
];

// Variantes para animar las letras del logo/título
const letterVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.05, duration: 0.3, ease: "easeOut" as const },
  }),
};

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const title = "Jafet Farías";

  return (
    <header className="fixed top-4 md:top-6 inset-x-0 z-50 px-4 md:px-6 pointer-events-none">
      <div
        className={`max-w-5xl mx-auto rounded-full border border-[#403d39]/50 transition-all duration-300 pointer-events-auto overflow-hidden ${
          scrolled ? "shadow-2xl py-2.5" : "shadow-lg py-3"
        }`}
        style={{
          background: "linear-gradient(135deg, #252422 0%, #403d39 60%, #eb5e28 140%)",
        }}
      >
        {/* Brillo sutil superior para efecto cristal */}
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

        <div className="relative px-4 md:px-6 flex items-center justify-between">
          {/* LOGO + TÍTULO ANIMADO */}
          <Link
            href="/"
            className="flex items-center gap-3 hover:opacity-90 transition-opacity"
            aria-label="Inicio"
          >
            <Image
              src="/isotipo.png"
              alt="Jafet Farías"
              width={32}
              height={32}
              className="rounded-lg object-contain"
            />
            <div className="hidden sm:flex overflow-hidden">
              {title.split("").map((char, i) => (
                <motion.span
                  key={i}
                  custom={i}
                  variants={letterVariants}
                  initial="hidden"
                  animate="visible"
                  className="font-display text-sm font-bold text-[#fffcf2] tracking-tight"
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </div>
          </Link>

          {/* Navegación Desktop */}
          <nav className="hidden md:flex items-center gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="relative px-4 py-2 text-sm font-medium text-[#ccc5b9] hover:text-[#fffcf2] transition-colors group"
              >
                {l.label}
                {/* Subrayado animado al hacer hover */}
                <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-px bg-[#eb5e28] group-hover:w-1/2 transition-all duration-300" />
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center">
            <a
              href="https://www.instagram.com/jafetfarias07/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#eb5e28] px-5 py-2 text-sm font-medium text-white hover:bg-[#eb5e28]/90 transition-all shadow-md hover:shadow-lg hover:shadow-[#eb5e28]/30 hover:-translate-y-0.5"
            >
              <InstagramIcon className="h-4 w-4" />
              Contactar
            </a>
          </div>

          {/* Botón Móvil */}
          <button
            onClick={() => setOpen((v) => !v)}
            className="md:hidden h-10 w-10 inline-flex items-center justify-center rounded-full hover:bg-white/10 transition-colors text-[#fffcf2]"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Menú Móvil */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className="md:hidden overflow-hidden"
            >
              <nav className="relative px-4 pb-4 pt-2 flex flex-col gap-1 border-t border-white/10 mt-2">
                {links.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="py-3 px-4 text-sm font-medium text-[#ccc5b9] hover:text-[#fffcf2] hover:bg-white/5 rounded-xl transition-colors"
                  >
                    {l.label}
                  </a>
                ))}
                <a
                  href="https://www.instagram.com/jafetfarias07/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-[#eb5e28] px-4 py-3 text-sm font-medium text-white shadow-md"
                >
                  <InstagramIcon className="h-4 w-4" />
                  Contactar por Instagram
                </a>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}