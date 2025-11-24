import { describe, it, expect } from 'vitest'
import rating from './index.js'

describe('rating', () => {
  it('powinien mieć root jako funkcję', () => {
    expect(typeof rating.root).toBe('function')
  })

  it('root powinien zwracać klasy', () => {
    const result = rating.root({ props: {} })
    expect(result.class).toBeDefined()
  })

  it('powinien mieć cancelitem jako funkcję', () => {
    expect(typeof rating.cancelitem).toBe('function')
  })

  it('cancelitem powinien zwracać klasy', () => {
    const result = rating.cancelitem({ context: {} })
    expect(result.class).toBeDefined()
  })

  it('powinien mieć cancelicon', () => {
    expect(rating.cancelicon).toBeDefined()
    expect(rating.cancelicon.class).toBeDefined()
  })

  it('powinien mieć item jako funkcję', () => {
    expect(typeof rating.item).toBe('function')
  })

  it('item powinien zwracać klasy', () => {
    const result = rating.item({ props: {}, context: {} })
    expect(result.class).toBeDefined()
  })

  it('powinien mieć officon jako funkcję', () => {
    expect(typeof rating.officon).toBe('function')
  })

  it('officon powinien zwracać klasy', () => {
    const result = rating.officon({ props: {} })
    expect(result.class).toBeDefined()
  })

  it('powinien mieć onicon jako funkcję', () => {
    expect(typeof rating.onicon).toBe('function')
  })

  it('onicon powinien zwracać klasy', () => {
    const result = rating.onicon({ props: {} })
    expect(result.class).toBeDefined()
  })

  it('root powinien mieć gap i flex', () => {
    const result = rating.root({ props: {} })
    const classString = JSON.stringify(result.class)
    expect(classString).toContain('flex')
    expect(classString).toContain('gap-1')
  })

  it('root powinien mieć opacity-60 gdy disabled', () => {
    const result = rating.root({ props: { disabled: true } })
    const classString = JSON.stringify(result.class)
    expect(classString).toContain('opacity-60')
  })

  it('cancelicon powinien mieć rozmiar i kolor', () => {
    const canceliconClass = JSON.stringify(rating.cancelicon.class)
    expect(canceliconClass).toContain('w-5')
    expect(canceliconClass).toContain('h-5')
    expect(canceliconClass).toContain('text-red-500')
  })

  it('officon powinien mieć transition', () => {
    const result = rating.officon({ props: {} })
    const classString = JSON.stringify(result.class)
    expect(classString).toContain('transition')
    expect(classString).toContain('duration-200')
  })

  it('item powinien mieć cursor-pointer gdy nie readonly', () => {
    const result = rating.item({ props: { readonly: false }, context: {} })
    const classString = JSON.stringify(result.class)
    expect(classString).toContain('cursor-pointer')
  })

  it('item powinien mieć cursor-default gdy readonly', () => {
    const result = rating.item({ props: { readonly: true }, context: {} })
    const classString = JSON.stringify(result.class)
    expect(classString).toContain('cursor-default')
  })
})
