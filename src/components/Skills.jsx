import { Code2, Database, Layers3, Sparkles, Settings } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { learning } from "../data/portfolio";

const groups = [
  {
    title: "Backend & platforms",
    icon: Code2,
    items: [
      { name: "PHP", icon: "devicon-php-plain colored" },
      { name: "Laravel", icon: "devicon-laravel-plain colored" },
      { name: "WHMCS", icon: "lucide:Settings", color: "#22c55e" },
      { name: "Node.js", icon: "devicon-nodejs-plain colored" },
    ],
  },
  {
    title: "Frontend",
    icon: Layers3,
    items: [
      { name: "JavaScript", icon: "devicon-javascript-plain colored" },
      { name: "React", icon: "devicon-react-original colored" },
      { name: "Bootstrap", icon: "devicon-bootstrap-plain colored" },
      { name: "Tailwind CSS", icon: "devicon-tailwindcss-plain colored" },
    ],
  },
  {
    title: "Databases & cache",
    icon: Database,
    items: [
      { name: "MySQL", icon: "devicon-mysql-plain colored" },
      { name: "MongoDB", icon: "devicon-mongodb-plain colored" },
      { name: "Redis", icon: "devicon-redis-plain colored" },
    ],
  },
  {
    title: "Animation",
    icon: Sparkles,
    items: [{ name: "GSAP", icon: "devicon-javascript-plain colored" }],
  },
];

function SkillIcon({ icon, color }) {
  if (!icon) return null;
  if (icon === "lucide:Settings") {
    return <Settings size={12} color={color || "currentColor"} />;
  }
  return <i className={icon} style={color ? { color } : {}}></i>;
}

export default function Skills() {
  return (
    <section className="section-pad skills-section" id="skills">
      <div className="container">
        <SectionHeading
          eyebrow="TECHNICAL TOOLKIT"
          title={
            <>
              The technologies behind{" "}
              <span className="gradient-text animated-shimmer">my work.</span>
            </>
          }
          text="Technologies I have worked with across backend development, frontend interfaces, databases and WHMCS."
        />
        <div className="row g-3 mt-2">
          {groups.map(({ title, icon: Icon, items }) => (
            <div className="col-12 col-md-6 col-lg-3" key={title}>
              <div className="skill-card reveal">
                <div className="skill-icon">
                  <Icon size={20} />
                </div>
                <h3>{title}</h3>
                <div className="skill-tags">
                  {items.map((item) => (
                    <span key={item.name} className="skill-tag-pill">
                      <SkillIcon icon={item.icon} color={item.color} />
                      {item.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="learning-strip reveal">
          <span className="learning-label">
            <span className="learning-indicator" />
            Currently learning
          </span>
          {learning.map((x) => (
            <b key={x} className="learning-pill">
              <i
                className={
                  x.toLowerCase().includes("next")
                    ? "devicon-nextjs-plain"
                    : "devicon-vuejs-plain colored"
                }
              />
              {x}
            </b>
          ))}
        </div>
      </div>
    </section>
  );
}
