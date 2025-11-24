import { describe, it, expect } from 'vitest'
import overlaypanel from './index.js'

describe('overlaypanel', () => {
  it('powinien mieć root', () => {
    expect(overlaypanel.root).toBeDefined()
    expect(overlaypanel.root.class).toBeDefined()
  })

  it('powinien mieć content', () => {
    expect(overlaypanel.content).toBeDefined()
    expect(overlaypanel.content.class).toBeDefined()
  })

  it('powinien mieć transition', () => {
    expect(overlaypanel.transition).toBeDefined()
    expect(overlaypanel.transition.enterFromClass).toBeDefined()
  })

  it('transition powinien mieć enterActiveClass', () => {
    expect(overlaypanel.transition.enterActiveClass).toBeDefined()
  })

  it('transition powinien mieć leaveActiveClass', () => {
    expect(overlaypanel.transition.leaveActiveClass).toBeDefined()
  })

  it('transition powinien mieć leaveToClass', () => {
    expect(overlaypanel.transition.leaveToClass).toBeDefined()
  })

  it('root powinien mieć klasy shape', () => {
    const rootClass = JSON.stringify(overlaypanel.root.class)
    expect(rootClass).toContain('rounded-lg')
    expect(rootClass).toContain('shadow-xl')
  })

  it('root powinien mieć klasy position', () => {
    const rootClass = JSON.stringify(overlaypanel.root.class)
    expect(rootClass).toContain('absolute')
    expect(rootClass).toContain('z-40')
  })

  it('root powinien mieć klasy color', () => {
    const rootClass = JSON.stringify(overlaypanel.root.class)
    expect(rootClass).toContain('bg-surface-0')
    expect(rootClass).toContain('text-surface-700')
  })

  it('content powinien mieć klasy padding i flex', () => {
    const contentClass = JSON.stringify(overlaypanel.content.class)
    expect(contentClass).toContain('p-6')
    expect(contentClass).toContain('flex')
  })
})
