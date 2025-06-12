import { projects } from "../data/projectData";
import { Link } from "react-router-dom";
import "../assets/styles/Project.scss";

function Portfolio() {
  return (
    <div className="portfolio-container" id="portfolio">
      <h1>Portfolio</h1>
      <div className="projects-grid">
        {projects.map((project) => (
          <div className="project" key={project.id}>
            <Link to={`/${project.id}`}>
              <img
                src={project.image}
                className="zoom"
                alt="thumbnail"
                width="100%"
              />
            </Link>
            <Link to={`/${project.id}`}>
              <h2>{project.title}</h2>
            </Link>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
