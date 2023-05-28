// @vitest-environment happy-dom
import { expect, it, vi } from 'vitest'
import consoleImg from '../src'

it('The `console.img` should be defined', () => {
  expect(console.img).toBeDefined()
  expect(console.img).toBe(consoleImg)
})

it('Should match snapshots', async () => {
  const url =
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg=='

  vi.mock('../src/load-image.ts', () => {
    return {
      loadImage: vi.fn(() => {
        const img = new Image(400, 300)

        // @ts-expect-error
        img.naturalWidth = img.width
        // @ts-expect-error
        img.naturalHeight = img.height

        return img
      }),
    }
  })

  const spy = vi.spyOn(console, 'log')

  await consoleImg(url, { fit: 'cover', width: 100 })
  await consoleImg(url, { height: 100, styles: ['background-size: 100%'] })
  await consoleImg(url, { debug: true, styles: 'background-size: 100% 100%' })

  expect(spy.mock.calls).toMatchSnapshot()
})
