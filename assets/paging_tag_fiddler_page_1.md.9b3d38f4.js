import{u as t,o as a,c as e,a as r,f as s,w as i}from"./app.5d37d67f.js";import{_ as l,P as n}from"./Pagination.c60642d1.js";import{_ as c}from"./Tag.148a1ab8.js";const o='{"title":"","description":"","frontmatter":{},"relativePath":"paging/tag/fiddler/page_1.md","lastUpdated":1633773232263}',d={};const f=Object.assign(d,{setup:function(o){const{theme:d}=t();d.value.pageSize;let f=d.value.articles;f=f.filter((({frontMatter:{tags:t=[]}})=>t.includes("fiddler"))),f=f.slice(0,3);const g=function(t){return i(`/paging/tag/fiddler/page_${t}.html`)};return(t,i)=>(a(),e("div",null,[r(c,{"current-tag":"fiddler"}),r(l,{articles:s(f)},null,8,["articles"]),r(n,{articles:s(f),"current-page":1,"page-count":1,href:g},null,8,["articles"])]))}});export{o as __pageData,f as default};
