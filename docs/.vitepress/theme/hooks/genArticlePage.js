const fs = require('fs-extra')
const path = require('path')
const template = require('art-template')
const { getArticleMDFilePaths } = require('./useArticle')
template.defaults.htmlMinifierOptions = {
  collapseWhitespace: false,
}
async function genArticlePage(pageSize= 1) {
  const allPagesLen = [...(await getArticleMDFilePaths())].length
  let pageCount = allPagesLen % pageSize === 0 ? allPagesLen / pageSize : allPagesLen / pageSize + 1
  pageCount = parseInt(pageCount.toString())

  const paths = path.resolve('./')
  if (!allPagesLen) return
  for (let page = 1; page <= pageCount; page++) {
    const content = template(path.resolve(`${__dirname}`, './article.art'), {
      data: {
        page,
        pageSize,
        pageCount,
      },
    })
    const dir = `${paths}/docs/paging/article`
    const file = `${dir}/page_${page}.md`
    fs.ensureDirSync(dir)
    await fs.writeFile(file, content)
  }
  await fs.copyFileSync(paths + '/docs/paging/article/page_1.md', paths + '/docs/index.md')
}
module.exports = { genArticlePage }
