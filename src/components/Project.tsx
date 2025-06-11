import mock09 from '../assets/images/mock09.png';
import servTrngApi from '../assets/images/serverless-trng-api.png';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Portfolio</h1>
        <div className="projects-grid">
            <div className="project">
                <a target="_blank" rel="noreferrer"><img src={servTrngApi} className="zoom" alt="thumbnail" width="100%"/></a>
                <a target="_blank" rel="noreferrer"><h2>Serverless TRNG API in AWS</h2></a>
                <p>Coming soon :-)</p>
            </div>
            {/* <div className="project">
                <a href="https://yujisatojr.itch.io/highspeedchase" target="_blank" rel="noreferrer"><img src={mock09} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://yujisatojr.itch.io/highspeedchase" target="_blank" rel="noreferrer"><h2>High Speed Chase</h2></a>
                <p>Designed, developed, and launched a 3D multiplayer racing game with C# and Unity. This is available on Itch.io for gamers worldwide to enjoy.</p>
            </div> */}
        </div>
    </div>
    );
}

export default Project;