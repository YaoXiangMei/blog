import{f as e,g as r,o as a,c as t,a as s,t as n,e as o,F as l,h as p,n as u,w as i,i as c,_ as d,u as g,j as h,b as y,E as f}from"./app.f62a8c80.js";const x=["gray","red","green","yellow","green","blue","indigo","purple","pink"],m=[300,400,500,600,700,800,900],b=function(e,r){return Math.floor(Math.random()*(r-e)+e)},v=function(){return`bg-${x[b(0,x.length)]}-${m[b(0,m.length)]}`},w=["href"],k={class:"flex justify-between"},q={class:"text-2xl hover:underline hover:text-primary"},j={class:"text-gray-400"},C={class:"text-gray-400"},P={class:"flex space-x-2 pt-2 text-white text-xs"},_=e({props:{article:{type:null,required:!0}},setup(e){const c=e,d=r((()=>c.article.frontMatter)),g=r((()=>c.article.detailPath));return(e,r)=>(a(),t("a",{href:o(i)(o(g)),class:"block my-4 p-4 border border-opacity-80 rounded-md shadow-lg cursor-pointer hover:shadow-xl transition-all transform hover:scale-105 hover:-translate-y-0.5"},[s("section",k,[s("h1",q,n(o(d).title),1),s("span",j,n(o(d).formatDate),1)]),s("p",C,n(o(d).description),1),s("ul",P,[(a(!0),t(l,null,p(o(d).tags,(e=>(a(),t("li",{key:e,class:u([[o(v)()],"p-1 pr-2 pl-2 rounded-md border border-opacity-80 rounded-md shadow-lg cursor-pointer"])},n(e),3)))),128))])],8,w))}}),z=e({props:{articles:{type:Array,required:!0}},setup:e=>(r,s)=>(a(),t("div",null,[(a(!0),t(l,null,p(e.articles,((e,r)=>(a(),c(_,{key:r,article:e},null,8,["article"])))),128))]))});const M={class:"flex justify-center py-2"};var F=d(e({props:{currentPage:{type:Number,required:!0},pageCount:{type:Number,required:!0},href:{type:Function,required:!0}},setup(e){const s=e,{theme:n}=g(),l=n.value.pageSize,p=r((()=>s.pageCount)),u=p.value<=1,i=h(),c=function(e){i.go(s.href(e))};return(r,s)=>(a(),t("div",M,[y(o(f),{background:"","page-size":o(l),"hide-on-single-page":u,layout:"prev, pager, next","page-count":o(p),"current-page":e.currentPage,onCurrentChange:c},null,8,["page-size","page-count","current-page"])]))}}),[["__scopeId","data-v-769226ce"]]);export{F as P,z as _,v as r};
