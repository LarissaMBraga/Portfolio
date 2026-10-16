import Container from "./Container";
import { Button } from "./ui/Button";
import { PERSONAL_INFO } from "../lib/constants";

export default function Hero() {
  return (
    <section id="home" className="pt-8 md:pt-12">
      <Container>
        <div className="group relative overflow-hidden rounded-3xl bg-[#0A0A0A] text-white shadow-2xl">
          {/* Ambient orange glow */}
          <div className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-[#FF4D00]/10 blur-3xl transition-all duration-1000 group-hover:bg-[#FF4D00]/20" />

          <div className="pointer-events-none absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-[#FF4D00]/5 blur-3xl transition-all duration-1000 group-hover:bg-[#FF4D00]/10" />

          <div className="relative grid min-h-[560px] items-center gap-12 p-7 md:p-12 lg:grid-cols-[1.3fr_0.7fr] lg:p-16">
            <div className="animate-[fadeIn_0.8s_ease-out]">
              <div className="mb-8 flex items-center gap-3 font-mono text-xs text-white/40">
                <span className="h-2 w-2 animate-pulse rounded-full bg-[#FF4D00] shadow-[0_0_12px_#FF4D00]" />

                <span>
                  frontend-developer.tsx
                  <span className="ml-1 animate-[blink_0.55s_step-end_infinite] text-[#FF4D00]">
                    |
                  </span>
                </span>
              </div>

              <p className="font-mono text-sm text-white/40">
                const developer = {"{"}
              </p>

              <h1 className="mt-5 max-w-4xl text-4xl font-bold leading-[1.05] tracking-tight transition-transform duration-500 group-hover:translate-x-1 sm:text-5xl md:text-6xl lg:text-7xl">
                {PERSONAL_INFO.name}
                <span className="text-[#FF4D00] transition-all duration-300 group-hover:text-[#ff6a2a] group-hover:drop-shadow-[0_0_14px_rgba(255,77,0,0.45)]">
                  .
                </span>
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/60 md:text-xl">
                Frontend Web Developer focused on building
                responsive, maintainable and thoughtful web
                interfaces.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button href="#skills">
                  Explore skills
                </Button>

                <Button
                  href={`mailto:${PERSONAL_INFO.email}`}
                  variant="ghost-dark"
                >
                  Let&apos;s talk
                </Button>
              </div>

              <p className="mt-10 font-mono text-sm text-white/40">
                {"}"}
              </p>
            </div>

            {/* Developer configuration card */}
            <div className="group/card rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur transition-all duration-500 hover:-translate-y-2 hover:border-[#FF4D00]/30 hover:bg-white/[0.06] hover:shadow-[0_20px_60px_rgba(255,77,0,0.08)] sm:p-6">
              <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
                <span className="font-mono text-xs text-white/40">
                  developer.config
                </span>

                <span className="rounded-full bg-white/10 px-3 py-1 text-xs text-white/60 transition-colors duration-300 group-hover/card:bg-[#FF4D00]/10 group-hover/card:text-[#FF8A5B]">
                  Brazil · Global
                </span>
              </div>

              <div className="space-y-5 font-mono text-sm">
                <div className="transition-transform duration-300 group-hover/card:translate-x-1">
                  <span className="text-[#FF4D00]">
                    role:
                  </span>{" "}
                  <span className="text-white/70">
                    &quot;Frontend Web Developer&quot;
                  </span>
                </div>

                <div className="transition-transform delay-75 duration-300 group-hover/card:translate-x-1">
                  <span className="text-[#FF4D00]">
                    available:
                  </span>{" "}
                  <span className="text-green-400">
                    true
                  </span>
                </div>

                <div className="transition-transform delay-100 duration-300 group-hover/card:translate-x-1">
                  <span className="text-[#FF4D00]">
                    stack:
                  </span>

                  <div className="mt-3 flex flex-wrap gap-2">
                    {[
                      "React",
                      "Next.js",
                      "TypeScript",
                      "Tailwind CSS",
                    ].map((technology) => (
                      <span
                        key={technology}
                        className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-white/60 transition-all duration-300 hover:-translate-y-1 hover:border-[#FF4D00]/50 hover:bg-[#FF4D00]/10 hover:text-white hover:shadow-[0_0_16px_rgba(255,77,0,0.12)]"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="border-t border-white/10 pt-4 text-xs leading-6 text-white/30">
                  {"// Turning ideas into interfaces."}
                  <br />
                  {"// Building for the web."}
                  <span className="ml-1 animate-[blink_0.55s_step-end_infinite] text-[#FF4D00]">
                    _
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Scroll indicator */}
          <a
            href="#about"
            className="absolute bottom-5 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-[10px] font-mono uppercase tracking-[0.25em] text-white/30 transition-colors duration-300 hover:text-[#FF4D00] md:flex"
            aria-label="Scroll to About section"
          >
            <span>Scroll</span>
            <span className="animate-bounce text-[#FF4D00]">
              ↓
            </span>
          </a>
        </div>
      </Container>
    </section>
  );
}