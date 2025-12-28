'use client';

import { useState } from 'react';
import { Terminal, Folder, Code, User, Mail, Github } from 'lucide-react';
import ProjectsSection from '@/components/ProjectsSection';
import SkillsSection from '@/components/SkillsSection';
import FreelanceSection from '@/components/FreelanceSection';
import ContactSection from '@/components/ContactSection';
import ThemeToggle from '@/components/ThemeToggle';
import EasterEggs from '@/components/EasterEggs';
import { motion } from 'framer-motion';

/**
 * Cyber Command Center Layout
 * Terminal/IDE-inspired layout with sidebar navigation
 * Split-pane design, code-like structure
 */
export default function CyberLayout() {
  const [activeTab, setActiveTab] = useState('home');
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const tabs = [
    { id: 'home', label: 'home.ts', icon: Code },
    { id: 'projects', label: 'projects.ts', icon: Folder },
    { id: 'skills', label: 'skills.ts', icon: Terminal },
    { id: 'freelance', label: 'freelance.ts', icon: User },
    { id: 'contact', label: 'contact.ts', icon: Mail },
  ];

  return (
    <main className="min-h-screen flex" style={{ backgroundColor: 'var(--theme-bg)' }}>
      <EasterEggs />
      
      {/* Sidebar */}
      <motion.aside
        animate={{ x: sidebarOpen ? 0 : -250 }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        className="fixed left-0 top-0 h-full w-64 bg-[var(--theme-surface)] border-r border-[var(--theme-border)] z-40 flex flex-col"
      >
        <div className="p-4 border-b border-[var(--theme-border)]">
          <h1 className="text-xl font-mono font-bold text-[var(--theme-primary)]">
            &gt; TheWinterShadow
          </h1>
          <p className="text-xs text-[var(--theme-text-secondary)] mt-1 font-mono">
            Security Engineer | Developer
          </p>
        </div>
        
        <nav className="flex-1 p-4 space-y-2">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`w-full flex items-center gap-3 px-3 py-2 rounded font-mono text-sm transition-colors ${
                  activeTab === tab.id
                    ? 'bg-[var(--theme-primary)]/20 text-[var(--theme-primary)]'
                    : 'text-[var(--theme-text-secondary)] hover:bg-[var(--theme-bg)]'
                }`}
              >
                <Icon size={16} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </nav>

        <div className="p-4 border-t border-[var(--theme-border)]">
          <a
            href="https://github.com/TheWinterShadow"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-[var(--theme-text-secondary)] hover:text-[var(--theme-primary)] transition-colors text-sm font-mono"
          >
            <Github size={16} />
            <span>github.com/TheWinterShadow</span>
          </a>
        </div>
      </motion.aside>

      {/* Main Content Area */}
      <motion.div 
        className="flex-1"
        animate={{ marginLeft: sidebarOpen ? '16rem' : '0' }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      >
        {/* Terminal Header */}
        <div className="sticky top-0 z-30 bg-[var(--theme-surface)] border-b border-[var(--theme-border)] px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
            <span className="ml-4 text-sm font-mono text-[var(--theme-text-secondary)]">
              {tabs.find(t => t.id === activeTab)?.label || 'home.ts'}
            </span>
          </div>
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="text-[var(--theme-text-secondary)] hover:text-[var(--theme-primary)] transition-colors"
          >
            {sidebarOpen ? '◀' : '▶'}
          </button>
        </div>

        {/* Content Pane */}
        <div className="p-8">
          {activeTab === 'home' && (
            <div className="max-w-4xl mx-auto">
              <div className="mb-8">
                <h1 className="text-4xl font-mono font-bold text-[var(--theme-text)] mb-2">
                  <span className="text-[var(--theme-primary)]">const</span>{' '}
                  <span className="text-[var(--theme-secondary)]">developer</span> = {'{'}
                </h1>
                <div className="ml-8 space-y-2 text-[var(--theme-text-secondary)] font-mono">
                  <p><span className="text-[var(--theme-primary)]">name:</span> &quot;Elijah Winter&quot;,</p>
                  <p><span className="text-[var(--theme-primary)]">role:</span> &quot;Security Engineer | Developer&quot;,</p>
                  <p><span className="text-[var(--theme-primary)]">tagline:</span> &quot;Building secure systems&quot;,</p>
                </div>
                <p className="text-[var(--theme-text)] font-mono">{'}'}</p>
              </div>
              <div className="bg-[var(--theme-bg)] border border-[var(--theme-border)] rounded p-4 font-mono text-sm">
                <p className="text-[var(--theme-text-secondary)] mb-2">
                  $ <span className="text-[var(--theme-primary)]">cat</span> about.txt
                </p>
                <p className="text-[var(--theme-text)]">
                  Welcome to my portfolio. Navigate using the sidebar to explore projects, skills, and more.
                </p>
              </div>
            </div>
          )}
          
          {activeTab === 'projects' && <ProjectsSection />}
          {activeTab === 'skills' && <SkillsSection />}
          {activeTab === 'freelance' && <FreelanceSection />}
          {activeTab === 'contact' && <ContactSection />}
        </div>
      </motion.div>

      <ThemeToggle />
    </main>
  );
}

