import { Github, Linkedin, ArrowUp } from "lucide-react";
import { profile } from "../data/portfolio";
export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <a
          className="brand"
          href="#home"
          aria-label="Vishal Kumar - Back to Top"
        >
          <span className="brand-mark">&lt;/&gt;</span>
          <span>
            vishal kumar<span className="brand-dot">.</span>
          </span>
        </a>
        <p>Designed with curiosity. Built with code.</p>
        <div className="footer-social">
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub Profile"
          >
            <Github size={17} />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn Profile"
          >
            <Linkedin size={17} />
          </a>
          <a href="#home" aria-label="Scroll back to top">
            <ArrowUp size={17} />
          </a>
        </div>
        <small>
          © {new Date().getFullYear()} Vishal Kumar. All rights reserved.
        </small>
      </div>
    </footer>
  );
}
