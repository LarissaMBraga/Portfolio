import { useEffect, useState } from "react";
import Container from "./Container";
import ScrollReveal from "./ScrollRevel";
import { Button } from "./ui/Button";

const project = {
  title: "Pokémon Explorer",
  description:
    "An interactive Pokémon exploration experience featuring Pokémon discovery, detailed information, and evolution navigation.",
  technologies: ["React", "TypeScript", "Tailwind CSS", "REST API"],
  github: "https://github.com/LarissaMBraga/Pokemon-Explorer",
  demo: "https://pokeverselarissa.netlify.app/",
  images: [
    "/projects/pokemon/image1.png",
    "/projects/pokemon/image2.png",
    "/projects/pokemon/image3.png",
  ],
};

export default function Projects() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    if (!isExpanded) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsExpanded(false);
      }

      if (event.key === "ArrowLeft") {
        setCurrentImage((current) =>
          current === 0 ? project.images.length - 1 : current - 1
        );
      }

      if (event.key === "ArrowRight") {
        setCurrentImage((current) =>
          current === project.images.length - 1 ? 0 : current + 1
        );
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isExpanded]);

  const previousImage = () => {
    setCurrentImage((current) =>
      current === 0 ? project.images.length - 1 : current - 1
    );
  };

  const nextImage = () => {
    setCurrentImage((current) =>
      current === project.images.length - 1 ? 0 : current + 1
    );
  };

  const openProject = () => {
    setIsExpanded(true);
  };

  const closeProject = () => {
    setIsExpanded(false);
  };

  return (
    <section
      id="projects"
      className="border-t border-black/10 bg-[#FFFCF9] py-20 dark:border-white/10 dark:!bg-[#0A0A0A] sm:py-28"
    >
      <Container>
        <ScrollReveal direction="left">
          <div className="mb-10">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#FF4D00]">
              Selected work
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight dark:text-white sm:text-4xl">
              Projects I've built.
            </h2>
          </div>
        </ScrollReveal>

        <ScrollReveal direction="right" delay={100}>
          {/* Normal card */}
          <article
            onClick={openProject}
            className="group mx-auto max-w-2xl cursor-pointer overflow-hidden rounded-3xl border border-black/10 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-white/10 dark:bg-white/[0.03]"
          >
            {/* Image */}
            <div className="relative aspect-[16/9] overflow-hidden bg-[#0A0A0A]">
              <img
                src={project.images[currentImage]}
                alt={`${project.title} screenshot ${currentImage + 1}`}
                className="h-full w-full object-contain p-1 transition-transform duration-500 group-hover:scale-[1.01]"
              />

              {/* Previous */}
              <button
                type="button"
                onClick={(event) => {
                  event.stopPropagation();
                  previousImage();
                }}
                aria-label="Previous image"
                className="absolute left-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-black/60 text-lg text-white opacity-0 backdrop-blur-sm transition group-hover:opacity-100 hover:bg-black/80"
              >
                ‹
              </button>

              {/* Next */}
              <button
                type="button"
                onClick={(event) => {
                  event.stopPropagation();
                  nextImage();
                }}
                aria-label="Next image"
                className="absolute right-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-black/60 text-lg text-white opacity-0 backdrop-blur-sm transition group-hover:opacity-100 hover:bg-black/80"
              >
                ›
              </button>

              {/* Indicators */}
              <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5">
                {project.images.map((_, index) => (
                  <span
                    key={index}
                    className={`h-1.5 rounded-full transition-all ${
                      index === currentImage
                        ? "w-5 bg-white"
                        : "w-1.5 bg-white/50"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Card information */}
            <div className="p-5 sm:p-6">
              <h3 className="text-xl font-semibold tracking-tight dark:text-white">
                {project.title}
              </h3>

              <p className="mt-2 text-sm leading-6 text-black/60 dark:text-white/60">
                {project.description}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {project.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-full border border-black/10 bg-black/[0.03] px-2.5 py-1 text-xs font-medium text-black/65 dark:border-white/10 dark:bg-white/[0.05] dark:text-white/65"
                  >
                    {technology}
                  </span>
                ))}
              </div>

              <div className="mt-5 flex gap-3">
                <Button
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  variant="ghost"
                  className="dark:border-white/15 dark:bg-white/[0.05] dark:text-white dark:hover:border-white/30"
                  onClick={(event) => event.stopPropagation()}
                >
                  GitHub ↗
                </Button>

                <Button
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  variant="primary"
                  onClick={(event) => event.stopPropagation()}
                >
                  Live Demo ↗
                </Button>
              </div>
            </div>
          </article>
        </ScrollReveal>
      </Container>

      {/* Expanded card */}
      {isExpanded && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm sm:p-6"
          onClick={closeProject}
        >
          <div
            className="relative w-full max-w-3xl overflow-hidden rounded-3xl bg-[#FFFCF9] shadow-2xl dark:bg-[#111111]"
            onClick={(event) => event.stopPropagation()}
          >
            {/* Close */}
            <button
              type="button"
              onClick={closeProject}
              aria-label="Close project"
              className="absolute right-4 top-4 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-black/70 text-lg text-white backdrop-blur-sm transition hover:bg-black"
            >
              ×
            </button>

            {/* Expanded image */}
            <div className="relative flex h-[45vh] items-center justify-center bg-[#0A0A0A]">
              <img
                src={project.images[currentImage]}
                alt={`${project.title} screenshot ${currentImage + 1}`}
                className="h-full w-full object-contain p-3 sm:p-5"
              />

              {/* Previous */}
              <button
                type="button"
                onClick={previousImage}
                aria-label="Previous image"
                className="absolute left-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/65 text-xl text-white backdrop-blur-sm transition hover:bg-black"
              >
                ‹
              </button>

              {/* Next */}
              <button
                type="button"
                onClick={nextImage}
                aria-label="Next image"
                className="absolute right-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/65 text-xl text-white backdrop-blur-sm transition hover:bg-black"
              >
                ›
              </button>

              {/* Indicators */}
              <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-1.5">
                {project.images.map((_, index) => (
                  <span
                    key={index}
                    className={`h-1.5 rounded-full transition-all ${
                      index === currentImage
                        ? "w-5 bg-white"
                        : "w-1.5 bg-white/50"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Expanded content */}
            <div className="p-6 sm:p-7">
              <h3 className="text-2xl font-semibold tracking-tight dark:text-white">
                {project.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-black/65 dark:text-white/65">
                {project.description}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {project.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-full border border-black/10 bg-black/[0.03] px-2.5 py-1 text-xs font-medium text-black/70 dark:border-white/10 dark:bg-white/[0.05] dark:text-white/70"
                  >
                    {technology}
                  </span>
                ))}
              </div>

              <div className="mt-5 flex gap-3">
                <Button
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  variant="ghost"
                  className="dark:border-white/15 dark:bg-white/[0.05] dark:text-white dark:hover:border-white/30"
                >
                  GitHub ↗
                </Button>

                <Button
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  variant="primary"
                >
                  Live Demo ↗
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}