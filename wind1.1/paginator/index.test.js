import { describe, it, expect } from 'vitest'
import paginator from './index.js'

describe('paginator', () => {
  it('powinien mieć root', () => {
    expect(paginator.root).toBeDefined()
    expect(paginator.root.class).toBeDefined()
  })

  it('powinien mieć paginatorwrapper', () => {
    expect(paginator.paginatorwrapper).toBeDefined()
    expect(paginator.paginatorwrapper.class).toBeDefined()
  })

  it('powinien mieć firstpagebutton jako funkcję', () => {
    expect(typeof paginator.firstpagebutton).toBe('function')
  })

  it('firstpagebutton powinien zwracać klasy', () => {
    const result = paginator.firstpagebutton({ context: {} })
    expect(result.class).toBeDefined()
  })

  it('powinien mieć previouspagebutton jako funkcję', () => {
    expect(typeof paginator.previouspagebutton).toBe('function')
  })

  it('previouspagebutton powinien zwracać klasy', () => {
    const result = paginator.previouspagebutton({ context: {} })
    expect(result.class).toBeDefined()
  })

  it('powinien mieć nextpagebutton jako funkcję', () => {
    expect(typeof paginator.nextpagebutton).toBe('function')
  })

  it('nextpagebutton powinien zwracać klasy', () => {
    const result = paginator.nextpagebutton({ context: {} })
    expect(result.class).toBeDefined()
  })

  it('powinien mieć lastpagebutton jako funkcję', () => {
    expect(typeof paginator.lastpagebutton).toBe('function')
  })

  it('lastpagebutton powinien zwracać klasy', () => {
    const result = paginator.lastpagebutton({ context: {} })
    expect(result.class).toBeDefined()
  })

  it('powinien mieć pagebutton jako funkcję', () => {
    expect(typeof paginator.pagebutton).toBe('function')
  })

  it('pagebutton powinien zwracać klasy', () => {
    const result = paginator.pagebutton({ context: {} })
    expect(result.class).toBeDefined()
  })

  it('powinien mieć rowperpagedropdown', () => {
    expect(paginator.rowperpagedropdown).toBeDefined()
    expect(paginator.rowperpagedropdown.root).toBeDefined()
  })

  it('rowperpagedropdown root powinien być funkcją', () => {
    expect(typeof paginator.rowperpagedropdown.root).toBe('function')
  })

  it('powinien mieć jumptopageinput', () => {
    expect(paginator.jumptopageinput).toBeDefined()
    expect(paginator.jumptopageinput.root).toBeDefined()
  })

  it('powinien mieć jumptopagedropdown', () => {
    expect(paginator.jumptopagedropdown).toBeDefined()
    expect(paginator.jumptopagedropdown.root).toBeDefined()
  })
})
