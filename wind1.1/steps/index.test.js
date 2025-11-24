import stepsPreset from './index';

describe('stepsPreset', () => {
  it('should return correct classes for root', () => {
    expect(stepsPreset.root.class).toBe('relative');
  });

  it('should return correct classes for menu', () => {
    expect(stepsPreset.menu.class).toBe('p-0 m-0 list-none flex justify-center');
  });

  it('should return correct classes for menuitem', () => {
    expect(stepsPreset.menuitem.class).toEqual(
      expect.arrayContaining([
        'relative',
        'flex',
        'justify-center'
      ])
    );
  });

  it('should return correct classes for action when not last item and readonly', () => {
    const model = [1, 2, 3];
    const result = stepsPreset.action({
      props: { model, readonly: true },
      context: { index: 0 },
      state: { d_activeStep: 0 }
    });
    expect(result.class).toEqual(
      expect.arrayContaining([
        'inline-flex items-start relative',
        'flex-col',
        'transition-shadow',
        'rounded-md',
        'pr-4 min-[576px]:pr-32 md:pr-40',
        'bg-surface-0',
        'dark:bg-transparent',
        'after:border-t-2',
        'after:border-surface-200 after:dark:border-surface-700',
        'after:w-full',
        'after:absolute',
        'after:top-1/2',
        'after:left-0',
        'after:transform',
        'after:-mt-3'
      ])
    );
  });

  it('should return correct classes for action when readonly false', () => {
    const model = [1, 2, 3];
    const result = stepsPreset.action({
      props: { model, readonly: false },
      context: { index: 0 },
      state: { d_activeStep: 0 }
    });
    expect(result.class).toContain('cursor-pointer');
  });

  it('should return correct classes for action when last item', () => {
    const model = [1, 2, 3];
    const result = stepsPreset.action({
      props: { model, readonly: false },
      context: { index: 2 },
      state: { d_activeStep: 0 }
    });
    expect(result.class).toContain('after:hidden');
  });

  it('should return correct classes for step when active', () => {
    const result = stepsPreset.step({
      context: { active: true, index: 0 },
      props: { readonly: false },
      state: { d_activeStep: 0 }
    });
    expect(result.class).toEqual(
      expect.arrayContaining([
        'flex items-center justify-center',
        'z-40',
        'rounded-full',
        'border-2',
        'w-[2rem]',
        'h-[2rem]',
        'text-sm',
        'leading-[2rem]',
        'border-primary-500 dark:border-primary-400',
        'text-primary-500 dark:text-primary-400',
        'transition-colors duration-200 ease-in-out'
      ])
    );
  });

  it('should return correct classes for step when not active and not completed', () => {
    const result = stepsPreset.step({
      context: { active: false, index: 2 },
      props: { readonly: false },
      state: { d_activeStep: 0 }
    });
    expect(result.class).toEqual(
      expect.arrayContaining([
        'text-surface-400 dark:text-white/60',
        'border-surface-100 dark:border-surface-700',
        'bg-surface-0 dark:bg-surface-800'
      ])
    );
  });

  it('should return correct classes for step when completed', () => {
    const result = stepsPreset.step({
      context: { active: false, index: 0 },
      props: { readonly: false },
      state: { d_activeStep: 2 }
    });
    expect(result.class).toEqual(
      expect.arrayContaining([
        'bg-primary-500 dark:bg-primary-400',
        'text-surface-0 dark:text-surface-900',
        'border-primary-500 dark:border-primary-400'
      ])
    );
  });

  it('should return correct classes for step when readonly', () => {
    const result = stepsPreset.step({
      context: { active: false, index: 0 },
      props: { readonly: true },
      state: { d_activeStep: 0 }
    });
    expect(result.class).not.toContain('hover:border-surface-300 dark:hover:border-surface-500');
  });

  it('should return correct classes for label when active', () => {
    const result = stepsPreset.label({ context: { active: true } });
    expect(result.class).toEqual(
      expect.arrayContaining([
        'relative',
        'text-sm leading-none',
        'font-medium',
        'block',
        'mt-2',
        'text-surface-800 dark:text-white/80',
        'whitespace-nowrap',
        'overflow-ellipsis',
        'max-w-full'
      ])
    );
  });

  it('should return correct classes for label when not active', () => {
    const result = stepsPreset.label({ context: { active: false } });
    expect(result.class).toEqual(
      expect.arrayContaining([
        'relative',
        'text-sm leading-none',
        'block',
        'mt-2',
        'text-surface-400 dark:text-white/60'
      ])
    );
    expect(result.class).not.toContain('font-medium');
  });
});
