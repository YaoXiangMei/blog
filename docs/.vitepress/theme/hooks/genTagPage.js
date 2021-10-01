const fs = require('fs-extra')
const path = require('path')
const template = require('art-template')
const { getArticleMDFilePaths, getArticles, getTags, getTagMap } = require('./useArticle')


const genArticleTagPage = async function (pageSize= 1) {
  const allArticles = await getArticles()
  const tags = getTags(allArticles)
  const tagMap = getTagMap(tags)
  tags.unshift('全部')
  tagMap['全部'] = allArticles.length
  tags.forEach(tag => {
    let articles = [...allArticles]
    if (tag !== '全部') {
      articles = allArticles.filter(({ frontMatter: { tags = [] } }) => {
        return tags.includes(tag)
      })
    }
    const articlesLen = articles.length
    let pageCount = articlesLen % pageSize === 0 ? articlesLen / pageSize : articlesLen / pageSize + 1
    pageCount = parseInt(pageCount.toString())
    const paths = path.resolve('./')
    if (!articlesLen) return
    for (let page = 1; page <= pageCount; page++) {
      const content = template(path.resolve(`${__dirname}`, './articleTag.art'), {
        data: {
          page,
          pageSize,
          pageCount,
          tag,
          tagMap
        },
      })
      const dir = `${paths}/docs/paging/tag/${tag}`
      const file = `${dir}/page_${page}.md`
      fs.ensureDirSync(dir)
      fs.writeFileSync(path.resolve(file), content)
    }
  })
}

module.exports = { genArticleTagPage }
