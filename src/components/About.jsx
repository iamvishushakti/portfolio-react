import { Braces, Cable, Gauge, Workflow } from "lucide-react";
import SectionHeading from "./SectionHeading";
const values = [
  {
    icon: Braces,
    title: "WHMCS development",
    text: "Custom modules, addons, reports, order forms and client-area functionality.",
  },
  {
    icon: Cable,
    title: "API integrations",
    text: "Connecting WHMCS with external business services using their APIs.",
  },
  {
    icon: Gauge,
    title: "Platform improvement",
    text: "Feature development, issue fixing and technical SEO/performance work on HostingSeekers.",
  },
  {
    icon: Workflow,
    title: "End-to-end ownership",
    text: "Taking a requirement from understanding the workflow through implementation and maintenance.",
  },
];
export default function About() {
  return (
    <section className="section-pad" id="about">
      <div className="container about-grid">
        <div className="about-art reveal">
          <div className="about-art-inner">
            <div className="art-scribble">
              build
              <br />
              solve
              <br />
              improve<span>↗</span>
            </div>
            <div className="about-code-card">
              <span>const focus =</span>
              <b>“Useful software.”</b>
              <i>✓ PHP & WHMCS</i>
              <i>✓ Laravel & APIs</i>
            </div>
            <div className="art-spark">✳</div>
          </div>
          <div className="about-image-note">
            Built around real product requirements.
          </div>
        </div>
        <div className="about-content reveal">
          <SectionHeading
            eyebrow="ABOUT ME"
            title={
              <>
                Software developer.
                <br />
                <span className="gradient-text">Product-minded builder.</span>
              </>
            }
            text="I’m Vishal Kumar, a Software Developer working mainly with PHP, Laravel and WHMCS. I joined Shine Design Infotech as a PHP Intern in June 2023, moved into a Junior PHP Developer role in January 2024, and became a PHP Developer in January 2025."
          />
          <p className="about-detail">
            My work includes building complete WHMCS modules from scratch,
            integrating third-party APIs, and customizing billing and client
            workflows. Alongside WHMCS development, I independently handle
            Laravel development and maintenance for HostingSeekers, including
            new pages, advertisement functionality, issue fixing and technical
            SEO/performance improvements.
          </p>
          <div className="value-grid">
            {values.map(({ icon: Icon, title, text }) => (
              <div className="value-card" key={title}>
                <span className="value-icon">
                  <Icon size={18} />
                </span>
                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
