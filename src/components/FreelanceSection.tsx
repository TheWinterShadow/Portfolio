'use client';

import { motion } from 'framer-motion';
import { CheckCircle, Users, Zap, Shield, Code as CodeIcon, type LucideIcon } from 'lucide-react';

const services = [
  {
    icon: 'Shield',
    title: 'Security Consulting',
    description: 'Comprehensive security assessments, policy reviews, and vulnerability analysis for cloud infrastructure.',
  },
  {
    icon: 'Zap',
    title: 'Infrastructure Automation',
    description: 'CI/CD pipeline setup, infrastructure as code, and deployment automation to streamline your workflows.',
  },
  {
    icon: 'Code',
    title: 'Custom Tool Development',
    description: 'Bespoke security tools, data processing pipelines, and developer utilities tailored to your needs.',
  },
];

const testimonials = [
  {
    quote: 'Elijah delivered exceptional security analysis that helped us identify critical vulnerabilities in our cloud infrastructure.',
    author: 'Client A',
    role: 'CTO',
  },
  {
    quote: 'The automation tools developed significantly improved our deployment process and reduced manual errors.',
    author: 'Client B',
    role: 'Engineering Lead',
  },
];

const iconMap: Record<string, LucideIcon> = {
  Shield,
  Zap,
  Code: CodeIcon,
};

export default function FreelanceSection() {
  return (
    <section
      id="freelance"
      className="py-20 px-4 sm:px-6 lg:px-8"
      style={{ backgroundColor: 'var(--theme-bg)' }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Services */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon];
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-[var(--theme-surface)] border border-[var(--theme-border)] rounded-lg p-6 hover:border-[var(--theme-primary)] transition-colors"
              >
                <div className="p-3 bg-[var(--theme-primary)]/20 rounded-lg w-fit mb-4">
                  {Icon && <Icon size={24} className="text-[var(--theme-primary)]" />}
                </div>
                <h3 className="text-xl font-semibold text-[var(--theme-text)] mb-2">
                  {service.title}
                </h3>
                <p className="text-[var(--theme-text-secondary)]">{service.description}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h3 className="text-2xl font-semibold text-[var(--theme-text)] mb-6 text-center">
            Client Testimonials
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-[var(--theme-surface)] border border-[var(--theme-border)] rounded-lg p-6"
              >
                <p className="text-[var(--theme-text-secondary)] mb-4 italic">
                  &quot;{testimonial.quote}&quot;
                </p>
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-[var(--theme-primary)]/20 rounded-full flex items-center justify-center">
                    <Users size={20} className="text-[var(--theme-primary)]" />
                  </div>
                  <div>
                    <div className="font-semibold text-[var(--theme-text)]">
                      {testimonial.author}
                    </div>
                    <div className="text-sm text-[var(--theme-text-secondary)]">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center p-8 bg-[var(--theme-surface)] border border-[var(--theme-border)] rounded-lg"
        >
          <h3 className="text-2xl font-semibold text-[var(--theme-text)] mb-4">
            Ready to Work Together?
          </h3>
          <p className="text-[var(--theme-text-secondary)] mb-6 max-w-2xl mx-auto">
            Let&apos;s discuss how I can help secure your infrastructure, automate your workflows, or
            build custom tools for your team.
          </p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-8 py-3 bg-[var(--theme-primary)] text-white rounded-lg font-semibold hover:bg-[var(--theme-secondary)] transition-colors"
          >
            Get in Touch
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}

