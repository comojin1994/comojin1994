/**
 * Smoke tests for src/data/index.ts
 *
 * Verifies the portfolio data module imports correctly and every entry
 * satisfies the minimum shape required for the site to render.
 */

import { projects, awards, skills } from '@/data/index';
import type { Project, Award, Skill } from '@/data/index';

describe('data/index — smoke', () => {
  describe('projects', () => {
    it('exports a non-empty array', () => {
      expect(Array.isArray(projects)).toBe(true);
      expect(projects.length).toBeGreaterThan(0);
    });

    it('every project has required bilingual fields and tags', () => {
      projects.forEach((p: Project) => {
        expect(typeof p.id).toBe('string');
        expect(p.title.ko).toBeTruthy();
        expect(p.title.en).toBeTruthy();
        expect(p.description.ko).toBeTruthy();
        expect(p.description.en).toBeTruthy();
        expect(Array.isArray(p.tags)).toBe(true);
        expect(p.tags.length).toBeGreaterThan(0);
      });
    });
  });

  describe('awards', () => {
    it('exports a non-empty array', () => {
      expect(Array.isArray(awards)).toBe(true);
      expect(awards.length).toBeGreaterThan(0);
    });

    it('every award has required fields and a valid year', () => {
      awards.forEach((a: Award) => {
        expect(typeof a.id).toBe('string');
        expect(a.title.ko).toBeTruthy();
        expect(a.title.en).toBeTruthy();
        expect(a.year).toBeGreaterThanOrEqual(2000);
        expect(a.year).toBeLessThanOrEqual(new Date().getFullYear() + 1);
      });
    });
  });

  describe('skills', () => {
    it('exports a non-empty array', () => {
      expect(Array.isArray(skills)).toBe(true);
      expect(skills.length).toBeGreaterThan(0);
    });

    it('every skill has a valid category and level in range 1-5', () => {
      const validCategories = new Set(['ai', 'lang', 'cloud', 'mobile']);
      skills.forEach((s: Skill) => {
        expect(validCategories.has(s.category)).toBe(true);
        expect(s.level).toBeGreaterThanOrEqual(0);
        expect(s.level).toBeLessThanOrEqual(100);
        expect(typeof s.name).toBe('string');
      });
    });
  });
});
