export const loadImage = (src: string) => {
  return new Promise<HTMLImageElement>((resolve, reject) => {
    const img = new Image()
    img.crossOrigin = ''
    img.src = src
    img.onload = () => resolve(img)
    img.onerror = reject
    img.onabort = reject
  })
}
