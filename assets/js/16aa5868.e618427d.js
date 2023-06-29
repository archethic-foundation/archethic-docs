"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3559],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>y});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),i=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},d=function(e){var t=i(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},b=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,c=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),p=i(r),b=a,y=p["".concat(s,".").concat(b)]||p[b]||u[b]||c;return r?n.createElement(y,l(l({ref:t},d),{},{components:r})):n.createElement(y,l({ref:t},d))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=r.length,l=new Array(c);l[0]=b;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[p]="string"==typeof e?e:a,l[1]=o;for(var i=2;i<c;i++)l[i]=r[i];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}b.displayName="MDXCreateElement"},2209:(e,t,r)=>{r.r(t),r.d(t,{Badge:()=>b,Bullet:()=>p,SpecifiedBy:()=>u,assets:()=>i,contentTitle:()=>o,default:()=>f,frontMatter:()=>l,metadata:()=>s,toc:()=>d});var n=r(7462),a=r(7294),c=r(3905);r(8209);const l={id:"shared-secrets",title:"SharedSecrets",hide_table_of_contents:!1},o=void 0,s={unversionedId:"build/api/schema/objects/shared-secrets",id:"build/api/schema/objects/shared-secrets",title:"SharedSecrets",description:"[SharedSecrets] represents the public shared secret information",source:"@site/docs/build/api/schema/objects/shared-secrets.mdx",sourceDirName:"build/api/schema/objects",slug:"/build/api/schema/objects/shared-secrets",permalink:"/build/api/schema/objects/shared-secrets",draft:!1,tags:[],version:"current",lastUpdatedAt:1688046069,formattedLastUpdatedAt:"Jun 29, 2023",frontMatter:{id:"shared-secrets",title:"SharedSecrets",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"Ownership",permalink:"/build/api/schema/objects/ownership"},next:{title:"TokenBalance",permalink:"/build/api/schema/objects/token-balance"}},i={},d=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>SharedSecrets.<b>storageNoncePublicKey</b></code><Bullet /><code>PublicKey</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-sharedsecretsbstoragenoncepublickeybcodepublickey-",level:4},{value:"Returned by",id:"returned-by",level:3}],p=()=>(0,c.kt)(a.Fragment,null,(0,c.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),u=e=>(0,c.kt)(a.Fragment,null,"Specification",(0,c.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),b=e=>(0,c.kt)(a.Fragment,null,(0,c.kt)("span",{class:"badge badge--"+e.class},e.text)),y={toc:d,Bullet:p,SpecifiedBy:u,Badge:b},m="wrapper";function f(e){let{components:t,...r}=e;return(0,c.kt)(m,(0,n.Z)({},y,r,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("p",null,"[SharedSecrets]"," represents the public shared secret information\nIt includes:"),(0,c.kt)("ul",null,(0,c.kt)("li",{parentName:"ul"},"The storage nonce public key: Public Key to encrypt data for the node, so they will be able to decrypt it (mostly for smart contract authorized key)")),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-graphql"},"type SharedSecrets {\n  storageNoncePublicKey: PublicKey\n}\n")),(0,c.kt)("h3",{id:"fields"},"Fields"),(0,c.kt)("h4",{id:"code-style-fontweight-normal-sharedsecretsbstoragenoncepublickeybcodepublickey-"},(0,c.kt)("a",{parentName:"h4",href:"#"},(0,c.kt)("code",{style:{fontWeight:"normal"}},"SharedSecrets.",(0,c.kt)("b",null,"storageNoncePublicKey"))),(0,c.kt)(p,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"h4",href:"/build/api/schema/scalars/public-key"},(0,c.kt)("inlineCode",{parentName:"a"},"PublicKey"))," ",(0,c.kt)(b,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,c.kt)("blockquote",null),(0,c.kt)("h3",{id:"returned-by"},"Returned by"),(0,c.kt)("p",null,(0,c.kt)("a",{parentName:"p",href:"/build/api/schema/queries/shared-secrets"},(0,c.kt)("inlineCode",{parentName:"a"},"sharedSecrets")),"  ",(0,c.kt)(b,{class:"secondary",text:"query",mdxType:"Badge"})))}f.isMDXComponent=!0},8209:(e,t,r)=>{r(7294)}}]);