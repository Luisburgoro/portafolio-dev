import { Container } from "@/components/layout/Container";
import { FadeIn } from "@/components/ui/FadeIn";

export function About() {
  return (

      <section id="about" className="py-32">
        <FadeIn>
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1fr_2fr]">

            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
                Sobre mí
              </p>

              <h2 className="mt-4 text-4xl font-bold text-white">
                Construyendo soluciones digitales.
              </h2>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
              <p className="text-lg leading-8 text-zinc-300">
                Soy Ingeniero Civil Informático con orientación al desarrollo Full
                Stack. Me gusta construir aplicaciones modernas utilizando React,
                Next.js, Node.js y TypeScript, enfocándome en escribir código
                limpio, escalable y fácil de mantener.
              </p>

              <p className="mt-6 text-lg leading-8 text-zinc-400">
                Actualmente continúo fortaleciendo mis habilidades mediante
                proyectos personales y aprendizaje continuo, buscando incorporarme
                a un equipo donde pueda aportar valor y seguir creciendo como
                desarrollador.
              </p>
            </div>

          </div>
        </Container>
        </FadeIn>
      </section>
  
  );
}