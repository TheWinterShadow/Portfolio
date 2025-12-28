'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, FileText } from 'lucide-react';

export default function AboutSection() {
  return (
    <section
      id="about"
      className="py-20 px-4 sm:px-6 lg:px-8"
      style={{ backgroundColor: 'var(--theme-bg)' }}
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.3 }}
          className="bg-[var(--theme-surface)] border border-[var(--theme-border)] rounded-lg p-8 max-w-3xl mx-auto"
        >
          <div className="prose prose-invert max-w-none">
            <p className="text-[var(--theme-text-secondary)] leading-relaxed text-lg mb-6">
              Welcome to my technical portfolio. I&apos;m a Security Engineer and Developer focused on
              building secure, scalable systems and creating tools that solve real-world problems.
            </p>
            <p className="text-[var(--theme-text-secondary)] leading-relaxed mb-6">
              This portfolio showcases my work across security engineering, data pipelines, web development,
              and infrastructure automation. Each project includes details about the technologies used,
              key features, and links to repositories and documentation.
            </p>
            <div className="flex flex-wrap gap-4 justify-center mt-8">
              <a
                href="https://github.com/TheWinterShadow"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-[var(--theme-primary)]/20 text-[var(--theme-primary)] rounded-lg hover:bg-[var(--theme-primary)]/30 transition-colors"
              >
                <Github size={20} />
                <span>GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/elijah-winter"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-[var(--theme-primary)]/20 text-[var(--theme-primary)] rounded-lg hover:bg-[var(--theme-primary)]/30 transition-colors"
              >
                <Linkedin size={20} />
                <span>LinkedIn</span>
              </a>
              <a
                href="mailto:contact@thewintershadow.com"
                className="flex items-center gap-2 px-4 py-2 bg-[var(--theme-primary)]/20 text-[var(--theme-primary)] rounded-lg hover:bg-[var(--theme-primary)]/30 transition-colors"
              >
                <Mail size={20} />
                <span>Email</span>
              </a>
              <a
                href="https://www.elijahwinter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-[var(--theme-primary)]/20 text-[var(--theme-primary)] rounded-lg hover:bg-[var(--theme-primary)]/30 transition-colors"
              >
                <FileText size={20} />
                <span>Resume</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

