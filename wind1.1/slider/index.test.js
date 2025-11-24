import sliderPreset from './index';

describe('sliderPreset', () => {
  it('should return correct classes for root with horizontal orientation', () => {
    const result = sliderPreset.root({ props: { orientation: 'horizontal', disabled: false } });
    expect(result.class).toEqual(
      expect.arrayContaining([
        'relative',
        'flex items-center',
        'h-1.5 w-full min-w-[15rem]',
        'border-0 rounded-lg',
        'bg-surface-100 dark:bg-surface-700'
      ])
    );
  });

  it('should return correct classes for root with vertical orientation', () => {
    const result = sliderPreset.root({ props: { orientation: 'vertical', disabled: false } });
    expect(result.class).toEqual(
      expect.arrayContaining([
        'relative',
        'flex items-center',
        'w-1.5 h-full min-h-[15rem]',
        'border-0 rounded-lg',
        'bg-surface-100 dark:bg-surface-700'
      ])
    );
  });

  it('should return correct classes for root when disabled', () => {
    const result = sliderPreset.root({ props: { orientation: 'horizontal', disabled: true } });
    expect(result.class).toEqual(
      expect.arrayContaining([
        'opacity-60 select-none pointer-events-none cursor-default'
      ])
    );
  });

  it('should return correct classes for range with horizontal orientation', () => {
    const result = sliderPreset.range({ props: { orientation: 'horizontal' } });
    expect(result.class).toEqual(
      expect.arrayContaining([
        'block absolute',
        'top-0 left-0',
        'h-full',
        'rounded-lg',
        'bg-primary-500 dark:bg-primary-400'
      ])
    );
  });

  it('should return correct classes for range with vertical orientation', () => {
    const result = sliderPreset.range({ props: { orientation: 'vertical' } });
    expect(result.class).toEqual(
      expect.arrayContaining([
        'block absolute',
        'bottom-0 left-0',
        'w-full',
        'rounded-lg',
        'bg-primary-500 dark:bg-primary-400'
      ])
    );
  });

  it('should return correct classes for handle with horizontal orientation', () => {
    const result = sliderPreset.handle({ props: { orientation: 'horizontal' } });
    expect(result.class).toEqual(
      expect.arrayContaining([
        'block',
        'h-4',
        'w-4',
        'top-[50%] mt-[-0.5rem] ml-[-0.5rem]',
        'rounded-full',
        'ring-2',
        'bg-surface-0 dark:bg-surface-900',
        'ring-primary-500 dark:ring-primary-400',
        'transition duration-200',
        'cursor-grab',
        'touch-action-none'
      ])
    );
  });

  it('should return correct classes for handle with vertical orientation', () => {
    const result = sliderPreset.handle({ props: { orientation: 'vertical' } });
    expect(result.class).toEqual(
      expect.arrayContaining([
        'left-[50%] mb-[-0.5rem] ml-[-0.5rem]'
      ])
    );
  });

  it('should return correct classes for starthandler with horizontal orientation', () => {
    const result = sliderPreset.starthandler({ props: { orientation: 'horizontal' } });
    expect(result.class).toEqual(
      expect.arrayContaining([
        'block',
        'h-4',
        'w-4',
        'top-[50%] mt-[-0.5rem] ml-[-0.5rem]',
        'rounded-full',
        'ring-2',
        'bg-surface-0 dark:bg-surface-900',
        'ring-primary-500 dark:ring-primary-400',
        'transition duration-200',
        'cursor-grab',
        'touch-action-none'
      ])
    );
  });

  it('should return correct classes for endhandler with vertical orientation', () => {
    const result = sliderPreset.endhandler({ props: { orientation: 'vertical' } });
    expect(result.class).toEqual(
      expect.arrayContaining([
        'block',
        'h-4',
        'w-4',
        'left-[50%] mb-[-0.5rem] ml-[-0.5rem]',
        'rounded-full',
        'ring-2',
        'bg-surface-0 dark:bg-surface-900',
        'ring-primary-500 dark:ring-primary-400',
        'transition duration-200',
        'cursor-grab',
        'touch-action-none'
      ])
    );
  });
});
