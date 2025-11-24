import tabviewPreset from './index';

describe('tabviewPreset', () => {
  it('should return correct classes for navContainer without scrollable', () => {
    const result = tabviewPreset.navContainer({ props: { scrollable: false } });
    expect(result.class).toEqual(
      expect.arrayContaining([
        'relative'
      ])
    );
    expect(result.class).not.toContain('overflow-hidden');
  });

  it('should return correct classes for navContainer with scrollable', () => {
    const result = tabviewPreset.navContainer({ props: { scrollable: true } });
    expect(result.class).toEqual(
      expect.arrayContaining([
        'relative',
        'overflow-hidden'
      ])
    );
  });

  it('should return correct classes for navContent', () => {
    expect(tabviewPreset.navContent.class).toEqual(
      expect.arrayContaining([
        'overflow-y-hidden overscroll-contain',
        'overscroll-auto',
        'scroll-smooth',
        '[&::-webkit-scrollbar]:hidden'
      ])
    );
  });

  it('should return correct classes for previousButton', () => {
    expect(tabviewPreset.previousButton.class).toEqual(
      expect.arrayContaining([
        'flex items-center justify-center',
        '!absolute',
        'top-0 left-0',
        'z-20',
        'h-full w-12',
        'rounded-none',
        'bg-surface-0 dark:bg-surface-800',
        'text-primary-500 dark:text-primary-400',
        'shadow-md'
      ])
    );
  });

  it('should return correct classes for nextButton', () => {
    expect(tabviewPreset.nextButton.class).toEqual(
      expect.arrayContaining([
        'flex items-center justify-center',
        '!absolute',
        'top-0 right-0',
        'z-20',
        'h-full w-12',
        'rounded-none',
        'bg-surface-0 dark:bg-surface-800',
        'text-primary-500 dark:text-primary-400',
        'shadow-md'
      ])
    );
  });

  it('should return correct classes for nav', () => {
    expect(tabviewPreset.nav.class).toEqual(
      expect.arrayContaining([
        'flex flex-1',
        'list-none',
        'p-0 m-0',
        'bg-surface-0 dark:bg-surface-800',
        'border-b-2 border-surface-200 dark:border-surface-700',
        'text-surface-900 dark:text-surface-0/80'
      ])
    );
  });

  it('should return correct classes for header when enabled', () => {
    const result = tabviewPreset.tabpanel.header({ props: { disabled: false } });
    expect(result.class).toEqual(
      expect.arrayContaining([
        'mr-0'
      ])
    );
    expect(result.class).not.toContain('opacity-60 cursor-default user-select-none select-none pointer-events-none');
  });

  it('should return correct classes for header when disabled', () => {
    const result = tabviewPreset.tabpanel.header({ props: { disabled: true } });
    expect(result.class).toEqual(
      expect.arrayContaining([
        'mr-0',
        'opacity-60 cursor-default user-select-none select-none pointer-events-none'
      ])
    );
  });

  it('should return correct classes for headerAction when not active', () => {
    const result = tabviewPreset.tabpanel.headerAction({
      parent: { state: { d_activeIndex: 1 } },
      context: { index: 0 }
    });
    expect(result.class).toEqual(
      expect.arrayContaining([
        'relative',
        'font-medium',
        'text-md',
        'flex items-center',
        'py-4 px-3',
        '-mb-[1px]',
        'border-b-2',
        'rounded-t-md',
        'border-surface-200 dark:border-surface-700',
        'text-surface-700 dark:text-surface-0/80',
        'focus-visible:outline-none focus-visible:outline-offset-0 focus-visible:ring focus-visible:ring-inset',
        'focus-visible:ring-primary-400/50 dark:focus-visible:ring-primary-300/50',
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
  });

  it('should return correct classes for headerAction when active', () => {
    const result = tabviewPreset.tabpanel.headerAction({
      parent: { state: { d_activeIndex: 0 } },
      context: { index: 0 }
    });
    expect(result.class).toEqual(
      expect.arrayContaining([
        'relative',
        'font-medium',
        'text-md',
        'flex items-center',
        'py-4 px-3',
        '-mb-[1px]',
        'border-b-2',
        'rounded-t-md',
        'border-primary-500 dark:border-primary-400',
        'text-primary-500 dark:text-primary-400'
      ])
    );
  });

  it('should return correct classes for headerTitle', () => {
    expect(tabviewPreset.tabpanel.headerTitle.class).toEqual(
      expect.arrayContaining([
        'leading-none',
        'whitespace-nowrap'
      ])
    );
  });

  it('should return correct classes for content', () => {
    expect(tabviewPreset.tabpanel.content.class).toEqual(
      expect.arrayContaining([
        'p-0',
        'rounded-b-md',
        'bg-surface-0 dark:bg-surface-800',
        'text-surface-700 dark:text-surface-0/80',
        'border-0'
      ])
    );
  });
});
