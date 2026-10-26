export type Work = {
  company: string;
  title: string;
  time: string;
  meta: string;
  bullets: string[];
  icon?: string;
  current?: boolean;
};

export type Project = {
  title: string;
  tagline: string;
  description: string;
  stack: string[];
  liveUrl?: string;
  githubUrl?: string;
  figmaUrl?: string;
  previewUrl?: string;
  featured?: boolean;
};

export type SkillGroup = {
  label: string;
  items: string[];
};

export type SidenavLink = {
  url: string;
  label: string;
};
