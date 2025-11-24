import { describe, it, expect } from 'vitest'
import toolbarPreset from './index';

describe('toolbarPreset', () => {
  it('should return correct classes for root', () => {
    expect(toolbarPreset.root.class).toEqual(
      expect.arrayContaining(['flex items-center justify-between flex-wrap gap-6 my-4'])
    );
  });

  it('should return correct classes for start', () => {
    expect(toolbarPreset.start.class).toBe('flex items-center gap-3');
  });

  it('should return correct classes for center', () => {
    expect(toolbarPreset.center.class).toBe('flex items-center gap-3');
  });

  it('should return correct classes for end', () => {
    expect(toolbarPreset.end.class).toBe('flex items-center gap-3');
  });

  it('should have all required sections', () => {
    expect(toolbarPreset).toHaveProperty('root');
    expect(toolbarPreset).toHaveProperty('start');
    expect(toolbarPreset).toHaveProperty('center');
    expect(toolbarPreset).toHaveProperty('end');
  });
});
