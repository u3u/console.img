# console.img

> 🎉 Display a picture in the Chrome browser console

[![NPM version](https://img.shields.io/npm/v/console.img.svg?style=flat)](https://npmjs.com/package/console.img) [![NPM downloads](https://img.shields.io/npm/dm/console.img.svg?style=flat)](https://npmjs.com/package/console.img) [![CircleCI](https://img.shields.io/circleci/project/github/u3u/console.img/master.svg)](https://circleci.com/gh/MoeFE/console.img) [![Prettier code style](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat)](https://github.com/prettier/prettier) [![XO code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/sindresorhus/xo)

![preview](https://i.loli.net/2018/01/09/5a54873e169f4.gif)

## Quick start

```js
var script = document.createElement('script')
script.src = '//unpkg.com/console.img/dist/console.img.min.js'
script.onload = () =>
  console.img('https://i.loli.net/2018/03/27/5ab9c69c922b0.gif')
document.body.appendChild(script)
```

## Install

```bash
yarn add console.img
```

## Usage

```js
import 'console.img'
console.img('https://ws1.sinaimg.cn/large/006r446Hgy1fqgmmxi0omg302s02swf0.gif')
```

**Ordered output:**

```js
import 'console.img'
;(async () => {
  await console.img(
    'https://ws1.sinaimg.cn/large/006r446Hgy1fqgmmxi0omg302s02swf0.gif'
  )
  console.log('done')
})()
```

## CDN

* [unpkg](//unpkg.com/console.img/dist/console.img.min.js)
* [jsDelivr](//cdn.jsdelivr.net/npm/console.img/dist/console.img.min.js)
* [bundle.run](//bundle.run/console.img)

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## Author

**console.img** © [u3u](https://github.com/u3u), Released under the [MIT](./LICENSE) License.<br>
Authored and maintained by u3u with help from contributors ([list](https://github.com/u3u/console.img/contributors)).

> [qwq.cat](https://qwq.cat) · GitHub [@u3u](https://github.com/u3u)
