import { describe, it, expect } from 'vitest';
import inputmaskPreset from './index.js';

describe('preset inputmask', () => {
  it('powinien mieć klucz root', () => {
    expect(inputmaskPreset).toHaveProperty('root');
  });

  it('root powinien mieć odpowiednie klasy', () => {
    const result = inputmaskPreset.root({ context: {} });
    expect(Array.isArray(result.class)).toBe(true);
    expect(result.class).toContain('font-sans leading-6');
    expect(result.class).toContain('rounded-md');
    expect(result.class).toContain('bg-surface-0 dark:bg-surface-900');
  });

  it('root powinien mieć klasy dla disabled', () => {
    const result = inputmaskPreset.root({ context: { disabled: true } });
    const disabledClass = result.class.find(c => typeof c === 'object');
    expect(disabledClass).toHaveProperty('opacity-60 select-none pointer-events-none cursor-default', true);
  });
});
