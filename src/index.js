console.img = function(url) {
  if (!/^http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w- ./?%&=]*)?$/.test(url)) {
    console.warn('Image URL is incorrect')
    return
  }

  const img = new Image()
  img.onload = evt => {
    const image = evt.target
    const width = (arguments[1] || image.width) / 2
    const height = (arguments[2] || image.height) / 2
    console.log(
      '%c',
      `font-size: 0; padding: ${height}px ${width}px; line-height: ${height}px; background: url(${url}) no-repeat 50% / 100%`
    )
  }
  img.src = url
}

console.img.toString = () => 'function img () { [native code] }'
