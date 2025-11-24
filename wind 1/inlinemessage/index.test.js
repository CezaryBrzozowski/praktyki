import { describe, it, expect } from 'vitest';
import inlinemessagePreset from './index.js';

describe('preset inlinemessage', () => {
  it('powinien mieć klucz root', () => {
    expect(inlinemessagePreset).toHaveProperty('root');
  });

  it('root powinien mieć odpowiednie klasy', () => {
    const result = inlinemessagePreset.root({ props: {} });
    expect(Array.isArray(result.class)).toBe(true);
    expect(result.class).toContain('inline-flex items-center justify-center align-top gap-2');
    expect(result.class).toContain('py-2 px-3 m-0 rounded-md');
  });

  it('root powinien mieć odpowiednie klasy dla severity', () => {
    const info = inlinemessagePreset.root({ props: { severity: 'info' } });
    const success = inlinemessagePreset.root({ props: { severity: 'success' } });
    const warn = inlinemessagePreset.root({ props: { severity: 'warn' } });
    const error = inlinemessagePreset.root({ props: { severity: 'error' } });
    const infoClass = info.class.find(c => typeof c === 'object');
    const successClass = success.class.find(c => typeof c === 'object');
    const warnClass = warn.class.find(c => typeof c === 'object');
    const errorClass = error.class.find(c => typeof c === 'object');
    expect(infoClass).toHaveProperty('text-blue-500 dark:text-blue-300', true);
    expect(successClass).toHaveProperty('text-green-500 dark:text-green-300', true);
    expect(warnClass).toHaveProperty('text-orange-500 dark:text-orange-300', true);
    expect(errorClass).toHaveProperty('text-red-500 dark:text-red-300', true);
  });

  it('powinien mieć klucz icon z odpowiednimi klasami', () => {
    expect(inlinemessagePreset).toHaveProperty('icon');
    expect(Array.isArray(inlinemessagePreset.icon.class)).toBe(true);
    expect(inlinemessagePreset.icon.class).toContain('w-4 h-4');
    expect(inlinemessagePreset.icon.class).toContain('shrink-0');
  });

  it('powinien mieć klucz text z odpowiednimi klasami', () => {
    expect(inlinemessagePreset).toHaveProperty('text');
    expect(Array.isArray(inlinemessagePreset.text.class)).toBe(true);
    expect(inlinemessagePreset.text.class).toContain('text-sm leading-none');
    expect(inlinemessagePreset.text.class).toContain('font-medium');
  });
});
