/**
 * Project portfolio data for The Winter Shadow Portfolio
 * 
 * @fileoverview Centralized repository of all portfolio projects with detailed metadata,
 * links, and categorization. Used throughout the application for project displays.
 * @author The Winter Shadow
 * @since 1.0.0
 */

import { ProjectType, Project, ProjectDomain } from '@/types/project';

/**
 * Helper function to create a project with sensible defaults
 * Makes it easy to add new projects with minimal boilerplate
 * 
 * @example
 * ```typescript
 * createProject({
 *   id: 'my-project',
 *   title: 'My Project',
 *   domain: 'Web Development',
 *   description: 'A cool project',
 *   techStack: ['React', 'TypeScript'],
 *   github: 'https://github.com/user/repo'
 * })
 * ```
 */
function createProject({
  id,
  title,
  domain,
  type = 'Open Source',
  description,
  longDescription,
  techStack,
  features,
  github,
  docs,
  website,
  pypi,
  article,
  featured = false,
  media,
  stats,
}: {
  id: string;
  title: string;
  domain: ProjectDomain;
  type?: ProjectType | ProjectType[];
  description: string;
  longDescription?: string;
  techStack: string[];
  features?: string[];
  github?: string;
  docs?: string;
  website?: string;
  pypi?: string;
  article?: string;
  featured?: boolean;
  media?: Project['media'];
  stats?: Project['stats'];
}): Project {
  return {
    id,
    title,
    domain,
    type,
    description,
    longDescription,
    techStack,
    features,
    links: {
      ...(github && { github }),
      ...(docs && { docs }),
      ...(website && { website }),
      ...(pypi && { pypi }),
      ...(article && { article }),
    },
    featured,
    ...(media && { media }),
    ...(stats && { stats }),
  };
}

/**
 * Complete portfolio of projects
 * 
 * Comprehensive collection of all projects across different domains including
 * security, data engineering, web development, infrastructure, and research.
 * Each project includes detailed metadata for rich presentation and filtering.
 * 
 * Project domains:
 * - Security: IAM scanners, security tools, vulnerability assessment
 * - Data Engineering: ETL pipelines, data processing, analytics
 * - Web Development: Frontend applications, frameworks, user interfaces
 * - Infrastructure: DevOps, automation, deployment tools
 * - Research: Experimental projects, proof of concepts, studies
 * - Design: UI/UX, graphics, visual design work
 * 
 * @example
 * ```typescript
 * // Get all security projects
 * const securityProjects = projects.filter(p => p.domain === 'Security');
 * 
 * // Get featured projects
 * const featured = projects.filter(p => p.featured);
 * 
 * // Find project by ID
 * const project = projects.find(p => p.id === 'lock-and-key');
 * ```
 */
export const projects: Project[] = [
  createProject({
    id: 'owl-watch',
    title: 'Owl-Watch',
    domain: 'Data Engineering',
    description: 'AWS-native data engineering pipeline using Glue, Bedrock, and ML for ingesting, processing, and curating data with PySpark ETL jobs.',
    longDescription: 'Owl-Watch is a comprehensive data engineering solution built on AWS infrastructure. It leverages AWS Glue for ETL processing, Amazon Bedrock for ML-powered data curation, and PySpark for scalable data transformations. The pipeline is designed to handle large-scale data ingestion and processing workflows with built-in monitoring and error handling.',
    techStack: ['Python', 'TypeScript', 'AWS CDK', 'PySpark', 'AWS Glue', 'Bedrock'],
    features: [
      'Automated ETL pipeline orchestration',
      'ML-powered data curation with Bedrock',
      'Scalable PySpark transformations',
      'Infrastructure as Code with CDK',
    ],
    github: 'https://github.com/TheWinterShadow/Owl-Watch',
  }),
  createProject({
    id: 'lock-and-key',
    title: 'Lock-And-Key',
    domain: 'Security',
    type: ['Open Source', 'Published Package'],
    description: 'Multi-cloud security scanner analyzing IAM and resource-based policies to identify vulnerabilities and excessive permissions across AWS, Azure, and GCP.',
    longDescription: 'Lock-And-Key is a comprehensive security scanning tool that performs deep analysis of IAM policies and resource permissions across major cloud providers. It identifies privilege escalation risks, wildcard permissions, and violations of least privilege principles. The tool provides actionable security insights with detailed reporting and remediation recommendations.',
    techStack: ['Python', 'AWS SDK', 'Azure SDK', 'GCP SDK', 'Interactive CLI'],
    features: [
      'Multi-cloud IAM policy analysis',
      'Privilege escalation detection',
      'Wildcard permission identification',
      'Least privilege violation reporting',
      'Interactive CLI with detailed reports',
    ],
    github: 'https://github.com/TheWinterShadow/Lock-And-Key',
    docs: 'https://thewintershadow.github.io/Lock-And-Key/',
    pypi: 'https://pypi.org/project/lock-and-key/',
    featured: true,
  }),
  createProject({
    id: 'horizonsec',
    title: 'HorizonSec Project',
    domain: 'Security',
    description: 'Modular security toolkit integrating directly into developer workflows with GAIA (orchestration), DEMETER (infrastructure scanning), HADES (endpoint security), and ARTEMIS (static analysis).',
    longDescription: 'HorizonSec is an open-source security organization focused on building modular security tools that integrate seamlessly into developer workflows. The project includes multiple specialized tools: GAIA for security orchestration, DEMETER for infrastructure scanning, HADES for endpoint security monitoring, and ARTEMIS for static code analysis. Together, these tools provide comprehensive security coverage throughout the development lifecycle.',
    techStack: ['Python', 'TypeScript', 'Security Tools', 'CI/CD Integration'],
    features: [
      'Modular security toolkit architecture',
      'Developer workflow integration',
      'Multi-tool orchestration',
      'Comprehensive security coverage',
    ],
    github: 'https://github.com/HorizonSec',
    website: 'https://github.com/HorizonSec/horizon-website',
    featured: true,
  }),
  createProject({
    id: 'the-data-packet',
    title: 'The-Data-Packet',
    domain: 'Research',
    type: 'Research',
    description: 'Research project exploring data processing and analysis techniques.',
    techStack: ['Python', 'Data Analysis'],
    github: 'https://github.com/TheWinterShadow/The-Data-Packet',
  }),
  createProject({
    id: 'thought-smith',
    title: 'thought-smith',
    domain: 'Web Development',
    description: 'Web development project showcasing modern frontend techniques and best practices.',
    techStack: ['TypeScript', 'React', 'Next.js'],
    github: 'https://github.com/TheWinterShadow/thought-smith',
  }),
  createProject({
    id: 'the-deployment-forge',
    title: 'The-Deployment-Forge',
    domain: 'Infrastructure',
    description: 'Infrastructure automation and deployment tooling for modern cloud environments.',
    techStack: ['Python', 'Infrastructure as Code', 'CI/CD'],
    github: 'https://github.com/TheWinterShadow/The-Deployment-Forge',
  }),
  createProject({
    id: 'whomping-willow',
    title: 'Whomping-Willow',
    domain: 'Web Development',
    description: 'Web development project with modern UI/UX patterns.',
    techStack: ['JavaScript', 'React'],
    github: 'https://github.com/TheWinterShadow/Whomping-Willow',
  }),
  createProject({
    id: 'hogwarts',
    title: 'Hogwarts',
    domain: 'Web Development',
    description: 'Web development project demonstrating full-stack capabilities.',
    techStack: ['TypeScript', 'React', 'Node.js'],
    github: 'https://github.com/TheWinterShadow/Hogwarts',
  }),
  createProject({
    id: 'netsecure',
    title: 'NetSecure',
    domain: 'Design',
    type: ['Open Source'],
    description: 'Security-focused design concept showcasing modern UI/UX for security applications.',
    techStack: ['Design', 'UI/UX'],
    media: {
      thumbnail: 'https://www.elijahwinter.com/img/netsecure.png',
    },
  }),
];

