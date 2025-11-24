import { describe, it, expect } from 'vitest';
import autocompletePreset from './index.js';

describe('preset autouzupełniania', () => {
  it('powinien mieć wszystkie wymagane klucze', () => {
    expect(autocompletePreset).toHaveProperty('root');
    expect(autocompletePreset).toHaveProperty('container');
    expect(autocompletePreset).toHaveProperty('inputtoken');
    expect(autocompletePreset).toHaveProperty('input');
    expect(autocompletePreset).toHaveProperty('token');
    expect(autocompletePreset).toHaveProperty('label');
    expect(autocompletePreset).toHaveProperty('removeTokenIcon');
    expect(autocompletePreset).toHaveProperty('dropdownbutton');
    expect(autocompletePreset).toHaveProperty('loadingicon');
    expect(autocompletePreset).toHaveProperty('panel');
    expect(autocompletePreset).toHaveProperty('list');
    expect(autocompletePreset).toHaveProperty('item');
    expect(autocompletePreset).toHaveProperty('itemgroup');
    expect(autocompletePreset).toHaveProperty('emptymessage');
    expect(autocompletePreset).toHaveProperty('transition');
  });

  it('root powinien zwracać poprawne klasy', () => {
    const result = autocompletePreset.root({ props: {} });
    expect(result.class).toContain('relative');
    expect(result.class).toContain('flex');
    expect(result.class).toContain('w-full');
    expect(result.class).toContain('text-surface-900 dark:text-surface-0');
  });

  it('container powinien zwracać poprawne klasy', () => {
    const result = autocompletePreset.container({ props: {}, state: {} });
    expect(result.class).toContain('font-sans sm:text-sm leading-none');
    expect(result.class).toContain('flex items-center flex-wrap');
    expect(result.class).toContain('w-full');
    // Szukamy fragmentu 'rounded-md' w dowolnym stringu w tablicy klas
    const hasRoundedMd = result.class.some(
      c => typeof c === 'string' && c.includes('rounded-md')
    );
    expect(hasRoundedMd).toBe(true);
  });

  it('inputtoken powinien zwracać poprawne klasy', () => {
    const result = autocompletePreset.inputtoken({ props: {} });
    expect(Array.isArray(result.class)).toBe(true);
  });

  it('input powinien zwracać poprawne klasy', () => {
    const result = autocompletePreset.input({ props: {} });
    expect(result.class).toContain('font-sans sm:text-sm leading-none');
    expect(result.class).toContain('appearance-none rounded-md');
    expect(result.class).toContain('w-full');
  });

  it('token, label, removeTokenIcon, loadingicon, panel, list, itemgroup, emptymessage powinny mieć klasy', () => {
    expect(typeof autocompletePreset.token.class).toBe('object');
    expect(typeof autocompletePreset.label.class).toBe('string');
    expect(typeof autocompletePreset.removeTokenIcon.class).toBe('object');
    expect(typeof autocompletePreset.loadingicon.class).toBe('object');
    expect(typeof autocompletePreset.panel.class).toBe('object');
    expect(typeof autocompletePreset.list.class).toBe('string');
    expect(typeof autocompletePreset.itemgroup.class).toBe('object');
    expect(typeof autocompletePreset.emptymessage.class).toBe('object');
  });

  it('dropdownbutton powinien mieć root z klasami', () => {
    expect(typeof autocompletePreset.dropdownbutton.root.class).toBe('object');
  });

  it('item powinien zwracać poprawne klasy', () => {
    const result = autocompletePreset.item({ context: {} });
    expect(Array.isArray(result.class)).toBe(true);
  });

  it('transition powinien mieć wszystkie wymagane klucze', () => {
    const t = autocompletePreset.transition;
    expect(t).toHaveProperty('enterFromClass');
    expect(t).toHaveProperty('enterActiveClass');
    expect(t).toHaveProperty('leaveActiveClass');
    expect(t).toHaveProperty('leaveToClass');
  });
});
