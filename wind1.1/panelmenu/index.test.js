import { describe, it, expect } from 'vitest'
import panelmenu from './index.js'

describe('panelmenu', () => {
  it('powinien mieć panel', () => {
    expect(panelmenu.panel).toBeDefined()
    expect(panelmenu.panel.class).toBeDefined()
  })

  it('powinien mieć header', () => {
    expect(panelmenu.header).toBeDefined()
    expect(panelmenu.header.class).toBeDefined()
  })

  it('powinien mieć headercontent jako funkcję', () => {
    expect(typeof panelmenu.headercontent).toBe('function')
  })

  it('headercontent powinien zwracać klasy', () => {
    const result = panelmenu.headercontent({ context: {}, instance: {} })
    expect(result.class).toBeDefined()
  })

  it('powinien mieć headeraction', () => {
    expect(panelmenu.headeraction).toBeDefined()
    expect(panelmenu.headeraction.class).toBeDefined()
  })

  it('powinien mieć headerlabel', () => {
    expect(panelmenu.headerlabel).toBeDefined()
    expect(panelmenu.headerlabel.class).toBeDefined()
  })

  it('powinien mieć headerIcon', () => {
    expect(panelmenu.headerIcon).toBeDefined()
    expect(panelmenu.headerIcon.class).toBeDefined()
  })

  it('powinien mieć submenuicon', () => {
    expect(panelmenu.submenuicon).toBeDefined()
    expect(panelmenu.submenuicon.class).toBeDefined()
  })

  it('powinien mieć menucontent', () => {
    expect(panelmenu.menucontent).toBeDefined()
    expect(panelmenu.menucontent.class).toBeDefined()
  })

  it('powinien mieć menu', () => {
    expect(panelmenu.menu).toBeDefined()
    expect(panelmenu.menu.class).toBeDefined()
  })

  it('powinien mieć content', () => {
    expect(panelmenu.content).toBeDefined()
    expect(panelmenu.content.class).toBeDefined()
  })

  it('powinien mieć action jako funkcję', () => {
    expect(typeof panelmenu.action).toBe('function')
  })

  it('action powinien zwracać klasy', () => {
    const result = panelmenu.action({ context: {} })
    expect(result.class).toBeDefined()
  })

  it('powinien mieć icon', () => {
    expect(panelmenu.icon).toBeDefined()
    expect(panelmenu.icon.class).toBeDefined()
  })

  it('powinien mieć submenu', () => {
    expect(panelmenu.submenu).toBeDefined()
    expect(panelmenu.submenu.class).toBeDefined()
  })

  it('powinien mieć transition', () => {
    expect(panelmenu.transition).toBeDefined()
    expect(panelmenu.transition.enterFromClass).toBeDefined()
  })

  it('transition powinien mieć enterActiveClass', () => {
    expect(panelmenu.transition.enterActiveClass).toBeDefined()
  })

  it('transition powinien mieć leaveActiveClass', () => {
    expect(panelmenu.transition.leaveActiveClass).toBeDefined()
  })
})
