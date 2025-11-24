import togglebuttonPreset from './index';

describe('togglebuttonPreset', () => {
  it('should return correct classes for root when not focused and not selected', () => {
    expect(
      togglebuttonPreset.root({
        props: { modelValue: false, disabled: false },
        context: { focused: false }
      }).class
    ).toEqual(
      expect.arrayContaining([
        'items-center inline-flex text-center align-bottom justify-center',
        'px-2.5 py-1.5',
        'text-sm',
        'rounded-md shadow-sm',
        'text-surface-700 dark:text-white/80',
        'ring-1 ring-surface-200 dark:ring-surface-700',
        'bg-surface-0 dark:bg-surface-900 ',
        'hover:bg-surface-200 dark:hover:bg-surface-600/80',
        'transition-all duration-200',
        'cursor-pointer'
      ])
    );
  });

  it('should return correct classes for root when selected', () => {
    const result = togglebuttonPreset.root({
      props: { modelValue: true, disabled: false },
      context: { focused: false }
    }).class;
    expect(result).toContain('bg-surface-100 dark:bg-surface-700');
    expect(result).not.toContain('bg-surface-0 dark:bg-surface-900 ');
  });

  it('should return correct classes for root when focused and not disabled', () => {
    const result = togglebuttonPreset.root({
      props: { modelValue: false, disabled: false },
      context: { focused: true }
    }).class;
    expect(result).toEqual(
      expect.arrayContaining([
        'outline-none outline-offset-0 ring-2 ring-inset ring-primary-500 dark:ring-primary-400'
      ])
    );
    expect(result).not.toContain('ring-1 ring-surface-200 dark:ring-surface-700');
  });

  it('should return correct classes for root when disabled', () => {
    const result = togglebuttonPreset.root({
      props: { modelValue: false, disabled: true },
      context: { focused: false }
    }).class;
    expect(result).toEqual(
      expect.arrayContaining([
        'opacity-60 select-none pointer-events-none cursor-default'
      ])
    );
    expect(result).not.toContain('cursor-pointer');
  });

  it('should return correct classes for root when focused and disabled', () => {
    const result = togglebuttonPreset.root({
      props: { modelValue: false, disabled: true },
      context: { focused: true }
    }).class;
    expect(result).not.toContain('ring-2 ring-inset ring-primary-500');
    expect(result).toContain('opacity-60 select-none pointer-events-none cursor-default');
  });

  it('should return correct classes for root when focused and selected', () => {
    const result = togglebuttonPreset.root({
      props: { modelValue: true, disabled: false },
      context: { focused: true }
    }).class;
    expect(result).toEqual(
      expect.arrayContaining([
        'bg-surface-100 dark:bg-surface-700',
        'outline-none outline-offset-0 ring-2 ring-inset ring-primary-500 dark:ring-primary-400'
      ])
    );
  });

  it('should return correct classes for label', () => {
    expect(togglebuttonPreset.label.class).toBe('font-semibold text-center w-full');
  });

  it('should return correct classes for icon', () => {
    expect(togglebuttonPreset.icon.class).toEqual(
      expect.arrayContaining([' mr-2', 'text-surface-700 dark:text-white/80'])
    );
  });
});
