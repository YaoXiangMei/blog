import{u as a,o as t,c as e,a as s,g as r,w as i}from"./app.6d8e2a05.js";import{_ as n,P as l}from"./Pagination.9a46b813.js";import{_ as c}from"./Tag.d052f1cf.js";const o='{"title":"","description":"","frontmatter":{"sidebar":false},"relativePath":"paging/tag/性能/page_1.md","lastUpdated":1634611450522}',g={};const p=Object.assign(g,{setup:function(o){const{theme:g}=a();g.value.pageSize;let p=g.value.articles;p=p.filter((({frontMatter:{tags:a=[]}})=>a.includes("性能"))),p=p.slice(0,3);const u=function(a){return i(`/paging/tag/性能/page_${a}.html`)};return(a,i)=>(t(),e("div",null,[s(c,{"current-tag":"性能"}),s(n,{articles:r(p)},null,8,["articles"]),s(l,{articles:r(p),"current-page":1,"page-count":1,href:u},null,8,["articles"])]))}});export{o as __pageData,p as default};
