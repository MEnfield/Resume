import { ReactElement } from "react";

export type Work = {
  title: string;
  company: string;
  time: string;
  description: string;
  icon: ReactElement;
};

export type Project = {
  title: string;
  description: string;
  githubUrl: string;
  figmaUrl: string;
  previewUrl: string;
};

export type SidenavLink = {
  url: string;
  label: string;
};
