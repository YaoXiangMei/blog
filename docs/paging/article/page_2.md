<script setup>
import { withBase, useData } from 'vitepress'
const { theme } = useData()
import ArticleList from '@/components/article/List.vue'
import Pagination from '@/components/article/Pagination.vue'
const pageSize = theme.value.pageSize
const articles = theme.value.articles.slice(1 * (2 - 1), 1 * 2)
const href = function (page) {
  return withBase(`/paging/article/page_${page}.html`)
}
</script>
<article-list :articles="articles" />
<pagination :articles="articles" :current-page="2" :page-count="2" :href="href" />
