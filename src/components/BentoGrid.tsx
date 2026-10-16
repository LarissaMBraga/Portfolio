import Container from "./Container";
import ScrollReveal from "./ScrollRevel";
import { SKILLS } from "../lib/constants";

export default function BentoGrid() {
  return (
    <section id="skills" className="scroll-mt-24 pb-20 md:pb-28">
      <Container>
        <ScrollReveal direction="left">
          <div className="mb-8">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-accent">
              Skills
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-5xl">
              A frontend-first toolkit.
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-12 lg:gap-6">
          {/* Frontend */}
          <ScrollReveal
            direction="left"
            delay={100}
            className="lg:col-span-7"
          >
            <div className="h-full rounded-4xl border border-black/5 bg-white p-7 shadow-soft transition-transform duration-300 hover:-translate-y-1 md:p-9">
              <p className="text-sm text-black/40">
                01 / Frontend
              </p>

              <h3 className="mt-12 text-2xl font-bold md:text-3xl">
                Reusable components.
              </h3>

              <p className="mt-4 max-w-xl leading-7 text-black/60">
                Building interfaces as reusable pieces makes products easier
                to maintain, scale and improve.
              </p>

              <div className="mt-8 flex flex-wrap gap-2">
                {SKILLS[0].technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-full bg-black/5 px-4 py-2 text-sm transition-all duration-300 hover:-translate-y-1 hover:bg-[#FF4D00]/10"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Responsive */}
          <ScrollReveal
            direction="right"
            delay={200}
            className="lg:col-span-5"
          >
            <div className="h-full rounded-4xl bg-dark p-7 text-white transition-transform duration-300 hover:-translate-y-1 md:p-9">
              <p className="text-sm text-white/40">
                02 / Responsive
              </p>

              <div className="mt-12">
                <div className="text-6xl font-bold tracking-[-0.05em] md:text-7xl">
                  Mobile
                </div>

                <p className="mt-4 max-w-sm leading-7 text-white/50">
                  Mobile-first layouts designed to adapt across phones,
                  tablets and large desktop screens.
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Remaining skills */}
          {SKILLS.slice(1).map((skill, index) => (
            <ScrollReveal
              key={skill.title}
              direction={index % 2 === 0 ? "left" : "right"}
              delay={(index + 3) * 100}
              className={index === 0 ? "lg:col-span-5" : "lg:col-span-7"}
            >
              <div
                className={`h-full rounded-4xl border border-black/5 p-7 transition-transform duration-300 hover:-translate-y-1 md:p-9 ${
                  index === 0
                    ? "bg-accent text-white"
                    : "bg-white shadow-soft"
                }`}
              >
                <p
                  className={`text-sm ${
                    index === 0
                      ? "text-white/60"
                      : "text-black/40"
                  }`}
                >
                  0{index + 3} / {skill.title}
                </p>

                <h3 className="mt-10 text-2xl font-bold">
                  {skill.title}
                </h3>

                <p
                  className={`mt-4 leading-7 ${
                    index === 0
                      ? "text-white/70"
                      : "text-black/60"
                  }`}
                >
                  {skill.description}
                </p>

                <div className="mt-7 flex flex-wrap gap-2">
                  {skill.technologies.map((technology) => (
                    <span
                      key={technology}
                      className={`rounded-full px-3 py-1.5 text-xs transition-all duration-300 hover:-translate-y-1 ${
                        index === 0
                          ? "bg-white/10 text-white hover:bg-white/20"
                          : "bg-black/5 text-black/70 hover:bg-[#FF4D00]/10"
                      }`}
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}