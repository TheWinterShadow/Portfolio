/**
 * Home Page - Main Project Showcase
 *
 * @fileoverview The primary landing page for the portfolio, featuring a hero section,
 * featured projects, and a filterable grid of all projects. Includes search functionality,
 * domain/type filtering, and integration with the CLI interface.
 *
 * @description This page serves as the main entry point for visitors, showcasing projects
 * across multiple domains including Security, Data Engineering, Web Development, and more.
 * It features smooth animations using Framer Motion and a responsive design.
 *
 * @features
 * - Hero section with animated background and CLI mode access
 * - Featured projects showcase
 * - Full project grid with search and filter capabilities
 * - Project modal for detailed views
 * - CLI interface for terminal-style navigation
 *
 * @author The Winter Shadow
 * @since 1.0.0
 */

'use client';

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, Sparkles, Filter, Search, X } from 'lucide-react';
import { projects } from '@/data/projects';
import { Project, ProjectDomain, ProjectType } from '@/types/project';
import ProjectCard from '@/components/ProjectCard';
import ProjectModal from '@/components/ProjectModal';
import CLI from '@/components/CLI';
import ContactBubbles from '@/components/ContactBubbles';

/**
 * Home Component - Main landing page for the project showcase
 *
 * Renders the complete portfolio experience including:
 * - Animated hero section with call-to-action
 * - Featured projects carousel
 * - Searchable and filterable project grid
 * - CLI modal for terminal-style navigation
 * - Project detail modal
 *
 * @returns The complete home page JSX
 *
 * @example
 * ```tsx
 * // Used as the default export for the home route
 * // Automatically rendered at '/'
 * ```
 */
export default function Home() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDomains, setSelectedDomains] = useState<Set<ProjectDomain>>(new Set());
  const [selectedTypes, setSelectedTypes] = useState<Set<ProjectType>>(new Set());
  const [showFilters, setShowFilters] = useState(false);
  const [cliOpen, setCliOpen] = useState(false);

  const domains: ProjectDomain[] = ['Security', 'Data Engineering', 'Web Development', 'Infrastructure', 'Research', 'Design'];
  const types: ProjectType[] = ['Open Source', 'Commercial', 'Research', 'Learning', 'Published Package'];

  /**
   * Memoized filtered projects based on search query and selected filters
   * Filters by title, description, tech stack, domain, and project type
   */
  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      if (searchQuery) {
        const query = searchQuery.toLowerCase();
        const matchesSearch =
          project.title.toLowerCase().includes(query) ||
          project.description.toLowerCase().includes(query) ||
          project.techStack.some((tech) => tech.toLowerCase().includes(query));
        if (!matchesSearch) return false;
      }

      if (selectedDomains.size > 0 && !selectedDomains.has(project.domain)) {
        return false;
      }

      if (selectedTypes.size > 0) {
        const projectTypes = Array.isArray(project.type) ? project.type : [project.type];
        const hasMatchingType = projectTypes.some((type) => selectedTypes.has(type));
        if (!hasMatchingType) return false;
      }

      return true;
    });
  }, [searchQuery, selectedDomains, selectedTypes]);

  /**
   * Toggles a domain filter on/off
   * @param domain - The domain to toggle in the filter set
   */
  const toggleDomain = (domain: ProjectDomain) => {
    setSelectedDomains((prev) => {
      const next = new Set(prev);
      if (next.has(domain)) {
        next.delete(domain);
      } else {
        next.add(domain);
      }
      return next;
    });
  };

  /**
   * Toggles a project type filter on/off
   * @param type - The project type to toggle in the filter set
   */
  const toggleType = (type: ProjectType) => {
    setSelectedTypes((prev) => {
      const next = new Set(prev);
      if (next.has(type)) {
        next.delete(type);
      } else {
        next.add(type);
      }
      return next;
    });
  };

  /**
   * Clears all active filters and search query
   */
  const clearFilters = () => {
    setSearchQuery('');
    setSelectedDomains(new Set());
    setSelectedTypes(new Set());
  };

  const hasActiveFilters = searchQuery || selectedDomains.size > 0 || selectedTypes.size > 0;
  const featuredProjects = projects.filter(p => p.featured);

  /**
   * Handles navigation to a specific project from CLI
   * Opens the project modal and scrolls to the project card
   * @param projectId - The ID of the project to navigate to
   */
  const handleNavigateToProject = (projectId: string) => {
    const project = projects.find(p => p.id === projectId);
    if (project) {
      setSelectedProject(project);
      setCliOpen(false);
      setTimeout(() => {
        document.getElementById(`project-${project.id}`)?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }, 100);
    }
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--theme-bg)' }}>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute inset-0 opacity-20">
            <motion.div
              className="absolute top-1/4 left-1/4 w-96 h-96 bg-[var(--theme-primary)] rounded-full blur-3xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.2, 0.3, 0.2],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
            <motion.div
              className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[var(--theme-secondary)] rounded-full blur-3xl"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.2, 0.3, 0.2],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: 1,
              }}
            />
          </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
              className="inline-block mb-6"
            >
              <Sparkles className="text-[var(--theme-primary)]" size={48} />
            </motion.div>
            <h1 className="text-5xl md:text-7xl font-bold mb-4">
              <span className="text-[var(--theme-text)]">Project Showcase</span>
            </h1>
            <p className="text-xl md:text-2xl text-[var(--theme-text-secondary)] mb-8 max-w-2xl mx-auto">
              Explore my collection of projects spanning security, data engineering, web development, and more
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setCliOpen(true)}
              className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--theme-primary)] text-white rounded-lg font-semibold hover:bg-[var(--theme-secondary)] transition-colors shadow-lg mb-4"
            >
              <Terminal size={20} />
              Open CLI Mode
            </motion.button>
            <p className="text-sm text-[var(--theme-text-secondary)] mb-6">
              Navigate projects through terminal commands
            </p>

            {/* Contact Bubbles */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex justify-center"
            >
              <ContactBubbles />
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="text-[var(--theme-text-secondary)]"
          >
            ↓ Scroll to explore
          </motion.div>
        </motion.div>
      </section>

      {/* Featured Projects Section */}
      {featuredProjects.length > 0 && (
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-[var(--theme-text)] mb-4">
                Featured Projects
              </h2>
              <p className="text-lg text-[var(--theme-text-secondary)]">
                Highlighted projects showcasing my best work
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  id={`project-${project.id}`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <ProjectCard
                    project={project}
                    onClick={() => setSelectedProject(project)}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Projects Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[var(--theme-text)] mb-4">
              All Projects
            </h2>
            <p className="text-lg text-[var(--theme-text-secondary)]">
              {projects.length} projects across {domains.length} domains
            </p>
          </motion.div>

          {/* Search and Filters */}
          <div className="mb-8 space-y-4">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[var(--theme-text-secondary)]" size={20} />
              <input
                type="text"
                placeholder="Search projects..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-[var(--theme-surface)] border border-[var(--theme-border)] rounded-lg text-[var(--theme-text)] placeholder-[var(--theme-text-secondary)] focus:outline-none focus:ring-2 focus:ring-[var(--theme-primary)] transition-all"
              />
            </div>

            <div className="flex items-center justify-between flex-wrap gap-4">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center gap-2 px-4 py-2 bg-[var(--theme-surface)] border border-[var(--theme-border)] rounded-lg text-[var(--theme-text)] hover:bg-[var(--theme-primary)]/10 transition-colors"
              >
                <Filter size={18} />
                <span>Filters</span>
              </button>
              {hasActiveFilters && (
                <button
                  onClick={clearFilters}
                  className="flex items-center gap-2 px-4 py-2 text-[var(--theme-text-secondary)] hover:text-[var(--theme-primary)] transition-colors"
                >
                  <X size={18} />
                  <span>Clear Filters</span>
                </button>
              )}
            </div>

            <AnimatePresence>
              {showFilters && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="grid md:grid-cols-2 gap-4 p-4 bg-[var(--theme-surface)] border border-[var(--theme-border)] rounded-lg"
                >
                  <div>
                    <h3 className="text-sm font-semibold text-[var(--theme-text)] mb-2">Domain</h3>
                    <div className="flex flex-wrap gap-2">
                      {domains.map((domain) => (
                        <button
                          key={domain}
                          onClick={() => toggleDomain(domain)}
                          className={`px-3 py-1 text-sm rounded transition-all ${
                            selectedDomains.has(domain)
                              ? 'bg-[var(--theme-primary)] text-white scale-110'
                              : 'bg-[var(--theme-bg)] text-[var(--theme-text-secondary)] hover:bg-[var(--theme-primary)]/20 hover:scale-105'
                          }`}
                        >
                          {domain}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-sm font-semibold text-[var(--theme-text)] mb-2">Type</h3>
                    <div className="flex flex-wrap gap-2">
                      {types.map((type) => (
                        <button
                          key={type}
                          onClick={() => toggleType(type)}
                          className={`px-3 py-1 text-sm rounded transition-all ${
                            selectedTypes.has(type)
                              ? 'bg-[var(--theme-secondary)] text-white scale-110'
                              : 'bg-[var(--theme-bg)] text-[var(--theme-text-secondary)] hover:bg-[var(--theme-secondary)]/20 hover:scale-105'
                          }`}
                        >
                          {type}
                        </button>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Projects Grid */}
          {filteredProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <AnimatePresence mode="wait">
                {filteredProjects.map((project, index) => (
                  <motion.div
                    key={project.id}
                    id={`project-${project.id}`}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ delay: index * 0.05 }}
                    layout
                  >
                    <ProjectCard
                      project={project}
                      onClick={() => setSelectedProject(project)}
                    />
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <p className="text-[var(--theme-text-secondary)] text-lg mb-4">
                No projects found matching your filters.
              </p>
              {hasActiveFilters && (
                <button
                  onClick={clearFilters}
                  className="text-[var(--theme-primary)] hover:underline"
                >
                  Clear filters
                </button>
              )}
            </motion.div>
          )}
        </div>
      </section>

      {/* CLI Component */}
      <CLI
        isOpen={cliOpen}
        onClose={() => setCliOpen(false)}
        onNavigateToProject={handleNavigateToProject}
      />

      {/* Project Modal */}
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </div>
  );
}
