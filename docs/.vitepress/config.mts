import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "喵锵的设定集",
  description: "给自己的是兽设写的一些文档……",
  head: [
    ['link', { rel: 'icon', href: '/pictures/logo.png' }]
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/pictures/logo.png',
    
    nav: [
      { text: '主站', link: 'https://MiaowCham.top/' },
      { text: '世界观', link: '/World-Viel/' },
      { text: '角色', link: '/Character/' },
      { text: '画廊', link: '/pictures/LICENSE' },
    ],

    sidebar: {
      '/World-Viel/': [
        {
          text: '世界观',
          items: [
            { text: '世界观介绍', link: '/World-Viel/' },
            { text: '细节设定', link: '/World-Viel/world-setting' },
            { text: '地名设定', link: '/World-Viel/toponym' },
            { text: '名词表', link: '/World-Viel/glossary' },
            { text: '许可证', link: '/World-Viel/License-Docs'}
          ]
        }
      ],
      '/Character/': [
        {
          text: '角色',
          items: [
            { text: '角色索引', link: '/Character/' },
            { text: '喵锵', link: '/Character/MiaowCham' },
            { text: '曜辰', link: '/Character/Lucian' },
            { text: '版权信息', link: '/Character/LICENSE'}
          ]
        }
      ],
      '/pictures/': [
        {
          text: '画廊',
          items: [
            { text: '版权信息', link: '/pictures/LICENSE'},
            { text: '世界画廊', link: '/pictures/world' },
            { text: '角色画廊', link: '/pictures/character' }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/MiaowCham/World-View_and_Vharacter-Setting' },
      { icon: 'qq', link: 'https://qm.qq.com/q/qjU8Nm72fe', ariaLabel: 'QQ' },
      { icon: 'bilibili', link: 'https://space.bilibili.com/485769432', ariaLabel: '哔哩哔哩' }
    ],
    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: '搜索文档',
            buttonAriaLabel: '搜索文档'
          },
          modal: {
            noResultsText: '无法找到相关结果',
            resetButtonTitle: '清除查询条件',
            footer: {
              selectText: '选择',
              navigateText: '切换'
            }
          }
        }
      }
    },
    editLink: {
      pattern: 'https://github.com/MiaowCham/World-View_and_Vharacter-Setting/edit/main/docs/:path',
      text: '在 GitHub 上编辑此页面'
    },
    docFooter: {
      prev: '上一页',
      next: '下一页'
    },
    outline: {
      label: '页面导航'
    },

    lastUpdated: {
      text: '最后更新于'
    },

    notFound: {
      title: '页面未找到',
      quote:
        '当你迷失方向的时候，试着循着光前进！',
      linkLabel: '前往首页',
      linkText: '带我回首页'
    },
    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',
    skipToContentLabel: '跳转到内容',
    footer: {
      message: '除非另有说明，否则本站内容依据 <a href="https://creativecommons.org/licenses/by-nc-nd/4.0/">CC BY-NC-ND 4.0</a> 许可证进行授权，转载请附上出处链接。',
      copyright: '版权信息：Copyright © 2025 MiaowCham'
    }
  }
})
