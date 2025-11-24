import sidebarPreset from './index';

describe('sidebarPreset', () => {
  it('should return correct classes for root with position left', () => {
    const result = sidebarPreset.root({ props: { position: 'left' } });
    expect(result.class).toEqual(
      expect.arrayContaining([
        'flex flex-col',
        'relative',
        'h-full w-full max-w-[28rem]',
        'border-0 dark:border',
        'shadow-xl',
        'bg-surface-0 dark:bg-surface-800',
        'text-surface-700 dark:text-white/80',
        'dark:border-surface-700',
        'transition-transform',
        'duration-300',
        'pointer-events-auto'
      ])
    );
  });

  it('should return correct classes for root with position full', () => {
    const result = sidebarPreset.root({ props: { position: 'full' } });
    expect(result.class).toEqual(
      expect.arrayContaining([
        'flex flex-col',
        'relative',
        '!transition-none !transform-none !w-screen !h-screen !max-h-full !top-0 !left-0'
      ])
    );
  });

  it('should return correct classes for root with position top', () => {
    const result = sidebarPreset.root({ props: { position: 'top' } });
    expect(result.class).toEqual(
      expect.arrayContaining([
        'flex flex-col',
        'relative',
        'h-auto w-full'
      ])
    );
  });

  it('should return correct classes for header', () => {
    expect(sidebarPreset.header.class).toEqual(
      expect.arrayContaining([
        'flex items-center justify-between',
        'shrink-0',
        'px-6 pt-6',
        'bg-surface-0 dark:bg-surface-800',
        'text-surface-700 dark:text-surface-0/80'
      ])
    );
  });

  it('should return correct classes for title', () => {
    expect(sidebarPreset.title.class).toEqual(
      expect.arrayContaining([
        'font-semibold leading-6 text-base m-0'
      ])
    );
  });

  it('should return correct classes for icons', () => {
    expect(sidebarPreset.icons.class).toEqual(
      expect.arrayContaining([
        'flex items-center'
      ])
    );
  });

  it('should return correct classes for closeButton', () => {
    expect(sidebarPreset.closeButton.class).toEqual(
      expect.arrayContaining([
        'relative',
        'flex items-center justify-center',
        'mr-2',
        'last:mr-0',
        'w-6 h-6',
        'border-0',
        'rounded-full',
        'text-surface-500',
        'bg-transparent',
        'transition duration-200 ease-in-out',
        'hover:text-surface-700 dark:hover:text-white/80',
        'hover:bg-surface-100 dark:hover:bg-surface-800/80',
        'focus:outline-none focus:outline-offset-0 focus:ring-1 focus:ring-inset',
        'focus:ring-primary-500 dark:focus:ring-primary-400',
        'overflow-hidden'
      ])
    );
  });

  it('should return correct classes for closeicon', () => {
    expect(sidebarPreset.closeicon.class).toEqual(
      expect.arrayContaining([
        'inline-block',
        'w-3',
        'h-3'
      ])
    );
  });

  it('should return correct classes for content', () => {
    expect(sidebarPreset.content.class).toEqual(
      expect.arrayContaining([
        'px-6 pb-6',
        'mt-6',
        'h-full',
        'w-full',
        'grow',
        'overflow-y-auto'
      ])
    );
  });

  it('should return correct classes for mask with modal true', () => {
    const result = sidebarPreset.mask({ props: { modal: true, position: 'left' } });
    expect(result.class).toEqual(
      expect.arrayContaining([
        'transition',
        'duration-200',
        'bg-surface-500/70 dark:bg-surface-700/70',
        'backdrop-blur-sm'
      ])
    );
  });

  it('should return correct classes for mask with modal false', () => {
    const result = sidebarPreset.mask({ props: { modal: false, position: 'left' } });
    expect(result.class).toEqual(
      expect.arrayContaining([
        'transition',
        'duration-200'
      ])
    );
  });

  it('should return correct transition for position top', () => {
    const result = sidebarPreset.transition({ props: { position: 'top' } });
    expect(result).toEqual({
      enterFromClass: 'translate-x-0 -translate-y-full translate-z-0',
      leaveToClass: 'translate-x-0 -translate-y-full translate-z-0'
    });
  });

  it('should return correct transition for position bottom', () => {
    const result = sidebarPreset.transition({ props: { position: 'bottom' } });
    expect(result).toEqual({
      enterFromClass: 'translate-x-0 translate-y-full translate-z-0',
      leaveToClass: 'translate-x-0 translate-y-full translate-z-0'
    });
  });

  it('should return correct transition for position left', () => {
    const result = sidebarPreset.transition({ props: { position: 'left' } });
    expect(result).toEqual({
      enterFromClass: '-translate-x-full translate-y-0 translate-z-0',
      leaveToClass: '-translate-x-full translate-y-0 translate-z-0'
    });
  });

  it('should return correct transition for position right', () => {
    const result = sidebarPreset.transition({ props: { position: 'right' } });
    expect(result).toEqual({
      enterFromClass: 'translate-x-full translate-y-0 translate-z-0',
      leaveToClass: 'translate-x-full translate-y-0 translate-z-0'
    });
  });

  it('should return correct transition for position full', () => {
    const result = sidebarPreset.transition({ props: { position: 'full' } });
    expect(result).toEqual({
      enterFromClass: 'opacity-0',
      enterActiveClass: 'transition-opacity duration-400 ease-in',
      leaveActiveClass: 'transition-opacity duration-400 ease-in',
      leaveToClass: 'opacity-0'
    });
  });
});
