import { Hero } from "@/components/sections/Hero";
import { Metrics } from "@/components/sections/Metrics";
import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";
import { Stack } from "@/components/sections/Stack";
import { Projects } from "@/components/sections/Projects";
import { Experience } from "@/components/sections/Experience";
import { Testimonial } from "@/components/sections/Testimonial";
import { Gallery } from "@/components/sections/Gallery";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Jafet Farías",
    jobTitle: "Ingeniero Fullstack",
    url: "https://jafetfarias.vercel.app",
    sameAs: ["https://www.instagram.com/jafetfarias07/"],
    knowsAbout: [
      "Desarrollo Fullstack",
      "Infraestructura Cloud",
      "Inteligencia Artificial",
      "Next.js",
      "AWS",
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <Metrics />
      <About />
      <Services />
      <Stack />
      <Projects />
      <Experience />
      <Testimonial />
      <Gallery />
      <Contact />
    </>
  );
}