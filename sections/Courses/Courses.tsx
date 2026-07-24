import { Container } from "@/components/layout/Container";
import { courses } from "@/data/courses";
import { FadeIn } from "@/components/ui/FadeIn";

export function Courses() {
  return (

    <section id="courses" className="py-32">
      <FadeIn>
        <Container>

          <div className="mb-16">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
              Cursos y Certificaciones
            </p>

            <h2 className="mt-4 text-4xl font-bold text-white">
              Formación Complementaria
            </h2>
          </div>

          <div className="grid gap-6">

            {courses.map((course) => (
              <article
                key={course.title}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:border-blue-500/40"
              >
                <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">

                  <div>
                    <h3 className="text-xl font-semibold text-white">
                      {course.title}
                    </h3>

                    <p className="mt-2 text-zinc-400">
                      {course.institution}
                    </p>
                  </div>

                  <div className="flex items-center gap-4">

                    <span className="rounded-full bg-blue-500/10 px-4 py-2 text-sm text-blue-300">
                      {course.year}
                    </span>

                    <a
                      href={course.certificate}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-lg border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm text-blue-300 transition hover:bg-blue-500/20"
                    >
                      Ver diploma
                    </a>

                  </div>

                </div>
              </article>
            ))}

          </div>

        </Container>
      </FadeIn>
    </section>

  );
}