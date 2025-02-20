import { useState } from "react";
import Button from "./Button";

interface Section {
  label: string;
  icon: string;
  ref: React.RefObject<HTMLElement>;
}
interface HeaderProps {
  wrapper: React.RefObject<HTMLDivElement>;
  sections: {
    hero: Section;
    about: Section;
    skills: Section;
    resume: Section;
    quotes: Section;
    contact: Section;
  };
  current: string | null;
}

const Header: React.FC<HeaderProps> = ({ wrapper, sections, current }) => {
  const [activeButton, setActiveButton] = useState<string | null>("Home");

  const handleClick = (name: string) => {
    setActiveButton(name);
  };

  return (
    <header id="header" className="header d-flex flex-column justify-content-center">
      <i className="header-toggle d-xl-none bi bi-list"></i>

      <nav id="navmenu" className="navmenu">
        <ul>
          <li>
            <Button
              wrapper={wrapper}
              label="Home"
              icon="house-door-fill"
              sectionRef={sections.hero.ref}
              isActive={activeButton === "Home" || current === "Hero"}
              onClick={handleClick}
            />
          </li>
          <li>
            <Button
              wrapper={wrapper}
              label="About"
              icon="info-square-fill"
              sectionRef={sections.about.ref}
              isActive={activeButton === "About" || current === "About"}
              onClick={handleClick}
            />
          </li>
          <li>
            <Button
              wrapper={wrapper}
              label="Skills"
              icon="file-code-fill"
              sectionRef={sections.skills.ref}
              isActive={activeButton === "Skills" || current === "Skills"}
              onClick={handleClick}
            />
          </li>
          <li>
            <Button
              wrapper={wrapper}
              label="Resume"
              icon="file-text-fill"
              sectionRef={sections.resume.ref}
              isActive={activeButton === "Resume" || current === "Resume"}
              onClick={handleClick}
            />
          </li>
          <li>
            <Button
              wrapper={wrapper}
              label="Quotes"
              icon="quote navicon"
              sectionRef={sections.quotes.ref}
              isActive={activeButton === "Quotes" || current === "Quotes"}
              onClick={handleClick}
            />
          </li>
          <li>
            <Button
              wrapper={wrapper}
              label="Contact"
              icon="envelope-fill"
              sectionRef={sections.contact.ref}
              isActive={activeButton === "Contact" || current === "Contact"}
              onClick={handleClick}
            />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
