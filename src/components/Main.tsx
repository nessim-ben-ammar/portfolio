import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';
import '../assets/images/profile-pic.png';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src="profile-pic.png" alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/Tejasree1302" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/gali-teja-sree-4a8b7b29a" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>G Teja Sree</h1>
          <p>Member of BYTE TRACK Org</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/Tejasree1302" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/gali-teja-sree-4a8b7b29a" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;