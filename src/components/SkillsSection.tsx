'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { 
  Code, Cloud, Shield, Database, Settings, Network, 
  Lock, Brain, Server, FileCode, Terminal, Box, Sparkles,
  type LucideIcon
} from 'lucide-react';

// Technology logo mapping - using Simple Icons CDN (jsDelivr)
const techLogos: Record<string, string> = {
  // Cloud & Infrastructure
  'AWS': 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/amazonaws.svg',
  'Microsoft Azure': 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/microsoftazure.svg',
  'GCP': 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/googlecloud.svg',
  'Docker': 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/docker.svg',
  'VMware': 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/vmware.svg',
  'Kubernetes': 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/kubernetes.svg',
  'Terraform': 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/terraform.svg',
  'Ansible': 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/ansible.svg',
  
  // Languages
  'Python': 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/python.svg',
  'C': 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/c.svg',
  'Java': 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/java.svg',
  'JavaScript': 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/javascript.svg',
  'NextJS': 'https://cdn.jsdelivr.net/npm/simple-icons@9.21.0/icons/nextdotjs.svg',
  'TypeScript': 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/typescript.svg',
  'HTML5': 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/html5.svg',
  'CSS': 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/css3.svg',
  'Bash': 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/gnubash.svg',
  'SQL': 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/postgresql.svg',
  
  // Security Tools
  'Splunk': 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/splunk.svg',
  'FireEye': 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/firefoxbrowser.svg',
  'Wireshark': 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/wireshark.svg',
  'EnCase': 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/encapsulate.svg',
  'FTK': 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/forensics.svg',
  'Cellebrite': 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/cellebrite.svg',
  'Kibana': 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/kibana.svg',
  'Bazel': 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/bazel.svg',
  
  // Databases & Analytics
  'Elasticsearch': 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/elasticsearch.svg',
  'PostgreSQL': 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/postgresql.svg',
  'MongoDB': 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/mongodb.svg',
  'Spark': 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/apachespark.svg',
  'Apache Airflow': 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/apacheairflow.svg',
  
  // IAM & Access Control
  'ABAC': 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/keycloak.svg',
  'RBAC': 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/keycloak.svg',
  'FGAC': 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/keycloak.svg',
  'Zero Trust Architecture': 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/cloudflare.svg',
  'OAuth': 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/oauth.svg',
  'SAML': 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/saml.svg',
  
  // AI/ML Security
  'LLM Security': 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/openai.svg',
  'NLP': 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/tensorflow.svg',
  'Topic Modeling': 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/tensorflow.svg',
  'Sentiment Analysis': 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/tensorflow.svg',
  'Model Security': 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/tensorflow.svg',
  'MCP': 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/openai.svg',
  
  // Security Domains
  'Application Security': 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/owasp.svg',
  'Cloud Security': 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/amazonaws.svg',
  'Insider Threat': 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/security.svg',
  'Digital Forensics': 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/forensics.svg',
  'Incident Response': 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/security.svg',
  'Detection Engineering': 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/security.svg',
  'AI/ML Security': 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/tensorflow.svg',
  
  // Networking
  'TCP/IP': 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/network.svg',
  'Routing': 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/cisco.svg',
  'Switching': 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/cisco.svg',
  'VPNs': 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/wireguard.svg',
  'DHCP': 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/network.svg',
  'Subnetting': 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/network.svg',
  'Network Security': 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/security.svg',
};

// Fallback icon component
const DefaultIcon = Code;

// Technology icon mapping (fallback)
const techIcons: Record<string, LucideIcon> = {
  // Cloud & Infrastructure
  'AWS': Cloud,
  'Microsoft Azure': Cloud,
  'GCP': Cloud,
  'Docker': Box,
  'VMware': Server,
  'Kubernetes': Settings,
  'Terraform': FileCode,
  'Ansible': Settings,
  
  // Languages
  'Python': Code,
  'C': Code,
  'Java': Code,
  'JavaScript': Code,
  'NextJS': Code,
  'TypeScript': Code,
  'HTML5': Code,
  'CSS': Code,
  'Bash': Terminal,
  'SQL': Database,
  
  // Security Tools
  'Splunk': Shield,
  'FireEye': Shield,
  'Wireshark': Network,
  'EnCase': Shield,
  'FTK': Shield,
  'Cellebrite': Shield,
  'Kibana': Database,
  'Bazel': Settings,
  
  // Databases & Analytics
  'Elasticsearch': Database,
  'PostgreSQL': Database,
  'MongoDB': Database,
  'Spark': Database,
  'Apache Airflow': Database,
  
  // IAM & Access Control
  'ABAC': Lock,
  'RBAC': Lock,
  'FGAC': Lock,
  'Zero Trust Architecture': Shield,
  'OAuth': Lock,
  'SAML': Lock,
  
  // AI/ML Security
  'LLM Security': Brain,
  'NLP': Brain,
  'Topic Modeling': Brain,
  'Sentiment Analysis': Brain,
  'Model Security': Brain,
  'MCP': Brain,
};

const skillCategories = [
  {
    name: 'Cloud & Infrastructure',
    icon: Cloud,
    color: 'from-blue-500 to-cyan-500',
    skills: ['AWS', 'Microsoft Azure', 'GCP', 'Docker', 'VMware', 'Kubernetes', 'Terraform', 'Ansible'],
  },
  {
    name: 'Programming Languages',
    icon: Code,
    color: 'from-purple-500 to-pink-500',
    skills: ['Python', 'C', 'Java', 'JavaScript', 'TypeScript', 'HTML5', 'CSS', 'Bash', 'SQL'],
  },
  {
    name: 'Security Tools',
    icon: Shield,
    color: 'from-red-500 to-orange-500',
    skills: ['Splunk', 'FireEye', 'Wireshark', 'EnCase', 'FTK', 'Cellebrite', 'Kibana', 'Bazel'],
  },
  {
    name: 'Databases & Analytics',
    icon: Database,
    color: 'from-green-500 to-emerald-500',
    skills: ['Elasticsearch', 'PostgreSQL', 'MongoDB', 'SQL', 'Spark', 'Data Lakes', 'ETL Pipelines'],
  },
  {
    name: 'IAM & Access Control',
    icon: Lock,
    color: 'from-indigo-500 to-blue-500',
    skills: ['ABAC', 'RBAC', 'FGAC', 'Zero Trust Architecture', 'OAuth', 'SAML'],
  },
  {
    name: 'AI/ML Security',
    icon: Brain,
    color: 'from-violet-500 to-purple-500',
    skills: ['LLM Security', 'NLP', 'Topic Modeling', 'Sentiment Analysis', 'Model Security', 'MCP'],
  },
  {
    name: 'Security Domains',
    icon: Shield,
    color: 'from-rose-500 to-red-500',
    skills: ['Application Security', 'Cloud Security', 'Insider Threat', 'Digital Forensics', 'Incident Response', 'Detection Engineering', 'AI/ML Security'],
  },
  {
    name: 'Networking',
    icon: Network,
    color: 'from-teal-500 to-cyan-500',
    skills: ['TCP/IP', 'Routing', 'Switching', 'VPNs', 'DHCP', 'Subnetting', 'Network Security'],
  },
];

// Interactive Skill Badge Component
function SkillBadge({ 
  tech, 
  categoryColor,
  index 
}: { 
  tech: string; 
  categoryColor: string;
  index: number;
}) {
  const [isHovered, setIsHovered] = useState(false);
  const [imgError, setImgError] = useState(false);
  const logoUrl = techLogos[tech];
  const IconComponent = techIcons[tech] || Code;
  
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05, type: 'spring', stiffness: 200 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ scale: 1.1, y: -5 }}
      className="relative"
    >
      <motion.div
        animate={{
          boxShadow: isHovered
            ? '0 10px 30px rgba(0, 0, 0, 0.3)'
            : '0 4px 12px rgba(0, 0, 0, 0.1)',
        }}
        className={`
          relative overflow-hidden rounded-xl p-4 cursor-pointer
          bg-gradient-to-br ${categoryColor}
          border-2 border-white/20
          backdrop-blur-sm
        `}
      >
        {/* Animated background gradient */}
        <motion.div
          animate={{
            opacity: isHovered ? 0.3 : 0.1,
          }}
          className={`absolute inset-0 bg-gradient-to-br ${categoryColor}`}
        />
        
        {/* Content */}
        <div className="relative z-10 flex flex-col items-center gap-2">
          <motion.div
            animate={{
              rotate: isHovered ? [0, -10, 10, -10, 0] : 0,
              scale: isHovered ? 1.2 : 1,
            }}
            transition={{ duration: 0.5 }}
            className="p-3 bg-white/20 rounded-xl backdrop-blur-sm flex items-center justify-center"
            style={{ width: '56px', height: '56px' }}
          >
            {logoUrl && !imgError ? (
              <img
                src={logoUrl}
                alt={tech}
                className="w-7 h-7 object-contain"
                onError={() => setImgError(true)}
              />
            ) : (
              <IconComponent size={28} className="text-white" />
            )}
          </motion.div>
          
          <motion.span
            animate={{
              color: isHovered ? '#ffffff' : '#f0f0f0',
            }}
            className="text-sm font-semibold text-white text-center leading-tight"
          >
            {tech}
          </motion.span>
        </div>
        
        {/* Shine effect on hover */}
        {isHovered && (
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: '200%' }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
            style={{ transform: 'skewX(-20deg)' }}
          />
        )}
      </motion.div>
    </motion.div>
  );
}

export default function SkillsSection() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  return (
    <section
      id="skills"
      className="py-16 px-4 sm:px-6 lg:px-8"
      style={{ backgroundColor: 'var(--theme-surface)' }}
    >
      <div className="max-w-7xl mx-auto">
        {/* TL;DR Quick Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="bg-gradient-to-br from-[var(--theme-primary)]/10 via-[var(--theme-secondary)]/10 to-[var(--theme-accent)]/10 border-2 border-[var(--theme-primary)]/30 rounded-2xl p-8 backdrop-blur-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-[var(--theme-primary)]/20 rounded-lg">
                <Sparkles className="text-[var(--theme-primary)]" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-[var(--theme-text)]">
                TL;DR - Quick Summary
              </h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                {
                  title: 'Cloud & Infrastructure',
                  icon: Cloud,
                  summary: 'AWS, Azure, GCP, Docker, Kubernetes, Terraform',
                  color: 'from-blue-500 to-cyan-500',
                },
                {
                  title: 'Programming',
                  icon: Code,
                  summary: 'Python, Java, JavaScript, TypeScript, C, SQL',
                  color: 'from-purple-500 to-pink-500',
                },
                {
                  title: 'Security',
                  icon: Shield,
                  summary: 'IAM, Forensics, Threat Detection, Security Tools',
                  color: 'from-red-500 to-orange-500',
                },
                {
                  title: 'AI/ML & Data',
                  icon: Brain,
                  summary: 'LLM Security, NLP, MongoDB, Elasticsearch, Spark',
                  color: 'from-violet-500 to-purple-500',
                },
              ].map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="bg-[var(--theme-bg)] border border-[var(--theme-border)] rounded-xl p-5 hover:border-[var(--theme-primary)] transition-all"
                  >
                    <div className={`inline-flex p-3 rounded-lg bg-gradient-to-br ${item.color} mb-3 shadow-lg`}>
                      <Icon size={20} className="text-white" />
                    </div>
                    <h4 className="font-bold text-[var(--theme-text)] mb-2">
                      {item.title}
                    </h4>
                    <p className="text-sm text-[var(--theme-text-secondary)] leading-relaxed">
                      {item.summary}
                    </p>
                  </motion.div>
                );
              })}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="mt-6 pt-6 border-t border-[var(--theme-border)]"
            >
              <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-[var(--theme-primary)] rounded-full animate-pulse" />
                  <span className="text-[var(--theme-text-secondary)]">
                    <span className="font-semibold text-[var(--theme-text)]">
                      {skillCategories.reduce((acc, cat) => acc + cat.skills.length, 0)}+
                    </span>{' '}
                    Technologies
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-[var(--theme-secondary)] rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
                  <span className="text-[var(--theme-text-secondary)]">
                    <span className="font-semibold text-[var(--theme-text)]">
                      {skillCategories.length}
                    </span>{' '}
                    Categories
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-[var(--theme-accent)] rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
                  <span className="text-[var(--theme-text-secondary)]">
                    <span className="font-semibold text-[var(--theme-text)]">7+</span> Years
                    Experience
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Category Filter Pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-8"
        >
          <button
            onClick={() => setSelectedCategory(null)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
              selectedCategory === null
                ? 'bg-[var(--theme-primary)] text-white shadow-lg scale-105'
                : 'bg-[var(--theme-bg)] text-[var(--theme-text-secondary)] hover:bg-[var(--theme-primary)]/20 hover:text-[var(--theme-text)]'
            }`}
          >
            All Skills
          </button>
          {skillCategories.map((category) => {
            const Icon = category.icon;
            return (
              <motion.button
                key={category.name}
                onClick={() => setSelectedCategory(category.name)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedCategory === category.name
                    ? 'bg-[var(--theme-primary)] text-white shadow-lg'
                    : 'bg-[var(--theme-bg)] text-[var(--theme-text-secondary)] hover:bg-[var(--theme-primary)]/20 hover:text-[var(--theme-text)]'
                }`}
              >
                <Icon size={16} />
                <span>{category.name}</span>
              </motion.button>
            );
          })}
        </motion.div>

        {/* Skills Grid */}
        <div className="space-y-8">
          {skillCategories
            .filter((category) => selectedCategory === null || selectedCategory === category.name)
            .map((category, categoryIndex) => {
              const Icon = category.icon;
              return (
                <motion.div
                  key={category.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: categoryIndex * 0.1 }}
                  className="bg-[var(--theme-bg)] border border-[var(--theme-border)] rounded-2xl p-6 hover:border-[var(--theme-primary)]/50 transition-all"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${category.color} shadow-lg`}>
                      <Icon size={24} className="text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-[var(--theme-text)]">
                      {category.name}
                    </h3>
                    <div className="flex-1 h-px bg-gradient-to-r from-[var(--theme-primary)]/50 to-transparent ml-4" />
                    <span className="text-sm text-[var(--theme-text-secondary)] bg-[var(--theme-surface)] px-3 py-1 rounded-full">
                      {category.skills.length} skills
                    </span>
                  </div>
                  
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                    {category.skills.map((skill, skillIndex) => (
                      <SkillBadge
                        key={skill}
                        tech={skill}
                        categoryColor={category.color}
                        index={skillIndex}
                      />
                    ))}
                  </div>
                </motion.div>
              );
            })}
        </div>

        {/* Stats Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {[
            { label: 'Total Skills', value: skillCategories.reduce((acc, cat) => acc + cat.skills.length, 0) },
            { label: 'Categories', value: skillCategories.length },
            { label: 'Years Experience', value: '7+' },
            { label: 'Technologies', value: '50+' },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="text-center p-6 bg-[var(--theme-bg)] border border-[var(--theme-border)] rounded-xl hover:border-[var(--theme-primary)] transition-all"
            >
              <div className="text-3xl font-bold text-[var(--theme-primary)] mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-[var(--theme-text-secondary)]">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
