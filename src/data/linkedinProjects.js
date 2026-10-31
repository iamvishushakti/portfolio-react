// Add each new LinkedIn project post here.
// LinkedIn does not reliably allow public browser-side scraping of post content.
// Add the post URL plus verified project details; the Projects page renders this list automatically.
export const linkedinProjects = [
  {
    id: "restaurant-operating-system",
    postUrl: "https://lnkd.in/p/gN5UECm5",
    title: "The Daily Culinary Chronicle — Restaurant Operating System",
    category: "FULL-STACK · RESTAURANT MANAGEMENT",
    description:
      "A multi-role restaurant operating system with customer ordering, wallet and rewards, table workflows, kitchen order dispatch, chef preparation timers and cashier billing.",
    stack: [
      "React",
      "Tailwind CSS",
      "Vite",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "Socket.io",
      "Redis",
      "Nodemailer",
    ],
    highlights: [
      "Email and 6-digit OTP authentication with Redis TTL",
      "Digital menu, customer wallet, cashback and rewards",
      "Table check-in and service alerts",
      "Real-time kitchen order dispatch and chef dashboard",
      "Cashier POS, billing and thermal receipt workflow",
    ],
  },
  {
    id: "redis-otp-verification-api",
    postUrl: "https://lnkd.in/p/gqdmYqMt",
    title: "OTP Verification API with Redis",
    category: "BACKEND · API DEVELOPMENT",
    description:
      "A Node.js API project using Redis for temporary OTP storage, expiry and verification flows, with Redis run through Docker.",
    stack: ["Node.js", "Express.js", "Redis", "Docker", "REST API"],
    highlights: [
      "6-digit OTP generation",
      "Redis TTL-based OTP expiry",
      "OTP verification and resend flow",
      "Redis service using Docker",
      "Organized routes, controllers and services",
    ],
  },
];
