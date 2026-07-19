import { portfolio } from "@/data/portafolio";
import { Container } from "@/components/layout/Container";
import { ProfileImage } from "@/components/hero/ProfileImage";
import {
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

import {
  MdEmail
} from "react-icons/md";

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center">
      <Container>
        <div className="grid min-h-[calc(100vh-4rem)] items-center gap-24 lg:grid-cols-2">

          <div className="max-w-2xl">

            <span className="inline-flex rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-300">
              {portfolio.personal.role}
            </span>

            <h1 className="mt-8 text-5xl md:text-6xl xl:text-7xl font-extrabold tracking-tight text-white md:text-7xl">
              {portfolio.personal.name}
            </h1>

            <h2 className="mt-6 text-2xl font-semibold text-zinc-300">
              {portfolio.personal.headline}
            </h2>

            <div className="mt-8 h-px w-100 bg-gradient-to-r from-blue-500 to-violet-500" />

            <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
              {portfolio.personal.description}
            </p>

            <div className="mt-12 flex flex-wrap gap-4">

              <a
                href={portfolio.personal.github}
                target="_blank"
                className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-3 transition hover:border-blue-500 hover:bg-blue-500/10"
              >
                <FaGithub size={18} />
                GitHub
              </a>

              <a
                href={portfolio.personal.linkedin}
                target="_blank"
                className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-3 transition hover:border-blue-500 hover:bg-blue-500/10"
              >
                <FaLinkedin size={18} />

                LinkedIn
              </a>

              <a
                href={`mailto:${portfolio.personal.email}`}
                className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-3 transition hover:border-blue-500 hover:bg-blue-500/10"
              >
                <MdEmail size={18} />
                Correo
              </a>

            </div>
                  </div>
            <div className="hidden lg:flex items-center justify-center">
              <ProfileImage />
            </div>
          </div>
  

      </Container>
    </section>
  );
}