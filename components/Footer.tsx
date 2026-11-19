"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowUp } from "lucide-react";
import { InstagramIcon } from "@/components/icons";

const nav = [
  { href: "#sobre-mi", label: "Sobre mí" },
  { href: "#servicios", label: "Servicios" },
  { href: "#proyectos", label: "Proyectos" },
  { href: "#experiencia", label: "Experiencia" },
  { href: "#contacto", label: "Contacto" },
];

export function Footer() {
  const [year, setYear] = useState<number | null>(null);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="border-t border-border bg-secondary/20">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-10">
          <div>
            <Link
              href="/"
              className="font-display text-xl font-bold tracking-tight"
            >
              JF<span className="text-primary">.</span>
            </Link>
            <p className="mt-3 text-sm text-muted-foreground max-w-xs leading-relaxed">
              Ingeniero fullstack + infraestructura + IA. Construyo productos
              que escalan y resuelven problemas reales.
            </p>
          </div>

          <div>
            <h3 className="text-xs font-medium uppercase tracking-widest text-muted-foreground mb-4">
              Navegación
            </h3>
            <ul className="space-y-2">
              {nav.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-sm text-foreground/80 hover:text-primary transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-medium uppercase tracking-widest text-muted-foreground mb-4">
              Conectemos
            </h3>
            <a
              href="https://www.instagram.com/jafetfarias07/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-foreground/80 hover:text-primary transition-colors"
            >
              <InstagramIcon className="h-4 w-4" />
              @jafetfarias07
            </a>
            <p className="text-sm text-muted-foreground mt-2">
              Disponible para freelance
            </p>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © {year} Ing. Jafet Farías. Todos los derechos reservados.
          </p>
          <a
            href="#top"
            className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground hover:text-primary transition-colors"
          >
            Volver arriba
            <ArrowUp className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </footer>
  );
}