import React from "react";
import mock01 from '../assets/images/mock01.png';
import mock02 from '../assets/images/mock02.png';
import mock03 from '../assets/images/mock03.png';
import mock04 from '../assets/images/mock04.png';
import mock05 from '../assets/images/mock05.png';
import mock06 from '../assets/images/mock06.png';
import mock07 from '../assets/images/mock07.png';
import mock08 from '../assets/images/mock08.png';
import mock09 from '../assets/images/mock09.png';
import mock10 from '../assets/images/mock10.png';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="" target="_blank" rel="noreferrer"><img src={mock10} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="" target="_blank" rel="noreferrer"><h2>Movie Finder</h2></a>
                <p> Developed a responsive Netflix clone using HTML, CSS, JavaScript, and Node.js, featuring user authentication, a media library, and video player functionality.</p>
            </div>
            <div className="project">
                <a href="" target="_blank" rel="noreferrer"><img src={mock09} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="" target="_blank" rel="noreferrer"><h2>Speed Chase Game</h2></a>
                <p>Created a car racing game with smooth animations and real-time scoring using JavaScript and HTML5 Canvas, focusing on event handling and collision detection.</p>
            </div>
            <div className="project">
                <a href="" target="_blank" rel="noreferrer"><img src={mock08} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href=" " target="_blank" rel="noreferrer"><h2>Space Game</h2></a>
                <p>Developed a mobile space shooting game in Java and Android Studio with smooth gameplay, multiple levels, and power-ups, focusing on game mechanics and collision detection.</p>
            </div>
            <div className="project">
                <a href="" target="_blank" rel="noreferrer"><img src={mock07} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="" target="_blank" rel="noreferrer"><h2>V-Learning Platform</h2></a>
                <p>Built an online education platform with React and Node.js, offering course modules, video lectures, quizzes, and progress tracking.</p>
            </div>
            <div className="project">
                <a href="" target="_blank" rel="noreferrer"><img src={mock06} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="" target="_blank" rel="noreferrer"><h2>Real Estate Management</h2></a>
                <p> Developed a platform for managing property listings and transactions with PHP, MySQL, and JavaScript, featuring user authentication and advanced search functionality.</p>
            </div>
            <div className="project">
                <a href="" target="_blank" rel="noreferrer"><img src={mock05} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="" target="_blank" rel="noreferrer"><h2>Dashboard</h2></a>
                <p> Created interactive dashboards using Chart.js and D3.js to visualize real-time data and analytics, built with React and Vue.js for a responsive user interface.</p>
            </div>
            <div className="project">
                <a href="" target="_blank" rel="noreferrer"><img src={mock04} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="" target="_blank" rel="noreferrer"><h2>Property Analysis</h2></a>
                <p>Built a machine learning model to predict property prices using Python, Scikit-learn, and Pandas, integrated with an interactive web dashboard.</p>
            </div>
            <div className="project">
                <a href="" target="_blank" rel="noreferrer"><img src={mock03} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="" target="_blank" rel="noreferrer"><h2>Web Security Management </h2></a>
                <p>Conducted penetration testing on a web app using OWASP ZAP and Burp Suite to identify vulnerabilities like SQL injection and XSS, improving overall security.</p>
            </div>
            <div className="project">
                <a href="" target="_blank" rel="noreferrer"><img src={mock01} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="" target="_blank" rel="noreferrer"><h2>Andriod Game</h2></a>
                <p>Developed a simple Android game using Java and Android Studio, featuring smooth controls, levels, and a scoring system.</p>
            </div>
        </div>
    </div>
    );
}

export default Project;