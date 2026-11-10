import { ProfileData } from '../types';

export const SHIVA_TIWARI_SAMPLE: ProfileData = {
  personal: {
    fullName: "Shiva Tiwari",
    headline: "Full-Stack Web Developer & AI Systems Architect",
    bio: "Full-Stack Engineer & AI Builder based in Ayodhya, India. Creator of ToolMatrix AI, SlideCraft AI, and Founder of Milo. Specialized in building high-performance AI comparison engines, autonomous generative workflows, and resilient cloud architectures with Supabase and PostgreSQL RLS.",
    email: "tiwarisatendrapratap@gmail.com",
    phone: "+91 98765 43210",
    location: "Ayodhya, Uttar Pradesh, India",
    avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
    website: "https://github.com/SHIVA-TIWARI2403/shiva-portfolio",
    github: "https://github.com/SHIVA-TIWARI2403",
    linkedin: "https://www.linkedin.com/in/satendra-pratap-t-570617449/",
    twitter: "https://x.com/SHIVA_TIWARI"
  },
  experiences: [
    {
      id: "exp-1",
      role: "Founder & Full-Stack Architect",
      company: "Milo & ToolMatrix Projects",
      location: "Ayodhya, India (Remote)",
      startDate: "2024",
      endDate: "Present",
      current: true,
      highlights: [
        "Architected ToolMatrix AI: an independent real-time benchmarking platform indexing 40+ multimodal AI models with 4-way side-by-side comparison.",
        "Founded & deployed Milo: an 18+ adult social discovery web app utilizing Google OAuth, Supabase Realtime WebSocket messaging, and strict PostgreSQL Row Level Security (RLS).",
        "Developed SlideCraft AI: an autonomous presentation maker creating Gamma-style Bento slides and exporting native PowerPoint .PPTX transition files."
      ]
    },
    {
      id: "exp-2",
      role: "AI & Full-Stack Developer",
      company: "Independent Software Engineering",
      location: "Ayodhya, India",
      startDate: "2023",
      endDate: "2024",
      current: false,
      highlights: [
        "Engineered algorithmic quantitative trading bot with real-time indicator calculations (RSI, MACD, Bollinger Bands) and mathematical risk management safeguards.",
        "Built automated multi-agent media synthesis pipelines with Python, FFmpeg, and Gemini Omni API."
      ]
    }
  ],
  projects: [
    {
      id: "proj-1",
      title: "ToolMatrix AI",
      category: "Artificial Intelligence",
      tagline: "Real-Time AI Tools Discovery & 4-Way Comparison Engine",
      description: "An independent benchmarking and comparison platform indexing 40+ state-of-the-art AI models across Video, LLMs, Image, and Legal AI. Features live pricing, free tier specs, and side-by-side spec comparison.",
      tags: ["React 19", "FastAPI", "Google Gemini API", "Tailwind CSS", "Vite"],
      liveUrl: "https://shiva-tiwari2403.github.io/ai-tool-matrix/",
      githubUrl: "https://github.com/SHIVA-TIWARI2403/ai-tool-matrix"
    },
    {
      id: "proj-2",
      title: "SlideCraft AI",
      category: "Generative AI",
      tagline: "Autonomous Presentation & Native PPTX Deck Suite",
      description: "Autonomous presentation generator for students and researchers. Parses prompts, extracts core concepts via LLM loops, and compiles downloadable native Microsoft PowerPoint files.",
      tags: ["Python 3", "python-pptx", "Google Gemini", "FastAPI", "React"],
      liveUrl: "https://github.com/SHIVA-TIWARI2403/ai-student-ppt-maker",
      githubUrl: "https://github.com/SHIVA-TIWARI2403/ai-student-ppt-maker"
    },
    {
      id: "proj-3",
      title: "Milo Social Hub",
      category: "Full-Stack Web App",
      tagline: "Privacy-First Interest & Hobby-Based Social Platform (18+)",
      description: "Adult social connection web platform built around shared passions. Features Google OAuth authentication, Supabase Realtime chat channels, and PostgreSQL Row Level Security (RLS).",
      tags: ["React", "Supabase", "PostgreSQL RLS", "Tailwind CSS", "Netlify"],
      liveUrl: "https://milosathi.netlify.app",
      githubUrl: "https://github.com/SHIVA-TIWARI2403/milo"
    },
    {
      id: "proj-4",
      title: "Alpha Trading Engine",
      category: "Algorithmic Systems",
      tagline: "Algorithmic Market Engine with Risk Math & Paper Broker",
      description: "Autonomous trading framework with paper trading broker, real-time indicator math, pattern recognition, and mathematical risk management safeguards with trade journal logging.",
      tags: ["Python", "Financial Modeling", "Data Feeds", "Automation"],
      githubUrl: "https://github.com/SHIVA-TIWARI2403/ai-trading-bot"
    }
  ],
  skillGroups: [
    {
      id: "sg-1",
      category: "Frontend Engineering",
      skills: ["React 18 / 19", "Tailwind CSS", "TypeScript", "Vite", "Next.js", "Glassmorphic UI", "Canvas"]
    },
    {
      id: "sg-2",
      category: "Backend & Cloud",
      skills: ["Python 3", "FastAPI", "PostgreSQL", "Supabase Realtime & RLS", "Netlify Edge", "Docker"]
    },
    {
      id: "sg-3",
      category: "AI & Autonomous Systems",
      skills: ["Google Gemini API", "Multi-Agent Systems", "Prompt Architecture", "python-pptx", "FFmpeg"]
    }
  ],
  education: [
    {
      id: "edu-1",
      degree: "Computer Science & Engineering",
      institution: "Technical University",
      year: "2020 — 2024",
      details: "First Class with Distinction • Focus on Distributed Cloud Architectures and Intelligent Systems"
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
