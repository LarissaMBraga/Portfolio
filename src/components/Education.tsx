import { useEffect, useRef, useState } from "react";
import Container from "./Container";
import ScrollReveal from "./ScrollRevel";
import {
  EDUCATION,
  INTERNATIONAL_EXPERIENCE,
  LANGUAGES,
} from "../lib/constants";

export default function Education() {
  const timelineRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const [activeItems, setActiveItems] = useState<boolean[]>([]);
  const [honorsCount, setHonorsCount] = useState(0);
  const honorsRef = useRef<HTMLDivElement>(null);

  const timelineItems = [
    ...EDUCATION.map((item) => ({
      period: item.period,
      course: item.course,
      institution: item.institution,
      description: item.description,
      type: "education",
    })),
    {
      period: INTERNATIONAL_EXPERIENCE.period,
      course: "International Experience",
      institution: INTERNATIONAL_EXPERIENCE.institution,
      description: INTERNATIONAL_EXPERIENCE.description,
      type: "international",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (!timelineRef.current) return;

      const rect = timelineRef.current.getBoundingClientRect();
      const viewportPoint = window.innerHeight * 0.55;

      const totalHeight = rect.height;
      const currentPosition = viewportPoint - rect.top;

      const percentage = Math.max(
        0,
        Math.min(100, (currentPosition / totalHeight) * 100)
      );

      setProgress(percentage);

      const points = Array.from(
        timelineRef.current.querySelectorAll(".timeline-point")
      );

      setActiveItems(
        points.map((point) => {
          const pointRect = point.getBoundingClientRect();
          return pointRect.top <= viewportPoint;
        })
      );
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (!honorsRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        let current = 0;

        const interval = window.setInterval(() => {
          current += 1;
          setHonorsCount(current);

          if (current >= 7) {
            window.clearInterval(interval);
          }
        }, 200);

        observer.disconnect();
      },
      { threshold: 0.5 }
    );

    observer.observe(honorsRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="education"
      className="bg-[#F5F1EC] py-20 sm:py-28"
    >
      <Container>
        <ScrollReveal direction="left">
          <div className="mb-12">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#FF4D00]">
              Education
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              Always learning.
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid gap-10 lg:grid-cols-[1.3fr_0.7fr]">
          {/* Timeline */}
          <div
            ref={timelineRef}
            className="relative pl-10"
          >
            {/* Background line */}
            <div className="absolute left-[7px] top-3 bottom-3 w-[2px] bg-black/10">
              {/* Animated orange line */}
              <div
                className="absolute left-0 top-0 w-full bg-[#FF4D00] transition-[height] duration-150"
                style={{
                  height: `${progress}%`,
                }}
              />
            </div>

            <div className="space-y-6">
              {timelineItems.map((item, index) => (
                <div
                  key={`${item.institution}-${item.course}-${index}`}
                  className="relative"
                >
                  {/* Timeline point */}
                  <div
                    className={`timeline-point absolute -left-[40px] top-7 z-10 h-4 w-4 rounded-full border-4 border-[#F5F1EC] transition-all duration-500 ${
                      activeItems[index]
                        ? "scale-125 bg-[#FF4D00] shadow-[0_0_15px_rgba(255,77,0,0.45)]"
                        : "bg-black/20"
                    }`}
                  />

                  <ScrollReveal
                    direction="left"
                    delay={index * 100}
                  >
                    <article className="rounded-2xl border border-black/5 bg-[#FFFCF9] p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                      <p className="text-sm text-[#FF4D00]">
                        {item.period}
                      </p>

                      <h3 className="mt-2 text-lg font-semibold">
                        {item.course}
                      </h3>

                      <p className="mt-1 text-sm text-black/60">
                        {item.institution}
                      </p>

                      <p className="mt-4 text-sm leading-6 text-black/65">
                        {item.description}
                      </p>
                    </article>
                  </ScrollReveal>
                </div>
              ))}
            </div>
          </div>

          {/* Honors + Languages */}
          <div className="space-y-4">
            <ScrollReveal direction="right" delay={100}>
              <article
                ref={honorsRef}
                className="rounded-2xl bg-black p-6 text-white transition-transform duration-300 hover:-translate-y-1 sm:p-8"
              >
                <p className="text-sm text-[#FF7A45]">
                  Academic Honors
                </p>

                <div className="mt-6">
                  <div className="flex items-end gap-3">
                    <span className="text-7xl font-bold tracking-[-0.06em] text-white">
                      {honorsCount}
                    </span>

                    <span className="pb-2 text-lg text-white/50">
                      times
                    </span>
                  </div>

                  <h3 className="mt-4 text-xl font-semibold">
                    Academic Honors List
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-white/60">
                    Recognized 7 times on the Academic Honors List during
                    the 2024–2025 and 2025–2026 academic years.
                  </p>
                </div>
              </article>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={200}>
              <article className="rounded-2xl border border-black/5 bg-[#FFFCF9] p-6 transition-transform duration-300 hover:-translate-y-1 hover:shadow-md sm:p-8">
                <h3 className="text-lg font-semibold">
                  Languages
                </h3>

                <div className="mt-5 space-y-4">
                  {LANGUAGES.map((language) => (
                    <div
                      key={language.name}
                      className="flex items-center justify-between gap-4 text-sm"
                    >
                      <span>{language.name}</span>

                      <span className="text-black/55">
                        {language.level}
                      </span>
                    </div>
                  ))}
                </div>
              </article>
            </ScrollReveal>
          </div>
        </div>
      </Container>
    </section>
  );
}