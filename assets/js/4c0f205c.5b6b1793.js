"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2217],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>k});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=c(n),m=a,k=p["".concat(s,".").concat(m)]||p[m]||u[m]||o;return n?r.createElement(k,l(l({ref:t},d),{},{components:n})):r.createElement(k,l({ref:t},d))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2399:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>m,Bullet:()=>p,SpecifiedBy:()=>u,assets:()=>c,contentTitle:()=>i,default:()=>y,frontMatter:()=>l,metadata:()=>s,toc:()=>d});var r=n(87462),a=n(67294),o=n(3905);n(8209);const l={id:"token",title:"token",hide_table_of_contents:!1},i=void 0,s={unversionedId:"build/api/schema/queries/token",id:"build/api/schema/queries/token",title:"token",description:"Query the network to find a token's data",source:"@site/docs/build/api/schema/queries/token.mdx",sourceDirName:"build/api/schema/queries",slug:"/build/api/schema/queries/token",permalink:"/build/api/schema/queries/token",draft:!1,tags:[],version:"current",lastUpdatedAt:1708513258,formattedLastUpdatedAt:"Feb 21, 2024",frontMatter:{id:"token",title:"token",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"sharedSecrets",permalink:"/build/api/schema/queries/shared-secrets"},next:{title:"transactionChain",permalink:"/build/api/schema/queries/transaction-chain"}},c={},d=[{value:"Arguments",id:"arguments",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>token.<b>address</b></code><Bullet /><code>Address!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-tokenbaddressbcodeaddress--",level:4},{value:"Type",id:"type",level:3},{value:'<code>Token</code> <Badge class="secondary" text="object"/>',id:"token-",level:4}],p=()=>(0,o.kt)(a.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),u=e=>(0,o.kt)(a.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),m=e=>(0,o.kt)(a.Fragment,null,(0,o.kt)("span",{class:"badge badge--"+e.class},e.text)),k={toc:d,Bullet:p,SpecifiedBy:u,Badge:m},f="wrapper";function y(e){let{components:t,...n}=e;return(0,o.kt)(f,(0,r.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Query the network to find a token's data"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"token(\n  address: Address!\n): Token\n")),(0,o.kt)("h3",{id:"arguments"},"Arguments"),(0,o.kt)("h4",{id:"code-style-fontweight-normal-tokenbaddressbcodeaddress--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"token.",(0,o.kt)("b",null,"address"))),(0,o.kt)(p,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/build/api/schema/scalars/address"},(0,o.kt)("inlineCode",{parentName:"a"},"Address!"))," ",(0,o.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h3",{id:"type"},"Type"),(0,o.kt)("h4",{id:"token-"},(0,o.kt)("a",{parentName:"h4",href:"/build/api/schema/objects/token"},(0,o.kt)("inlineCode",{parentName:"a"},"Token"))," ",(0,o.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"[token]"," represents a token metadata.\nIt includes:"),(0,o.kt)("ul",{parentName:"blockquote"},(0,o.kt)("li",{parentName:"ul"},"genesis: Genesis address to the token"),(0,o.kt)("li",{parentName:"ul"},"name: Name of the token"),(0,o.kt)("li",{parentName:"ul"},"symbol: Symbol of the token"),(0,o.kt)("li",{parentName:"ul"},"supply: Supply of the token"),(0,o.kt)("li",{parentName:"ul"},"type: Type of the token"),(0,o.kt)("li",{parentName:"ul"},"decimals: Number of decimals of the token"),(0,o.kt)("li",{parentName:"ul"},"properties: Properties of the token (if any)"),(0,o.kt)("li",{parentName:"ul"},"collection: List of properties for a collection (if any)"),(0,o.kt)("li",{parentName:"ul"},"ownerships: authorization/delegations containing list of secrets and their authorized public keys to proof the ownership"),(0,o.kt)("li",{parentName:"ul"},"id: Unique identification of the token on the chain"))))}y.isMDXComponent=!0},8209:(e,t,n)=>{n(67294)}}]);