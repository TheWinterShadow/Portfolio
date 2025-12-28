# Contributing to The Winter Shadow Portfolio

Thank you for your interest in contributing! This document provides guidelines for contributing to the portfolio project.

## Development Setup

1. Fork the repository
2. Clone your fork: `git clone https://github.com/your-username/Portfolio.git`
3. Install dependencies: `npm install`
4. Create a new branch: `git checkout -b feature/your-feature-name`
5. Make your changes
6. Test locally: `npm run dev`
7. Build to verify: `npm run build`
8. Commit and push your changes
9. Open a Pull Request

## Code Style

- Use TypeScript for all new files
- Follow the existing code structure and patterns
- Use functional components with hooks
- Keep components focused and reusable
- Add comments for complex logic

## Adding Projects

To add a new project:

1. Edit `src/data/projects.ts`
2. Add your project following the existing structure
3. Include all relevant links, descriptions, and tech stack
4. Test that it appears correctly in the projects section

## Theme Customization

Themes are defined in `src/lib/themes.ts`. When adding or modifying themes:

- Maintain both dark and light variants
- Ensure sufficient color contrast for accessibility
- Test across all sections of the site

## Testing

Before submitting a PR:

- [ ] Code builds without errors (`npm run build`)
- [ ] No TypeScript errors
- [ ] No linting errors (`npm run lint`)
- [ ] Tested on mobile and desktop
- [ ] All links work correctly
- [ ] Theme switching works properly

## Pull Request Process

1. Update the README if needed
2. Ensure your code follows the project's style
3. Write clear commit messages
4. Reference any related issues
5. Wait for review and feedback

## Questions?

Feel free to open an issue for questions or suggestions!

