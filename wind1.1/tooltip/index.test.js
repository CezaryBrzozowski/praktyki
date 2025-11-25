import { describe, it, expect } from 'vitest';
import tooltipPreset from './index';

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

describe('tooltipPreset', () => {
  it('should return correct classes for root with right position', () => {
    const classes = flattenClasses(
      tooltipPreset.root({
        context: { right: true },
        props: {}
      }).class
    );

    expect(classes).toEqual(expect.arrayContaining(['absolute', 'px-1.5']));
  });

  it('should return correct classes for root with left position', () => {
    const classes = flattenClasses(
      tooltipPreset.root({
        context: { left: true },
        props: {}
      }).class
    );

    expect(classes).toEqual(expect.arrayContaining(['absolute', 'px-1.5']));
  });

  it('should return correct classes for root with top position', () => {
    const classes = flattenClasses(
      tooltipPreset.root({
        context: { top: true },
        props: {}
      }).class
    );

    expect(classes).toEqual(expect.arrayContaining(['absolute', 'py-1.5']));
  });

  it('should return correct classes for root with bottom position', () => {
    const classes = flattenClasses(
      tooltipPreset.root({
        context: { bottom: true },
        props: {}
      }).class
    );

    expect(classes).toEqual(expect.arrayContaining(['absolute', 'py-1.5']));
  });

  it('should return correct classes for root with no position specified', () => {
    const classes = flattenClasses(
      tooltipPreset.root({
        context: {},
        props: {}
      }).class
    );

    expect(classes).toEqual(expect.arrayContaining(['absolute', 'px-1.5']));
  });

  it('should return correct classes for root with top and left positions', () => {
    const classes = flattenClasses(
      tooltipPreset.root({
        context: { top: true, left: true },
        props: {}
      }).class
    );

    expect(classes).toEqual(expect.arrayContaining(['absolute', 'px-1.5', 'py-1.5']));
  });

  it('should return correct classes for arrow', () => {
    expect(tooltipPreset.arrow.class).toBe('hidden');
  });

  it('should return correct classes for text', () => {
    expect(tooltipPreset.text.class).toEqual(
      expect.arrayContaining([
        'text-xs leading-none',
        'p-2',
        'rounded-md',
        'text-surface-900 dark:text-surface-0/80',
        'bg-surface-0 dark:bg-surface-900',
        'ring-1 ring-inset ring-surface-200 dark:ring-surface-800 ring-offset-0',
        'whitespace-pre-line',
        'break-words'
      ])
    );
  });
});
