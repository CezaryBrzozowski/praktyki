import { describe, it, expect } from 'vitest'
import password from './index.js'

describe('password', () => {
  it('powinien mieć root jako funkcję', () => {
    expect(typeof password.root).toBe('function')
  })

  it('root powinien zwracać klasy', () => {
    const result = password.root({ props: {} })
    expect(result.class).toBeDefined()
  })

  it('powinien mieć panel', () => {
    expect(password.panel).toBeDefined()
    expect(password.panel.class).toBeDefined()
  })

  it('powinien mieć meter', () => {
    expect(password.meter).toBeDefined()
    expect(password.meter.class).toBeDefined()
  })

  it('powinien mieć meterlabel jako funkcję', () => {
    expect(typeof password.meterlabel).toBe('function')
  })

  it('meterlabel powinien zwracać klasy', () => {
    const result = password.meterlabel({ instance: {} })
    expect(result.class).toBeDefined()
  })

  it('powinien mieć showicon', () => {
    expect(password.showicon).toBeDefined()
    expect(password.showicon.class).toBeDefined()
  })

  it('powinien mieć hideicon', () => {
    expect(password.hideicon).toBeDefined()
    expect(password.hideicon.class).toBeDefined()
  })

  it('powinien mieć transition', () => {
    expect(password.transition).toBeDefined()
    expect(password.transition.enterFromClass).toBeDefined()
  })

  it('transition powinien mieć enterActiveClass', () => {
    expect(password.transition.enterActiveClass).toBeDefined()
  })

  it('transition powinien mieć leaveActiveClass', () => {
    expect(password.transition.leaveActiveClass).toBeDefined()
  })

  it('transition powinien mieć leaveToClass', () => {
    expect(password.transition.leaveToClass).toBeDefined()
  })
})
