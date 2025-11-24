import { describe, it, expect } from 'vitest';
import avatargroupPreset from './index.js';

describe('preset grupy awatarów', () => {
  it('powinien mieć klucz root', () => {
    expect(avatargroupPreset).toHaveProperty('root');
  });

  it('root powinien mieć klasę flex i items-center', () => {
    expect(typeof avatargroupPreset.root.class).toBe('string');
    expect(avatargroupPreset.root.class).toContain('flex');
    expect(avatargroupPreset.root.class).toContain('items-center');
  });
});
