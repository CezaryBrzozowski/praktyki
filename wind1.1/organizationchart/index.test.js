import { describe, it, expect } from 'vitest'
import organizationchart from './index.js'

describe('organizationchart', () => {
  it('powinien mieć table', () => {
    expect(organizationchart.table).toBeDefined()
    expect(organizationchart.table.class).toBeDefined()
  })

  it('powinien mieć cell', () => {
    expect(organizationchart.cell).toBeDefined()
    expect(organizationchart.cell.class).toBeDefined()
  })

  it('powinien mieć node jako funkcję', () => {
    expect(typeof organizationchart.node).toBe('function')
  })

  it('node powinien zwracać klasy', () => {
    const result = organizationchart.node({ context: {} })
    expect(result.class).toBeDefined()
  })

  it('powinien mieć linedown', () => {
    expect(organizationchart.linedown).toBeDefined()
    expect(organizationchart.linedown.class).toBeDefined()
  })

  it('powinien mieć nodetoggler', () => {
    expect(organizationchart.nodetoggler).toBeDefined()
    expect(organizationchart.nodetoggler.class).toBeDefined()
  })

  it('powinien mieć linecell', () => {
    expect(organizationchart.linecell).toBeDefined()
    expect(organizationchart.linecell.class).toBeDefined()
  })

  it('powinien mieć lineleft jako funkcję', () => {
    expect(typeof organizationchart.lineleft).toBe('function')
  })

  it('lineleft powinien zwracać klasy', () => {
    const result = organizationchart.lineleft({ context: {} })
    expect(result.class).toBeDefined()
  })

  it('powinien mieć lineright jako funkcję', () => {
    expect(typeof organizationchart.lineright).toBe('function')
  })

  it('lineright powinien zwracać klasy', () => {
    const result = organizationchart.lineright({ context: {} })
    expect(result.class).toBeDefined()
  })

  it('powinien mieć nodecell', () => {
    expect(organizationchart.nodecell).toBeDefined()
    expect(organizationchart.nodecell.class).toBeDefined()
  })

  it('powinien mieć nodetogglericon', () => {
    expect(organizationchart.nodetogglericon).toBeDefined()
    expect(organizationchart.nodetogglericon.class).toBeDefined()
  })
})
