import { describe, it, expect } from 'vitest'
import panel from './index.js'

describe('panel', () => {
  it('powinien mieć root', () => {
    expect(panel.root).toBeDefined()
    expect(panel.root.class).toBeDefined()
  })

  it('powinien mieć header jako funkcję', () => {
    expect(typeof panel.header).toBe('function')
  })

  it('header powinien zwracać klasy', () => {
    const result = panel.header({ props: {} })
    expect(result.class).toBeDefined()
  })

  it('powinien mieć title', () => {
    expect(panel.title).toBeDefined()
    expect(panel.title.class).toBeDefined()
  })

  it('powinien mieć toggler', () => {
    expect(panel.toggler).toBeDefined()
    expect(panel.toggler.class).toBeDefined()
  })

  it('powinien mieć togglerIcon', () => {
    expect(panel.togglerIcon).toBeDefined()
    expect(panel.togglerIcon.class).toBeDefined()
  })

  it('powinien mieć content', () => {
    expect(panel.content).toBeDefined()
    expect(panel.content.class).toBeDefined()
  })

  it('powinien mieć footer', () => {
    expect(panel.footer).toBeDefined()
    expect(panel.footer.class).toBeDefined()
  })

  it('powinien mieć transition', () => {
    expect(panel.transition).toBeDefined()
    expect(panel.transition.enterFromClass).toBeDefined()
  })

  it('transition powinien mieć enterActiveClass', () => {
    expect(panel.transition.enterActiveClass).toBeDefined()
  })

  it('transition powinien mieć enterToClass', () => {
    expect(panel.transition.enterToClass).toBeDefined()
  })

  it('transition powinien mieć leaveFromClass', () => {
    expect(panel.transition.leaveFromClass).toBeDefined()
  })

  it('transition powinien mieć leaveActiveClass', () => {
    expect(panel.transition.leaveActiveClass).toBeDefined()
  })

  it('transition powinien mieć leaveToClass', () => {
    expect(panel.transition.leaveToClass).toBeDefined()
  })
})
