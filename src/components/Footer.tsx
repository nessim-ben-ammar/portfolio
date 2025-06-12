import { Link } from "react-router-dom";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "../assets/styles/Footer.scss";

function Footer() {
  const handleLegalClick = () => {
    sessionStorage.setItem("scrollPosition", window.scrollY.toString());
  };
  return (
    <footer>
      <div>
        <a
          href="https://github.com/nessim-ben-ammar"
          target="_blank"
          rel="noreferrer"
        >
          <GitHubIcon />
        </a>
        <a
          href="https://www.linkedin.com/in/nessim-ben-ammar/"
          target="_blank"
          rel="noreferrer"
        >
          <LinkedInIcon />
        </a>
      </div>
      <p>
        © {new Date().getFullYear()} Nessim Ben Ammar -{" "}
        <Link to="/legal-notice" onClick={handleLegalClick}>
          Legal Notice
        </Link>
      </p>
    </footer>
  );
}

export default Footer;
