import{u as a,o as t,c as e,b as s,e as r,w as n}from"./app.f62a8c80.js";import{_ as i,P as c}from"./Pagination.3a779a7d.js";import{_ as l}from"./Tag.d66c4439.js";const o='{"title":"","description":"","frontmatter":{},"relativePath":"paging/tag/全部/page_1.md","lastUpdated":1633192338849}',p={};const g=Object.assign(p,{setup:function(o){const{theme:p}=a();p.value.pageSize;let g=p.value.articles;g=g.slice(0,1);const u=function(a){return n(`/paging/tag/全部/page_${a}.html`)};return(a,n)=>(t(),e("div",null,[s(l,{"current-tag":"全部"}),s(i,{articles:r(g)},null,8,["articles"]),s(c,{articles:r(g),"current-page":1,"page-count":2,href:u},null,8,["articles"])]))}});export{o as __pageData,g as default};
