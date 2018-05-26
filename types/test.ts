// normal
console.img('https://i.loli.net/2018/03/27/5ab9c69c922b0.gif')
console.img('https://i.loli.net/2018/03/27/5ab9c69c922b0.gif', 100)
console.img('https://i.loli.net/2018/03/27/5ab9c69c922b0.gif', 100, 100)

// promise
console.img('https://i.loli.net/2018/03/27/5ab9c69c922b0.gif').then(() => {
  console.log('done')
})

console.img('https://i.loli.net/2018/03/27/5ab9c69c922b0.gif', 100).then(() => {
  console.log('done')
})

console
  .img('https://i.loli.net/2018/03/27/5ab9c69c922b0.gif', 100, 100)
  .then(() => {
    console.log('done')
  })

// async function
;(async () => {
  await console.img('https://i.loli.net/2018/03/27/5ab9c69c922b0.gif')
  await console.img('https://i.loli.net/2018/03/27/5ab9c69c922b0.gif', 100)
  await console.img('https://i.loli.net/2018/03/27/5ab9c69c922b0.gif', 100, 100)
  console.log('done')
})()
