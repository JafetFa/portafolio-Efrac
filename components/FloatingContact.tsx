"use client";

import { motion } from "framer-motion";
import { InstagramIcon } from "@/components/icons";

export function FloatingContact() {
  return (
    <motion.a
      href="https://www.instagram.com/jafetfarias07/"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por Instagram"
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 1.2, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ scale: 1.06 }}
      whileTap={{ scale: 0.96 }}
      className="fixed bottom-6 right-6 z-40 h-14 w-14 rounded-full bg-primary text-primary-foreground shadow-xl shadow-primary/30 inline-flex items-center justify-center hover:bg-primary/90 transition-colors"
    >
      <InstagramIcon className="h-6 w-6" />
    </motion.a>
  );
}