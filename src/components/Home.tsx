const Home = () => {
  return (
    <section id="hero" className="hero section">
      <div className="container">
        <div
          className="row justify-content-md-center py-5 hero__typed-container"
          data-aos="zoom-out"
        >
          <div className="col-12 col-sm-10">
            <div className="d-flex flex-column justify-content-center align-items-center">
              <h1 className="w-100">Hello, World!</h1>
              <div className="info w-100">
                <div className="typed-greeting mt-3">
                  <p className="visually-hidden">I'm Mourad Elfeleh.</p>
                  <span className="typed-cursor" aria-hidden="true"></span>
                </div>
                <div className="typed-greeting mt-3">
                  <p className="visually-hidden">
                    A{" "}
                    <strong className="text-primary">
                      Fullstack Web developer
                    </strong>
                    .
                  </p>
                  <span className="typed-cursor" aria-hidden="true"></span>
                </div>
                <div className="typed-greeting mt-3">
                  <p className="visually-hidden">
                    Nice to meet you <i className="bi bi-emoji-smile"></i>
                  </p>
                  <span className="typed-cursor" aria-hidden="true"></span>
                </div>
              </div>
              <div className="social-links w-100">
                <a
                  href="https://github.com/felehdev"
                  target="_blank"
                  rel="noopener  noreferrer"
                >
                  <span className="visually-hidden">Find me on Github</span>
                  <i className="bi bi-github" aria-hidden="true"></i>
                </a>
                <a
                  href="https://www.linkedin.com/in/mourad-el-feleh"
                  target="_blank"
                  rel="noopener  noreferrer"
                >
                  <span className="visually-hidden">Find me on Linkedin</span>
                  <i className="bi bi-linkedin" aria-hidden="true"></i>
                </a>
                <a
                  href="https://x.com/felehdev"
                  target="_blank"
                  rel="noopener  noreferrer"
                >
                  <span className="visually-hidden">Find me on Twitter</span>
                  <i className="bi bi-twitter-x" aria-hidden="true"></i>
                </a>
                <a
                  href="https://www.facebook.com/felehmourad"
                  target="_blank"
                  rel="noopener  noreferrer"
                >
                  <span className="visually-hidden">Find me on Facebook</span>
                  <i className="bi bi-facebook" aria-hidden="true"></i>
                </a>
              </div>
              <div className="header-buttons d-grid gap-2 d-md-flex justify-content-md-start my-5 w-100">
                <button
                  type="button"
                  className="btn btn-lg btn-outline-primary rounded-0"
                >
                  Download CV
                </button>
                <a
                  href="#about"
                  className="btn btn-lg btn-outline-primary rounded-0 jump-to"
                >
                  Discover me
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
