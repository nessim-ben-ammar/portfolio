import "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "../assets/styles/Timeline.scss";

function Experience() {
  return (
    <div id="experience">
      <div className="items-container">
        <h1>Project Experience</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "rgb(39, 40, 34)" }}
            contentArrowStyle={{ borderRight: "7px solid  white" }}
            date="2025"
            iconStyle={{ background: "#5000ca", color: "rgb(39, 40, 34)" }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">
              Cloud Rand – Serverless TRNG API
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Remote, Germany
            </h4>
            <p>
              Designed and built a serverless API on AWS to generate and verify
              cryptographically secure random numbers using AWS KMS, DynamoDB,
              and API Gateway. The system is managed entirely with Terraform and
              architected for scalability, auditability, and compliance.
              Security measures include WAF, Shield, and optional CloudFront +
              Lambda@Edge for edge-layer request filtering.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2022 - 2025"
            iconStyle={{ background: "#5000ca", color: "rgb(39, 40, 34)" }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">
              Process Management
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Mönsheim, Germany
            </h4>
            <p>
              Defined and implemented software development processes and tooling
              to support ASPICE compliance in a large-scale automotive program.
              Supported internal audits and audit preparation, with a focus on
              efficiency and readiness.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2019 - 2022"
            iconStyle={{ background: "#5000ca", color: "rgb(39, 40, 34)" }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">
              Process Management
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Bühl, Germany
            </h4>
            <p>
              Developed and rolled out software engineering processes and tools
              across multiple embedded platforms. Focused on enabling ASPICE
              compliance and supported internal assessments to ensure audit
              readiness and continuous improvement.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2018 - 2019"
            iconStyle={{ background: "#5000ca", color: "rgb(39, 40, 34)" }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">
              Project Management
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Bühl, Germany
            </h4>
            <p>
              Led a cross-functional team delivering embedded software for an
              automotive control unit. Managed planning, development, and
              integration while coordinating with customers to ensure delivery,
              quality, and compliance.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Experience;
