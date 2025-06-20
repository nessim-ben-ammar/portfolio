import "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCloud,
  faShieldAlt,
  faScaleBalanced,
} from "@fortawesome/free-solid-svg-icons";
import Chip from "@mui/material/Chip";
import "../assets/styles/Expertise.scss";

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
  "Zero Trust",
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
    src: process.env.PUBLIC_URL + "/b_awssa.png",
    link: "https://www.credly.com/badges/2963c7ad-f521-4ba2-891d-68512ba6a9c6/public_url",
    alt: "AWS Solutions Architect",
  },
  {
    src: process.env.PUBLIC_URL + "/b_tfca.png",
    link: "https://www.credly.com/badges/58445f20-6503-4892-8f7e-e7210ab9696f/public_url",
    alt: "Terraform Associate",
  },
];

const badgesSecond: Badge[] = [
  {
    src: process.env.PUBLIC_URL + "/b_gcsp.png",
    link: "https://www.credly.com/badges/ebd1cffe-932d-4f15-bb9f-c11c24c20163/public_url",
    alt: "Google Cybersecurity Professional",
  },
  {
    src: process.env.PUBLIC_URL + "/b_gccs.png",
    link: "https://www.credly.com/badges/d3d98870-a194-4bd2-becb-9a801d331347/public_url",
    alt: "Google Cloud Cybersecurity",
  },
];

const badgesThird: Badge[] = [
  {
    src: process.env.PUBLIC_URL + "/b_ismsso.png",
    link: "https://public.ico-cert.org/badge/user/62ce7763-df68-4c9c-8e86-84c390c96b0f/badgeClass/71117bb9-7a1e-4df2-9c0f-b597d1355469/a9c9bea4-b5a3-49f4-a408-575aa91bab13.png",
    alt: "Security Officer",
  },
  {
    src: process.env.PUBLIC_URL + "/b_ismsa.png",
    link: "https://public.ico-cert.org/badge/user/62ce7763-df68-4c9c-8e86-84c390c96b0f/badgeClass/0107f04f-97d8-4d35-a5b7-c6057678cf19/ce723444-1597-4109-825e-dfd415866c63.png",
    alt: "Security Auditor",
  },
];

function Expertise() {
  return (
    <div className="container" id="expertise">
      <div className="skills-container">
        <h1>Expertise</h1>
        <div className="skills-grid">
          <div className="skill">
            <FontAwesomeIcon icon={faCloud} size="3x" />
            <h3>Cloud Architecture</h3>
            <p>
              I build scalable, fault-tolerant cloud systems using
              container-based and serverless patterns. My designs balance cost,
              performance, and reliability, and are fully managed with Terraform
              and infrastructure-as-code.
            </p>
            <div className="flex-chips">
              {labelsFirst.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
            <div className="badges">
              {badgesFirst.map((badge, index) => (
                <a
                  key={index}
                  href={badge.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  <img className="badge" src={badge.src} alt={badge.alt} />
                </a>
              ))}
            </div>
          </div>

          <div className="skill">
            <FontAwesomeIcon icon={faShieldAlt} size="3x" />
            <h3>Cloud Security</h3>
            <p>
              I apply security best practices across cloud environments,
              including encryption, network isolation, and access control. I use
              policy-as-code to enforce guardrails and ensure infrastructure is
              secure by design and verifiable.
            </p>
            <div className="flex-chips">
              {labelsSecond.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
            <div className="badges">
              {badgesSecond.map((badge, index) => (
                <a
                  key={index}
                  href={badge.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  <img className="badge" src={badge.src} alt={badge.alt} />
                </a>
              ))}
            </div>
          </div>

          <div className="skill">
            <FontAwesomeIcon icon={faScaleBalanced} size="3x" />
            <h3>Compliance & Governance</h3>
            <p>
              I support organizations in building and maintaining security
              programs aligned with ISO 27001 and industry best practices. My
              work includes process modeling, risk management, internal audits,
              and designing ISMS foundations.
            </p>
            <div className="flex-chips">
              {labelsThird.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
            <div className="badges">
              {badgesThird.map((badge, index) => (
                <a
                  key={index}
                  href={badge.link}
                  target="_blank"
                  rel="noreferrer"
                >
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
