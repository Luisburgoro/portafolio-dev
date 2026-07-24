import { portfolio } from "@/data/portafolio";
import { Container } from "@/components/layout/Container";
import { FadeIn } from "@/components/ui/FadeIn";

export function Education() {
  return (
    <section id="education" className="py-32">
      <FadeIn>
        <Container>
          <div className="mb-16">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
              Educación
            </p>

            <h2 className="mt-4 text-4xl font-bold text-white">
              Formación Académica
            </h2>
          </div>

          <div className="relative border-l border-white/10 pl-10">
            {portfolio.education.map((item, index) => (
              <div key={index} className="relative mb-16 last:mb-0">

                <div className="absolute -left-[46px] top-2 h-5 w-5 rounded-full border-4 border-[#09090B] bg-blue-500" />

                <span className="text-sm text-blue-400">
                  {item.period}
                </span>

                <h3 className="mt-2 text-2xl font-semibold text-white">
                  {item.degree}
                </h3>

                <p className="mt-2 text-zinc-300">
                  {item.university}
                </p>

                <p className="text-zinc-500">
                  {item.location}
                </p>

                <span className="mt-4 inline-flex rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-sm text-blue-300">
                  {item.status}
                </span>

              </div>
            ))}
          </div>
        </Container>
      </FadeIn>
    </section>
  );
}