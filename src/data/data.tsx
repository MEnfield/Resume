import { Project, SidenavLink, SkillGroup, Stat, Work } from "./types";
import SimplifiLogo from "../assets/simplifi_logo.svg";
import HealthNetworkLogo from "../assets/healthnetwork_logo.svg";
import BidtellectLogo from "../assets/bidtellect_logo.svg";
import DriversAlert from "../assets/drivers_alert_logo.svg";

export const profile = {
  name: "Mitchell Enfield",
  title: "Senior Software Engineer",
  subtitle: "Full-Stack TypeScript & Design Systems",
  location: "St. Johns, FL",
  email: "MitchEnfield@gmail.com",
  phone: "(561) 699-0925",
  phoneHref: "tel:5616990925",
  github: "https://github.com/MEnfield",
  linkedin: "https://www.linkedin.com/in/mitchell-enfield-966014117/",
  summary: `Full-stack engineer with 10 years shipping product in TypeScript. I currently own the shared
component library and design-system tooling behind a health-insurance platform, used across its consumer
and employer-facing applications. Outside of work I designed, built, and run Riff Circle, a production
social platform for musicians, entirely on my own — schema and migrations through to billing, monitoring,
and deploys.`,
};

export const stats: Stat[] = [
  { value: "10 yrs", label: "Building software professionally" },
  { value: "Since 2017", label: "Shipping React in production" },
  { value: "8 apps", label: "Shipped across 4 employers" },
];

export const jobs: Work[] = [
  {
    company: "Allstate",
    title: "Software Engineer, Senior Consultant II",
    time: "Dec 2025 – Present",
    meta: "Remote · Part-time",
    current: true,
    bullets: [
      "Lead full-stack development across a TypeScript monorepo powering a suite of health-insurance products — a consumer shopping platform, employer and employee portals, and internal agent tooling.",
      "Own the shared React component library used across the platform's applications — component architecture, theming API, accessibility baseline, documentation, and test coverage.",
      "Created a Figma-to-code pipeline — a design-token fetch script plus a documented AI workflow — that turns a Figma component link into a themed, tested library component, eliminating a recurring class of design-parity defects.",
      "Led front-end delivery of a group health-benefits quoting experience, rolled out incrementally behind feature flags, covering benefit configuration, live cost calculations, and per-employee breakdowns.",
      "Shipped a bulk employer-data migration workflow end-to-end in the agent portal, from typed API client through upload validation and long-running job status.",
      "Established the front-end testing standard, introducing shared API-mocking infrastructure and eliminating flaky, time-dependent tests across the suite.",
      "Implemented multi-brand theming through a build-time brand-CSS package, letting one component library render distinct branded experiences across consumer, employer, and employee applications.",
      "Drove accessibility and responsive fixes across the library and shopping flows, and extended shared Zod schemas across the API/portal boundary so contract changes surface as compile-time errors.",
    ],
  },
  {
    company: "HealthNetwork",
    title: "Full-Stack Developer (Contract)",
    time: "Jun 2023 – Dec 2025",
    meta: "Remote · Part-time",
    icon: HealthNetworkLogo,
    bullets: [
      "Built features for the health-insurance application Allstate uses to onboard and manage group-policy customers.",
      "Implemented server-side rendering and API routes in Next.js to improve performance and SEO.",
      "Built responsive, accessible UI components in TypeScript, React, and Next.js for desktop and mobile.",
      "Modeled and queried MySQL data covering policy records, customer groups, and transactional history.",
    ],
  },
  {
    company: "Simpli.fi",
    title: "Senior UI/UX Developer",
    time: "Feb 2019 – Dec 2025",
    meta: "Remote · Full-time",
    icon: SimplifiLogo,
    bullets: [
      "Architected and led the migration of a legacy AngularJS codebase to a modern React + TypeScript stack, cutting technical debt and reducing feature development time.",
      "Led UI/UX for new product features, translating user needs and business goals into high-fidelity mockups and interactive prototypes in Figma.",
      "Architected scalable client-side solutions in React and TypeScript with an emphasis on maintainability and runtime performance.",
      "Mentored junior developers on front-end best practices and modern TypeScript, raising code quality and consistency across the team.",
    ],
  },
  {
    company: "Driver's Alert",
    title: "Full-Stack Software Engineer",
    time: "Jan 2017 – Feb 2019",
    meta: "Deerfield Beach, FL · Full-time",
    icon: DriversAlert,
    bullets: [
      "Contributed to a full redesign of a legacy web application, modernizing the stack with Node.js, Express, and React to improve performance and maintainability.",
      "Developed RESTful APIs in Node.js and Express to handle data operations and business logic, enabling a more modular and scalable backend.",
      "Designed SQL Server queries and stored procedures to support new features and optimize database interactions.",
      "Translated user requirements into technical tasks in design discussions, keeping front-end and backend work aligned.",
    ],
  },
  {
    company: "Bidtellect",
    title: "Quality Intern, then Independent Quality Contractor",
    time: "Mar – Nov 2016",
    meta: "Delray Beach, FL · Part-time",
    icon: BidtellectLogo,
    bullets: [
      "Reviewed developer code and designed test plans for a demand-side platform (DSP), documenting bugs, inconsistencies, and edge cases across core ad-serving features.",
    ],
  },
];

export const projects: Project[] = [
  {
    title: "Riff Circle",
    tagline: "Sole designer, engineer, and operator",
    description: `A production social platform where musicians find collaborators, book gigs, and manage
bands, with map-based discovery of nearby players and events. I modeled the full relational domain —
events, bands, setlists, messaging, reviews, and social graphs — evolved it through versioned migrations,
and exposed it via type-safe tRPC routers. I run the entire production surface myself: Stripe billing with
webhook reconciliation, rate limiting, bot protection, error monitoring, scheduled jobs, web push, and an
installable PWA with offline support.`,
    stack: [
      "Next.js",
      "tRPC",
      "Prisma",
      "PostgreSQL / PostGIS",
      "Stripe",
      "Supabase",
      "PWA",
    ],
    liveUrl: "https://riffcircle.com",
    featured: true,
  },
];

export const skillGroups: SkillGroup[] = [
  {
    label: "Languages & Frameworks",
    items: ["TypeScript", "JavaScript", "React", "Next.js", "Node.js", "Express"],
  },
  {
    label: "Front-End",
    items: [
      "Design systems",
      "Storybook",
      "MUI",
      "Tailwind / shadcn",
      "WCAG accessibility",
      "Responsive UI",
    ],
  },
  {
    label: "Back-End & Data",
    items: [
      "REST API design",
      "Zod",
      "MySQL",
      "PostgreSQL",
      "SQL Server",
      "Prisma",
    ],
  },
  {
    label: "Testing",
    items: ["Vitest", "Mock Service Worker", "React Testing Library", "Jest"],
  },
  {
    label: "Tooling & Practice",
    items: [
      "Turborepo",
      "pnpm",
      "LaunchDarkly",
      "Figma",
      "CI/CD",
      "AI-augmented development",
    ],
  },
];

export const education = {
  school: "Florida Atlantic University",
  degree: "Bachelor of Science in Computer Science",
  time: "2012 – 2016",
  url: "https://www.fau.edu/",
};

export const sidenavLinks: SidenavLink[] = [
  { url: "#about", label: "About" },
  { url: "#experience", label: "Experience" },
  { url: "#work", label: "Product" },
  { url: "#skills", label: "Skills" },
  { url: "#education", label: "Education" },
  { url: "#contact", label: "Contact" },
];
