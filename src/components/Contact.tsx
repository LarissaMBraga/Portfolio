
import Container from "./Container";
import { Button } from "./ui/Button";
import { PERSONAL_INFO } from "../lib/constants";

export default function Contact() {
    return (
        <section id="contact" className="py-20 sm:py-32">
            <Container>
                <div className="rounded-3xl bg-[#FF4D00] px-6 py-12 text-white sm:px-12 sm:py-16">
                    <p className="text-sm font-medium uppercase tracking-[0.2em] text-white/75">
                        05 / Contact
                    </p>

                    <h2 className="mt-5 max-w-3xl text-4xl font-semibold tracking-tight sm:text-6xl">
                        Have an opportunity in mind?
                    </h2>

                    <p className="mt-6 max-w-xl leading-7 text-white/85">
                        I'm open to discussing frontend opportunities and projects where I
                        can contribute, learn, and build meaningful digital experiences.
                    </p>

                    <div className="mt-8 flex flex-wrap gap-3">

                        <Button
                            href={`mailto:${PERSONAL_INFO.email}`}
                            variant="ghost"
                            className="!border-white !bg-white !text-black hover:!bg-black hover:!text-white"
                        >
                            Email me ↗
                        </Button>

                        <Button
                            href={PERSONAL_INFO.linkedin}
                            target="_blank"
                            rel="noreferrer"
                            variant="secondary"
                            className="border-white/50 text-white hover:border-black"
                        >
                            Connect on LinkedIn ↗
                        </Button>
                    </div>
                </div>
            </Container>
        </section>
    );
}
