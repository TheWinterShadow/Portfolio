/**
 * External link registry for The Winter Shadow Portfolio
 *
 * @fileoverview Single source of truth for outbound links used across the
 * nav, footer, hero, and contact components, so URLs only need updating
 * in one place.
 * @author The Winter Shadow
 * @since 1.0.0
 */

/** Core external links */
export const links = {
  github: 'https://github.com/TheWinterShadow',
  linkedin: 'https://www.linkedin.com/in/eliwinter/',
  email: 'contact@thewintershadow.com',
  /** Freelance/business site - primary conversion destination */
  freelance: 'https://securebywinter.com/',
  /** Online resume */
  resume: 'https://www.elijahwinter.com/',
};

/**
 * A client site designed and built, shown in the "Sites I've Designed" section
 */
export interface DesignedSite {
  name: string;
  url: string;
  description: string;
}

/**
 * Live sites designed and built, separate from the open-source projects
 * catalogued in `src/data/projects.ts`
 */
export const designedSites: DesignedSite[] = [
  {
    name: 'The Shadow Dungeon',
    url: 'https://theshadowdungeon.com/',
    description: 'Custom-built site design and development.',
  },
  {
    name: 'Jaqobis',
    url: 'http://jaqobis.com/',
    description: 'Custom-built site design and development.',
  },
  {
    name: 'HorizonSec',
    url: 'https://horizonsec.org/',
    description: 'Organization site for the HorizonSec open-source security project.',
  },
];
