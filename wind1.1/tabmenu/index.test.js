import tabmenuPreset from './index';

describe('tabmenuPreset', () => {
  it('should return correct classes for root', () => {
    expect(tabmenuPreset.root.class).toBe('overflow-x-auto');
  });

  it('should return correct classes for menu', () => {
    expect(tabmenuPreset.menu.class).toEqual(
      expect.arrayContaining([
        'flex flex-1',
        'list-none',
        'p-0 m-0',
        'bg-surface-0 dark:bg-surface-800',
        'border-b border-surface-200 dark:border-surface-700',
        'text-surface-900 dark:text-surface-0/80'
      ])
    );
  });

  it('should return correct classes for menuitem', () => {
    expect(tabmenuPreset.menuitem.class).toBe('mr-0');
  });

  it('should return correct classes for icon', () => {
    expect(tabmenuPreset.icon.class).toBe('mr-2');
  });

  it('should return correct classes for action when not active', () => {
    const result = tabmenuPreset.action({
      context: { index: 0 },
      state: { d_activeIndex: 1 }
    });
    expect(result.class).toEqual(
      expect.arrayContaining([
        'relative',
        'font-medium',
        'text-md',
        'flex items-center',
        'py-4 px-3',
        '-mb-[1px]',
        'border-b',
        'rounded-t-md',
        'border-surface-200 dark:border-surface-700',
        'text-surface-700 dark:text-surface-0/80',
        'focus-visible:outline-none focus-visible:outline-offset-0 focus-visible:ring-2 focus-visible:ring-inset',
        'focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400',
        'hover:bg-surface-0 dark:hover:bg-surface-800/80',
        'hover:border-surface-400 dark:hover:border-surface-600',
        'hover:text-surface-900 dark:hover:text-surface-0',
        'transition-all duration-200',
        'cursor-pointer select-none text-decoration-none',
        'overflow-hidden',
        'user-select-none',
        'whitespace-nowrap'
      ])
    );
    expect(result.class).not.toContain('border-primary-500 dark:border-primary-400');
    expect(result.class).not.toContain('text-primary-500 dark:text-primary-400');
  });

  it('should return correct classes for action when active', () => {
    const result = tabmenuPreset.action({
      context: { index: 0 },
      state: { d_activeIndex: 0 }
    });
    expect(result.class).toEqual(
      expect.arrayContaining([
        'relative',
        'font-medium',
        'text-md',
        'flex items-center',
        'py-4 px-3',
        '-mb-[1px]',
        'border-b',
        'rounded-t-md',
        'bg-surface-0 dark:bg-surface-800',
        'border-primary-500 dark:border-primary-400',
        'text-primary-500 dark:text-primary-400'
      ])
    );
  });

  it('should not include hover classes when active', () => {
    const result = tabmenuPreset.action({
      context: { index: 0 },
      state: { d_activeIndex: 0 }
    });
    expect(result.class).not.toContain('hover:bg-surface-0 dark:hover:bg-surface-800/80');
    expect(result.class).not.toContain('hover:border-surface-400 dark:hover:border-surface-600');
  });
});
