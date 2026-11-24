import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import { About, Education, Skills, Experience, Achievements, Interests } from "@/components/Sections";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import { profile } from "@/data/content";

export default function Home() {
  return (
    <>
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded focus:bg-white focus:px-3 focus:py-2 focus:text-navy">
        Skip to content
      </a>
      <Nav />
      <main id="main" className="relative z-10">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Education />
        <Experience />
        <Achievements />
        <Interests />
        <Contact />
      </main>
      <footer className="relative z-10 border-t border-line py-8 text-center text-sm text-soft">
        © {new Date().getFullYear()} {profile.name}
      </footer>
    </>
  );
}
