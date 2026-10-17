
import { useEffect, useRef } from "react";
import type { IconType } from "react-icons";

import {
  SiReact,
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiCss,
  SiTailwindcss,
  SiNextdotjs,
  SiAngular,
  SiNodedotjs,
  SiPython,
  SiOpenjdk,
  SiSharp,
  SiCplusplus,
  SiDart,
  SiFlutter,
  SiGit,
  SiJest,
} from "react-icons/si";

import { FaCode } from "react-icons/fa";

type Technology = {
  name: string;
  url: string;
  icon: IconType;
};

const technologies: Technology[] = [
  { name: "React", url: "https://react.dev/", icon: SiReact },
  { name: "TypeScript", url: "https://www.typescriptlang.org/docs/", icon: SiTypescript },
  { name: "JavaScript", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript", icon: SiJavascript },
  { name: "HTML5", url: "https://developer.mozilla.org/en-US/docs/Web/HTML", icon: SiHtml5 },
  { name: "CSS3", url: "https://developer.mozilla.org/en-US/docs/Web/CSS", icon: SiCss },
  { name: "Tailwind CSS", url: "https://tailwindcss.com/docs", icon: SiTailwindcss },
  { name: "Next.js", url: "https://nextjs.org/docs", icon: SiNextdotjs },
  { name: "Angular", url: "https://angular.dev/", icon: SiAngular },
  { name: "Node.js", url: "https://nodejs.org/docs/latest/api/", icon: SiNodedotjs },
  { name: "Python", url: "https://docs.python.org/3/", icon: SiPython },
  { name: "Java", url: "https://dev.java/learn/", icon: SiOpenjdk },
  { name: "C#", url: "https://learn.microsoft.com/en-us/dotnet/csharp/", icon: SiSharp },
  { name: "C++", url: "https://en.cppreference.com/w/", icon: SiCplusplus },
  { name: "Dart", url: "https://dart.dev/guides", icon: SiDart },
  { name: "Flutter", url: "https://docs.flutter.dev/", icon: SiFlutter },
  { name: "Git", url: "https://git-scm.com/doc", icon: SiGit },
  { name: "Jest", url: "https://jestjs.io/docs/getting-started", icon: SiJest },
  { name: "REST APIs", url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/Overview", icon: FaCode },
];

export default function TechMarquee() {
  const trackRef = useRef<HTMLDivElement>(null);
  const positionRef = useRef(0);
  const speedRef = useRef(35);
  const previousTimeRef = useRef<number | null>(null);

  useEffect(() => {
    let animationFrame = 0;

    const animate = (time: number) => {
      if (previousTimeRef.current !== null && trackRef.current) {
        const delta = Math.min(time - previousTimeRef.current, 40);
        const track = trackRef.current;
        const isHovered = track.matches(":hover");
        const targetSpeed = isHovered ? 12 : 35;

        speedRef.current +=
          (targetSpeed - speedRef.current) * (1 - Math.exp(-delta / 250));

        const halfWidth = track.scrollWidth / 2;

        if (halfWidth > 0) {
          positionRef.current =
            (positionRef.current + (delta / 1000) * (halfWidth / speedRef.current)) %
            halfWidth;

          track.style.transform = `translate3d(${-positionRef.current}px, 0, 0)`;
        }
      }

      previousTimeRef.current = time;
      animationFrame = requestAnimationFrame(animate);
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, []);

  const repeatedTechnologies = [...technologies, ...technologies];

  return (
    <section
      aria-label="Technologies and tools"
      className="tech-marquee relative w-full overflow-hidden py-6"
    >
      <div
        ref={trackRef}
        className="tech-marquee-track flex w-max items-center gap-10"
      >
        {repeatedTechnologies.map((technology, index) => {
          const Icon = technology.icon as React.ComponentType<{
            size?: number;
            color?: string;
            className?: string;
            "aria-hidden"?: boolean | "true" | "false";
          }>;

          return (
            <a
              key={`${technology.name}-${index}`}
              href={technology.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open ${technology.name} documentation`}
              className="group flex shrink-0 items-center gap-2.5 text-[#404040] transition-colors duration-300 hover:text-[#FF4D00]"
            >
              <Icon
                size={30}
                color="#404040"
                aria-hidden="true"
                className="shrink-0 transition-transform duration-300 group-hover:scale-110"
              />
              <span className="whitespace-nowrap font-mono text-sm">
                {technology.name}
              </span>
            </a>
          );
        })}
      </div>
    </section>
  );
}
