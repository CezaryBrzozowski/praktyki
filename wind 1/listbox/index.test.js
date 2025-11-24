import { describe, it, expect } from 'vitest';
import listboxPreset from './index.js';

describe('preset listbox', () => {
  it('powinien mieć klucz root', () => {
    expect(listboxPreset).toHaveProperty('root');
  });

  it('root powinien mieć odpowiednie klasy', () => {
    expect(Array.isArray(listboxPreset.root.class)).toBe(true);
    expect(listboxPreset.root.class).toContain('min-w-[12rem]');
    expect(listboxPreset.root.class).toContain('rounded-md');
    expect(listboxPreset.root.class).toContain('bg-surface-0 dark:bg-surface-700');
  });

  it('powinien mieć klucz wrapper, list, itemgroup, header, filtercontainer, filterinput, filtericon, emptymessage', () => {
    expect(listboxPreset).toHaveProperty('wrapper');
    expect(listboxPreset).toHaveProperty('list');
    expect(listboxPreset).toHaveProperty('itemgroup');
    expect(listboxPreset).toHaveProperty('header');
    expect(listboxPreset).toHaveProperty('filtercontainer');
    expect(listboxPreset).toHaveProperty('filterinput');
    expect(listboxPreset).toHaveProperty('filtericon');
    expect(listboxPreset).toHaveProperty('emptymessage');
  });

  it('item powinien zwracać poprawne klasy', () => {
    const result = listboxPreset.item({ context: {} });
    expect(Array.isArray(result.class)).toBe(true);
    expect(result.class).toContain('sm:text-sm');
    expect(result.class).toContain('py-2 px-4');
  });
});
