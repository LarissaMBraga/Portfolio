
import Container from "./Container";
import { Button } from "./ui/Button";
import { PERSONAL_INFO } from "../lib/constants";

export default function Hero() {
  return (
    <section id="home" className="pt-8 md:pt-12">
      <Container>
        <div className="overflow-hidden rounded-3xl bg-[#0A0A0A] text-white shadow-2xl">
          <div className="grid min-h-[560px] items-center gap-12 p-7 md:p-12 lg:grid-cols-[1.3fr_0.7fr] lg:p-16">
            <div>
              <div className="mb-8 flex items-center gap-3 font-mono text-xs text-white/40">
                <span className="h-2 w-2 rounded-full bg-[#FF4D00]" />
                <span>frontend-developer.tsx</span>
              </div>

              <p className="font-mono text-sm text-white/40">
                const developer = {"{"}
              </p>

              <h1 className="mt-5 max-w-4xl text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                {PERSONAL_INFO.name}
                <span className="text-[#FF4D00]">.</span>
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

            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur sm:p-6">
              <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
                <span className="font-mono text-xs text-white/40">
                  developer.config
                </span>

                <span className="rounded-full bg-white/10 px-3 py-1 text-xs text-white/60">
                  Brazil · Global
                </span>
              </div>

              <div className="space-y-5 font-mono text-sm">
                <div>
                  <span className="text-[#FF4D00]">role:</span>{" "}
                  <span className="text-white/70">
                    &quot;Frontend Web Developer&quot;
                  </span>
                </div>

                <div>
                  <span className="text-[#FF4D00]">
                    available:
                  </span>{" "}
                  <span className="text-green-400">true</span>
                </div>

                <div>
                  <span className="text-[#FF4D00]">stack:</span>

                  <div className="mt-3 flex flex-wrap gap-2">
                    {[
                      "React",
                      "Next.js",
                      "TypeScript",
                      "Tailwind CSS",
                    ].map((technology) => (
                      <span
                        key={technology}
                        className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-white/60"
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
