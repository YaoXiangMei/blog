var _=Object.defineProperty,f=Object.defineProperties;var x=Object.getOwnPropertyDescriptors;var o=Object.getOwnPropertySymbols;var T=Object.prototype.hasOwnProperty,B=Object.prototype.propertyIsEnumerable;var n=(s,e,a)=>e in s?_(s,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):s[e]=a,c=(s,e)=>{for(var a in e||(e={}))T.call(e,a)&&n(s,a,e[a]);if(o)for(var a of o(e))B.call(e,a)&&n(s,a,e[a]);return s},l=(s,e)=>f(s,x(e));import{e as C,u as b,o as p,c as u,F as v,r as y,a as t,i as E,t as d,n as M,d as j}from"./app.d320ba90.js";import{r as k}from"./Pagination.00ec1477.js";const w={class:"flex items-center space-x-4 pt-4 text-white"},D=["href"],z=C({props:{currentTag:{type:String,required:!0}},setup(s){const{theme:e}=b(),a=e.value.tagMap,i=e.value.tags,g=["\u5168\u90E8",...i],m=l(c({},a),{\u5168\u90E8:e.value.articles.length});return(F,N)=>(p(),u("ul",w,[(p(),u(v,null,y(g,(r,h)=>t("li",{key:h,class:M([[j(k)(),r===s.currentTag?"p-1":"p-0.5"],"pr-2 pl-2 rounded-md border border-opacity-80 rounded-md shadow-lg cursor-pointer"])},[t("a",{href:`../${r}/page_1.html`},[E(d(r)+" ",1),t("small",null,d(m[r]),1)],8,D)],2)),64))]))}});export{z as _};
