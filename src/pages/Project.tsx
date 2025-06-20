import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { projects } from "../data/projectData";
import { PageLayout } from "../components";
import NotFound from "./NotFound";
import "../assets/styles/ProjectPage.scss";

type ProjectProps = {
  mode: string;
  handleModeChange: () => void;
};

function Project({ mode, handleModeChange }: ProjectProps) {
  const { projectId } = useParams();
  const project = projects.find((p) => p.id === projectId);
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  if (!project) {
    return <NotFound mode={mode} handleModeChange={handleModeChange} />;
  }

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
