import Container from "./Container";
import { PERSONAL_INFO } from "../lib/constants";
import ThemeToggle from "./ThemeToggle";

const navigation = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-[#FFFCF9]/90 backdrop-blur-lg transition-colors duration-300 dark:border-white/10 dark:bg-[#0A0A0A]/90">
      <Container>
        <nav className="relative flex min-h-20 items-center justify-between gap-5">
          <a
            href="#home"
            className="shrink-0 text-lg font-bold tracking-tight dark:text-white"
            aria-label="Go to homepage"
          >
            LMB<span className="text-[#D17BFC]"></span>
          </a>

          <div className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-5 lg:flex">
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="whitespace-nowrap text-sm text-black/65 transition hover:text-[#D17BFC] dark:text-white/65"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="ml-auto flex shrink-0 items-center gap-24">
            <ThemeToggle />

            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-black/15 px-4 py-2 text-sm font-medium transition hover:border-[#D17BFC] hover:text-[#D17BFC] dark:border-white/15 dark:text-white"
            >
              LinkedIn ↗
            </a>
          </div>
        </nav>
      </Container>
    </header>
  );
}