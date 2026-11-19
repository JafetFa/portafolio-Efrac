export type Project = {
  title: string;
  description: string;
  stack: string[];
  result: string;
  image: string; // Portada para el slider principal
  images: string[]; // Galería completa para el modal
  link?: string;
  caseStudy?: {
    problem: string;
    solution: string;
    outcome: string;
  };
};

export const projects: Project[] = [
  {
    title: "Sitio Web Clm",
    description: "Organizacion religiosa con presencia digital",
    stack: ["Javascript", "Tailwind", "Next.js"],
    result: "Reducción del 40% en tiempos de respuesta",
    image: "/projects/project-1.PNG",
    images: [
      "/projects/project-1.PNG", 
      "/projects/project-1-a.png", // Añade tus imágenes reales aquí
      "/projects/project-1-b.png",
      "/projects/project-1-c.png",
      "/projects/project-1-d.png"
    ],
    caseStudy: {
      problem: "El cliente tenía un sistema monolítico que colapsaba con más de 500 usuarios concurrentes.",
      solution: "Migré la arquitectura a microservicios usando Next.js y AWS, implementando caché con Redis.",
      outcome: "El sistema ahora soporta 5,000 usuarios concurrentes y los tiempos de carga bajaron de 4s a 1.2s."
    }
  },
  
  {
    title: "Sistema de Control de Eventos",
    description: "Multi-evento, Reportes en vivo, Dashboard, Pagos, Usuarios, Roles y Permisos. Registro de asistencia, estadística.",
    stack: ["Laravel", "MySQL", "Javascript"],
    result: "Reducción del 40% en tiempos de respuesta",
    image: "/projects/project-2.png",
    images: [
      "/projects/project-2.png", 
      "/projects/project-2-a.png",
      "/projects/project-2-b.png",
      "/projects/project-2-c.png",
      "/projects/project-2-d.png",
      "/projects/project-2-e.png",
      "/projects/project-2-f.png"
    ],
    caseStudy: {
      problem: "El cliente tenía un sistema monolítico que colapsaba con más de 500 usuarios concurrentes.",
      solution: "Migré la arquitectura a microservicios usando Next.js y AWS, implementando caché con Redis.",
      outcome: "El sistema ahora soporta 5,000 usuarios concurrentes y los tiempos de carga bajaron de 4s a 1.2s."
    }
  },

  {
    title: "Página web Smart Tracker GPS",
    description: "Página web para el seguimiento de vehículos en tiempo real, con mapas interactivos y alertas personalizadas.",
    stack: ["Laravel", "MySQL", "Javascript"],
    result: "Reducción del 40% en tiempos de respuesta",
    image: "/projects/project-3.png",
    images: [
      "/projects/project-3.png", 
      "/projects/project-3-a.png",
      "/projects/project-3-b.png",
      "/projects/project-3-c.png",
      "/projects/project-3-d.png"
    ],
    caseStudy: {
      problem: "El cliente tenía un sistema monolítico que colapsaba con más de 500 usuarios concurrentes.",
      solution: "Migré la arquitectura a microservicios usando Next.js y AWS, implementando caché con Redis.",
      outcome: "El sistema ahora soporta 5,000 usuarios concurrentes y los tiempos de carga bajaron de 4s a 1.2s."
    }
  },

  {
    title: "Sistema Web Odontológico",
    description: "Sistema web para la gestión de clínicas odontológicas, incluyendo citas, Odontograma, Norificaciones por correo, historial de pacientes y facturación.",
    stack: ["Laravel", "MySQL", "Javascript"],
    result: "Reducción del 40% en tiempos de respuesta",
    image: "/projects/project-4.jpg",
    images: [
      "/projects/project-4.jpg", 
      "/projects/project-4-a.jpg", // Añade tus imágenes reales aquí
      "/projects/project-4-b.jpg",
      "/projects/project-4-c.jpg",
      "/projects/project-4-d.jpg",
      "/projects/project-4-e.jpg",
      "/projects/project-4-f.jpg",
      "/projects/project-4-g.jpg",
      "/projects/project-4-h.jpg",
      "/projects/project-4-i.jpg"
    ],
    caseStudy: {
      problem: "El cliente tenía un sistema monolítico que colapsaba con más de 500 usuarios concurrentes.",
      solution: "Migré la arquitectura a microservicios usando Next.js y AWS, implementando caché con Redis.",
      outcome: "El sistema ahora soporta 5,000 usuarios concurrentes y los tiempos de carga bajaron de 4s a 1.2s."
    }
  },

  {
    title: "Branding Beach House",
    description: "Diseño de identidad visual y branding para una casa de playa, incluyendo logotipo, paleta de colores y página web promocional.",
    stack: ["Ilustrator", "Photoshop", "Javascript"],
    result: "Reducción del 40% en tiempos de respuesta",
    image: "/projects/project-5.jpg",
    images: [
      "/projects/project-5.jpg", 
      "/projects/project-5-a.jpg", // Añade tus imágenes reales aquí
      "/projects/project-5-b.jpg"
    ],
    caseStudy: {
      problem: "El cliente tenía un sistema monolítico que colapsaba con más de 500 usuarios concurrentes.",
      solution: "Migré la arquitectura a microservicios usando Next.js y AWS, implementando caché con Redis.",
      outcome: "El sistema ahora soporta 5,000 usuarios concurrentes y los tiempos de carga bajaron de 4s a 1.2s."
    }
  },

  {
    title: "Branding Tienda de Ropa",
    description: "Diseño de identidad visual y branding para una tienda de ropa, incluyendo logotipo, paleta de colores y página web promocional.",
    stack: ["Ilustrator", "Photoshop", "Javascript"],
    result: "Reducción del 40% en tiempos de respuesta",
    image: "/projects/project-6.jpg",
    images: [
      "/projects/project-6.jpg", 
      "/projects/project-6-a.jpg", // Añade tus imágenes reales aquí
      "/projects/project-6-b.jpg",
      "/projects/project-6-c.jpg"
    ],
    caseStudy: {
      problem: "El cliente tenía un sistema monolítico que colapsaba con más de 500 usuarios concurrentes.",
      solution: "Migré la arquitectura a microservicios usando Next.js y AWS, implementando caché con Redis.",
      outcome: "El sistema ahora soporta 5,000 usuarios concurrentes y los tiempos de carga bajaron de 4s a 1.2s."
    }
  },
];