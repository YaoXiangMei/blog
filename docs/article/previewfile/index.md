---
title: 在线预览文件
date: 2022-01-15
tags:
- iframe
description: 在线预览doc、xls、ppt、pdf
---
# 利用微软的Office Online在线预览Office文档
[文档地址](https://www.microsoft.com/zh-cn/microsoft-365/free-office-online-for-the-web)

### 前置条件

1. 在浏览器是可以访问的
2. 需要域名访问、ip无效
3. 支持的格式
   > + Word：docx、docm、dotm、dotx
   > + Excel：xlsx、xlsb、xls、xlsm
   > + PowerPoint：pptx、ppsx、ppt、pps、pptm、potm、ppam、potx、ppsm

```html
例子
https://view.officeapps.live.com/op/view.aspx?src=xxx
https://view.officeapps.live.com/op/view.aspx?src=http://qn.gyl.huishimed.com/1646037841290/服务内容说明函.docx
```

<!-- # pdf可以直接用链接或iframe预览

```html
例子
<iframe id="container" scr="http://qn.gyl.huishimed.com/深圳市关于留深过年补贴细则.pdf" width="100%" height="100%" frameborder="0"></iframe>
``` -->

# 封装成iframe，在业务中使用
```html

<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>文件预览</title>
    <style type="text/css">
      * {
        margin: 0;
      }
      body {
        width: 100vw;
        height: 100vh;
      }
    </style>
  </head>
  <body>
    <iframe id="container" width="100%" height="100%" frameborder="0"></iframe>
    <script type="text/javascript">
      // 获取url参数
      var getQueryVariable = function (variable) {
        var query = window.location.search.substring(1);
        var vars = query.split("&");
        for (var i = 0; i < vars.length; i++) {
          var pair = vars[i].split("=");
          if (pair[0] == variable) {
            return pair[1];
          }
        }
        return false;
      };
      // 获取文件扩展名
      var getType = function (fileUrl) {
        // return fileUrl.split(".").pop().toLowerCase();
        const data = /\.[^\.]+$/.exec(fileUrl);
        return data ? data[0] : false;
      };
      var docTypes = [".doc", ".docx", ".xls", ".xlsx", ".ppt", ".pptx"];
      var load = function () {
        var fileUrl = getQueryVariable("fileUrl");
        if (!fileUrl)
          throw "请传入文件在线地址：http://qn.gyl.huishimed.com/file-preview.html?fileUrl=xxx";

        var fileType = getQueryVariable("fileType") || getType(fileUrl);
        // if (!fileType) throw "未知的文件";

        var container = document.querySelector("#container");

        if (docTypes.includes(fileType)) {
          // 微软在线预览地址
          var onlineContainerUrl =
            "https://view.officeapps.live.com/op/view.aspx";
          container.src = onlineContainerUrl + "?src=" + fileUrl;
        } else {
          container.type = "application/x-google-chrome-pdf";
          container.src = fileUrl;
        }
      };
      window.addEventListener("load", load);
    </script>
  </body>
</html>

```
## 使用
```js
const VITE_QIUNIU_DOMAIN = 'http://qn.gyl.huishimed.com/file-preview.html'
const fileUrl = 'http://qn.gyl.huishimed.com/深圳市关于留深过年补贴细则.pdf' | 'http://qn.gyl.huishimed.com/1646037841290/服务内容说明函.docx'
window.open(`${VITE_QIUNIU_DOMAIN}file-preview.html?fileUrl=${fileUrl}`)
```

<comment />

<style scoped>
@import '@/.vitepress/theme/reset-tailwind'
</style>