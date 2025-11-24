import { describe, it, expect } from 'vitest';
import preset from './index.js';

describe('Preset wind/message', () => {
  it('powinien posiadać klucz root będący funkcją zwracającą klasę z odpowiednimi kolorami w zależności od props.severity', () => {
    expect(typeof preset.root).toBe('function');
    const info = preset.root({ props: { severity: 'info' } });
    const success = preset.root({ props: { severity: 'success' } });
    const warn = preset.root({ props: { severity: 'warn' } });
    const error = preset.root({ props: { severity: 'error' } });
    // Znajdź obiekt z warunkowymi klasami
    const getConditionalClass = (arr) => arr.class.find((el) => typeof el === 'object' && el !== null);
    const infoObj = getConditionalClass(info);
    const successObj = getConditionalClass(success);
    const warnObj = getConditionalClass(warn);
    const errorObj = getConditionalClass(error);
    expect(infoObj['text-blue-500 dark:text-blue-300']).toBe(true);
    expect(successObj['text-green-500 dark:text-green-300']).toBe(true);
    expect(warnObj['text-orange-500 dark:text-orange-300']).toBe(true);
    expect(errorObj['text-red-500 dark:text-red-300']).toBe(true);
  });

  it('powinien posiadać wrapper z odpowiednimi klasami', () => {
    expect(preset.wrapper).toBeDefined();
    expect(preset.wrapper.class).toContain('flex items-center');
    expect(preset.wrapper.class).toContain('p-4');
  });

  it('powinien posiadać icon z odpowiednimi klasami', () => {
    expect(preset.icon).toBeDefined();
    expect(preset.icon.class).toContain('w-5 h-5');
    expect(preset.icon.class).toContain('mr-3 shrink-0');
  });

  it('powinien posiadać text z odpowiednimi klasami', () => {
    expect(preset.text).toBeDefined();
    expect(preset.text.class).toContain('text-sm leading-none');
    expect(preset.text.class).toContain('font-medium');
  });

  it('powinien posiadać button będący funkcją zwracającą odpowiednie klasy', () => {
    expect(typeof preset.button).toBe('function');
    const btn = preset.button({ props: {} });
    expect(btn.class).toContain('flex items-center justify-center');
    expect(btn.class).toContain('w-6 h-6');
    expect(btn.class).toContain('rounded-full');
    expect(btn.class).toContain('bg-transparent');
    expect(btn.class).toContain('transition duration-200 ease-in-out');
    expect(btn.class).toContain('hover:bg-surface-100 dark:hover:bg-surface-700');
    expect(btn.class).toContain('focus:ring-primary-500 dark:focus:ring-primary-400');
  });

  it('powinien posiadać closeicon z odpowiednimi klasami', () => {
    expect(preset.closeicon).toBeDefined();
    expect(preset.closeicon.class).toContain('w-3 h-3');
    expect(preset.closeicon.class).toContain('shrink-0');
  });

  it('powinien posiadać transition z odpowiednimi klasami', () => {
    expect(preset.transition).toBeDefined();
    expect(preset.transition.enterFromClass).toBe('opacity-0');
    expect(preset.transition.enterActiveClass).toBe('transition-opacity duration-300');
    expect(preset.transition.leaveFromClass).toBe('max-h-40');
    expect(preset.transition.leaveActiveClass).toBe('overflow-hidden transition-all duration-300 ease-in');
    expect(preset.transition.leaveToClass).toBe('max-h-0 opacity-0 !m-0');
  });
});
