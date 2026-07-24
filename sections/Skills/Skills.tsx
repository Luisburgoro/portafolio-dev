import { Container } from "@/components/layout/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { Card } from "@/components/ui/Card";

import {
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiFirebase,
  SiMongodb,
  SiMysql,
  SiGit,
  SiGithub,
  SiFlask

} from "react-icons/si";

const skills = [
  {
    title: "Frontend",
    items: [
      { name: "Next.js", icon: SiNextdotjs },
      { name: "React", icon: SiReact },
      { name: "TypeScript", icon: SiTypescript },
      { name: "Tailwind CSS", icon: SiTailwindcss },
    ],
  },
  {
    title: "Backend",
    items: [
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Express", icon: SiExpress },
      { name: "Flask", icon: SiFlask }

    ],
  },
  {
    title: "Bases de Datos",
    items: [
      { name: "Firebase", icon: SiFirebase },
      { name: "MongoDB", icon: SiMongodb },
      { name: "MySQL", icon: SiMysql },
    ],
  },
  {
    title: "Herramientas",
    items: [
      { name: "Git", icon: SiGit },
      { name: "GitHub", icon: SiGithub }
      

    ],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-32">
      <Container>
        <FadeIn>

          <div className="mb-16">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
              Skills
            </p>

            <h2 className="mt-4 text-4xl font-bold text-white">
              Tecnologías
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2">

            {skills.map((category) => (
              <Card key={category.title}>

                <h3 className="mb-8 text-2xl font-semibold text-white">
                  {category.title}
                </h3>

                <div className="grid grid-cols-2 gap-6">

                  {category.items.map((item) => {
                    const Icon = item.icon;

                    return (
                      <div
                        key={item.name}
                        className="flex flex-col items-center rounded-2xl border border-white/10 bg-white/5 p-6 transition-all duration-300 hover:border-blue-500/40 hover:bg-blue-500/10"
                      >
                        <Icon size={42} />

                        <span className="mt-4 text-center text-sm text-zinc-300">
                          {item.name}
                        </span>
                      </div>
                    );
                  })}

                </div>

              </Card>
            ))}

          </div>

        </FadeIn>
      </Container>
    </section>
  );
}