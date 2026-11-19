import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingContact } from "@/components/FloatingContact";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
});

const siteUrl = "https://jafetfarias.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL("https://jafetfarias.vercel.app"), // Cambia esto cuando compres tu dominio
  title: {
    default: "Ing. Jafet Farías | Fullstack · Infraestructura · IA",
    template: "%s | Jafet Farías",
  },
  description:
    "Portafolio de Jafet Farías, ingeniero fullstack con 5+ años de experiencia en desarrollo, infraestructura cloud e IA. Disponible para freelance.",
  keywords: [
    "Ingeniero de sistemas",
    "Fullstack developer",
    "Freelance",
    "Next.js",
    "AWS",
    "IA",
    "Jafet Farías",
    "Desarrollo web Perú",
  ],
  authors: [{ name: "Jafet Farías" }],
  creator: "Jafet Farías",
  openGraph: {
    type: "website",
    locale: "es_PE",
    url: "https://jafetfarias.vercel.app",
    siteName: "Jafet Farías",
    title: "Ing. Jafet Farías | Fullstack · Infraestructura · IA",
    description: "Ingeniero fullstack con 5+ años de experiencia. Disponible para freelance.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Ing. Jafet Farías",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ing. Jafet Farías | Fullstack · Infraestructura · IA",
    description: "Ingeniero fullstack con 5+ años de experiencia.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${inter.variable} ${sora.variable}`}>
      <body className="font-sans antialiased">
        <a
          href="#top"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:rounded-lg focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground"
        >
          Saltar al contenido
        </a>
        
        {/* ESTOS 3 COMPONENTES SOLO DEBEN ESTAR AQUÍ */}
        <Header />
        <main id="top">
          {children}
        </main>
        <Footer />
        <FloatingContact />
        
      </body>
    </html>
  );
}