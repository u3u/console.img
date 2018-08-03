console.img = function(url, ...args) {
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

  img.addEventListener('load', evt => {
    const image = evt.target
    const width = (args[0] || image.width) / 2
    const height = (args[1] || image.height) / 2
    const lineHeight = height * 2

    const [, version] = navigator.userAgent.match(/Chrome\/([\d|.]+) /) || []
    const needLineHeight = version ? version < '68.0.3440.84' : true

    console.log(
      '%c ',
      [
        'font-size: 0',
        `padding: ${height}px ${width}px`,
        needLineHeight && `line-height: ${lineHeight}px`,
        `background: url(${url}) no-repeat 50% / 100%`
      ]
        .filter(Boolean)
        .join('; ')
    )
  })
  img.src = url

  return promise
}

console.img.toString = () => 'function img () { [native code] }'
