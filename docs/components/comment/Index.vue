<template>
  <div id="gitalk-container" />
</template>

<script setup lang="ts">
import 'gitalk/dist/gitalk.css'
import Gitalk from 'gitalk'
import { onMounted } from 'vue'
import { Md5 } from 'ts-md5/dist/md5'

onMounted(() => {
  const commentConfig = {
    clientID: 'd3a02f75dfef399971d1',
    clientSecret: '859e1c0dbc356671bb43578d0541c392898ba07c',
    repo: 'blog',
    owner: 'YaoXiangMei',
    admin: ['YaoXiangMei'],
    id: Md5.hashStr('location.href'),
  }
  const gitalk = new Gitalk(commentConfig)
  gitalk.render('gitalk-container')
})
</script>
