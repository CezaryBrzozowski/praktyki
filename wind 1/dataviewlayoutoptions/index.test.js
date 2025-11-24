import { describe, it, expect } from 'vitest';
import dataviewlayoutoptionsPreset from './index.js';

describe('preset opcji widoku danych', () => {
  it('powinien mieć klucze listbutton i gridbutton', () => {
    expect(dataviewlayoutoptionsPreset).toHaveProperty('listbutton');
    expect(dataviewlayoutoptionsPreset).toHaveProperty('gridbutton');
  });

  it('listbutton powinien zwracać poprawne klasy', () => {
    const result = dataviewlayoutoptionsPreset.listbutton({ props: { modelValue: 'list' } });
    expect(Array.isArray(result.class)).toBe(true);
    expect(result.class).toContain('leading-none');
    expect(result.class).toContain('rounded-md rounded-r-none');
    expect(result.class).toContain('px-2.5 py-1.5');
    expect(result.class).toContain('bg-surface-100 dark:bg-surface-700 text-surface-700 dark:text-surface-0');
  });

  it('gridbutton powinien zwracać poprawne klasy', () => {
    const result = dataviewlayoutoptionsPreset.gridbutton({ props: { modelValue: 'grid' } });
    expect(Array.isArray(result.class)).toBe(true);
    expect(result.class).toContain('leading-none');
    expect(result.class).toContain('rounded-md rounded-l-none');
    expect(result.class).toContain('px-2.5 py-1.5');
    expect(result.class).toContain('bg-surface-100 dark:bg-surface-700 text-surface-700 dark:text-surface-0');
  });
});
