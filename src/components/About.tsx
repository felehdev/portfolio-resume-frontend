const About = () => {
  return (
    <article id="about" className="about section">
      <div className="container" data-aos="fade-up">
        <div className="row">
          <div className="col">
            <div className="section__header" data-aos="fade-up">
              <h1 className="section__title">About</h1>
              <p className="mt-5">
                Passionate about new technologies and web development, I believe technology can make life much easier.
              </p>
            </div>
          </div>
          <div className="row article__content">
            <div className="col-sm-4">
              <img className="img-fluid" src="src/assets/img/profile-img.jpg" alt="Mourad elfeleh" width="375px" />
            </div>
            <div className="col-sm-8">
              <ul className="">
                <li className="">
                  <i className="bi bi-chevron-right"></i>
                  <strong>Birthday:</strong>
                  <span>1 April 1987</span>
                </li>
                <li className="">
                  <i className="bi bi-chevron-right"></i>
                  <strong>Nationality:</strong>
                  <span>Tunisian</span>
                </li>
                <li className="">
                  <i className="bi bi-chevron-right"></i>
                  <strong>Address:</strong>
                  <span>Zaghouan, Tunisia</span>
                </li>
                <li className="">
                  <i className="bi bi-chevron-right"></i>
                  <strong>Email:</strong> <span>felehdev@gmail.com</span>
                </li>
                <li className="">
                  <i className="bi bi-chevron-right"></i>
                  <strong>Phone:</strong>
                  <span>+216 22 919 129</span>
                </li>
                <li className="">
                  <i className="bi bi-chevron-right"></i>
                  <strong>Linkedin:</strong>
                  <span>www.linkedin.com/in/mourad-el-feleh</span>
                </li>
                <li className="">
                  <i className="bi bi-chevron-right"></i>
                  <strong>Status:</strong>
                  <span>Available for new opportunities</span>
                </li>
              </ul>
            </div>
            <div className="col-sm-12">
              <p className="text-start my-3">
                Currently, I am the CEO of the startup CARPET PLUS, a collaborative platform for designing and selling
                personalized handcrafted carpets.
              </p>
              <p className="text-start my-3">
                In addition to my role as CEO, I also work as a freelance professional, assisting my clients in creating
                their web applications.
              </p>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default About;
