
import Container from "./Container";
import {
  EDUCATION,
  INTERNATIONAL_EXPERIENCE,
  LANGUAGES,
} from "../lib/constants";

export default function Education() {
  return (
    <section id="education" className="bg-[#F5F1EC] py-20 sm:py-28">
      <Container>
        <div className="mb-12">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#FF4D00]">
            04 / Education
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
            Always learning.
          </h2>
        </div>

        <div className="grid gap-10 lg:grid-cols-[1.3fr_0.7fr]">
          <div className="space-y-4">
            {EDUCATION.map((item) => (
              <article
                key={`${item.institution}-${item.course}`}
                className="rounded-2xl border border-black/5 bg-[#FFFCF9] p-6"
              >
                <p className="text-sm text-[#FF4D00]">{item.period}</p>
                <h3 className="mt-2 text-lg font-semibold">{item.course}</h3>
                <p className="mt-1 text-sm text-black/60">{item.institution}</p>
                <p className="mt-4 text-sm leading-6 text-black/65">
                  {item.description}
                </p>
              </article>
            ))}
          </div>

          <div className="space-y-4">
            <article className="rounded-2xl bg-black p-6 text-white sm:p-8">
              <p className="text-sm text-[#FF7A45]">
                International experience
              </p>
              <h3 className="mt-3 text-xl font-semibold">
                {INTERNATIONAL_EXPERIENCE.institution}
              </h3>
              <p className="mt-1 text-sm text-white/60">
                {INTERNATIONAL_EXPERIENCE.location} ·{" "}
                {INTERNATIONAL_EXPERIENCE.period}
              </p>
              <p className="mt-5 text-sm leading-6 text-white/75">
                {INTERNATIONAL_EXPERIENCE.description}
              </p>
            </article>

            <article className="rounded-2xl border border-black/5 bg-[#FFFCF9] p-6 sm:p-8">
              <h3 className="text-lg font-semibold">Languages</h3>
              <div className="mt-5 space-y-4">
                {LANGUAGES.map((language) => (
                  <div
                    key={language.name}
                    className="flex items-center justify-between gap-4 text-sm"
                  >
                    <span>{language.name}</span>
                    <span className="text-black/55">{language.level}</span>
                  </div>
                ))}
              </div>
            </article>
          </div>
        </div>
      </Container>
    </section>
  );
}
