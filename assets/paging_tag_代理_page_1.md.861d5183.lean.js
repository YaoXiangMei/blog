import{u as t,o as a,c as e,a as s,g as r,w as i}from"./app.91463472.js";import{_ as n,P as l}from"./Pagination.982619a6.js";import{_ as c}from"./Tag.ef0d5bf8.js";const o='{"title":"","description":"","frontmatter":{"sidebar":false},"relativePath":"paging/tag/代理/page_1.md","lastUpdated":1634614378565}',g={};const p=Object.assign(g,{setup:function(o){const{theme:g}=t();g.value.pageSize;let p=g.value.articles;p=p.filter((({frontMatter:{tags:t=[]}})=>t.includes("代理"))),p=p.slice(0,3);const u=function(t){return i(`/paging/tag/代理/page_${t}.html`)};return(t,i)=>(a(),e("div",null,[s(c,{"current-tag":"代理"}),s(n,{articles:r(p)},null,8,["articles"]),s(l,{articles:r(p),"current-page":1,"page-count":1,href:u},null,8,["articles"])]))}});export{o as __pageData,p as default};
