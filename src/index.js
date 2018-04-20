console.img = function(url) {
  if (!/^http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w- ./?%&=]*)?$/.test(url)) {
    console.warn('Image URL is incorrect')
    return
  }

  let promise
  const img = new Image()

  if (Promise) {
    promise = new Promise((resolve, reject) => {
      img.addEventListener('load', () => setTimeout(resolve))
      img.addEventListener('error', reject)
    })
  }

  img.onload = evt => {
    const image = evt.target
    const width = (arguments[1] || image.width) / 2
    const height = (arguments[2] || image.height) / 2
    const lineHeight = height * 2
    console.log(
      '%c',
      `font-size: 0; padding: ${height}px ${width}px; line-height: ${lineHeight}px; background: url(${url}) no-repeat 50% / 100%`
    )
  }
  img.src = url

  return promise
}

console.img.toString = () => 'function img () { [native code] }'
