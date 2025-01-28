const About = () => {
  return (
    <section id="about" className="about section">
      <div className="row">
        <div className="col-12">
          <div className="section__header" data-aos="fade-up">
            <h1>About Me</h1>
            <p>
              Passionate about new technologies and web development, I believe
              technology can make life much easier.
            </p>
          </div>
        </div>
      </div>
      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row gy-4 justify-content-center">
          <div className="col-lg-4">
            <img src="assets/img/profile-img.jpg" className="img-fluid" />
          </div>
          <div className="col-lg-8 content">
            <p className="px-3 mt-3">
              Currently, I am the CEO of the startup CARPET PLUS, a
              collaborative platform for designing and selling personalized
              handcrafted carpets.
            </p>
            <p className="px-3 mt-3">
              In addition to my role as CEO, I also work as a freelance
              professional, assisting my clients in creating their web
              applications.
            </p>
            <div className="row">
              <div className="col-lg-6">
                <ul>
                  <li>
                    <i className="bi bi-chevron-right"></i>
                    <strong>Birthday:</strong>
                    <span>1 April 1987</span>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>
                    <strong>Birthplace:</strong>
                    <span>Kassrine, Tunisia</span>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>
                    <strong>Nationality:</strong>
                    <span>Tunisian</span>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>
                    <strong>Marital Status:</strong>
                    <span>Single</span>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>
                    <strong>Degree:</strong> <span>Bachelor’s Degree</span>
                  </li>
                </ul>
              </div>
              <div className="col-lg-6">
                <ul>
                  <li>
                    <i className="bi bi-chevron-right"></i>
                    <strong>Status:</strong>
                    <span>Available for new opportunities</span>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>
                    <strong>Address:</strong>
                    <span>Zaghouan, Tunisia</span>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>
                    <strong>Email:</strong> <span>felehdev@gmail.com</span>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>
                    <strong>Phone:</strong>
                    <span>+216 22 919 129</span>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>
                    <strong>Website:</strong>
                    <span>www.feleh-dev.com</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
