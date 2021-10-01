<template>
  <a
    :href="withBase(detailPath)"
    class="block my-4 p-4 border border-opacity-80 rounded-md shadow-lg cursor-pointer
          hover:shadow-xl transition-all transform hover:scale-105 hover:-translate-y-0.5"
  >
    <section class="flex justify-between">
      <h1 class="text-2xl hover:underline hover:text-primary">
        {{ frontMatter.title }}
      </h1>
      <span class="text-gray-400">
        {{ frontMatter.formatDate }}
      </span>
    </section>
    <p class="text-gray-400">
      {{ frontMatter.description }}
    </p>
    <ul class="flex space-x-2 pt-2 text-white text-xs">
      <li
        v-for="item in frontMatter.tags"
        :key="item"
        :class="[randomBgColorClass()]"
        class="p-1 pr-2 pl-2 rounded-md border border-opacity-80 rounded-md shadow-lg cursor-pointer"
      >
        {{ item }}
      </li>
    </ul>
  </a>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { ArticleModel } from '@/types'
import { randomBgColorClass } from '@/helpers'
import { withBase } from 'vitepress'
const props = defineProps<{
  article: ArticleModel,
}>()
const frontMatter = computed(() => props.article.frontMatter)
const detailPath = computed(() => props.article.detailPath)
</script>

<style>

</style>
