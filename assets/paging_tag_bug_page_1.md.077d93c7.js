import{u as a,o as t,c as e,a as s,g as r,w as i}from"./app.6d8e2a05.js";import{_ as n,P as l}from"./Pagination.9a46b813.js";import{_ as g}from"./Tag.d052f1cf.js";const c='{"title":"","description":"","frontmatter":{"sidebar":false},"relativePath":"paging/tag/bug/page_1.md","lastUpdated":1634611450522}',u={};const o=Object.assign(u,{setup:function(c){const{theme:u}=a();u.value.pageSize;let o=u.value.articles;o=o.filter((({frontMatter:{tags:a=[]}})=>a.includes("bug"))),o=o.slice(0,3);const p=function(a){return i(`/paging/tag/bug/page_${a}.html`)};return(a,i)=>(t(),e("div",null,[s(g,{"current-tag":"bug"}),s(n,{articles:r(o)},null,8,["articles"]),s(l,{articles:r(o),"current-page":1,"page-count":1,href:p},null,8,["articles"])]))}});export{c as __pageData,o as default};