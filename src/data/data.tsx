import { Project, SidenavLink, Work } from "./types";
import SimplifiLogo from "../assets/simplifi_logo.svg";
import HealthNetworkLogo from "../assets/healthnetwork_logo.svg";
import BidtellectLogo from "../assets/bidtellect_logo.svg";
import DriversAlert from "../assets/drivers_alert_logo.svg";

export const jobs: Work[] = [
  {
    title: "Freelance Full-stack Developer",
    company: "Health Network",
    time: "July 2023 - Present",
    description: `I've done some contracting work as a freelance full-stack developer for Health Network where I have contributed to the setup and optimization of their platform for health insurance sales. My key responsibilities included implementing backend API endpoints for the client to use as well as developing client-facing frontend platform. I have utilized NextJS as the development framework, leveraging Redis for efficient user data caching and MySQL for robust data storage. Successfully delivered high-quality solutions that enhanced the platform's overall performance and user experience.`,
    icon: HealthNetworkLogo,
  },
  {
    title: "Senior UI/UX Developer",
    company: "Simpli.fi",
    time: "May 2023 - Present",
    description: `Following the acquisition of Bidtellect by Simpli.fi in 2023, I
            transitioned into a frontend developer role, continuing to work on
            the existing Bidtellect product, now rebranded. As a UI/UX
            developer, my responsibilities remained consistent, encompassing the
            design and development of new features, leadership of agile teams,
            and collaboration with cross-functional teams across the platform.
            During this tenure, I successfully maintained the legacy platform
            built with AngularJS, contributed to the development of a new
            platform using ReactJS, and utilized Figma to design and prototype
            new features prior to implementation.`,
    icon: SimplifiLogo,
  },
  {
    title: "UI/UX Developer",
    company: "Bidtellect",
    time: "February 2019 - March 2023",
    description: `Held an internship with Bidtellect from 2015-2016 while pursuing my Bachelor of Science degree in Computer Science. Following graduation, I was invited to re-engage with the company in 2019, when a full-time opportunity became available, and I was pleased to accept the offer.
As a UI/UX Developer at Bidtellect, I was responsible for a wide range of tasks, showcasing my versatility and expertise in the field. Initially, I maintained and optimized the company's existing AngularJS platform, before leading the migration to a new ReactJS platform. Additionally, I took on a rotational Scrum leadership role, facilitating agile development processes and collaborating with cross-functional teams. I also utilized Figma to design and prototype new features, driving innovation and enhancing the platform's user experience.`,
    icon: BidtellectLogo,
  },
  {
    title: "Fullstack Developer",
    company: "Driver's Alert",
    time: "June 2017 - February 2019",
    description: `After completing my Bachelor of Science degree in Computer Science, I joined Driver's Alert as a full-stack developer. In this role, I was responsible for leading the design and development of the company's platform redesign, leveraging a modernized technology stack at the time comprising ReactJS, Node.js, Express, and MSSQL. Throughout this project, I gained comprehensive knowledge of the platform development lifecycle, including requirements gathering from stakeholders, database design using Entity-Relationship Diagrams (ERDs), and user interface (UI) wireframing using Balsamiq. This experience enabled me to develop a holistic understanding of the platform development process, from conceptualization to deployment.`,
    icon: DriversAlert,
  },
];

export const projects: Project[] = [
  {
    title: "Jam Sesh",
    description:
      "This is a project I'm currently working on that will allow users to schedule jam sessions with one another as well as allow companies to create public gig listings that users can sign up to attend.",
    githubUrl: "https://github.com/MEnfield/Jam-sesh-ui",
    figmaUrl:
      "https://www.figma.com/proto/PdZwQAZXU8baVBUvJH1uNq/Jam-Sesh---Mobile?node-id=243-1741&p=f&t=FgnoDCGIxHm7KrzU-1&scaling=min-zoom&content-scaling=fixed&page-id=55%3A282&starting-point-node-id=243%3A1741",
    previewUrl:
      "https://github.com/user-attachments/assets/42251a2d-3e9a-463e-ae0a-f3cf784e1257",
  },
  {
    title: "Resume",
    description:
      "This project is what led to the creation of the website you're currently visiting. It's a static webpage built in React that features my resume, portfolio, and contact information.",
    githubUrl: "https://github.com/MEnfield/best-in-boca-petsitters",
    figmaUrl:
      "https://www.figma.com/proto/gd2CftzKBuqETnKvx9hLS0/Best-in-Boca-Petsitters?node-id=3-2&p=f&t=OF6oIy9MIc6ldm9S-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=3%3A2",
    previewUrl:
      "https://github.com/user-attachments/assets/05d22b30-38bc-485e-9a95-b11e20b2595d",
  },
  {
    title: "Best in Boca Petsitters",
    description:
      "This project was setup to help my mother in law attract customers for her pet sitting business. This website is a static webpage built in React that details her services, testimonial, and a gallery of the pets she has worked with.",
    githubUrl: "https://github.com/MEnfield/best-in-boca-petsitters",
    figmaUrl:
      "https://www.figma.com/proto/gd2CftzKBuqETnKvx9hLS0/Best-in-Boca-Petsitters?node-id=3-2&p=f&t=OF6oIy9MIc6ldm9S-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=3%3A2",
    previewUrl:
      "https://github.com/user-attachments/assets/751d66c9-15da-4c87-9208-0e6b65c5b325",
  },
];

export const skills: string[] = [
  "Javascript",
  "Typescript",
  "React",
  "Node.js",
  "NextJS",
  "MSSQL",
  "POSTGRES",
  "Graphql",
  "Angular",
  "REST API",
  "Figma",
];

export const sidenavLinks: SidenavLink[] = [
  { url: "#about-me", label: "About Me" },
  { url: "#work-experience", label: "Work Experience" },
  { url: "#portfolio", label: "Portfolio" },
  { url: "#skills", label: "Skills" },
  { url: "#education", label: "Education" },
  { url: "#contact", label: "Contact" },
];
