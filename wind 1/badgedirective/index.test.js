import { describe, it, expect } from 'vitest'
import BadgeDirective from './index.js'

describe('BadgeDirective preset', () => {
  // Test 1: Sprawdzenie domyślnych ustawień
  it('powinien mieć domyślne style bez specjalnych flag', () => {
    const result = BadgeDirective.root({
      context: {}
    })

    const classString = JSON.stringify(result.class)
    expect(classString).toContain('font-medium')
    expect(classString).toContain('text-xs')
    expect(classString).toContain('min-w-[1rem]')
    expect(classString).toContain('rounded-[10px]')
  })

  // Test 2: Sprawdzenie stylu dla dot
  it('powinien mieć odpowiednie style gdy jest to dot', () => {
    const result = BadgeDirective.root({
      context: { dot: true }
    })

    const classString = JSON.stringify(result.class)
    expect(classString).toContain('min-w-[0.5rem]')
    expect(classString).toContain('rounded-full')
    expect(classString).toContain('p-0')
  })

  // Test 3: Sprawdzenie kolorów dla różnych statusów
  it('powinien mieć odpowiedni kolor tła dla success', () => {
    const result = BadgeDirective.root({
      context: { success: true }
    })

    const classString = JSON.stringify(result.class)
    expect(classString).toContain('bg-green-500')
    expect(classString).toContain('dark:bg-green-400')
  })

  // Test 4: Sprawdzenie stylu bez paddingu
  it('powinien nie mieć paddingu gdy nogutter jest true', () => {
    const result = BadgeDirective.root({
      context: { nogutter: true }
    })

    const classString = JSON.stringify(result.class)
    expect(classString).toContain('p-0')
    expect(classString).toContain('rounded-full')
  })
})