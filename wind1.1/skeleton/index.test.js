import skeletonPreset from './index';

describe('skeletonPreset', () => {
  it('should return correct classes for root with animation pulse', () => {
    const result = skeletonPreset.root({ props: { animation: 'pulse', shape: 'rectangle' } });
    expect(result.class).toEqual(
      expect.arrayContaining([
        'overflow-hidden',
        'animate-pulse',
        'rounded-md',
        'bg-surface-200 dark:bg-surface-700'
      ])
    );
  });

  it('should return correct classes for root with animation none', () => {
    const result = skeletonPreset.root({ props: { animation: 'none', shape: 'rectangle' } });
    expect(result.class).toEqual(
      expect.arrayContaining([
        'overflow-hidden',
        'rounded-md',
        'bg-surface-200 dark:bg-surface-700'
      ])
    );
    expect(result.class).not.toContain('animate-pulse');
  });

  it('should return correct classes for root with shape circle', () => {
    const result = skeletonPreset.root({ props: { animation: 'pulse', shape: 'circle' } });
    expect(result.class).toEqual(
      expect.arrayContaining([
        'overflow-hidden',
        'animate-pulse',
        'rounded-full',
        'bg-surface-200 dark:bg-surface-700'
      ])
    );
    expect(result.class).not.toContain('rounded-md');
  });

  it('should return correct classes for root with shape rectangle', () => {
    const result = skeletonPreset.root({ props: { animation: 'none', shape: 'rectangle' } });
    expect(result.class).toEqual(
      expect.arrayContaining([
        'rounded-md'
      ])
    );
  });
});
