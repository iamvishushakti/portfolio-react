import { ArrowUpRight, Menu, X } from "lucide-react";
import { useState } from "react";
import ThemeToggle from "./ThemeToggle";

const links = [
  "About",
  "Skills",
  "Projects",
  "Journey",
  "Education",
  "Contact",
];

export default function Navbar({ theme, onToggle }) {
  const [open, setOpen] = useState(false);
  return (
    <nav className="navbar-shell">
      <div className="container nav-inner">
        <a className="brand" href="#home" aria-label="Vishal Kumar home">
          <span className="brand-mark">&lt;/&gt;</span>
          <span>
            vishal kumar<span className="brand-dot">.</span>
          </span>
        </a>
        <div className={`nav-links ${open ? "nav-open" : ""}`}>
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={() => setOpen(false)}
            >
              {link}
            </a>
          ))}
          <a
            href="/Vishal-Kumar-Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="nav-resume-link"
          >
            Resume <ArrowUpRight size={13} />
          </a>
        </div>
        <div className="nav-actions">
          <ThemeToggle theme={theme} onToggle={onToggle} />
          <a className="btn btn-dark-pill nav-cta" href="#contact">
            Let’s talk <ArrowUpRight size={15} />
          </a>
          <button
            className="mobile-menu"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>
    </nav>
  );
}
