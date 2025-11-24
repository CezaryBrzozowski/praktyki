import scrolltopPreset from './index';

describe('scrolltopPreset', () => {
  it('should return correct classes for parent target', () => {
    const result = scrolltopPreset.root({ props: { target: 'parent' } });
    expect(result.class).toEqual(
      expect.arrayContaining([
        'flex items-center justify-center',
        'sticky',
        'bottom-[20px] right-[20px]',
        'ml-auto',
        'rounded-md h-8 w-8',
        'text-white dark:text-surface-900',
        'bg-primary-500 dark:bg-primary-400 hover:bg-primary-600 dark:hover:bg-primary-300',
        'hover:bg-primary-600 dark:hover:bg-primary-300'
      ])
    );
  });

  it('should return correct classes for window target', () => {
    const result = scrolltopPreset.root({ props: { target: 'window' } });
    expect(result.class).toEqual(
      expect.arrayContaining([
        'flex items-center justify-center',
        'fixed',
        'bottom-[20px] right-[20px]',
        'ml-auto',
        'h-12 w-12 rounded-full shadow-md',
        'text-white dark:text-surface-900',
        'bg-surface-500 dark:bg-surface-400 hover:bg-surface-600 dark:hover:bg-surface-300',
        'hover:bg-surface-600 dark:hover:bg-surface-300'
      ])
    );
  });

  it('should have correct transition classes', () => {
    expect(scrolltopPreset.transition).toEqual({
      enterFromClass: 'opacity-0',
      enterActiveClass: 'transition-opacity duration-150',
      leaveActiveClass: 'transition-opacity duration-150',
      leaveToClass: 'opacity-0'
    });
  });
});
