import { describe, it, expect } from 'vitest'
import Breadcrumb from './index.js'

describe('Breadcrumb preset', () => {
  // Test 1: Sprawdzenie menu
  it('powinien mieć poprawne style dla menu', () => {
    const result = Breadcrumb.menu

    const classString = JSON.stringify(result.class)
    expect(classString).toContain('flex')
    expect(classString).toContain('items-center')
    expect(classString).toContain('flex-nowrap')
    expect(classString).toContain('list-none')
  })

  // Test 2: Sprawdzenie akcji
  it('powinien mieć poprawne style dla action', () => {
    const result = Breadcrumb.action

    const classString = JSON.stringify(result.class)
    expect(classString).toContain('font-semibold')
    expect(classString).toContain('text-sm')
    expect(classString).toContain('rounded-md')
    expect(classString).toContain('text-surface-500')
  })

  // Test 3: Sprawdzenie ikony
  it('powinien mieć poprawne style dla ikony', () => {
    const result = Breadcrumb.icon

    expect(result.class).toBe('text-surface-500 dark:text-white/70')
  })

  // Test 4: Sprawdzenie separatora
  it('powinien mieć poprawne style dla separatora', () => {
    const result = Breadcrumb.separator

    const classString = JSON.stringify(result.class)
    expect(classString).toContain('flex')
    expect(classString).toContain('items-center')
    expect(classString).toContain('shrink-0')
    expect(classString).toContain('text-surface-500')
  })

  // Test 5: Sprawdzenie stylów focus dla akcji
  it('powinien mieć poprawne style dla focus na akcji', () => {
    const result = Breadcrumb.action

    const classString = JSON.stringify(result.class)
    expect(classString).toContain('focus-visible:outline-none')
    expect(classString).toContain('focus-visible:ring-2')
    expect(classString).toContain('focus-visible:ring-primary-500')
  })
})