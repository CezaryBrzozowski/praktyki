import { describe, it, expect } from 'vitest'
import DataView from './index.js'

const classesOf = (x) => JSON.stringify(x)

describe('DataView preset', () => {
  it('content ma padding i kolor tła', () => {
    const content = DataView.content
    const cs = classesOf(content.class)

    expect(cs).toContain('p-0')
    expect(cs).toContain('bg-surface-0')
    expect(cs).toContain('text-surface-700')
  })

  it('grid ma flex i tło', () => {
    const grid = DataView.grid
    const cs = classesOf(grid.class)

    expect(cs).toContain('flex')
    expect(cs).toContain('flex-wrap')
    expect(cs).toContain('bg-surface-0')
  })

  it('header ma font-semibold i padding', () => {
    const header = DataView.header
    const cs = classesOf(header.class)

    expect(cs).toContain('font-semibold')
    expect(cs).toContain('p-6')
  })

  it('header ma klasę border-b i odpowiedni kolor tekstu', () => {
    const header = DataView.header
    const cs = classesOf(header.class)

    expect(cs).toContain('border-b')
    expect(cs).toContain('text-surface-800')
  })

  it('grid nie ma marginesu bocznego (ml/mr = 0)', () => {
    const grid = DataView.grid
    const cs = classesOf(grid.class)

    expect(cs).toContain('ml-0')
    expect(cs).toContain('mr-0')
  })

  it('content nie ma obramowania (border-0)', () => {
    const content = DataView.content
    const cs = classesOf(content.class)

    expect(cs).toContain('border-0')
  })
})