import { describe, it, expect } from 'vitest';
import inputgroupaddonPreset from './index.js';

describe('preset inputgroupaddon', () => {
  it('powinien mieć klucz root', () => {
    expect(inputgroupaddonPreset).toHaveProperty('root');
  });

  it('root powinien mieć odpowiednie klasy', () => {
    expect(Array.isArray(inputgroupaddonPreset.root.class)).toBe(true);
    expect(inputgroupaddonPreset.root.class).toContain('flex items-center justify-center');
    expect(inputgroupaddonPreset.root.class).toContain('first:rounded-l-md');
    expect(inputgroupaddonPreset.root.class).toContain('last:rounded-r-md');
    expect(inputgroupaddonPreset.root.class).toContain('bg-surface-50 dark:bg-surface-800');
  });
});
