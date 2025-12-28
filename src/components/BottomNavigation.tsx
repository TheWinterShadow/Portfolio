'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Home, FolderKanban, Mail, User, Code, Briefcase } from 'lucide-react';
import { motion } from 'framer-motion';

const navItems = [
  { href: '/', label: 'Home', icon: Home },
  { href: '/about', label: 'About', icon: User },
  { href: '/projects', label: 'Projects', icon: FolderKanban },
  { href: '/skills', label: 'Skills', icon: Code },
  { href: '/services', label: 'Services', icon: Briefcase },
  { href: '/contact', label: 'Contact', icon: Mail },
];

export default function BottomNavigation() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-[var(--theme-surface)] border-t border-[var(--theme-border)] backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-2 sm:px-4">
        <div className="flex items-center justify-center h-16 gap-1 sm:gap-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;
            
            return (
              <Link
                key={item.href}
                href={item.href}
                className="flex flex-col items-center justify-center gap-0.5 sm:gap-1 px-2 sm:px-3 h-full relative group min-w-[60px] sm:min-w-[70px]"
              >
                {isActive && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute top-0 left-0 right-0 h-1 bg-[var(--theme-primary)] rounded-t-full"
                    initial={false}
                    transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                    style={{ willChange: 'transform' }}
                  />
                )}
                <Icon
                  size={18}
                  className={`transition-colors ${
                    isActive
                      ? 'text-[var(--theme-primary)]'
                      : 'text-[var(--theme-text-secondary)] group-hover:text-[var(--theme-text)]'
                  }`}
                />
                <span
                  className={`text-[10px] sm:text-xs font-medium transition-colors ${
                    isActive
                      ? 'text-[var(--theme-primary)]'
                      : 'text-[var(--theme-text-secondary)] group-hover:text-[var(--theme-text)]'
                  }`}
                >
                  {item.label}
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}

