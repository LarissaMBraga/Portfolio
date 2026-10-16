import Container from "./Container";
import ScrollReveal from "./ScrollRevel";
import { EXPERIENCE } from "../lib/constants";

export default function Experience() {
  return (
    <section id="experience" className="bg-[#F5F1EC] py-20 sm:py-28">
      <Container>
        <ScrollReveal direction="left">
          <div className="mb-12">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#FF4D00]">
              02 / Experience
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              Where I've worked.
            </h2>
          </div>
        </ScrollReveal>

        <div className="space-y-6">
          {EXPERIENCE.map((job, index) => (
            <ScrollReveal
              key={`${job.company}-${job.period}`}
              direction={index % 2 === 0 ? "right" : "left"}
              delay={index * 100}
            >
              <article className="rounded-3xl border border-black/5 bg-[#FFFCF9] p-6 transition-transform duration-300 hover:-translate-y-1 sm:p-10">
                <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-start">
                  <div>
                    <p className="text-sm font-medium text-[#FF4D00]">
                      {job.company}
                    </p>

                    <h3 className="mt-2 text-2xl font-semibold">
                      {job.role}
                    </h3>
                  </div>

                  <p className="text-sm text-black/55">
                    {job.period}
                  </p>
                </div>

                <p className="mt-6 max-w-3xl leading-7 text-black/70">
                  {job.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {job.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full border border-black/10 px-3 py-1.5 text-xs text-black/70 transition-all duration-300 hover:-translate-y-1 hover:border-[#FF4D00]/40 hover:bg-[#FF4D00]/5"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}