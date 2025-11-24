import { describe, it, expect } from 'vitest';
import dialogPreset from './index.js';

describe('preset dialogu', () => {
  it('powinien mieć klucz root', () => {
    expect(dialogPreset).toHaveProperty('root');
  });

  it('root powinien zwracać poprawne klasy', () => {
    const result = dialogPreset.root({ state: {} });
    expect(Array.isArray(result.class)).toBe(true);
    expect(result.class).toContain('rounded-lg');
    expect(result.class).toContain('shadow-xl');
    expect(result.class).toContain('border-0');
  });

  it('powinien mieć klucz header z odpowiednimi klasami', () => {
    expect(dialogPreset).toHaveProperty('header');
    expect(Array.isArray(dialogPreset.header.class)).toBe(true);
    expect(dialogPreset.header.class).toContain('flex items-center justify-between');
    expect(dialogPreset.header.class).toContain('rounded-tl-lg');
  });

  it('powinien mieć klucz title, icons, closeButton, maximizablebutton', () => {
    expect(dialogPreset).toHaveProperty('title');
    expect(dialogPreset).toHaveProperty('icons');
    expect(dialogPreset).toHaveProperty('closeButton');
    expect(dialogPreset).toHaveProperty('maximizablebutton');
  });

  it('powinien mieć klucz content', () => {
    const result = dialogPreset.content({ state: {}, instance: { $slots: {} } });
    expect(Array.isArray(result.class)).toBe(true);
    expect(result.class).toContain('max-h-dialog');
    expect(result.class).toContain('text-sm');
  });

  it('powinien mieć klucz footer z odpowiednimi klasami', () => {
    expect(dialogPreset).toHaveProperty('footer');
    expect(Array.isArray(dialogPreset.footer.class)).toBe(true);
    expect(dialogPreset.footer.class).toContain('flex items-center justify-end');
    expect(dialogPreset.footer.class).toContain('rounded-b-lg');
  });

  it('powinien mieć klucz mask', () => {
    const result = dialogPreset.mask({ props: {}, state: {} });
    expect(Array.isArray(result.class)).toBe(true);
    expect(result.class).toContain('transition');
  });

  it('powinien mieć klucz transition jako funkcję', () => {
    expect(dialogPreset).toHaveProperty('transition');
    expect(typeof dialogPreset.transition).toBe('function');
    const t = dialogPreset.transition({ props: {} });
    expect(t).toHaveProperty('enterFromClass');
    expect(t).toHaveProperty('enterActiveClass');
    expect(t).toHaveProperty('leaveActiveClass');
    expect(t).toHaveProperty('leaveToClass');
  });
});
