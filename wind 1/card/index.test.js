import { describe, it, expect } from 'vitest'
import cardPreset from './index';

describe('Card Preset', () => {
  it('should have basic structure with required sections', () => {
    const requiredSections = ['root', 'header', 'body', 'content', 'footer'];
    requiredSections.forEach(section => {
      expect(cardPreset).toHaveProperty(section);
    });
  });

  it('should have correct styling classes', () => {
    // Check root element styling
    const rootClasses = cardPreset.root.class.toString();
    expect(rootClasses).toContain('rounded-lg');
    expect(rootClasses).toContain('bg-surface-0');
    
    // Check content padding
    expect(cardPreset.content.class).toBe('py-6 px-5 md:px-6');
  });
});