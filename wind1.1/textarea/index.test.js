import textareaPreset from './index';

describe('textareaPreset', () => {
  it('should return correct classes for root when enabled', () => {
    const result = textareaPreset.root({ context: { disabled: false } });
    expect(result.class).toEqual(
      expect.arrayContaining([
        'font-sans leading-6',
        'sm:text-sm',
        'm-0',
        'py-1.5 px-3',
        'rounded-md',
        'appearance-none',
        'text-surface-900 dark:text-surface-0',
        'placeholder:text-surface-400 dark:placeholder:text-surface-500',
        'bg-surface-0 dark:bg-surface-900',
        'ring-1 ring-inset ring-surface-300 dark:ring-surface-700 ring-offset-0',
        'shadow-sm',
        'outline-none focus:ring-primary-500 dark:focus:ring-primary-400',
        'transition-colors duration-200'
      ])
    );
    expect(result.class).not.toContain('opacity-60 select-none pointer-events-none cursor-default');
  });

  it('should return correct classes for root when disabled', () => {
    const result = textareaPreset.root({ context: { disabled: true } });
    expect(result.class).toEqual(
      expect.arrayContaining([
        'font-sans leading-6',
        'sm:text-sm',
        'm-0',
        'py-1.5 px-3',
        'rounded-md',
        'appearance-none',
        'text-surface-900 dark:text-surface-0',
        'placeholder:text-surface-400 dark:placeholder:text-surface-500',
        'bg-surface-0 dark:bg-surface-900',
        'ring-1 ring-inset ring-surface-300 dark:ring-surface-700 ring-offset-0',
        'shadow-sm',
        'opacity-60 select-none pointer-events-none cursor-default',
        'transition-colors duration-200'
      ])
    );
    expect(result.class).not.toContain('outline-none focus:ring-primary-500 dark:focus:ring-primary-400');
  });

  it('should include all base classes', () => {
    const result = textareaPreset.root({ context: { disabled: false } });
    expect(result.class).toContain('font-sans leading-6');
    expect(result.class).toContain('sm:text-sm');
    expect(result.class).toContain('m-0');
    expect(result.class).toContain('py-1.5 px-3');
    expect(result.class).toContain('rounded-md');
    expect(result.class).toContain('appearance-none');
  });

  it('should include all color classes', () => {
    const result = textareaPreset.root({ context: { disabled: false } });
    expect(result.class).toContain('text-surface-900 dark:text-surface-0');
    expect(result.class).toContain('placeholder:text-surface-400 dark:placeholder:text-surface-500');
    expect(result.class).toContain('bg-surface-0 dark:bg-surface-900');
    expect(result.class).toContain('ring-1 ring-inset ring-surface-300 dark:ring-surface-700 ring-offset-0');
    expect(result.class).toContain('shadow-sm');
  });

  it('should include transition class', () => {
    const result = textareaPreset.root({ context: { disabled: false } });
    expect(result.class).toContain('transition-colors duration-200');
  });
});
