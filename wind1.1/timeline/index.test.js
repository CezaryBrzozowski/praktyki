import timelinePreset from './index';

describe('timelinePreset', () => {
  it('should return correct classes for root with vertical layout', () => {
    expect(timelinePreset.root({ props: { layout: 'vertical' } }).class).toEqual(
      expect.arrayContaining(['flex grow', 'flex-col'])
    );
  });

  it('should return correct classes for root with horizontal layout', () => {
    expect(timelinePreset.root({ props: { layout: 'horizontal' } }).class).toEqual(
      expect.arrayContaining(['flex grow', 'flex-row flex-1'])
    );
  });

  it('should return correct classes for event with align left and vertical layout', () => {
    const result = timelinePreset.event({
      props: { align: 'left', layout: 'vertical' },
      context: { index: 0 }
    }).class;
    expect(result).toEqual(expect.arrayContaining(['flex relative min-h-[70px]']));
    expect(result).not.toContain('flex-row-reverse');
  });

  it('should return correct classes for event with align right and vertical layout', () => {
    const result = timelinePreset.event({
      props: { align: 'right', layout: 'vertical' },
      context: { index: 0 }
    }).class;
    expect(result).toEqual(expect.arrayContaining(['flex relative min-h-[70px]', 'flex-row-reverse']));
  });

  it('should return correct classes for event with alternate align and odd index', () => {
    const result = timelinePreset.event({
      props: { align: 'alternate', layout: 'vertical' },
      context: { index: 1 }
    }).class;
    expect(result).toEqual(expect.arrayContaining(['flex-row-reverse']));
  });

  it('should return correct classes for event with horizontal layout', () => {
    const result = timelinePreset.event({
      props: { align: 'left', layout: 'horizontal' },
      context: { index: 0 }
    }).class;
    expect(result).toEqual(expect.arrayContaining(['flex relative min-h-[70px]', 'flex-col flex-1']));
  });

  it('should return correct classes for event with bottom align and horizontal layout', () => {
    const result = timelinePreset.event({
      props: { align: 'bottom', layout: 'horizontal' },
      context: { index: 0 }
    }).class;
    expect(result).toEqual(expect.arrayContaining(['flex relative min-h-[70px]', 'flex-col flex-1', 'flex-col-reverse ']));
  });

  it('should return correct classes for separator with vertical layout', () => {
    expect(timelinePreset.separator({ props: { layout: 'vertical' } }).class).toEqual(
      expect.arrayContaining(['flex items-center flex-initial', 'flex-col'])
    );
  });

  it('should return correct classes for separator with horizontal layout', () => {
    expect(timelinePreset.separator({ props: { layout: 'horizontal' } }).class).toEqual(
      expect.arrayContaining(['flex items-center flex-initial', 'flex-row'])
    );
  });

  it('should return correct classes for marker', () => {
    expect(timelinePreset.marker.class).toEqual(
      expect.arrayContaining([
        'flex self-baseline',
        'w-4 h-4',
        'rounded-full border-2 border-primary-500 bg-surface-0 dark:border-primary-300 dark:bg-surface-900/40'
      ])
    );
  });

  it('should return correct classes for connector with vertical layout', () => {
    expect(timelinePreset.connector({ props: { layout: 'vertical' } }).class).toEqual(
      expect.arrayContaining(['grow bg-surface-300 dark:bg-surface-700', 'w-[2px]'])
    );
  });

  it('should return correct classes for connector with horizontal layout', () => {
    expect(timelinePreset.connector({ props: { layout: 'horizontal' } }).class).toEqual(
      expect.arrayContaining(['grow bg-surface-300 dark:bg-surface-700', 'w-full h-[2px]'])
    );
  });

  it('should return correct classes for content with vertical layout and left align', () => {
    const result = timelinePreset.content({
      props: { align: 'left', layout: 'vertical' },
      context: { index: 0 }
    }).class;
    expect(result).toEqual(
      expect.arrayContaining(['flex-1', 'px-4', 'text-left'])
    );
  });

  it('should return correct classes for content with vertical layout and right align', () => {
    const result = timelinePreset.content({
      props: { align: 'right', layout: 'vertical' },
      context: { index: 0 }
    }).class;
    expect(result).toEqual(
      expect.arrayContaining(['flex-1', 'px-4', 'text-right'])
    );
  });

  it('should return correct classes for content with horizontal layout', () => {
    const result = timelinePreset.content({
      props: { align: 'left', layout: 'horizontal' },
      context: { index: 0 }
    }).class;
    expect(result).toEqual(
      expect.arrayContaining(['flex-1', 'py-4', 'text-left'])
    );
  });

  it('should return correct classes for content at last index with vertical layout', () => {
    const result = timelinePreset.content({
      props: { align: 'left', layout: 'vertical' },
      context: { index: 2, count: 3 }
    }).class;
    expect(result).toEqual(
      expect.arrayContaining(['flex-1', 'px-4', 'text-left', 'min-h-0'])
    );
  });

  it('should return correct classes for content at last index with horizontal layout', () => {
    const result = timelinePreset.content({
      props: { align: 'left', layout: 'horizontal' },
      context: { index: 2, count: 3 }
    }).class;
    expect(result).toEqual(
      expect.arrayContaining(['flex-1', 'py-4', 'text-left', 'grow-0'])
    );
  });

  it('should return correct classes for content with alternate align at even index', () => {
    const result = timelinePreset.content({
      props: { align: 'alternate', layout: 'vertical' },
      context: { index: 0, count: 3 }
    }).class;
    expect(result).toEqual(expect.arrayContaining(['text-left']));
  });

  it('should return correct classes for content with alternate align at odd index', () => {
    const result = timelinePreset.content({
      props: { align: 'alternate', layout: 'vertical' },
      context: { index: 1, count: 3 }
    }).class;
    expect(result).toEqual(expect.arrayContaining(['text-right']));
  });
});
