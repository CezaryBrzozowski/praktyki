
import { describe, it, expect } from 'vitest';
import accordionPreset from './index.js';

describe('preset akordeonu', () => {
  it('powinien mieć wszystkie wymagane klucze', () => {
    expect(accordionPreset).toHaveProperty('accordiontab');
    const tab = accordionPreset.accordiontab;
    expect(tab).toHaveProperty('header');
    expect(tab).toHaveProperty('headerAction');
    expect(tab).toHaveProperty('headerIcon');
    expect(tab).toHaveProperty('headerTitle');
    expect(tab).toHaveProperty('content');
    expect(tab).toHaveProperty('transition');
  });

  it('header powinien zwracać poprawne klasy', () => {
    const result = accordionPreset.accordiontab.header({ props: {} });
    expect(result.class).toContain('pt-6 pb-0');
    expect(result.class).toContain('mt-6');
    expect(result.class).toContain('border-x-0 border-b-0');
    expect(result.class).toContain('border border-surface-200 dark:border-surface-700');
  });

  it('header powinien dodać klasy dla disabled', () => {
    const result = accordionPreset.accordiontab.header({ props: { disabled: true } });
    const disabledClass = result.class.find(c => typeof c === 'object');
    expect(disabledClass).toHaveProperty('select-none pointer-events-none cursor-default opacity-60', true);
  });

  it('headerAction powinien zwracać poprawne klasy', () => {
    const result = accordionPreset.accordiontab.headerAction({ context: {} });
    expect(result.class).toContain('font-semibold');
    expect(result.class).toContain('leading-7');
    expect(result.class).toContain('flex items-center justify-between flex-row-reverse');
    expect(result.class).toContain('bg-transparent');
  });

  it('headerIcon i headerTitle powinny mieć stringa', () => {
    expect(typeof accordionPreset.accordiontab.headerIcon.class).toBe('string');
    expect(typeof accordionPreset.accordiontab.headerTitle.class).toBe('string');
  });

  it('content powinien zwracać poprawne klasy', () => {
    expect(accordionPreset.accordiontab.content.class).toContain('leading-7');
    expect(accordionPreset.accordiontab.content.class).toContain('pr-12 pt-2');
    expect(accordionPreset.accordiontab.content.class).toContain('text-surface-600 dark:text-surface-0/70');
  });

  it('transition powinien mieć wszystkie wymagane klucze', () => {
    const t = accordionPreset.accordiontab.transition;
    expect(t).toHaveProperty('enterFromClass');
    expect(t).toHaveProperty('enterActiveClass');
    expect(t).toHaveProperty('enterToClass');
    expect(t).toHaveProperty('leaveFromClass');
    expect(t).toHaveProperty('leaveActiveClass');
    expect(t).toHaveProperty('leaveToClass');
  });
});
