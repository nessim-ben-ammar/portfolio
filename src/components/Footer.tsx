import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import XIcon from '@mui/icons-material/X';
import '../assets/styles/Footer.scss';

function Footer() {
  return (
    <footer>
      <div>
        <a href="https://github.com/zicoly" target="_blank" rel="noreferrer">
          <GitHubIcon />
        </a>
        <a href="https://x.com/Zicoly_" target="_blank" rel="noreferrer">
          <XIcon />
        </a>
      </div>
      <p>
      Crafted with expertise and passion by <a href="https://github.com/zicoly" target="_blank" rel="noreferrer">Zion Omojola</a>. Connect with me to explore more!
      </p>
    </footer>
  );
}

export default Footer;
