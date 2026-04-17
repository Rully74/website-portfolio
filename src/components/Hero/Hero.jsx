import "./Hero.css";

/**
 * Renders the hero section of the website portfolio
 * The hero section includes a title, description, call-to-action button, and an image.
 * @returns {JSX.Element} The rendered Hero component.
 */
function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-information">
        <h1 className="hero-title">
          <span className="hero-title-line">Hi, I'm</span>
          <span className="hero-title-line">Julian Ruiz,</span>
          <span className="hero-title-line hero-title-highlight">Software</span>
          <span className="hero-title-line hero-title-highlight">Engineer</span>
        </h1>
        <p className="hero-description">
          I build reliable web products focused on clean user experiences and
          scalable solutions. Passionate about technology and creating software
          that solves real-world problems.
        </p>
        <div className="hero-cta-container">
          <a
            href="/cv/JulianRuizCV.pdf"
            className="hero-button primary-button"
            download
          >
            Download CV
          </a>
          <a
            href="https://www.linkedin.com/in/julianruizo/"
            className="hero-button secondary-button"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </div>
      <div className="hero-image-container">
        <div className="hero-image">
          <img src="/hero.webp" alt="Hero Image" />
        </div>
      </div>
    </section>
  );
}

export { Hero };
