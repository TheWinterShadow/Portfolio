/**
 * Project portfolio data for The Winter Shadow Portfolio
 *
 * @fileoverview Centralized repository of all portfolio projects with detailed metadata,
 * links, and categorization. Used throughout the application for project displays.
 * @author The Winter Shadow
 * @since 1.0.0
 */

import { ProjectType, Project, ProjectDomain } from '@/types/project';

/**
 * Helper function to create a project with sensible defaults
 * Makes it easy to add new projects with minimal boilerplate
 *
 * @example
 * ```typescript
 * createProject({
 *   id: 'my-project',
 *   title: 'My Project',
 *   domain: 'Web Development',
 *   description: 'A cool project',
 *   techStack: ['React', 'TypeScript'],
 *   github: 'https://github.com/user/repo'
 * })
 * ```
 */
function createProject({
  id,
  title,
  domain,
  type = 'Open Source',
  description,
  longDescription,
  techStack,
  features,
  github,
  docs,
  website,
  pypi,
  article,
  bugReport,
  featured = false,
  media,
  stats,
}: {
  id: string;
  title: string;
  domain: ProjectDomain;
  type?: ProjectType | ProjectType[];
  description: string;
  longDescription?: string;
  techStack: string[];
  features?: string[];
  github?: string;
  docs?: string;
  website?: string;
  pypi?: string;
  article?: string;
  bugReport?: string;
  featured?: boolean;
  media?: Project['media'];
  stats?: Project['stats'];
}): Project {
  return {
    id,
    title,
    domain,
    type,
    description,
    longDescription,
    techStack,
    features,
    links: {
      ...(github && { github }),
      ...(docs && { docs }),
      ...(website && { website }),
      ...(pypi && { pypi }),
      ...(article && { article }),
      ...(bugReport && { bugReport }),
    },
    featured,
    ...(media && { media }),
    ...(stats && { stats }),
  };
}

/**
 * Complete portfolio of projects
 *
 * Comprehensive collection of all projects across different domains including
 * security, data engineering, web development, infrastructure, and research.
 * Each project includes detailed metadata for rich presentation and filtering.
 *
 * Project domains:
 * - Security: IAM scanners, security tools, vulnerability assessment
 * - Data Engineering: ETL pipelines, data processing, analytics
 * - Web Development: Frontend applications, frameworks, user interfaces
 * - Infrastructure: DevOps, automation, deployment tools
 * - Research: Experimental projects, proof of concepts, studies
 * - Design: UI/UX, graphics, visual design work
 *
 * @example
 * ```typescript
 * // Get all security projects
 * const securityProjects = projects.filter(p => p.domain === 'Security');
 *
 * // Get featured projects
 * const featured = projects.filter(p => p.featured);
 *
 * // Find project by ID
 * const project = projects.find(p => p.id === 'lock-and-key');
 * ```
 */
export const projects: Project[] = [
  createProject({
    id: 'owl-watch',
    title: 'Owl-Watch',
    domain: 'Data Engineering',
    description: 'AWS-native data engineering pipeline using Glue, Bedrock, and ML for ingesting, processing, and curating data with PySpark ETL jobs.',
    longDescription: 'Owl-Watch is a comprehensive data engineering solution built on AWS infrastructure. It leverages AWS Glue for ETL processing, Amazon Bedrock for ML-powered data curation, and PySpark for scalable data transformations. The pipeline is designed to handle large-scale data ingestion and processing workflows with built-in monitoring and error handling.',
    techStack: ['Python', 'TypeScript', 'AWS CDK', 'PySpark', 'AWS Glue', 'Bedrock'],
    features: [
      'Automated ETL pipeline orchestration',
      'ML-powered data curation with Bedrock',
      'Scalable PySpark transformations',
      'Infrastructure as Code with CDK',
    ],
    github: 'https://github.com/TheWinterShadow/Owl-Watch',
    docs: 'https://owl-watch.thewintershadow.com',
  }),
  createProject({
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
    github: 'https://github.com/TheWinterShadow/Lock-And-Key',
    docs: 'https://lock-and-key.thewintershadow.com',
    pypi: 'https://pypi.org/project/lock-and-key/',
    featured: true,
  }),
  createProject({
    id: 'horizonsec',
    title: 'HorizonSec Project',
    domain: 'Security',
    description: 'Modular security toolkit integrating directly into developer workflows with GAIA (orchestration), DEMETER (infrastructure scanning), HADES (endpoint security), and ARTEMIS (static analysis).',
    longDescription: 'HorizonSec is an open-source security organization focused on building modular security tools that integrate seamlessly into developer workflows. The project includes multiple specialized tools: GAIA for security orchestration, DEMETER for infrastructure scanning, HADES for endpoint security monitoring, and ARTEMIS for static code analysis. Together, these tools provide comprehensive security coverage throughout the development lifecycle.',
    techStack: ['Python', 'TypeScript', 'Security Tools', 'CI/CD Integration'],
    features: [
      'Modular security toolkit architecture',
      'Developer workflow integration',
      'Multi-tool orchestration',
      'Comprehensive security coverage',
    ],
    github: 'https://github.com/HorizonSec',
    featured: true,
    docs: 'https://horizonsec.org',
  }),
  createProject({
    id: 'the-data-packet',
    title: 'The-Data-Packet',
    domain: 'Data Engineering',
    description: 'AI-powered automated podcast generation system that transforms tech news articles into professional, multi-speaker podcast episodes using Claude and ElevenLabs.',
    longDescription: 'The Data Packet is an end-to-end automated podcast pipeline that scrapes technology news articles, generates natural dialogue scripts via Anthropic Claude, synthesizes multi-speaker audio with ElevenLabs TTS, and packages everything as distributable podcast episodes with RSS feeds. Built with a Docker-first architecture, MongoDB for episode tracking and deduplication, and AWS S3 for hosting.',
    techStack: ['Python', 'Anthropic Claude', 'ElevenLabs', 'MongoDB', 'AWS S3', 'Docker'],
    features: [
      'Intelligent article scraping across multiple tech categories',
      'AI-powered script generation for natural conversation flow',
      'Multi-speaker audio synthesis with professional voices',
      'RSS feed generation for podcast distribution',
      'Docker-first architecture with CI/CD pipeline',
    ],
    github: 'https://github.com/TheWinterShadow/The-Data-Packet',
    docs: 'https://the-data-packet.thewintershadow.com',
  }),
  createProject({
    id: 'thought-smith',
    title: 'Thought Smith',
    domain: 'Web Development',
    description: 'AI-powered journaling app that transforms conversations with AI assistants into structured journal entries, with multi-model support and voice capabilities.',
    longDescription: 'Thought Smith is an AI-powered journaling application that converts journaling into an interactive experience. Users can have conversations with AI assistants from OpenAI, Google Gemini, or Anthropic Claude, which the system then transforms into formatted journal entries in Markdown. The app features voice capabilities with speech-to-text and text-to-speech, export functionality, and a privacy-first architecture where data stays local and API calls go directly to user-selected providers via personal API keys.',
    techStack: ['Kotlin', 'Jetpack Compose', 'Swift', 'SwiftUI', 'OpenAI', 'Gemini', 'Claude'],
    features: [
      'Multiple AI model support (GPT-4o, Gemini 1.5 Pro, Claude)',
      'Integrated speech-to-text and text-to-speech',
      'Export journal entries as Markdown files',
      'Privacy-first: data stays local with direct API calls',
      'Native Android and iOS implementations',
    ],
    github: 'https://github.com/TheWinterShadow/thought-smith',
    bugReport: 'https://github.com/TheWinterShadow/thought-smith/issues/new?template=bug_report.yml',
    featured: true,
    docs: 'https://thought-smith.thewintershadow.com',
  }),
  createProject({
    id: 'thoth',
    title: 'Thoth',
    domain: 'Infrastructure',
    description: 'MCP server enabling semantic search over documentation repositories, powered by LanceDB vector embeddings and deployable to Google Cloud Run.',
    longDescription: 'Thoth is an MCP (Model Context Protocol) server that integrates with Claude AI to provide semantic search capabilities over documentation repositories. It features a parallel ingestion pipeline that clones and tracks repositories, generates embeddings with sentence-transformers, and stores them in LanceDB with Google Cloud Storage persistence. Designed for cloud deployment on Google Cloud Run with Terraform-managed infrastructure.',
    techStack: ['Python', 'LanceDB', 'Sentence-Transformers', 'Google Cloud', 'Terraform', 'Cloud Run'],
    features: [
      'Semantic search over documentation with vector embeddings',
      'MCP server for AI assistant integration',
      'Parallel ingestion pipeline with batch processing',
      'Google Cloud Storage persistence for vector DB',
      'Cloud Run deployment with Terraform IaC',
    ],
    github: 'https://github.com/TheWinterShadow/Thoth',
    docs: 'https://thoth.thewintershadow.com',
  }),
  createProject({
    id: 'whomping-willow',
    title: 'Whomping-Willow',
    domain: 'Research',
    type: 'Research',
    description: 'Python package that simplifies Latent Dirichlet Allocation (LDA) topic modeling workflows with a modular API for data preparation, model building, and visualization.',
    longDescription: 'Whomping-Willow is a Python package designed to streamline LDA topic modeling. It provides a clean API for preparing text data, generating Bag of Words representations with Gensim dictionaries, constructing LDA models, and visualizing results interactively with PyLDAVis.',
    techStack: ['Python', 'Gensim', 'PyLDAVis', 'NLP'],
    features: [
      'Text data preparation and cleaning for LDA analysis',
      'Bag of Words and Gensim Dictionary generation',
      'LDA model construction',
      'Interactive topic visualization with PyLDAVis',
    ],
    github: 'https://github.com/TheWinterShadow/Whomping-Willow',
    docs: 'https://whomping-willow.thewintershadow.com',
  }),
  createProject({
    id: 'ghost-brain',
    title: 'Ghost Brain',
    domain: 'Research',
    type: 'Open Source',
    description: 'A real-time voice AI virtual assistant that helps take notes, flesh out ideas, and document them through natural conversation.',
    longDescription: 'Ghost Brain is a real-time voice AI virtual assistant built with FastAPI and Pipecat. Designed to help users brainstorm and document ideas naturally, it orchestrates a high-performance voice pipeline using Deepgram for speech-to-text, Llama-3.3-70B on Groq for ultra-low latency inference, and OpenAI for text-to-speech. The system features a decoupled cloud-native architecture that runs on Google Cloud Run and uses Anthropic Claude 3.5 Sonnet to intelligently format post-call transcripts into detailed notes.',
    techStack: ['Python', 'FastAPI', 'Pipecat', 'Deepgram', 'Groq', 'OpenAI TTS', 'Cloud Run'],
    features: [
      'Real-time voice brainstorming assistant with ultra-low latency',
      'Phone integration via Twilio and local microphone testing',
      'Decoupled architecture for zero-latency degradation',
      'Intelligent post-call transcript summarization into formatted notes with Claude 3.5 Sonnet'
    ],
    github: 'https://github.com/TheWinterShadow/ghostbrain',
    featured: true,
    docs: 'https://ghost-brain.thewintershadow.com',
  }),
  createProject({
    id: 'obsidian-palace',
    title: 'Obsidian Palace',
    domain: 'Infrastructure',
    description: 'MCP server that gives AI clients (Claude Desktop, Claude Code, claude.ai, OpenCode, OpenAI, Cursor, Gemini) full read/write/search access to your Obsidian vault, self-hosted on GCE with Google OAuth 2.1.',
    longDescription: 'ObsidianPalace bridges your Obsidian vault with AI via the Model Context Protocol. It runs as a single Docker container on a GCE instance (~$15/mo) and exposes five MCP tools: semantic search, note reading, note writing with AI-assisted file placement, and vault browsing. The stack combines FastAPI with the MCP SDK for SSE transport, MemPalace (ChromaDB) for vector search, obsidian-headless for bidirectional vault sync, and Google OAuth 2.0 for authentication. Infrastructure is managed with Terraform and deployed via GitHub Actions CI/CD.',
    techStack: ['Python', 'FastAPI', 'MemPalace', 'ChromaDB', 'Google OAuth', 'Terraform', 'Docker', 'GCE'],
    features: [
      'Semantic search across vault using natural language via MemPalace/ChromaDB',
      'Full read/write access to Obsidian notes over MCP',
      'AI-assisted file placement using Claude to decide where new notes belong',
      'Bidirectional vault sync via obsidian-headless CLI',
      'Google OAuth 2.1 authentication for secure remote access',
      'Self-hostable on GCE with Terraform IaC (~$15/mo)',
    ],
    github: 'https://github.com/TheWinterShadow/ObsidianPalace',
    docs: 'https://obsidian-palace.thewintershadow.com',
    featured: true,
  }),
  createProject({
    id: 'the-curator',
    title: 'The Curator',
    domain: 'Infrastructure',
    type: 'Open Source',
    description: 'MCP server that generates AI-powered podcasts on any topic — Gemini writes the script, Vertex AI TTS voices it, and the episode lands in GCS.',
    longDescription: 'The Curator is a FastMCP server that exposes two tools to any MCP-compatible client (Claude Desktop, Cursor, Zed): create_podcast_transcript generates a natural multi-turn dialogue between hosts Annabelle and Link using Google Gemini, complete with inline emotion tags and pacing cues that shape the audio output. create_podcast_episode synthesizes that transcript into a .wav audio file using Vertex AI TTS with distinct voices per host, then uploads the finished episode to Google Cloud Storage. Authentication is handled via MCP 2.1 OAuth with Google as the identity provider — single-user by design, with OAuth state persisted to GCS so Cloud Run restarts and scale-to-zero events never invalidate active sessions. All infrastructure is managed with Terraform and deployed to Cloud Run via GitHub Actions.',
    techStack: ['Python', 'FastMCP', 'Google Gemini', 'Vertex AI TTS', 'Google OAuth', 'Cloud Run', 'GCS', 'Terraform'],
    features: [
      'Generates natural podcast transcripts on any topic using Google Gemini with emotion and pacing tags',
      'Multi-speaker audio synthesis via Vertex AI TTS with distinct voices per host (Kore, Puck)',
      'MCP 2.1 OAuth with Google — single-user, GCS-persisted session state across Cloud Run restarts',
      'Episodes stored in GCS and returned as object paths — no inline audio payloads over SSE',
      'Full infrastructure as code with Terraform — Cloud Run, GCS buckets, Secret Manager, IAM',
    ],
    github: 'https://github.com/TheWinterShadow/The-Curator',
    docs: 'https://the-curator.thewintershadow.com',
    featured: true,
  }),
  createProject({
    id: 'hermes',
    title: 'Hermes',
    domain: 'Infrastructure',
    description: 'Privacy-centric macOS transcription tool that captures and transcribes meeting audio entirely on-device using WhisperKit, with no cloud services or telemetry.',
    longDescription: 'Hermes is a native macOS application that provides real-time transcription for video calls (Zoom, Google Meet, Teams, FaceTime) while keeping all audio and transcripts local. It simultaneously captures system audio and microphone input, differentiates speakers as "Me" vs "Them" without ML identification, and runs transcription on-device with WhisperKit\'s large-v3 model. The interface is a floating overlay that collapses to a pill icon, activatable via a global hotkey. Transcripts are stored locally with SwiftData and can be exported as Markdown.',
    techStack: ['Swift', 'SwiftUI', 'WhisperKit', 'Core Audio', 'AVAudioEngine', 'SwiftData'],
    features: [
      'On-device transcription with WhisperKit large-v3 — zero network calls',
      'Simultaneous system audio and microphone capture',
      'Automatic speaker differentiation without ML identification',
      'Floating overlay UI that collapses to a pill icon',
      'Global hotkey activation (Cmd+Shift+R)',
      'Local transcript history and Markdown export via SwiftData',
    ],
    github: 'https://github.com/TheWinterShadow/Hermes',
    docs: 'https://hermes.thewintershadow.com',
    featured: true,
  }),
  createProject({
    id: 'janus-coin',
    title: 'Janus Coin',
    domain: 'Web Development',
    description: 'Browser-based Multi-Criteria Decision Analysis (MCDA) tool for structured decision-making — compare options across weighted criteria and export results as Markdown reports.',
    longDescription: 'Janus Coin is a fully client-side MCDA tool that solves a specific failure mode: structured thinking that collapses under complexity. A side-by-side spreadsheet works for two options and three criteria; it breaks down at five options and eight with unequal weights. Janus Coin gives you a weighted decision matrix where rows are criteria (with High/Medium/Low priority weights) and columns are subjects (the options under comparison). Fill in evaluation text per cell, color-code sentiment, mark per-criterion winners, then switch to the Results view for a weighted tally. When ready, declare a final winner and export the full comparison as a Markdown file with YAML frontmatter — directly importable into Obsidian. Import from CSV or Markdown table is also supported. The original spec included a FastAPI backend on GCP Cloud Run; the weighted math and Markdown generation turned out to be trivial enough to run entirely in the browser, so the current implementation ships as a zero-backend static app on GitHub Pages.',
    techStack: ['React', 'TypeScript', 'Vite', 'Zustand', 'Tailwind CSS'],
    features: [
      'Weighted decision matrix with High/Medium/Low criterion priorities',
      'Per-cell color coding (Positive, Neutral, Caution, Negative, Notable, Alt)',
      'Per-criterion winner tracking feeding into weighted results tally',
      'Markdown export with YAML frontmatter for Obsidian compatibility',
      'CSV and Markdown table import',
      'Fully client-side — no backend, no data leaves the browser',
    ],
    github: 'https://github.com/TheWinterShadow/Janus-Coin',
    website: 'https://janus-coin.thewintershadow.com',
  }),
  createProject({
    id: 'hogwarts',
    title: 'Hogwarts',
    domain: 'Web Development',
    description: 'Personal dashboard application aggregating real-time data including local weather, news, IP geolocation, and daily quotes into a single interface.',
    longDescription: 'Hogwarts is a personalized information hub that consolidates multiple data sources into one accessible dashboard. It features IP geolocation conversion, local weather information, local news updates, and daily quotes. Planned expansions include Reddit integration, Spotify daily recommendations, multi-app notifications, and GitLab commit history.',
    techStack: ['HTML', 'CSS', 'JavaScript'],
    features: [
      'IP geolocation and coordinate conversion',
      'Local weather information display',
      'Local news aggregation',
      'Daily quote of the day',
      'Modular add-on architecture',
    ],
    github: 'https://github.com/TheWinterShadow/Hogwarts',
    docs: 'https://hogwarts.thewintershadow.com',
  }),
];
