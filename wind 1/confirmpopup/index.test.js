import { describe, it, expect } from 'vitest';
import confirmpopupPreset from './index.js';

describe('preset popup potwierdzenia', () => {
  it('powinien mieć wszystkie wymagane klucze', () => {
    expect(confirmpopupPreset).toHaveProperty('root');
    expect(confirmpopupPreset).toHaveProperty('content');
    expect(confirmpopupPreset).toHaveProperty('icon');
    expect(confirmpopupPreset).toHaveProperty('footer');
    expect(confirmpopupPreset).toHaveProperty('rejectbutton');
    expect(confirmpopupPreset).toHaveProperty('acceptbutton');
    expect(confirmpopupPreset).toHaveProperty('transition');
  });

  it('root powinien mieć odpowiednie klasy', () => {
    expect(typeof confirmpopupPreset.root.class).toBe('object');
    const rootClasses = confirmpopupPreset.root.class.join(' ');
    expect(rootClasses).toContain('rounded-lg');
    expect(rootClasses).toContain('shadow-xl');
    expect(rootClasses).toContain('bg-surface-0');
  });

  it('content powinien mieć odpowiednie klasy', () => {
    expect(typeof confirmpopupPreset.content.class).toBe('object');
    const contentClasses = confirmpopupPreset.content.class.join(' ');
    expect(contentClasses).toContain('text-sm');
    expect(contentClasses).toContain('px-6');
    expect(contentClasses).toContain('py-3');
  });

  it('icon powinien mieć klasę string', () => {
    expect(typeof confirmpopupPreset.icon.class).toBe('string');
    expect(confirmpopupPreset.icon.class).toContain('text-xl');
  });

  it('footer powinien mieć odpowiednie klasy', () => {
    expect(typeof confirmpopupPreset.footer.class).toBe('object');
    const footerClasses = confirmpopupPreset.footer.class.join(' ');
    expect(footerClasses).toContain('flex items-center justify-end');
    expect(footerClasses).toContain('rounded-b-lg');
  });

  it('rejectbutton i acceptbutton powinny mieć root z klasami', () => {
    expect(typeof confirmpopupPreset.rejectbutton.root.class).toBe('object');
    expect(typeof confirmpopupPreset.acceptbutton.root.class).toBe('object');
  });

  it('transition powinien mieć wszystkie wymagane klucze', () => {
    const t = confirmpopupPreset.transition;
    expect(t).toHaveProperty('enterFromClass');
    expect(t).toHaveProperty('enterActiveClass');
    expect(t).toHaveProperty('leaveActiveClass');
    expect(t).toHaveProperty('leaveToClass');
  });
});
