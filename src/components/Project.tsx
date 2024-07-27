import React from 'react';
import { projects } from '../utility';
import ProjectItem from './projectItem';

import '../assets/styles/Project.scss';

interface ProjectProps {
  mode: string;
}

function Project({ mode }: ProjectProps) { 
  return (
    <div className="projects-container" id="projects">
      <h1>Personal Projects</h1>
      <div className="projects-grid">
        {projects.map((project) => (
          <ProjectItem key={project.id} project={project} mode={mode} />
        ))}
      </div>
    </div>
  );
}

export default Project;
