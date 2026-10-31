import { Github, Linkedin, ArrowUp } from "lucide-react";
import { profile } from "../data/portfolio";
export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <a className="brand" href="#home">
          <span className="brand-mark">&lt;/&gt;</span>
          <span>
            vishal<span className="brand-dot">.</span>
          </span>
        </a>
        <p>Designed with curiosity. Built with code.</p>
        <div className="footer-social">
          <a href={profile.github} target="_blank" rel="noreferrer">
            <Github size={17} />
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer">
            <Linkedin size={17} />
          </a>
          <a href="#home">
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
