const Header = () => {
  return (
    <header id="header" className="header d-flex flex-column justify-content-center">
      <i className="header-toggle d-xl-none bi bi-list"></i>

      <nav id="navmenu" className="navmenu">
        <ul>
          <li>
            <a href="#hero" className="jump-to active">
              <i className="bi bi-house-door-fill navicon" aria-hidden="true"></i>
              <span className="visually-hidden">Home</span>
            </a>
          </li>
          <li>
            <a href="#about" className="jump-to">
              <i className="bi bi-info-square-fill navicon" aria-hidden="true"></i>
              <span className="visually-hidden">About</span>
            </a>
          </li>
          <li>
            <a href="#skills" className="jump-to">
              <i className="bi bi-file-code-fill navicon" aria-hidden="true"></i>
              <span className="visually-hidden">Skills</span>
            </a>
          </li>
          <li>
            <a href="#resume" className="jump-to">
              <i className="bi bi-file-text-fill navicon" aria-hidden="true"></i>
              <span className="visually-hidden">Resume</span>
            </a>
          </li>
          <li>
            <a href="#quotes" className="jump-to">
              <i className="bi bi-quote navicon" aria-hidden="true"></i>
              <span className="visually-hidden">Quotes</span>
            </a>
          </li>
          <li>
            <a href="#contact" className="jump-to">
              <i className="bi bi-envelope-fill navicon" aria-hidden="true"></i>
              <span className="visually-hidden">Contact</span>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
