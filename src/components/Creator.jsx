import { ArrowUpRight, Play, Youtube } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { profile } from "../data/portfolio";
export default function Creator() {
  return (
    <section className="section-pad creator-section">
      <div className="container creator-panel reveal">
        <div className="creator-copy">
          <SectionHeading
            eyebrow="BEYOND THE EDITOR"
            title={
              <>
                Build it. Learn it.
                <br />
                <span className="gradient-text">Share it.</span>
              </>
            }
            text="I also create developer-focused content. The goal is simple: make useful concepts easier to understand and encourage others to keep building."
          />
          <a
            className="btn btn-youtube"
            href={profile.youtube || profile.github}
            target="_blank"
            rel="noreferrer"
          >
            <Youtube size={17} />{" "}
            {profile.youtube
              ? "Visit YouTube channel"
              : "View my developer profile"}{" "}
            <ArrowUpRight size={16} />
          </a>
        </div>
        <div className="creator-visual">
          <div className="video-card video-one">
            <span className="play-circle">
              <Play size={18} fill="currentColor" />
            </span>
            <b>
              WHMCS
              <br />
              MODULES
            </b>
            <small>Build practical tools</small>
          </div>
          <div className="video-card video-two">
            <span className="play-circle">
              <Play size={18} fill="currentColor" />
            </span>
            <b>
              REACT
              <br />
              PROJECTS
            </b>
            <small>Learn by building</small>
          </div>
          <div className="creator-sticker">
            CREATE
            <br /> & SHARE <span>✳</span>
          </div>
        </div>
      </div>
    </section>
  );
}
