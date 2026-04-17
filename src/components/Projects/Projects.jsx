import "./Projects.css";
import { ProjectCard } from "./ProjectCard";
import imgPortfolioWeb from "../../assets/projects/PortfolioWeb.webp";
import imgOledge from "../../assets/projects/Oledge.webp";
import imgUltimoBrote from "../../assets/projects/UltimoBrote.webp";

/**
 * Renders a section displaying a grid of project cards and a description.
 * @returns {JSX.Element} The rendered Projects component.
 */
function Projects() {
  const projects = [
    {
      image: imgPortfolioWeb,
      title: "Portfolio Web",
      year: "2026",
      description:
        "Personal portfolio website built to showcase my experience as a Software Engineer, with a focus on clean UI, scalable frontend structure, and continuous improvement.",
      stack: ["React", "Vite", "JavaScript", "CSS", "Figma", "Git"],
      liveDemo: "https://rully.dev",
      sourceCode: "https://github.com/Rully74/website-portfolio",
    },
    {
      image: imgOledge,
      title: "OLEDGE",
      year: "2023",
      description:
        "Software developed by OLSoftware to manage and map employee knowledge and data, streamlining team formation for business projects. The tool allowed users to view and edit information, skills, and personal data, as well as manage new hires and departures.",
      stack: [
        "MySQL",
        "React",
        "Material UI",
        "Node.js",
        "HTML",
        "CSS",
        "GitHub",
      ],
      liveDemo:
        "https://uao-my.sharepoint.com/:f:/g/personal/julian_hernando_ruiz_uao_edu_co/IgDIrdw9jVnlTaUhzuvfCon9ARHOJwBLtJe87Mx06QRtxrs?e=NMHV5q",
    },
    {
      image: imgUltimoBrote,
      title: "EL ÚLTIMO BROTE",
      year: "2022",
      description:
        "A multimedia program designed to raise students' awareness of environmental conservation in La Cumbre Valle. It included virtual reality, challenges, and a fictional story. The program concluded with a tree-planting activity and the use of QR codes by students to personalize their experience.",
      stack: ["Unity", "C#", "Vuforia Engine", "Firebase", "Blender"],
      liveDemo:
        "https://uao-my.sharepoint.com/:f:/g/personal/julian_hernando_ruiz_uao_edu_co/IgAy2Xc2DJYfSZ29ERI9J6DYAavgGP_z1qCZQUyNunj9K68?e=ABDwRg",
    },
  ];

  return (
    <section id="projects" className="projects">
      <h2 className="projects-title">Projects</h2>
      <p className="projects-description">
        A selection of projects where I’ve explored ideas, solved problems, and
        turned concepts into working products.
      </p>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            image={project.image}
            title={project.title}
            year={project.year}
            description={project.description}
            stack={project.stack}
            liveDemo={project.liveDemo}
            sourceCode={project.sourceCode}
            delay={index * 150}
          />
        ))}
      </div>
    </section>
  );
}

export { Projects };
