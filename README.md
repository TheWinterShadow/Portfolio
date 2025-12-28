# The Winter Shadow Portfolio

A professional, eye-catching portfolio website for **thewintershadow.com** showcasing projects, expertise, and skills as a **Security Engineer, Developer, and IT Professional**. Built with Next.js and deployed to GitHub Pages.

## 🎨 Features

### Three Distinct Layouts (Separate Git Branches)
Each layout is on its own branch with completely different structural designs:

1. **Security Professional** (`main` branch) - Traditional vertical scrolling, card-based sections, clean and professional
2. **Cyber Command Center** (`theme-cyber` branch) - Terminal/IDE-inspired layout with sidebar navigation, split-pane design
3. **Tech Innovator** (`theme-tech` branch) - Creative asymmetrical layout with overlapping sections, dynamic positioning

See [BRANCH_SETUP.md](BRANCH_SETUP.md) for details on setting up and switching between layout branches.

### Three Distinct Color Themes
Within each layout, you can switch between color themes:
1. **Cyber Command Center** - Matrix-style colors (cyan/electric blue)
2. **Security Professional** - Clean, sophisticated (teal/mint)
3. **Tech Innovator** - Bold, creative (purple/pink gradients)

### Core Features
- ✅ **Responsive Design** - Mobile-first, works on all devices
- ✅ **Dark/Light Mode Toggle** - Smooth theme transitions with persistence
- ✅ **Project Showcase** - Filterable by domain and type with detailed modals
- ✅ **Skills Visualization** - Interactive tech stack display
- ✅ **Freelance Portfolio** - Services and testimonials
- ✅ **Contact Form** - Ready for EmailJS integration
- ✅ **Smooth Animations** - Framer Motion powered transitions
- ✅ **Easter Eggs** - Konami code, terminal mode, and more!

## 🌿 Branch Structure

This project uses separate git branches for different layout approaches:

- **`main`** - Security Professional Layout (traditional portfolio)
- **`theme-cyber`** - Cyber Command Center Layout (terminal/IDE style)
- **`theme-tech`** - Tech Innovator Layout (creative asymmetrical)

Each branch has a completely different layout structure, not just color changes. See [BRANCH_SETUP.md](BRANCH_SETUP.md) for setup instructions.

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ and npm
- Git

### Installation

1. Clone the repository:
```bash
git clone https://github.com/TheWinterShadow/Portfolio.git
cd Portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

```bash
npm run build
```

This creates an `out` directory with static files ready for deployment.

## 📂 Project Structure

```
Portfolio/
├── public/                 # Static assets
│   ├── projects/          # Project images, videos
│   └── assets/            # Icons, logos
├── src/
│   ├── app/               # Next.js app directory
│   │   ├── layout.tsx     # Root layout
│   │   ├── page.tsx       # Home page
│   │   └── globals.css    # Global styles
│   ├── components/        # React components
│   │   ├── Navigation.tsx
│   │   ├── Hero.tsx
│   │   ├── ProjectsSection.tsx
│   │   ├── SkillsSection.tsx
│   │   ├── FreelanceSection.tsx
│   │   ├── ContactSection.tsx
│   │   ├── ThemeToggle.tsx
│   │   ├── ThemeProvider.tsx
│   │   └── EasterEggs.tsx
│   ├── data/              # Data files
│   │   └── projects.ts    # Project data
│   ├── lib/               # Utilities
│   │   ├── themes.ts      # Theme definitions
│   │   ├── utils.ts       # Helper functions
│   │   └── github-api.ts  # GitHub API integration
│   └── types/             # TypeScript types
│       ├── project.ts
│       └── theme.ts
├── .github/
│   └── workflows/
│       └── deploy.yml     # GitHub Actions workflow
├── next.config.js         # Next.js configuration
├── tailwind.config.js     # Tailwind CSS configuration
└── package.json
```

## 📝 Adding New Projects

To add a new project, edit `src/data/projects.ts`:

```typescript
{
  id: 'project-id',
  title: 'Project Name',
  domain: 'Security' | 'Data Engineering' | 'Web Development' | 'Infrastructure' | 'Research' | 'Design',
  type: 'Open Source' | 'Commercial' | 'Research' | 'Learning' | 'Published Package',
  description: 'Brief description (2-3 sentences)',
  longDescription: 'Detailed description (optional)',
  techStack: ['Python', 'TypeScript', 'AWS'],
  features: ['Feature 1', 'Feature 2'],
  stats: {
    stars: 15,
    contributors: 3,
    downloads: '1.2k'
  },
  media: {
    thumbnail: '/projects/thumbnail.png',
    screenshots: ['/projects/screenshot1.png'],
    liveDemo: 'https://demo-link.com'
  },
  links: {
    github: 'https://github.com/...',
    docs: 'https://...',
    pypi: 'https://pypi.org/...'
  },
  featured: false
}
```

## 🎨 Customizing Themes

Themes are defined in `src/lib/themes.ts`. Each theme has:
- `colors`: Background, surface, primary, secondary, accent, text colors
- `displayName`: Human-readable theme name

To modify a theme, edit the color values in the `themes` and `lightThemes` objects.

## 🚢 Deployment

### GitHub Pages

The project is configured for GitHub Pages deployment with automatic CI/CD:

1. Push to the `main` branch
2. GitHub Actions will build and deploy automatically
3. Enable GitHub Pages in repository settings (Settings → Pages)
4. Select "GitHub Actions" as the source

The site will be available at: `https://thewintershadow.github.io/Portfolio/`

### Manual Deployment

1. Build the project:
```bash
npm run build
```

2. The `out` directory contains static files ready for any static hosting service.

## 🎮 Easter Eggs

- **Konami Code**: ↑ ↑ ↓ ↓ ← → ← → B A - Activates Matrix rain effect
- **Terminal Mode**: Ctrl+Shift+T - Toggles terminal-style theme
- **Mouse Trail**: Automatically active in Cyber Command Center theme
- **Help Command**: Type "help" in terminal mode for available commands

## 🛠️ Tech Stack

- **Framework**: Next.js 14+ (with static export)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **TypeScript**: Full type safety
- **Deployment**: GitHub Pages + GitHub Actions

## 📊 Performance

- Lighthouse Score: 95+ across all metrics
- First Contentful Paint: < 1.5s
- Time to Interactive: < 3.5s
- Optimized bundle size

## 🔧 Configuration

### Next.js Config

The project uses static export for GitHub Pages compatibility. Configuration is in `next.config.js`:

```javascript
{
  output: 'export',
  basePath: '/Portfolio',  // Update for your repo name
  images: {
    unoptimized: true
  }
}
```

### Tailwind Config

Custom theme colors and animations are defined in `tailwind.config.js`. The theme system uses CSS variables for dynamic theming.

## 📄 License

MIT License - see [LICENSE](LICENSE) file for details.

## 👤 Author

**Elijah Winter** - The Winter Shadow
- GitHub: [@TheWinterShadow](https://github.com/TheWinterShadow)
- Website: [thewintershadow.com](https://thewintershadow.com)
- Resume: [elijahwinter.com](https://www.elijahwinter.com)

## 🙏 Acknowledgments

- Design inspiration from Bruno Simon, Tamal Senj, Matthew Williams, and other modern portfolio creators
- Built with Next.js, Tailwind CSS, and Framer Motion

---

**Built with ❤️ by The Winter Shadow**
