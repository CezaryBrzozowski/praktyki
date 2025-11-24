import { describe, it, expect } from 'vitest'
import ContextMenu from './index.js'

const classesOf = (x) => JSON.stringify(x)

describe('ContextMenu preset', () => {
  it('root ma podstawowe klasy (rozmiar, zaokrąglenie, cień, padding, kolor tła)', () => {
    const root = ContextMenu.root
    const cs = classesOf(root.class)

    expect(cs).toContain('min-w-[12rem]')
    expect(cs).toContain('rounded-md')
    expect(cs).toContain('shadow-md')
    expect(cs).toContain('p-1.5')
    expect(cs).toContain('bg-surface-0')
  })

  it('menu zawiera podstawowe klasy listy i outline', () => {
    const menu = ContextMenu.menu
    const cs = classesOf(menu.class)

    expect(cs).toContain('list-none')
    expect(cs).toContain('outline-none')
  })

  it('menuitem ma klasę relative', () => {
    const menuitem = ContextMenu.menuitem
    expect(menuitem.class).toBe('relative')
  })

  it('content domyślny ma klasę text-surface-500', () => {
    const content = ContextMenu.content({ context: {} })
    expect(classesOf(content.class)).toContain('text-surface-500')
  })

  it('content gdy focused (ale nie active) ma klasę bg-surface-200', () => {
    const content = ContextMenu.content({ context: { focused: true, active: false } })
    expect(classesOf(content.class)).toContain('bg-surface-200')
  })

  it('content gdy active ma klasę text-surface-900', () => {
    const content = ContextMenu.content({ context: { active: true } })
    expect(classesOf(content.class)).toContain('text-surface-900')
  })

  it('action ma font-semibold, flex i cursor-pointer', () => {
    const action = ContextMenu.action
    const cs = classesOf(action.class)

    expect(cs).toContain('font-semibold')
    expect(cs).toContain('flex')
    expect(cs).toContain('cursor-pointer')
  })

  it('icon ma mr-2 i text-sm', () => {
    const icon = ContextMenu.icon
    const cs = classesOf(icon.class)

    expect(cs).toContain('mr-2')
    expect(cs).toContain('text-sm')
  })

  it('submenu ma rozmiar, shadow i tło', () => {
    const submenu = ContextMenu.submenu({ props: { level: 1 } })
    const cs = classesOf(submenu.class)

    expect(cs).toContain('w-full')
    expect(cs).toContain('shadow-md')
    expect(cs).toContain('bg-surface-0')
  })

  it('separator ma dokładną klasę', () => {
    const sep = ContextMenu.separator
    expect(sep.class).toBe('border-t border-surface-200 dark:border-surface-600 my-1')
  })

  it('transition ma klasy animacji', () => {
    const t = ContextMenu.transition
    expect(t.enterFromClass).toBe('opacity-0')
    expect(t.enterActiveClass).toContain('transition-opacity')
  })
})