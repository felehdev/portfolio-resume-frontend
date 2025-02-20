import { forwardRef } from "react";

interface ResumeProps {
  ref?: React.Ref<HTMLElement>; // Allows the ref prop
}

const Resume = forwardRef<HTMLElement, ResumeProps>((_, ref) => {
  return (
    <article className="resume section" ref={ref}>
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="section__header" data-aos="fade-up">
              <h1 className="section__title">Resume</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
            <h3 className="resume-title">Professional Experience</h3>
            <div className="resume-item">
              <h4>CEO</h4>
              <h5>2019 - Present</h5>
              <p>
                <em>CARPET PLUS S.A</em>
              </p>
              <ul>
                <li>
                  Spearhead administrative management, including legal setup, cash flow, and compliance with fiscal
                  regulations.
                </li>
                <li>
                  Define the company’s strategic direction: Go-to-Market strategy, organizational structure, and
                  expansion roadmap.
                </li>
                <li>Oversee cross-functional teams, ensuring seamless operations and effective leadership.</li>
                <li>Monitor key business KPIs, ensuring alignment with strategic goals and investor expectations.</li>
                <li>Establish and maintain strong relationships with investors and shareholders.</li>
                <li>
                  Represent the company at industry events, enhancing brand visibility and networking opportunities.
                </li>
              </ul>
            </div>
            <div className="resume-item">
              <h4>Cofondateur / CTO</h4>
              <h5>2017 – 2019</h5>
              <p>
                <em>CARPET PLUS S.A</em>
              </p>
              <ul>
                <li>Conduct in-depth problem analysis to develop tailored technical solutions.</li>
                <li>
                  Collaborate on business planning, including idea validation, data sourcing, and business model
                  development.
                </li>
                <li>
                  Lead funding strategies and coordinate fundraising efforts, focusing on financial projections and
                  investment models.
                </li>
                <li>Design the brand identity, including visual assets and mockups.</li>
                <li>Manage DNS configuration and cloud security (Root Login, SSH, Postfix, ClamAV, Fail2Ban).</li>
                <li>Install and configure web servers (Apache, PHP, MySQL, Node.js, Redis) for optimal performance.</li>
                <li>
                  Oversee the complete lifecycle of the application: development, testing, deployment, and optimization.
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
            <div>
              <h3 className="resume-title">Education</h3>
              <div className="resume-item">
                <h4>Bachelor’s Degree in Computer Science</h4>
                <h5>2008 – 2012</h5>
                <p>
                  <cite>Higher Institute of Technological Studies of Charguia (ISET Charguia)</cite>
                </p>
                <p>Major: development of information systems</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
});

Resume.displayName = "Resume";

export default Resume;
