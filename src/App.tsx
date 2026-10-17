
import { useEffect, useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import BentoGrid from "./components/BentoGrid";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const finishLoading = () => setIsLoading(false);

    if (document.readyState === "complete") {
      finishLoading();
    } else {
      window.addEventListener("load", finishLoading);

      return () => {
        window.removeEventListener("load", finishLoading);
      };
    }
  }, []);

  return (
    <>
      {isLoading && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#080808]">
          <span className="animate-lmb-pulse text-4xl font-bold tracking-[0.15em] text-white sm:text-5xl">
            LMB
          </span>
        </div>
      )}

      <div
        className={`page-entrance min-h-screen bg-[#FFFCF9] text-[#0A0A0A] antialiased ${
          isLoading ? "invisible" : ""
        }`}
      >
        <Header />
        <main>
          <Hero />
          <About />
          <Experience />
          <BentoGrid />
          <Education />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}
