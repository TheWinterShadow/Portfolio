'use client';

import { motion } from 'framer-motion';
import { Award, Trophy, BookOpen, Star, ExternalLink } from 'lucide-react';

interface Achievement {
  title: string;
  description: string;
  type: 'certification' | 'award' | 'publication' | 'milestone';
  year?: string;
  link?: string;
  icon: typeof Award;
}

const achievements: Achievement[] = [
  {
    title: 'AWS Certified',
    description: 'Cloud security and infrastructure expertise',
    type: 'certification',
    year: '2024',
    icon: Award,
  },
  {
    title: 'Open Source Contributor',
    description: 'Published security tools and packages',
    type: 'milestone',
    year: '2023',
    icon: Star,
  },
  {
    title: 'Security Research',
    description: 'Published research and security findings',
    type: 'publication',
    year: '2023',
    icon: BookOpen,
  },
  // Add more achievements as needed
];

export default function AchievementsSection() {
  const getIconColor = (type: string) => {
    switch (type) {
      case 'certification':
        return 'text-[var(--theme-primary)]';
      case 'award':
        return 'text-[var(--theme-secondary)]';
      case 'publication':
        return 'text-[var(--theme-accent)]';
      default:
        return 'text-[var(--theme-primary)]';
    }
  };

  const getBgColor = (type: string) => {
    switch (type) {
      case 'certification':
        return 'bg-[var(--theme-primary)]/20';
      case 'award':
        return 'bg-[var(--theme-secondary)]/20';
      case 'publication':
        return 'bg-[var(--theme-accent)]/20';
      default:
        return 'bg-[var(--theme-primary)]/20';
    }
  };

  return (
    <section
      id="achievements"
      className="py-20 px-4 sm:px-6 lg:px-8"
      style={{ backgroundColor: 'var(--theme-bg)' }}
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--theme-text)] mb-4">
            Achievements
          </h2>
          <p className="text-lg text-[var(--theme-text-secondary)] max-w-2xl mx-auto">
            Certifications, awards, and milestones in my professional journey
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative bg-[var(--theme-surface)] border border-[var(--theme-border)] rounded-lg p-6 hover:border-[var(--theme-primary)] transition-all hover:shadow-lg"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-3 rounded-lg ${getBgColor(achievement.type)}`}>
                    <Icon size={24} className={getIconColor(achievement.type)} />
                  </div>
                  {achievement.year && (
                    <span className="text-sm text-[var(--theme-text-secondary)]">
                      {achievement.year}
                    </span>
                  )}
                </div>

                <h3 className="text-xl font-semibold text-[var(--theme-text)] mb-2">
                  {achievement.title}
                </h3>
                <p className="text-[var(--theme-text-secondary)] text-sm leading-relaxed">
                  {achievement.description}
                </p>

                {achievement.link && (
                  <a
                    href={achievement.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-2 text-[var(--theme-primary)] hover:underline text-sm"
                  >
                    View Details
                    <ExternalLink size={14} />
                  </a>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { label: 'Projects', value: '10+' },
            { label: 'Open Source', value: '5+' },
            { label: 'Years Experience', value: '3+' },
            { label: 'Technologies', value: '20+' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center bg-[var(--theme-surface)] border border-[var(--theme-border)] rounded-lg p-6"
            >
              <div className="text-3xl font-bold text-[var(--theme-primary)] mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-[var(--theme-text-secondary)]">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

