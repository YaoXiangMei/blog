---
title: fiddler
date: 2021-10-11
tags:
- fiddler
- 代理
- 抓包
description: 使用代理来开发微信公众号
---
# 本地开发微信公众号
::: tip 提示
下面例子以一个vuecli+vue项目为例
:::
## 1. 启动项目
```bash
  npm run serve
```
## 2. main.js中加入以下代码
```js
  // 用来查看是否代理远程成功
  alert('fiddler proxy')
```
## 3. http代理设置方法
::: tip 我的远程地址
http://ad.maissy.net/doctor/index.html
:::
1. 打开fiddler, 工具栏 Tools -> Host Remapping
2. 设置一下域名映射127.0.0.1:80 ad.maissy.net，然后点击保存（80为本地服务的端口可以省略）  
    <el-image
    class="w-6/12 mt-2"
    src="https://ad.qiniu.huishimed.com/1633937684363.png"
    :preview-src-list="['https://ad.qiniu.huishimed.com/1633937684363.png']">
    </el-image>
3. pc打开远程地址http://ad.maissy.net/doctor/index.html#/index，显示如下  
    <el-image
    class="w-6/12 mt-2"
    src="https://ad.qiniu.huishimed.com/1633938664731.png"
    :preview-src-list="['https://ad.qiniu.huishimed.com/1633938664731.png']">
    </el-image>
4. 微信开发者工具同pc端直接打开链接便可（无法抓包的话需要设置下代理，微信开发者工具 -> 设置 -> 代理设置 -> 手动设置代理 -> 127.0.0.1:8888）  
5. 手机在设置好代理之后打开远程地址http://ad.maissy.net/doctor/index.html#/index，显示如下  
    <el-image
    class="w-3/12 mt-2"
    src="https://ad.qiniu.huishimed.com/1633939383618.jpg"
    :preview-src-list="['https://ad.qiniu.huishimed.com/1633939383618.jpg']">
    </el-image>  
<br />
## 4. https代理设置方法（http也行）
::: tip 我的远程地址
https://ad.huishimed.com/doctor/index.html
:::
1. 在vue.config.js的devServer开启https
```js
  devServer: {
    disableHostCheck: true,
    https: true,
  }
```
2. 打开fiddler，点击AutoResponder -> Add Rule
3. 勾选上Enable rule 和 Unmatched requests passthrough
4. 在Request URL Pattern 和 Local File 中分别输入
```
regex:https://ad.huishimed.com/doctor\/(?<name>.+)$
https://localhost:80/doctor/$1
```
<el-image
  class="w-6/12"
  src="https://ad.qiniu.huishimed.com/1633943760092.png"
  :preview-src-list="['https://ad.qiniu.huishimed.com/1633943760092.png']">
</el-image>  

5. 微信开发者工具打开远程地址  

  <el-image
  class="w-6/12 mb-4"
  src="https://ad.qiniu.huishimed.com/1633941599640.png"
  :preview-src-list="['https://ad.qiniu.huishimed.com/1633941599640.png']">
</el-image>

## 总结
fiddler AutoResponder，用本地文件来替换线上文件，这样我们对于我们处理线上的bug非常有用，有些网站对浏览者做了一些限制，我们可以把改网站的一些js、css、图片扒拉下来做一些修改以达到我们访问的需求

<comment />

<style scoped>
@import '@/.vitepress/theme/reset-tailwind'
</style>