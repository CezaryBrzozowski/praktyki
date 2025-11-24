import { describe, it, expect } from 'vitest'
import avatar from './index.js'

// Prosty test napisany "jak początkujący" — ma być czytelny i bez skrótów.
describe('avatar', () => {
  it('powinien eksportować root i image', () => {
    // sprawdzam czy root jest funkcją
    expect(typeof avatar.root).toBe('function')
    // sprawdzam klasę dla obrazka
    expect(avatar.image.class).toBe('h-full w-full')
  })

  it('domyślne klasy (bez size)', () => {
    const wynik = avatar.root({ props: {}, parent: { instance: {} } })
    // wynik ma pole class jako tablicę
    expect(Array.isArray(wynik.class)).toBe(true)
    // zamieniam elementy na listę nazw klas
    const klasy = wynik.class.flatMap(c => (typeof c === 'string' ? [c] : Object.keys(c)))
    // prosty check: czy są podstawowe klasy wyrównania
    expect(klasy.includes('inline-flex items-center justify-center')).toBe(true)
    // czy są klasy rozmiaru dla domyślnego rozmiaru
    expect(klasy.includes('h-8 w-8') || klasy.includes('text-sm')).toBe(true)
  })

  it('size=large i shape=circle', () => {
    const wynik1 = avatar.root({ props: { size: 'large' }, parent: { instance: {} } })
    const klasy1 = wynik1.class.flatMap(c => (typeof c === 'string' ? [c] : Object.keys(c)))
    // sprawdzam duży rozmiar
    expect(klasy1.includes('w-12 h-12') || klasy1.includes('text-lg')).toBe(true)

    const wynik2 = avatar.root({ props: { shape: 'circle' }, parent: { instance: {} } })
    const klasy2 = wynik2.class.flatMap(c => (typeof c === 'string' ? [c] : Object.keys(c)))
    // sprawdzam, czy jest rounded-full
    expect(klasy2.includes('rounded-full')).toBe(true)
  })

  it('jeśli parent to avatargroup, to są klasy grupy', () => {
    const fakeParent = { instance: { $style: { name: 'avatargroup' } } }
    const wynik = avatar.root({ props: {}, parent: fakeParent })
    const klasy = wynik.class.flatMap(c => (typeof c === 'string' ? [c] : Object.keys(c)))
    expect(klasy.includes('-ml-4') || klasy.includes('border-2')).toBe(true)
  })
})
