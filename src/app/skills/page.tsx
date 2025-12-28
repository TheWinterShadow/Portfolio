'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Bot, Lock, Settings, Shield, AlertTriangle, Cloud, FileText, CheckCircle, ArrowRight } from 'lucide-react';

const skillCategories = [
  {
    icon: Bot,
    emoji: '🤖',
    title: 'AI & Machine Learning Security',
    opening: 'SPECIALIZED EXPERTISE IN EMERGING SECURITY DOMAIN',
    openingNote: 'Most security professionals are just now learning about AI security. I built Amazon\'s AI security standards and secured 200+ production AI models.',
    whatISecure: [
      'Large Language Models (LLMs) and generative AI systems',
      'Machine learning pipelines and training infrastructure',
      'AI-powered SaaS features and products',
      'Model APIs and inference endpoints',
      'Training data and model artifacts',
    ],
    threats: [
      'Prompt injection and jailbreaking attacks',
      'Model inversion and extraction attacks',
      'Training data poisoning and backdoors',
      'Adversarial inputs and evasion techniques',
      'Data leakage through model outputs',
      'Unauthorized model access and theft',
    ],
    experience: [
      'Co-founded Amazon\'s AI Security Organization',
      'Created security standards for 500+ AI development teams',
      'Secured 200+ AI models in production environments',
      'Reduced AI security assessment time by 70% through automation',
      'Advised VPs and CISOs on AI security strategy',
    ],
  },
  {
    icon: Lock,
    emoji: '🔐',
    title: 'Identity & Access Management (IAM)',
    opening: 'ENTERPRISE-GRADE AUTHORIZATION AT ANY SCALE',
    openingNote: 'Complex permission systems are where most companies struggle. I\'ve implemented access control for everything from 10-user startups to systems serving millions.',
    whatIBuild: [
      'Attribute-Based Access Control (ABAC)',
      'Fine-Grained Access Control (FGAC)',
      'Role-Based Access Control (RBAC)',
      'Zero Trust Architecture',
      'Policy-as-Code frameworks',
      'OAuth 2.0 / SAML / JWT implementations',
    ],
    perfectFor: '"Users in team A can edit documents in projects they\'re assigned to if they have manager role AND the document isn\'t locked AND they\'re in the same region as the document owner..."',
    perfectForNote: 'This is exactly the kind of complex permission logic I specialize in architecting cleanly.',
    technologies: 'AWS IAM, Azure AD, PostgreSQL, Custom authorization engines, Policy frameworks',
    results: [
      '35% reduction in unauthorized access incidents',
      'Successfully implemented for 50+ development teams at Amazon',
      'Scaled systems from 10 users to 10,000+ users seamlessly',
      'Reduced time to implement new permission rules from weeks to days',
    ],
  },
  {
    icon: Settings,
    emoji: '⚙️',
    title: 'Security Automation & Tooling',
    opening: 'LET MACHINES DO THE TEDIOUS SECURITY WORK',
    openingNote: 'Manual security reviews don\'t scale. I build automation that catches vulnerabilities faster and more consistently than humans can.',
    whatIAutomate: [
      'Vulnerability scanning and risk prioritization',
      'Security review workflows and approvals',
      'Incident response playbooks',
      'Compliance reporting and evidence collection',
      'Threat detection and alerting',
      'Security metrics and dashboards',
    ],
    techStack: [
      'Languages: Python (Expert), Bash, JavaScript/Node.js',
      'Cloud: AWS (Lambda, Step Functions, EventBridge, SQS)',
      'Infrastructure as Code: Terraform, Ansible, CloudFormation',
      'Analytics: Elasticsearch, Kibana, Splunk, SQL',
      'Security Tools: Custom-built + integration with commercial tools',
    ],
    impact: [
      '70% reduction in manual security assessment work',
      '66% faster incident response time (4 hours → 1 hour)',
      '30% reduction in false positive alerts',
      '15% faster security reviews for 100,000+ applications',
      'Enabled security teams to scale without proportional headcount increases',
    ],
  },
  {
    icon: Shield,
    emoji: '🔒',
    title: 'Application Security & Secure Code Review',
    opening: 'FIND VULNERABILITIES BEFORE ATTACKERS DO',
    openingNote: 'Proactive security beats reactive patching. I find and fix vulnerabilities in design and code before they reach production.',
    assessmentTypes: [
      'Secure architecture design reviews',
      'Source code security audits',
      'API security assessments',
      'Web application penetration testing',
      'Threat modeling workshops',
      'Security requirements gathering',
      'Third-party integration reviews',
    ],
    tools: [
      'OWASP Top 10 + OWASP LLM Top 10 (for AI apps)',
      'Static Analysis: Semgrep, CodeQL, Bandit',
      'Dynamic Analysis: Burp Suite, OWASP ZAP',
      'Manual code review with security focus',
      'Threat modeling (STRIDE, PASTA methodologies)',
      'Security testing in CI/CD pipelines',
    ],
    scale: [
      'Reviewed security posture for 100,000+ applications',
      'Led secure design reviews with VPs and CISOs',
      'Advised 40+ healthcare companies on secure architecture',
      'Conducted security reviews for high-impact product launches',
      'Created security review frameworks reducing assessment time by 15%',
    ],
  },
  {
    icon: AlertTriangle,
    emoji: '🚨',
    title: 'Incident Response & Digital Forensics',
    opening: 'WHEN THINGS GO WRONG, I FIND OUT WHAT HAPPENED',
    openingNote: 'Fast, thorough incident response minimizes damage and provides answers stakeholders need.',
    whatIInvestigate: [
      'Security breaches and unauthorized access',
      'Insider threat detection and analysis',
      'Data exfiltration incidents',
      'Compromised accounts and credentials',
      'Malware infections and persistent threats',
      'Policy violations and anomalous behavior',
    ],
    tools: [
      'Digital Forensics: EnCase, FTK, Cellebrite',
      'Network Analysis: Wireshark, tcpdump, Zeek',
      'Log Analysis: Splunk, ELK Stack, AWS CloudTrail',
      'Memory Forensics: Volatility',
      'Behavioral Analytics: Custom ML-based detection',
      'Evidence Preservation: Chain of custody procedures',
    ],
    trackRecord: [
      'Investigated 200+ security incidents at Amazon',
      '95% case closure rate within SLA',
      'Created 12 new insider threat detection rules',
      'Reduced incident response time by 66% through automation',
      'Built investigation methodology reducing new analyst onboarding by 50%',
      'Experience with incidents ranging from insider threats to external breaches',
    ],
  },
  {
    icon: Cloud,
    emoji: '☁️',
    title: 'Cloud Security & Infrastructure',
    opening: 'SECURE, SCALABLE CLOUD ARCHITECTURE',
    openingNote: 'Modern applications run in the cloud. I secure them from the ground up—network, compute, data, and identity.',
    platforms: [
      'AWS (Expert): IAM, VPC, Security Groups, GuardDuty, CloudTrail, KMS, etc.',
      'Microsoft Azure (Proficient): Azure AD, Security Center, Key Vault',
      'GCP (Familiar): IAM, Cloud Security Command Center',
      'Infrastructure as Code: Terraform (Expert), AWS CloudFormation, Ansible',
    ],
    whatISecure: [
      'Kubernetes clusters and container security',
      'CI/CD pipelines and software supply chain',
      'Data lakes and analytics infrastructure',
      'Serverless architectures (Lambda, API Gateway)',
      'Network segmentation and zero-trust networking',
      'Secrets management and encryption key lifecycle',
      'Cloud workload protection and runtime security',
    ],
    realProjects: [
      'Security analytics data lake processing 10TB+ daily events',
      'Cloud security posture management for 100,000+ applications',
      'Zero-trust architecture implementations',
      'Multi-cloud security strategy for enterprise migrations',
      'Secure Kubernetes deployments for microservices architectures',
    ],
  },
  {
    icon: FileText,
    emoji: '📋',
    title: 'Compliance & Risk Management',
    opening: 'COMPLIANCE THAT ENABLES BUSINESS, NOT BLOCKS IT',
    openingNote: 'Compliance requirements can be business enablers when done right. I help you achieve certification while improving actual security.',
    frameworks: [
      'SOC 2 (Type I and Type II)',
      'ISO 27001',
      'HIPAA (for healthcare applications)',
      'GDPR (data privacy requirements)',
      'NIST Cybersecurity Framework',
      'CMMC (for DoD contractors)',
      'PCI DSS (for payment processing)',
    ],
    services: [
      'Gap analysis against framework requirements',
      'Control implementation and documentation',
      'Security policy and procedure development',
      'Evidence collection and audit preparation',
      'Risk assessments and risk registers',
      'Vendor risk management programs',
      'Employee security awareness training',
    ],
    approach: [
      'Start with gap analysis to understand current state',
      'Prioritize controls by business impact and audit risk',
      'Implement controls that actually improve security (not just paperwork)',
      'Document thoroughly to make audits smooth',
      'Build compliance-as-code where possible for continuous compliance',
    ],
  },
];

const technologySummary = {
  languages: 'Python (Expert) - Security automation, data analysis, scripting\nJavaScript/Node.js (Proficient) - Backend services, Lambda functions\nBash (Expert) - System automation, DevOps\nSQL (Proficient) - Database security, query optimization\nJava (Familiar) - Enterprise application review\nC (Familiar) - Low-level security analysis',
  cloud: 'AWS (Expert) - Comprehensive security services\nMicrosoft Azure (Proficient)\nGoogle Cloud Platform (Familiar)\nDocker & Kubernetes\nTerraform, Ansible, CloudFormation\nVMware, Proxmox',
  securityTools: 'SIEM: Splunk, Elasticsearch, Kibana\nForensics: EnCase, FTK, Cellebrite\nNetwork: Wireshark, Zeek, Suricata\nVulnerability: Nessus, OpenVAS, Burp Suite\nCode Analysis: Semgrep, CodeQL, Bandit\nCloud Security: AWS Security Hub, GuardDuty',
  databases: 'PostgreSQL, MySQL\nElasticsearch\nAWS (S3, Athena, Redshift)\nApache Spark\nData pipeline design',
};

export default function SkillsPage() {
  return (
    <div className="min-h-screen pb-20" style={{ backgroundColor: 'var(--theme-bg)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16 text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--theme-text)] mb-4">
            Technical Expertise & Specializations
          </h1>
          <p className="text-lg text-[var(--theme-text-secondary)] max-w-3xl mx-auto">
            I&apos;ve spent 7+ years working across security engineering, from strategic frameworks to hands-on implementation. Here&apos;s what that experience means for your business.
          </p>
        </motion.div>

        {/* Skill Categories */}
        <div className="space-y-16 mb-20">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-[var(--theme-surface)] border border-[var(--theme-border)] rounded-lg p-8 md:p-10"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="text-4xl">{category.emoji}</div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 bg-[var(--theme-primary)]/20 rounded-lg">
                        <Icon size={24} className="text-[var(--theme-primary)]" />
                      </div>
                      <h2 className="text-3xl font-bold text-[var(--theme-text)]">
                        {category.title}
                      </h2>
                    </div>
                    <p className="text-sm font-semibold text-[var(--theme-primary)] mb-2">
                      {category.opening}
                    </p>
                    <p className="text-[var(--theme-text-secondary)]">
                      {category.openingNote}
                    </p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  {category.whatISecure && (
                    <div>
                      <h3 className="text-lg font-semibold text-[var(--theme-text)] mb-3">
                        What I Secure:
                      </h3>
                      <ul className="space-y-2">
                        {category.whatISecure.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <CheckCircle size={18} className="text-[var(--theme-primary)] mt-0.5 flex-shrink-0" />
                            <span className="text-[var(--theme-text-secondary)]">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {category.threats && (
                    <div>
                      <h3 className="text-lg font-semibold text-[var(--theme-text)] mb-3">
                        AI-Specific Threats I Defend Against:
                      </h3>
                      <ul className="space-y-2">
                        {category.threats.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <CheckCircle size={18} className="text-[var(--theme-primary)] mt-0.5 flex-shrink-0" />
                            <span className="text-[var(--theme-text-secondary)]">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {category.whatIBuild && (
                    <div>
                      <h3 className="text-lg font-semibold text-[var(--theme-text)] mb-3">
                        Authorization Models I Implement:
                      </h3>
                      <ul className="space-y-2 mb-4">
                        {category.whatIBuild.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <CheckCircle size={18} className="text-[var(--theme-primary)] mt-0.5 flex-shrink-0" />
                            <span className="text-[var(--theme-text-secondary)]">{item}</span>
                          </li>
                        ))}
                      </ul>
                      {category.perfectFor && (
                        <div className="bg-[var(--theme-bg)] border border-[var(--theme-border)] rounded-lg p-4 mt-4">
                          <p className="text-sm font-semibold text-[var(--theme-text)] mb-2">
                            Perfect For Complex Requirements:
                          </p>
                          <p className="text-sm text-[var(--theme-text-secondary)] italic mb-2">
                            &quot;{category.perfectFor}&quot;
                          </p>
                          <p className="text-xs text-[var(--theme-text-secondary)]">
                            → {category.perfectForNote}
                          </p>
                        </div>
                      )}
                    </div>
                  )}

                  {category.whatIAutomate && (
                    <div>
                      <h3 className="text-lg font-semibold text-[var(--theme-text)] mb-3">
                        Security Processes I Automate:
                      </h3>
                      <ul className="space-y-2">
                        {category.whatIAutomate.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <CheckCircle size={18} className="text-[var(--theme-primary)] mt-0.5 flex-shrink-0" />
                            <span className="text-[var(--theme-text-secondary)]">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {category.assessmentTypes && (
                    <div>
                      <h3 className="text-lg font-semibold text-[var(--theme-text)] mb-3">
                        Assessment Types:
                      </h3>
                      <ul className="space-y-2">
                        {category.assessmentTypes.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <CheckCircle size={18} className="text-[var(--theme-primary)] mt-0.5 flex-shrink-0" />
                            <span className="text-[var(--theme-text-secondary)]">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {category.whatIInvestigate && (
                    <div>
                      <h3 className="text-lg font-semibold text-[var(--theme-text)] mb-3">
                        What I Investigate:
                      </h3>
                      <ul className="space-y-2">
                        {category.whatIInvestigate.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <CheckCircle size={18} className="text-[var(--theme-primary)] mt-0.5 flex-shrink-0" />
                            <span className="text-[var(--theme-text-secondary)]">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {category.platforms && (
                    <div>
                      <h3 className="text-lg font-semibold text-[var(--theme-text)] mb-3">
                        Platform Expertise:
                      </h3>
                      <ul className="space-y-2">
                        {category.platforms.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <CheckCircle size={18} className="text-[var(--theme-primary)] mt-0.5 flex-shrink-0" />
                            <span className="text-[var(--theme-text-secondary)]">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {category.frameworks && (
                    <div>
                      <h3 className="text-lg font-semibold text-[var(--theme-text)] mb-3">
                        Frameworks I Work With:
                      </h3>
                      <ul className="space-y-2">
                        {category.frameworks.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <CheckCircle size={18} className="text-[var(--theme-primary)] mt-0.5 flex-shrink-0" />
                            <span className="text-[var(--theme-text-secondary)]">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Results/Experience sections */}
                  {category.experience && (
                    <div>
                      <h3 className="text-lg font-semibold text-[var(--theme-text)] mb-3">
                        Proven Experience:
                      </h3>
                      <ul className="space-y-2">
                        {category.experience.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <ArrowRight size={18} className="text-[var(--theme-primary)] mt-0.5 flex-shrink-0" />
                            <span className="text-[var(--theme-text-secondary)]">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {category.results && (
                    <div>
                      <h3 className="text-lg font-semibold text-[var(--theme-text)] mb-3">
                        Proven Results:
                      </h3>
                      <ul className="space-y-2">
                        {category.results.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <ArrowRight size={18} className="text-[var(--theme-primary)] mt-0.5 flex-shrink-0" />
                            <span className="text-[var(--theme-text-secondary)]">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {category.technologies && (
                    <div>
                      <h3 className="text-lg font-semibold text-[var(--theme-text)] mb-3">
                        Technologies:
                      </h3>
                      <p className="text-[var(--theme-text-secondary)]">
                        {category.technologies}
                      </p>
                    </div>
                  )}

                  {category.tools && (
                    <div>
                      <h3 className="text-lg font-semibold text-[var(--theme-text)] mb-3">
                        Tools & Approaches:
                      </h3>
                      <ul className="space-y-2">
                        {category.tools.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <CheckCircle size={18} className="text-[var(--theme-primary)] mt-0.5 flex-shrink-0" />
                            <span className="text-[var(--theme-text-secondary)]">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {category.techStack && (
                    <div>
                      <h3 className="text-lg font-semibold text-[var(--theme-text)] mb-3">
                        Technical Stack:
                      </h3>
                      <ul className="space-y-2">
                        {category.techStack.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <CheckCircle size={18} className="text-[var(--theme-primary)] mt-0.5 flex-shrink-0" />
                            <span className="text-[var(--theme-text-secondary)]">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {category.impact && (
                    <div>
                      <h3 className="text-lg font-semibold text-[var(--theme-text)] mb-3">
                        Impact From Real Projects:
                      </h3>
                      <ul className="space-y-2">
                        {category.impact.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <ArrowRight size={18} className="text-[var(--theme-primary)] mt-0.5 flex-shrink-0" />
                            <span className="text-[var(--theme-text-secondary)]">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {category.scale && (
                    <div>
                      <h3 className="text-lg font-semibold text-[var(--theme-text)] mb-3">
                        Experience at Scale:
                      </h3>
                      <ul className="space-y-2">
                        {category.scale.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <ArrowRight size={18} className="text-[var(--theme-primary)] mt-0.5 flex-shrink-0" />
                            <span className="text-[var(--theme-text-secondary)]">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {category.trackRecord && (
                    <div>
                      <h3 className="text-lg font-semibold text-[var(--theme-text)] mb-3">
                        Track Record:
                      </h3>
                      <ul className="space-y-2">
                        {category.trackRecord.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <ArrowRight size={18} className="text-[var(--theme-primary)] mt-0.5 flex-shrink-0" />
                            <span className="text-[var(--theme-text-secondary)]">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {category.whatISecure && category.title === 'Cloud Security & Infrastructure' && (
                    <div>
                      <h3 className="text-lg font-semibold text-[var(--theme-text)] mb-3">
                        Cloud Components I Secure:
                      </h3>
                      <ul className="space-y-2">
                        {category.whatISecure.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <CheckCircle size={18} className="text-[var(--theme-primary)] mt-0.5 flex-shrink-0" />
                            <span className="text-[var(--theme-text-secondary)]">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {category.realProjects && (
                    <div>
                      <h3 className="text-lg font-semibold text-[var(--theme-text)] mb-3">
                        Real-World Implementations:
                      </h3>
                      <ul className="space-y-2">
                        {category.realProjects.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <ArrowRight size={18} className="text-[var(--theme-primary)] mt-0.5 flex-shrink-0" />
                            <span className="text-[var(--theme-text-secondary)]">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {category.services && (
                    <div>
                      <h3 className="text-lg font-semibold text-[var(--theme-text)] mb-3">
                        Compliance Services:
                      </h3>
                      <ul className="space-y-2">
                        {category.services.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <CheckCircle size={18} className="text-[var(--theme-primary)] mt-0.5 flex-shrink-0" />
                            <span className="text-[var(--theme-text-secondary)]">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {category.approach && (
                    <div>
                      <h3 className="text-lg font-semibold text-[var(--theme-text)] mb-3">
                        How I Approach Compliance:
                      </h3>
                      <ul className="space-y-2">
                        {category.approach.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <ArrowRight size={18} className="text-[var(--theme-primary)] mt-0.5 flex-shrink-0" />
                            <span className="text-[var(--theme-text-secondary)]">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Technology Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-[var(--theme-surface)] border border-[var(--theme-border)] rounded-lg p-8 mb-12"
        >
          <h2 className="text-3xl font-bold text-[var(--theme-text)] mb-8 text-center">
            Technologies & Tools
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h3 className="font-semibold text-[var(--theme-text)] mb-3">Programming Languages:</h3>
              <p className="text-sm text-[var(--theme-text-secondary)] whitespace-pre-line">
                {technologySummary.languages}
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-[var(--theme-text)] mb-3">Cloud & Infrastructure:</h3>
              <p className="text-sm text-[var(--theme-text-secondary)] whitespace-pre-line">
                {technologySummary.cloud}
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-[var(--theme-text)] mb-3">Security Tools:</h3>
              <p className="text-sm text-[var(--theme-text-secondary)] whitespace-pre-line">
                {technologySummary.securityTools}
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-[var(--theme-text)] mb-3">Databases & Analytics:</h3>
              <p className="text-sm text-[var(--theme-text-secondary)] whitespace-pre-line">
                {technologySummary.databases}
              </p>
            </div>
          </div>
        </motion.div>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center bg-[var(--theme-surface)] border border-[var(--theme-primary)] rounded-lg p-12"
        >
          <h2 className="text-3xl font-bold text-[var(--theme-text)] mb-4">
            Put This Expertise to Work for Your Business
          </h2>
          <p className="text-lg text-[var(--theme-text-secondary)] mb-8 max-w-2xl mx-auto">
            Technical expertise means nothing if it doesn&apos;t solve real business problems. Whether you need security architecture, incident response, compliance preparation, or ongoing security support—let&apos;s discuss how my experience can help you.
          </p>
          <Link href="/contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-[var(--theme-primary)] text-white rounded-lg font-semibold hover:bg-[var(--theme-secondary)] transition-colors shadow-lg"
            >
              Discuss Your Security Needs
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
