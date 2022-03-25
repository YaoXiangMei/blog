---
title: adb无线调试
date: 2022-03-25
tags:
- adb
description: 通过wifi连接到Android设备
---
# 前提
1. 手机电脑连接同个网络
2. Android 11 及更高版本

# 步骤
1. adb 更新到最新版
2. 在设备上启用开发者选项。
3. 启用无线调试选项。
   <el-image
    class="w-6/12 mt-2 block"
    src="https://ad.qiniu.huishimed.com/1648198563029.jpg"
    :preview-src-list="['https://ad.qiniu.huishimed.com/1648198563029.jpg']">
    </el-image>
4. 点击无线调试，进入到
  <el-image
    class="w-6/12 mt-2 block"
    src="https://ad.qiniu.huishimed.com/1648199337728.jpg"
    :preview-src-list="['https://ad.qiniu.huishimed.com/1648199337728.jpg']">
    </el-image>
5. 点击“使用配对码配对设备”
   <el-image
    class="w-6/12 mt-2 block"
    src="https://ad.qiniu.huishimed.com/1648199904275.jpg"
    :preview-src-list="['https://ad.qiniu.huishimed.com/1648199904275.jpg']">
    </el-image>
6. 运行adb pair ipaddr:port 使用第5步中的IP地址和端口号
  <el-image
    class="w-6/12 mt-2 block"
    src="https://ad.qiniu.huishimed.com/1648199950811.png"
    :preview-src-list="['https://ad.qiniu.huishimed.com/1648199950811.png']">
    </el-image>
<comment />

<style scoped>
@import '@/.vitepress/theme/reset-tailwind'

</style>