import { describe, it, expect } from 'vitest';
import chipsPreset from './index.js';

describe('preset chipsów', () => {
  it('powinien mieć wszystkie wymagane klucze', () => {
    expect(chipsPreset).toHaveProperty('root');
    expect(chipsPreset).toHaveProperty('container');
    expect(chipsPreset).toHaveProperty('inputtoken');
    expect(chipsPreset).toHaveProperty('input');
    expect(chipsPreset).toHaveProperty('token');
    expect(chipsPreset).toHaveProperty('label');
    expect(chipsPreset).toHaveProperty('removeTokenIcon');
  });

  it('root powinien zwracać poprawne klasy', () => {
    const result = chipsPreset.root({ props: {} });
    expect(Array.isArray(result.class)).toBe(true);
    expect(result.class).toContain('flex');
  });

  it('container powinien zwracać poprawne klasy', () => {
    const result = chipsPreset.container({ state: {} });
    expect(result.class).toContain('font-sans sm:text-sm leading-none');
    expect(result.class).toContain('flex items-center flex-wrap gap-1');
    expect(result.class).toContain('w-full');
    // Szukamy fragmentu 'rounded-md' w dowolnym stringu w tablicy klas
    const hasRoundedMd = result.class.some(
      c => typeof c === 'string' && c.includes('rounded-md')
    );
    expect(hasRoundedMd).toBe(true);
  });

  it('inputtoken, input, token, label, removeTokenIcon powinny mieć klasy', () => {
    expect(typeof chipsPreset.inputtoken.class).toBe('object');
    expect(typeof chipsPreset.input.class).toBe('object');
    expect(typeof chipsPreset.token.class).toBe('object');
    expect(typeof chipsPreset.label.class).toBe('string');
    expect(typeof chipsPreset.removeTokenIcon.class).toBe('object');
  });
});
