import { describe, it, expect } from 'vitest'
import Badge from './index.js'

describe('Badge preset', () => {
  // Test 1: Sprawdzenie domyślnych ustawień
  it('powinien mieć domyślne style dla małego badge', () => {
    const result = Badge.root({
      props: { value: '3' },
      context: {}
    })

    const classString = JSON.stringify(result.class)
    expect(classString).toContain('text-xs leading-[1.5rem]')
    expect(classString).toContain('font-medium')
    expect(classString).toContain('min-w-[1.5rem] h-[1.5rem]')
  })

  // Test 2: Sprawdzenie dużego rozmiaru
  it('powinien mieć odpowiednie style dla dużego badge', () => {
    const result = Badge.root({
      props: { value: '10', size: 'large' },
      context: {}
    })

    const classString = JSON.stringify(result.class)
    expect(classString).toContain('text-lg leading-[2.25rem]')
    expect(classString).toContain('min-w-[2.25rem] h-[2.25rem]')
  })

  // Test 3: Sprawdzenie kolorów dla różnych severity
  it('powinien mieć odpowiedni kolor tła dla różnych severity', () => {
    const result = Badge.root({
      props: { value: '1', severity: 'success' },
      context: {}
    })

    const classString = JSON.stringify(result.class)
    expect(classString).toContain('bg-green-500 dark:bg-green-400')
  })

  // Test 4: Sprawdzenie kształtu dla pojedynczej cyfry
  it('powinien mieć okrągły kształt dla pojedynczej cyfry', () => {
    const result = Badge.root({
      props: { value: '1' },
      context: {}
    })

    const classString = JSON.stringify(result.class)
    expect(classString).toContain('rounded-full')
  })
})