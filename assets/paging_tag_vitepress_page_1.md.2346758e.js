import{u as t,o as e,c as a,a as s,g as r,w as i}from"./app.4cf56bf8.js";import{_ as n,P as c}from"./Pagination.c8c365d7.js";import{_ as l}from"./Tag.b0240a5f.js";const p='{"title":"","description":"","frontmatter":{},"relativePath":"paging/tag/vitepress/page_1.md","lastUpdated":1633944748448}',o={};const g=Object.assign(o,{setup:function(p){const{theme:o}=t();o.value.pageSize;let g=o.value.articles;g=g.filter((({frontMatter:{tags:t=[]}})=>t.includes("vitepress"))),g=g.slice(0,3);const u=function(t){return i(`/paging/tag/vitepress/page_${t}.html`)};return(t,i)=>(e(),a("div",null,[s(l,{"current-tag":"vitepress"}),s(n,{articles:r(g)},null,8,["articles"]),s(c,{articles:r(g),"current-page":1,"page-count":1,href:u},null,8,["articles"])]))}});export{p as __pageData,g as default};