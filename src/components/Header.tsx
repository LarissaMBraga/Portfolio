
import Container from "./Container";
import { PERSONAL_INFO } from "../lib/constants";

const navigation = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-[#FFFCF9]/90 backdrop-blur-lg">
      <Container>
        <nav className="flex min-h-20 items-center justify-between gap-5">
          <a
            href="#home"
            className="text-lg font-bold tracking-tight"
            aria-label="Go to homepage"
          >
            LMB<span className="text-[#FF4D00]">.</span>
          </a>

          <div className="hidden items-center gap-6 md:flex">
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-black/65 transition hover:text-[#FF4D00]"
              >
                {item.label}
              </a>
            ))}
          </div>

          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-black/15 px-4 py-2 text-sm font-medium transition hover:border-[#FF4D00] hover:text-[#FF4D00]"
          >
            LinkedIn ↗
          </a>
        </nav>
      </Container>
    </header>
  );
}
