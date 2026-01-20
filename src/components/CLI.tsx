/**
 * CLI Component - Terminal-Style Project Navigator
 *
 * @fileoverview An interactive terminal/CLI interface for navigating projects.
 * Provides a command-line experience for power users who prefer terminal-style navigation.
 *
 * @description This component renders a full-featured terminal emulator with:
 * - Command history with arrow key navigation
 * - Multiple commands: ls, cat, open, filter, search, help, clear, exit
 * - Project details display with syntax highlighting
 * - Keyboard shortcuts (ESC to close, Enter to execute)
 *
 * @commands
 * - help: Display available commands
 * - ls: List all projects
 * - cat <project-id>: View detailed project information
 * - open <project-id>: Navigate to and highlight a project
 * - filter <domain>: Filter projects by domain
 * - search <query>: Search projects by title, description, or tech
 * - clear: Clear terminal history
 * - exit: Close the CLI
 *
 * @author The Winter Shadow
 * @since 1.0.0
 */

'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, X, Github, Mail, MessageCircle } from 'lucide-react';
import { projects } from '@/data/projects';
import { Project } from '@/types/project';

/**
 * Represents a single command execution in the terminal history
 */
interface CommandHistory {
  command: string;
  output: string | JSX.Element;
  timestamp: Date;
}

/**
 * Finds a project by ID or partial title match
 * @param query - The project ID or title fragment to search for
 * @returns The matching project or undefined if not found
 */
const findProject = (query: string): Project | undefined => {
  return projects.find(
    p => p.id === query || p.title.toLowerCase().includes(query.toLowerCase())
  );
};

/**
 * Renders a formatted list of projects for terminal output
 * @param projectList - Array of projects to display
 * @param title - Header title for the list
 * @returns JSX element with formatted project list
 */
const renderProjectList = (projectList: Project[], title: string) => (
  <div className="space-y-1">
    <div className="text-[var(--theme-primary)] font-semibold mb-2">
      {title} ({projectList.length}):
    </div>
    {projectList.map((p, i) => (
      <div key={p.id} className="flex items-center gap-2 py-1">
        <span className="text-[var(--theme-text-secondary)]">{String(i + 1).padStart(2, '0')}</span>
        <span className="text-[var(--theme-primary)]">{p.id}</span>
        <span className="text-[var(--theme-text-secondary)]">-</span>
        <span className="text-[var(--theme-text)]">{p.title}</span>
        <span className="text-[var(--theme-accent)]">[{p.domain}]</span>
        {p.featured && <span className="text-yellow-400">★</span>}
      </div>
    ))}
  </div>
);

/**
 * Available CLI commands with their descriptions and execute functions
 * Each command returns JSX for terminal output or null for special handling
 */
const COMMANDS = {
  help: {
    description: 'Show available commands',
    execute: () => (
      <div className="space-y-2">
        <div className="text-[var(--theme-primary)] font-semibold">Available Commands:</div>
        <div className="space-y-1 ml-4">
          <div><span className="text-[var(--theme-accent)]">ls</span> - List all projects</div>
          <div><span className="text-[var(--theme-accent)]">cat &lt;project-id&gt;</span> - View project details</div>
          <div><span className="text-[var(--theme-accent)]">open &lt;project-id&gt;</span> - Navigate to project</div>
          <div><span className="text-[var(--theme-accent)]">filter &lt;domain&gt;</span> - Filter by domain</div>
          <div><span className="text-[var(--theme-accent)]">search &lt;query&gt;</span> - Search projects</div>
          <div><span className="text-[var(--theme-accent)]">clear</span> - Clear terminal</div>
          <div><span className="text-[var(--theme-accent)]">exit</span> - Close CLI</div>
          <div><span className="text-[var(--theme-accent)]">help</span> - Show this help</div>
        </div>
      </div>
    ),
  },
  ls: {
    description: 'List all projects',
    execute: () => renderProjectList(projects, 'Projects'),
  },
  cat: {
    description: 'View project details',
    execute: (args: string[]) => {
      if (!args[0]) {
        return <div className="text-red-400">Usage: cat &lt;project-id&gt;</div>;
      }
      const project = findProject(args[0]);
      if (!project) {
        return <div className="text-red-400">Project not found. Use &apos;ls&apos; to see available projects.</div>;
      }
      return <ProjectDetails project={project} />;
    },
  },
  filter: {
    description: 'Filter projects by domain',
    execute: (args: string[]) => {
      if (!args[0]) {
        return <div className="text-red-400">Usage: filter &lt;domain&gt;</div>;
      }
      const domain = args[0].charAt(0).toUpperCase() + args[0].slice(1).toLowerCase();
      const filtered = projects.filter(p => p.domain.toLowerCase() === domain.toLowerCase());
      if (filtered.length === 0) {
        return <div className="text-yellow-400">No projects found for domain: {domain}</div>;
      }
      return renderProjectList(filtered, `Projects in ${domain}`);
    },
  },
  search: {
    description: 'Search projects',
    execute: (args: string[]) => {
      if (!args[0]) {
        return <div className="text-red-400">Usage: search &lt;query&gt;</div>;
      }
      const query = args.join(' ').toLowerCase();
      const filtered = projects.filter(p => 
        p.title.toLowerCase().includes(query) ||
        p.description.toLowerCase().includes(query) ||
        p.techStack.some(tech => tech.toLowerCase().includes(query))
      );
      if (filtered.length === 0) {
        return <div className="text-yellow-400">No projects found matching: {query}</div>;
      }
      return renderProjectList(filtered, 'Search results');
    },
  },
  clear: {
    description: 'Clear terminal',
    execute: () => null,
  },
  exit: {
    description: 'Close CLI',
    execute: () => null,
  },
  open: {
    description: 'Open a project by ID',
    execute: (args: string[]) => {
      if (!args[0]) {
        return <div className="text-red-400">Usage: open &lt;project-id&gt;</div>;
      }
      const project = findProject(args[0]);
      if (!project) {
        return <div className="text-red-400">Project not found. Use &apos;ls&apos; to see available projects.</div>;
      }
      return <div className="text-green-400">Opening project: {project.title}</div>;
    },
  },
};

/**
 * ProjectDetails Component - Renders detailed project information in terminal format
 * @param props - Component props
 * @param props.project - The project to display details for
 * @returns Formatted project details JSX
 */
function ProjectDetails({ project }: { project: Project }) {
  const types = Array.isArray(project.type) ? project.type : [project.type];
  return (
    <div className="space-y-3">
      <div className="border-l-2 border-[var(--theme-primary)] pl-4">
        <div className="text-2xl font-bold text-[var(--theme-primary)]">{project.title}</div>
        <div className="text-[var(--theme-text-secondary)]">{project.domain}</div>
      </div>
      <div>
        <div className="text-[var(--theme-accent)] font-semibold mb-1">Description:</div>
        <div className="text-[var(--theme-text)] ml-4">{project.longDescription || project.description}</div>
      </div>
      <div>
        <div className="text-[var(--theme-accent)] font-semibold mb-1">Type:</div>
        <div className="text-[var(--theme-text)] ml-4">{types.join(', ')}</div>
      </div>
      <div>
        <div className="text-[var(--theme-accent)] font-semibold mb-1">Tech Stack:</div>
        <div className="text-[var(--theme-text)] ml-4">{project.techStack.join(', ')}</div>
      </div>
      {project.features && project.features.length > 0 && (
        <div>
          <div className="text-[var(--theme-accent)] font-semibold mb-1">Features:</div>
          <ul className="text-[var(--theme-text)] ml-4 list-disc list-inside">
            {project.features.map((feature, i) => (
              <li key={i}>{feature}</li>
            ))}
          </ul>
        </div>
      )}
      {project.links.github && (
        <div>
          <div className="text-[var(--theme-accent)] font-semibold mb-1">Links:</div>
          <a 
            href={project.links.github} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-[var(--theme-primary)] hover:underline ml-4"
          >
            GitHub →
          </a>
        </div>
      )}
    </div>
  );
}

/**
 * Props for the CLI component
 */
interface CLIProps {
  /** Whether the CLI modal is currently open */
  isOpen: boolean;
  /** Callback to close the CLI modal */
  onClose: () => void;
  /** Optional callback to navigate to a specific project */
  onNavigateToProject?: (projectId: string) => void;
}

/**
 * CLI Component - Interactive Terminal Interface
 *
 * Provides a full terminal experience for navigating projects with:
 * - Command input with history navigation
 * - Animated modal with backdrop blur
 * - Contact links in header
 * - Keyboard shortcuts for power users
 *
 * @param props - Component props
 * @param props.isOpen - Controls modal visibility
 * @param props.onClose - Handler for closing the modal
 * @param props.onNavigateToProject - Optional handler for project navigation
 * @returns The CLI modal JSX or null when closed
 *
 * @example
 * ```tsx
 * <CLI
 *   isOpen={cliOpen}
 *   onClose={() => setCliOpen(false)}
 *   onNavigateToProject={(id) => navigateToProject(id)}
 * />
 * ```
 */
export default function CLI({ isOpen, onClose, onNavigateToProject }: CLIProps) {
  const [commandHistory, setCommandHistory] = useState<CommandHistory[]>([]);
  const [currentInput, setCurrentInput] = useState('');
  const [commandIndex, setCommandIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      setCommandHistory([{
        command: 'welcome',
        output: (
          <div className="space-y-2">
            <div className="text-[var(--theme-primary)] font-bold text-lg">Welcome to Project CLI!</div>
            <div className="text-[var(--theme-text-secondary)]">
              Navigate my projects using terminal commands. Type <span className="text-[var(--theme-accent)]">help</span> to get started.
            </div>
          </div>
        ),
        timestamp: new Date(),
      }]);
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [commandHistory]);

  /**
   * Executes a command and updates the terminal history
   * Handles special commands (exit, clear, open) and regular commands
   * @param input - The command string to execute
   */
  const executeCommand = (input: string) => {
    const trimmed = input.trim();
    if (!trimmed) return;

    const [command, ...args] = trimmed.split(' ');
    const cmd = command.toLowerCase();

    // Handle special commands
    if (cmd === 'exit') {
      onClose();
      return;
    }

    if (cmd === 'clear') {
      setCommandHistory([]);
      return;
    }

    // Handle open command with navigation
    if (cmd === 'open' && args[0]) {
      const project = findProject(args[0]);
      if (project && onNavigateToProject) {
        onNavigateToProject(project.id);
      }
      setCommandHistory(prev => [...prev, {
        command: trimmed,
        output: project ? <div className="text-green-400">Opening project: {project.title}</div> : <div className="text-red-400">Project not found</div>,
        timestamp: new Date(),
      }]);
      return;
    }

    // Handle regular commands
    const commandHandler = COMMANDS[cmd as keyof typeof COMMANDS];
    if (!commandHandler) {
      setCommandHistory(prev => [...prev, {
        command: trimmed,
        output: <div className="text-red-400">Command not found: {cmd}. Type &apos;help&apos; for available commands.</div>,
        timestamp: new Date(),
      }]);
      return;
    }

    const output = commandHandler.execute(args);
    if (output !== null) {
      setCommandHistory(prev => [...prev, {
        command: trimmed,
        output,
        timestamp: new Date(),
      }]);
    }
  };

  /**
   * Handles keyboard events for command input
   * Supports Enter (execute), ArrowUp/Down (history), and Escape (close)
   * @param e - The keyboard event
   */
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      executeCommand(currentInput);
      setCurrentInput('');
      setCommandIndex(-1);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (commandHistory.length > 0) {
        const newIndex = commandIndex === -1 ? commandHistory.length - 1 : Math.max(0, commandIndex - 1);
        setCommandIndex(newIndex);
        const cmd = commandHistory[newIndex]?.command;
        if (cmd && cmd !== 'welcome') {
          setCurrentInput(cmd);
        }
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (commandIndex >= 0) {
        const newIndex = commandIndex + 1;
        if (newIndex >= commandHistory.length) {
          setCommandIndex(-1);
          setCurrentInput('');
        } else {
          setCommandIndex(newIndex);
          setCurrentInput(commandHistory[newIndex].command);
        }
      }
    } else if (e.key === 'Escape') {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
        onClick={(e) => {
          if (e.target === e.currentTarget) onClose();
        }}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="w-full max-w-4xl h-[80vh] bg-[var(--theme-surface)] border border-[var(--theme-primary)] rounded-lg shadow-2xl flex flex-col overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Terminal Header */}
          <div className="flex items-center justify-between px-4 py-3 bg-[var(--theme-bg)] border-b border-[var(--theme-border)]">
            <div className="flex items-center gap-2">
              <Terminal size={20} className="text-[var(--theme-primary)]" />
              <span className="text-[var(--theme-text)] font-mono font-semibold">project-cli</span>
            </div>
            <div className="flex items-center gap-2">
              {/* Contact Bubbles */}
              <a
                href="https://github.com/TheWinterShadow"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 hover:bg-[var(--theme-surface)] rounded transition-colors group"
                aria-label="GitHub"
                title="GitHub"
              >
                <Github size={18} className="text-[var(--theme-text-secondary)] group-hover:text-[var(--theme-primary)] transition-colors" />
              </a>
              <a
                href="mailto:contact@thewintershadow.com"
                className="p-2 hover:bg-[var(--theme-surface)] rounded transition-colors group"
                aria-label="Email"
                title="Email"
              >
                <Mail size={18} className="text-[var(--theme-text-secondary)] group-hover:text-[var(--theme-primary)] transition-colors" />
              </a>
              <a
                href="#contact"
                onClick={onClose}
                className="p-2 hover:bg-[var(--theme-surface)] rounded transition-colors group"
                aria-label="Contact"
                title="Contact"
              >
                <MessageCircle size={18} className="text-[var(--theme-text-secondary)] group-hover:text-[var(--theme-primary)] transition-colors" />
              </a>
              <button
                onClick={onClose}
                className="p-1 hover:bg-[var(--theme-surface)] rounded transition-colors"
                aria-label="Close"
              >
                <X size={18} className="text-[var(--theme-text-secondary)]" />
              </button>
            </div>
          </div>

          {/* Terminal Body */}
          <div
            ref={terminalRef}
            className="flex-1 overflow-y-auto p-4 font-mono text-sm"
            style={{ backgroundColor: '#0a0a0a' }}
          >
            {commandHistory.map((item, index) => (
              <div key={index} className="mb-4">
                {item.command !== 'welcome' && (
                  <div className="mb-2">
                    <span className="text-[var(--theme-accent)]">$</span>
                    <span className="text-[var(--theme-text)] ml-2">{item.command}</span>
                  </div>
                )}
                <div className="text-[var(--theme-text)]">{item.output}</div>
              </div>
            ))}
            <div className="flex items-center gap-2">
              <span className="text-[var(--theme-accent)]">$</span>
              <input
                ref={inputRef}
                type="text"
                value={currentInput}
                onChange={(e) => setCurrentInput(e.target.value)}
                onKeyDown={handleKeyDown}
                className="flex-1 bg-transparent text-[var(--theme-text)] outline-none caret-[var(--theme-primary)]"
                autoFocus
                autoComplete="off"
                spellCheck="false"
              />
            </div>
          </div>

          {/* Terminal Footer */}
          <div className="px-4 py-2 bg-[var(--theme-bg)] border-t border-[var(--theme-border)] text-xs text-[var(--theme-text-secondary)]">
            Press <kbd className="px-1 py-0.5 bg-[var(--theme-surface)] rounded">ESC</kbd> to close • Type <span className="text-[var(--theme-accent)]">help</span> for commands
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

