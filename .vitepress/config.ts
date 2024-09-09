import type { DefaultTheme } from 'vitepress'
import { defineConfig } from 'vitepress'
import { transformerTwoslash } from '@shikijs/vitepress-twoslash'
import { buildEnd } from './buildEnd.config'

const ogDescription = 'Next Generation Frontend Tooling'
const ogImage = 'https://vitejs.dev/og-image.png'
const ogTitle = 'Vite'
const ogUrl = 'https://a.252x.com'

// netlify envs
const deployURL = process.env.DEPLOY_PRIME_URL || ''
const commitRef = process.env.COMMIT_REF?.slice(0, 8) || 'dev'

const deployType = (() => {
  switch (deployURL) {
    case 'https://main--vite-docs-main.netlify.app':
      return 'main'
    case '':
      return 'local'
    default:
      return 'release'
  }
})()
const additionalTitle = ((): string => {
  switch (deployType) {
    case 'main':
      return ' (main branch)'
    case 'local':
      return ' (local)'
    case 'release':
      return ''
  }
})()
const versionLinks = ((): DefaultTheme.NavItemWithLink[] => {
  const oldVersions: DefaultTheme.NavItemWithLink[] = [
    {
      text: 'Vite 4 Docs',
      link: 'https://v4.vitejs.dev',
    },
    {
      text: 'Vite 3 Docs',
      link: 'https://v3.vitejs.dev',
    },
    {
      text: 'Vite 2 Docs',
      link: 'https://v2.vitejs.dev',
    },
  ]

  switch (deployType) {
    case 'main':
    case 'local':
      return [
        {
          text: 'Vite 5 Docs (release)',
          link: 'https://a.252x.com',
        },
        ...oldVersions,
      ]
    case 'release':
      return oldVersions
  }
})()

export default defineConfig({
  title: 'Vite',
  description: '下一代前端工具链',
  lang: 'zh-CN',

  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' }],
    [
      'link',
      { rel: 'alternate', type: 'application/rss+xml', href: '/blog.rss' },
    ],
    ['link', { rel: 'me', href: 'https://m.webtoo.ls/@vite' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:title', content: ogTitle }],
    ['meta', { property: 'og:image', content: ogImage }],
    ['meta', { property: 'og:url', content: ogUrl }],
    ['meta', { property: 'og:description', content: ogDescription }],
    ['meta', { property: 'og:site_name', content: 'vitejs' }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:site', content: '@vite_js' }],
    ['meta', { name: 'theme-color', content: '#646cff' }],
    [
      'script',
      {
        src: 'https://cdn.usefathom.com/script.js',
        'data-site': 'TPLGJZGR',
        'data-spa': 'auto',
        defer: '',
      },
    ],
  ],

  locales: {
    root: { label: '简体中文' },
    en: { label: 'English', link: 'https://vitejs.dev' },
    ja: { label: '日本語', link: 'https://a.543x.com' },
    es: { label: 'Español', link: 'https://b.543x.com' },
    pt: { label: 'Português', link: 'https://c.543x.com' },
    ko: { label: '한국어', link: 'https://d.543x.com' },
    de: { label: 'Deutsch', link: 'https://e.543x.com' },
  },

  themeConfig: {
    logo: '/logo.svg',

    editLink: {
      pattern: 'https://github.com/hyaliyun/vitejs/edit/main/:path',
      text: '为此页提供修改建议',
    },

    outline: {
      label: '本页目录',
      level: [2, 3],
    },

    socialLinks: [
      { icon: 'mastodon', link: 'https://f.543x.com' },
      { icon: 'twitter', link: 'https://g.543x.com' },
      { icon: 'discord', link: 'https://h.543x.com' },
      { icon: 'github', link: 'https://github.com/hyaliyun/vitejs' },
    ],

    algolia: {
      appId: '7H67QR5P0A',
      apiKey: 'deaab78bcdfe96b599497d25acc6460e',
      indexName: 'vitejs',
      searchParameters: {
        facetFilters: ['tags:cn']
      },
      placeholder: '搜索文档',
      translations: {
        button: {
          buttonText: '搜索'
        },
        modal: {
          searchBox: {
            resetButtonTitle: '清除查询条件',
            resetButtonAriaLabel: '清除查询条件',
            cancelButtonText: '取消',
            cancelButtonAriaLabel: '取消'
          },
          startScreen: {
            recentSearchesTitle: '搜索历史',
            noRecentSearchesText: '没有搜索历史',
            saveRecentSearchButtonTitle: '保存到搜索历史',
            removeRecentSearchButtonTitle: '从搜索历史中移除',
            favoriteSearchesTitle: '收藏',
            removeFavoriteSearchButtonTitle: '从收藏中移除'
          },
          errorScreen: {
            titleText: '无法获取结果',
            helpText: '你可能需要检查你的网络连接'
          },
          footer: {
            selectText: '选择',
            navigateText: '切换',
            closeText: '关闭',
            searchByText: '搜索供应商'
          },
          noResultsScreen: {
            noResultsText: '无法找到相关结果',
            suggestedQueryText: '你可以尝试查询',
            reportMissingResultsText: '你认为这个查询应该有结果？',
            reportMissingResultsLinkText: '向我们反馈'
          }
        }
      },
    },

    // Using WwAds for China
    // carbonAds: {
    //   code: 'CEBIEK3N',
    //   placement: 'vitejsdev',
    // },

    footer: {
      message: `Released under the MIT License. (${commitRef})`,
      copyright:
        'Vite 官方中文团队。'
    },

    nav: [
      { text: '指引', link: '/guide/', activeMatch: '/guide/' },
      { text: '配置', link: '/config/', activeMatch: '/config/' },
      { text: '展示', link: '/team' },
      { text: '插件', link: '/plugins/', activeMatch: '/plugins/'},
      {
        text: '相关链接',
        items: [
          { text: 'Blog', link: '/blog' },
          { text: 'Releases', link: '/releases' },
          {
            items: [
              {
                text: 'Mastodon',
                link: 'https://i.543x.com',
              },
              {
                text: 'Twitter',
                link: 'https://r.543x.com',
              },
              {
                text: 'Discord 聊天室',
                link: 'https://a.434x.com'
              },
              {
                text: 'Awesome Vite',
                link: 'https://b.434x.com'
              },
              {
                text: 'ViteConf',
                link: 'https://www.252x.com',
              },
              {
                text: 'Dev.to 社区',
                link: 'https://www.z2.pw'
              },
              {
                text: '更新日志',
                link: 'https://a.z2.pw',
              },
              {
                text: '贡献指南',
                link: 'https://b.z2.pw',
              },
            ],
          },
        ]
      },
      {
        text: 'Version',
        items: [
          {
            text: 'Vite v4 文档（英文）',
            link: 'https://v4.vitejs.dev'
          },
          {
            text: 'Vite v3 文档（英文）',
            link: 'https://v3.vitejs.dev'
          },
          {
            text: 'Vite v2 文档（英文）',
            link: 'https://v2.vitejs.dev'
          },
        ]
      }
    ],

    sidebar: {
      '/guide/': [
        {
          text: '指引',
          items: [
            {
              text: '为什么选 Vite',
              link: '/guide/why'
            },
            {
              text: '开始',
              link: '/guide/'
            },
            {
              text: '功能',
              link: '/guide/features'
            },
            {
              text: '命令行界面',
              link: '/guide/cli'
            },
            {
              text: '使用插件',
              link: '/guide/using-plugins'
            },
            {
              text: '依赖预构建',
              link: '/guide/dep-pre-bundling'
            },
            {
              text: '静态资源处理',
              link: '/guide/assets'
            },
            {
              text: '构建生产版本',
              link: '/guide/build'
            },
            {
              text: '部署静态站点',
              link: '/guide/static-deploy'
            },
            {
              text: '环境变量与模式',
              link: '/guide/env-and-mode'
            },
            {
              text: '服务端渲染（SSR）',
              link: '/guide/ssr'
            },
            {
              text: '后端集成',
              link: '/guide/backend-integration'
            },
            {
              text: '比较',
              link: '/guide/comparisons'
            },
            {
              text: '故障排除',
              link: '/guide/troubleshooting'
            },
            {
              text: '性能',
              link: '/guide/performance',
            },
            {
              text: '理念',
              link: '/guide/philosophy',
            },
            {
              text: '从 v4 迁移',
              link: '/guide/migration'
            },
          ],
        },
        {
          text: 'API',
          items: [
            {
              text: '插件 API',
              link: '/guide/api-plugin'
            },
            {
              text: 'HMR API',
              link: '/guide/api-hmr',
            },
            {
              text: 'JavaScript API',
              link: '/guide/api-javascript',
            },
            {
              text: 'Vite 运行时 API',
              link: '/guide/api-vite-runtime',
            },
            {
              text: '配置参考',
              link: '/config/',
            },
          ],
        },
      ],
      '/config/': [
        {
          text: '配置',
          items: [
            {
              text: '配置 Vite',
              link: '/config/'
            },
            {
              text: '共享选项',
              link: '/config/shared-options'
            },
            {
              text: '服务器选项',
              link: '/config/server-options'
            },
            {
              text: '构建选项',
              link: '/config/build-options'
            },
            {
              text: '预览选项',
              link: '/config/preview-options'
            },
            {
              text: '依赖优化选项',
              link: '/config/dep-optimization-options'
            },
            {
              text: 'SSR 选项',
              link: '/config/ssr-options'
            },
            {
              text: 'Worker 选项',
              link: '/config/worker-options',
            },
            {
              text: '报告器',
              link: '/config/reporters'
            },
            {
              text: '测试快照',
              link: '/config/snapshot'
            },
            {
              text: '测试上下文',
              link: '/config/test-context'
            },
            {
              text: '类型测试',
              link: '/config/testing-types'
            },
            {
              text: 'Vitest UI',
              link: '/config/ui'
            },
            {
              text: '为什么是 Vitest',
              link: '/config/why'
            },
            {
              text: '工作空间',
              link: '/config/workspace'
            },
            {
              text: 'Vitest 配置文件',
              link: '/config/file',
            },
            {
              text: '配置文件',
              link: '/config/viteindex',
            },
          ],
        },
      ],
      '/plugins/': [
        {
          text: '插件',
          items: [
            {
              text: '相关 Vite',
              link: '/plugins/'
            },
            {
              text: '共享事件',
              link: '/plugins/events'
            },
            {
              text: '搜索选项',
              link: '/plugins/search'
            },
            {
              text: '构建element',
              link: '/plugins/element'
            },
            {
              text: 'gin-vue-admin',
              link: '/plugins/gin-vue-admin'
            },
            {
              text: '精选Vite列表',
               link: '/plugins/Vite.js-list'
            },
            {
              text: '试用 Vitest',
              link: '/plugins/Vitest'
            },
            {
              text: ' Web 应用',
              link: '/plugins/vitesse'
            },
            {
              text: 'cli-generated',
              link: '/plugins/cli-generated'
            },
            {
              text: '命令行界面',
              link: '/plugins/cli'
            },
            {
              text: '常见错误',
              link: '/plugins/common-errors'
            },
            {
              text: '框架对比',
              link: '/plugins/comparisons'
            },
            {
              text: '测试覆盖率',
              link: '/plugins/filtering'
            },
            {
              text: '调试',
               link: '/plugins/debugging'
            },
            {
              text: '测试环境',
              link: '/plugins/environment'
            },
            {
              text: '主要功能',
              link: '/plugins/features'
            },
            {
              text: '模拟对象',
              link: '/plugins/mocking'
            },
            {
              text: '性能优化',
               link: '/plugins/improving-performance'
            },
            {
              text: '源码内联测试',
              link: '/plugins/in-source'
            },
            {
              text: '迁移指南',
              link: '/plugins/migration'
            },
          ],
        },
      ],
    },
  },
  transformPageData(pageData) {
    const canonicalUrl = `${ogUrl}/${pageData.relativePath}`
      .replace(/\/index\.md$/, '/')
      .replace(/\.md$/, '/')
    pageData.frontmatter.head ??= []
    pageData.frontmatter.head.unshift(
      ['link', { rel: 'canonical', href: canonicalUrl }],
      ['meta', { property: 'og:title', content: pageData.title }],
    )
    return pageData
  },
  markdown: {
    codeTransformers: [transformerTwoslash()],
  },
  buildEnd,
})
