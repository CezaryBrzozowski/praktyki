import { describe, it, expect } from 'vitest';
import knobPreset from './index.js';

describe('preset knob', () => {
  it('powinien mieć klucz root', () => {
    expect(knobPreset).toHaveProperty('root');
  });

  it('root powinien mieć klasy dla disabled', () => {
    const result = knobPreset.root({ props: { disabled: true } });
    const hasDisabled = result.class.some(
      c => typeof c === 'object' && c['opacity-60 select-none pointer-events-none cursor-default'] === true
    );
    expect(hasDisabled).toBe(true);
  });

  it('powinien mieć klucz range z odpowiednimi klasami', () => {
    expect(knobPreset).toHaveProperty('range');
    expect(Array.isArray(knobPreset.range.class)).toBe(true);
    expect(knobPreset.range.class).toContain('stroke-current');
    expect(knobPreset.range.class).toContain('fill-none');
  });

  it('powinien mieć klucz value z odpowiednimi klasami', () => {
    expect(knobPreset).toHaveProperty('value');
    expect(Array.isArray(knobPreset.value.class)).toBe(true);
    expect(knobPreset.value.class).toContain('animate-dash-frame');
    expect(knobPreset.value.class).toContain('fill-none');
  });

  it('powinien mieć klucz label z odpowiednimi klasami', () => {
    expect(knobPreset).toHaveProperty('label');
    expect(Array.isArray(knobPreset.label.class)).toBe(true);
    expect(knobPreset.label.class).toContain('text-center text-xl');
    expect(knobPreset.label.class).toContain('fill-surface-600 dark:fill-surface-200');
  });
});
