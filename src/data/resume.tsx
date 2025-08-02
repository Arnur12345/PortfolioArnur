import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Arnur",
  initials: "A",
  url: "https://arnur.dev",
  location: "Taraz, Kazakhstan",
  locationLink: "https://www.google.com/maps/place/taraz",
  description:
    "Software Engineer, Solo-founder, and interested in AI/ML. Building the future one startup at a time.",
  summary:
    "Just finished the 10th grade in Kazakhstan, obsessed with building startups, looking for investors/partners. Started to code in 13, and won several international competitions.",
  avatarUrl: "/arnur.png",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
    "Python",
    "Go",
    "Postgres",
    "Docker",
    "Kubernetes",
    "Java",
    "C++",
    "Product Management",
    "FastAPI",
    "Machine Learning"
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "arnurartyqbay@gmail.com",
    tel: "+77083883090",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Arnur12345",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/arnur-artykbay-578317259/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/arnurartykbay",
        icon: Icons.x,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "RavenAI",
      href: "https://ravenai.com",
      badges: [],
      location: "Remote",
      title: "Founder and CEO",
      logoUrl: "/raven.png",
      start: "June 2025",
      end: "Present",
      description:
        "Building a Meeting Notetaker to transform meetings into actionable tasks. Integrated bunch of services: Slack, Jira, Trello, ClickUp, Bitrix24. Built a microservice architecture, an autonomous bot that joins meetings from Google Calendar instantly.",
    },
    {
      company: "NamesMedia",
      badges: [],
      href: "https://namesmedia.com",
      location: "Remote",
      title: "AI Engineer Intern",
      logoUrl: "/namesmedia.png",
      start: "March 2025",
      end: "May 2025",
      description:
        "Built an automation system for emailing partners instantly as the new task in CRM was created. Integrated ClickUp API, used webhooks.",
    },
    {
      company: "SmartkozAI",
      href: "https://smartkozai.com",
      badges: [],
      location: "Remote",
      title: "Software Engineer (Backend)",
      logoUrl: "/smartkoz.png",
      start: "September 2024",
      end: "April 2025",
      description:
        "Built an admin panel for schools. Helped to train models to detect violence, weapon and smoking. Made over 10k+ datasets, synchronised the Computer Vision system with the Admin Panel. Built a notification system using RabbitMQ, and message brokers.",
    },
  ],
  education: [
    {
      school: "nFactorial Incubator",
      href: "https://nfactorial.school",
      degree: "Incubator Program",
      logoUrl: "/nfac.png",
      start: "June 2025",
      end: "August 2025",
    },
    {
      school: "Nazarbayev Intellectual School of Physics and Mathematics in Taraz",
      href: "https://nis.edu.kz",
      degree: "High School Diploma",
      logoUrl: "/nis.png",
      start: "September 2021",
      end: "May 2027",
    },
  ],
  projects: [
    {
      title: "RavenAI",
      href: "https://ravenai.com",
      dates: "June 2025 - Present",
      active: true,
      description:
        "Building a Meeting Notetaker to transform meetings into actionable tasks. Integrated bunch of services: Slack, Jira, Trello, ClickUp, Bitrix24. Built a microservice architecture, an autonomous bot that joins meetings from Google Calendar instantly.",
      technologies: [
        "React",
        "FastAPI",
        "MicroServices",
        "Docker",
        "NGINX",
        "Google OAuth",
        "CRM API's",
        "WhisperLive",
        "AI/ML",
      ],
      links: [
        {
          type: "Website",
          href: "https://ravenai.site",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://res.cloudinary.com/dq2pbzrtu/video/upload/v1753908050/RavenAI_demo_cadsve.mp4",
    },
  ],
} as const;
