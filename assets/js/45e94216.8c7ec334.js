"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4439],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),m=a,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||o;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},22811:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>d,Bullet:()=>p,Details:()=>f,SpecifiedBy:()=>u,assets:()=>c,contentTitle:()=>l,default:()=>y,frontMatter:()=>i,metadata:()=>s,toc:()=>m});var r=n(87462),a=n(67294),o=n(3905);n(8209);const i={id:"non-neg-integer",title:"NonNegInteger",hide_table_of_contents:!1},l=void 0,s={unversionedId:"build/api/schema/scalars/non-neg-integer",id:"build/api/schema/scalars/non-neg-integer",title:"NonNegInteger",description:"The [Non Negative Integer] scalar type represents a non negative number",source:"@site/docs/build/api/schema/scalars/non-neg-integer.mdx",sourceDirName:"build/api/schema/scalars",slug:"/build/api/schema/scalars/non-neg-integer",permalink:"/build/api/schema/scalars/non-neg-integer",draft:!1,tags:[],version:"current",lastUpdatedAt:1735315575,formattedLastUpdatedAt:"Dec 27, 2024",frontMatter:{id:"non-neg-integer",title:"NonNegInteger",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"Int",permalink:"/build/api/schema/scalars/int"},next:{title:"P2pAvailabilities",permalink:"/build/api/schema/scalars/p2-p-availabilities"}},c={},p=()=>(0,o.kt)(a.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),u=e=>(0,o.kt)(a.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),d=e=>(0,o.kt)(a.Fragment,null,(0,o.kt)("span",{className:e.class},e.text)),m=[{value:"Member of",id:"member-of",level:3}],f=e=>{let{dataOpen:t,dataClose:n,children:i,startOpen:l=!1}=e;const[s,c]=(0,a.useState)(l);return(0,o.kt)("details",(0,r.Z)({},s?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,o.kt)("summary",{onClick:e=>{e.preventDefault(),c((e=>!e))},style:{listStyle:"none"}},s?t:n),s&&i)},g={Bullet:p,SpecifiedBy:u,Badge:d,toc:m,Details:f},b="wrapper";function y(e){let{components:t,...n}=e;return(0,o.kt)(b,(0,r.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The ","[Non Negative Integer]"," scalar type represents a non negative number"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"scalar NonNegInteger\n")),(0,o.kt)("h3",{id:"member-of"},"Member of"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/build/api/schema/queries/transaction-inputs"},(0,o.kt)("inlineCode",{parentName:"a"},"transactionInputs")),"  ",(0,o.kt)(d,{class:"badge badge--secondary",text:"query",mdxType:"Badge"})))}y.isMDXComponent=!0},8209:(e,t,n)=>{n(67294)}}]);