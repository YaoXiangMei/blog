import{u as t,o as a,c as e,b as s,d as r,w as n}from"./app.69dbfc62.js";import{_ as i,P as c}from"./Pagination.06f7580e.js";import{_ as l}from"./Tag.7301391c.js";const o='{"title":"","description":"","frontmatter":{},"relativePath":"paging/tag/全部/page_1.md","lastUpdated":1633160409169}',p={};const g=Object.assign(p,{setup:function(o){const{theme:p}=t();p.value.pageSize;let g=p.value.articles;g=g.slice(0,1);const u=function(t){return n(`/paging/tag/全部/page_${t}.html`)};return(t,n)=>(a(),e("div",null,[s(l,{"current-tag":"全部"}),s(i,{articles:r(g)},null,8,["articles"]),s(c,{articles:r(g),"current-page":1,"page-count":2,href:u},null,8,["articles"])]))}});export{o as __pageData,g as default};
