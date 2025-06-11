import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloud, faShieldAlt, faScaleBalanced} from '@fortawesome/free-solid-svg-icons';
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
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;