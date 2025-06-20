import '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloud, faShieldAlt, faScaleBalanced } from '@fortawesome/free-solid-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "Multi-Cloud",
    "Hybrid Cloud",
    "IaC",
    "Scalability",
    "Microservices",
    "HPC",
    "Containers",
    "Serverless",    
    
    
    "Terraform",
];

const labelsSecond = [
    "IAM",
    "PaC",
    "NAC",
    "Segmentation",
    "TLS",
    "Crypto",
    "WAF",
    "DDoS",
    "OWASP",
    "Zero Trust"
];

const labelsThird = [
    "ISMS",
    "ISO 27001",
    "Audit Readiness",
    "Internal Audits",
    "Governance",
    "Process Modeling",
];

interface Badge {
    src: string;
    link: string;
    alt: string;
}

const badgesFirst: Badge[] = [
    {
        src: process.env.PUBLIC_URL + '/badge_awssa.png',
        link: 'https://www.credly.com/badges/awssa',
        alt: 'AWS Solutions Architect',
    },
    {
        src: process.env.PUBLIC_URL + '/badge_tf.png',
        link: 'https://www.credly.com/badges/terraform',
        alt: 'Terraform Associate',
    },
];

const badgesSecond: Badge[] = [
    {
        src: process.env.PUBLIC_URL + '/badge_gcpcs.png',
        link: 'https://www.credly.com/badges/gcpcs',
        alt: 'Google Cloud Security Engineer',
    },
];

const badgesThird: Badge[] = [
    {
        src: process.env.PUBLIC_URL + '/badge_secoff.png',
        link: 'https://www.credly.com/badges/secoff',
        alt: 'Security Officer',
    },
    {
        src: process.env.PUBLIC_URL + '/badge_secaudit.png',
        link: 'https://www.credly.com/badges/secaudit',
        alt: 'Security Auditor',
    },
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faCloud} size="3x"/>
                    <h3>Cloud Architecture</h3>
                    <p>I build scalable, fault-tolerant cloud systems using container-based and serverless patterns. My designs balance cost, performance, and reliability, and are fully managed with Terraform and infrastructure-as-code.</p>
                    <div className="flex-chips">
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                    <div className="badges">
                        {badgesFirst.map((badge, index) => (
                            <a key={index} href={badge.link} target="_blank" rel="noreferrer">
                                <img className="badge" src={badge.src} alt={badge.alt} />
                            </a>
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faShieldAlt} size="3x"/>
                    <h3>Cloud Security</h3>
                    <p>I apply security best practices across cloud environments, including encryption, network isolation, and access control. I use policy-as-code to enforce guardrails and ensure infrastructure is secure by design and verifiable.</p>
                    <div className="flex-chips">
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                    <div className="badges">
                        {badgesSecond.map((badge, index) => (
                            <a key={index} href={badge.link} target="_blank" rel="noreferrer">
                                <img className="badge" src={badge.src} alt={badge.alt} />
                            </a>
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faScaleBalanced} size="3x"/>
                    <h3>Compliance & Governance</h3>
                    <p>I support organizations in building and maintaining security programs aligned with ISO 27001 and industry best practices. My work includes process modeling, risk management, internal audits, and designing ISMS foundations.</p>
                    <div className="flex-chips">
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                    <div className="badges">
                        {badgesThird.map((badge, index) => (
                            <a key={index} href={badge.link} target="_blank" rel="noreferrer">
                                <img className="badge" src={badge.src} alt={badge.alt} />
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;