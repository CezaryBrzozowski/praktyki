import { describe, it, expect } from 'vitest';
import fieldsetPreset from './index.js';

describe('preset fieldset', () => {
  it('powinien mieć klucz root', () => {
    expect(fieldsetPreset).toHaveProperty('root');
  });

  it('root powinien mieć odpowiednie klasy', () => {
    expect(Array.isArray(fieldsetPreset.root.class)).toBe(true);
    expect(fieldsetPreset.root.class).toContain('block');
    expect(fieldsetPreset.root.class).toContain('rounded-md rounded-lg');
    expect(fieldsetPreset.root.class).toContain('bg-surface-0 dark:bg-surface-900');
  });

  it('powinien mieć klucz legend', () => {
    const result = fieldsetPreset.legend({ props: {} });
    expect(Array.isArray(result.class)).toBe(true);
    expect(result.class).toContain('font-medium');
    expect(result.class).toContain('rounded-md');
  });

  it('powinien mieć klucz toggler', () => {
    const result = fieldsetPreset.toggler({ props: {} });
    expect(Array.isArray(result.class)).toBe(true);
    expect(result.class).toContain('flex items-center justify-center');
  });

  it('powinien mieć klucz togglerIcon, legendTitle, content', () => {
    expect(fieldsetPreset).toHaveProperty('togglerIcon');
    expect(fieldsetPreset).toHaveProperty('legendTitle');
    expect(fieldsetPreset).toHaveProperty('content');
  });

  it('powinien mieć klucz transition z wymaganymi polami', () => {
    expect(fieldsetPreset).toHaveProperty('transition');
    const t = fieldsetPreset.transition;
    expect(t).toHaveProperty('enterFromClass');
    expect(t).toHaveProperty('enterActiveClass');
    expect(t).toHaveProperty('enterToClass');
    expect(t).toHaveProperty('leaveFromClass');
    expect(t).toHaveProperty('leaveActiveClass');
    expect(t).toHaveProperty('leaveToClass');
  });
});
