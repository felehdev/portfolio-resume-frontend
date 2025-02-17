import { useState } from "react";
import Button from "./Button";

interface HeaderProps {
  wrapper: React.RefObject<HTMLDivElement>;
  sections: {
    hero: React.RefObject<HTMLElement>;
    about: React.RefObject<HTMLElement>;
    skills: React.RefObject<HTMLElement>;
    resume: React.RefObject<HTMLElement>;
    quotes: React.RefObject<HTMLElement>;
    contact: React.RefObject<HTMLElement>;
  };
}

const Header: React.FC<HeaderProps> = ({ wrapper, sections }) => {
  const [activeButton, setActiveButton] = useState<string | null>(null);

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
              sectionRef={sections.hero}
              isActive={activeButton === "Home"}
              onClick={handleClick}
            />
          </li>
          <li>
            <Button
              wrapper={wrapper}
              label="About"
              icon="info-square-fill"
              sectionRef={sections.about}
              isActive={activeButton === "About"}
              onClick={handleClick}
            />
          </li>
          <li>
            <Button
              wrapper={wrapper}
              label="Skills"
              icon="file-code-fill"
              sectionRef={sections.skills}
              isActive={activeButton === "Skills"}
              onClick={handleClick}
            />
          </li>
          <li>
            <Button
              wrapper={wrapper}
              label="Resume"
              icon="file-text-fill"
              sectionRef={sections.resume}
              isActive={activeButton === "Resume"}
              onClick={handleClick}
            />
          </li>
          <li>
            <Button
              wrapper={wrapper}
              label="Quotes"
              icon="quote navicon"
              sectionRef={sections.quotes}
              isActive={activeButton === "Quotes"}
              onClick={handleClick}
            />
          </li>
          <li>
            <Button
              wrapper={wrapper}
              label="Contact"
              icon="envelope-fill"
              sectionRef={sections.contact}
              isActive={activeButton === "Contact"}
              onClick={handleClick}
            />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
