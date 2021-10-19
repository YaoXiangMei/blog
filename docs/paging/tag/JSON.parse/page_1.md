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
const tag = 'JSON.parse'

  articles = articles.filter(({ frontMatter: { tags = [] } }) => tags.includes('JSON.parse'))

articles = articles.slice(3 * (1 - 1), 3 * 1)
const href = function (page) {
  return withBase(`/paging/tag/JSON.parse/page_${page}.html`)
}
</script>
<article-tag :current-tag="'JSON.parse'" />
<article-list :articles="articles" />
<pagination :articles="articles" :current-page="1" :page-count="1" :href="href" />