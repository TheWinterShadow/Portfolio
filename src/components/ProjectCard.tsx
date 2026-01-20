/**
 * ProjectCard Component - Project Display Card
 *
 * @fileoverview A card component for displaying project information in a grid layout.
 * Features hover animations, thumbnail display, and quick action links.
 *
 * @description Renders a project card with:
 * - Thumbnail or animated placeholder
 * - Project title, domain, and type badges
 * - Truncated description
 * - Tech stack preview
 * - Stats (stars, contributors, downloads)
 * - Quick links (GitHub, live demo)
 *
 * @author The Winter Shadow
 * @since 1.0.0
 */

'use client';

import { motion } from 'framer-motion';
import { Project } from '@/types/project';
import { Github, ExternalLink, Star, Users, Download } from 'lucide-react';
import { useState } from 'react';

/**
 * Props for the ProjectCard component
 */
interface ProjectCardProps {
  project: Project;
  onClick: () => void;
}

/**
 * ProjectCard Component
 *
 * Displays a project in a card format with:
 * - Animated hover effects (lift and scale)
 * - Dynamic thumbnail or placeholder
 * - Project metadata badges
 * - Truncated description with overflow handling
 * - Tech stack tags (limited to 4 with overflow count)
 * - Stats display (stars, contributors, downloads)
 * - Quick action links that don't trigger card click
 *
 * @param props - Component props
 * @param props.project - The project data to display
 * @param props.onClick - Handler called when card is clicked (opens modal)
 * @returns The project card JSX
 *
 * @example
 * ```tsx
 * <ProjectCard
 *   project={myProject}
 *   onClick={() => setSelectedProject(myProject)}
 * />
 * ```
 */
export default function ProjectCard({ project, onClick }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  const types = Array.isArray(project.type) ? project.type : [project.type];

  return (
    <motion.div
      id={`project-${project.id}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -8, scale: 1.02 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onClick={onClick}
      className="cursor-pointer bg-[var(--theme-surface)] border border-[var(--theme-border)] rounded-lg overflow-hidden shadow-lg hover:shadow-2xl hover:border-[var(--theme-primary)] transition-all group"
    >
      {/* Thumbnail */}
      {project.media?.thumbnail ? (
        <div className="relative h-48 overflow-hidden">
          <img
            src={project.media.thumbnail}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--theme-surface)] to-transparent" />
        </div>
      ) : (
        <motion.div
          className="h-48 bg-gradient-to-br from-[var(--theme-primary)]/20 to-[var(--theme-secondary)]/20 flex items-center justify-center relative overflow-hidden"
          animate={isHovered ? {
            background: [
              'linear-gradient(135deg, var(--theme-primary)/20, var(--theme-secondary)/20)',
              'linear-gradient(135deg, var(--theme-primary)/30, var(--theme-secondary)/30)',
              'linear-gradient(135deg, var(--theme-primary)/20, var(--theme-secondary)/20)',
            ],
          } : {}}
          transition={{ duration: 2, repeat: isHovered ? Infinity : 0 }}
        >
          <motion.span
            className="text-4xl font-bold text-[var(--theme-primary)] opacity-50 z-10"
            animate={isHovered ? { scale: [1, 1.2, 1], rotate: [0, 5, -5, 0] } : {}}
            transition={{ duration: 0.5 }}
          >
            {project.title.charAt(0)}
          </motion.span>
          {isHovered && (
            <motion.div
              className="absolute inset-0 bg-[var(--theme-primary)]/10"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 0.3, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          )}
        </motion.div>
      )}

      <div className="p-4">
        {/* Header */}
        <div className="flex items-start justify-between mb-3">
          <div>
            <h3 className="text-xl font-bold text-[var(--theme-text)] mb-1">
              {project.title}
            </h3>
            <div className="flex flex-wrap gap-2 mb-2">
              <span className="px-2 py-1 text-xs font-medium bg-[var(--theme-primary)]/20 text-[var(--theme-primary)] rounded">
                {project.domain}
              </span>
              {types.map((type) => (
                <span
                  key={type}
                  className="px-2 py-1 text-xs font-medium bg-[var(--theme-secondary)]/20 text-[var(--theme-secondary)] rounded"
                >
                  {type}
                </span>
              ))}
            </div>
          </div>
          {project.featured && (
            <span className="px-2 py-1 text-xs font-bold bg-[var(--theme-accent)]/20 text-[var(--theme-accent)] rounded">
              Featured
            </span>
          )}
        </div>

        {/* Description */}
        <p className="text-[var(--theme-text-secondary)] text-sm mb-4 line-clamp-2">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.techStack.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 text-xs bg-[var(--theme-bg)] text-[var(--theme-text-secondary)] rounded"
            >
              {tech}
            </span>
          ))}
          {project.techStack.length > 4 && (
            <span className="px-2 py-1 text-xs text-[var(--theme-text-secondary)]">
              +{project.techStack.length - 4}
            </span>
          )}
        </div>

        {/* Stats & Links */}
        <div className="flex items-center justify-between pt-4 border-t border-[var(--theme-border)]">
          <div className="flex items-center gap-4 text-sm text-[var(--theme-text-secondary)]">
            {project.stats?.stars !== undefined && (
              <div className="flex items-center gap-1">
                <Star size={16} />
                <span>{project.stats.stars}</span>
              </div>
            )}
            {project.stats?.contributors !== undefined && (
              <div className="flex items-center gap-1">
                <Users size={16} />
                <span>{project.stats.contributors}</span>
              </div>
            )}
            {project.stats?.downloads && (
              <div className="flex items-center gap-1">
                <Download size={16} />
                <span>{project.stats.downloads}</span>
              </div>
            )}
          </div>
          <div className="flex items-center gap-2">
            {project.links.github && (
              <a
                href={project.links.github}
                onClick={(e) => e.stopPropagation()}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 hover:bg-[var(--theme-primary)]/10 rounded transition-colors"
                aria-label="GitHub"
              >
                <Github size={18} className="text-[var(--theme-text-secondary)]" />
              </a>
            )}
            {project.media?.liveDemo && (
              <a
                href={project.media.liveDemo}
                onClick={(e) => e.stopPropagation()}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 hover:bg-[var(--theme-primary)]/10 rounded transition-colors"
                aria-label="Live Demo"
              >
                <ExternalLink size={18} className="text-[var(--theme-text-secondary)]" />
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
