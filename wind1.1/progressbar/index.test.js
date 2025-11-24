import { describe, it, expect } from 'vitest'
import progressbar from './index.js'

describe('progressbar', () => {
  it('powinien mieć root jako funkcję', () => {
    expect(typeof progressbar.root).toBe('function')
  })

  it('root powinien zwracać klasy', () => {
    const result = progressbar.root({ props: {} })
    expect(result.class).toBeDefined()
  })

  it('powinien mieć value jako funkcję', () => {
    expect(typeof progressbar.value).toBe('function')
  })

  it('value powinien zwracać klasy', () => {
    const result = progressbar.value({ props: {} })
    expect(result.class).toBeDefined()
  })

  it('powinien mieć label', () => {
    expect(progressbar.label).toBeDefined()
    expect(progressbar.label.class).toBeDefined()
  })

  it('root powinien mieć różne klasy dla mode determinate', () => {
    const result = progressbar.root({ props: { mode: 'determinate', showValue: true } })
    expect(result.class).toBeDefined()
  })

  it('root powinien mieć różne klasy dla mode indeterminate', () => {
    const result = progressbar.root({ props: { mode: 'indeterminate', showValue: false } })
    expect(result.class).toBeDefined()
  })

  it('value powinien mieć klasy dla mode determinate', () => {
    const result = progressbar.value({ props: { mode: 'determinate' } })
    expect(result.class).toBeDefined()
  })

  it('value powinien mieć klasy dla mode indeterminate', () => {
    const result = progressbar.value({ props: { mode: 'indeterminate' } })
    expect(result.class).toBeDefined()
  })

  it('root powinien mieć h-7 pt-5 dla showValue', () => {
    const result = progressbar.root({ props: { mode: 'determinate', showValue: true } })
    const classString = JSON.stringify(result.class)
    expect(classString).toContain('h-7')
  })

  it('root powinien mieć h-2 dla bez showValue', () => {
    const result = progressbar.root({ props: { mode: 'indeterminate', showValue: false } })
    const classString = JSON.stringify(result.class)
    expect(classString).toContain('h-2')
  })

  it('label powinien mieć klasy position', () => {
    const labelClass = JSON.stringify(progressbar.label.class)
    expect(labelClass).toContain('absolute')
    expect(labelClass).toContain('inset-0')
  })
})
