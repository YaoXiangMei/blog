import{u as t,o as e,c as a,a as s,g as r,w as i}from"./app.b861e993.js";import{_ as n,P as l}from"./Pagination.a3c15129.js";import{_ as c}from"./Tag.2c36bd30.js";const p='{"title":"","description":"","frontmatter":{"sidebar":false},"relativePath":"paging/tag/vitepress/page_1.md","lastUpdated":1634609769572}',o={};const g=Object.assign(o,{setup:function(p){const{theme:o}=t();o.value.pageSize;let g=o.value.articles;g=g.filter((({frontMatter:{tags:t=[]}})=>t.includes("vitepress"))),g=g.slice(0,3);const u=function(t){return i(`/paging/tag/vitepress/page_${t}.html`)};return(t,i)=>(e(),a("div",null,[s(c,{"current-tag":"vitepress"}),s(n,{articles:r(g)},null,8,["articles"]),s(l,{articles:r(g),"current-page":1,"page-count":1,href:u},null,8,["articles"])]))}});export{p as __pageData,g as default};