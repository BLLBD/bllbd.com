import { defineConfig } from 'vitepress'
export default defineConfig({
  title: "BLLBD",
  description: "TBitCoin+LiteCoin+LuckyCoin+BellsCoin+DogeCoin",
  head: [
    ['link', 
      { 
        rel: 'icon', 
        href: '/logo.png' 
      }
    ]
  ],
  vite:{
    server:{
      port: 5177,
    }
  },
  themeConfig: {
    logo: '/logo.png',
    darkModeSwitchLabel: 'auto',
    nav: [
      { text: 'BitCoin', link: 'https://bitcoin.org' },
      { text: 'LiteCoin', link: 'https://litecoin.org' },
      { text: 'LuckyCoin', link: '/luckycoin' },
      { text: 'BellsCoin', link: 'https://bellscoin.com/' },
      { text: 'DogeCoin', link: 'https://dogecoin.com/' },
      { text: 'Guide', link: '/guide' }
    ],
    sidebar: [
      {
        text: 'welocome',
        link: '/guide'
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/bllbd' },
      { icon: 'twitter', link:'https://discord.gg/C5dAA3Ww'}
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2024-present bllbd.com'
    }
  }
})
