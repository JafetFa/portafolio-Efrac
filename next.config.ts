import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
  experimental: {
    optimizePackageImports: ["lucide-react", "framer-motion"],
  },
  // Habilita compresión para mejor rendimiento
  compress: true,
  // Desactiva el header de Next.js por seguridad
  poweredByHeader: false,
};

export default nextConfig;