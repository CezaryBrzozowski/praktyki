import { describe, it, expect } from 'vitest';
import menuPreset from './index.js';

describe('preset menu', () => {
  it('powinien mieć klucz root', () => {
    expect(menuPreset).toHaveProperty('root');
  });

  it('root powinien mieć odpowiednie klasy', () => {
    expect(Array.isArray(menuPreset.root.class)).toBe(true);
    expect(menuPreset.root.class).toContain('min-w-[18rem]');
    expect(menuPreset.root.class).toContain('rounded-md');
    expect(menuPreset.root.class).toContain('bg-surface-0 dark:bg-surface-700');
  });

  it('powinien mieć klucz menu, menuitem, action, icon, label, submenuheader', () => {
    expect(menuPreset).toHaveProperty('menu');
    expect(menuPreset).toHaveProperty('menuitem');
    expect(menuPreset).toHaveProperty('action');
    expect(menuPreset).toHaveProperty('icon');
    expect(menuPreset).toHaveProperty('label');
    expect(menuPreset).toHaveProperty('submenuheader');
  });

  it('content powinien zwracać poprawne klasy', () => {
    const result = menuPreset.content({ context: {} });
    expect(Array.isArray(result.class)).toBe(true);
    expect(result.class).toContain('rounded-md');
    expect(result.class).toContain('transition-shadow');
  });

  it('powinien mieć klucz transition z wymaganymi polami', () => {
    expect(menuPreset).toHaveProperty('transition');
    const t = menuPreset.transition;
    expect(t).toHaveProperty('enterFromClass');
    expect(t).toHaveProperty('enterActiveClass');
    expect(t).toHaveProperty('leaveActiveClass');
    expect(t).toHaveProperty('leaveToClass');
  });
});
