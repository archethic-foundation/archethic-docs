"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1946],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(67294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,s=function(e,t){if(null==e)return{};var n,a,s={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var i=a.createContext({}),u=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(i.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,s=e.mdxType,r=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(n),h=s,m=d["".concat(i,".").concat(h)]||d[h]||p[h]||r;return n?a.createElement(m,o(o({ref:t},c),{},{components:n})):a.createElement(m,o({ref:t},c))}));function m(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var r=n.length,o=new Array(r);o[0]=h;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[d]="string"==typeof e?e:s,o[1]=l;for(var u=2;u<r;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},15282:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>p,Bullet:()=>c,Details:()=>m,SpecifiedBy:()=>d,assets:()=>u,contentTitle:()=>l,default:()=>g,frontMatter:()=>o,metadata:()=>i,toc:()=>h});var a=n(87462),s=n(67294),r=n(3905);n(8209);const o={id:"chain-unspent-outputs",title:"chainUnspentOutputs",hide_table_of_contents:!1},l=void 0,i={unversionedId:"build/api/schema/queries/chain-unspent-outputs",id:"build/api/schema/queries/chain-unspent-outputs",title:"chainUnspentOutputs",description:"Query the network to retrieve the unspent output of a chain",source:"@site/docs/build/api/schema/queries/chain-unspent-outputs.mdx",sourceDirName:"build/api/schema/queries",slug:"/build/api/schema/queries/chain-unspent-outputs",permalink:"/build/api/schema/queries/chain-unspent-outputs",draft:!1,tags:[],version:"current",lastUpdatedAt:1735315575,formattedLastUpdatedAt:"Dec 27, 2024",frontMatter:{id:"chain-unspent-outputs",title:"chainUnspentOutputs",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"beaconChainSummary",permalink:"/build/api/schema/queries/beacon-chain-summary"},next:{title:"genesisAddress",permalink:"/build/api/schema/queries/genesis-address"}},u={},c=()=>(0,r.kt)(s.Fragment,null,(0,r.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),d=e=>(0,r.kt)(s.Fragment,null,"Specification",(0,r.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),p=e=>(0,r.kt)(s.Fragment,null,(0,r.kt)("span",{className:e.class},e.text)),h=[{value:"Arguments",id:"arguments",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>chainUnspentOutputs.<b>address</b></code><Bullet /><code>Address!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-chainunspentoutputsbaddressbcodeaddress--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>chainUnspentOutputs.<b>limit</b></code><Bullet /><code>PosInteger</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-chainunspentoutputsblimitbcodeposinteger-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>chainUnspentOutputs.<b>pagingOffset</b></code><Bullet /><code>Sha256Hash</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-chainunspentoutputsbpagingoffsetbcodesha256hash-",level:4},{value:"Type",id:"type",level:3},{value:'<code>UnspentOutput</code> <Badge class="badge badge--secondary" text="object"/>',id:"unspentoutput-",level:4}],m=e=>{let{dataOpen:t,dataClose:n,children:o,startOpen:l=!1}=e;const[i,u]=(0,s.useState)(l);return(0,r.kt)("details",(0,a.Z)({},i?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,r.kt)("summary",{onClick:e=>{e.preventDefault(),u((e=>!e))},style:{listStyle:"none"}},i?t:n),i&&o)},b={Bullet:c,SpecifiedBy:d,Badge:p,toc:h,Details:m},f="wrapper";function g(e){let{components:t,...n}=e;return(0,r.kt)(f,(0,a.Z)({},b,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Query the network to retrieve the unspent output of a chain\n(address should be the genesis address of the chain)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"chainUnspentOutputs(\n  address: Address!\n  limit: PosInteger\n  pagingOffset: Sha256Hash\n): [UnspentOutput]\n")),(0,r.kt)("h3",{id:"arguments"},"Arguments"),(0,r.kt)("h4",{id:"code-style-fontweight-normal-chainunspentoutputsbaddressbcodeaddress--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"chainUnspentOutputs.",(0,r.kt)("b",null,"address"))),(0,r.kt)(c,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/build/api/schema/scalars/address"},(0,r.kt)("inlineCode",{parentName:"a"},"Address!"))," ",(0,r.kt)(p,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(p,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null),(0,r.kt)("h4",{id:"code-style-fontweight-normal-chainunspentoutputsblimitbcodeposinteger-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"chainUnspentOutputs.",(0,r.kt)("b",null,"limit"))),(0,r.kt)(c,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/build/api/schema/scalars/pos-integer"},(0,r.kt)("inlineCode",{parentName:"a"},"PosInteger"))," ",(0,r.kt)(p,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null),(0,r.kt)("h4",{id:"code-style-fontweight-normal-chainunspentoutputsbpagingoffsetbcodesha256hash-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"chainUnspentOutputs.",(0,r.kt)("b",null,"pagingOffset"))),(0,r.kt)(c,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/build/api/schema/scalars/sha-256-hash"},(0,r.kt)("inlineCode",{parentName:"a"},"Sha256Hash"))," ",(0,r.kt)(p,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null),(0,r.kt)("h3",{id:"type"},"Type"),(0,r.kt)("h4",{id:"unspentoutput-"},(0,r.kt)("a",{parentName:"h4",href:"/build/api/schema/objects/unspent-output"},(0,r.kt)("inlineCode",{parentName:"a"},"UnspentOutput"))," ",(0,r.kt)(p,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"[UnspentOutput]"," represents the remaining unspent output of the transaction.\nIt includes:"),(0,r.kt)("ul",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ul"},"From: transaction which send the amount of assets"),(0,r.kt)("li",{parentName:"ul"},"Amount: asset amount"),(0,r.kt)("li",{parentName:"ul"},"Type: UCO / token / state"),(0,r.kt)("li",{parentName:"ul"},"token address: address of the token if the type is token"),(0,r.kt)("li",{parentName:"ul"},"token id: It is the id for a token which is allocated when the token is minted."),(0,r.kt)("li",{parentName:"ul"},"Timestamp: Date time when the UTXO created/manipulated"),(0,r.kt)("li",{parentName:"ul"},"State: It is the state of a smart contract"))))}g.isMDXComponent=!0},8209:(e,t,n)=>{n(67294)}}]);