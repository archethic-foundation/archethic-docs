"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[428],{3905:(e,t,i)=>{i.d(t,{Zo:()=>d,kt:()=>y});var a=i(67294);function r(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function o(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,a)}return i}function n(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?o(Object(i),!0).forEach((function(t){r(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function l(e,t){if(null==e)return{};var i,a,r=function(e,t){if(null==e)return{};var i,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)i=o[a],t.indexOf(i)>=0||(r[i]=e[i]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)i=o[a],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),i=t;return e&&(i="function"==typeof e?e(t):n(n({},t),e)),i},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},v=a.forwardRef((function(e,t){var i=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=p(i),v=r,y=c["".concat(s,".").concat(v)]||c[v]||u[v]||o;return i?a.createElement(y,n(n({ref:t},d),{},{components:i})):a.createElement(y,n({ref:t},d))}));function y(e,t){var i=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=i.length,n=new Array(o);n[0]=v;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:r,n[1]=l;for(var p=2;p<o;p++)n[p]=i[p];return a.createElement.apply(null,n)}return a.createElement.apply(null,i)}v.displayName="MDXCreateElement"},21286:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>s,contentTitle:()=>n,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=i(87462),r=(i(67294),i(3905));i(8209);const o={title:"Glossary",id:"glossary",sidebar_label:"Glossary"},n="Glossary",l={unversionedId:"participate/dex/Overview/glossary",id:"participate/dex/Overview/glossary",title:"Glossary",description:"aeSwap",source:"@site/docs/participate/dex/03-Overview/03-protocol_overview_glossary.md",sourceDirName:"participate/dex/03-Overview",slug:"/participate/dex/Overview/glossary",permalink:"/participate/dex/Overview/glossary",draft:!1,tags:[],version:"current",lastUpdatedAt:1735315575,formattedLastUpdatedAt:"Dec 27, 2024",sidebarPosition:3,frontMatter:{title:"Glossary",id:"glossary",sidebar_label:"Glossary"},sidebar:"docs",previous:{title:"Ecosystem Participants",permalink:"/participate/dex/Overview/ecosystem_participants"},next:{title:"Smart Contracts",permalink:"/participate/dex/Overview/smart_contracts/"}},s={},p=[{value:"aeSwap",id:"aeswap",level:2},{value:"Automated Market Maker (AMM)",id:"automated-market-maker-amm",level:2},{value:"Liquidity Addition",id:"liquidity-addition",level:2},{value:"Liquidity Provider (LP)",id:"liquidity-provider-lp",level:2},{value:"Liquidity Removal",id:"liquidity-removal",level:2},{value:"Pool",id:"pool",level:2},{value:"Price Impact",id:"price-impact",level:2},{value:"Slippage",id:"slippage",level:2},{value:"Swap",id:"swap",level:2},{value:"Total Value Locked (TVL)",id:"total-value-locked-tvl",level:2},{value:"Yield Farming",id:"yield-farming",level:2}],d={toc:p},c="wrapper";function u(e){let{components:t,...i}=e;return(0,r.kt)(c,(0,a.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"glossary"},"Glossary"),(0,r.kt)("h2",{id:"aeswap"},"aeSwap"),(0,r.kt)("p",null,"A decentralized exchange platform built on the Archethic Public Blockchain, leveraging the AMM model for swapping tokens, adding liquidity, and yield farming."),(0,r.kt)("h2",{id:"automated-market-maker-amm"},"Automated Market Maker (AMM)"),(0,r.kt)("p",null,"An AMM is a type of decentralized exchange protocol that relies on a mathematical formula to price assets. Instead of using a traditional order book, it automates the process of providing liquidity to pools of two or more tokens, from which users can trade."),(0,r.kt)("h2",{id:"liquidity-addition"},"Liquidity Addition"),(0,r.kt)("p",null,"The process of depositing tokens into a pool to increase its liquidity. Users receive LP tokens in return, representing their share of the pool."),(0,r.kt)("h2",{id:"liquidity-provider-lp"},"Liquidity Provider (LP)"),(0,r.kt)("p",null,"A user who deposits an equivalent value of two tokens into a pool, facilitating trading by providing liquidity. LPs are compensated with transaction fees and potentially other rewards."),(0,r.kt)("h2",{id:"liquidity-removal"},"Liquidity Removal"),(0,r.kt)("p",null,"The process of redeeming LP tokens to withdraw liquidity from a pool. Users receive a proportional amount of the pool's tokens based on their share."),(0,r.kt)("h2",{id:"pool"},"Pool"),(0,r.kt)("p",null,"A smart contract that holds reserves of two or more tokens and allows users to trade between these tokens. The pool's liquidity is provided by liquidity providers who deposit an equivalent value of two tokens."),(0,r.kt)("h2",{id:"price-impact"},"Price Impact"),(0,r.kt)("p",null,"The effect a trade will have on the price of a token in a pool. Large trades in relation to the pool's size can have a significant price impact, affecting the trade's execution price."),(0,r.kt)("h2",{id:"slippage"},"Slippage"),(0,r.kt)("p",null,"The difference in price between when a trade is submitted and when it is executed, due to changes in a pool's liquidity in that interval. Users can set a slippage tolerance to protect against excessive price movement."),(0,r.kt)("h2",{id:"swap"},"Swap"),(0,r.kt)("p",null,"The action of trading one token for another within the aeSwap ecosystem. Swaps are executed against the liquidity available in pools and are subject to fees and slippage."),(0,r.kt)("h2",{id:"total-value-locked-tvl"},"Total Value Locked (TVL)"),(0,r.kt)("p",null,"The total amount of assets that are currently staked or locked in a protocol, indicating its size and health. In aeSwap, it refers to the total value of tokens locked in all liquidity pools."),(0,r.kt)("h2",{id:"yield-farming"},"Yield Farming"),(0,r.kt)("p",null,"A strategy where users stake or lend crypto assets in order to receive returns or rewards. In the context of aeSwap, this involves participating in liquidity provision and potentially other incentivized activities."),(0,r.kt)("p",null,"This glossary provides a foundational understanding of key concepts within the aeSwap ecosystem, facilitating a clearer comprehension of the platform's functionalities and operations."))}u.isMDXComponent=!0},8209:(e,t,i)=>{i(67294)}}]);