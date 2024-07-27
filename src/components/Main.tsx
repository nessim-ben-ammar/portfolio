import React, { useEffect, useState } from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import XIcon from '@mui/icons-material/X';
import '../assets/styles/Main.scss';

function Main() {
  const [displayName, setDisplayName] = useState('');
  const name = 'Zion Omojola';

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayName(name.slice(0, index));
      index++;
      if (index > name.length) {
        clearInterval(interval);
      }
    }, 200);
    return () => clearInterval(interval);
  }, [name]);

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src="https://i.imgur.com/MK0VoxV.jpeg" alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a
              href="https://github.com/zicoly"
              target="_blank"
              rel="noreferrer"
            >
              <GitHubIcon />
            </a>
            <a href="https://x.com/Zicoly_" target="_blank" rel="noreferrer">
              <XIcon />
            </a>
          </div>
          <div className="name-container">
            <div className="greeting">
              Hi! {''}
              <span className="waving-hand" role="img" aria-label="waving hand">
                👋
              </span>
            </div>
            <h1 className="name-animation">{displayName}</h1>
          </div>
          <p>Software Developer</p>
          <div className="mobile_social_icons">
            <a
              href="https://github.com/zicoly"
              target="_blank"
              rel="noreferrer"
            >
              <GitHubIcon />
            </a>
            <a href="https://x.com/Zicoly_" target="_blank" rel="noreferrer">
              <XIcon />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
