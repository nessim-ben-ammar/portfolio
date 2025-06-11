import React, { useRef, useState } from 'react';
import '../assets/styles/Contact.scss';
import Envelope from '@mui/icons-material/Email';
import Mobile from '@mui/icons-material/Smartphone';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Contact() {

  return (
    <div id="contact">
      <div className="items-container">
        <div className="contact_wrapper">
          <h1>Contact</h1>
          <p>Got a project waiting to be realized? Let's collaborate and make it happen!</p>
          <div>
            <a href="mailto:nessim.benammar@gmail.com"><Envelope/>nessim.benammar@gmail.com</a>
          </div>
          <div>
            <a href="tel:+4915117693555"><Mobile/>+49 151 17693555</a>
          </div>
          <div>
            <a href="https://www.linkedin.com/in/nessim-ben-ammar/" target="_blank" rel="noreferrer"><LinkedInIcon/>https://www.linkedin.com/in/nessim-ben-ammar/</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;