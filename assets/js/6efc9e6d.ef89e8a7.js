"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[844],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>b});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=r.createContext({}),s=function(e){var t=r.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=s(e.components);return r.createElement(o.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=s(a),m=n,b=d["".concat(o,".").concat(m)]||d[m]||u[m]||i;return a?r.createElement(b,l(l({ref:t},p),{},{components:a})):r.createElement(b,l({ref:t},p))}));function b(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,l=new Array(i);l[0]=m;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c[d]="string"==typeof e?e:n,l[1]=c;for(var s=2;s<i;s++)l[s]=a[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},1135:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>m,Bullet:()=>d,SpecifiedBy:()=>u,assets:()=>s,contentTitle:()=>c,default:()=>f,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var r=a(7462),n=a(7294),i=a(3905);a(8209);const l={id:"public-key",title:"PublicKey",hide_table_of_contents:!1},c=void 0,o={unversionedId:"build/api/schema/scalars/public-key",id:"build/api/schema/scalars/public-key",title:"PublicKey",description:"The [PublicKey] scalar type represents a public key.",source:"@site/docs/build/api/schema/scalars/public-key.mdx",sourceDirName:"build/api/schema/scalars",slug:"/build/api/schema/scalars/public-key",permalink:"/build/api/schema/scalars/public-key",draft:!1,tags:[],version:"current",lastUpdatedAt:1700739326,formattedLastUpdatedAt:"Nov 23, 2023",frontMatter:{id:"public-key",title:"PublicKey",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"PosInteger",permalink:"/build/api/schema/scalars/pos-integer"},next:{title:"String",permalink:"/build/api/schema/scalars/string"}},s={},p=[{value:"Member of",id:"member-of",level:3}],d=()=>(0,i.kt)(n.Fragment,null,(0,i.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),u=e=>(0,i.kt)(n.Fragment,null,"Specification",(0,i.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),m=e=>(0,i.kt)(n.Fragment,null,(0,i.kt)("span",{class:"badge badge--"+e.class},e.text)),b={toc:p,Bullet:d,SpecifiedBy:u,Badge:m},y="wrapper";function f(e){let{components:t,...a}=e;return(0,i.kt)(y,(0,r.Z)({},b,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The ","[PublicKey]"," scalar type represents a public key.\nThe PublicKey appears in a JSON response as Base16 formatted string. The parsed public key will\nbe converted to a binary and any invalid address with an invalid algorithm or invalid size will be rejected"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"scalar PublicKey\n")),(0,i.kt)("h3",{id:"member-of"},"Member of"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/build/api/schema/objects/authorized-key"},(0,i.kt)("inlineCode",{parentName:"a"},"AuthorizedKey")),"  ",(0,i.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"}),(0,i.kt)(d,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"p",href:"/build/api/schema/objects/cross-validation-stamp"},(0,i.kt)("inlineCode",{parentName:"a"},"CrossValidationStamp")),"  ",(0,i.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"}),(0,i.kt)(d,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"p",href:"/build/api/schema/objects/node"},(0,i.kt)("inlineCode",{parentName:"a"},"Node")),"  ",(0,i.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"}),(0,i.kt)(d,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"p",href:"/build/api/schema/objects/shared-secrets"},(0,i.kt)("inlineCode",{parentName:"a"},"SharedSecrets")),"  ",(0,i.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"}),(0,i.kt)(d,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"p",href:"/build/api/schema/objects/transaction"},(0,i.kt)("inlineCode",{parentName:"a"},"Transaction")),"  ",(0,i.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"}),(0,i.kt)(d,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"p",href:"/build/api/schema/objects/validation-stamp"},(0,i.kt)("inlineCode",{parentName:"a"},"ValidationStamp")),"  ",(0,i.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"})))}f.isMDXComponent=!0},8209:(e,t,a)=>{a(7294)}}]);