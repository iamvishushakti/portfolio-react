import {
  ArrowUpRight,
  ExternalLink,
  Github,
  Linkedin,
  Settings,
} from "lucide-react";
import SectionHeading from "./SectionHeading";
import { projects } from "../data/portfolio";
import { linkedinProjects } from "../data/linkedinProjects";
import { useGitHub } from "../hooks/useGitHub";

const lucideMap = { Settings };

function TagIcon({ icon, color }) {
  if (!icon) return null;
  if (icon.startsWith("lucide:")) {
    const name = icon.replace("lucide:", "");
    const Comp = lucideMap[name];
    return Comp ? <Comp size={12} color={color || "currentColor"} /> : null;
  }
  return <i className={icon} style={color ? { color } : {}}></i>;
}

export default function Projects() {
  const github = useGitHub();
  return (
    <section className="section-pad" id="projects">
      <div className="container">
        <div className="d-flex flex-wrap align-items-end justify-content-between gap-3 mb-4">
          <SectionHeading
            eyebrow="SELECTED WORK"
            title={
              <>
                A few things I’ve{" "}
                <span className="gradient-text animated-shimmer">
                  worked on.
                </span>
              </>
            }
            text="A snapshot of the products, modules and integrations I enjoy building."
          />
          <a
            className="text-link mb-2"
            href="https://github.com/iamvishushakti"
            target="_blank"
            rel="noreferrer"
          >
            <Github size={16} /> Explore GitHub <ArrowUpRight size={16} />
          </a>
        </div>
        <div className="projects-hscroll">
          {projects.map((p) => (
            <div className="projects-hscroll-item" key={p.number}>
              <article className={`project-card project-${p.accent} reveal`}>
                <div className="project-visual">
                  <span className="project-number">
                    {p.number} / {String(projects.length).padStart(2, "0")}
                  </span>
                  {p.image ? (
                    <div className="project-image-box">
                      <img
                        src={p.image}
                        alt={`${p.title} platform preview`}
                        className="project-image-media"
                        loading="lazy"
                      />
                    </div>
                  ) : (
                    <div className="project-window">
                      <div className="window-top">
                        <i />
                        <i />
                        <i />
                        <span>workspace / {p.number}</span>
                      </div>
                      <div className="window-body">
                        <div className="window-sidebar">
                          <b>⌘</b>
                          <i />
                          <i />
                          <i />
                          <i />
                        </div>
                        <div className="window-main">
                          <div className="window-line long" />
                          <div className="window-line short" />
                          <div className="window-panels">
                            <i />
                            <i />
                            <i />
                          </div>
                          <div className="window-line medium" />
                        </div>
                      </div>
                    </div>
                  )}
                  <span className="project-orb" />
                </div>
                <div className="project-info">
                  <span className="project-category">{p.category}</span>
                  <h3>{p.title}</h3>
                  <p>{p.description}</p>
                  <div className="project-tags">
                    {p.tags.map((t) => (
                      <span key={t.name}>
                        <TagIcon icon={t.icon} color={t.color} />
                        {t.name}
                      </span>
                    ))}
                  </div>
                  {p.href && (
                    <a
                      href={p.href}
                      target="_blank"
                      rel="noreferrer"
                      className="project-link"
                    >
                      Visit live platform <ExternalLink size={14} />
                    </a>
                  )}
                </div>
              </article>
            </div>
          ))}
        </div>

        <div className="linkedin-projects mt-5">
          <div className="d-flex flex-wrap align-items-end justify-content-between gap-3 mb-3">
            <div>
              <span className="eyebrow">FROM MY LINKEDIN POSTS</span>
              <h3 className="mt-2">Projects & experiments</h3>
            </div>
            <a
              className="text-link mb-2"
              href="https://www.linkedin.com/in/iamvishushakti/"
              target="_blank"
              rel="noreferrer"
            >
              <Linkedin size={16} /> View LinkedIn profile{" "}
              <ArrowUpRight size={16} />
            </a>
          </div>
          <div className="row g-3">
            {linkedinProjects.map((p) => (
              <div className="col-12 col-lg-6" key={p.id}>
                <article className="project-card reveal">
                  <div className="project-visual">
                    <span className="project-number">
                      LINKEDIN /{" "}
                      {p.id === "restaurant-operating-system" ? "01" : "02"}
                    </span>
                    <div className="project-window">
                      <div className="window-top">
                        <i />
                        <i />
                        <i />
                        <span>project / overview</span>
                      </div>
                      <div className="window-body">
                        <div className="window-sidebar">
                          <b>⌘</b>
                          <i />
                          <i />
                          <i />
                        </div>
                        <div className="window-main">
                          <div className="window-line long" />
                          <div className="window-line short" />
                          <div className="window-panels">
                            <i />
                            <i />
                            <i />
                          </div>
                          <div className="window-line medium" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="project-info">
                    <span className="project-category">{p.category}</span>
                    <h3>{p.title}</h3>
                    <p>{p.description}</p>
                    <ul className="small mb-3">
                      {p.highlights.map((h) => (
                        <li key={h}>{h}</li>
                      ))}
                    </ul>
                    <div className="project-tags">
                      {p.stack.map((t) => (
                        <span key={t}>{t}</span>
                      ))}
                    </div>
                    <a
                      href={p.postUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="project-link"
                    >
                      <Linkedin size={14} /> Read LinkedIn post{" "}
                      <ExternalLink size={14} />
                    </a>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>
        <p className="project-footnote">
          Project descriptions are based on the work details shared by Vishal
          Kumar. Public product and LinkedIn post links are provided where
          available.
        </p>
        {/* <div className="github-live mt-4 reveal">
          <div><span className="eyebrow">LIVE FROM GITHUB</span><h3>{github.loading ? "Loading public repositories…" : github.error ? "See what I’m building on GitHub." : `Recent public repositories (${github.profile?.public_repos ?? "—"})`}</h3><p>Public projects are fetched from GitHub when the page loads.</p></div>
          <div className="github-repos">{github.repos.length ? github.repos.slice(0,3).map(repo => <a key={repo.id} href={repo.html_url} target="_blank" rel="noreferrer"><b>{repo.name}</b><span>{repo.language || "Code"} · ★ {repo.stargazers_count}</span></a>) : <a href="https://github.com/iamvishushakti" target="_blank" rel="noreferrer"><b>github.com/iamvishushakti</b><span>Open profile ↗</span></a>}</div>
        </div> */}
      </div>
    </section>
  );
}
