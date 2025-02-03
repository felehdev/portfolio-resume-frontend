const Quotes = () => {
  return (
    <article id="quotes" className="quotes section">
      <div className="container" data-aos="fade-up">
        <div className="row">
          <div className="col">
            <div className="section__header" data-aos="fade-up">
              <h1 className="section__title">Inspirational Quotes</h1>
              <p>Here are some quotes I want to share with you</p>
            </div>
          </div>
        </div>
      </div>
      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="swiper init-swiper">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <div className="quote-item">
                <div className="row gy-4 justify-content-center">
                  <div className="col-lg-6">
                    <div className="quote-content">
                      <p>
                        <i className="bi bi-quote quote-icon-left"></i>
                        <span>all i know is that i know nothing.</span>
                        <i className="bi bi-quote quote-icon-right"></i>
                      </p>
                      <h3>Socrates</h3>
                      <h4>Greek philosopher</h4>
                    </div>
                  </div>
                  <div className="col-lg-2 text-center">
                    <img
                      src="src/assets/img/quotes/socrates.jpg"
                      className="img-fluid quote-img"
                      alt="Socrates"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="quote-item">
                <div className="row gy-4 justify-content-center">
                  <div className="col-lg-6">
                    <div className="quote-content">
                      <p>
                        <i className="bi bi-quote quote-icon-left"></i>
                        <span>
                          Strength does not come from physical capacity. It
                          comes from an indomitable will.
                        </span>
                        <i className="bi bi-quote quote-icon-right"></i>
                      </p>
                      <h3>Mahatma Gandhi</h3>
                      <h4>Indian anti-colonial nationalist</h4>
                    </div>
                  </div>
                  <div className="col-lg-2 text-center">
                    <img
                      src="src/assets/img/quotes/gandhi.jpg"
                      className="img-fluid quote-img"
                      alt="Mahatma Gandhi"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="quote-item">
                <div className="row gy-4 justify-content-center">
                  <div className="col-lg-6">
                    <div className="quote-content">
                      <p>
                        <i className="bi bi-quote quote-icon-left"></i>
                        <span>
                          We are what we repeatedly do. Excellence, then, is not
                          an act, but a habit.
                        </span>
                        <i className="bi bi-quote quote-icon-right"></i>
                      </p>
                      <h3>Aristotle</h3>
                      <h4>Greek philosopher</h4>
                    </div>
                  </div>
                  <div className="col-lg-2 text-center">
                    <img
                      src="src/assets/img/quotes/aristotle.jpg"
                      className="img-fluid quote-img"
                      alt="Aristotle"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="quote-item">
                <div className="row gy-4 justify-content-center">
                  <div className="col-lg-6">
                    <div className="quote-content">
                      <p>
                        <i className="bi bi-quote quote-icon-left"></i>
                        <span>
                          Success is not final, failure is not fatal: It is the
                          courage to continue that counts.
                        </span>
                        <i className="bi bi-quote quote-icon-right"></i>
                      </p>
                      <h3>Winston Churchill</h3>
                      <h4>British statesman</h4>
                    </div>
                  </div>
                  <div className="col-lg-2 text-center">
                    <img
                      src="src/assets/img/quotes/churchil.jpg"
                      className="img-fluid quote-img"
                      alt="Winston Churchill"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="quote-item">
                <div className="row gy-4 justify-content-center">
                  <div className="col-lg-6">
                    <div className="quote-content">
                      <p>
                        <i className="bi bi-quote quote-icon-left"></i>
                        <span>
                          The only way to do great work is to love what you do.
                        </span>
                        <i className="bi bi-quote quote-icon-right"></i>
                      </p>
                      <h3>Steve Jobs</h3>
                      <h4>American entrepreneur</h4>
                    </div>
                  </div>
                  <div className="col-lg-2 text-center">
                    <img
                      src="src/assets/img/quotes/steve.jpg"
                      className="img-fluid quote-img"
                      alt="Steve Jobs"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="quote-item">
                <div className="row gy-4 justify-content-center">
                  <div className="col-lg-6">
                    <div className="quote-content">
                      <p>
                        <i className="bi bi-quote quote-icon-left"></i>
                        <span>
                          Do not judge me by my success, judge me by how many
                          times I fell down and got back up again
                        </span>
                        <i className="bi bi-quote quote-icon-right"></i>
                      </p>
                      <h3>Nelson Mandela</h3>
                      <h4>South African activist</h4>
                    </div>
                  </div>
                  <div className="col-lg-2 text-center">
                    <img
                      src="src/assets/img/quotes/nelson.jpg"
                      className="img-fluid quote-img"
                      alt="Nelson Mandela"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </div>
    </article>
  );
};

export default Quotes;
