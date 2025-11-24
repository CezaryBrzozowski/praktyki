import { describe, it, expect } from 'vitest';
import inputswitchPreset from './index.js';

describe('preset inputswitch', () => {
  it('powinien mieć klucz root', () => {
    expect(inputswitchPreset).toHaveProperty('root');
  });

  it('root powinien mieć odpowiednie klasy', () => {
    const result = inputswitchPreset.root({ props: {}, state: {} });
    expect(Array.isArray(result.class)).toBe(true);
    expect(result.class).toContain('inline-flex relative');
    expect(result.class).toContain('rounded-2xl');
    expect(result.class).toContain('h-5 w-9');
  });

  it('root powinien mieć klasy dla disabled', () => {
    const result = inputswitchPreset.root({ props: { disabled: true }, state: {} });
    const hasDisabled = result.class.some(
      c => typeof c === 'object' && c['opacity-60 select-none pointer-events-none cursor-default'] === true
    );
    expect(hasDisabled).toBe(true);
  });

  it('powinien mieć klucz slider', () => {
    const result = inputswitchPreset.slider({ props: {} });
    expect(Array.isArray(result.class)).toBe(true);
    expect(result.class).toContain('absolute top-0 left-0 right-0 bottom-0');
    expect(result.class).toContain('rounded-2xl');
  });
});
