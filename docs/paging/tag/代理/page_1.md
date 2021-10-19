---
sidebar: false
---
<script setup>
import { withBase, useData } from 'vitepress'
const { theme } = useData()
import ArticleList from '@/components/article/List.vue'
import Pagination from '@/components/article/Pagination.vue'
import ArticleTag from '@/components/article/Tag.vue'
const pageSize = theme.value.pageSize
let articles = theme.value.articles
const tag = '代理'

  articles = articles.filter(({ frontMatter: { tags = [] } }) => tags.includes('代理'))

articles = articles.slice(3 * (1 - 1), 3 * 1)
const href = function (page) {
  return withBase(`/paging/tag/代理/page_${page}.html`)
}
</script>
<article-tag :current-tag="'代理'" />
<article-list :articles="articles" />
<pagination :articles="articles" :current-page="1" :page-count="1" :href="href" />
