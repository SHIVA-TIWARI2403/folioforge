import { ProfileData } from '../types';

export const SOFTWARE_ENGINEER_SAMPLE: ProfileData = {
  personal: {
    fullName: "Aarav Sharma",
    headline: "Senior Full-Stack Engineer & AI Architect",
    bio: "Passionate engineer with 5+ years of experience engineering high-concurrency cloud microservices, reactive web applications, and autonomous LLM orchestration workflows. Dedicated to minimalist UX and robust systems.",
    email: "aarav.sharma.dev@gmail.com",
    phone: "+91 98765 43210",
    location: "Bengaluru, India",
    avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",
    website: "https://aaravsharma.dev",
    github: "https://github.com/aarav-sharma",
    linkedin: "https://linkedin.com/in/aarav-sharma-dev",
    twitter: "https://x.com/aarav_dev"
  },
  experiences: [
    {
      id: "exp-1",
      role: "Lead Full-Stack Architect",
      company: "Nexus AI Systems",
      location: "Bengaluru, India",
      startDate: "2023",
      endDate: "Present",
      current: true,
      highlights: [
        "Architected real-time streaming intelligence pipeline handling 1.2M daily events with FastAPI and Supabase.",
        "Reduced web app latency by 42% through aggressive edge caching and Vite bundle micro-optimizations.",
        "Spearheaded adoption of TypeScript across 8 distributed microservices with 99.98% uptime."
      ]
    },
    {
      id: "exp-2",
      role: "Senior Software Engineer",
      company: "Verdant Cloud Labs",
      location: "Remote",
      startDate: "2021",
      endDate: "2023",
      current: false,
      highlights: [
        "Engineered multi-tenant SaaS dashboard using React 18, Tailwind CSS, and PostgreSQL Row-Level Security.",
        "Authored automated CI/CD deployment pipelines on Netlify and Docker, slashing deploy cycles from 25m to 3m."
      ]
    }
  ],
  projects: [
    {
      id: "proj-1",
      title: "OmniMatrix AI",
      category: "Artificial Intelligence",
      tagline: "High-throughput Multimodal LLM Comparison Engine",
      description: "An autonomous benchmarking suite indexing 50+ frontier models with live token cost calculation, automated prompt evals, and side-by-side latency comparisons.",
      tags: ["React 19", "FastAPI", "Python", "Google Gemini API", "Tailwind"],
      liveUrl: "https://omnimatrix-demo.app",
      githubUrl: "https://github.com/aarav-sharma/omnimatrix"
    },
    {
      id: "proj-2",
      title: "FolioForge Suite",
      category: "Developer Tools",
      tagline: "Glassmorphic Minimalist Portfolio & Resume Engine",
      description: "A dual-mode creator platform enabling professionals to build, preview, and export print-ready resumes and interactive web portfolios in real-time.",
      tags: ["TypeScript", "Vite", "Tailwind CSS", "Canvas Confetti"],
      liveUrl: "https://folioforge-demo.app",
      githubUrl: "https://github.com/aarav-sharma/folioforge"
    },
    {
      id: "proj-3",
      title: "CryptaRisk Engine",
      category: "Fintech Systems",
      tagline: "Algorithmic Risk Safeguards & Technical Indicator Parser",
      description: "Mathematical trading framework featuring sub-second order calculations, dynamic stop-loss automation, and real-time paper broker simulation.",
      tags: ["Python 3", "NumPy", "WebSockets", "DataFeeds"],
      githubUrl: "https://github.com/aarav-sharma/crypta-risk"
    }
  ],
  skillGroups: [
    {
      id: "sg-1",
      category: "Frontend & Interface",
      skills: ["React 18 / 19", "TypeScript", "Tailwind CSS", "Next.js", "Vite", "Glassmorphism UI"]
    },
    {
      id: "sg-2",
      category: "Backend & Cloud",
      skills: ["Python 3", "FastAPI", "PostgreSQL", "Supabase RLS", "Node.js", "Docker", "REST & WebSockets"]
    },
    {
      id: "sg-3",
      category: "AI & Automation",
      skills: ["Google Gemini API", "Multi-Agent Workflows", "Vector Embeddings", "Prompt Architecture"]
    }
  ],
  education: [
    {
      id: "edu-1",
      degree: "B.Tech in Computer Science & Engineering",
      institution: "Indian Institute of Information Technology",
      year: "2017 — 2021",
      details: "First Class with Distinction • Specialization in Distributed Systems & Machine Learning"
    }
  ],
  theme: {
    accentColor: "blend",
    fontStyle: "sans",
    glassIntensity: "deep"
  }
};

export const BLANK_PROFILE: ProfileData = {
  personal: {
    fullName: "",
    headline: "",
    bio: "",
    email: "",
    phone: "",
    location: "",
    avatarUrl: "",
    website: "",
    github: "",
    linkedin: "",
    twitter: ""
  },
  experiences: [],
  projects: [],
  skillGroups: [],
  education: [],
  theme: {
    accentColor: "blend",
    fontStyle: "sans",
    glassIntensity: "deep"
  }
};
