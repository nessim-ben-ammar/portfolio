import React, { useState } from 'react';
import '../assets/styles/Project.scss';
import Chip from '@mui/material/Chip';
import Modal from './modal';

interface ProjectProps {
  project: {
    id: string;
    name: string;
    url: string;
    description: string;
    techStack: string[];
    image: string;
    sourceUrl?: string;
  };
  mode: string;
}

function ProjectItem({ project, mode }: ProjectProps) {
  const { name, url, description, techStack, image, id, sourceUrl } = project;
  const [isModalOpen, setModalOpen] = useState(false);


  const openModal = () => {
    setModalOpen(!isModalOpen);
  };

  return (
    <div className="project" key={id}>
      <img src={image} className="zoom" alt="thumbnail" width="100%" onClick={openModal} />
      <a href={url} target="_blank" rel="noreferrer">
        <h2>{name}</h2>
      </a>
      <p>{description}</p>
      <div className="flex-chips">
        <span className="chip-title">Tech stack:</span>
        {techStack.map((stack, index) => (
          <Chip key={index} className="chip" label={stack} />
        ))}
      </div>

      {isModalOpen && (
        <Modal
          project={{ ...project, sourceUrl }}
          onClose={openModal}
          mode={mode} 
        />
      )}
    </div>
  );
}

export default ProjectItem;
