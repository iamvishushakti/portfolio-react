import { skills } from "../data/portfolio";
export default function TechStrip() {
  return (
    <div className="tech-strip">
      <div className="container tech-inner">
        <span className="tech-label">TOOLS I WORK WITH</span>
        <div className="tech-list">
          {skills.map((s, i) => (
            <span className="tech-pill" key={s.name}>
              <i>{String(i + 1).padStart(2, "0")}</i>
              {s.name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
