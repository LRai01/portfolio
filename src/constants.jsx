
import React from 'react';
import { 
  Code2, 
  Layers, 
  MessageSquare, 
  PhoneCall, 
  ShieldCheck, 
  Cpu, 
  Layout, 
  Globe,
  Database
} from 'lucide-react';

export const PERSONAL_INFO = {
  name: "Lav Rai",
  title: "Full-Stack Engineer (Frontend Focused)",
  experience: "4.5+ Years of Experience",
  email: "lavrai177@gmail.com",
  phone: "+91-8930730474",
  github: "https://github.com/lavrai786",
  linkedin: "https://www.linkedin.com/in/lavrai177/",
  summary: "Full-Stack Engineer with 4.5+ years of experience building scalable, secure, and responsive enterprise web applications, with hands-on backend experience using Node.js, MSSQL, and Oracle. Skilled in React.js, Vue.js, TypeScript, JavaScript, and integrating SSO, real-time communication, and multi-channel platforms. Proven ability to deliver high-performance solutions that improve user experience and operational efficiency."
};

export const SKILL_GROUPS = [
  {
    category: "Frontend",
    skills: ["React.js", "Vue.js", "Electron.js", "Angular", "HTML5", "CSS3", "JavaScript", "TypeScript"]
  },
  {
    category: "State Management",
    skills: ["Redux", "Vuex", "Pinia"]
  },
  {
    category: "Backend & Integration",
    skills: ["Node.js", "Express.js", "REST APIs", "WebSockets"]
  },
  {
    category: "Database",
    skills: ["MSSQL", "Oracle", "SQL", "Query Optimization"]
  },
  {
    category: "Authentication",
    skills: ["Keycloak", "OAuth2", "JWT"]
  },
  {
    category: "Internationalisation (i18n)",
    skills: ["Multilingual UI", "vue-i18n", "RTL Support"]
  },
  {
    category: "Tools & Platforms",
    skills: ["Docker", "Git", "Postman", "CI/CD"]
  },
  {
    category: "Other",
    skills: ["Microservices Architecture", "Agile/Scrum"]
  }
];

export const EXPERIENCES = [
  {
    company: "Black Box Ltd",
    role: "Frontend Engineer – Digital Applications",
    location: "Gurgaon",
    period: "Nov 2021 – Present",
    highlights: [
      "Developed and maintained enterprise-grade web applications with responsive UI and secure authentication.",
      "Led development of the Flair multi-channel platform, coordinating across a cross-functional team to deliver agent workspace, real-time chat, and outbound dialer solutions.",
      "Built and integrated Node.js REST APIs with MSSQL and Oracle databases, handling real-time data retrieval and synchronization across enterprise platforms.",
      "Optimized application performance and improved user experience by implementing adaptive layouts and real-time data handling.",
      "Served as primary frontend owner for 3 production systems used by enterprise clients."
    ]
  }
];

export const PROJECTS = [
  {
    id: "flair",
    title: "Flair – Multi-Channel Agent Workspace",
    description: [
      "Designed and developed Flair using Vue 2 and Electron.js, a dynamic agent workspace enabling operations across Voice, Chat, and Email channels.",
      "Built adaptive UI layouts based on channel selection, with real-time channel switching and integrated APIs for telephony, messaging, and email services.",
      "Integrated Electron.js to package Flair as a cross-platform desktop application for Windows, enabling offline capabilities and native performance.",
      "Delivered a single interface for multi-channel operations, improving agent productivity and reducing context-switching."
    ],
    tech: ["Vue 2", "Electron", "WebSockets", "REST APIs"],
    icon: "Layout"
  },
  {
    id: "chat-console",
    title: "Customer Support Chat Console",
    description: [
      "Built a real-time chat platform using Vue 3 and Pinia, enabling customers to interact with an AI-powered Bot for instant query resolution.",
      "Reduced average query resolution time by 40% through automated Bot responses and intelligent escalation workflows.",
      "Implemented multilingual UI support using vue-i18n, enabling the platform to serve customers across multiple languages and locales.",
      "Added live agent handoff and callback scheduling, improving customer satisfaction scores by 20%.",
      "Designed a scalable architecture supporting high concurrency using WebSockets and microservices."
    ],
    tech: ["Vue 3", "Pinia", "WebSockets", "vue-i18n", "NLP"],
    icon: "MessageSquare"
  },
  {
    id: "dial-x",
    title: "Dial X – Outbound Dialer Agent Assist",
    description: [
      "Developed an outbound dialing solution as an instance of Flair, automating outbound calls using Dial X services.",
      "Implemented auto-dialing logic where customer records are fetched dynamically upon agent login, eliminating manual dialing.",
      "Reduced manual dialing time by 50%, improving agent efficiency and increasing outbound call throughput by 30%.",
      "Integrated with Dial X APIs for customer data retrieval and call initiation with real-time synchronisation."
    ],
    tech: ["Vue.js", "Telephony APIs", "Real-time Sync"],
    icon: "PhoneCall"
  },
  {
    id: "backend-integration",
    title: "Backend API & Database Integration",
    description: [
      "Developed Node.js REST APIs integrated with MSSQL and Oracle databases to support real-time data operations across enterprise platforms.",
      "Designed and optimized SQL queries for data retrieval, reporting, and synchronization between frontend apps and backend services.",
      "Collaborated with backend teams to define API contracts, ensuring seamless frontend-backend integration across multi-channel systems."
    ],
    tech: ["Node.js", "Express.js", "MSSQL", "Oracle", "REST APIs"],
    icon: "Database"
  },
  {
    id: "sso",
    title: "Keycloak SSO Integration",
    description: [
      "Implemented Single Sign-On (SSO) using Keycloak to provide secure and centralized user authentication across the application.",
      "Ensures seamless login experience, robust identity management, and compliance with enterprise security standards."
    ],
    tech: ["Keycloak", "OAuth2", "Security"],
    icon: "ShieldCheck"
  }
];

export const getIcon = (name) => {
  switch (name) {
    case "Layout": return <Layout className="w-6 h-6" />;
    case "MessageSquare": return <MessageSquare className="w-6 h-6" />;
    case "PhoneCall": return <PhoneCall className="w-6 h-6" />;
    case "ShieldCheck": return <ShieldCheck className="w-6 h-6" />;
    case "Globe": return <Globe className="w-6 h-6" />;
    case "Database": return <Database className="w-6 h-6" />;
    default: return <Code2 className="w-6 h-6" />;
  }
};
