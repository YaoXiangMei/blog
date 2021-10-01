<template>
  <div>
    <article-item
      v-for="(article, index) in articles"
      :key="index"
      :article="article"
    />
  </div>
</template>

<script setup lang="ts">
import { ArticleModel } from '@/types'
import ArticleItem from './Item.vue'

defineProps<{ articles: ArticleModel[] }>()
</script>

<style>

</style>
