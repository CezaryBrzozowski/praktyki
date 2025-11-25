import { describe, it, expect } from 'vitest';
import skeletonPreset from './index';

// zamieniamy string klas na tablicę tokenów
const toTokens = (cls) =>
  String(cls || '')
    .split(/\s+/)
    .filter(Boolean);

describe('skeletonPreset', () => {
  it('should return correct classes for root with animation pulse', () => {
    const { class: cls } = skeletonPreset.root({
      props: { animation: 'pulse', shape: 'rectangle' }
    });

    const tokens = toTokens(cls);

    expect(tokens).toEqual(
      expect.arrayContaining([
        'overflow-hidden',
        'animate-pulse',
        'rounded-md',
        'bg-surface-200',
        'dark:bg-surface-700'
      ])
    );
  });

  it('should return correct classes for root with animation none', () => {
    const { class: cls } = skeletonPreset.root({
      props: { animation: 'none', shape: 'rectangle' }
    });

    const tokens = toTokens(cls);

    expect(tokens).toEqual(
      expect.arrayContaining([
        'overflow-hidden',
        'rounded-md',
        'bg-surface-200',
        'dark:bg-surface-700'
      ])
    );

    expect(tokens).not.toContain('animate-pulse');
  });

  it('should return correct classes for root with shape circle', () => {
    const { class: cls } = skeletonPreset.root({
      props: { animation: 'pulse', shape: 'circle' }
    });

    const tokens = toTokens(cls);

    expect(tokens).toEqual(
      expect.arrayContaining([
        'overflow-hidden',
        'animate-pulse',
        'rounded-full',
        'bg-surface-200',
        'dark:bg-surface-700'
      ])
    );

    expect(tokens).not.toContain('rounded-md');
  });

  it('should return correct classes for root with shape rectangle', () => {
    const { class: cls } = skeletonPreset.root({
      props: { animation: 'none', shape: 'rectangle' }
    });

    const tokens = toTokens(cls);

    expect(tokens).toEqual(expect.arrayContaining(['rounded-md']));
  });
});