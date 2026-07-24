import { Navbar } from "@/components/layout/Navbar";
import { GridBackground } from "@/components/background/GridBackground";

import { Hero } from "@/sections/Hero/Hero";
import { About } from "@/sections/About/About";
import { Education } from "@/sections/Education/Education";
import { Skills } from "@/sections/Skills/Skills";
import { Projects } from "@/sections/Projects/Projects";
import { Courses } from "@/sections/Courses/Courses"
import { Contact } from "@/sections/Contact/Contact";
import { Footer } from "@/sections/Footer/Footer";

export default function Home() {
  return (
    <main
  className="relative min-h-screen overflow-x-hidden pt-20 text-white"
  style={{
    backgroundColor: "#09090B",
    backgroundImage: `
      radial-gradient(circle at 20% 20%, rgba(59,130,246,0.35), transparent 300px),
      radial-gradient(circle at 80% 80%, rgba(139,92,246,0.35), transparent 300px),
      linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)
    `,
    backgroundSize: "auto, auto, 48px 48px, 48px 48px",
  }}
>

      <Navbar />

      <Hero />

      <About />

      <Education />

      <Skills />

      <Projects />

      <Courses />

      <Contact />

      <Footer />

    </main>
  );
}