"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7790],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),u=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(d.Provider,{value:t},e.children)},p="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,d=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=u(n),m=r,h=p["".concat(d,".").concat(m)]||p[m]||s[m]||l;return n?a.createElement(h,i(i({ref:t},c),{},{components:n})):a.createElement(h,i({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o[p]="string"==typeof e?e:r,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3631:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>s,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var a=n(7462),r=(n(7294),n(3905));n(8209);const l={id:"account",title:"Account"},i=void 0,o={unversionedId:"build/core/account",id:"build/core/account",title:"Account",description:"Archethic node provides a high level and fast access to an account assets using primarily memory tables with ETS.",source:"@site/docs/build/core/account.md",sourceDirName:"build/core",slug:"/build/core/account",permalink:"/build/core/account",draft:!1,tags:[],version:"current",lastUpdatedAt:1694096451,formattedLastUpdatedAt:"Sep 7, 2023",frontMatter:{id:"account",title:"Account"},sidebar:"docs",previous:{title:"Core development",permalink:"/build/core/"},next:{title:"BeaconChain",permalink:"/build/core/beacon-chain/"}},d={},u=[{value:"UCO",id:"uco",level:2},{value:"Ledger",id:"ledger",level:3},{value:"Index",id:"index",level:3},{value:"Token",id:"token",level:2},{value:"Ledger",id:"ledger-1",level:3},{value:"Index",id:"index-1",level:3},{value:"Loading",id:"loading",level:2}],c={toc:u},p="wrapper";function s(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Archethic node provides a high level and fast access to an account assets using primarily memory tables with ETS."),(0,r.kt)("p",null,"This gives us faster computation and data retrieval to asserts balances and UTXO loading."),(0,r.kt)("h2",{id:"uco"},"UCO"),(0,r.kt)("p",null,"A memory table is defined to list of the UCO available for a given address"),(0,r.kt)("p",null,"Few functions are provided to be able to query this table in order to:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"get the UCO balance "),(0,r.kt)("li",{parentName:"ul"},"get the UTXOs"),(0,r.kt)("li",{parentName:"ul"},"get the total inputs (spent and unspent)"),(0,r.kt)("li",{parentName:"ul"},"spend all the UTXOs"),(0,r.kt)("li",{parentName:"ul"},"add new UCO UTXO")),(0,r.kt)("h3",{id:"ledger"},"Ledger"),(0,r.kt)("p",null,"Each entry is indexed by a tuple recipient/sender  to identify uniquely an UTXO"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Recipient, Sender"),(0,r.kt)("th",{parentName:"tr",align:null},"Amount"),(0,r.kt)("th",{parentName:"tr",align:null},"Spent ?"),(0,r.kt)("th",{parentName:"tr",align:null},"Date")))),(0,r.kt)("h3",{id:"index"},"Index"),(0,r.kt)("p",null,"An index table is provided to be able to retrieve all the sender UTXOs for a given recipient"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Recipient"),(0,r.kt)("th",{parentName:"tr",align:null},"Sender")))),(0,r.kt)("h2",{id:"token"},"Token"),(0,r.kt)("p",null,"A memory table is defined to list al the token available for a given address"),(0,r.kt)("p",null,"Few functions are provided to be able to query this table in order to:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"get the token balance s"),(0,r.kt)("li",{parentName:"ul"},"get the UTXOs"),(0,r.kt)("li",{parentName:"ul"},"get the total inputs (spent and unspent)"),(0,r.kt)("li",{parentName:"ul"},"spend all the UTXOs"),(0,r.kt)("li",{parentName:"ul"},"add new token UTXO")),(0,r.kt)("h3",{id:"ledger-1"},"Ledger"),(0,r.kt)("p",null,"Each entry is indexed by a tuple recipient/sender/token address  to identify uniquely an UTXO"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Recipient, Sender, Token"),(0,r.kt)("th",{parentName:"tr",align:null},"Amount"),(0,r.kt)("th",{parentName:"tr",align:null},"Spent ?"),(0,r.kt)("th",{parentName:"tr",align:null},"Date")))),(0,r.kt)("h3",{id:"index-1"},"Index"),(0,r.kt)("p",null,"An index table is provided to be able to retrieve all the sender UTXOs for a given recipient"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Recipient"),(0,r.kt)("th",{parentName:"tr",align:null},"Sender"),(0,r.kt)("th",{parentName:"tr",align:null},"Token address")))),(0,r.kt)("h2",{id:"loading"},"Loading"),(0,r.kt)("p",null,"When a transaction replicated, the storage nodes in charge of storing the new transaction (chain replicas or recipient replicas) will load the transaction in those tables to index the UTXO and build in memory view."),(0,r.kt)("p",null,"The same goes when a node is bootstraping, a process will load all the transactions from the database to load them  into those tables."))}s.isMDXComponent=!0},8209:(e,t,n)=>{n(7294)}}]);