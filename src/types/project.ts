export type ProjectDomain = 'Security' | 'Data Engineering' | 'Web Development' | 'Infrastructure' | 'Research' | 'Design';
export type ProjectType = 'Open Source' | 'Commercial' | 'Research' | 'Learning' | 'Published Package';

export interface ProjectStats {
  stars?: number;
  contributors?: number;
  downloads?: string;
  forks?: number;
}

export interface ProjectMedia {
  thumbnail?: string;
  screenshots?: string[];
  video?: string;
  liveDemo?: string;
}

export interface ProjectLinks {
  github?: string;
  docs?: string;
  article?: string;
  website?: string;
  pypi?: string;
}

export interface Project {
  id: string;
  title: string;
  domain: ProjectDomain;
  type: ProjectType | ProjectType[];
  description: string;
  longDescription?: string;
  techStack: string[];
  features?: string[];
  stats?: ProjectStats;
  media?: ProjectMedia;
  links: ProjectLinks;
  featured?: boolean;
}

