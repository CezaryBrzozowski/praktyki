import { describe, it, expect } from 'vitest';
import inputtextPreset from './index.js';

describe('preset inputtext', () => {
  it('powinien mieć klucz root', () => {
    expect(inputtextPreset).toHaveProperty('root');
  });

  it('root powinien mieć odpowiednie klasy', () => {
    const result = inputtextPreset.root({ props: {}, context: {}, parent: { instance: {} } });
    expect(Array.isArray(result.class)).toBe(true);
    expect(result.class).toContain('font-sans leading-6');
    expect(result.class).toContain('text-surface-900 dark:text-surface-0');
    expect(result.class).toContain('bg-surface-0 dark:bg-surface-900');
  });

  it('root powinien mieć klasy dla disabled', () => {
    const result = inputtextPreset.root({ props: {}, context: { disabled: true }, parent: { instance: {} } });
    const hasDisabled = result.class.some(
      c => typeof c === 'object' && c['opacity-60 select-none pointer-events-none cursor-default'] === true
    );
    expect(hasDisabled).toBe(true);
  });

  it('root powinien mieć klasy dla size', () => {
    const large = inputtextPreset.root({ props: { size: 'large' }, context: {}, parent: { instance: {} } });
    const small = inputtextPreset.root({ props: { size: 'small' }, context: {}, parent: { instance: {} } });
    const normal = inputtextPreset.root({ props: {}, context: {}, parent: { instance: {} } });
    const hasLarge = large.class.some(c => typeof c === 'object' && c['py-3 px-4 text-lg sm:text-md']);
    const hasSmall = small.class.some(c => typeof c === 'object' && c['py-1 px-2 sm:text-sm']);
    const hasNormal = normal.class.some(c => typeof c === 'object' && c['py-1.5 px-3 sm:text-sm']);
    expect(hasLarge).toBe(true);
    expect(hasSmall).toBe(true);
    expect(hasNormal).toBe(true);
  });
});
