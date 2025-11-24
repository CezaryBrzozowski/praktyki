import toastPreset from './index';

describe('toastPreset', () => {
  it('should return correct classes for root with top-center position', () => {
    expect(toastPreset.root({ props: { position: 'top-center' } }).class).toEqual(
      expect.arrayContaining(['w-96 rounded-md', '-translate-x-2/4'])
    );
  });

  it('should return correct classes for root with bottom-center position', () => {
    expect(toastPreset.root({ props: { position: 'bottom-center' } }).class).toEqual(
      expect.arrayContaining(['w-96 rounded-md', '-translate-x-2/4'])
    );
  });

  it('should return correct classes for root with top-left position', () => {
    const result = toastPreset.root({ props: { position: 'top-left' } }).class;
    expect(result).toEqual(expect.arrayContaining(['w-96 rounded-md']));
    expect(result).not.toContain('-translate-x-2/4');
  });

  it('should return correct classes for container with info severity', () => {
    expect(
      toastPreset.container({
        props: { message: { severity: 'info' } }
      }).class
    ).toEqual(
      expect.arrayContaining([
        'my-4 rounded-md w-full',
        'shadow-lg',
        'bg-surface-0 dark:bg-surface-800',
        'ring-1 ring-inset ring-surface-200 dark:ring-surface-700 ring-offset-0',
        'text-blue-500 dark:text-blue-300'
      ])
    );
  });

  it('should return correct classes for container with success severity', () => {
    expect(
      toastPreset.container({
        props: { message: { severity: 'success' } }
      }).class
    ).toEqual(
      expect.arrayContaining([
        'my-4 rounded-md w-full',
        'shadow-lg',
        'text-green-500 dark:text-green-300'
      ])
    );
  });

  it('should return correct classes for container with warn severity', () => {
    expect(
      toastPreset.container({
        props: { message: { severity: 'warn' } }
      }).class
    ).toEqual(
      expect.arrayContaining([
        'my-4 rounded-md w-full',
        'shadow-lg',
        'text-orange-500 dark:text-orange-300'
      ])
    );
  });

  it('should return correct classes for container with error severity', () => {
    expect(
      toastPreset.container({
        props: { message: { severity: 'error' } }
      }).class
    ).toEqual(
      expect.arrayContaining([
        'my-4 rounded-md w-full',
        'shadow-lg',
        'text-red-500 dark:text-red-300'
      ])
    );
  });

  it('should return correct classes for content', () => {
    expect(toastPreset.content.class).toEqual('flex items-start p-4');
  });

  it('should return correct classes for icon', () => {
    expect(toastPreset.icon.class).toEqual(
      expect.arrayContaining(['w-5 h-5', 'mr-2 shrink-0'])
    );
  });

  it('should return correct classes for text', () => {
    expect(toastPreset.text.class).toEqual(
      expect.arrayContaining(['text-sm leading-none', 'ml-2', 'flex-1'])
    );
  });

  it('should return correct classes for summary', () => {
    expect(toastPreset.summary.class).toBe('font-medium block');
  });

  it('should return correct classes for detail', () => {
    expect(toastPreset.detail.class).toBe('mt-1.5 block text-surface-600 dark:text-surface-0/70');
  });

  it('should return correct classes for closebutton', () => {
    expect(toastPreset.closebutton.class).toEqual(
      expect.arrayContaining([
        'flex items-center justify-center',
        'w-6 h-6',
        'ml-auto relative',
        'rounded-full',
        'bg-transparent',
        'text-surface-700 dark:text-surface-0/80',
        'transition duration-200 ease-in-out',
        'hover:bg-surface-100 dark:hover:bg-surface-700',
        'outline-none focus:ring-1 focus:ring-inset',
        'focus:ring-primary-500 dark:focus:ring-primary-400',
        'overflow-hidden'
      ])
    );
  });

  it('should return correct classes for closeicon', () => {
    expect(toastPreset.closeicon.class).toEqual(
      expect.arrayContaining(['w-3 h-3', 'shrink-0'])
    );
  });

  it('should have correct transition configuration', () => {
    expect(toastPreset.transition).toMatchObject({
      enterFromClass: 'opacity-0 translate-y-2/4',
      enterActiveClass: 'transition-[transform,opacity] duration-300',
      leaveFromClass: 'max-h-[1000px]',
      leaveActiveClass: '!transition-[max-height_.45s_cubic-bezier(0,1,0,1),opacity_.3s,margin-bottom_.3s] overflow-hidden',
      leaveToClass: 'max-h-0 opacity-0 mb-0'
    });
  });
});
