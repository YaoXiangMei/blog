<script setup>
import { withBase, useData } from 'vitepress'
const { theme } = useData()
import ArticleList from '@/components/article/List.vue'
import Pagination from '@/components/article/Pagination.vue'
import ArticleTag from '@/components/article/Tag.vue'
const pageSize = theme.value.pageSize
let articles = theme.value.articles
const tag = '抓包'

  articles = articles.filter(({ frontMatter: { tags = [] } }) => tags.includes('抓包'))

articles = articles.slice(1 * (1 - 1), 1 * 1)
const href = function (page) {
  return withBase(`/paging/tag/抓包/page_${page}.html`)
}
</script>
<article-tag :current-tag="'抓包'" />
<article-list :articles="articles" />
<pagination :articles="articles" :current-page="1" :page-count="1" :href="href" />
