import { Container } from "@/components/layout/Container";
import { portfolio } from "@/data/portafolio";
import { FadeIn } from "@/components/ui/FadeIn";

import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export function Contact() {
  return (

    <section id="contact" className="py-32">
      <FadeIn>
        <Container>
          <div className="mx-auto max-w-3xl text-center">

            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
              Contacto
            </p>

            <h2 className="mt-4 text-4xl font-bold text-white">
              ¿Trabajamos juntos?
            </h2>

            <p className="mt-6 text-lg leading-8 text-zinc-400">
              Estoy abierto a oportunidades como Desarrollador Full Stack,
              prácticas profesionales y proyectos freelance.
            </p>

            <div className="mt-12 flex flex-wrap justify-center gap-4">

              <a
                href={`mailto:${portfolio.personal.email}`}
                className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-6 py-3 transition hover:border-blue-500 hover:bg-blue-500/10"
              >
                <MdEmail size={20} />
                Correo
              </a>

              <a
                href={portfolio.personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-6 py-3 transition hover:border-blue-500 hover:bg-blue-500/10"
              >
                <FaGithub size={20} />
                GitHub
              </a>

              <a
                href={portfolio.personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-6 py-3 transition hover:border-blue-500 hover:bg-blue-500/10"
              >
                <FaLinkedin size={20} />
                LinkedIn
              </a>

            </div>

          </div>
        </Container>
      </FadeIn>
    </section>

  );
}