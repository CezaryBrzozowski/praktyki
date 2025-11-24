import { describe, it, expect } from 'vitest'
import preset from './index';

describe('CascadeSelect Wind Preset', () => {
  describe('root', () => {
    it('should return correct base classes', () => {
      const props = {};
      const state = { focused: false };
      
      const result = preset.root({ props, state });
      
      expect(result.class).toContain('inline-flex');
      expect(result.class).toContain('relative');
      expect(result.class).toContain('w-full md:w-56');
      expect(result.class).toContain('rounded-md');
    });

    it('should apply focused state correctly', () => {
      const props = {};
      const state = { focused: true };
      
      const result = preset.root({ props, state });
      
      // Check if the focused state object is present
      const focusedStateObj = result.class.find(c => 
        typeof c === 'object' && 'ring-2 ring-inset ring-primary-500 dark:ring-primary-400' in c
      );
      expect(focusedStateObj).toBeTruthy();
      expect(focusedStateObj['ring-2 ring-inset ring-primary-500 dark:ring-primary-400']).toBe(true);
    });

    it('should apply disabled state correctly', () => {
      const props = { disabled: true };
      const state = { focused: false };
      
      const result = preset.root({ props, state });
      
      // Check if the disabled state object is present
      const disabledStateObj = result.class.find(c => 
        typeof c === 'object' && 'opacity-60' in c && 'pointer-events-none' in c
      );
      expect(disabledStateObj).toBeTruthy();
      expect(disabledStateObj['opacity-60']).toBe(true);
      expect(disabledStateObj['pointer-events-none']).toBe(true);
    });
  });

  describe('label', () => {
    it('should return correct base classes', () => {
      const props = { modelValue: null };
      
      const result = preset.label({ props });
      
      expect(result.class).toContain('font-sans');
      expect(result.class).toContain('leading-6');
      expect(result.class).toContain('sm:text-sm');
    });

    it('should apply correct text color when value is set', () => {
      const props = { modelValue: 'test' };
      
      const result = preset.label({ props });
      
      const textColorObj = result.class.find(c =>
        typeof c === 'object' && 'text-surface-800 dark:text-white/80' in c
      );
      expect(textColorObj).toBeTruthy();
      expect(textColorObj['text-surface-800 dark:text-white/80']).toBe('test');
    });

    it('should apply correct text color when value is not set', () => {
      const props = { modelValue: null };
      
      const result = preset.label({ props });
      
      const textColorObj = result.class.find(c =>
        typeof c === 'object' && 'text-surface-400 dark:text-surface-500' in c
      );
      expect(textColorObj).toBeTruthy();
      expect(textColorObj['text-surface-400 dark:text-surface-500']).toBe(true);
    });
  });

  describe('dropdownbutton', () => {
    it('should have correct static classes', () => {
      expect(preset.dropdownbutton.class).toContain('sm:text-sm');
      expect(preset.dropdownbutton.class).toContain('flex items-center justify-center');
      expect(preset.dropdownbutton.class).toContain('text-surface-500');
    });
  });
});