import Container from "./Container";
import ScrollReveal from "./ScrollRevel";
import { ABOUT_TEXT } from "../lib/constants";

export default function About() {
  return (
    <section id="about" className="border-t border-black/10 py-20 sm:py-28">
      <Container>
        <div className="grid gap-10 md:grid-cols-[0.7fr_1.3fr] md:gap-20">
          <ScrollReveal direction="left">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#FF4D00]">
                01 / About
              </p>

              <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
                A little about me.
              </h2>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={100}>
            <div>
              <p className="text-lg leading-8 text-black/70">
                {ABOUT_TEXT}
              </p>

              <p className="mt-5 text-lg leading-8 text-black/70">
                I'm especially interested in frontend development, interface
                quality, and solving practical problems through technology.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </Container>
    </section>
  );
}