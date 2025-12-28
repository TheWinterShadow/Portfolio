'use client';

import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Search, X, Filter } from 'lucide-react';
import { projects } from '@/data/projects';
import { Project, ProjectDomain, ProjectType } from '@/types/project';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDomains, setSelectedDomains] = useState<Set<ProjectDomain>>(new Set());
  const [selectedTypes, setSelectedTypes] = useState<Set<ProjectType>>(new Set());
  const [showFilters, setShowFilters] = useState(false);

  const domains: ProjectDomain[] = ['Security', 'Data Engineering', 'Web Development', 'Infrastructure', 'Research', 'Design'];
  const types: ProjectType[] = ['Open Source', 'Commercial', 'Research', 'Learning', 'Published Package'];

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      // Search filter
      if (searchQuery) {
        const query = searchQuery.toLowerCase();
        const matchesSearch =
          project.title.toLowerCase().includes(query) ||
          project.description.toLowerCase().includes(query) ||
          project.techStack.some((tech) => tech.toLowerCase().includes(query));
        if (!matchesSearch) return false;
      }

      // Domain filter
      if (selectedDomains.size > 0 && !selectedDomains.has(project.domain)) {
        return false;
      }

      // Type filter
      if (selectedTypes.size > 0) {
        const projectTypes = Array.isArray(project.type) ? project.type : [project.type];
        const hasMatchingType = projectTypes.some((type) => selectedTypes.has(type));
        if (!hasMatchingType) return false;
      }

      return true;
    });
  }, [searchQuery, selectedDomains, selectedTypes]);

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

  const clearFilters = () => {
    setSearchQuery('');
    setSelectedDomains(new Set());
    setSelectedTypes(new Set());
  };

  const hasActiveFilters = searchQuery || selectedDomains.size > 0 || selectedTypes.size > 0;

  return (
    <section
      id="projects"
      className="py-8 px-6 sm:px-8 lg:px-12"
      style={{ backgroundColor: 'var(--theme-bg)' }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Search and Filters */}
        <div className="mb-6 space-y-4">
          {/* Search Bar */}
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[var(--theme-text-secondary)]" size={20} />
            <input
              type="text"
              placeholder="Search projects..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-[var(--theme-surface)] border border-[var(--theme-border)] rounded-lg text-[var(--theme-text)] placeholder-[var(--theme-text-secondary)] focus:outline-none focus:ring-2 focus:ring-[var(--theme-primary)]"
            />
          </div>

          {/* Filter Toggle */}
          <div className="flex items-center justify-between">
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

          {/* Filter Panels */}
          {showFilters && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="grid md:grid-cols-2 gap-4 p-4 bg-[var(--theme-surface)] border border-[var(--theme-border)] rounded-lg"
            >
              {/* Domain Filters */}
              <div>
                <h3 className="text-sm font-semibold text-[var(--theme-text)] mb-2">Domain</h3>
                <div className="flex flex-wrap gap-2">
                  {domains.map((domain) => (
                    <button
                      key={domain}
                      onClick={() => toggleDomain(domain)}
                      className={`px-3 py-1 text-sm rounded transition-colors ${
                        selectedDomains.has(domain)
                          ? 'bg-[var(--theme-primary)] text-white'
                          : 'bg-[var(--theme-bg)] text-[var(--theme-text-secondary)] hover:bg-[var(--theme-primary)]/20'
                      }`}
                    >
                      {domain}
                    </button>
                  ))}
                </div>
              </div>

              {/* Type Filters */}
              <div>
                <h3 className="text-sm font-semibold text-[var(--theme-text)] mb-2">Type</h3>
                <div className="flex flex-wrap gap-2">
                  {types.map((type) => (
                    <button
                      key={type}
                      onClick={() => toggleType(type)}
                      className={`px-3 py-1 text-sm rounded transition-colors ${
                        selectedTypes.has(type)
                          ? 'bg-[var(--theme-secondary)] text-white'
                          : 'bg-[var(--theme-bg)] text-[var(--theme-text-secondary)] hover:bg-[var(--theme-secondary)]/20'
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </div>

        {/* Projects Grid */}
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onClick={() => setSelectedProject(project)}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-[var(--theme-text-secondary)] text-lg">
              No projects found matching your filters.
            </p>
            {hasActiveFilters && (
              <button
                onClick={clearFilters}
                className="mt-4 text-[var(--theme-primary)] hover:underline"
              >
                Clear filters
              </button>
            )}
          </div>
        )}
      </div>

      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  );
}

