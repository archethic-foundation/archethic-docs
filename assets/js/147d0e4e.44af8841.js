"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1166],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=s(n),h=a,m=d["".concat(l,".").concat(h)]||d[h]||p[h]||i;return n?r.createElement(m,o(o({ref:t},u),{},{components:n})):r.createElement(m,o({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=h;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[d]="string"==typeof e?e:a,o[1]=c;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},7428:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));n(8209);const i={id:"oracle-chain",title:"OracleChain"},o=void 0,c={unversionedId:"learn/oracle-chain",id:"learn/oracle-chain",title:"OracleChain",description:"Archethic Blockchain supports Off-Chain communication through a dedicated transaction chain called OracleChain.",source:"@site/docs/learn/oracle-chain.md",sourceDirName:"learn",slug:"/learn/oracle-chain",permalink:"/learn/oracle-chain",draft:!1,tags:[],version:"current",lastUpdatedAt:1733336498,formattedLastUpdatedAt:"Dec 4, 2024",frontMatter:{id:"oracle-chain",title:"OracleChain"},sidebar:"docs",previous:{title:"Governance",permalink:"/learn/governance/"},next:{title:"P2P",permalink:"/learn/p2p/"}},l={},s=[{value:"How is it work ?",id:"how-is-it-work-",level:2},{value:"Services",id:"services",level:2}],u={toc:s},d="wrapper";function p(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Archethic Blockchain supports Off-Chain communication through a dedicated transaction chain called ",(0,a.kt)("inlineCode",{parentName:"p"},"OracleChain"),"."),(0,a.kt)("p",null,"It aims to gather external data to be used inside the network or the smart contract layer."),(0,a.kt)("h2",{id:"how-is-it-work-"},"How is it work ?"),(0,a.kt)("p",null,"OracleChain behaves a bit like the ",(0,a.kt)("a",{parentName:"p",href:"/learn/sharding/beacon-chain"},"BeaconChain")," except the transaction on the chain are generated every 10min but only when there is a new data updated."),(0,a.kt)("p",null,"It's using a long-polling mechanism to get data from external sources and submit a transaction through ARCH Consensus."),(0,a.kt)("p",null,"By using ARCH consensus, we ensure the atomic commitment of the data submitted and ensure validity of the information written into the transaction."),(0,a.kt)("p",null,"Each node receives the new transaction from the OracleChain and can apply behaviors from this new data and notify smart contracts which depends on oracle updates."),(0,a.kt)("mermaid",{value:"graph TD\n  A[Node1] --\x3e|1. Fetch data| B\n  B(External service: ie. UCO Price)\n  A --\x3e | 2. Send transaction| C\n  A --\x3e | 2. Send transaction| D\n  C[Node2] --\x3e | 3. Check data | B \n  D[Node3] --\x3e | 3. Check data |B\n  C[Node2] --\x3e | 4. Validate transaction | D \n  D[Node2] --\x3e C"}),(0,a.kt)("h2",{id:"services"},"Services"),(0,a.kt)("p",null,"The list of services supported by the OracleChain:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"UCO Price Feed: fetching UCO token price from Coingecko in USD/EUR currency and is used for the:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Transaction Fee algorithm"),(0,a.kt)("li",{parentName:"ul"},"Auto reward of nodes which didn't receive enough mining rewards")))))}p.isMDXComponent=!0},8209:(e,t,n)=>{n(67294)}}]);