import { Project } from '@/types/project';

export const projects: Project[] = [
  {
    id: 'owl-watch',
    title: 'Owl-Watch',
    domain: 'Data Engineering',
    type: 'Open Source',
    description: 'AWS-native data engineering pipeline using Glue, Bedrock, and ML for ingesting, processing, and curating data with PySpark ETL jobs.',
    longDescription: 'Owl-Watch is a comprehensive data engineering solution built on AWS infrastructure. It leverages AWS Glue for ETL processing, Amazon Bedrock for ML-powered data curation, and PySpark for scalable data transformations. The pipeline is designed to handle large-scale data ingestion and processing workflows with built-in monitoring and error handling.',
    techStack: ['Python', 'TypeScript', 'AWS CDK', 'PySpark', 'AWS Glue', 'Bedrock'],
    features: [
      'Automated ETL pipeline orchestration',
      'ML-powered data curation with Bedrock',
      'Scalable PySpark transformations',
      'Infrastructure as Code with CDK',
    ],
    links: {
      github: 'https://github.com/TheWinterShadow/Owl-Watch',
    },
  },
  {
    id: 'lock-and-key',
    title: 'Lock-And-Key',
    domain: 'Security',
    type: ['Open Source', 'Published Package'],
    description: 'Multi-cloud security scanner analyzing IAM and resource-based policies to identify vulnerabilities and excessive permissions across AWS, Azure, and GCP.',
    longDescription: 'Lock-And-Key is a comprehensive security scanning tool that performs deep analysis of IAM policies and resource permissions across major cloud providers. It identifies privilege escalation risks, wildcard permissions, and violations of least privilege principles. The tool provides actionable security insights with detailed reporting and remediation recommendations.',
    techStack: ['Python', 'AWS SDK', 'Azure SDK', 'GCP SDK', 'Interactive CLI'],
    features: [
      'Multi-cloud IAM policy analysis',
      'Privilege escalation detection',
      'Wildcard permission identification',
      'Least privilege violation reporting',
      'Interactive CLI with detailed reports',
    ],
    links: {
      github: 'https://github.com/TheWinterShadow/Lock-And-Key',
      docs: 'https://thewintershadow.github.io/Lock-And-Key/',
      pypi: 'https://pypi.org/project/lock-and-key/',
    },
    featured: true,
  },
  {
    id: 'horizonsec',
    title: 'HorizonSec Project',
    domain: 'Security',
    type: 'Open Source',
    description: 'Modular security toolkit integrating directly into developer workflows with GAIA (orchestration), DEMETER (infrastructure scanning), HADES (endpoint security), and ARTEMIS (static analysis).',
    longDescription: 'HorizonSec is an open-source security organization focused on building modular security tools that integrate seamlessly into developer workflows. The project includes multiple specialized tools: GAIA for security orchestration, DEMETER for infrastructure scanning, HADES for endpoint security monitoring, and ARTEMIS for static code analysis. Together, these tools provide comprehensive security coverage throughout the development lifecycle.',
    techStack: ['Python', 'TypeScript', 'Security Tools', 'CI/CD Integration'],
    features: [
      'Modular security toolkit architecture',
      'Developer workflow integration',
      'Multi-tool orchestration',
      'Comprehensive security coverage',
    ],
    links: {
      github: 'https://github.com/HorizonSec',
      website: 'https://github.com/HorizonSec/horizon-website',
    },
    featured: true,
  },
  {
    id: 'the-data-packet',
    title: 'The-Data-Packet',
    domain: 'Research',
    type: 'Research',
    description: 'Research project exploring data processing and analysis techniques.',
    techStack: ['Python', 'Data Analysis'],
    links: {
      github: 'https://github.com/TheWinterShadow/The-Data-Packet',
    },
  },
  {
    id: 'thought-smith',
    title: 'thought-smith',
    domain: 'Web Development',
    type: 'Open Source',
    description: 'Web development project showcasing modern frontend techniques and best practices.',
    techStack: ['TypeScript', 'React', 'Next.js'],
    links: {
      github: 'https://github.com/TheWinterShadow/thought-smith',
    },
  },
  {
    id: 'the-deployment-forge',
    title: 'The-Deployment-Forge',
    domain: 'Infrastructure',
    type: 'Open Source',
    description: 'Infrastructure automation and deployment tooling for modern cloud environments.',
    techStack: ['Python', 'Infrastructure as Code', 'CI/CD'],
    links: {
      github: 'https://github.com/TheWinterShadow/The-Deployment-Forge',
    },
  },
  {
    id: 'whomping-willow',
    title: 'Whomping-Willow',
    domain: 'Web Development',
    type: 'Open Source',
    description: 'Web development project with modern UI/UX patterns.',
    techStack: ['JavaScript', 'React'],
    links: {
      github: 'https://github.com/TheWinterShadow/Whomping-Willow',
    },
  },
  {
    id: 'hogwarts',
    title: 'Hogwarts',
    domain: 'Web Development',
    type: 'Open Source',
    description: 'Web development project demonstrating full-stack capabilities.',
    techStack: ['TypeScript', 'React', 'Node.js'],
    links: {
      github: 'https://github.com/TheWinterShadow/Hogwarts',
    },
  },
  {
    id: 'netsecure',
    title: 'NetSecure',
    domain: 'Design',
    type: 'Design',
    description: 'Security-focused design concept showcasing modern UI/UX for security applications.',
    techStack: ['Design', 'UI/UX'],
    media: {
      thumbnail: 'https://www.elijahwinter.com/img/netsecure.png',
    },
    links: {},
  },
];

