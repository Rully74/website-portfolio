import "./Experience.css";
import { HiOutlineCircleStack } from "react-icons/hi2";
import { FaLaptopCode } from "react-icons/fa";

/**
 * Renders the experience section of the portfolio.
 * This section includes a list of professional experiences, each with a role, company, duration, description, and an associated icon.
 * @returns {JSX.Element} The rendered Experience component.
 */
function Experience() {
  const experiences = [
    {
      role: "Software Engineer",
      company: "Veevart",
      duration: "2024 - 2026",
      description:
        "Worked across the Payments and Fundraising teams, building and maintaining web applications backed by Salesforce. Contributed to payment and refund integrations, membership-related features, shared user-flow improvements, and frontend foundations for new products, with a strong focus on data consistency, reliability, and user experience.",
      icon: <HiOutlineCircleStack />,
    },
    {
      role: "Multimedia Engineer",
      company: "Seers",
      duration: "2023 - 2024",
      description:
        "Worked in a multidisciplinary multimedia role creating digital content, visual assets, and brand materials, while also contributing to UI/UX design for websites and landing pages. My work included social media content creation, video production, scriptwriting, project formulation, logo design, and the development of a landing page, which helped strengthen my product, design, and frontend perspective.",
      icon: <FaLaptopCode />,
    },
  ];

  return (
    <section id="experience" className="experience">
      <h2 className="experience-title">Professional experience</h2>
      <p className="experience-description">
        A brief look at the professional experience where I’ve built,
        maintained, and improved digital products in real-world environments.
      </p>

      <ol className="experience-list">
        {experiences.map((exp, index) => (
          <li key={index} className="experience-item">
            <div className="timeline-marker" aria-hidden="true">
              <span className="timeline-icon">{exp.icon}</span>
            </div>

            <article className="timeline-content">
              <div className="timeline-content-header">
                <h3>{exp.role}</h3>
                <span className="duration-item">{exp.duration}</span>
              </div>
              <h4>{exp.company}</h4>
              <p className="experience-item-description">{exp.description}</p>
            </article>
          </li>
        ))}
      </ol>
    </section>
  );
}

export { Experience };
