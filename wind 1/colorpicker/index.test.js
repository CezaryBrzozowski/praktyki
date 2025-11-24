import { describe, it, expect } from 'vitest'
import ColorPicker from './index.js'

const classesOf = (x) => JSON.stringify(x)

describe('ColorPicker preset', () => {
  describe('root', () => {
    it('ma podstawowe style', () => {
      const result = ColorPicker.root({ props: {} })
      expect(classesOf(result.class)).toContain('inline-block')
    })

    it('ma style gdy disabled', () => {
      const result = ColorPicker.root({ props: { disabled: true } })
      const cs = classesOf(result.class)
      expect(cs).toContain('opacity-60')
      expect(cs).toContain('pointer-events-none')
    })
  })

  describe('input', () => {
    it('input ma podstawowe klasy i rozmiar', () => {
      const cs = classesOf(ColorPicker.input.class)
      expect(cs).toContain('font-sans')
      expect(cs).toContain('w-5')
      expect(cs).toContain('h-5')
    })

    it('input ma hover i focus klasy', () => {
      const cs = classesOf(ColorPicker.input.class)
      expect(cs).toContain('hover:border-primary-500')
      expect(cs).toContain('focus:ring-2')
    })
  })

  describe('panel', () => {
    it('panel inline ma relative i odpowiedni rozmiar', () => {
      const cs = classesOf(ColorPicker.panel({ props: { inline: true } }).class)
      expect(cs).toContain('relative')
      expect(cs).toContain('h-48')
    })

    it('panel popup ma absolute i rozmiar', () => {
      const cs = classesOf(ColorPicker.panel({ props: { inline: false } }).class)
      expect(cs).toContain('absolute')
      expect(cs).toContain('w-52')
    })
  })

  describe('color selector', () => {
    it('selector ma pozycjonowanie i rozmiar', () => {
      const cs = classesOf(ColorPicker.selector.class)
      expect(cs).toContain('absolute')
      expect(cs).toContain('h-44')
    })

    it('color area ma klasy i styl gradientu', () => {
      const color = ColorPicker.color
      expect(classesOf(color.class)).toContain('h-44')
      expect(color.style).toContain('linear-gradient')
    })

    it('color handle ma okrągły kształt i kursor', () => {
      const cs = classesOf(ColorPicker.colorhandle.class)
      expect(cs).toContain('rounded-full')
      expect(cs).toContain('cursor-pointer')
    })
  })

  describe('hue slider', () => {
    it('hue ma pozycjonowanie i gradient', () => {
      const hue = ColorPicker.hue
      expect(classesOf(hue.class)).toContain('left-44')
      expect(hue.style).toContain('linear-gradient')
    })

    it('hue handle ma border i opacity', () => {
      const cs = classesOf(ColorPicker.huehandle.class)
      expect(cs).toContain('border-white')
      expect(cs).toContain('opacity-85')
    })
  })

  describe('transition', () => {
    it('ma poprawne klasy animacji', () => {
      const t = ColorPicker.transition
      expect(t.enterFromClass).toBe('opacity-0 scale-y-[0.8]')
      expect(t.enterActiveClass).toContain('transition-[transform,opacity]')
    })
  })
})