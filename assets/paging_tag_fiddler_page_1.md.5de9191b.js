import{u as a,o as t,c as e,a as r,g as s,w as i}from"./app.6d8e2a05.js";import{_ as l,P as n}from"./Pagination.9a46b813.js";import{_ as c}from"./Tag.d052f1cf.js";const o='{"title":"","description":"","frontmatter":{"sidebar":false},"relativePath":"paging/tag/fiddler/page_1.md","lastUpdated":1634611450522}',d={};const f=Object.assign(d,{setup:function(o){const{theme:d}=a();d.value.pageSize;let f=d.value.articles;f=f.filter((({frontMatter:{tags:a=[]}})=>a.includes("fiddler"))),f=f.slice(0,3);const g=function(a){return i(`/paging/tag/fiddler/page_${a}.html`)};return(a,i)=>(t(),e("div",null,[r(c,{"current-tag":"fiddler"}),r(l,{articles:s(f)},null,8,["articles"]),r(n,{articles:s(f),"current-page":1,"page-count":1,href:g},null,8,["articles"])]))}});export{o as __pageData,f as default};
