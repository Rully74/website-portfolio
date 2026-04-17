import "./ProjectCard.css";
import { IoMdOpen } from "react-icons/io";
import { IoMdCode } from "react-icons/io";

/**
 * Renders a card component for a project, displaying its image, title, year, description, technology stack, and links to a live demo and source code.
 * @param {Object} props - The properties passed to the component.
 * @param {string} props.image - The URL of the project's image.
 * @param {string} props.title - The title of the project.
 * @param {string} props.year - The year the project was completed.
 * @param {string} props.description - A brief description of the project.
 * @param {Array<string>} props.stack - An array of technologies used in the project.
 * @param {string} props.liveDemo - The URL to the live demo of the project.
 * @param {string} props.sourceCode - The URL to the source code repository of the project.
 * @returns {JSX.Element} The rendered ProjectCard component.
 */
function ProjectCard({
  image,
  title,
  year,
  description,
  stack,
  liveDemo,
  sourceCode,
}) {
  return (
    <div className="project-card">
      <div className="project-card-media">
        <img
          className="project-card-image"
          src={image}
          alt={title}
          loading="lazy"
          decoding="async"
        />
      </div>
      <div className="project-card-header">
        <h3 className="project-card-title">{title}</h3>
        <span className="project-card-year">{year}</span>
      </div>
      <p className="project-card-description">{description}</p>
      <ul className="project-card-stack">
        {stack.map((tech, index) => (
          <li key={index}>{tech}</li>
        ))}
      </ul>
      <div className="project-card-buttons">
        <a
          className="project-button project-button-live"
          href={liveDemo}
          target="_blank"
          rel="noopener noreferrer"
        >
          <IoMdOpen className="button-icon" />
          <p>Live Demo</p>
        </a>
        <a
          className="project-button project-button-source"
          href={sourceCode}
          target="_blank"
          rel="noopener noreferrer"
        >
          <IoMdCode className="button-icon" />
          <p>View Code</p>
        </a>
      </div>
    </div>
  );
}

export { ProjectCard };
