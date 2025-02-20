import { useEffect, useRef, useState } from "react";
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

  const [currentSection, setCurrentSection] = useState<string | null>(null);

  const sections = {
    hero: { label: "Hero", icon: "house", ref: useRef<HTMLElement>(null) },
    about: { label: "About", icon: "info-circle", ref: useRef(/*<HTMLElement>*/ null) },
    skills: { label: "Skills", icon: "tools", ref: useRef(/*<HTMLElement>*/ null) },
    resume: { label: "Resume", icon: "file-earmark-text", ref: useRef(/*<HTMLElement>*/ null) },
    quotes: { label: "Quotes", icon: "chat-quote", ref: useRef(/*<HTMLElement>*/ null) },
    contact: { label: "Contact", icon: "envelope", ref: useRef(/*<HTMLElement>*/ null) },
  };

  const updateNavMenu = () => {
    if (wrapper.current) {
      const scrollTop = wrapper.current.scrollTop + 50;

      for (const sectionKey of Object.keys(sections) as Array<keyof typeof sections>) {
        const sectionRef = sections[sectionKey].ref.current;
        if (
          sectionRef &&
          scrollTop >= sectionRef.offsetTop &&
          scrollTop < sectionRef.offsetTop + sectionRef.offsetHeight
        ) {
          setCurrentSection(sectionKey[0].toUpperCase() + sectionKey.slice(1));
        }
      }
    }
  };

  useEffect(() => {
    let ps: PerfectScrollbar | null = null;

    if (wrapper.current) {
      ps = new PerfectScrollbar(wrapper.current);
      //updateNavMenu();
    }

    return () => {
      if (ps) {
        ps.destroy();
      }
    };
  }, []);

  return (
    <div className="wrapper" ref={wrapper} onScroll={updateNavMenu}>
      <Header wrapper={wrapper} sections={sections} current={currentSection} />
      <Hero ref={sections.hero.ref} />
      <About ref={sections.about.ref} />
      <Skills ref={sections.skills.ref} />
      <Resume ref={sections.resume.ref} />
      <Quotes ref={sections.quotes.ref} />
      <Contact ref={sections.contact.ref} />
    </div>
  );
};

export default App;
