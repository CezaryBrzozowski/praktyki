import selectButtonPreset from './index';

describe('selectButtonPreset', () => {
  it('should return correct classes for root when enabled', () => {
    const result = selectButtonPreset.root({ props: { disabled: false } });
    expect(result.class).toEqual(
      expect.arrayContaining([
        'shadow-sm'
      ])
    );
  });

  it('should return correct classes for root when disabled', () => {
    const result = selectButtonPreset.root({ props: { disabled: true } });
    expect(result.class).toEqual(
      expect.arrayContaining([
        'shadow-sm',
        'opacity-60 select-none pointer-events-none cursor-default'
      ])
    );
  });

  it('should return correct classes for button when active', () => {
    const result = selectButtonPreset.button({ context: { active: true, disabled: false } });
    expect(result.class).toEqual(
      expect.arrayContaining([
        'relative',
        'text-sm',
        'leading-none',
        'inline-flex items-center align-bottom text-center',
        'px-2.5 py-1.5',
        'ring-1 ring-surface-200 dark:ring-surface-700',
        'first:rounded-l-md first:rounded-tr-none first:rounded-br-none',
        'last:rounded-tl-none last:rounded-bl-none last:rounded-r-md ',
        'bg-surface-100 dark:bg-surface-700',
        'focus:outline-none focus:outline-offset-0 focus:ring-primary-500 dark:focus:ring-primary-400',
        'hover:bg-surface-200 dark:hover:bg-surface-600/80',
        'transition duration-200',
        'cursor-pointer select-none overflow-hidden'
      ])
    );
  });

  it('should return correct classes for button when not active', () => {
    const result = selectButtonPreset.button({ context: { active: false, disabled: false } });
    expect(result.class).toEqual(
      expect.arrayContaining([
        'bg-surface-0 dark:bg-surface-900',
        'text-surface-700 dark:text-white/80'
      ])
    );
  });

  it('should return correct classes for button when disabled', () => {
    const result = selectButtonPreset.button({ context: { active: false, disabled: true } });
    expect(result.class).toEqual(
      expect.arrayContaining([
        'opacity-60 select-none pointer-events-none cursor-default'
      ])
    );
  });

  it('should return correct classes for label', () => {
    expect(selectButtonPreset.label.class).toBe('font-semibold');
  });
});
