import { ReactNode, useEffect, useRef, useState } from "react";

type Direction = "left" | "right" | "bottom";

interface ScrollRevealProps {
  children: ReactNode;
  direction?: Direction;
  delay?: number;
  className?: string;
}

export default function ScrollReveal({
  children,
  direction = "bottom",
  delay = 0,
  className = "",
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.15,
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const directionClasses = {
    left: "-translate-x-16",
    right: "translate-x-16",
    bottom: "translate-y-16",
  };

  return (
    <div
      ref={ref}
      className={`
        ${className}
        transform
        transition-all
        duration-700
        ease-out
        ${
          isVisible
            ? "translate-x-0 translate-y-0 opacity-100"
            : `${directionClasses[direction]} opacity-0`
        }
      `}
      style={{
        transitionDelay: isVisible ? `${delay}ms` : "0ms",
      }}
    >
      {children}
    </div>
  );
}