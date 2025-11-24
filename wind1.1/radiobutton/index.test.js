import { describe, it, expect } from 'vitest'
import radiobutton from './index.js'

describe('radiobutton', () => {
  it('powinien mieć root', () => {
    expect(radiobutton.root).toBeDefined()
    expect(radiobutton.root.class).toBeDefined()
  })

  it('powinien mieć input jako funkcję', () => {
    expect(typeof radiobutton.input).toBe('function')
  })

  it('input powinien zwracać klasy', () => {
    const result = radiobutton.input({ props: {}, state: {} })
    expect(result.class).toBeDefined()
  })

  it('powinien mieć icon', () => {
    expect(radiobutton.icon).toBeDefined()
    expect(radiobutton.icon.class).toBeDefined()
  })

  it('root powinien mieć klasy size', () => {
    const rootClass = JSON.stringify(radiobutton.root.class)
    expect(rootClass).toContain('w-4')
    expect(rootClass).toContain('h-4')
  })

  it('root powinien mieć klasy flexbox', () => {
    const rootClass = JSON.stringify(radiobutton.root.class)
    expect(rootClass).toContain('inline-flex')
    expect(rootClass).toContain('align-bottom')
  })

  it('input powinien mieć klasy rozmiaru', () => {
    const result = radiobutton.input({ props: {}, state: {} })
    const classString = JSON.stringify(result.class)
    expect(classString).toContain('w-4')
    expect(classString).toContain('h-4')
  })

  it('input powinien mieć klasy shape', () => {
    const result = radiobutton.input({ props: {}, state: {} })
    const classString = JSON.stringify(result.class)
    expect(classString).toContain('border-2')
    expect(classString).toContain('rounded-full')
  })

  it('input powinien mieć transition', () => {
    const result = radiobutton.input({ props: {}, state: {} })
    const classString = JSON.stringify(result.class)
    expect(classString).toContain('transition')
    expect(classString).toContain('duration-200')
  })

  it('input powinien mieć różne klasy gdy selected', () => {
    const result = radiobutton.input({ 
      props: { value: 'test', modelValue: 'test' }, 
      state: {} 
    })
    const classString = JSON.stringify(result.class)
    expect(classString).toContain('border-primary-500')
  })

  it('input powinien mieć różne klasy gdy nie selected', () => {
    const result = radiobutton.input({ 
      props: { value: 'test', modelValue: 'other' }, 
      state: {} 
    })
    const classString = JSON.stringify(result.class)
    expect(classString).toContain('border-surface-300')
  })

  it('input powinien mieć ring gdy focused', () => {
    const result = radiobutton.input({ 
      props: { disabled: false }, 
      state: { focused: true } 
    })
    const classString = JSON.stringify(result.class)
    expect(classString).toContain('ring-2')
  })

  it('input powinien mieć opacity-60 gdy disabled', () => {
    const result = radiobutton.input({ 
      props: { disabled: true }, 
      state: {} 
    })
    const classString = JSON.stringify(result.class)
    expect(classString).toContain('opacity-60')
  })
})
