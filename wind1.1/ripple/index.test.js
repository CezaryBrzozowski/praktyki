import { describe, it, expect } from 'vitest';
import ripplePreset from './index.js';

describe('Ripple Preset', () => {
  it('should export a default object with root property', () => {
    expect(ripplePreset).toBeDefined();
    expect(ripplePreset.root).toBeDefined();
  });

  it('should have correct class array in root', () => {
    expect(Array.isArray(ripplePreset.root.class)).toBe(true);
    expect(ripplePreset.root.class.length).toBeGreaterThan(0);
  });

  it('should contain correct CSS classes', () => {
    const classes = ripplePreset.root.class[0].split(' ');
    expect(classes).toContain('block');
    expect(classes).toContain('absolute');
    expect(classes).toContain('bg-surface-0/50');
    expect(classes).toContain('rounded-full');
    expect(classes).toContain('pointer-events-none');
  });

  it('should have correct initial scale style', () => {
    expect(ripplePreset.root.style).toBe('transform: scale(0)');
  });

  it('should have exactly one element in class array', () => {
    expect(ripplePreset.root.class.length).toBe(1);
  });

  it('should have matching structure', () => {
    expect(ripplePreset).toEqual({
      root: {
        class: ['block absolute bg-surface-0/50 rounded-full pointer-events-none'],
        style: 'transform: scale(0)'
      }
    });
  });
});
