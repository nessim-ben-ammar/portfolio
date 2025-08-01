import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={process.env.PUBLIC_URL + '/avatar.png'} alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/nessim-ben-ammar" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/nessim-ben-ammar/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>Nessim Ben Ammar</h1>
          <p>Cybersecurity and Cloud Engineer</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/nessim-ben-ammar" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/nessim-ben-ammar/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;