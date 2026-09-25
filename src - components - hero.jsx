import './Hero.css'

function Hero() {
  return (
    <section id="top" className="hero">
      <div className="container">
        <p className="hero__eyebrow">Portfolio</p>
        <h1 className="hero__name">Syed Ibrahim Anwar</h1>
        <p className="hero__title">
          CSE Student at Metropolitan University, Sylhet
        </p>
        <p className="hero__bio">
          I'm a Computer Science &amp; Engineering student who enjoys building
          things with code and learning new languages and frameworks along
          the way.
        </p>
        <div className="hero__actions">
          <a className="hero__button" href="#contact">
            Get in touch
          </a>
          <a className="hero__button hero__button--ghost" href="#skills">
            View skills
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero
