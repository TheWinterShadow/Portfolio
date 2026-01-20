/**
 * Project Type Definitions
 *
 * @fileoverview TypeScript type definitions for project data structures.
 * Defines project domains, types, stats, media, links, and the main Project interface.
 *
 * @author The Winter Shadow
 * @since 1.0.0
 */

/**
 * Project domain categories
 * Used for filtering and categorizing projects
 */
export type ProjectDomain =
  | 'Security'        // Security tools, scanners, IAM
  | 'Data Engineering' // ETL, pipelines, data processing
  | 'Web Development' // Frontend, full-stack applications
  | 'Infrastructure'  // DevOps, automation, deployment
  | 'Research'        // Experimental, proof of concept
  | 'Design';         // UI/UX, graphics, visual

/**
 * Project type classifications
 * Describes the nature and licensing of a project
 */
export type ProjectType =
  | 'Open Source'      // Publicly available source code
  | 'Commercial'       // Commercial/proprietary work
  | 'Research'         // Academic or experimental research
  | 'Learning'         // Educational projects
  | 'Published Package'; // Published to package registries

/**
 * Project statistics from external sources
 * Typically populated from GitHub API or package registries
 */
export interface ProjectStats {
  /** GitHub stars count */
  stars?: number;
  /** Number of contributors */
  contributors?: number;
  /** Download count (formatted string, e.g., "10k+") */
  downloads?: string;
  /** GitHub forks count */
  forks?: number;
}

/**
 * Project media assets
 * Images, videos, and demo links for the project
 */
export interface ProjectMedia {
  /** Main thumbnail image URL */
  thumbnail?: string;
  /** Array of screenshot image URLs */
  screenshots?: string[];
  /** Video embed or link URL */
  video?: string;
  /** Live demo URL */
  liveDemo?: string;
}

/**
 * Project external links
 * URLs to various project resources
 */
export interface ProjectLinks {
  /** GitHub repository URL */
  github?: string;
  /** Documentation site URL */
  docs?: string;
  /** Related article or blog post URL */
  article?: string;
  /** Project website URL */
  website?: string;
  /** PyPI package URL */
  pypi?: string;
}

/**
 * Complete project data structure
 * Contains all information needed to display a project
 */
export interface Project {
  /** Unique project identifier (used for URLs and lookups) */
  id: string;
  /** Display title */
  title: string;
  /** Primary domain category */
  domain: ProjectDomain;
  /** Project type(s) - can be single or multiple */
  type: ProjectType | ProjectType[];
  /** Short description (1-2 sentences) */
  description: string;
  /** Extended description for modal view */
  longDescription?: string;
  /** Technologies and tools used */
  techStack: string[];
  /** Key features and capabilities */
  features?: string[];
  /** Project statistics */
  stats?: ProjectStats;
  /** Media assets */
  media?: ProjectMedia;
  /** External links */
  links: ProjectLinks;
  /** Whether to highlight in featured section */
  featured?: boolean;
}
