import{u as a,o as e,c as t,b as s,e as i,w as r}from"./app.ec6e96f8.js";import{_ as n,P as l}from"./Pagination.0be9a973.js";const c='{"title":"","description":"","frontmatter":{},"relativePath":"paging/article/page_2.md","lastUpdated":1633675254298}',o={};const p=Object.assign(o,{setup:function(c){const{theme:o}=a();o.value.pageSize;const p=o.value.articles.slice(1,2),u=function(a){return r(`/paging/article/page_${a}.html`)};return(a,r)=>(e(),t("div",null,[s(n,{articles:i(p)},null,8,["articles"]),s(l,{articles:i(p),"current-page":2,"page-count":2,href:u},null,8,["articles"])]))}});export{c as __pageData,p as default};
