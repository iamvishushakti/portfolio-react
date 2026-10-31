# Vishal Kumar — Software Developer Portfolio

Responsive portfolio built with React, Vite, Bootstrap 5, GSAP and Lucide icons. Includes a 3D-inspired hero, animated sections, responsive project cards and a light/dark theme toggle.

## Run locally

```bash
npm install
npm run dev
```

Open the local Vite URL shown in the terminal.

## Production build

```bash
npm run build
npm run preview
```

## Update portfolio content

- `src/data/portfolio.js`: profile, skills, experience, projects and education.
- `src/data/linkedinProjects.js`: add LinkedIn post project cards. Add the URL plus verified title, description, tech stack and highlights.
- `public/assets/vishal-3d-hero.png`: replace the illustrative hero artwork if desired.
- `public/assets/design-reference.png`: visual reference asset.

LinkedIn does not reliably permit automatic browser-side extraction of post content. To add a new post, review it and enter its verified details in `src/data/linkedinProjects.js`; the React UI renders all entries from that file.

## Confirmed experience timeline

- Emicon — Trainee Software Engineer (Sep 2022–May 2023)
- Shine Design Infotech — PHP Intern (Jun–Dec 2023)
- Shine Design Infotech — Junior PHP Developer (Jan–Dec 2024)
- Shine Design Infotech — PHP Developer (Jan 2025–Present)

The profile uses only details provided by Vishal Kumar. YouTube is intentionally omitted.
