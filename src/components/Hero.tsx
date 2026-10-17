import { useEffect, useState } from "react";
import Container from "./Container";
import { Button } from "./ui/Button";
import { PERSONAL_INFO } from "../lib/constants";
import TechMarquee from "./TechMarquee";

function useTypewriter(text: string, start: boolean, speed = 40) {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    if (!start) return;

    let index = 0;
    setDisplayedText("");

    const timer = window.setInterval(() => {
      index++;
      setDisplayedText(text.slice(0, index));

      if (index >= text.length) {
        window.clearInterval(timer);
      }
    }, speed);

    return () => window.clearInterval(timer);
  }, [text, start, speed]);

  return displayedText;
}

export default function Hero() {
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => setStarted(true), 100);
    return () => window.clearTimeout(timer);
  }, []);

  const name = useTypewriter(PERSONAL_INFO.name, started, 100);
  const description = useTypewriter(
    "Frontend Web Developer focused on building responsive, maintainable and thoughtful web interfaces.",
    name.length === PERSONAL_INFO.name.length,
    22
  );
  const role = useTypewriter(
    '"Frontend Web Developer"',
    description.length ===
    "Frontend Web Developer focused on building responsive, maintainable and thoughtful web interfaces.".length,
    35
  );
  const available = useTypewriter(
    "true",
    role.length === '"Frontend Web Developer"'.length,
    100
  );
  const stack = useTypewriter(
    "React, Next.js, TypeScript, Tailwind CSS",
    available.length === 4,
    55
  );
  const comments = useTypewriter(
    "// Turning ideas into interfaces.\n// Building for the web.",
    stack.length === "React, Next.js, TypeScript, Tailwind CSS".length,
    30
  );

  return (
    <section id="home" className="pt-8 md:pt-12">
      <Container>
        <div className="group relative overflow-hidden rounded-3xl bg-[#0A0A0A] text-white shadow-[0_15px_50px_rgba(255,77,0,0.55)]">
          <div className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-[#FF4D00]/10 blur-3xl transition-all duration-1000 group-hover:bg-[#FF4D00]/20" />

          <div className="pointer-events-none absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-[#FF4D00]/5 blur-3xl transition-all duration-1000 group-hover:bg-[#FF4D00]/10" />

          <div className="relative grid min-h-[560px] items-center gap-12 p-7 md:p-12 lg:grid-cols-[1.3fr_0.7fr] lg:p-16">
            <div>
              <div className="mb-8 flex items-center gap-3 font-mono text-xs text-white/40">
                <span className="h-2 w-2 animate-pulse rounded-full bg-[#FF4D00] shadow-[0_0_12px_#FF4D00]" />

                <span>
                  frontend-developer.tsx
                  <span className="ml-1 animate-[blink_0.55s_step-end_infinite] text-[#FF4D00]">|</span>
                </span>
              </div>

              <p className="font-mono text-sm text-white/40">
                const developer = {"{"}
              </p>

              <h1 className="mt-5 min-h-[1.05em] max-w-4xl text-4xl font-bold leading-[1.05] tracking-tight transition-transform duration-500 group-hover:translate-x-1 sm:text-5xl md:text-6xl lg:text-7xl">
                {name}
                <span className="text-[#FF4D00]">.</span>
                {name.length < PERSONAL_INFO.name.length && (
                  <span className="animate-[blink_0.55s_step-end_infinite] text-[#FF4D00]">|</span>
                )}
              </h1>

              <p className="mt-6 min-h-[6rem] max-w-2xl whitespace-pre-wrap text-lg leading-8 text-white/60 md:text-xl">
                {description}
                {description.length < "Frontend Web Developer focused on building responsive, maintainable and thoughtful web interfaces.".length && (
                  <span className="animate-[blink_0.55s_step-end_infinite] text-[#FF4D00]">|</span>
                )}
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button href="#skills">Explore skills</Button>
                <Button href={`mailto:${PERSONAL_INFO.email}`} variant="ghost-dark">
                  Let&apos;s talk
                </Button>
              </div>

              <p className="mt-10 font-mono text-sm text-white/40">{"}"}</p>
            </div>

            <div className="group/card rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur shadow-[0_12px_35px_rgba(255,77,0,0.28)] transition-all duration-500 hover:-translate-y-2 hover:border-[#FF4D00]/40 hover:shadow-[0_18px_45px_rgba(255,77,0,0.42)] sm:p-6">
              <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
                <span className="font-mono text-xs text-white/40">developer.config</span>

                <span className="rounded-full bg-white/10 px-3 py-1 text-xs text-white/60 transition-colors duration-300 group-hover/card:bg-[#FF4D00]/10 group-hover/card:text-[#FF8A5B]">
                  Brazil · Global
                </span>
              </div>

              <div className="min-h-[240px] space-y-5 font-mono text-sm">
                <div>
                  <span className="text-[#FF4D00]">role:</span>{" "}
                  <span className="text-white/70">{role}</span>
                  {role.length < '"Frontend Web Developer"'.length && description.length === "Frontend Web Developer focused on building responsive, maintainable and thoughtful web interfaces.".length && (
                    <span className="animate-[blink_0.55s_step-end_infinite] text-[#FF4D00]">|</span>
                  )}
                </div>

                <div>
                  <span className="text-[#FF4D00]">available:</span>{" "}
                  <span className="text-green-400">{available}</span>
                </div>

                <div>
                  <span className="text-[#FF4D00]">stack:</span>
                  <div className="mt-3 flex flex-wrap gap-2 text-white/60">
                    {stack.split(", ").filter(Boolean).map((technology) => (
                      <span
                        key={technology}
                        className="rounded-full border border-white/10 px-3 py-1.5 text-xs transition-all duration-300 hover:-translate-y-1 hover:border-[#FF4D00]/50 hover:bg-[#FF4D00]/10 hover:text-white"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="border-t border-white/10 pt-4 text-xs leading-6 text-white/30">
                  {comments.split("\n").map((line, index) => (
                    <div key={index}>{line}</div>
                  ))}
                  {comments !== "// Turning ideas into interfaces.\n// Building for the web." && (
                    <span className="animate-[blink_0.55s_step-end_infinite] text-[#FF4D00]">_</span>
                  )}
                </div>
              </div>
            </div>
          </div>

          <a
            href="#about"
            className="absolute bottom-5 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-[10px] font-mono uppercase tracking-[0.25em] text-white/30 transition-colors duration-300 hover:text-[#FF4D00] md:flex"
            aria-label="Scroll to About section"
          >
            <span>Scroll</span>
            <span className="animate-bounce text-[#FF4D00]">↓</span>
          </a>
        </div>
        <div className="pt-10 md:pt-8">
          <TechMarquee />
        </div>
      </Container>
    </section>
  );
}