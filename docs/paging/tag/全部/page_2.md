<script setup>
import { withBase, useData } from 'vitepress'
const { theme } = useData()
import ArticleList from '@/components/article/List.vue'
import Pagination from '@/components/article/Pagination.vue'
import ArticleTag from '@/components/article/Tag.vue'
const pageSize = theme.value.pageSize
let articles = theme.value.articles
const tag = '全部'

articles = articles.slice(1 * (2 - 1), 1 * 2)
const href = function (page) {
  return withBase(`/paging/tag/全部/page_${page}.html`)
}
</script>
<article-tag :current-tag="'全部'" />
<article-list :articles="articles" />
<pagination :articles="articles" :current-page="2" :page-count="2" :href="href" />
