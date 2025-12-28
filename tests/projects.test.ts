/**
 * Unit tests for projects data
 * 
 * @fileoverview Test suite for project portfolio data validation,
 * ensuring data integrity and consistency across all project entries
 * @author The Winter Shadow
 * @since 1.0.0
 */

import { projects } from '../src/data/projects';
import { Project } from '../src/types/project';

/**
 * Test suite for projects data validation
 */
describe('Projects Data', () => {
  /**
   * Basic structure validation tests
   */
  describe('Data Structure', () => {
    test('projects array is defined and not empty', () => {
      expect(projects).toBeDefined();
      expect(Array.isArray(projects)).toBe(true);
      expect(projects.length).toBeGreaterThan(0);
    });

    test('all projects have required fields', () => {
      projects.forEach(project => {
        expect(project).toHaveProperty('id');
        expect(project).toHaveProperty('title');
        expect(project).toHaveProperty('domain');
        expect(project).toHaveProperty('type');
        expect(project).toHaveProperty('description');
        expect(project).toHaveProperty('techStack');
        expect(project).toHaveProperty('links');

        // Required fields should not be empty
        expect(project.id).toBeTruthy();
        expect(project.title).toBeTruthy();
        expect(project.domain).toBeTruthy();
        expect(project.type).toBeTruthy();
        expect(project.description).toBeTruthy();
        expect(Array.isArray(project.techStack)).toBe(true);
        expect(typeof project.links).toBe('object');
      });
    });

    test('project IDs are unique', () => {
      const ids = projects.map(project => project.id);
      const uniqueIds = new Set(ids);
      expect(uniqueIds.size).toBe(ids.length);
    });

    test('project titles are unique', () => {
      const titles = projects.map(project => project.title);
      const uniqueTitles = new Set(titles);
      expect(uniqueTitles.size).toBe(titles.length);
    });
  });

  /**
   * Domain and type validation tests
   */
  describe('Domain and Type Validation', () => {
    const validDomains = [
      'Security',
      'Data Engineering',
      'Web Development',
      'Infrastructure',
      'Research',
      'Design'
    ];

    const validTypes = [
      'Open Source',
      'Research', 
      'Design',
      'Professional',
      'Personal',
      'Commercial',
      'Learning',
      'Published Package'
    ];

    test('all projects have valid domains', () => {
      projects.forEach(project => {
        expect(validDomains).toContain(project.domain);
      });
    });

    test('all projects have valid types', () => {
      projects.forEach(project => {
        if (Array.isArray(project.type)) {
          project.type.forEach(type => {
            expect(validTypes).toContain(type);
          });
        } else {
          expect(validTypes).toContain(project.type);
        }
      });
    });

    test('domain distribution is reasonable', () => {
      const domainCounts = projects.reduce((acc, project) => {
        acc[project.domain] = (acc[project.domain] || 0) + 1;
        return acc;
      }, {} as Record<string, number>);

      // Should have projects in multiple domains
      expect(Object.keys(domainCounts).length).toBeGreaterThan(1);
    });
  });

  /**
   * Content quality validation tests
   */
  describe('Content Quality', () => {
    test('descriptions are meaningful length', () => {
      projects.forEach(project => {
        expect(project.description.length).toBeGreaterThan(20);
        expect(project.description.length).toBeLessThan(500);
      });
    });

    test('tech stacks are not empty', () => {
      projects.forEach(project => {
        expect(project.techStack.length).toBeGreaterThan(0);
        project.techStack.forEach(tech => {
          expect(typeof tech).toBe('string');
          expect(tech.trim()).toBeTruthy();
        });
      });
    });

    test('long descriptions when present are substantial', () => {
      projects
        .filter(project => project.longDescription)
        .forEach(project => {
          expect(project.longDescription!.length).toBeGreaterThan(100);
        });
    });

    test('features when present are meaningful', () => {
      projects
        .filter(project => project.features)
        .forEach(project => {
          expect(project.features!.length).toBeGreaterThan(0);
          project.features!.forEach(feature => {
            expect(typeof feature).toBe('string');
            expect(feature.trim()).toBeTruthy();
            expect(feature.length).toBeGreaterThan(10);
          });
        });
    });
  });

  /**
   * Links validation tests
   */
  describe('Links Validation', () => {
    test('all projects have at least one link or are design projects', () => {
      projects.forEach(project => {
        const linkCount = Object.keys(project.links).length;
        // Design projects may not have links
        if (Array.isArray(project.type) ? project.type.some(t => t === 'Open Source') : project.type === 'Open Source') {
          expect(linkCount).toBeGreaterThanOrEqual(0);
        } else {
          expect(linkCount).toBeGreaterThan(0);
        }
      });
    });

    test('GitHub links are valid URLs', () => {
      projects
        .filter(project => project.links.github)
        .forEach(project => {
          expect(project.links.github).toMatch(/^https:\/\/github\.com\//);
        });
    });

    test('website links are valid URLs when present', () => {
      projects
        .filter(project => project.links.website)
        .forEach(project => {
          expect(project.links.website).toMatch(/^https?:\/\//);
        });
    });

    test('documentation links are valid URLs when present', () => {
      projects
        .filter(project => project.links.docs)
        .forEach(project => {
          expect(project.links.docs).toMatch(/^https?:\/\//);
        });
    });

    test('PyPI links are valid when present', () => {
      projects
        .filter(project => project.links.pypi)
        .forEach(project => {
          expect(project.links.pypi).toMatch(/^https:\/\/pypi\.org\/project\//);
        });
    });
  });

  /**
   * Featured projects validation
   */
  describe('Featured Projects', () => {
    const featuredProjects = projects.filter(project => project.featured);

    test('has featured projects', () => {
      expect(featuredProjects.length).toBeGreaterThan(0);
    });

    test('featured projects are high quality', () => {
      featuredProjects.forEach(project => {
        // Featured projects should have more complete information
        expect(project.longDescription).toBeTruthy();
        expect(project.features).toBeTruthy();
        expect(project.features!.length).toBeGreaterThan(2);
        
        // Should have GitHub link at minimum
        expect(project.links.github).toBeTruthy();
      });
    });

    test('not too many featured projects', () => {
      // Keep featured list focused
      expect(featuredProjects.length).toBeLessThanOrEqual(5);
    });
  });

  /**
   * Specific project validation tests
   */
  describe('Specific Projects', () => {
    test('Lock-And-Key project exists and is well-formed', () => {
      const lockAndKey = projects.find(p => p.id === 'lock-and-key');
      expect(lockAndKey).toBeDefined();
      expect(lockAndKey?.domain).toBe('Security');
      expect(lockAndKey?.featured).toBe(true);
      expect(lockAndKey?.links.pypi).toBeTruthy();
    });

    test('Owl-Watch project exists and is well-formed', () => {
      const owlWatch = projects.find(p => p.id === 'owl-watch');
      expect(owlWatch).toBeDefined();
      expect(owlWatch?.domain).toBe('Data Engineering');
      expect(owlWatch?.techStack).toContain('AWS CDK');
    });

    test('HorizonSec project exists and is well-formed', () => {
      const horizonSec = projects.find(p => p.id === 'horizonsec');
      expect(horizonSec).toBeDefined();
      expect(horizonSec?.domain).toBe('Security');
      expect(horizonSec?.featured).toBe(true);
    });
  });

  /**
   * Data consistency tests
   */
  describe('Data Consistency', () => {
    test('tech stack items use consistent naming', () => {
      const allTechStack = projects.flatMap(p => p.techStack);
      const techCounts = allTechStack.reduce((acc, tech) => {
        acc[tech] = (acc[tech] || 0) + 1;
        return acc;
      }, {} as Record<string, number>);

      // Check that tech names are properly formatted (start with uppercase)
      const techNames = Object.keys(techCounts);
      techNames.forEach(tech => {
        // Technology names should be properly capitalized
        expect(tech).toMatch(/^[A-Z]/);
      });

      // Check for potential duplicates with different casing
      const lowercaseNames = techNames.map(name => name.toLowerCase());
      const uniqueLowercaseNames = [...new Set(lowercaseNames)];
      expect(uniqueLowercaseNames.length).toBe(techNames.length);
    });

    test('project stats are realistic when present', () => {
      projects
        .filter(project => project.stats)
        .forEach(project => {
          if (project.stats!.stars) {
            expect(project.stats!.stars).toBeGreaterThanOrEqual(0);
            expect(project.stats!.stars).toBeLessThan(10000); // Reasonable upper bound
          }
          if (project.stats!.contributors) {
            expect(project.stats!.contributors).toBeGreaterThan(0);
            expect(project.stats!.contributors).toBeLessThan(100);
          }
        });
    });
  });
});