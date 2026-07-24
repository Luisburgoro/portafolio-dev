import Image from "next/image";
import { FaGithub, FaArrowUpRightFromSquare } from "react-icons/fa6";

import { Card } from "@/components/ui/Card";
import { TechBadge } from "./TechBadge";

interface Project {
  title: string;
  description: string;
  image: string;
  status: string;
  technologies: string[];
  github: string;
  demo?: string;
}

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="overflow-hidden p-0">
      <div className="grid lg:grid-cols-[1.2fr_1fr]">

        {/* Imagen */}

        <div className="group relative overflow-hidden">

          <Image
            src={project.image}
            alt={project.title}
            width={900}
            height={700}
            className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[#09090B]/70 via-transparent to-transparent" />

        </div>

        {/* Información */}

        <div className="flex flex-col p-10">

          <div className="flex items-center justify-between">

            <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-2 text-sm text-emerald-300">
              {project.status}
            </span>

            <div className="flex gap-3">

              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl border border-white/10 p-3 transition hover:border-blue-500 hover:bg-blue-500/10"
              >
                <FaGithub />
              </a>

              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-xl border border-white/10 p-3 transition hover:border-blue-500 hover:bg-blue-500/10"
                >
                  <FaArrowUpRightFromSquare />
                </a>
              )}

            </div>

          </div>

          <h3 className="mt-8 text-3xl font-bold text-white">
            {project.title}
          </h3>

          <p className="mt-6 flex-1 leading-8 text-zinc-300">
            {project.description}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">

            {project.technologies.map((tech) => (
              <TechBadge
                key={tech}
                tech={tech}
              />
            ))}

          </div>

        </div>

      </div>
    </Card>
  );
}