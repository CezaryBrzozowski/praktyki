import { describe, it, expect } from 'vitest';
import datatablePreset from './index.js';

describe('preset tabeli danych', () => {
  it('powinien mieć klucz root', () => {
    expect(datatablePreset).toHaveProperty('root');
  });

  it('root powinien zwracać poprawne klasy', () => {
    const result = datatablePreset.root({ props: {} });
    expect(Array.isArray(result.class)).toBe(true);
    expect(result.class).toContain('relative');
    expect(result.class).toContain('border-spacing-0 border-separate');
  });

  it('powinien mieć klucz loadingoverlay z odpowiednimi klasami', () => {
    expect(datatablePreset).toHaveProperty('loadingoverlay');
    expect(Array.isArray(datatablePreset.loadingoverlay.class)).toBe(true);
    expect(datatablePreset.loadingoverlay.class).toContain('absolute');
    expect(datatablePreset.loadingoverlay.class).toContain('flex items-center justify-center');
  });

  it('powinien mieć klucz loadingicon z klasą string', () => {
    expect(datatablePreset).toHaveProperty('loadingicon');
    expect(typeof datatablePreset.loadingicon.class).toBe('string');
    expect(datatablePreset.loadingicon.class).toContain('animate-spin');
  });

  it('powinien mieć klucz wrapper', () => {
    expect(datatablePreset).toHaveProperty('wrapper');
    const result = datatablePreset.wrapper({ props: {} });
    expect(Array.isArray(result.class)).toBe(true);
  });

  it('powinien mieć klucz table z klasą string', () => {
    expect(datatablePreset).toHaveProperty('table');
    expect(typeof datatablePreset.table.class).toBe('string');
    expect(datatablePreset.table.class).toContain('border-separate');
  });

  it('powinien mieć klucz transition z wymaganymi polami w column, jeśli istnieje', () => {
    if (datatablePreset.column && datatablePreset.column.transition) {
      const t = datatablePreset.column.transition;
      expect(t).toHaveProperty('enterFromClass');
      expect(t).toHaveProperty('enterActiveClass');
      expect(t).toHaveProperty('leaveActiveClass');
      expect(t).toHaveProperty('leaveToClass');
    } else {
      expect(true).toBe(true); // przechodzi jeśli nie ma transition
    }
  });
});
