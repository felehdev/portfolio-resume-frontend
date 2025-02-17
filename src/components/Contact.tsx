import { forwardRef } from "react";

const Contact = forwardRef<HTMLElement, Record<string, never>>((_, ref) => {
  return (
    <article id="contact" className="contact section spad" ref={ref}>
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="section__header" data-aos="fade-up">
              <h1 className="section__title">Contact Me</h1>
              <p>Please don't hesitate to reach out with any questions, I'll get back to you as quickly as possible!</p>
            </div>
            <form id="contact-form" data-aos="fade" data-aos-delay="100">
              <div className="row">
                <div className="form-group col-sm-4">
                  <input
                    type="text"
                    className="form-control rounded-0 shadow-none"
                    id="name"
                    name="name"
                    placeholder="Name"
                  />
                  <div className="invalid-feedback"></div>
                </div>
                <div className="form-group col-sm-4">
                  <input
                    type="text"
                    className="form-control rounded-0 shadow-none"
                    id="email"
                    name="email"
                    placeholder="E-mail"
                  />
                  <div className="invalid-feedback d-block is-invalid">invalid email</div>
                </div>
                <div className="form-group col-sm-4">
                  <input
                    type="text"
                    className="form-control rounded-0 shadow-none"
                    id="subject"
                    name="subject"
                    placeholder="Subject"
                  />
                  <div className="invalid-feedback"></div>
                </div>
                <div className="form-group col-sm-12 mt-3">
                  <textarea
                    className="form-control rounded-0 shadow-none"
                    id="message"
                    name="message"
                    placeholder="Message"
                  ></textarea>
                  <div className="invalid-feedback"></div>
                </div>
              </div>
              <div className="text-md-right">
                <button className="btn btn-outline-primary btn-lg rounded-0 submit">Send message</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </article>
  );
});

Contact.displayName = "Contact";

export default Contact;
