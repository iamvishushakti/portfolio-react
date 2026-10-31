import { GraduationCap } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { education } from "../data/portfolio";
export default function Education() {
  return (
    <section className="section-pad education-section" id="education">
      <div className="container">
        <SectionHeading
          eyebrow="EDUCATION"
          title={
            <>
              A foundation in{" "}
              <span className="gradient-text">computer applications.</span>
            </>
          }
          text="Academic background in computer applications and software fundamentals."
        />
        <div className="row g-3 mt-2">
          {education.map((item) => (
            <div className="col-12 col-md-6" key={item.degree}>
              <article
                className="education-card reveal"
                style={{ position: "relative" }}
              >
                {item.logo && (
                  <img
                    src={item.logo}
                    alt={item.logoAlt}
                    className="education-uni-logo"
                  />
                )}
                <div className="education-icon">
                  <GraduationCap size={22} />
                </div>
                <span className="education-period">{item.period}</span>
                <h3>{item.degree}</h3>
                <p>{item.school}</p>
                <strong>{item.score}</strong>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
