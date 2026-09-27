/**
 * Services Page - Business Services Pitch
 *
 * @fileoverview Client-facing page organizing Elijah's work into the
 * service categories he's available to be hired for: Cyber Security, Web
 * Development, IT Support, App Development, and Data/AI/Cloud Infrastructure.
 *
 * @description Each service category links out to filtered project examples
 * on the home page (via `?category=` query param) so a visitor can see proof
 * of work before reaching out. Ends with a CTA section pointing to the
 * freelance site, LinkedIn, and resume.
 *
 * @author The Winter Shadow
 * @since 1.0.0
 */

'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ShieldCheck, Code2, Headset, Smartphone, Database, ArrowUpRight, Check } from 'lucide-react';
import { services, ServiceInfo } from '@/data/services';
import { projects } from '@/data/projects';
import { links } from '@/data/links';

/** Maps the icon names stored in service data to their lucide-react components */
const ICONS = {
  ShieldCheck,
  Code2,
  Headset,
  Smartphone,
  Database,
} as const;

/**
 * ServiceCard Component - Single service category card
 *
 * Renders the pitch, offerings list, and up to three example projects
 * for one service category, linking through to filtered project examples.
 *
 * @param props - Component props
 * @param props.service - The service category to render
 * @param props.index - Position in the list, used to stagger entrance animation
 * @returns The service card JSX
 */
function ServiceCard({ service, index }: { service: ServiceInfo; index: number }) {
  const Icon = ICONS[service.icon];
  const examples = projects.filter((p) => p.serviceCategory === service.category).slice(0, 3);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="bg-[var(--theme-surface)] border border-[var(--theme-border)] rounded-lg p-6 flex flex-col"
    >
      <div className="w-12 h-12 rounded-lg bg-[var(--theme-primary)]/15 flex items-center justify-center mb-4">
        <Icon className="text-[var(--theme-primary)]" size={24} />
      </div>
      <h3 className="text-xl font-bold text-[var(--theme-text)] mb-2">{service.displayName}</h3>
      <p className="text-[var(--theme-text-secondary)] text-sm mb-4">{service.description}</p>

      <ul className="space-y-2 mb-6 flex-1">
        {service.offerings.map((offering) => (
          <li key={offering} className="flex items-start gap-2 text-sm text-[var(--theme-text-secondary)]">
            <Check size={16} className="text-[var(--theme-accent)] mt-0.5 shrink-0" />
            <span>{offering}</span>
          </li>
        ))}
      </ul>

      {examples.length > 0 && (
        <div className="mb-6">
          <div className="text-xs font-semibold uppercase tracking-wide text-[var(--theme-text-secondary)] mb-2">
            Example work
          </div>
          <div className="flex flex-wrap gap-2">
            {examples.map((p) => (
              <a
                key={p.id}
                href={`/?category=${encodeURIComponent(service.category)}#projects`}
                className="px-2 py-1 text-xs bg-[var(--theme-bg)] text-[var(--theme-text-secondary)] rounded hover:text-[var(--theme-primary)] transition-colors cursor-pointer"
              >
                {p.title}
              </a>
            ))}
          </div>
        </div>
      )}

      <a
        href={examples.length > 0 ? `/?category=${encodeURIComponent(service.category)}#projects` : links.freelance}
        target={examples.length > 0 ? undefined : '_blank'}
        rel={examples.length > 0 ? undefined : 'noopener noreferrer'}
        className="inline-flex items-center gap-1 text-sm font-semibold text-[var(--theme-primary)] hover:text-[var(--theme-secondary)] transition-colors cursor-pointer"
      >
        {examples.length > 0 ? 'View all examples' : 'Get in touch'}
        <ArrowUpRight size={16} />
      </a>
    </motion.div>
  );
}

/**
 * ServicesPage Component
 *
 * The primary business pitch page: hero, service category grid, and a
 * closing call-to-action pointing visitors to the freelance business site,
 * LinkedIn, and resume.
 *
 * @returns The services page JSX
 */
export default function ServicesPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--theme-bg)' }}>
      {/* Hero */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-[var(--theme-text)] mb-4">
            Technology Services
          </h1>
          <p className="text-lg md:text-xl text-[var(--theme-text-secondary)] mb-8">
            Security engineering, software development, and IT support &mdash; one person who ships
            production systems across all of it, backed by a portfolio of real, working projects.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href={links.freelance}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--theme-primary)] text-white rounded-lg font-semibold hover:bg-[var(--theme-secondary)] transition-colors shadow-lg cursor-pointer"
            >
              Work With Me
              <ArrowUpRight size={18} />
            </a>
            <Link
              href="/#projects"
              className="inline-flex items-center gap-2 px-6 py-3 border border-[var(--theme-border)] text-[var(--theme-text)] rounded-lg font-semibold hover:border-[var(--theme-primary)] transition-colors cursor-pointer"
            >
              See My Work
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Service Grid */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={service.category} service={service} index={index} />
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-[var(--theme-border)]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--theme-text)] mb-4">
            Ready to start a project?
          </h2>
          <p className="text-[var(--theme-text-secondary)] mb-8">
            Reach out through my freelance site, connect on LinkedIn, or check my resume for
            full work history.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href={links.freelance}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--theme-primary)] text-white rounded-lg font-semibold hover:bg-[var(--theme-secondary)] transition-colors shadow-lg cursor-pointer"
            >
              Freelance Site
              <ArrowUpRight size={18} />
            </a>
            <a
              href={links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 border border-[var(--theme-border)] text-[var(--theme-text)] rounded-lg font-semibold hover:border-[var(--theme-primary)] transition-colors cursor-pointer"
            >
              LinkedIn
              <ArrowUpRight size={18} />
            </a>
            <a
              href={links.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 border border-[var(--theme-border)] text-[var(--theme-text)] rounded-lg font-semibold hover:border-[var(--theme-primary)] transition-colors cursor-pointer"
            >
              Resume
              <ArrowUpRight size={18} />
            </a>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
