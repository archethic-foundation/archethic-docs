"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4230],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>m});var n=a(67294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var i=n.createContext({}),d=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},s=function(e){var t=d(e.components);return n.createElement(i.Provider,{value:t},e.children)},b="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),b=d(a),p=l,m=b["".concat(i,".").concat(p)]||b[p]||u[p]||r;return a?n.createElement(m,o(o({ref:t},s),{},{components:a})):n.createElement(m,o({ref:t},s))}));function m(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,o=new Array(r);o[0]=p;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[b]="string"==typeof e?e:l,o[1]=c;for(var d=2;d<r;d++)o[d]=a[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},77985:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>u,Bullet:()=>s,Details:()=>m,SpecifiedBy:()=>b,assets:()=>d,contentTitle:()=>c,default:()=>k,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var n=a(87462),l=a(67294),r=a(3905);a(8209);const o={id:"balance",title:"Balance",hide_table_of_contents:!1},c=void 0,i={unversionedId:"build/api/schema/objects/balance",id:"build/api/schema/objects/balance",title:"Balance",description:"[Balance] represents a ledger balance.",source:"@site/docs/build/api/schema/objects/balance.mdx",sourceDirName:"build/api/schema/objects",slug:"/build/api/schema/objects/balance",permalink:"/build/api/schema/objects/balance",draft:!1,tags:[],version:"current",lastUpdatedAt:1735315575,formattedLastUpdatedAt:"Dec 27, 2024",frontMatter:{id:"balance",title:"Balance",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"AuthorizedKey",permalink:"/build/api/schema/objects/authorized-key"},next:{title:"BeaconChainSummary",permalink:"/build/api/schema/objects/beacon-chain-summary"}},d={},s=()=>(0,r.kt)(l.Fragment,null,(0,r.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),b=e=>(0,r.kt)(l.Fragment,null,"Specification",(0,r.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),u=e=>(0,r.kt)(l.Fragment,null,(0,r.kt)("span",{className:e.class},e.text)),p=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>Balance.<b>token</b></code><Bullet /><code>[TokenBalance]</code> <Badge class="badge badge--secondary" text="list"/> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-balancebtokenbcodetokenbalance--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Balance.<b>uco</b></code><Bullet /><code>Int</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-balancebucobcodeint-",level:4},{value:"Returned by",id:"returned-by",level:3},{value:"Member of",id:"member-of",level:3}],m=e=>{let{dataOpen:t,dataClose:a,children:o,startOpen:c=!1}=e;const[i,d]=(0,l.useState)(c);return(0,r.kt)("details",(0,n.Z)({},i?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,r.kt)("summary",{onClick:e=>{e.preventDefault(),d((e=>!e))},style:{listStyle:"none"}},i?t:a),i&&o)},f={Bullet:s,SpecifiedBy:b,Badge:u,toc:p,Details:m},y="wrapper";function k(e){let{components:t,...a}=e;return(0,r.kt)(y,(0,n.Z)({},f,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"[Balance]"," represents a ledger balance.\nIt includes:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"UCO: uco balance"),(0,r.kt)("li",{parentName:"ul"},"token: token balances")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"type Balance {\n  token: [TokenBalance]\n  uco: Int\n}\n")),(0,r.kt)("h3",{id:"fields"},"Fields"),(0,r.kt)("h4",{id:"code-style-fontweight-normal-balancebtokenbcodetokenbalance--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"Balance.",(0,r.kt)("b",null,"token"))),(0,r.kt)(s,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/build/api/schema/objects/token-balance"},(0,r.kt)("inlineCode",{parentName:"a"},"[TokenBalance]"))," ",(0,r.kt)(u,{class:"badge badge--secondary",text:"list",mdxType:"Badge"})," ",(0,r.kt)(u,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,r.kt)("blockquote",null),(0,r.kt)("h4",{id:"code-style-fontweight-normal-balancebucobcodeint-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"Balance.",(0,r.kt)("b",null,"uco"))),(0,r.kt)(s,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/build/api/schema/scalars/int"},(0,r.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,r.kt)(u,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null),(0,r.kt)("h3",{id:"returned-by"},"Returned by"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/build/api/schema/queries/balance"},(0,r.kt)("inlineCode",{parentName:"a"},"balance")),"  ",(0,r.kt)(u,{class:"badge badge--secondary",text:"query",mdxType:"Badge"})),(0,r.kt)("h3",{id:"member-of"},"Member of"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/build/api/schema/objects/transaction"},(0,r.kt)("inlineCode",{parentName:"a"},"Transaction")),"  ",(0,r.kt)(u,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})))}k.isMDXComponent=!0},8209:(e,t,a)=>{a(67294)}}]);