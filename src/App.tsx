
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import BentoGrid from "./components/BentoGrid";

export default function App() {
  return (
    <div className="min-h-screen bg-[#FFFCF9] text-[#0A0A0A] antialiased">
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
  );
}
