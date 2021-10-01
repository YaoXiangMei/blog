import { ArticleModel } from '@/types'
export function getTag (article: ArticleModel[]): Record<string, string[]> {
  const res: Record<string, string[]> = {}
  return article.reduce((prev, curr): Record<string, string[]> => {
    const tags = curr.frontMatter.tags
    if (Array.isArray(tags)) {
      tags.forEach(item => {
        if (res[item]) {
          res[item].push(item)
        } else {
          res[item] = [item]
        }
      })
    }
    return res
  }, {})
}
