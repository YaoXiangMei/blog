import{_ as e,g as t,u as a,h as s,f as i,o as l,c as o,d as n,w as r,l as c,t as v,j as u,N as f,F as d,i as m,r as k,a as p,m as h}from"./app.5d37d67f.js";const g={key:0,class:"home-hero"},y={key:0,class:"figure"},x=["src","alt"],_={key:1,id:"main-title",class:"title"},I={key:2,class:"tagline"};var T=e(t({setup(e){const{site:t,frontmatter:d}=a(),m=s((()=>{const{heroImage:e,heroText:t,tagline:a,actionLink:s,actionText:i}=d.value;return e||t||a||s&&i})),k=s((()=>d.value.heroText||t.value.title)),p=s((()=>d.value.tagline||t.value.description));return(e,t)=>i(m)?(l(),o("header",g,[i(d).heroImage?(l(),o("figure",y,[n("img",{class:"image",src:i(r)(i(d).heroImage),alt:i(d).heroAlt},null,8,x)])):c("v-if",!0),i(k)?(l(),o("h1",_,v(i(k)),1)):c("v-if",!0),i(p)?(l(),o("p",I,v(i(p)),1)):c("v-if",!0),i(d).actionLink&&i(d).actionText?(l(),u(f,{key:3,item:{link:i(d).actionLink,text:i(d).actionText},class:"action"},null,8,["item"])):c("v-if",!0),i(d).altActionLink&&i(d).altActionText?(l(),u(f,{key:4,item:{link:i(d).altActionLink,text:i(d).altActionText},class:"action alt"},null,8,["item"])):c("v-if",!0)])):c("v-if",!0)}}),[["__scopeId","data-v-370f18c0"]]);const A={key:0,class:"home-features"},L={class:"wrapper"},$={class:"container"},b={class:"features"},j={key:0,class:"title"},w={key:1,class:"details"};var C=e(t({setup(e){const{frontmatter:t}=a(),r=s((()=>t.value.features&&t.value.features.length>0)),u=s((()=>t.value.features?t.value.features:[]));return(e,t)=>i(r)?(l(),o("div",A,[n("div",L,[n("div",$,[n("div",b,[(l(!0),o(d,null,m(i(u),((e,t)=>(l(),o("section",{key:t,class:"feature"},[e.title?(l(),o("h2",j,v(e.title),1)):c("v-if",!0),e.details?(l(),o("p",w,v(e.details),1)):c("v-if",!0)])))),128))])])])])):c("v-if",!0)}}),[["__scopeId","data-v-e39c13e0"]]);const F={key:0,class:"footer"},N={class:"container"},q={class:"text"};var z=e(t({setup(e){const{frontmatter:t}=a();return(e,a)=>i(t).footer?(l(),o("footer",F,[n("div",N,[n("p",q,v(i(t).footer),1)])])):c("v-if",!0)}}),[["__scopeId","data-v-30918238"]]);const B={class:"home","aria-labelledby":"main-title"},D={class:"home-content"};var E=e(t({setup:e=>(e,t)=>{const a=k("Content");return l(),o("main",B,[p(T),h(e.$slots,"hero",{},void 0,!0),p(C),n("div",D,[p(a)]),h(e.$slots,"features",{},void 0,!0),p(z),h(e.$slots,"footer",{},void 0,!0)])}}),[["__scopeId","data-v-10122c92"]]);export{E as default};
