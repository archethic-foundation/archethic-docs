"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7874],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>b});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(r),m=o,b=u["".concat(c,".").concat(m)]||u[m]||d[m]||a;return r?n.createElement(b,i(i({ref:t},s),{},{components:r})):n.createElement(b,i({ref:t},s))}));function b(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},91402:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var n=r(87462),o=(r(67294),r(3905));r(8209);const a={id:"faq",title:"FAQ",sidebar_label:"FAQ"},i=void 0,l={unversionedId:"build/dapp/faq",id:"build/dapp/faq",title:"FAQ",description:"How to test a WebSocket connection locally?",source:"@site/docs/build/dapp/10-faq.md",sourceDirName:"build/dapp",slug:"/build/dapp/faq",permalink:"/build/dapp/faq",draft:!1,tags:[],version:"current",lastUpdatedAt:1735315575,formattedLastUpdatedAt:"Dec 27, 2024",sidebarPosition:10,frontMatter:{id:"faq",title:"FAQ",sidebar_label:"FAQ"},sidebar:"docs",previous:{title:"RPC Commands",permalink:"/build/dapp/rpc-commands"},next:{title:"SDK",permalink:"/build/sdk/"}},c={},p=[{value:"How to test a WebSocket connection locally?",id:"how-to-test-a-websocket-connection-locally",level:2},{value:"Which browsers are supported?",id:"which-browsers-are-supported",level:2},{value:"Deeplink RPC limitations",id:"deeplink-rpc-limitations",level:2}],s={toc:p},u="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"how-to-test-a-websocket-connection-locally"},"How to test a WebSocket connection locally?"),(0,o.kt)("p",null,"Ensure that the Archethic wallet is running and listening on the correct port. You can use tools like wscat for testing."),(0,o.kt)("h2",{id:"which-browsers-are-supported"},"Which browsers are supported?"),(0,o.kt)("p",null,"Currently, only browsers based on chromium (Google Chrome, Brave, ...) are fully supported with the Archethic extension."),(0,o.kt)("h2",{id:"deeplink-rpc-limitations"},"Deeplink RPC limitations"),(0,o.kt)("p",null,"For a ",(0,o.kt)("strong",{parentName:"p"},"mobile DApp")," to communicate with ",(0,o.kt)("strong",{parentName:"p"},"aeWallet mobile"),", the only communication channel is the deeplink.\nThis means that ",(0,o.kt)("strong",{parentName:"p"},"aeWallet")," will briefly be brought to the foreground during each call made by your ",(0,o.kt)("strong",{parentName:"p"},"DApp"),"."),(0,o.kt)("p",null,"Due to this limitation, we have decided to disable ",(0,o.kt)("strong",{parentName:"p"},"subscription RPC calls")," by ",(0,o.kt)("strong",{parentName:"p"},"deeplink"),"."))}d.isMDXComponent=!0},8209:(e,t,r)=>{r(67294)}}]);