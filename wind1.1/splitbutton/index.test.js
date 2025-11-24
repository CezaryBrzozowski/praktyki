import splitbuttonPreset from './index';

describe('splitbuttonPreset', () => {
  it('should return correct classes for root without raised', () => {
    const result = splitbuttonPreset.root({ props: { raised: false } });
    expect(result.class).toEqual(
      expect.arrayContaining([
        'inline-flex',
        'relative',
        'rounded-md'
      ])
    );
    expect(result.class).not.toContain('shadow-lg');
  });

  it('should return correct classes for root with raised', () => {
    const result = splitbuttonPreset.root({ props: { raised: true } });
    expect(result.class).toEqual(
      expect.arrayContaining([
        'inline-flex',
        'relative',
        'rounded-md',
        'shadow-lg'
      ])
    );
  });

  it('should return correct classes for button root', () => {
    const parentProps = {
      size: null,
      label: 'Test',
      rounded: false,
      link: false,
      plain: false,
      outlined: false,
      text: false,
      severity: null
    };
    const result = splitbuttonPreset.button.root({ parent: { props: parentProps } });
    expect(result.class).toEqual(
      expect.arrayContaining([
        'relative',
        'items-center inline-flex text-center align-bottom justify-center',
        'text-sm',
        'px-2.5 py-1.5 min-w-[2rem]',
        'rounded-r-none',
        'border-r-0'
      ])
    );
  });

  it('should return correct classes for button icon', () => {
    expect(splitbuttonPreset.button.icon.class).toEqual(
      expect.arrayContaining([
        'mr-2'
      ])
    );
  });

  it('should return correct classes for menubutton root', () => {
    const parentProps = {
      size: null,
      label: 'Test',
      rounded: false,
      link: false,
      plain: false,
      outlined: false,
      text: false,
      severity: null
    };
    const result = splitbuttonPreset.menubutton.root({ parent: { props: parentProps } });
    expect(result.class).toEqual(
      expect.arrayContaining([
        'relative',
        'items-center inline-flex text-center align-bottom justify-center',
        'text-sm',
        'ml-[1px]',
        'rounded-l-none'
      ])
    );
  });

  it('should return correct classes for menubutton label', () => {
    expect(splitbuttonPreset.menubutton.label.class).toEqual(['hidden']);
  });

  it('should handle small size for button', () => {
    const parentProps = {
      size: 'small',
      label: 'Test',
      rounded: false,
      link: false,
      plain: false,
      outlined: false,
      text: false,
      severity: null
    };
    const result = splitbuttonPreset.button.root({ parent: { props: parentProps } });
    expect(result.class).toContain('px-2 py-1');
  });

  it('should handle large size for button', () => {
    const parentProps = {
      size: 'large',
      label: 'Test',
      rounded: false,
      link: false,
      plain: false,
      outlined: false,
      text: false,
      severity: null
    };
    const result = splitbuttonPreset.button.root({ parent: { props: parentProps } });
    expect(result.class).toContain('px-3 py-2');
  });

  it('should apply rounded-full when rounded is true', () => {
    const parentProps = {
      size: null,
      label: 'Test',
      rounded: true,
      link: false,
      plain: false,
      outlined: false,
      text: false,
      severity: null
    };
    const result = splitbuttonPreset.button.root({ parent: { props: parentProps } });
    expect(result.class).toContain('rounded-l-full');
  });

  it('should apply primary colors when severity is null', () => {
    const parentProps = {
      size: null,
      label: 'Test',
      rounded: false,
      link: false,
      plain: false,
      outlined: false,
      text: false,
      severity: null
    };
    const result = splitbuttonPreset.button.root({ parent: { props: parentProps } });
    expect(result.class).toEqual(
      expect.arrayContaining([
        'text-white dark:text-surface-900',
        'bg-primary-500 dark:bg-primary-400',
        'ring-1 ring-primary-500 dark:ring-primary-400'
      ])
    );
  });

  it('should apply secondary colors when severity is secondary', () => {
    const parentProps = {
      size: null,
      label: 'Test',
      rounded: false,
      link: false,
      plain: false,
      outlined: false,
      text: false,
      severity: 'secondary'
    };
    const result = splitbuttonPreset.button.root({ parent: { props: parentProps } });
    expect(result.class).toEqual(
      expect.arrayContaining([
        'text-white dark:text-surface-900',
        'bg-surface-500 dark:bg-surface-400'
      ])
    );
  });
});
