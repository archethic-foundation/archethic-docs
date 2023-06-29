"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3592],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),f=a,h=d["".concat(l,".").concat(f)]||d[f]||u[f]||i;return n?r.createElement(h,o(o({ref:t},p),{},{components:n})):r.createElement(h,o({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},7736:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));n(8209);const i={id:"self-repair",title:"Self Repair"},o=void 0,s={unversionedId:"learn/p2p/self-repair",id:"learn/p2p/self-repair",title:"Self Repair",description:"Archethic Blockchain is using a self-repair mechanism to be able to sync/re-sync missing transactions to be able",source:"@site/docs/learn/p2p/self-repair.md",sourceDirName:"learn/p2p",slug:"/learn/p2p/self-repair",permalink:"/learn/p2p/self-repair",draft:!1,tags:[],version:"current",lastUpdatedAt:1688046069,formattedLastUpdatedAt:"Jun 29, 2023",frontMatter:{id:"self-repair",title:"Self Repair"},sidebar:"docs",previous:{title:"Bootstrapping",permalink:"/learn/p2p/bootstrapping"},next:{title:"Sharding",permalink:"/learn/sharding/"}},l={},c=[{value:"Identification",id:"identification",level:2},{value:"Synchronization",id:"synchronization",level:2}],p={toc:c},d="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Archethic Blockchain is using a self-repair mechanism to be able to sync/re-sync missing transactions to be able\nto restore the state of a node."),(0,a.kt)("p",null,"Because Archethic is using a multidimensional sharding, a node needs to execute a self-repair on multiple occasions, to ensure data availability and security:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"When the node bootstraps"),(0,a.kt)("li",{parentName:"ul"},"When a node goes offline"),(0,a.kt)("li",{parentName:"ul"},"When the code and heuristic algorithms changes")),(0,a.kt)("h2",{id:"identification"},"Identification"),(0,a.kt)("p",null,"To be able to determine which transactions are missing, for each cycle of repair, a date of last sync is persisted.\nTherefore, we can decide from this date, the list of missing BeaconChain transactions to sync. (Reminder: BeaconChain summaries transactions across the entire network each day)"),(0,a.kt)("p",null,"The Self-Repair will then request BeaconChain storage pools to get the missing transactions from those missing days"),(0,a.kt)("h2",{id:"synchronization"},"Synchronization"),(0,a.kt)("p",null,"Because we are using rotating election, nodes need to perform the ",(0,a.kt)("inlineCode",{parentName:"p"},"Storage Node Election")," to determine if they need to store this transaction."),(0,a.kt)("p",null,"In that case, we will get the list of existing storage nodes from the transaction's address to sync and request from the closest nodes the transaction to be replicated."),(0,a.kt)("p",null,"Once finalized, a new last date of sync is persisted for the next cycle."))}u.isMDXComponent=!0},8209:(e,t,n)=>{n(7294)}}]);