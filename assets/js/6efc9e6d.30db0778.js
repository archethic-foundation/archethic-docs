"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[844],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>b});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=r.createContext({}),s=function(e){var t=r.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=s(e.components);return r.createElement(o.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,o=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=s(a),m=n,b=d["".concat(o,".").concat(m)]||d[m]||u[m]||l;return a?r.createElement(b,i(i({ref:t},p),{},{components:a})):r.createElement(b,i({ref:t},p))}));function b(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=m;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c[d]="string"==typeof e?e:n,i[1]=c;for(var s=2;s<l;s++)i[s]=a[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},51135:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>u,Bullet:()=>p,Details:()=>b,SpecifiedBy:()=>d,assets:()=>s,contentTitle:()=>c,default:()=>k,frontMatter:()=>i,metadata:()=>o,toc:()=>m});var r=a(87462),n=a(67294),l=a(3905);a(8209);const i={id:"public-key",title:"PublicKey",hide_table_of_contents:!1},c=void 0,o={unversionedId:"build/api/schema/scalars/public-key",id:"build/api/schema/scalars/public-key",title:"PublicKey",description:"The [PublicKey] scalar type represents a public key.",source:"@site/docs/build/api/schema/scalars/public-key.mdx",sourceDirName:"build/api/schema/scalars",slug:"/build/api/schema/scalars/public-key",permalink:"/build/api/schema/scalars/public-key",draft:!1,tags:[],version:"current",lastUpdatedAt:1735315575,formattedLastUpdatedAt:"Dec 27, 2024",frontMatter:{id:"public-key",title:"PublicKey",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"PosInteger",permalink:"/build/api/schema/scalars/pos-integer"},next:{title:"RecipientArgs",permalink:"/build/api/schema/scalars/recipient-args"}},s={},p=()=>(0,l.kt)(n.Fragment,null,(0,l.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),d=e=>(0,l.kt)(n.Fragment,null,"Specification",(0,l.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),u=e=>(0,l.kt)(n.Fragment,null,(0,l.kt)("span",{className:e.class},e.text)),m=[{value:"Member of",id:"member-of",level:3}],b=e=>{let{dataOpen:t,dataClose:a,children:i,startOpen:c=!1}=e;const[o,s]=(0,n.useState)(c);return(0,l.kt)("details",(0,r.Z)({},o?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,l.kt)("summary",{onClick:e=>{e.preventDefault(),s((e=>!e))},style:{listStyle:"none"}},o?t:a),o&&i)},y={Bullet:p,SpecifiedBy:d,Badge:u,toc:m,Details:b},f="wrapper";function k(e){let{components:t,...a}=e;return(0,l.kt)(f,(0,r.Z)({},y,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"The ","[PublicKey]"," scalar type represents a public key.\nThe PublicKey appears in a JSON response as Base16 formatted string. The parsed public key will\nbe converted to a binary and any invalid address with an invalid algorithm or invalid size will be rejected"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},"scalar PublicKey\n")),(0,l.kt)("h3",{id:"member-of"},"Member of"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/build/api/schema/objects/authorized-key"},(0,l.kt)("inlineCode",{parentName:"a"},"AuthorizedKey")),"  ",(0,l.kt)(u,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,l.kt)(p,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/build/api/schema/objects/cross-validation-stamp"},(0,l.kt)("inlineCode",{parentName:"a"},"CrossValidationStamp")),"  ",(0,l.kt)(u,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,l.kt)(p,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/build/api/schema/objects/node"},(0,l.kt)("inlineCode",{parentName:"a"},"Node")),"  ",(0,l.kt)(u,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,l.kt)(p,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/build/api/schema/objects/shared-secrets"},(0,l.kt)("inlineCode",{parentName:"a"},"SharedSecrets")),"  ",(0,l.kt)(u,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,l.kt)(p,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/build/api/schema/objects/transaction"},(0,l.kt)("inlineCode",{parentName:"a"},"Transaction")),"  ",(0,l.kt)(u,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,l.kt)(p,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/build/api/schema/objects/validation-stamp"},(0,l.kt)("inlineCode",{parentName:"a"},"ValidationStamp")),"  ",(0,l.kt)(u,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})))}k.isMDXComponent=!0},8209:(e,t,a)=>{a(67294)}}]);