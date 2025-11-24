import { describe, it, expect } from 'vitest';
import menubarPreset from './index.js';

describe('preset menubar', () => {
  it('powinien mieć klucz root', () => {
    expect(menubarPreset).toHaveProperty('root');
  });

  it('root powinien mieć odpowiednie klasy', () => {
    expect(Array.isArray(menubarPreset.root.class)).toBe(true);
    expect(menubarPreset.root.class).toContain('relative');
    expect(menubarPreset.root.class).toContain('flex');
    expect(menubarPreset.root.class).toContain('rounded-md');
  });

  it('powinien mieć klucz menu, menuitem, content, action, icon, submenuicon, submenu, separator, button, end', () => {
    expect(menubarPreset).toHaveProperty('menu');
    expect(menubarPreset).toHaveProperty('menuitem');
    expect(menubarPreset).toHaveProperty('content');
    expect(menubarPreset).toHaveProperty('action');
    expect(menubarPreset).toHaveProperty('icon');
    expect(menubarPreset).toHaveProperty('submenuicon');
    expect(menubarPreset).toHaveProperty('submenu');
    expect(menubarPreset).toHaveProperty('separator');
    expect(menubarPreset).toHaveProperty('button');
    expect(menubarPreset).toHaveProperty('end');
  });

  it('content powinien zwracać poprawne klasy', () => {
    const result = menubarPreset.content({ props: {}, context: {} });
    expect(Array.isArray(result.class)).toBe(true);
    expect(result.class).toContain('transition-all');
    expect(result.class).toContain('duration-200');
  });
});
