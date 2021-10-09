const { getArticles, getTags, getTagMap } = require('./theme/hooks/useArticle')
const { genArticlePage } = require('./theme/hooks/genArticlePage')
const { genArticleTagPage } = require('./theme/hooks/genTagPage')

const config = async function () {
  const pageSize = 3
  await genArticlePage(pageSize)
  await genArticleTagPage(pageSize)
  const articles = await getArticles()
  const tags = getTags(articles)
  const tagMap = getTagMap(tags)
  return {
    lang: 'zh-cn',
    title: 'megt',
    description: '',
    base: '/blog/',
    themeConfig: {
      repo: 'YaoXiangMei/blog',
      docsDir: 'docs',

      // editLinks: true,
      // editLinkText: 'Edit this page on GitHub',
      // lastUpdated: 'Last Updated',

      // algolia: {
      //   apiKey: 'c57105e511faa5558547599f120ceeba',
      //   indexName: 'vitepress'
      // },

      // carbonAds: {
      //   carbon: 'CEBDT27Y',
      //   custom: 'CKYD62QM',
      //   placement: 'vuejsorg'
      // },
      pageSize,
      articles,
      tags,
      tagMap,
      nav: [
        { text: '文章', link: '/', activeMatch: '^/$|^/paging/article/' },
        {
          text: '标签',
          link: '/paging/tag/全部/page_1.html',
          activeMatch: '^/paging/tag/'
        }
      ],

      sidebar: {
        '/config/': getConfigSidebar()
      },
      search: true
    },
    plugins: [
      require('tailwindcss'),
      require('autoprefixer')
    ]
  }

  function getGuideSidebar() {
    return [
      {
        text: '安装',
        children: [
          { text: '什么是 VitePress?', link: '/' },
          { text: '开始', link: '/guide/getting-started' },
          { text: '配置', link: '/guide/configuration' },
          { text: '静态文件处理', link: '/guide/assets' },
          { text: 'Markdown 扩展', link: '/guide/markdown' },
          { text: '在vue中使用Markdown', link: '/guide/using-vue' },
          { text: '部署', link: '/guide/deploy' }
        ]
      },
      {
        text: '高级',
        children: [
          { text: '前置', link: '/guide/frontmatter' },
          { text: 'Theming', link: '/guide/theming' },
          { text: 'API Reference', link: '/guide/api' },
          {
            text: 'Differences from Vuepress',
            link: '/guide/differences-from-vuepress'
          }
        ]
      }
    ]
  }
}

module.exports = config()

function getConfigSidebar() {
  return [
    {
      text: 'App Config',
      children: [{ text: 'Basics', link: '/config/basics' }]
    },
    {
      text: 'Theme Config',
      children: [
        { text: 'Homepage', link: '/config/homepage' },
        { text: 'Algolia Search', link: '/config/algolia-search' },
        { text: 'Carbon Ads', link: '/config/carbon-ads' }
      ]
    }
  ]
}
