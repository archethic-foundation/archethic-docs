"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5258],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>m});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),c=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},d=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},b=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=c(r),b=n,m=p["".concat(s,".").concat(b)]||p[b]||u[b]||o;return r?a.createElement(m,l(l({ref:t},d),{},{components:r})):a.createElement(m,l({ref:t},d))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=b;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:n,l[1]=i;for(var c=2;c<o;c++)l[c]=r[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}b.displayName="MDXCreateElement"},68942:(e,t,r)=>{r.r(t),r.d(t,{Badge:()=>u,Bullet:()=>d,Details:()=>m,SpecifiedBy:()=>p,assets:()=>c,contentTitle:()=>i,default:()=>f,frontMatter:()=>l,metadata:()=>s,toc:()=>b});var a=r(87462),n=r(67294),o=r(3905);r(8209);const l={id:"ownership",title:"Ownership",hide_table_of_contents:!1},i=void 0,s={unversionedId:"build/api/schema/objects/ownership",id:"build/api/schema/objects/ownership",title:"Ownership",description:"[Ownership] represents a block to set a secret and the authorized public keys able to decrypt the secret",source:"@site/docs/build/api/schema/objects/ownership.mdx",sourceDirName:"build/api/schema/objects",slug:"/build/api/schema/objects/ownership",permalink:"/build/api/schema/objects/ownership",draft:!1,tags:[],version:"current",lastUpdatedAt:1733336498,formattedLastUpdatedAt:"Dec 4, 2024",frontMatter:{id:"ownership",title:"Ownership",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"OracleServices",permalink:"/build/api/schema/objects/oracle-services"},next:{title:"Recipient",permalink:"/build/api/schema/objects/recipient"}},c={},d=()=>(0,o.kt)(n.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),p=e=>(0,o.kt)(n.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),u=e=>(0,o.kt)(n.Fragment,null,(0,o.kt)("span",{className:e.class},e.text)),b=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>Ownership.<b>authorizedPublicKeys</b></code><Bullet /><code>[AuthorizedKey]</code> <Badge class="badge badge--secondary" text="list"/> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-ownershipbauthorizedpublickeysbcodeauthorizedkey--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Ownership.<b>secret</b></code><Bullet /><code>Hex</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-ownershipbsecretbcodehex-",level:4},{value:"Member of",id:"member-of",level:3}],m=e=>{let{dataOpen:t,dataClose:r,children:l,startOpen:i=!1}=e;const[s,c]=(0,n.useState)(i);return(0,o.kt)("details",(0,a.Z)({},s?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,o.kt)("summary",{onClick:e=>{e.preventDefault(),c((e=>!e))},style:{listStyle:"none"}},s?t:r),s&&l)},h={Bullet:d,SpecifiedBy:p,Badge:u,toc:b,Details:m},y="wrapper";function f(e){let{components:t,...r}=e;return(0,o.kt)(y,(0,a.Z)({},h,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"[Ownership]"," represents a block to set a secret and the authorized public keys able to decrypt the secret"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"type Ownership {\n  authorizedPublicKeys: [AuthorizedKey]\n  secret: Hex\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"code-style-fontweight-normal-ownershipbauthorizedpublickeysbcodeauthorizedkey--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"Ownership.",(0,o.kt)("b",null,"authorizedPublicKeys"))),(0,o.kt)(d,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/build/api/schema/objects/authorized-key"},(0,o.kt)("inlineCode",{parentName:"a"},"[AuthorizedKey]"))," ",(0,o.kt)(u,{class:"badge badge--secondary",text:"list",mdxType:"Badge"})," ",(0,o.kt)(u,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-ownershipbsecretbcodehex-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"Ownership.",(0,o.kt)("b",null,"secret"))),(0,o.kt)(d,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/build/api/schema/scalars/hex"},(0,o.kt)("inlineCode",{parentName:"a"},"Hex"))," ",(0,o.kt)(u,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h3",{id:"member-of"},"Member of"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/build/api/schema/objects/data"},(0,o.kt)("inlineCode",{parentName:"a"},"Data")),"  ",(0,o.kt)(u,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(d,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/build/api/schema/objects/token"},(0,o.kt)("inlineCode",{parentName:"a"},"Token")),"  ",(0,o.kt)(u,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})))}f.isMDXComponent=!0},8209:(e,t,r)=>{r(67294)}}]);