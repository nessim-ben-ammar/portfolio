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
            date="2025 - Present"
            iconStyle={{ background: "#5000ca", color: "white" }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Cloud Engineer</h3>
            <h4 className="vertical-timeline-element-subtitle">
              Elco Solutions – Leinfelden-Echterdingen
            </h4>
            <p>
              Maintaining and continuously optimizing the AWS cloud
              infrastructure. Managing user permissions and access control via
              AWS IAM. Performing systematic troubleshooting and issue
              resolution in live operations, while monitoring system performance
              to ensure high availability.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2022 - 2025"
            iconStyle={{ background: "#5000ca", color: "white" }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Process Manager</h3>
            <h4 className="vertical-timeline-element-subtitle">
              CARIAD SE – Mönsheim
            </h4>
            <p>
              Provided technical leadership in selecting and introducing
              software development processes and tools. Modeled agile
              development workflows, defined tailored security tests, and
              integrated compliance standards. Automated CI/CD pipelines using
              Python to boost efficiency, while ensuring audit readiness and
              coaching developer teams.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2017 - 2022"
            iconStyle={{ background: "#5000ca", color: "white" }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">
              Software Architect & Process Manager
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Robert Bosch GmbH – Stuttgart & Bühl
            </h4>
            <p>
              Defined and deployed software development processes and integrated
              compliance standards into workflows. Conceived and introduced an
              automated build and SiL-test framework. Designed resilient,
              fault-tolerant software architectures and provided technical
              leadership to global, cross-functional teams.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2015 - 2017"
            iconStyle={{ background: "#5000ca", color: "white" }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">
              Embedded Software Engineer
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Vector Informatik GmbH – Stuttgart
            </h4>
            <p>
              Developed safety-critical real-time operating system (RTOS)
              components up to ASIL-D compliance. Automated code generation
              processes to maximize efficiency across complex software
              integration projects.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Experience;
