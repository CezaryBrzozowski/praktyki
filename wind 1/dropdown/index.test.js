import { describe, it, expect } from 'vitest';
import dropdownPreset from './index.js';

describe('preset dropdown', () => {
  it('powinien mieć klucz root', () => {
    expect(dropdownPreset).toHaveProperty('root');
  });

  it('root powinien zwracać poprawne klasy', () => {
    const result = dropdownPreset.root({ props: {}, state: {} });
    expect(Array.isArray(result.class)).toBe(true);
    expect(result.class).toContain('inline-flex');
    expect(result.class).toContain('relative');
    expect(result.class).toContain('rounded-md');
  });

  it('powinien mieć klucz input', () => {
    const result = dropdownPreset.input({ props: {} });
    expect(Array.isArray(result.class)).toBe(true);
    expect(result.class).toContain('font-sans');
    expect(result.class).toContain('rounded-none');
  });

  it('powinien mieć klucz trigger z odpowiednimi klasami', () => {
    expect(dropdownPreset).toHaveProperty('trigger');
    expect(Array.isArray(dropdownPreset.trigger.class)).toBe(true);
    expect(dropdownPreset.trigger.class).toContain('flex items-center justify-center');
    expect(dropdownPreset.trigger.class).toContain('rounded-tr-md');
  });

  it('powinien mieć klucz panel z odpowiednimi klasami', () => {
    expect(dropdownPreset).toHaveProperty('panel');
    expect(Array.isArray(dropdownPreset.panel.class)).toBe(true);
    expect(dropdownPreset.panel.class).toContain('absolute top-0 left-0');
    expect(dropdownPreset.panel.class).toContain('rounded-md');
  });

  it('powinien mieć klucz transition z wymaganymi polami', () => {
    expect(dropdownPreset).toHaveProperty('transition');
    const t = dropdownPreset.transition;
    expect(t).toHaveProperty('enterFromClass');
    expect(t).toHaveProperty('enterActiveClass');
    expect(t).toHaveProperty('leaveActiveClass');
    expect(t).toHaveProperty('leaveToClass');
  });
});
