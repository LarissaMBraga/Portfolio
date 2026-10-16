
import Container from "./Container";
import { PERSONAL_INFO } from "../lib/constants";

export default function Footer() {
  const hasRealGithub =
    PERSONAL_INFO.github &&
    !PERSONAL_INFO.github.includes("YOUR-GITHUB-USERNAME");

  return (
    <footer className="border-t border-black/10 py-8">
      <Container>
        <div className="flex flex-col justify-between gap-4 text-sm text-black/55 sm:flex-row sm:items-center">
          <p>
            © {new Date().getFullYear()} {PERSONAL_INFO.name}
          </p>

          <div className="flex flex-wrap gap-5">
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-[#FF4D00]"
            >
              LinkedIn ↗
            </a>

            {hasRealGithub && (
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noreferrer"
                className="transition hover:text-[#FF4D00]"
              >
                GitHub ↗
              </a>
            )}

            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="transition hover:text-[#FF4D00]"
            >
              Email ↗
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
