import { useState, useEffect } from "react";
import "./Navbar.css";
import { IoMenu, IoClose } from "react-icons/io5";

/**
 * Renders the navigation bar component for the website portfolio.
 * The navbar includes a logo, title, navigation links, and a call-to-action button.
 * @returns {JSX.Element} The rendered Navbar component.
 */
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = () => setMenuOpen(false);

  return (
    <>
      <nav className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
        <div className="page-container navbar-content">
          <div className="navbar-logo-title">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
                setMenuOpen(false);
              }}
            >
              <img src="/LOGO.svg" className="navbar-logo" alt="Vite logo" />
            </a>
          </div>

          <ul className="navbar-links">
            <li>
              <a href="#experience">Experience</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>

          <button
            className="navbar-menu-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {menuOpen ? <IoClose /> : <IoMenu />}
          </button>
        </div>
      </nav>

      <div
        className={`mobile-menu ${menuOpen ? "mobile-menu--open" : ""}`}
        onClick={handleNavClick}
      >
        <ul className="mobile-menu-links">
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </>
  );
}

export { Navbar };
