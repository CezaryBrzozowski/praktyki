import { describe, it, expect } from 'vitest'
import Divider from './index.js'

const classesOf = (x) => JSON.stringify(x)

describe('Divider preset', () => {
  it('root ma domyślne klasy flex i before:block', () => {
    const result = Divider.root({ props: {} })
    const cs = classesOf(result.class)

    expect(cs).toContain('flex')
    expect(cs).toContain('before:block')
  })

  it('gdy layout=horizontal ma justify-center i w-full', () => {
    const result = Divider.root({ props: { layout: 'horizontal', align: 'center' } })
    const cs = classesOf(result.class)

    expect(cs).toContain('justify-center')
    expect(cs).toContain('w-full')
  })

  it('gdy layout=vertical ma min-h-full i odpowiednie before pozycjonowanie', () => {
    const result = Divider.root({ props: { layout: 'vertical' } })
    const cs = classesOf(result.class)

    expect(cs).toContain('min-h-full')
    expect(cs).toContain('before:left-1/2')
  })

  it('typ solid daje klasę before:border-solid', () => {
    const result = Divider.root({ props: { type: 'solid' } })
    expect(classesOf(result.class)).toContain('before:border-solid')
  })

  it('typ dotted daje klasę before:border-dotted', () => {
    const result = Divider.root({ props: { type: 'dotted' } })
    expect(classesOf(result.class)).toContain('before:border-dotted')
  })

  it('typ dashed daje klasę before:border-dashed', () => {
    const result = Divider.root({ props: { type: 'dashed' } })
    expect(classesOf(result.class)).toContain('before:border-dashed')
  })

  it('horizontal ma margin-y i padding-x', () => {
    const result = Divider.root({ props: { layout: 'horizontal' } })
    expect(classesOf(result.class)).toContain('my-5 mx-0 py-0 px-5')
  })

  it('vertical ma mx-4 md:mx-5 i py-5', () => {
    const result = Divider.root({ props: { layout: 'vertical' } })
    const cs = classesOf(result.class)
    expect(cs).toContain('mx-4 md:mx-5')
    expect(cs).toContain('py-5')
  })

  it('content ma padding i tło', () => {
    const content = Divider.content
    const cs = classesOf(content.class)

    expect(cs).toContain('p-2')
    expect(cs).toContain('bg-surface-0')
  })
})