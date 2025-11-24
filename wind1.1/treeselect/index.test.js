import treeselectPreset from './index';

describe('treeselectPreset', () => {
  it('should return correct classes for root when focused', () => {
    expect(
      treeselectPreset.root({
        props: { disabled: false },
        state: { focused: true }
      }).class
    ).toEqual(
      expect.arrayContaining([
        'inline-flex',
        'relative',
        'w-full md:w-56',
        'rounded-md',
        'shadow-sm',
        'bg-surface-0 dark:bg-surface-900',
        'ring-2 ring-inset ring-primary-500 dark:ring-primary-400',
        'cursor-default',
        'select-none'
      ])
    );
  });

  it('should return correct classes for root when not focused', () => {
    expect(
      treeselectPreset.root({
        props: { disabled: false },
        state: { focused: false }
      }).class
    ).toEqual(
      expect.arrayContaining([
        'ring-1 ring-inset ring-surface-300 dark:ring-surface-700'
      ])
    );
  });

  it('should return correct classes for root when disabled', () => {
    const result = treeselectPreset.root({
      props: { disabled: true },
      state: { focused: false }
    }).class;
    expect(result).toContain('opacity-60');
    expect(result).toContain('pointer-events-none');
  });

  it('should return correct classes for labelContainer', () => {
    expect(treeselectPreset.labelContainer.class).toEqual(
      expect.arrayContaining(['overflow-hidden flex flex-auto cursor-pointer'])
    );
  });

  it('should return correct classes for label', () => {
    expect(treeselectPreset.label.class).toEqual(
      expect.arrayContaining([
        'block leading-5',
        'py-1.5 px-3',
        'text-surface-800 dark:text-white/80',
        'transition duration-200',
        'overflow-hidden whitespace-nowrap cursor-pointer overflow-ellipsis'
      ])
    );
  });

  it('should return correct classes for trigger', () => {
    expect(treeselectPreset.trigger.class).toEqual(
      expect.arrayContaining([
        'sm:text-sm',
        'flex items-center justify-center',
        'shrink-0',
        'bg-transparent',
        'text-surface-500',
        'w-12',
        'rounded-tr-md',
        'rounded-br-md'
      ])
    );
  });

  it('should return correct classes for panel', () => {
    expect(treeselectPreset.panel.class).toEqual(
      expect.arrayContaining([
        'absolute top-0 left-0',
        'mt-2',
        'border-0',
        'rounded-md',
        'shadow-md',
        'bg-surface-0 dark:bg-surface-800',
        'text-surface-800 dark:text-white/80',
        'ring-1 ring-inset ring-surface-300 dark:ring-surface-700'
      ])
    );
  });

  it('should return correct classes for wrapper', () => {
    expect(treeselectPreset.wrapper.class).toEqual(
      expect.arrayContaining(['max-h-[200px]', 'overflow-auto'])
    );
  });

  it('should return correct classes for tree root', () => {
    expect(treeselectPreset.tree.root.class).toEqual(
      expect.arrayContaining(['relative', 'p-1.5'])
    );
  });

  it('should return correct classes for tree content when selected', () => {
    const result = treeselectPreset.tree.content({
      context: { selected: true },
      props: { selectionMode: 'single' }
    }).class;
    expect(result).toContain('bg-surface-100 text-primary-500 dark:bg-surface-300/10 dark:text-primary-400');
  });

  it('should return correct classes for tree toggler when not leaf', () => {
    const result = treeselectPreset.tree.toggler({
      context: { leaf: false }
    }).class;
    expect(result).not.toContain('invisible');
  });

  it('should return correct classes for tree toggler when leaf', () => {
    const result = treeselectPreset.tree.toggler({
      context: { leaf: true }
    }).class;
    expect(result).toContain('invisible');
  });

  it('should return correct classes for tree checkbox when checked', () => {
    const result = treeselectPreset.tree.checkbox({
      context: { checked: true, focused: false },
      props: { disabled: false }
    }).class;
    expect(result).toContain('border-primary-500 bg-primary-500 dark:border-primary-400 dark:bg-primary-400');
  });

  it('should return correct classes for tree checkbox when unchecked', () => {
    const result = treeselectPreset.tree.checkbox({
      context: { checked: false, focused: false },
      props: { disabled: false }
    }).class;
    expect(result).toContain('border-surface-300 bg-surface-0 dark:border-surface-700 dark:bg-surface-900');
  });

  it('should return correct classes for tree checkbox when disabled', () => {
    const result = treeselectPreset.tree.checkbox({
      context: { checked: false, focused: false },
      props: { disabled: true }
    }).class;
    expect(result).toContain('cursor-default opacity-60');
  });

  it('should have transition configuration', () => {
    expect(treeselectPreset.transition).toMatchObject({
      enterFromClass: 'opacity-0 scale-y-[0.8]',
      enterActiveClass: 'transition-[transform,opacity] duration-[120ms] ease-[cubic-bezier(0,0,0.2,1)]',
      leaveActiveClass: 'transition-opacity duration-100 ease-linear',
      leaveToClass: 'opacity-0'
    });
  });
});
