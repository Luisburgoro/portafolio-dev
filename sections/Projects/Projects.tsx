import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { projects } from "@/data/projects";
import { FadeIn } from "@/components/ui/FadeIn";
import { ProjectCard } from "@/components/project/ProjectCard";

export function Projects() {
  return (

    <section id="projects" className="py-32">
      <FadeIn>
        <Container>

          <div className="mb-16">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
              Proyectos
            </p>

            <h2 className="mt-4 text-5xl font-bold tracking-tight text-white">
              Proyectos destacados
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
              Algunos de los proyectos que reflejan mi experiencia en desarrollo Full Stack,
              aplicaciones móviles e Internet de las Cosas (IoT).
            </p>
          </div>

          <div className="space-y-16">

            {projects.map((project) => (

              <ProjectCard
                key={project.title}
                project={project}
              />


            ))}

          </div>

        </Container>
      </FadeIn>
    </section>

  );
}