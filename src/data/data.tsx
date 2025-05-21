import { Work } from "./types";
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
    icon: <img src={HealthNetworkLogo} />,
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
    icon: <img src={SimplifiLogo} />,
  },
  {
    title: "UI/UX Developer",
    company: "Bidtellect",
    time: "February 2019 - March 2023",
    description: `Held an internship with Bidtellect from 2015-2016 while pursuing my Bachelor of Science degree in Computer Science. Following graduation, I was invited to re-engage with the company in 2019, when a full-time opportunity became available, and I was pleased to accept the offer.
As a UI/UX Developer at Bidtellect, I was responsible for a wide range of tasks, showcasing my versatility and expertise in the field. Initially, I maintained and optimized the company's existing AngularJS platform, before leading the migration to a new ReactJS platform. Additionally, I took on a rotational Scrum leadership role, facilitating agile development processes and collaborating with cross-functional teams. I also utilized Figma to design and prototype new features, driving innovation and enhancing the platform's user experience.`,
    icon: <img src={BidtellectLogo} />,
  },
  {
    title: "Fullstack Developer",
    company: "Driver's Alert",
    time: "June 2017 - February 2019",
    description: `After completing my Bachelor of Science degree in Computer Science, I joined Driver's Alert as a full-stack developer. In this role, I was responsible for leading the design and development of the company's platform redesign, leveraging a modernized technology stack at the time comprising ReactJS, Node.js, Express, and MSSQL. Throughout this project, I gained comprehensive knowledge of the platform development lifecycle, including requirements gathering from stakeholders, database design using Entity-Relationship Diagrams (ERDs), and user interface (UI) wireframing using Balsamiq. This experience enabled me to develop a holistic understanding of the platform development process, from conceptualization to deployment.`,
    icon: <img src={DriversAlert} />,
  },
];
