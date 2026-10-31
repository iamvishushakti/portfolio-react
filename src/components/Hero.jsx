import {
  ArrowDown,
  ArrowUpRight,
  FileText,
  Github,
  Linkedin,
  Mail,
} from "lucide-react";
import { profile } from "../data/portfolio";

export default function Hero() {
  return (
    <section className="hero-section" id="home">
      <div className="hero-grid container">
        <div className="hero-copy">
          <div className="availability">
            <span className="pulse-dot" /> Available for opportunities
          </div>
          <p className="hello-line">
            Hello, I’m Vishal Kumar <span>✳</span>
          </p>
          <h1>
            Turning ideas
            <br />
            into <span className="gradient-text">digital reality.</span>
          </h1>
          <div className="role-line">
            <span className="role-caret" />{" "}
            <span className="role-text">
              Software Developer · PHP / Laravel / WHMCS
            </span>
          </div>
          <p className="hero-description">{profile.intro}</p>
          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary-gradient">
              Explore my work <ArrowUpRight size={17} />
            </a>
            <a
              href={profile.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-soft"
            >
              <FileText size={15} /> Resume <ArrowUpRight size={14} />
            </a>
            <a
              href={profile.gmailUrl}
              target="_blank"
              rel="noreferrer"
              className="btn btn-outline-soft"
            >
              <Mail size={15} /> Contact me
            </a>
          </div>
          <div className="social-proof">
            <div className="social-links">
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
            </div>
            <span>
              PHP · Laravel · WHMCS
              <br />
              <b>Custom development & API integrations.</b>
            </span>
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-orbit orbit-one" />
          <div className="hero-orbit orbit-two" />
          <div className="floating-chip chip-code">&lt;code /&gt;</div>
          <div className="floating-chip chip-api">
            API integrations <span>↗</span>
          </div>
          <div className="floating-chip chip-stack">PHP · Laravel · React</div>
          <img
            className="hero-character"
            src="/assets/vishal-3d-hero.png"
            alt="Vishal Kumar - Software Developer 3D Character Illustration"
            width="570"
            height="410"
            fetchPriority="high"
          />
          <div className="hero-caption">
            <span className="caption-dot" /> Thoughtful code. Useful products.
          </div>
        </div>
      </div>
      <a
        className="scroll-cue"
        href="#about"
        aria-label="Scroll to about section"
      >
        <span>
          <ArrowDown size={15} />
        </span>{" "}
        Scroll to explore
      </a>
    </section>
  );
}
