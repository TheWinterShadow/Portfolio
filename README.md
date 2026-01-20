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

## 🧪 Testing

The project includes comprehensive testing with Jest and React Testing Library.

### Test Scripts

```bash
# Run all tests
npm test

# Run tests in watch mode during development
npm run test:watch

# Run tests with coverage report
npm run test:coverage

# Run tests in CI mode (for GitHub Actions)
npm run test:ci

# Debug tests
npm run test:debug

# Type checking
npm run type-check
```

### Test Coverage

The test suite covers:
- **Utility functions** - All helper functions with edge cases
- **React components** - Rendering, interactions, and accessibility
- **Data validation** - Project data integrity and consistency
- **Theme system** - Theme switching and CSS variable application
- **Responsive behavior** - Mobile and desktop layouts
- **User interactions** - Button clicks, form submissions, navigation

Current coverage targets:
- **Lines**: 70%+
- **Functions**: 70%+
- **Branches**: 70%+
- **Statements**: 70%+

### Test Structure

```
src/
├── components/
│   ├── __tests__/
│   │   ├── Hero.test.tsx
│   │   └── ProjectCard.test.tsx
│   └── Hero.tsx
├── lib/
│   ├── __tests__/
│   │   ├── utils.test.ts
│   │   └── themes.test.ts
│   └── utils.ts
└── data/
    ├── __tests__/
    │   └── projects.test.ts
    └── projects.ts
```

### Writing Tests

Example component test:
```typescript
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import MyComponent from '../MyComponent';

describe('MyComponent', () => {
  test('renders correctly', () => {
    render(<MyComponent />);
    expect(screen.getByText('Hello World')).toBeInTheDocument();
  });

  test('handles user interactions', async () => {
    const user = userEvent.setup();
    render(<MyComponent />);

    await user.click(screen.getByRole('button'));
    expect(screen.getByText('Clicked!')).toBeInTheDocument();
  });
});
```

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
- **Testing**: Jest + React Testing Library
- **CI/CD**: GitHub Actions (Build → Lint → Test → Deploy)
- **Deployment**: GitHub Pages + GitHub Actions

## 🔄 CI/CD Pipeline

The project uses a comprehensive GitHub Actions workflow:

1. **Lint** - ESLint + TypeScript type checking
2. **Test** - Jest with coverage reporting
3. **Build** - Next.js production build with verification
4. **Deploy** - Automatic deployment to GitHub Pages

### Workflow Files

- `.github/workflows/ci.yml` - Main CI pipeline
- `.github/workflows/build.yml` - Build verification
- `.github/workflows/lint.yml` - Code quality checks
- `.github/workflows/test.yml` - Test execution
- `.github/workflows/deploy.yml` - Deployment automation

All workflows run on push to `main` and pull requests, ensuring code quality before deployment.

## � Documentation

The codebase follows comprehensive documentation standards:

### JSDoc Standards

All functions, components, and modules include detailed JSDoc documentation:

```typescript
/**
 * Brief function description
 *
 * Detailed explanation of what the function does, why it exists,
 * and how it fits into the larger system.
 *
 * @param param1 - Description of parameter
 * @param param2 - Description of parameter
 * @returns Description of return value
 *
 * @example
 * ```typescript
 * const result = myFunction('example', 123);
 * ```
 */
export function myFunction(param1: string, param2: number): string {
  // Implementation
}
```

### Documentation Coverage

- **Components** - Full JSDoc with props, behavior, examples
- **Utilities** - Function documentation with parameters and examples
- **Data** - Type definitions and validation rules
- **Types** - Interface and type documentation
- **Workflows** - Inline comments explaining CI/CD steps

### File Headers

All files include standardized headers:

```typescript
/**
 * Brief file description
 *
 * @fileoverview Detailed explanation of file purpose and contents
 * @author The Winter Shadow
 * @since 1.0.0
 */
```

## �📊 Performance

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

## 🐛 Troubleshooting

### Build Issues

**Fonts not loading during build:**
The project uses Google Fonts loaded via HTML `<link>` tags instead of `next/font/google` for better offline build compatibility. This ensures builds complete successfully even in restricted network environments.

**404 errors on GitHub Pages:**
- Ensure `.nojekyll` file is present in the `public` directory (it will be copied to `out` during build)
- Verify `basePath` and `assetPrefix` in `next.config.js` match your repository name
- Check that GitHub Pages is configured to deploy from GitHub Actions

**Build fails with network errors:**
If you see errors about downloading stylesheets or fonts, this is expected in restricted environments. The build will complete successfully and fonts will load at runtime in the browser.

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
