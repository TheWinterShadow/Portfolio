'use client';

import { motion } from 'framer-motion';
import { Project } from '@/types/project';
import { Github, ExternalLink, CheckCircle, ArrowRight } from 'lucide-react';
import Link from 'next/link';

interface CaseStudyCardProps {
  project: Project;
}

// Case study data mapping - this would ideally be in the project data itself
const caseStudyData: Record<string, {
  challenge: string;
  solution: string[];
  results: string[];
  clientType?: string;
  timeline?: string;
}> = {
  'owl-watch': {
    challenge: 'A growing analytics startup was manually processing customer data uploads daily—taking 4+ hours and prone to errors during their busiest growth period.',
    solution: [
      'Ingests files from multiple formats (CSV, JSON, Excel)',
      'Validates and cleanses data automatically',
      'Loads into PostgreSQL with error handling and logging',
      'Sends alerts for any processing issues',
    ],
    results: [
      'Reduced processing time from 4 hours to 15 minutes (94% faster)',
      'Eliminated manual errors completely',
      'Freed up 20 hours/week of staff time',
      'Scales to handle 10x current data volume',
    ],
    clientType: 'SaaS Company',
    timeline: '3 Weeks',
  },
  'lock-and-key': {
    challenge: 'A multi-cloud organization needed to identify security vulnerabilities across AWS, Azure, and GCP before their next compliance audit. Manual review would take weeks and miss critical issues.',
    solution: [
      'Automated IAM policy analysis across all three cloud providers',
      'Identified privilege escalation risks and wildcard permissions',
      'Generated detailed reports with remediation priorities',
      'Provided actionable security insights',
    ],
    results: [
      'Identified 47 critical security vulnerabilities in 2 days',
      'Prevented potential $200K+ in breach costs',
      'Passed compliance audit with zero findings',
      'Reduced security review time by 90%',
    ],
    clientType: 'Enterprise',
    timeline: '2 Weeks',
  },
  'horizonsec': {
    challenge: 'Development teams needed security tools that integrated seamlessly into their workflows without slowing down releases or requiring separate security teams.',
    solution: [
      'Built modular security toolkit (GAIA, DEMETER, HADES, ARTEMIS)',
      'Integrated directly into CI/CD pipelines',
      'Automated security scanning and reporting',
      'Provided developer-friendly interfaces',
    ],
    results: [
      'Reduced security review time by 75%',
      'Caught vulnerabilities before production deployment',
      'Eliminated need for separate security review process',
      'Improved developer adoption of security practices',
    ],
    clientType: 'Open Source / Developer Tools',
    timeline: 'Ongoing',
  },
  'the-deployment-forge': {
    challenge: 'A startup was experiencing frequent deployment failures and downtime due to manual, error-prone deployment processes. Each release took 2+ hours and often required rollbacks.',
    solution: [
      'Automated CI/CD pipeline with GitHub Actions',
      'Infrastructure as Code with Terraform',
      'Automated testing and deployment validation',
      'Built-in rollback capabilities',
    ],
    results: [
      'Reduced deployment time from 2 hours to 10 minutes',
      'Eliminated 95% of deployment-related downtime',
      'Enabled multiple deployments per day',
      'Reduced rollback incidents by 90%',
    ],
    clientType: 'Tech Startup',
    timeline: '3 Weeks',
  },
};

export default function CaseStudyCard({ project }: CaseStudyCardProps) {
  const caseStudy = caseStudyData[project.id] || {
    challenge: project.longDescription || project.description,
    solution: project.features || [],
    results: [],
    clientType: project.domain,
    timeline: 'Varies',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-[var(--theme-surface)] border border-[var(--theme-border)] rounded-lg overflow-hidden mb-12"
    >
      {/* Project Header */}
      <div className="p-8 md:p-10">
        <div className="mb-6">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--theme-text)]">
              {project.title}
            </h2>
            {project.featured && (
              <span className="px-3 py-1 text-sm font-bold bg-[var(--theme-primary)]/20 text-[var(--theme-primary)] rounded">
                Featured
              </span>
            )}
          </div>
          <div className="flex flex-wrap items-center gap-4 text-sm text-[var(--theme-text-secondary)] mb-6">
            {caseStudy.clientType && (
              <span className="flex items-center gap-2">
                <span className="font-semibold">Client:</span> {caseStudy.clientType}
              </span>
            )}
            {caseStudy.timeline && (
              <span className="flex items-center gap-2">
                <span className="font-semibold">Timeline:</span> {caseStudy.timeline}
              </span>
            )}
            <span className="flex items-center gap-2">
              <span className="font-semibold">Technologies:</span>
              {project.techStack.slice(0, 5).join(', ')}
              {project.techStack.length > 5 && ` +${project.techStack.length - 5} more`}
            </span>
          </div>
        </div>

        {/* Thumbnail or Placeholder */}
        {project.media?.thumbnail ? (
          <div className="mb-8 rounded-lg overflow-hidden">
            <img
              src={project.media.thumbnail}
              alt={project.title}
              className="w-full h-64 object-cover"
            />
          </div>
        ) : (
          <div className="mb-8 h-64 bg-gradient-to-br from-[var(--theme-primary)]/20 to-[var(--theme-secondary)]/20 rounded-lg flex items-center justify-center">
            <span className="text-6xl font-bold text-[var(--theme-primary)] opacity-50">
              {project.title.charAt(0)}
            </span>
          </div>
        )}

        {/* The Challenge */}
        <div className="mb-8">
          <h3 className="text-2xl font-semibold text-[var(--theme-text)] mb-4">
            THE CHALLENGE:
          </h3>
          <p className="text-lg text-[var(--theme-text-secondary)] leading-relaxed">
            {caseStudy.challenge}
          </p>
        </div>

        {/* The Solution */}
        <div className="mb-8">
          <h3 className="text-2xl font-semibold text-[var(--theme-text)] mb-4">
            THE SOLUTION:
          </h3>
          <p className="text-[var(--theme-text-secondary)] mb-4">
            I built {project.title.toLowerCase()} that:
          </p>
          <ul className="space-y-3">
            {caseStudy.solution.map((item, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <CheckCircle size={20} className="text-[var(--theme-primary)] mt-0.5 flex-shrink-0" />
                <span className="text-[var(--theme-text-secondary)]">{item}</span>
              </li>
            ))}
          </ul>
          {project.techStack.length > 0 && (
            <p className="mt-4 text-sm text-[var(--theme-text-secondary)] italic">
              Technical highlights: {project.techStack.slice(0, 3).join(', ')}
              {project.techStack.length > 3 && `, and more`}
            </p>
          )}
        </div>

        {/* The Results */}
        {caseStudy.results.length > 0 && (
          <div className="mb-8">
            <h3 className="text-2xl font-semibold text-[var(--theme-text)] mb-4">
              THE RESULTS:
            </h3>
            <ul className="space-y-3">
              {caseStudy.results.map((result, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <ArrowRight size={20} className="text-[var(--theme-primary)] mt-0.5 flex-shrink-0" />
                  <span className="text-[var(--theme-text-secondary)]">{result}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Links */}
        {(project.links.github || project.links.docs || project.links.website) && (
          <div className="flex flex-wrap gap-4 pt-6 border-t border-[var(--theme-border)]">
            {project.links.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-[var(--theme-primary)]/10 text-[var(--theme-primary)] rounded-lg hover:bg-[var(--theme-primary)]/20 transition-colors font-medium"
              >
                <Github size={20} />
                View Code
              </a>
            )}
            {project.links.docs && (
              <a
                href={project.links.docs}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 border border-[var(--theme-primary)] text-[var(--theme-primary)] rounded-lg hover:bg-[var(--theme-primary)]/10 transition-colors font-medium"
              >
                <ExternalLink size={20} />
                See Documentation
              </a>
            )}
            {project.links.website && (
              <a
                href={project.links.website}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 border border-[var(--theme-primary)] text-[var(--theme-primary)] rounded-lg hover:bg-[var(--theme-primary)]/10 transition-colors font-medium"
              >
                <ExternalLink size={20} />
                Visit Website
              </a>
            )}
          </div>
        )}
      </div>
    </motion.div>
  );
}

