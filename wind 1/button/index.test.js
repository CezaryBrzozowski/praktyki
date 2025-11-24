import { describe, it, expect } from 'vitest'
import * as buttonModule from './index.js';

describe('button preset module', () => {
  it('should export an object with required keys and functions returning class arrays', () => {
    expect(buttonModule.default).toBeDefined();
    expect(typeof buttonModule.default).toBe('object');
    const keys = Object.keys(buttonModule.default);
    expect(keys).toEqual(
      expect.arrayContaining(['root', 'label', 'icon', 'loadingicon', 'badge'])
    );
    // Sprawdź, czy każda funkcja zwraca obiekt z tablicą class
    const rootResult = buttonModule.default.root({
      props: { size: null, label: 'Test', rounded: false, raised: false, link: false, text: false, plain: false, outlined: false, severity: null },
      context: { disabled: false },
      parent: { instance: { $name: '' } }
    });
    expect(rootResult).toHaveProperty('class');
    expect(Array.isArray(rootResult.class)).toBe(true);
    const labelResult = buttonModule.default.label({ props: { label: 'Test', link: false } });
    expect(labelResult).toHaveProperty('class');
    expect(Array.isArray(labelResult.class)).toBe(true);
    const iconResult = buttonModule.default.icon({ props: { iconPos: 'left', label: 'Test' } });
    expect(iconResult).toHaveProperty('class');
    expect(Array.isArray(iconResult.class)).toBe(true);
    const loadingiconResult = buttonModule.default.loadingicon({ props: { iconPos: 'left', label: 'Test' } });
    expect(loadingiconResult).toHaveProperty('class');
    expect(Array.isArray(loadingiconResult.class)).toBe(true);
    const badgeResult = buttonModule.default.badge({ props: { badge: true } });
    expect(badgeResult).toHaveProperty('class');
    expect(Array.isArray(badgeResult.class)).toBe(true);
  });

  function flattenClasses(classArr) {
    return classArr
      .map(item => {
        if (typeof item === 'string') return item;
        if (typeof item === 'object' && item !== null && !Array.isArray(item)) {
          return Object.keys(item).filter(k => item[k]).join(' ');
        }
        return '';
      })
      .join(' ');
  }

  it('should handle different button sizes', () => {
    const sizes = [null, 'small', 'large'];
    sizes.forEach(size => {
      const result = buttonModule.default.root({
        props: { size, label: 'Test', rounded: false, raised: false, link: false, text: false, plain: false, outlined: false, severity: null },
        context: { disabled: false },
        parent: { instance: { $name: '' } }
      });
      const classString = flattenClasses(result.class);
      expect(classString).toMatch(/px|py/);
    });
  });

  it('should handle rounded and raised props', () => {
    const result = buttonModule.default.root({
      props: { size: null, label: 'Test', rounded: true, raised: true, link: false, text: false, plain: false, outlined: false, severity: null },
      context: { disabled: false },
      parent: { instance: { $name: '' } }
    });
    const classString = flattenClasses(result.class);
    expect(classString).toMatch(/rounded-full/);
    expect(classString).toMatch(/shadow-lg/);
  });

  it('should handle link, plain, text, outlined props', () => {
    const linkResult = buttonModule.default.root({
      props: { size: null, label: 'Test', rounded: false, raised: false, link: true, text: false, plain: false, outlined: false, severity: null },
      context: { disabled: false },
      parent: { instance: { $name: '' } }
    });
    expect(flattenClasses(linkResult.class)).toMatch(/text-primary-600/);

    const plainResult = buttonModule.default.root({
      props: { size: null, label: 'Test', rounded: false, raised: false, link: false, text: false, plain: true, outlined: false, severity: null },
      context: { disabled: false },
      parent: { instance: { $name: '' } }
    });
    expect(flattenClasses(plainResult.class)).toMatch(/bg-gray-500/);

    const textResult = buttonModule.default.root({
      props: { size: null, label: 'Test', rounded: false, raised: false, link: false, text: true, plain: false, outlined: false, severity: null },
      context: { disabled: false },
      parent: { instance: { $name: '' } }
    });
    expect(flattenClasses(textResult.class)).toMatch(/bg-transparent/);

    const outlinedResult = buttonModule.default.root({
      props: { size: null, label: 'Test', rounded: false, raised: false, link: false, text: false, plain: false, outlined: true, severity: null },
      context: { disabled: false },
      parent: { instance: { $name: '' } }
    });
    expect(flattenClasses(outlinedResult.class)).toMatch(/bg-transparent/);
  });

  it('should handle severity props', () => {
    const severities = [null, 'secondary', 'success', 'info', 'warning', 'help', 'danger'];
    severities.forEach(severity => {
      const result = buttonModule.default.root({
        props: { size: null, label: 'Test', rounded: false, raised: false, link: false, text: false, plain: false, outlined: false, severity },
        context: { disabled: false },
        parent: { instance: { $name: '' } }
      });
      expect(result).toHaveProperty('class');
      expect(Array.isArray(result.class)).toBe(true);
    });
  });

  it('should handle disabled context', () => {
    const result = buttonModule.default.root({
      props: { size: null, label: 'Test', rounded: false, raised: false, link: false, text: false, plain: false, outlined: false, severity: null },
      context: { disabled: true },
      parent: { instance: { $name: '' } }
    });
    const classString = flattenClasses(result.class);
    expect(classString).toMatch(/opacity-60/);
    expect(classString).toMatch(/pointer-events-none/);
  });
});
