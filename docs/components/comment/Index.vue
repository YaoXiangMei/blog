<template>
  <div id="gitalk-container" />
</template>

<script setup lang="ts">
import 'gitalk/dist/gitalk.css'
import Gitalk from 'gitalk'
import { onMounted } from 'vue'

onMounted(() => {
  const commentConfig = {
    clientID: 'd3a02f75dfef399971d1',
    clientSecret: '859e1c0dbc356671bb43578d0541c392898ba07c',
    repo: 'blog',
    owner: 'YaoXiangMei',
    admin: ['YaoXiangMei'],
  }
  const gitalk = new Gitalk(commentConfig)
  gitalk.render('gitalk-container')
})
</script>
