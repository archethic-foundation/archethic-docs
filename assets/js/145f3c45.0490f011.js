"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8268],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>b});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var i=n.createContext({}),d=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=d(e.components);return n.createElement(i.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=d(a),m=o,b=p["".concat(i,".").concat(m)]||p[m]||u[m]||r;return a?n.createElement(b,l(l({ref:t},c),{},{components:a})):n.createElement(b,l({ref:t},c))}));function b(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,l=new Array(r);l[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[p]="string"==typeof e?e:o,l[1]=s;for(var d=2;d<r;d++)l[d]=a[d];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},31962:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>u,Bullet:()=>c,Details:()=>b,SpecifiedBy:()=>p,assets:()=>d,contentTitle:()=>s,default:()=>h,frontMatter:()=>l,metadata:()=>i,toc:()=>m});var n=a(87462),o=a(67294),r=a(3905);a(8209);const l={id:"transaction-input",title:"TransactionInput",hide_table_of_contents:!1},s=void 0,i={unversionedId:"build/api/schema/objects/transaction-input",id:"build/api/schema/objects/transaction-input",title:"TransactionInput",description:"[TransactionInput] represents the inputs from the transaction",source:"@site/docs/build/api/schema/objects/transaction-input.mdx",sourceDirName:"build/api/schema/objects",slug:"/build/api/schema/objects/transaction-input",permalink:"/build/api/schema/objects/transaction-input",draft:!1,tags:[],version:"current",lastUpdatedAt:1731085378,formattedLastUpdatedAt:"Nov 8, 2024",frontMatter:{id:"transaction-input",title:"TransactionInput",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"TransactionError",permalink:"/build/api/schema/objects/transaction-error"},next:{title:"TransactionMovement",permalink:"/build/api/schema/objects/transaction-movement"}},d={},c=()=>(0,r.kt)(o.Fragment,null,(0,r.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),p=e=>(0,r.kt)(o.Fragment,null,"Specification",(0,r.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),u=e=>(0,r.kt)(o.Fragment,null,(0,r.kt)("span",{className:e.class},e.text)),m=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>TransactionInput.<b>amount</b></code><Bullet /><code>Int</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-transactioninputbamountbcodeint-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>TransactionInput.<b>from</b></code><Bullet /><code>Address</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-transactioninputbfrombcodeaddress-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>TransactionInput.<b>spent</b></code><Bullet /><code>Boolean</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-transactioninputbspentbcodeboolean-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>TransactionInput.<b>timestamp</b></code><Bullet /><code>Timestamp</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-transactioninputbtimestampbcodetimestamp-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>TransactionInput.<b>tokenAddress</b></code><Bullet /><code>Address</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-transactioninputbtokenaddressbcodeaddress-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>TransactionInput.<b>tokenId</b></code><Bullet /><code>Int</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-transactioninputbtokenidbcodeint-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>TransactionInput.<b>type</b></code><Bullet /><code>String</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-transactioninputbtypebcodestring-",level:4},{value:"Returned by",id:"returned-by",level:3},{value:"Member of",id:"member-of",level:3}],b=e=>{let{dataOpen:t,dataClose:a,children:l,startOpen:s=!1}=e;const[i,d]=(0,o.useState)(s);return(0,r.kt)("details",(0,n.Z)({},i?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,r.kt)("summary",{onClick:e=>{e.preventDefault(),d((e=>!e))},style:{listStyle:"none"}},i?t:a),i&&l)},k={Bullet:c,SpecifiedBy:p,Badge:u,toc:m,Details:b},f="wrapper";function h(e){let{components:t,...a}=e;return(0,r.kt)(f,(0,n.Z)({},k,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"[TransactionInput]"," represents the inputs from the transaction\nIt includes:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"From: transaction which send the amount of assets"),(0,r.kt)("li",{parentName:"ul"},"Amount: asset amount"),(0,r.kt)("li",{parentName:"ul"},"Type: UCO/token/Call"),(0,r.kt)("li",{parentName:"ul"},"token address: address of the token if the type is token"),(0,r.kt)("li",{parentName:"ul"},"Spent: determines if the input has been spent"),(0,r.kt)("li",{parentName:"ul"},"Timestamp: Date time when the inputs was generated"),(0,r.kt)("li",{parentName:"ul"},"token id: It is the id for a token which is allocated when the token is minted.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"type TransactionInput {\n  amount: Int\n  from: Address\n  spent: Boolean\n  timestamp: Timestamp\n  tokenAddress: Address\n  tokenId: Int\n  type: String\n}\n")),(0,r.kt)("h3",{id:"fields"},"Fields"),(0,r.kt)("h4",{id:"code-style-fontweight-normal-transactioninputbamountbcodeint-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"TransactionInput.",(0,r.kt)("b",null,"amount"))),(0,r.kt)(c,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/build/api/schema/scalars/int"},(0,r.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,r.kt)(u,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null),(0,r.kt)("h4",{id:"code-style-fontweight-normal-transactioninputbfrombcodeaddress-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"TransactionInput.",(0,r.kt)("b",null,"from"))),(0,r.kt)(c,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/build/api/schema/scalars/address"},(0,r.kt)("inlineCode",{parentName:"a"},"Address"))," ",(0,r.kt)(u,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null),(0,r.kt)("h4",{id:"code-style-fontweight-normal-transactioninputbspentbcodeboolean-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"TransactionInput.",(0,r.kt)("b",null,"spent"))),(0,r.kt)(c,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/build/api/schema/scalars/boolean"},(0,r.kt)("inlineCode",{parentName:"a"},"Boolean"))," ",(0,r.kt)(u,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null),(0,r.kt)("h4",{id:"code-style-fontweight-normal-transactioninputbtimestampbcodetimestamp-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"TransactionInput.",(0,r.kt)("b",null,"timestamp"))),(0,r.kt)(c,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/build/api/schema/scalars/timestamp"},(0,r.kt)("inlineCode",{parentName:"a"},"Timestamp"))," ",(0,r.kt)(u,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null),(0,r.kt)("h4",{id:"code-style-fontweight-normal-transactioninputbtokenaddressbcodeaddress-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"TransactionInput.",(0,r.kt)("b",null,"tokenAddress"))),(0,r.kt)(c,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/build/api/schema/scalars/address"},(0,r.kt)("inlineCode",{parentName:"a"},"Address"))," ",(0,r.kt)(u,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null),(0,r.kt)("h4",{id:"code-style-fontweight-normal-transactioninputbtokenidbcodeint-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"TransactionInput.",(0,r.kt)("b",null,"tokenId"))),(0,r.kt)(c,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/build/api/schema/scalars/int"},(0,r.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,r.kt)(u,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null),(0,r.kt)("h4",{id:"code-style-fontweight-normal-transactioninputbtypebcodestring-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"TransactionInput.",(0,r.kt)("b",null,"type"))),(0,r.kt)(c,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/build/api/schema/scalars/string"},(0,r.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,r.kt)(u,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null),(0,r.kt)("h3",{id:"returned-by"},"Returned by"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/build/api/schema/queries/transaction-inputs"},(0,r.kt)("inlineCode",{parentName:"a"},"transactionInputs")),"  ",(0,r.kt)(u,{class:"badge badge--secondary",text:"query",mdxType:"Badge"})),(0,r.kt)("h3",{id:"member-of"},"Member of"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/build/api/schema/objects/transaction"},(0,r.kt)("inlineCode",{parentName:"a"},"Transaction")),"  ",(0,r.kt)(u,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})))}h.isMDXComponent=!0},8209:(e,t,a)=>{a(67294)}}]);