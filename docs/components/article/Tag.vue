<template>
  <ul class="flex items-center space-x-4 pt-4 text-white">
    <li
      v-for="(item, key) in superTags"
      :key="key"
      :class="[randomBgColorClass(), item === currentTag ? 'p-1' : 'p-0.5']"
      class="pr-2 pl-2 rounded-md border border-opacity-80 rounded-md shadow-lg cursor-pointer"
    >
      <a :href="`../${item}/page_1.html`">{{ item }} <small>{{ superTagMap[item] }}</small></a>
    </li>
  </ul>
</template>

<script setup lang="ts">
import { useData } from 'vitepress'
import { randomBgColorClass } from '@/helpers'
defineProps({
  currentTag: {
    type: String,
    required: true,
  },
})
const { theme } = useData()
const tagMap = theme.value.tagMap
const tags = theme.value.tags
const superTags = ['全部', ...tags]
const superTagMap = {
  ...tagMap,
  全部: theme.value.articles.length,
}

</script>

<style>

</style>
