import tagPreset from './index';

describe('tagPreset', () => {
  it('should return correct classes for root with default severity', () => {
    const result = tagPreset.root({ props: { severity: null, rounded: false } });
    expect(result.class).toEqual(
      expect.arrayContaining([
        'text-xs font-bold',
        'inline-flex items-center justify-center',
        'px-2 py-1',
        'rounded-md',
        'text-white dark:text-surface-900',
        'bg-primary-500 dark:bg-primary-400'
      ])
    );
    expect(result.class).not.toContain('rounded-full');
  });

  it('should return correct classes for root with primary severity', () => {
    const result = tagPreset.root({ props: { severity: 'primary', rounded: false } });
    expect(result.class).toEqual(
      expect.arrayContaining([
        'text-xs font-bold',
        'inline-flex items-center justify-center',
        'px-2 py-1',
        'rounded-md',
        'text-white dark:text-surface-900',
        'bg-primary-500 dark:bg-primary-400'
      ])
    );
  });

  it('should return correct classes for root with success severity', () => {
    const result = tagPreset.root({ props: { severity: 'success', rounded: false } });
    expect(result.class).toEqual(
      expect.arrayContaining([
        'text-xs font-bold',
        'inline-flex items-center justify-center',
        'px-2 py-1',
        'rounded-md',
        'text-white dark:text-surface-900',
        'bg-green-500 dark:bg-green-400'
      ])
    );
  });

  it('should return correct classes for root with info severity', () => {
    const result = tagPreset.root({ props: { severity: 'info', rounded: false } });
    expect(result.class).toEqual(
      expect.arrayContaining([
        'bg-blue-500 dark:bg-blue-400'
      ])
    );
  });

  it('should return correct classes for root with warning severity', () => {
    const result = tagPreset.root({ props: { severity: 'warning', rounded: false } });
    expect(result.class).toEqual(
      expect.arrayContaining([
        'bg-orange-500 dark:bg-orange-400'
      ])
    );
  });

  it('should return correct classes for root with danger severity', () => {
    const result = tagPreset.root({ props: { severity: 'danger', rounded: false } });
    expect(result.class).toEqual(
      expect.arrayContaining([
        'bg-red-500 dark:bg-red-400'
      ])
    );
  });

  it('should return correct classes for root with rounded true', () => {
    const result = tagPreset.root({ props: { severity: null, rounded: true } });
    expect(result.class).toEqual(
      expect.arrayContaining([
        'rounded-full'
      ])
    );
    expect(result.class).not.toContain('rounded-md');
  });

  it('should return correct classes for root with rounded false', () => {
    const result = tagPreset.root({ props: { severity: null, rounded: false } });
    expect(result.class).toContain('rounded-md');
  });

  it('should return correct classes for value', () => {
    expect(tagPreset.value.class).toBe('leading-normal');
  });

  it('should return correct classes for icon', () => {
    expect(tagPreset.icon.class).toBe('mr-1 text-sm');
  });

  it('should combine severity and rounded correctly', () => {
    const result = tagPreset.root({ props: { severity: 'success', rounded: true } });
    expect(result.class).toEqual(
      expect.arrayContaining([
        'bg-green-500 dark:bg-green-400',
        'rounded-full'
      ])
    );
  });
});
