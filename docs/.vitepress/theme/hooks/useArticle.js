const globby = require('globby')
const matter = require('gray-matter')
const fs = require('fs-extra')
const path = require('path')
async function getArticleMDFilePaths() {
  const paths = await globby(['docs/article/**/*.md'], {
      ignore: ['node_modules', 'README.md']
  })
  return paths
  // return paths.filter((item) => item.includes('article/'))
}

async function getArticles() {
  const paths = await getArticleMDFilePaths()
  const articles = await Promise.all(
      paths.map(async (item) => {
          const content = await fs.readFile(item, 'utf-8')
          const { data } = matter(content)
          data.formatDate = data.date.toJSON().split('T')[0]
          const detailPath = `/${item.replace('.md', '.html')}`.replace(/^\/docs/, '')
          return {
              frontMatter: data,
              detailPath
          }
      })
  )
  articles.sort((a, b) => {
    return new Date(b.frontMatter.date).getTime() - new Date(a.frontMatter.date).getTime()
  })
  return [...articles]
}

const getTags = function (data) {
  return data.reduce((prev, { frontMatter: { tags = [] } }) => {
    return [...prev, ...tags]
  }, [])
}
const getTagMap = function (data = []) {
  return data.reduce((prev, curr) => {
    if (prev[curr]) {
      prev[curr]++
    } else {
      prev[curr] = 1
    }
    return prev
  }, {})
}

module.exports = { getArticles, getArticleMDFilePaths, getTags, getTagMap }
