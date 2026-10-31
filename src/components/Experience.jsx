import { BriefcaseBusiness } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { experience } from "../data/portfolio";

export default function Experience() {
  return (
    <section className="section-pad" id="journey">
      <div className="container">
        <SectionHeading
          eyebrow="PROFESSIONAL JOURNEY"
          title={
            <>
              Learning through <span className="gradient-text">real work.</span>
            </>
          }
          text="A progression from technical training to PHP development, WHMCS engineering and independent platform ownership."
        />

        <div className="lk-timeline mt-4">
          {experience.map((company, ci) => (
            <div className="lk-company-block" key={ci}>
              {/* Roles roadmap */}
              <div className="lk-roles">
                {company.roles.map((role, ri) => (
                  <div className="lk-role-item reveal" key={ri}>
                    {/* Logo column — only show on first role */}
                    <div className="lk-role-logo-col">
                      {ri === 0 ? (
                        <div className="lk-company-logo">
                          {company.logo ? (
                            <img
                              src={company.logo}
                              alt={company.company}
                              width="52"
                              height="52"
                              loading="lazy"
                            />
                          ) : (
                            <BriefcaseBusiness size={20} />
                          )}
                        </div>
                      ) : (
                        <div className="lk-logo-line-spacer" />
                      )}
                    </div>

                    {/* Spine + content */}
                    <div className="lk-role-right">
                      <div className="lk-role-spine">
                        <div className="lk-role-dot" />
                        {ri < company.roles.length - 1 && (
                          <div className="lk-role-line" />
                        )}
                      </div>
                      <div className="lk-role-content">
                        <h4 className="lk-role-title">{role.role}</h4>
                        <span className="lk-role-company">
                          {company.linkedIn ? (
                            <a
                              href={company.linkedIn}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              {company.company}
                            </a>
                          ) : (
                            company.company
                          )}
                          &nbsp;·&nbsp;{company.companyType}
                        </span>
                        <span className="lk-role-period">
                          {role.period} &nbsp;·&nbsp; {role.duration}
                        </span>
                        <p className="lk-role-detail">{role.detail}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
