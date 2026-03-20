/**
 * Smoke tests for src/lib/animations.ts
 *
 * Verifies animation constants import correctly and have the shape
 * that Framer Motion expects (hidden / visible states).
 */

import {
  DURATION,
  EASE,
  fadeInUp,
  fadeInLeft,
  fadeInRight,
  scaleIn,
  staggerContainer,
  viewportConfig,
} from '@/lib/animations';

describe('lib/animations — smoke', () => {
  it('DURATION values are positive numbers', () => {
    expect(DURATION.fast).toBeGreaterThan(0);
    expect(DURATION.normal).toBeGreaterThan(0);
    expect(DURATION.slow).toBeGreaterThan(0);
    expect(DURATION.verySlow).toBeGreaterThan(0);
  });

  it.each([['fadeInUp', fadeInUp], ['fadeInLeft', fadeInLeft], ['fadeInRight', fadeInRight], ['scaleIn', scaleIn]])(
    '%s has hidden and visible states',
    (_name, variant) => {
      expect(variant).toHaveProperty('hidden');
      expect(variant).toHaveProperty('visible');
      expect((variant.hidden as { opacity: number }).opacity).toBe(0);
      expect((variant.visible as { opacity: number }).opacity).toBe(1);
    }
  );

  it('staggerContainer returns correct shape with defaults', () => {
    const result = staggerContainer();
    expect(result.hidden.opacity).toBe(0);
    expect(result.visible.opacity).toBe(1);
    expect((result.visible.transition as { staggerChildren: number }).staggerChildren).toBe(0.1);
  });

  it('staggerContainer accepts custom stagger and delay', () => {
    const result = staggerContainer(0.2, 0.5);
    expect((result.visible.transition as { staggerChildren: number; delayChildren: number }).staggerChildren).toBe(0.2);
    expect((result.visible.transition as { staggerChildren: number; delayChildren: number }).delayChildren).toBe(0.5);
  });

  it('viewportConfig has once:true', () => {
    expect(viewportConfig.once).toBe(true);
  });
});
