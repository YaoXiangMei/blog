---
title: vitepress搭建博客
date: 2021-10-08
tags:
- vitepress
- vite
description: 使用vitepress+element-plus+tailwindcss搭建博客
---
## 使用的技术栈  
```
* vite
* vitepress
* alt-template
* element-plus
* tailwindcss
* gitalk  
```
## 已完成的功能  
```
* 所有的文章列表
* 按标签分类的文章列表
* gitalk添加评论
* github actions自动编译部署到gh-pages
```
## 待完成的功能  
```
* 加入algolia搜索公能
* element-plus按需加载
* 使用tailwindcss开发第一次加载比较慢的问题  
```
## 遇到的问题及解决方法
1. alt-template生成md文件，在生产环境编译的时候会合并空格导致编译失败，需要设置一下
``` js
template.defaults.htmlMinifierOptions = {
  collapseWhitespace: false,
}
```
2. element-plus按需引入的时候，el-icon不显示的问题，需要在全局注册一下ElIcon组件
``` js
import { ElIcon } from 'element-plus'
export default {
    enhanceApp({ app }) {
      app.use(ElIcon)
    }
}
```
1. gitalk报Error: Validation Failed的错误，是因为配置的id字段超出了限制，给location.pathname用md5转换一下就妥当了
``` js
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
    id: Md5.hashStr(location.pathname),
  }
  const gitalk = new Gitalk(commentConfig)
  gitalk.render('gitalk-container')
})
```
4. element-plus按需加载的问题
``` js
使用vite-plugin-style-import插件，配置如下，编译到生产环境报错，所以放弃使用了
import styleImport from 'vite-plugin-style-import'
export default {
  resolve: {
    alias: {
      vue: 'vue/dist/vue.esm-bundler.js',
    },
  },
  plugins: [
    styleImport({
      libs: [
        {
          libraryName: 'element-plus',
          resolveStyle: (name) => {
            return `element-plus/theme-chalk/${name}.css`
          },
          resolveComponent: (name) => {
            return `element-plus/lib/${name}`
          },
        },
      ],
    }),
  ],
}
```
``` js
使用unplugin-vue-components但是只支持nodejs的14.x版本及以上，而14.x版本需要window8.1及以上系统
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import Components from 'unplugin-vue-components/vite'
export default {
  plugins: [
    Components({
      resolvers: [
        ElementPlusResolver(),
      ],
    }),
  ],
}
```
<style scoped>
ol {
  list-style-type: decimal;
}
</style>
<comment />
