"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9712],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(r),d=o,m=u["".concat(c,".").concat(d)]||u[d]||f[d]||i;return r?n.createElement(m,a(a({ref:t},p),{},{components:r})):n.createElement(m,a({ref:t},p))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:o,a[1]=l;for(var s=2;s<i;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},82762:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>f,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var n=r(87462),o=(r(67294),r(3905));r(8209);const i={id:"proof-of-work",title:"Proof of Work algorithm"},a=void 0,l={unversionedId:"build/core/mining/proof-of-work",id:"build/core/mining/proof-of-work",title:"Proof of Work algorithm",description:"The Archethic's proof of work algorithm defines way to assert the validity of the origin signature.",source:"@site/docs/build/core/mining/proof_of_work.md",sourceDirName:"build/core/mining",slug:"/build/core/mining/proof-of-work",permalink:"/build/core/mining/proof-of-work",draft:!1,tags:[],version:"current",lastUpdatedAt:1733336498,formattedLastUpdatedAt:"Dec 4, 2024",frontMatter:{id:"proof-of-work",title:"Proof of Work algorithm"},sidebar:"docs",previous:{title:"Pending transaction validation",permalink:"/build/core/mining/transaction-validation"},next:{title:"Transaction context retrieval",permalink:"/build/core/mining/transaction-context"}},c={},s=[{value:"Origin public key candidates",id:"origin-public-key-candidates",level:2},{value:"Lookup",id:"lookup",level:2}],p={toc:s},u="wrapper";function f(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The Archethic's proof of work algorithm defines way to assert the validity of the origin signature."),(0,o.kt)("p",null,"It defines two main components:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"List of origin public key candidates"),(0,o.kt)("li",{parentName:"ul"},"Lookup of the origin public key to verify the signature")),(0,o.kt)("h2",{id:"origin-public-key-candidates"},"Origin public key candidates"),(0,o.kt)("p",null,"Origin public keys listed for a given transaction are known by the entire network and are shared between clients and nodes."),(0,o.kt)("p",null,"However, a given transaction can specify - through ",(0,o.kt)("a",{parentName:"p",href:"/build/smart-contracts/"},"smart-contract")," the origin family."),(0,o.kt)("p",null,"By this way, the nodes are able to extract the list of origin public keys to assert with the signature."),(0,o.kt)("h2",{id:"lookup"},"Lookup"),(0,o.kt)("p",null,"A simple algorithm is defined to scan the entire list of public keys candidates and verify the cryptographic origin signature."),(0,o.kt)("p",null,"Once the public key is found, it becomes the Proof of Work.\nIf no public key is found, the proof of work is invalid and the transaction as well."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Telemetry timing is used for this algorithm to indicate how fast the algorithm is with a given number of public keys")))}f.isMDXComponent=!0},8209:(e,t,r)=>{r(67294)}}]);