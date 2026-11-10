export interface PersonalInfo {
  fullName: string;
  headline: string;
  bio: string;
  email: string;
  phone: string;
  location: string;
  avatarUrl: string;
  website: string;
  github: string;
  linkedin: string;
  twitter: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  current: boolean;
  highlights: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  tagline: string;
  description: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
}

export interface SkillGroup {
  id: string;
  category: string;
  skills: string[];
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  year: string;
  details: string;
}

export interface ProfileData {
  personal: PersonalInfo;
  experiences: Experience[];
  projects: ProjectItem[];
  skillGroups: SkillGroup[];
  education: Education[];
  theme: {
    accentColor: 'forest' | 'maroon' | 'blend';
    fontStyle: 'sans' | 'serif';
    glassIntensity: 'subtle' | 'deep';
  };
}
