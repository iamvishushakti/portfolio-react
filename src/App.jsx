import { useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TechStrip from "./components/TechStrip";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const [theme, setTheme] = useState(
    () => localStorage.getItem("portfolio-theme") || "dark",
  );

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-copy > *", {
        y: 28,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
        delay: 0.12,
      });
      gsap.from(".hero-character", {
        y: 36,
        opacity: 0,
        scale: 0.94,
        duration: 1.1,
        ease: "power3.out",
        delay: 0.25,
      });
      gsap.to(".hero-character", {
        y: -15,
        duration: 2.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
      gsap.to(".floating-chip", {
        y: -10,
        duration: 2.1,
        stagger: 0.25,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
      // Floating animation for About section visual card & inner items
      gsap.to(".about-art-inner", {
        y: -12,
        duration: 3.2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
      gsap.to(".about-code-card", {
        y: -15,
        rotation: 5,
        duration: 2.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 0.2,
      });
      gsap.to(".art-scribble", {
        y: -8,
        rotation: -5,
        duration: 2.8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 0.35,
      });
      gsap.to(".art-spark", {
        rotation: 360,
        duration: 20,
        repeat: -1,
        ease: "none",
      });
      gsap.utils.toArray(".reveal").forEach((element) => {
        gsap.fromTo(
          element,
          { y: 38, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.75,
            ease: "power2.out",
            scrollTrigger: { trigger: element, start: "top 88%", once: true },
          },
        );
      });
      gsap.utils.toArray(".tech-pill").forEach((element, i) => {
        gsap.from(element, {
          y: 14,
          opacity: 0,
          duration: 0.45,
          delay: i * 0.035,
          scrollTrigger: {
            trigger: ".tech-strip",
            start: "top 90%",
            once: true,
          },
        });
      });
      gsap.utils.toArray(".skill-tag-pill").forEach((element, i) => {
        gsap.from(element, {
          scale: 0.8,
          opacity: 0,
          duration: 0.35,
          delay: (i % 4) * 0.07,
          ease: "back.out(1.5)",
          scrollTrigger: {
            trigger: ".skills-section",
            start: "top 82%",
            once: true,
          },
        });
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <div className="app-shell">
      <Navbar
        theme={theme}
        onToggle={() => setTheme((t) => (t === "light" ? "dark" : "light"))}
      />
      <main>
        <Hero />
        <TechStrip />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
