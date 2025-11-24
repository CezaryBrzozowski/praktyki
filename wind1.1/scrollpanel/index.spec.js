import { describe, it, expect } from 'vitest';
import preset from './index.js';

describe('scrollpanel preset', () => {
  it('exports object with expected top-level keys and class arrays', () => {
    expect(typeof preset).toBe('object');

    ['wrapper', 'content', 'barX', 'barY'].forEach((key) => {
      expect(preset[key]).toBeDefined();
      expect(Array.isArray(preset[key].class)).toBe(true);
    });
  });

  it('contains specific class strings in arrays', () => {
    // Exact entry checks
    expect(preset.wrapper.class).toContain('h-full w-full');

    // Partial content checks
    expect(preset.content.class.some((c) => c.includes('overflow-scroll'))).toBe(true);
    expect(preset.barX.class.some((c) => c.includes('h-[6px]'))).toBe(true);
    expect(preset.barY.class.some((c) => c.includes('w-[6px]'))).toBe(true);
  });
});
