import {
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
} from "lucide-react";
import { profile } from "../data/portfolio";
import SectionHeading from "./SectionHeading";
export default function Contact() {
  return (
    <section className="section-pad contact-section" id="contact">
      <div className="container">
        <div className="contact-panel reveal">
          <div className="contact-copy">
            <SectionHeading
              eyebrow="CONTACT"
              title={
                <>
                  Let’s discuss your
                  <br />
                  <span className="gradient-text">next project.</span>
                </>
              }
              text="For development opportunities, collaborations or a conversation about a software requirement, feel free to get in touch."
            />
            <div className="d-flex flex-wrap gap-2 mt-4">
              <a
                className="btn btn-primary-gradient"
                href={profile.gmailUrl}
                target="_blank"
                rel="noreferrer"
              >
                Send an email <ArrowUpRight size={17} />
              </a>
              <a
                className="btn btn-outline-soft"
                href="https://wa.me/919102956764?text=Hi%20Vishal%20Kumar,%20I%20saw%20your%20portfolio"
                target="_blank"
                rel="noreferrer"
              >
                <MessageSquare size={16} /> Instant Chat
              </a>
            </div>
          </div>
          <div className="contact-details">
            <a href={profile.gmailUrl} target="_blank" rel="noreferrer">
              <span>
                <Mail size={18} />
              </span>
              <div>
                <small>EMAIL (GMAIL)</small>
                <b>{profile.email}</b>
              </div>
              <ArrowUpRight size={16} />
            </a>
            <a
              href="https://wa.me/919102956764?text=Hi%20Vishal%20Kumar,%20I%20saw%20your%20portfolio"
              target="_blank"
              rel="noreferrer"
            >
              <span>
                <MessageSquare size={18} />
              </span>
              <div>
                <small>INSTANT CHAT</small>
                <b>Chat on WhatsApp</b>
              </div>
              <ArrowUpRight size={16} />
            </a>
            <a href={`tel:${profile.phone.replace(/\s/g, "")}`}>
              <span>
                <Phone size={18} />
              </span>
              <div>
                <small>PHONE</small>
                <b>{profile.phone}</b>
              </div>
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer">
              <span>
                <Linkedin size={18} />
              </span>
              <div>
                <small>LINKEDIN</small>
                <b>Connect professionally</b>
              </div>
              <ArrowUpRight size={16} />
            </a>
            <a href={profile.github} target="_blank" rel="noreferrer">
              <span>
                <Github size={18} />
              </span>
              <div>
                <small>GITHUB</small>
                <b>Explore my code</b>
              </div>
              <ArrowUpRight size={16} />
            </a>
            <div>
              <span>
                <MapPin size={18} />
              </span>
              <div>
                <small>LOCATION</small>
                <b>{profile.location}</b>
              </div>
            </div>
          </div>
          <div className="contact-decoration">
            LET’S
            <br />
            BUILD <span>↗</span>
          </div>
        </div>
      </div>
    </section>
  );
}
