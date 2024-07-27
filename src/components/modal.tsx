import React from 'react';
import '../assets/styles/Modal.scss';
import Chip from '@mui/material/Chip';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

interface Project {
  id: string;
  name: string;
  url: string;
  description: string;
  techStack: string[];
  image: string;
  sourceUrl?: string;
}

interface ModalProps {
  project: Project;
  onClose: () => void;
  mode: string;
}

const Modal: React.FC<ModalProps> = ({ project, onClose, mode }) => {
  if (!project) return null;

  const { name, url, description, techStack, image, sourceUrl } = project;

  return (
    <div className={`modal ${mode === 'dark' ? 'dark-mode' : 'light-mode'}`}>
      <div className="modal-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <div className="modal-body">
          <div className="modal-image">
            <img src={image} alt={name} />
          </div>
          <div className="modal-details">
            <div className='modal-description'>
              <h2>{name}</h2>
              <p>{description}</p>
              <div className="flex-chips">
                <span className="chip-title">Tech stack:</span>
                {techStack.map((stack, index) => (
                  <Chip key={index} className="chip" label={stack} />
                ))}
              </div>
              <div className="modal-buttons">
                <a
                  href={url}
                  target="_blank"
                  rel="noreferrer"
                  className="modal-button"
                >
                  <FaExternalLinkAlt /> Live
                </a>
                {sourceUrl && (
                  <a
                    href={sourceUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="modal-button"
                  >
                    <FaGithub /> Source
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
