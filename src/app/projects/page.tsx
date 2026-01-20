/**
 * Projects Page - Redirect Handler
 *
 * @fileoverview A redirect page that forwards users from /projects to the home page.
 * All projects are displayed on the main page, so this route simply redirects.
 *
 * @description This page exists to handle legacy routes or direct navigation to /projects.
 * It immediately redirects to the home page where the full project showcase is displayed.
 *
 * @author The Winter Shadow
 * @since 1.0.0
 */

'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

/**
 * ProjectsPage Component
 *
 * Handles the /projects route by redirecting to the home page.
 * Uses client-side navigation for a smooth redirect experience.
 *
 * @returns null - Renders nothing as it immediately redirects
 *
 * @example
 * ```tsx
 * // Automatically handles /projects route
 * // Redirects to '/' on mount
 * ```
 */
export default function ProjectsPage() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to home since all projects are shown there
    router.push('/');
  }, [router]);

  return null;
}
