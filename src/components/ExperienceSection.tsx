'use client';

import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, ExternalLink } from 'lucide-react';

interface Experience {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  technologies: string[];
  link?: string;
}

const experiences: Experience[] = [
  {
    title: 'Security Engineer',
    company: 'Your Company',
    location: 'Remote / Location',
    period: '2023 - Present',
    description: [
      'Design and implement security solutions for cloud infrastructure',
      'Develop automated security scanning and policy validation tools',
      'Collaborate with development teams to integrate security best practices',
    ],
    technologies: ['AWS', 'Python', 'Security Tools', 'CI/CD'],
  },
  {
    title: 'Developer / IT Specialist',
    company: 'Previous Company',
    location: 'Location',
    period: '2021 - 2023',
    description: [
      'Built and maintained web applications and APIs',
      'Managed infrastructure and deployment pipelines',
      'Automated workflows and improved system efficiency',
    ],
    technologies: ['TypeScript', 'React', 'AWS', 'Docker'],
  },
  // Add more experiences as needed
];

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="py-20 px-4 sm:px-6 lg:px-8"
      style={{ backgroundColor: 'var(--theme-surface)' }}
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--theme-text)] mb-4">
            Experience
          </h2>
          <p className="text-lg text-[var(--theme-text-secondary)] max-w-2xl mx-auto">
            My professional journey and the roles that have shaped my expertise
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-[var(--theme-border)] transform md:-translate-x-1/2" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative flex items-start gap-6 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-[var(--theme-primary)] rounded-full border-4 border-[var(--theme-bg)] transform md:-translate-x-1/2 z-10" />

                {/* Content card */}
                <div
                  className={`flex-1 ml-12 md:ml-0 ${
                    index % 2 === 0 ? 'md:mr-auto md:pr-12' : 'md:ml-auto md:pl-12'
                  }`}
                >
                  <div className="bg-[var(--theme-bg)] border border-[var(--theme-border)] rounded-lg p-6 hover:border-[var(--theme-primary)] transition-colors">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-[var(--theme-text)] mb-1">
                          {exp.title}
                        </h3>
                        <div className="flex items-center gap-2 text-[var(--theme-primary)] mb-2">
                          <Briefcase size={16} />
                          <span className="font-medium">{exp.company}</span>
                          {exp.link && (
                            <a
                              href={exp.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="hover:underline"
                            >
                              <ExternalLink size={14} />
                            </a>
                          )}
                        </div>
                        <div className="flex flex-wrap items-center gap-4 text-sm text-[var(--theme-text-secondary)]">
                          <div className="flex items-center gap-1">
                            <Calendar size={14} />
                            <span>{exp.period}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin size={14} />
                            <span>{exp.location}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <ul className="space-y-2 mb-4">
                      {exp.description.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-[var(--theme-text-secondary)]">
                          <span className="text-[var(--theme-primary)] mt-1">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2 mt-4">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-xs bg-[var(--theme-primary)]/20 text-[var(--theme-primary)] rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

