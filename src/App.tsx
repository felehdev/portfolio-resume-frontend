import { useEffect, useRef } from "react";
import PerfectScrollbar from "perfect-scrollbar";
import About from "./components/About";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Quotes from "./components/Quotes";
import Resume from "./components/Resume";
import Skills from "./components/Skills";

import "./assets/styles/main.scss";

const App = () => {
  const wrapper = useRef<HTMLDivElement | null>(null);
  const heroSection = useRef<HTMLElement | null>(null);
  const aboutSection = useRef<HTMLElement | null>(null);
  const skillsSection = useRef<HTMLElement | null>(null);
  const resumeSection = useRef<HTMLElement | null>(null);
  const quotesSection = useRef<HTMLElement | null>(null);
  const contactSection = useRef<HTMLElement | null>(null);

  useEffect(() => {
    let ps: PerfectScrollbar | null = null;

    if (wrapper.current) {
      ps = new PerfectScrollbar(wrapper.current);
    }

    return () => {
      if (ps) {
        ps.destroy();
      }
    };
  }, [wrapper]);

  return (
    <div className="wrapper" ref={wrapper}>
      <Header
        wrapper={wrapper}
        sections={{
          hero: heroSection,
          about: aboutSection,
          skills: skillsSection,
          resume: resumeSection,
          quotes: quotesSection,
          contact: contactSection,
        }}
      />
      <Hero ref={heroSection} />
      <About ref={aboutSection} />
      <Skills ref={skillsSection} />
      <Resume ref={resumeSection} />
      <Quotes ref={quotesSection} />
      <Contact ref={contactSection} />
    </div>
  );
};

export default App;
