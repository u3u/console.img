import { getBlob } from './get-blob'
import { loadImage } from './load-image'
import { readAsDataUrl } from './read-as-data-url'
import { toArray } from './to-array'
import { type ConsoleImgOptions } from './types'

export * from './types'

export const consoleImg = async (url: string, options: ConsoleImgOptions = {}) => {
  const {
    //
    debug,
    fit = 'contain',
    height,
    styles,
    width,
  } = options

  const blob = await getBlob(url)
  const dataUrl = await readAsDataUrl(blob)
  const image = await loadImage(dataUrl)
  const ratio = image.naturalWidth / image.naturalHeight
  const _width = width || (height ? height * ratio : image.naturalWidth)
  const _height = height || (width ? width / ratio : image.naturalHeight)
  const py = _height / 2
  const px = _width / 2

  const css = (url = dataUrl) =>
    [
      'font-size: 0',
      `padding: ${py}px ${px}px`,
      `background: url(${url}) no-repeat 50% / ${fit}`,
      styles && toArray(styles).join('; '),
    ]
      .filter(Boolean)
      .join('; ')

  // eslint-disable-next-line unicorn/no-console-spaces
  console.log('%c ', css())

  if (debug) {
    console.log('[console.img]', css(url).split('; '))
  }

  return image
}

console.img = consoleImg

export default consoleImg
