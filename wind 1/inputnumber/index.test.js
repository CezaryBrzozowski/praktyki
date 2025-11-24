import { describe, it, expect } from 'vitest';
import inputnumberPreset from './index.js';

describe('preset inputnumber', () => {
  it('powinien mieć klucz root', () => {
    expect(inputnumberPreset).toHaveProperty('root');
  });

  it('root powinien mieć odpowiednie klasy', () => {
    const result = inputnumberPreset.root({ props: {}, parent: { instance: {} } });
    expect(Array.isArray(result.class)).toBe(true);
    expect(result.class).toContain('inline-flex');
    expect(result.class).toContain('shadow-sm');
    expect(result.class).toContain('rounded-md');
  });

  it('powinien mieć klucz input z root', () => {
    expect(inputnumberPreset).toHaveProperty('input');
    const result = inputnumberPreset.input.root({ parent: { props: {} } });
    expect(Array.isArray(result.class)).toBe(true);
    expect(result.class).toContain('flex flex-auto');
    expect(result.class).toContain('rounded-md');
  });

  it('powinien mieć klucz buttongroup', () => {
    expect(inputnumberPreset).toHaveProperty('buttongroup');
    expect(Array.isArray(inputnumberPreset.buttongroup.class)).toBe(true);
    expect(inputnumberPreset.buttongroup.class).toContain('flex');
  });

  it('powinien mieć klucz incrementbutton z root', () => {
    expect(inputnumberPreset).toHaveProperty('incrementbutton');
    const result = inputnumberPreset.incrementbutton.root({ parent: { props: {} } });
    expect(Array.isArray(result.class)).toBe(true);
    expect(result.class).toContain('flex flex-auto');
    expect(result.class).toContain('rounded-md');
  });

  it('powinien mieć klucz decrementbutton z root', () => {
    expect(inputnumberPreset).toHaveProperty('decrementbutton');
    const result = inputnumberPreset.decrementbutton.root({ parent: { props: {} } });
    expect(Array.isArray(result.class)).toBe(true);
    expect(result.class).toContain('flex flex-auto');
    expect(result.class).toContain('rounded-md');
  });
});
