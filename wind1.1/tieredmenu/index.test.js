import { describe, it, expect } from 'vitest';
import tieredmenuPreset from './index.js';

describe('tieredmenuPreset', () => {
  it('should return correct classes for root', () => {
    expect(tieredmenuPreset.root.class).toEqual(
      expect.arrayContaining([
        'rounded-md',
        'min-w-[12rem]',
        'p-1.5',
        'bg-surface-0 dark:bg-surface-700',
        'ring-1 ring-surface-200 dark:ring-surface-700'
      ])
    );
  });

  it('should return correct classes for menu', () => {
    expect(tieredmenuPreset.menu.class).toEqual(
      expect.arrayContaining([
        'list-none',
        'm-0',
        'p-0',
        'outline-none'
      ])
    );
  });

  it('should return correct classes for menuitem', () => {
    expect(tieredmenuPreset.menuitem.class).toEqual(
      expect.arrayContaining([
        'relative first:mt-0 mt-1'
      ])
    );
  });

  it('should return correct classes for content when not focused', () => {
    const result = tieredmenuPreset.content({ context: { focused: false } });
    expect(result.class).toEqual(
      expect.arrayContaining([
        'rounded-md',
        'text-surface-700 dark:text-surface-0',
        'transition-shadow',
        'duration-200',
        'hover:text-primary-600 dark:hover:text-primary-400 ',
        'hover:bg-surface-100 dark:hover:bg-surface-400/10'
      ])
    );
    expect(result.class).not.toContain('bg-surface-100 text-primary-500 dark:bg-surface-300/10 dark:text-primary-400');
  });

  it('should return correct classes for content when focused', () => {
    const result = tieredmenuPreset.content({ context: { focused: true } });
    expect(result.class).toEqual(
      expect.arrayContaining([
        'rounded-md',
        'bg-surface-100 text-primary-500 dark:bg-surface-300/10 dark:text-primary-400',
        'transition-shadow',
        'duration-200'
      ])
    );
    expect(result.class).not.toContain('text-surface-700 dark:text-surface-0');
  });

  it('should return correct classes for action', () => {
    expect(tieredmenuPreset.action.class).toEqual(
      expect.arrayContaining([
        'relative',
        'font-semibold',
        'flex',
        'items-center',
        'py-2',
        'px-3',
        'no-underline',
        'overflow-hidden',
        'cursor-pointer',
        'select-none'
      ])
    );
  });

  it('should return correct classes for icon', () => {
    expect(tieredmenuPreset.icon.class).toEqual(
      expect.arrayContaining([
        'mr-2',
        'leading-6',
        'text-sm'
      ])
    );
  });

  it('should return correct classes for label', () => {
    expect(tieredmenuPreset.label.class).toEqual(
      expect.arrayContaining([
        'leading-none',
        'text-sm'
      ])
    );
  });

  it('should return correct classes for submenuicon', () => {
    expect(tieredmenuPreset.submenuicon.class).toEqual(
      expect.arrayContaining([
        'ml-auto'
      ])
    );
  });

  it('should return correct classes for submenu', () => {
    expect(tieredmenuPreset.submenu.class).toEqual(
      expect.arrayContaining([
        'w-full sm:w-48',
        'p-1.5',
        'm-0 mx-1.5',
        'list-none',
        'shadow-none sm:shadow-md',
        'border-0',
        'static sm:absolute',
        'z-10',
        'bg-surface-0 dark:bg-surface-700'
      ])
    );
  });

  it('should return correct classes for separator', () => {
    expect(tieredmenuPreset.separator.class).toBe('border-t border-surface-200 dark:border-surface-600 my-1');
  });
});
