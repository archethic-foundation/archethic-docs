"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5050],{3905:(t,e,a)=>{a.d(e,{Zo:()=>d,kt:()=>f});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function o(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function s(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?o(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},o=Object.keys(t);for(n=0;n<o.length;n++)a=o[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)a=o[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var c=n.createContext({}),l=function(t){var e=n.useContext(c),a=e;return t&&(a="function"==typeof t?t(e):s(s({},e),t)),a},d=function(t){var e=l(t.components);return n.createElement(c.Provider,{value:e},t.children)},p="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,o=t.originalType,c=t.parentName,d=i(t,["components","mdxType","originalType","parentName"]),p=l(a),m=r,f=p["".concat(c,".").concat(m)]||p[m]||u[m]||o;return a?n.createElement(f,s(s({ref:e},d),{},{components:a})):n.createElement(f,s({ref:e},d))}));function f(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=a.length,s=new Array(o);s[0]=m;var i={};for(var c in e)hasOwnProperty.call(e,c)&&(i[c]=e[c]);i.originalType=t,i[p]="string"==typeof t?t:r,s[1]=i;for(var l=2;l<o;l++)s[l]=a[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},8764:(t,e,a)=>{a.r(e),a.d(e,{Badge:()=>m,Bullet:()=>p,SpecifiedBy:()=>u,assets:()=>l,contentTitle:()=>i,default:()=>y,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var n=a(7462),r=a(7294),o=a(3905);a(8209);const s={id:"transaction-attestation",title:"TransactionAttestation",hide_table_of_contents:!1},i=void 0,c={unversionedId:"build/api/schema/objects/transaction-attestation",id:"build/api/schema/objects/transaction-attestation",title:"TransactionAttestation",description:"[TransactionAttestation] represents an attestation when a transaction is successfully validated and stored.",source:"@site/docs/build/api/schema/objects/transaction-attestation.mdx",sourceDirName:"build/api/schema/objects",slug:"/build/api/schema/objects/transaction-attestation",permalink:"/build/api/schema/objects/transaction-attestation",draft:!1,tags:[],version:"current",lastUpdatedAt:1694096451,formattedLastUpdatedAt:"Sep 7, 2023",frontMatter:{id:"transaction-attestation",title:"TransactionAttestation",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"Token",permalink:"/build/api/schema/objects/token"},next:{title:"TransactionError",permalink:"/build/api/schema/objects/transaction-error"}},l={},d=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>TransactionAttestation.<b>address</b></code><Bullet /><code>Address</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-transactionattestationbaddressbcodeaddress-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>TransactionAttestation.<b>maxConfirmations</b></code><Bullet /><code>Int</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-transactionattestationbmaxconfirmationsbcodeint-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>TransactionAttestation.<b>nbConfirmations</b></code><Bullet /><code>Int</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-transactionattestationbnbconfirmationsbcodeint-",level:4},{value:"Returned by",id:"returned-by",level:3}],p=()=>(0,o.kt)(r.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),u=t=>(0,o.kt)(r.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:t.url,title:"Specified by "+t.url},"\u2398")),m=t=>(0,o.kt)(r.Fragment,null,(0,o.kt)("span",{class:"badge badge--"+t.class},t.text)),f={toc:d,Bullet:p,SpecifiedBy:u,Badge:m},b="wrapper";function y(t){let{components:e,...a}=t;return(0,o.kt)(b,(0,n.Z)({},f,a,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"[TransactionAttestation]"," represents an attestation when a transaction is successfully validated and stored.\nFew attestations can be received with differents confirmations to ensure a better security of the replication."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"type TransactionAttestation {\n  address: Address\n  maxConfirmations: Int\n  nbConfirmations: Int\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"code-style-fontweight-normal-transactionattestationbaddressbcodeaddress-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"TransactionAttestation.",(0,o.kt)("b",null,"address"))),(0,o.kt)(p,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/build/api/schema/scalars/address"},(0,o.kt)("inlineCode",{parentName:"a"},"Address"))," ",(0,o.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-transactionattestationbmaxconfirmationsbcodeint-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"TransactionAttestation.",(0,o.kt)("b",null,"maxConfirmations"))),(0,o.kt)(p,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/build/api/schema/scalars/int"},(0,o.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,o.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-transactionattestationbnbconfirmationsbcodeint-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"TransactionAttestation.",(0,o.kt)("b",null,"nbConfirmations"))),(0,o.kt)(p,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/build/api/schema/scalars/int"},(0,o.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,o.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h3",{id:"returned-by"},"Returned by"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/build/api/schema/subscriptions/transaction-confirmed"},(0,o.kt)("inlineCode",{parentName:"a"},"transactionConfirmed")),"  ",(0,o.kt)(m,{class:"secondary",text:"subscription",mdxType:"Badge"})))}y.isMDXComponent=!0},8209:(t,e,a)=>{a(7294)}}]);