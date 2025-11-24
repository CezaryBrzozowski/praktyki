import { describe, it, expect } from 'vitest'
import Chip from './index.js'

describe('Chip preset', () => {
  // Test 1: Sprawdzenie głównego kontenera
  it('powinien mieć poprawne style dla root', () => {
    const result = Chip.root

    const classString = JSON.stringify(result.class)
    expect(classString).toContain('inline-flex')
    expect(classString).toContain('items-center')
    expect(classString).toContain('rounded-[1.14rem]')
    expect(classString).toContain('bg-surface-200')
  })

  // Test 2: Sprawdzenie etykiety
  it('powinien mieć poprawne style dla label', () => {
    const result = Chip.label

    expect(result.class).toBe('text-xs leading-6 mx-0')
  })

  // Test 3: Sprawdzenie ikony
  it('powinien mieć poprawne style dla ikony', () => {
    const result = Chip.icon

    expect(result.class).toBe('leading-6 mr-2')
  })

  // Test 4: Sprawdzenie obrazka
  it('powinien mieć poprawne style dla obrazka', () => {
    const result = Chip.image

    const classString = JSON.stringify(result.class)
    expect(classString).toContain('w-6')
    expect(classString).toContain('h-6')
    expect(classString).toContain('rounded-full')
  })

  // Test 5: Sprawdzenie ikony usuwania
  it('powinien mieć poprawne style dla ikony usuwania', () => {
    const result = Chip.removeIcon

    const classString = JSON.stringify(result.class)
    expect(classString).toContain('rounded-md')
    expect(classString).toContain('ml-2')
    expect(classString).toContain('w-4')
    expect(classString).toContain('cursor-pointer')
    expect(classString).toContain('transition')
  })
})