/**
 * Service category metadata for The Winter Shadow Portfolio
 *
 * @fileoverview Defines the business-facing service categories shown on the
 * Services page and used to filter the project showcase. Each category maps
 * to the `ServiceCategory` values used in `src/data/projects.ts`.
 * @author The Winter Shadow
 * @since 1.0.0
 */

import { ServiceCategory } from '@/types/project';

/**
 * Display metadata for a single service category
 */
export interface ServiceInfo {
  /** Matches Project['serviceCategory'] for filtering/lookups */
  category: ServiceCategory;
  /** Public-facing name (may differ from the internal category value) */
  displayName: string;
  /** Short pitch shown on service cards */
  description: string;
  /** Concrete offerings shown as a bullet list */
  offerings: string[];
  /** lucide-react icon name, resolved by the consuming component */
  icon: 'ShieldCheck' | 'Code2' | 'Headset' | 'Smartphone' | 'Database';
}

/**
 * All service categories, in display order
 *
 * `Other` is surfaced publicly as "Data, AI & Cloud Infrastructure" since
 * that's what the uncategorized projects actually demonstrate.
 */
export const services: ServiceInfo[] = [
  {
    category: 'Cyber Security',
    displayName: 'Cyber Security',
    description: 'Security assessments, IAM audits, and defensive tooling that finds the gaps before attackers do.',
    offerings: [
      'Cloud IAM and permissions audits (AWS, Azure, GCP)',
      'Vulnerability assessment and remediation guidance',
      'Custom security tooling and automated scanning',
      'Security-by-design review for new applications',
    ],
    icon: 'ShieldCheck',
  },
  {
    category: 'Web Development',
    displayName: 'Web Development',
    description: 'Full-stack web apps and sites, from marketing pages to interactive tools, built fast and built to last.',
    offerings: [
      'Marketing sites and landing pages',
      'Interactive web applications and dashboards',
      'Browser extensions and plugins',
      'Performance, accessibility, and SEO tuning',
    ],
    icon: 'Code2',
  },
  {
    category: 'IT Support',
    displayName: 'IT Support',
    description: 'Hands-on troubleshooting, systems setup, and ongoing technical support for individuals and small businesses.',
    offerings: [
      'Workstation and network setup/troubleshooting',
      'Cloud account and access configuration',
      'Ongoing remote support retainers',
      'Technical onboarding for small teams',
    ],
    icon: 'Headset',
  },
  {
    category: 'App Development',
    displayName: 'App Development',
    description: 'Native and cross-platform apps for iOS, Android, and macOS, built for real daily use.',
    offerings: [
      'Native iOS/macOS apps (Swift, SwiftUI)',
      'Native Android apps (Kotlin, Jetpack Compose)',
      'On-device AI and privacy-first architectures',
      'App Store / Play Store release support',
    ],
    icon: 'Smartphone',
  },
  {
    category: 'Other',
    displayName: 'Data, AI & Cloud Infrastructure',
    description: 'Data pipelines, ML-powered tooling, and cloud infrastructure that scales without surprises.',
    offerings: [
      'AWS/GCP data pipelines (Glue, PySpark, Bedrock)',
      'MCP servers and AI assistant integrations',
      'Infrastructure as Code (Terraform, CDK)',
      'Voice AI, LLM tooling, and applied ML research',
    ],
    icon: 'Database',
  },
];
