import { describe, it, expect } from 'vitest';
import preset from './index.js';

describe('Preset wind/multiselect', () => {
  it('powinien posiadać root będący funkcją zwracającą odpowiednie klasy, w tym obsługę focused i disabled', () => {
    expect(typeof preset.root).toBe('function');
    const unfocused = preset.root({ props: { disabled: false }, state: { focused: false } });
    const focused = preset.root({ props: { disabled: false }, state: { focused: true } });
    const disabled = preset.root({ props: { disabled: true }, state: { focused: false } });
    const getObjs = (arr) => arr.class.filter((el) => typeof el === 'object' && el !== null);
    const unfocusedObjs = getObjs(unfocused);
    const focusedObjs = getObjs(focused);
    const disabledObjs = getObjs(disabled);
    // Sprawdź ring unfocused
    expect(unfocused.class).toContain('inline-flex');
    expect(unfocused.class).toContain('w-full');
    expect(unfocused.class).toContain('bg-surface-0 dark:bg-surface-900');
    expect(unfocusedObjs.some(obj => obj['ring-1 ring-inset ring-surface-300 dark:ring-surface-700'])).toBe(true);
    // Sprawdź ring focused
    expect(focusedObjs.some(obj => obj['ring-2 ring-inset ring-primary-500 dark:ring-primary-400'])).toBe(true);
    // Sprawdź disabled
    expect(disabledObjs.some(obj => obj['opacity-60'])).toBe(true);
    expect(disabledObjs.some(obj => obj['pointer-events-none'])).toBe(true);
  });

  it('powinien posiadać labelContainer z odpowiednimi klasami', () => {
    expect(preset.labelContainer).toBeDefined();
    expect(preset.labelContainer.class).toContain('overflow-hidden flex flex-auto cursor-pointer');
  });

  it('powinien posiadać label będący funkcją zwracającą odpowiednie klasy', () => {
    expect(typeof preset.label).toBe('function');
    const withValue = preset.label({ props: { modelValue: [1], display: 'chip' } });
    const noValue = preset.label({ props: { modelValue: null, display: '' } });
    const getObjs = (arr) => arr.class.filter((el) => typeof el === 'object' && el !== null);
    expect(withValue.class).toContain('py-1 px-3');
    expect(noValue.class).toContain('py-1.5 px-3');
    expect(getObjs(withValue).some(obj => obj['text-surface-800 dark:text-white/80'])).toBe(true);
    expect(getObjs(noValue).some(obj => obj['text-surface-400 dark:text-surface-500'])).toBe(true);
  });

  it('powinien posiadać token z odpowiednimi klasami', () => {
    expect(preset.token).toBeDefined();
    expect(preset.token.class).toContain('inline-flex items-center');
    expect(preset.token.class).toContain('rounded-[1.14rem]');
    expect(preset.token.class).toContain('bg-surface-200 dark:bg-surface-700');
  });

  it('powinien posiadać removeTokenIcon z odpowiednimi klasami', () => {
    expect(preset.removeTokenIcon).toBeDefined();
    expect(preset.removeTokenIcon.class).toContain('rounded-md leading-6');
    expect(preset.removeTokenIcon.class).toContain('w-4 h-4');
    expect(preset.removeTokenIcon.class).toContain('cursor-pointer');
  });

  it('powinien posiadać trigger z odpowiednimi klasami', () => {
    expect(preset.trigger).toBeDefined();
    expect(preset.trigger.class).toContain('flex items-center justify-center');
    expect(preset.trigger.class).toContain('w-12');
    expect(preset.trigger.class).toContain('rounded-tr-md');
  });

  it('powinien posiadać panel z odpowiednimi klasami', () => {
    expect(preset.panel).toBeDefined();
    expect(preset.panel.class).toContain('absolute top-0 left-0');
    expect(preset.panel.class).toContain('bg-surface-0 dark:bg-surface-800');
    expect(preset.panel.class).toContain('ring-1 ring-inset ring-surface-300 dark:ring-surface-700');
  });

  it('powinien posiadać header z odpowiednimi klasami', () => {
    expect(preset.header).toBeDefined();
    expect(preset.header.class).toContain('flex items-center justify-between');
    expect(preset.header.class).toContain('border');
    expect(preset.header.class).toContain('bg-surface-50 dark:bg-surface-800');
  });

  it('powinien posiadać headerCheckboxContainer z odpowiednimi klasami', () => {
    expect(preset.headerCheckboxContainer).toBeDefined();
    expect(preset.headerCheckboxContainer.class).toContain('relative');
    expect(preset.headerCheckboxContainer.class).toContain('inline-flex');
    expect(preset.headerCheckboxContainer.class).toContain('w-4');
  });

  it('powinien posiadać headerCheckbox będący funkcją zwracającą odpowiednie klasy', () => {
    expect(typeof preset.headerCheckbox).toBe('function');
    const notSelected = preset.headerCheckbox({ context: { selected: false }, state: { focused: false } });
    const selected = preset.headerCheckbox({ context: { selected: true }, state: { focused: false } });
    const focused = preset.headerCheckbox({ context: { selected: false }, state: { focused: true } });
    const getObjs = (arr) => arr.class.filter((el) => typeof el === 'object' && el !== null);
    expect(getObjs(notSelected).some(obj => obj['border-surface-300 bg-surface-0 dark:border-surface-700 dark:bg-surface-900'])).toBe(true);
    expect(getObjs(selected).some(obj => obj['border-primary-500 bg-primary-500 dark:border-primary-400 dark:bg-primary-400'])).toBe(true);
    expect(getObjs(focused).some(obj => obj['outline-offset-0 ring-1 ring-primary-500 dark:ring-primary-400'])).toBe(true);
  });

  it('powinien posiadać headercheckboxicon z odpowiednimi klasami', () => {
    expect(preset.headercheckboxicon).toBeDefined();
    expect(preset.headercheckboxicon.class).toContain('w-3');
    expect(preset.headercheckboxicon.class).toContain('text-white dark:text-surface-900');
  });

  it('powinien posiadać closeButton z odpowiednimi klasami', () => {
    expect(preset.closeButton).toBeDefined();
    expect(preset.closeButton.class).toContain('flex items-center justify-center');
    expect(preset.closeButton.class).toContain('rounded-full');
    expect(preset.closeButton.class).toContain('hover:text-surface-700 dark:hover:text-white/80');
  });

  it('powinien posiadać closeButtonIcon z odpowiednimi klasami', () => {
    expect(preset.closeButtonIcon).toBeDefined();
    expect(preset.closeButtonIcon.class).toContain('inline-block');
    expect(preset.closeButtonIcon.class).toContain('w-3');
  });

  it('powinien posiadać wrapper z odpowiednimi klasami', () => {
    expect(preset.wrapper).toBeDefined();
    expect(preset.wrapper.class).toContain('max-h-[15rem]');
    expect(preset.wrapper.class).toContain('overflow-auto');
  });

  it('powinien posiadać list z odpowiednimi klasami', () => {
    expect(preset.list).toBeDefined();
    expect(preset.list.class).toContain('py-1 list-none m-0');
  });

  it('powinien posiadać item będący funkcją zwracającą odpowiednie klasy', () => {
    expect(typeof preset.item).toBe('function');
    const normal = preset.item({ context: { selected: false, focused: false } });
    const selected = preset.item({ context: { selected: true, focused: false } });
    const focused = preset.item({ context: { selected: false, focused: true } });
    const both = preset.item({ context: { selected: true, focused: true } });
    const getObjs = (arr) => arr.class.filter((el) => typeof el === 'object' && el !== null);
    expect(getObjs(normal).some(obj => obj['font-normal'])).toBe(true);
    expect(getObjs(selected).some(obj => obj['font-bold'])).toBe(true);
    expect(getObjs(focused).some(obj => obj['bg-surface-200 dark:bg-surface-600/60 text-surface-700 dark:text-white/80'])).toBe(true);
    expect(getObjs(both).some(obj => obj['bg-primary-500 dark:bg-primary-400 text-white dark:text-surface-700'])).toBe(true);
  });

  it('powinien posiadać option będący funkcją zwracającą odpowiednie klasy', () => {
    expect(typeof preset.option).toBe('function');
    const opt = preset.option({ context: {} });
    expect(opt.class).toContain('ml-2');
  });

  it('powinien posiadać checkboxContainer z odpowiednimi klasami', () => {
    expect(preset.checkboxContainer).toBeDefined();
    expect(preset.checkboxContainer.class).toContain('relative');
    expect(preset.checkboxContainer.class).toContain('inline-flex');
    expect(preset.checkboxContainer.class).toContain('w-4');
  });

  it('powinien posiadać checkbox będący funkcją zwracającą odpowiednie klasy', () => {
    expect(typeof preset.checkbox).toBe('function');
    const notSelected = preset.checkbox({ context: { selected: false } });
    const selected = preset.checkbox({ context: { selected: true } });
    const getObj = (arr) => arr.class.find((el) => typeof el === 'object' && el !== null);
    expect(getObj(notSelected)['border-surface-300 bg-surface-0 dark:border-surface-700 dark:bg-surface-900']).toBe(true);
    expect(getObj(selected)['border-primary-400 bg-primary-500 dark:border-primary-300 dark:bg-primary-400']).toBe(true);
  });

  it('powinien posiadać checkboxicon z odpowiednimi klasami', () => {
    expect(preset.checkboxicon).toBeDefined();
    expect(preset.checkboxicon.class).toContain('w-3');
    expect(preset.checkboxicon.class).toContain('text-white dark:text-surface-900');
  });

  it('powinien posiadać itemgroup z odpowiednimi klasami', () => {
    expect(preset.itemgroup).toBeDefined();
    expect(preset.itemgroup.class).toContain('font-bold');
    expect(preset.itemgroup.class).toContain('bg-surface-0 dark:bg-surface-600/80');
  });

  it('powinien posiadać filtercontainer z odpowiednimi klasami', () => {
    expect(preset.filtercontainer).toBeDefined();
    expect(preset.filtercontainer.class).toContain('relative w-full mr-2 ml-2');
  });

  it('powinien posiadać filterinput z odpowiednimi klasami', () => {
    expect(preset.filterinput).toBeDefined();
    expect(preset.filterinput.class).toContain('font-sans');
    expect(preset.filterinput.class).toContain('w-full');
    expect(preset.filterinput.class).toContain('rounded-md');
  });

  it('powinien posiadać filtericon z odpowiednimi klasami', () => {
    expect(preset.filtericon).toBeDefined();
    expect(preset.filtericon.class).toContain('absolute');
    expect(preset.filtericon.class).toContain('top-1/2 right-3');
  });

  it('powinien posiadać clearicon z odpowiednimi klasami', () => {
    expect(preset.clearicon).toBeDefined();
    expect(preset.clearicon.class).toContain('text-surface-500');
    expect(preset.clearicon.class).toContain('absolute');
  });

  it('powinien posiadać emptymessage z odpowiednimi klasami', () => {
    expect(preset.emptymessage).toBeDefined();
    expect(preset.emptymessage.class).toContain('leading-none');
    expect(preset.emptymessage.class).toContain('bg-transparent');
  });

  it('powinien posiadać transition z odpowiednimi klasami', () => {
    expect(preset.transition).toBeDefined();
    expect(preset.transition.enterFromClass).toBe('opacity-0 scale-y-[0.8]');
    expect(preset.transition.enterActiveClass).toBe('transition-[transform,opacity] duration-[120ms] ease-[cubic-bezier(0,0,0.2,1)]');
    expect(preset.transition.leaveActiveClass).toBe('transition-opacity duration-100 ease-linear');
    expect(preset.transition.leaveToClass).toBe('opacity-0');
  });
});
