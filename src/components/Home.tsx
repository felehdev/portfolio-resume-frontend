import { useEffect, useRef } from 'react'
import Typed from 'typed.js'

const Home = () => {
  const element1 = useRef<HTMLParagraphElement | null>(null)
  const element2 = useRef<HTMLParagraphElement | null>(null)
  const element3 = useRef<HTMLParagraphElement | null>(null)

  async function typeParagraphs(): Promise<void> {
    const paragraphs = [element1.current, element2.current, element3.current]
    console.log(paragraphs)

    for (const [index, p] of paragraphs.entries()) {
      await new Promise<void>(resolve => {
        const typedElement = p?.nextElementSibling
        if (!typedElement) return resolve()

        new Typed(typedElement, {
          strings: [p?.innerHTML],
          typeSpeed: 100,
          onComplete: () => {
            resolve()
            if (index === paragraphs.length - 1) return
            typedElement.nextElementSibling?.remove()
          },
        })
      })
    }
  }

  useEffect(() => {
    const initTyped = () => {
      if (typeof Typed === 'undefined') return
      typeParagraphs()
    }

    const handleLoad = () => initTyped()

    if (document.readyState === 'complete') initTyped()
    else window.addEventListener('load', handleLoad)

    return () => window.removeEventListener('load', handleLoad)
  }, [])

  return (
    <section id="hero" className="hero section">
      <div className="container">
        <div
          className="row justify-content-md-center py-5 hero__typed-container"
          data-aos="zoom-out"
        >
          <div className="col-12 col-sm-10">
            <h1>Hello, World!</h1>
            <div className="info">
              <div className="typed-greeting mt-3">
                <p className="visually-hidden" ref={element1}>
                  I'm Mourad Elfeleh.
                </p>
                <span className="typed-cursor" aria-hidden="true"></span>
              </div>
              <div className="typed-greeting mt-3">
                <p className="visually-hidden" ref={element2}>
                  A{' '}
                  <strong className="text-primary">
                    Fullstack Web developer
                  </strong>
                  .
                </p>
                <span className="typed-cursor" aria-hidden="true"></span>
              </div>
              <div className="typed-greeting mt-3">
                <p className="visually-hidden" ref={element3}>
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
    </section>
  )
}

export default Home
