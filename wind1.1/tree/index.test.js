import treePreset from './index';

describe('treePreset', () => {
  it('should return correct classes for root', () => {
    expect(treePreset.root.class).toEqual(
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
    expect(treePreset.wrapper.class).toEqual(expect.arrayContaining(['overflow-auto']));
  });

  it('should return correct classes for container', () => {
    expect(treePreset.container.class).toEqual(
      expect.arrayContaining(['m-0 p-0', 'list-none overflow-auto'])
    );
  });

  it('should return correct classes for node', () => {
    expect(treePreset.node.class).toEqual(
      expect.arrayContaining([
        'p-[2px]',
        'rounded-md',
        'focus:outline-none focus:outline-offset-0 focus:ring-2 focus:ring-inset focus:ring-primary-500 dark:focus:ring-primary-400'
      ])
    );
  });

  it('should return correct classes for content when selected', () => {
    const result = treePreset.content({
      context: { selected: true },
      props: { selectionMode: 'single' }
    }).class;
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
    const result = treePreset.content({
      context: { selected: false },
      props: { selectionMode: 'single' }
    }).class;
    expect(result).toContain('flex items-center');
    expect(result).not.toContain('bg-surface-100 text-primary-500');
  });

  it('should return correct classes for content with no selection mode', () => {
    const result = treePreset.content({
      context: { selected: false },
      props: { selectionMode: 'none' }
    }).class;
    expect(result).not.toContain('cursor-pointer select-none');
  });

  it('should return correct classes for toggler when not leaf', () => {
    const result = treePreset.toggler({
      context: { leaf: false }
    }).class;
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
    const result = treePreset.toggler({
      context: { leaf: true }
    }).class;
    expect(result).toContain('invisible');
  });

  it('should return correct classes for togglericon', () => {
    expect(treePreset.togglericon.class).toEqual(
      expect.arrayContaining(['w-4 h-4', 'text-surface-500 dark:text-white/70'])
    );
  });

  it('should return correct classes for checkboxcontainer', () => {
    expect(treePreset.checkboxcontainer.class).toBe('mr-2');
  });

  it('should return correct classes for checkbox when checked', () => {
    const result = treePreset.checkbox({
      context: { checked: true, focused: false },
      props: { disabled: false }
    }).class;
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
    const result = treePreset.checkbox({
      context: { checked: false, focused: false },
      props: { disabled: false }
    }).class;
    expect(result).toContain('border-surface-300 bg-surface-0 dark:border-surface-700 dark:bg-surface-900');
  });

  it('should return correct classes for checkbox when focused', () => {
    const result = treePreset.checkbox({
      context: { checked: false, focused: true },
      props: { disabled: false }
    }).class;
    expect(result).toContain('ring-2 ring-primary-500 dark:ring-primary-400');
  });

  it('should return correct classes for checkbox when disabled', () => {
    const result = treePreset.checkbox({
      context: { checked: false, focused: false },
      props: { disabled: true }
    }).class;
    expect(result).toContain('cursor-default opacity-60');
  });

  it('should return correct classes for checkboxicon', () => {
    expect(treePreset.checkboxicon.class).toEqual(
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
    expect(treePreset.nodeicon.class).toEqual(
      expect.arrayContaining(['mr-2', 'text-surface-600 dark:text-white/70'])
    );
  });

  it('should return correct classes for subgroup', () => {
    expect(treePreset.subgroup.class).toEqual(expect.arrayContaining(['m-0 list-none p-0 pl-2 mt-1']));
  });

  it('should return correct classes for filtercontainer', () => {
    expect(treePreset.filtercontainer.class).toEqual(
      expect.arrayContaining(['relative block', 'mb-2', 'w-full'])
    );
  });

  it('should return correct classes for input', () => {
    expect(treePreset.input.class).toContain('relative');
    expect(treePreset.input.class).toContain('font-sans leading-6');
    expect(treePreset.input.class).toContain('sm:text-sm');
    expect(treePreset.input.class).toContain('m-0');
    expect(treePreset.input.class).toContain('py-1.5 px-3 pr-10');
    expect(treePreset.input.class).toContain('w-full');
    expect(treePreset.input.class).toContain('rounded-md');
  });

  it('should return correct classes for loadingicon', () => {
    expect(treePreset.loadingicon.class).toEqual(
      expect.arrayContaining([
        'text-surface-500 dark:text-surface-0/70',
        'absolute top-[50%] right-[50%] -mt-2 -mr-2 animate-spin'
      ])
    );
  });

  it('should return correct classes for searchicon', () => {
    expect(treePreset.searchicon.class).toEqual(
      expect.arrayContaining([
        'absolute top-1/2 -mt-2 right-3',
        'text-surface-600 dark:hover:text-white/70'
      ])
    );
  });
});
