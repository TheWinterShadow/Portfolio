'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Project } from '@/types/project';
import { X, Github, ExternalLink, BookOpen, FileText, Package } from 'lucide-react';
import { useEffect } from 'react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    if (project) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [project]);

  if (!project) return null;

  const types = Array.isArray(project.type) ? project.type : [project.type];

  return (
    <AnimatePresence>
      {project && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50"
          />
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-4xl max-h-[90vh] bg-[var(--theme-surface)] rounded-lg shadow-2xl overflow-hidden flex flex-col pointer-events-auto"
            >
            {/* Header */}
            <div className="p-6 border-b border-[var(--theme-border)] flex items-start justify-between">
              <div className="flex-1">
                <h2 className="text-3xl font-bold text-[var(--theme-text)] mb-2">
                  {project.title}
                </h2>
                <div className="flex flex-wrap gap-2 mb-2">
                  <span className="px-3 py-1 text-sm font-medium bg-[var(--theme-primary)]/20 text-[var(--theme-primary)] rounded">
                    {project.domain}
                  </span>
                  {types.map((type) => (
                    <span
                      key={type}
                      className="px-3 py-1 text-sm font-medium bg-[var(--theme-secondary)]/20 text-[var(--theme-secondary)] rounded"
                    >
                      {type}
                    </span>
                  ))}
                </div>
              </div>
              <button
                onClick={onClose}
                className="p-2 hover:bg-[var(--theme-bg)] rounded transition-colors"
                aria-label="Close"
              >
                <X size={24} className="text-[var(--theme-text-secondary)]" />
              </button>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto p-6">
              {/* Description */}
              <div className="mb-6">
                <p className="text-[var(--theme-text-secondary)] leading-relaxed">
                  {project.longDescription || project.description}
                </p>
              </div>

              {/* Features */}
              {project.features && project.features.length > 0 && (
                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-[var(--theme-text)] mb-3">
                    Key Features
                  </h3>
                  <ul className="space-y-2">
                    {project.features.map((feature, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-2 text-[var(--theme-text-secondary)]"
                      >
                        <span className="text-[var(--theme-primary)] mt-1">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Tech Stack */}
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-[var(--theme-text)] mb-3">
                  Tech Stack
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-[var(--theme-bg)] text-[var(--theme-text-secondary)] rounded text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Screenshots */}
              {project.media?.screenshots && project.media.screenshots.length > 0 && (
                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-[var(--theme-text)] mb-3">
                    Screenshots
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {project.media.screenshots.map((screenshot, index) => (
                      <img
                        key={index}
                        src={screenshot}
                        alt={`${project.title} screenshot ${index + 1}`}
                        className="rounded-lg border border-[var(--theme-border)]"
                      />
                    ))}
                  </div>
                </div>
              )}

              {/* Stats */}
              {project.stats && (
                <div className="mb-6 p-4 bg-[var(--theme-bg)] rounded-lg">
                  <h3 className="text-lg font-semibold text-[var(--theme-text)] mb-3">
                    Project Stats
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {project.stats.stars !== undefined && (
                      <div>
                        <div className="text-2xl font-bold text-[var(--theme-primary)]">
                          {project.stats.stars}
                        </div>
                        <div className="text-sm text-[var(--theme-text-secondary)]">Stars</div>
                      </div>
                    )}
                    {project.stats.forks !== undefined && (
                      <div>
                        <div className="text-2xl font-bold text-[var(--theme-primary)]">
                          {project.stats.forks}
                        </div>
                        <div className="text-sm text-[var(--theme-text-secondary)]">Forks</div>
                      </div>
                    )}
                    {project.stats.contributors !== undefined && (
                      <div>
                        <div className="text-2xl font-bold text-[var(--theme-primary)]">
                          {project.stats.contributors}
                        </div>
                        <div className="text-sm text-[var(--theme-text-secondary)]">
                          Contributors
                        </div>
                      </div>
                    )}
                    {project.stats.downloads && (
                      <div>
                        <div className="text-2xl font-bold text-[var(--theme-primary)]">
                          {project.stats.downloads}
                        </div>
                        <div className="text-sm text-[var(--theme-text-secondary)]">Downloads</div>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* Footer with Links */}
            <div className="p-6 border-t border-[var(--theme-border)] flex flex-wrap gap-3">
              {project.links.github && (
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-[var(--theme-primary)] text-white rounded-lg hover:bg-[var(--theme-secondary)] transition-colors"
                >
                  <Github size={18} />
                  <span>GitHub</span>
                </a>
              )}
              {project.links.docs && (
                <a
                  href={project.links.docs}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 border border-[var(--theme-primary)] text-[var(--theme-primary)] rounded-lg hover:bg-[var(--theme-primary)]/10 transition-colors"
                >
                  <BookOpen size={18} />
                  <span>Documentation</span>
                </a>
              )}
              {project.links.pypi && (
                <a
                  href={project.links.pypi}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 border border-[var(--theme-primary)] text-[var(--theme-primary)] rounded-lg hover:bg-[var(--theme-primary)]/10 transition-colors"
                >
                  <Package size={18} />
                  <span>PyPI</span>
                </a>
              )}
              {project.media?.liveDemo && (
                <a
                  href={project.media.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 border border-[var(--theme-primary)] text-[var(--theme-primary)] rounded-lg hover:bg-[var(--theme-primary)]/10 transition-colors"
                >
                  <ExternalLink size={18} />
                  <span>Live Demo</span>
                </a>
              )}
              {project.links.article && (
                <a
                  href={project.links.article}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 border border-[var(--theme-primary)] text-[var(--theme-primary)] rounded-lg hover:bg-[var(--theme-primary)]/10 transition-colors"
                >
                  <FileText size={18} />
                  <span>Article</span>
                </a>
              )}
              {project.links.website && (
                <a
                  href={project.links.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 border border-[var(--theme-primary)] text-[var(--theme-primary)] rounded-lg hover:bg-[var(--theme-primary)]/10 transition-colors"
                >
                  <ExternalLink size={18} />
                  <span>Website</span>
                </a>
              )}
            </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}

