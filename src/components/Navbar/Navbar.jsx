import "./Navbar.css";

/**
 * Renders the navigation bar component for the website portfolio. 
 * The navbar includes a logo, title, navigation links, and a call-to-action button.
 * @returns {JSX.Element} The rendered Navbar component.
 */
function Navbar() {
  return (
    <nav className="navbar">
      <div className="page-container navbar-content">
        <div className="navbar-logo-title">
          <img src="/vite.svg" className="navbar-logo" alt="Vite logo" />
        </div>

        <ul className="navbar-links">
          <li>
            <a href="#">Experience</a>
          </li>
          <li>
            <a href="#">Projects</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>

        <button className="navbar-theme-button">Change Theme</button>
      </div>
    </nav>
  );
}

export { Navbar };
