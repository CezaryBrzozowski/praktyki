import { describe, it, expect } from 'vitest';
import inputgroupPreset from './index.js';

describe('preset inputgroup', () => {
  it('powinien mieć klucz root', () => {
    expect(inputgroupPreset).toHaveProperty('root');
  });

  it('root powinien mieć odpowiednie klasy', () => {
    expect(Array.isArray(inputgroupPreset.root.class)).toBe(true);
    expect(inputgroupPreset.root.class).toContain('flex items-stretch');
    expect(inputgroupPreset.root.class).toContain('w-full');
  });
});
