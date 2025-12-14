import { Frog } from 'frog'

export const app = new Frog({
  title: 'Slot Machine 🎰'
})

app.frame('/', (c) => {
  return c.res({
    image: 'https://i.imgur.com/J5LVHEL.png',
    intents: [
      { label: 'Spin 🎰', action: '/spin' }
    ]
  })
})

app.frame('/spin', (c) => {
  const symbols = ['🍒','🍋','🔔','⭐']
  const s1 = symbols[Math.floor(Math.random()*symbols.length)]
  const s2 = symbols[Math.floor(Math.random()*symbols.length)]
  const s3 = symbols[Math.floor(Math.random()*symbols.length)]

  const win = s1 === s2 && s2 === s3

  return c.res({
    image: win
      ? 'https://i.imgur.com/8Qf0ZQk.png'
      : 'https://i.imgur.com/J5LVHEL.png',
    intents: win
      ? [{ label: 'Claim NFT 🎁', link: 'https://zora.co/collect/zora:0x6d4c8b8edda44cc3e6f70d1358bc233e5fbd1780/1?referrer=0xbc2876d3daf733e94890e6f82795716c9146a396' }]
      : [{ label: 'Spin Again 🎰', action: '/spin' }],
    text: `${s1} | ${s2} | ${s3}`
  })
})

export default app
