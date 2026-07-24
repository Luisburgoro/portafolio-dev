"use client";

import { Container } from "./Container";
import { useActiveSection } from "@/hooks/useActivationSection";
const links = [
  { name: "Sobre mí", href: "#about" },
  { name: "Educación", href: "#education" },
  { name: "Skills", href: "#skills" },
  { name: "Proyectos", href: "#projects" },
  { name: "Cursos", href: "#courses" },
  { name: "Contacto", href: "#contact" },
];

export function Navbar() {

  const active = useActiveSection();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-[#09090B]/70 backdrop-blur-xl">
      <Container className="flex h-20 items-center justify-between">

        <a
          href="#"
          className="text-xl font-bold tracking-wide text-white"
        >
          Luis Burgos
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`
group relative text-sm transition
${active === link.href.slice(1)
                  ? "text-white"
                  : "text-zinc-400 hover:text-white"}
`}
            >
              {link.name}

              <span
                className={`
absolute
-bottom-2
left-0
h-[2px]
bg-blue-500
transition-all
duration-300
${active === link.href.slice(1)
                    ? "w-full"
                    : "w-0 group-hover:w-full"}
`}
              />
            </a>
          ))}
        </nav>

      </Container>
    </header>
  );
}