export const profile = {
  name: "Vishal Kumar",
  role: "Software Developer",
  headline: "Building practical software for real business needs.",
  intro:
    "I’m a Software Developer focused on PHP, Laravel and WHMCS. I build custom modules, connect business systems through APIs, and independently develop and maintain features for the HostingSeekers platform.",
  github: "https://github.com/iamvishushakti",
  linkedin: "https://www.linkedin.com/in/iamvishushakti/",
  location: "Madhepura, Bihar 852113, India",
  email: "iamvishushakti@gmail.com",
  resumeUrl: "/Vishal-Kumar-Resume.pdf",
  gmailUrl:
    "https://mail.google.com/mail/?view=cm&fs=1&to=iamvishushakti@gmail.com",
  googleChatUrl: "https://chat.google.com/dm/iamvishushakti@gmail.com",
  phone: "+91 9102956764",
  joined: "2023-06-01",
};

export const skills = [
  { name: "PHP", type: "Backend" },
  { name: "Laravel", type: "Backend" },
  { name: "JavaScript", type: "Frontend" },
  { name: "React", type: "Frontend" },
  { name: "Node.js", type: "Backend" },
  { name: "MySQL", type: "Database" },
  { name: "MongoDB", type: "Database" },
  { name: "WHMCS", type: "Platform" },
  { name: "Redis", type: "Database" },
  { name: "Bootstrap", type: "Frontend" },
  { name: "GSAP", type: "Animation" },
  { name: "Tailwind CSS", type: "Frontend" },
];
export const learning = ["Next.js", "Vue.js"];

export const projects = [
  {
    number: "01",
    title: "HostingSeekers",
    category: "LARAVEL · WEB PLATFORM DEVELOPMENT",
    description:
      "Currently contributing to the HostingSeekers platform using Laravel — developing dynamic features, advertisement management, static-to-dynamic page conversions, technical SEO enhancements, and Core Web Vitals / PageSpeed optimization.",
    tags: [
      { name: "PHP", icon: "devicon-php-plain colored" },
      { name: "Laravel", icon: "devicon-laravel-plain colored" },
      { name: "MySQL", icon: "devicon-mysql-plain colored" },
      { name: "JavaScript", icon: "devicon-javascript-plain colored" },
      { name: "jQuery", icon: "devicon-jquery-plain colored" },
      { name: "SEO", icon: "devicon-chrome-plain colored" },
    ],
    accent: "red",
    image: "/assets/hostingseekers-logo.png",
    href: "https://www.hostingseekers.com/",
  },
  {
    number: "02",
    title: "Spanish Fiscal e-Invoicing",
    category: "WHMCS MODULE · FISKALY API",
    description:
      "Contributed as the sole developer on this company project — built the WHMCS module end-to-end, integrating Fiskaly APIs to handle Spanish fiscal e-invoicing workflows including Verifactu and TicketBAI tax reporting.",
    tags: [
      { name: "PHP", icon: "devicon-php-plain colored" },
      { name: "WHMCS", icon: "lucide:Settings", color: "#22c55e" },
      { name: "Fiskaly API", icon: "devicon-fastapi-plain colored" },
      { name: "Verifactu", icon: "devicon-javascript-plain colored" },
      { name: "TicketBAI", icon: "devicon-javascript-plain colored" },
    ],
    accent: "violet",
  },
  {
    number: "03",
    title: "QuickBooks CRM Integration",
    category: "WHMCS MODULE · API INTEGRATION",
    description:
      "Developed as part of my role at Shine Design Infotech — implemented the full integration between WHMCS and QuickBooks CRM, synchronizing client, product and invoice data via REST APIs.",
    tags: [
      { name: "PHP", icon: "devicon-php-plain colored" },
      { name: "WHMCS", icon: "lucide:Settings", color: "#22c55e" },
      { name: "QuickBooks API", icon: "devicon-google-plain colored" },
      { name: "REST API", icon: "devicon-fastapi-plain colored" },
    ],
    accent: "blue",
  },
  {
    number: "04",
    title: "KYC Verification Module",
    category: "WHMCS MODULE · DOCUMENT WORKFLOW",
    description:
      "Built end-to-end as a developer for this company product — engineered the complete KYC document workflow covering client uploads, admin review, approval/rejection logic, and access restriction until verification is cleared.",
    tags: [
      { name: "PHP", icon: "devicon-php-plain colored" },
      { name: "WHMCS", icon: "lucide:Settings", color: "#22c55e" },
      { name: "KYC", icon: "devicon-ssh-plain colored" },
      { name: "Access Control", icon: "devicon-nginx-plain colored" },
    ],
    accent: "orange",
  },
];

export const experience = [
  {
    company: "Shine Design Infotech Pvt. Ltd.",
    companyType: "Full-time",
    totalPeriod: "JUN 2023 — PRESENT",
    totalDuration: "2 yrs 5 mos",
    logo: "/assets/shine-logo.png",
    linkedIn:
      "https://www.linkedin.com/company/shine-dezign-infonet-pvt-ltd/posts/",
    roles: [
      {
        period: "JAN 2025 — PRESENT",
        duration: "10 mos",
        role: "PHP Developer",
        detail:
          "Develop and maintain WHMCS modules, addons, API integrations, custom order forms, client-area experiences and reports. Independently handle development and maintenance for HostingSeekers using Laravel: advertisement display and management, converting static pages into dynamic pages, creating new pages, fixing issues, and technical SEO and PageSpeed improvements.",
      },
      {
        period: "JAN 2024 — DEC 2024",
        duration: "1 yr",
        role: "Junior PHP Developer",
        detail:
          "Moved into WHMCS development, contributing to custom modules, addons, hooks, integrations and client-specific functionality.",
      },
      {
        period: "JUN 2023 — DEC 2023",
        duration: "7 mos",
        role: "PHP Intern",
        detail:
          "Started the professional PHP development journey and gained practical experience with backend development and WHMCS.",
      },
    ],
  },
  {
    company: "Emicon",
    companyType: "Trainee",
    totalPeriod: "SEP 2022 — MAY 2023",
    totalDuration: "9 mos",
    logo: "/assets/emicon-logo.png",
    linkedIn:
      "https://www.linkedin.com/company/emicon-advisory-services-llp?originalSubdomain=in",
    roles: [
      {
        period: "SEP 2022 — MAY 2023",
        duration: "9 mos",
        role: "Trainee Software Engineer",
        detail:
          "Training-focused experience in SQL, PL/SQL and Oracle Database, with exposure to SaaS and PaaS concepts.",
      },
    ],
  },
];

export const education = [
  {
    degree: "Master of Computer Applications (MCA)",
    school: "School of Computer Applications, Lovely Professional University",
    period: "AUG 2021 — JUL 2023",
    score: "7.95 CGPA · 79.50%",
    logo: "/assets/lpu-logo.png",
    logoAlt: "LPU Logo",
  },
  {
    degree: "Bachelor of Computer Applications (BCA)",
    school: "Bhupendra Narayan Mandal University, Madhepura",
    period: "2017 — 2020",
    score: "80.42%",
    logo: "/assets/bnmu-logo.jpg",
    logoAlt: "BNMU Logo",
  },
];
