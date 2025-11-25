import { describe, it, expect } from 'vitest';
import treePreset from './index';

function flattenClasses(input) {
  return input.flatMap(item => {
    if (typeof item === 'string') return item;
    if (item && typeof item === 'object') {
      return Object.entries(item)
        .filter(([, val]) => Boolean(val))
        .map(([key]) => key);
    }
    return [];
  });
}

describe('treePreset', () => {
  it('should return correct classes for root', () => {
    const result = flattenClasses(treePreset.root.class);
    expect(result).toEqual(
      expect.arrayContaining([
        'relative',
        'p-1.5',
        'rounded-md',
        'bg-surface-0 dark:bg-surface-800',
        'text-surface-700 dark:text-white/80',
        'ring-1 ring-surface-200 dark:ring-surface-700'
      ])
    );
  });

  it('should return correct classes for wrapper', () => {
    expect(flattenClasses(treePreset.wrapper.class)).toEqual(
      expect.arrayContaining(['overflow-auto'])
    );
  });

  it('should return correct classes for container', () => {
    expect(flattenClasses(treePreset.container.class)).toEqual(
      expect.arrayContaining(['m-0 p-0', 'list-none overflow-auto'])
    );
  });

  it('should return correct classes for node', () => {
    expect(flattenClasses(treePreset.node.class)).toEqual(
      expect.arrayContaining([
        'p-[2px]',
        'rounded-md',
        'focus:outline-none focus:outline-offset-0 focus:ring-2 focus:ring-inset focus:ring-primary-500 dark:focus:ring-primary-400'
      ])
    );
  });

  it('should return correct classes for content when selected', () => {
    const result = flattenClasses(
      treePreset.content({
        context: { selected: true },
        props: { selectionMode: 'single' }
      }).class
    );

    expect(result).toEqual(
      expect.arrayContaining([
        'flex items-center',
        'rounded-md',
        'p-2',
        'text-surface-700 dark:text-surface-0',
        'bg-surface-100 text-primary-500 dark:bg-surface-300/10 dark:text-primary-400',
        'hover:bg-surface-200 dark:hover:bg-surface-400/10',
        'transition-shadow duration-200',
        'cursor-pointer select-none'
      ])
    );
  });

  it('should return correct classes for content when not selected', () => {
    const result = flattenClasses(
      treePreset.content({
        context: { selected: false },
        props: { selectionMode: 'single' }
      }).class
    );
    expect(result).toContain('flex items-center');
    expect(result).not.toContain('bg-surface-100 text-primary-500');
  });

  it('should return correct classes for content with no selection mode', () => {
    const result = flattenClasses(
      treePreset.content({
        context: { selected: false },
        props: { selectionMode: 'none' }
      }).class
    );
    expect(result).not.toContain('cursor-pointer select-none');
  });

  it('should return correct classes for toggler when not leaf', () => {
    const result = flattenClasses(
      treePreset.toggler({ context: { leaf: false } }).class
    );

    expect(result).toEqual(
      expect.arrayContaining([
        'inline-flex items-center justify-center',
        'border-0 rounded-full',
        'mr-2',
        'w-6 h-6',
        'text-surface-500',
        'bg-transparent',
        'hover:text-surface-700 dark:hover:text-white/80',
        'transition duration-200',
        'cursor-pointer select-none'
      ])
    );
    expect(result).not.toContain('invisible');
  });

  it('should return correct classes for toggler when leaf', () => {
    const result = flattenClasses(
      treePreset.toggler({ context: { leaf: true } }).class
    );
    expect(result).toContain('invisible');
  });

  it('should return correct classes for togglericon', () => {
    expect(flattenClasses(treePreset.togglericon.class)).toEqual(
      expect.arrayContaining(['w-4 h-4', 'text-surface-500 dark:text-white/70'])
    );
  });

  it('should return correct classes for checkboxcontainer', () => {
    expect(treePreset.checkboxcontainer.class).toBe('mr-2');
  });

  it('should return correct classes for checkbox when checked', () => {
    const result = flattenClasses(
      treePreset.checkbox({
        context: { checked: true, focused: false },
        props: { disabled: false }
      }).class
    );

    expect(result).toEqual(
      expect.arrayContaining([
        'relative',
        'flex',
        'items-center',
        'justify-center',
        'w-4',
        'h-4',
        'rounded',
        'border',
        'text-surface-600',
        'border-primary-500 bg-primary-500 dark:border-primary-400 dark:bg-primary-400',
        'focus:outline-none focus:outline-offset-0',
        'transition-colors',
        'duration-200'
      ])
    );
  });

  it('should return correct classes for checkbox when unchecked', () => {
    const result = flattenClasses(
      treePreset.checkbox({
        context: { checked: false, focused: false },
        props: { disabled: false }
      }).class
    );

    expect(result).toContain(
      'border-surface-300 bg-surface-0 dark:border-surface-700 dark:bg-surface-900'
    );
  });

  it('should return correct classes for checkbox when focused', () => {
    const result = flattenClasses(
      treePreset.checkbox({
        context: { checked: false, focused: true },
        props: { disabled: false }
      }).class
    );

    expect(result).toContain('ring-2 ring-primary-500 dark:ring-primary-400');
  });

  it('should return correct classes for checkbox when disabled', () => {
    const result = flattenClasses(
      treePreset.checkbox({
        context: { checked: false, focused: false },
        props: { disabled: true }
      }).class
    );

    expect(result).toContain('cursor-default opacity-60');
  });

  it('should return correct classes for checkboxicon', () => {
    expect(flattenClasses(treePreset.checkboxicon.class)).toEqual(
      expect.arrayContaining([
        'text-normal',
        'w-3',
        'h-3',
        'text-white dark:text-surface-900',
        'transition-all',
        'duration-200'
      ])
    );
  });

  it('should return correct classes for nodeicon', () => {
    expect(flattenClasses(treePreset.nodeicon.class)).toEqual(
      expect.arrayContaining(['mr-2', 'text-surface-600 dark:text-white/70'])
    );
  });

  it('should return correct classes for subgroup', () => {
    expect(flattenClasses(treePreset.subgroup.class)).toEqual(
      expect.arrayContaining(['m-0 list-none p-0 pl-2 mt-1'])
    );
  });

  it('should return correct classes for filtercontainer', () => {
    expect(flattenClasses(treePreset.filtercontainer.class)).toEqual(
      expect.arrayContaining(['relative block', 'mb-2', 'w-full'])
    );
  });

  it('should return correct classes for input', () => {
    const result = flattenClasses(treePreset.input.class);

    expect(result).toContain('relative');
    expect(result).toContain('font-sans leading-6');
    expect(result).toContain('sm:text-sm');
    expect(result).toContain('m-0');
    expect(result).toContain('py-1.5 px-3 pr-10');
    expect(result).toContain('w-full');
    expect(result).toContain('rounded-md');
  });

  it('should return correct classes for loadingicon', () => {
    expect(flattenClasses(treePreset.loadingicon.class)).toEqual(
      expect.arrayContaining([
        'text-surface-500 dark:text-surface-0/70',
        'absolute top-[50%] right-[50%] -mt-2 -mr-2 animate-spin'
      ])
    );
  });

  it('should return correct classes for searchicon', () => {
    expect(flattenClasses(treePreset.searchicon.class)).toEqual(
      expect.arrayContaining([
        'absolute top-1/2 -mt-2 right-3',
        'text-surface-600 dark:hover:text-white/70'
      ])
    );
  });
});
