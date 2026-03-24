import "./Hero.css";

/**
 * Renders the hero section of the website portfolio
 * The hero section includes a title, description, call-to-action button, and an image.
 * @returns {JSX.Element} The rendered Hero component.
 */
function Hero() {
  return (
    <section className="hero">
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
          <button className="hero-button-primary">Download CV</button>
          <button className="hero-button-secondary">LinkedIn</button>
        </div>
      </div>
      <div className="hero-image-container">
        <div className="hero-image">
          <img src="/vite.svg" alt="Hero Image" />
        </div>
      </div>
    </section>
  );
}

export { Hero };
