---
title: JSON.parse
date: 2021-10-19
tags:
- JSON.parse
- bug
description: 一个NaN导致JSON.parse解析失败的故事
---
# NaN导致JSON.parse解析失败
## JSON.parse()
::: tip 官方定义
JSON.parse() 方法用来解析JSON字符串，构造由字符串描述的JavaScript值或对象。提供可选的 reviver 函数用以在返回之前对所得到的对象执行变换(操作)。
:::
### 例子
```js
const json = '{"result":true, "count":42}';
const obj = JSON.parse(json);

console.log(obj.count);
// expected output: 42

console.log(obj.result);
// expected output: true

```

## 缘由

<strong class="text-sm text-red-500">
公司和其它公司合作开发一个项目，我们出前端，B出后端，在对接一个列表接口的时候出现了兼容问题, 返回的数据有时候是string，有时候是object。
我们用的是axios请求接口，我猜测原因可能如下  
</strong>

1. 后端数据格式本来就有问题
2. axios转化了数据
3. 浏览器转化了数据  
   
<br />

## 开始查找问题
### 1. 使用nodejs的http请求库request请求数据，查看结果返回的数据类型
   
::: tip 参数说明
sample_id为空返回所以列表数据，sample_id有值则返回改样品的列表数据现在有两个样品id为PMD0000000何AD123456
:::

```js
const request = require('request')
function getData(){
    return new Promise((resolve, reject)=>{
        const url = `http://xxx/sample_table`
        request({
            method: 'post',
            url: url,
            headers: {
              Authorization: 'xxx',
            },
            formData: {
              sample_status: '',
              start_date: '',
              end_date: '',
              sample_id: '' // 样品id
            },
        }, (err, response, body)=>{
          // 无论是sample_id等于PMD0000000，还是等于AD123456，输出结果都是string
          console.log(typeof response.body)
          console.log(response.body)
        })
    })
}

sample_id = PMD0000000结果
`{
	"feedback": {
		"table": [{
			"age": 22,
			"cg_date": "Mon, 27 Sep 2021 10:38:14 GMT",
			"finance_check": "已通过",
			"name": "test222",
			"salesman": "测试者",
			"sample_date": "Thu, 02 Sep 2021 00:00:00 GMT",
			"sample_id": "PMD0000000",
			"sex": "女",
			"sp_st": "待接收"
		}],
		"total": 1
	},
	"return": "successes"
}`

sample_id = AD123456结果
`{
  "feedback": {
    "table": [
      {
        "age": NaN, 
        "cg_date": "Thu, 02 Sep 2021 09:21:50 GMT", 
        "finance_check": "待复审", 
        "name": NaN, 
        "salesman": "测试者", 
        "sample_date": "Thu, 02 Sep 2021 00:00:00 GMT", 
        "sample_id": "AD12345", 
        "sex": NaN, 
        "sp_st": ""
      }
    ], 
    "total": 1
  }, 
  "return": "successes"
}`

```
根据结果可以看到response.body永远都是string，这说明是axios或者是浏览器把string转换了json数据  

### 2. 确认是不是浏览器将字符串转换成json
<ul>
 <li>
   打开浏览器开发者工具
 </li>
 <li>
   打开network，选中接口，点击Initiator查看axios是否进行了转化数据（或者直接去看源码），发现并没有相关的代码
 </li>
 <li>
   点击Prview面板，结果发现sample_id = PMD0000000接口返回的数据可以折叠，sample_id = AD12345接口返回的数据却无法折叠
 </li>
</ul>
<strong class="text-sm text-red-500">
以上操作足以说明是浏览器转化了数据，但是为什么有的转化有的不转化呢？，带着疑问仔细观察了AD123456返回的数据，有几个字段的值是NaN，所以有可能是NaN导致解析失败  
</strong>

```js
const person = `{"name":NaN}`
JSON.parse(person)
// 抛错如下
Uncaught SyntaxError: Unexpected token N in JSON at position 8
这说明它建NaN当字符串处理了

```
```js
const person = `{"name":"NaN"}`
JSON.parse(person) // 解析成功

```

<p>
问题根源已经找到，就是根源已经定位成功，NaN导致JSON.parse解析失败，最后解决方法是让后端处理下NaN数据
</p>

<comment />

<style scoped>
@import '@/.vitepress/theme/reset-tailwind'
</style>