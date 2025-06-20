import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { projects } from "../data/projectData";
import { PageLayout } from "../components";
import "../assets/styles/ProjectPage.scss";

type ProjectProps = {
  mode: string;
  handleModeChange: () => void;
};

function Project({ mode, handleModeChange }: ProjectProps) {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  const { projectId } = useParams();
  const project = projects.find((p) => p.id === projectId);

  if (!project) return <div style={{ padding: "2rem" }}>Project not found</div>;

  return (
    <PageLayout mode={mode} handleModeChange={handleModeChange} isSubPage>
      <div className="project-page-header">
        <h1>{project.title}</h1>
        <img src={project.image} alt={project.title} />
      </div>
      <div className="project-page-content">
        <p>{project.description}</p>
        {project.body && <div>{project.body}</div>}
      </div>
    </PageLayout>
  );
}

export default Project;
