

"use client";
import dynamic from "next/dynamic";
const Hero = dynamic(() => import("../components/Hero"));
const About = dynamic(() => import("../components/About"));
const Projects = dynamic(() => import("../components/Projects"));
const Contact = dynamic(() => import("../components/Contact"));
const Footer = dynamic(() => import("../components/Footer"));

export default function Home() {
  return (
    <main className="bg-background text-foreground font-sans">
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
// ...existing code...
