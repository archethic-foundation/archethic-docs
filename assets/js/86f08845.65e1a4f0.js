"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6735],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>b});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),u=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=u(e.components);return a.createElement(i.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=u(n),m=r,b=p["".concat(i,".").concat(m)]||p[m]||d[m]||l;return n?a.createElement(b,o(o({ref:t},s),{},{components:n})):a.createElement(b,o({ref:t},s))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=m;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[p]="string"==typeof e?e:r,o[1]=c;for(var u=2;u<l;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(67294),r=n(86010);const l={tabItem:"tabItem_Ymn6"};function o(e){let{children:t,hidden:n,className:o}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(l.tabItem,o),hidden:n},t)}},74866:(e,t,n)=>{n.d(t,{Z:()=>k});var a=n(87462),r=n(67294),l=n(86010),o=n(12466),c=n(16550),i=n(91980),u=n(67392),s=n(50012);function p(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function d(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??p(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function b(e){let{queryString:t=!1,groupId:n}=e;const a=(0,c.k6)(),l=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,i._X)(l),(0,r.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(a.location.search);t.set(l,e),a.replace({...a.location,search:t.toString()})}),[l,a])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,l=d(e),[o,c]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:l}))),[i,u]=b({queryString:n,groupId:a}),[p,f]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,l]=(0,s.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&l.set(e)}),[n,l])]}({groupId:a}),h=(()=>{const e=i??p;return m({value:e,tabValues:l})?e:null})();(0,r.useLayoutEffect)((()=>{h&&c(h)}),[h]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);c(e),u(e),f(e)}),[u,f,l]),tabValues:l}}var h=n(72389);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function y(e){let{className:t,block:n,selectedValue:c,selectValue:i,tabValues:u}=e;const s=[],{blockElementScrollPositionUntilNextRender:p}=(0,o.o5)(),d=e=>{const t=e.currentTarget,n=s.indexOf(t),a=u[n].value;a!==c&&(p(t),i(a))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=s.indexOf(e.currentTarget)+1;t=s[n]??s[0];break}case"ArrowLeft":{const n=s.indexOf(e.currentTarget)-1;t=s[n]??s[s.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":n},t)},u.map((e=>{let{value:t,label:n,attributes:o}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:c===t?0:-1,"aria-selected":c===t,key:t,ref:e=>s.push(e),onKeyDown:m,onClick:d},o,{className:(0,l.Z)("tabs__item",g.tabItem,o?.className,{"tabs__item--active":c===t})}),n??t)})))}function v(e){let{lazy:t,children:n,selectedValue:a}=e;const l=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function w(e){const t=f(e);return r.createElement("div",{className:(0,l.Z)("tabs-container",g.tabList)},r.createElement(y,(0,a.Z)({},e,t)),r.createElement(v,(0,a.Z)({},e,t)))}function k(e){const t=(0,h.Z)();return r.createElement(w,(0,a.Z)({key:String(t)},e))}},57118:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>u,default:()=>f,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var a=n(87462),r=(n(67294),n(3905)),l=(n(8209),n(74866)),o=n(85162),c=n(44824);const i={id:"watch-balance",title:"Watching account",sidebar_label:"Watching account"},u=void 0,s={unversionedId:"build/dapp/watch-balance",id:"build/dapp/watch-balance",title:"Watching account",description:"This example connects to aeWallet and watches for updates to the selected account.",source:"@site/docs/build/dapp/04-watching-account.mdx",sourceDirName:"build/dapp",slug:"/build/dapp/watch-balance",permalink:"/build/dapp/watch-balance",draft:!1,tags:[],version:"current",lastUpdatedAt:1735315575,formattedLastUpdatedAt:"Dec 27, 2024",sidebarPosition:4,frontMatter:{id:"watch-balance",title:"Watching account",sidebar_label:"Watching account"},sidebar:"docs",previous:{title:"Connecting aeWallet",permalink:"/build/dapp/connecting"},next:{title:"Signing transaction",permalink:"/build/dapp/signing-transaction"}},p={},d=[],m={toc:d},b="wrapper";function f(e){let{components:t,...n}=e;return(0,r.kt)(b,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This example connects to ",(0,r.kt)("strong",{parentName:"p"},"aeWallet")," and watches for updates to the selected account."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Ensure that the ",(0,r.kt)("strong",{parentName:"p"},"aeWallet")," application is ",(0,r.kt)("strong",{parentName:"p"},"running and unlocked")," before attempting connection.")),(0,r.kt)(l.Z,{groupId:"sdk",mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"javascript",label:"Javascript / Typescript",mdxType:"TabItem"},(0,r.kt)(c.ZP,{mdxType:"JSDisclaimer"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="index.html"',title:'"index.html"'},'<html>\n  <head>\n    <script type="module" src="main.js"/>\n  </head>\n</html>\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="main.js"',title:'"main.js"'},'import Archethic, { ConnectionState } from "https://esm.sh/@archethicjs/sdk";\n\nconst archethicClient = new Archethic()\n\n\nawait archethicClient.connect()\n\n/// Listen to rpc wallet connection status changes\nconst accountSubscription = await archethicClient.rpcWallet.onCurrentAccountChange(async (account) => {\n    console.log(account)\n})\n\nsetTimeout(\n    async () => {\n\n        await archethicClient.rpcWallet.close()\n        archethicClient.rpcWallet.unsubscribe(accountSubscription)\n    },\n    20000,\n)\n'))),(0,r.kt)(o.Z,{value:"flutter",label:"Flutter",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-dart"},"import 'dart:convert';\nimport 'dart:developer';\n\nimport 'package:archethic_wallet_client/archethic_wallet_client.dart';\n\nFuture<void> main() async {\n  final aewalletClient = await ArchethicDAppClient.auto(\n    origin: const RequestOrigin(\n      name: 'FlutterDappExample',\n    ),\n    replyBaseUrl: 'flutterdappexample://dapp.example',\n  );\n\n  final subscription =\n      await aewalletClient.subscribeCurrentAccount().valueOrThrow;\n  subscription.updates.listen((account) {\n    log('Account updated : ${jsonEncode(account.toJson())} ...');\n  });\n  await aewalletClient.connect();\n\n  await Future.delayed(Duration(seconds: 10));\n\n  await aewalletClient.unsubscribeCurrentAccount(subscription.id);\n  await aewalletClient.close();\n}\n")))))}f.isMDXComponent=!0},44824:(e,t,n)=>{n.d(t,{ZP:()=>c});var a=n(87462),r=(n(67294),n(3905));n(8209);const l={toc:[]},o="wrapper";function c(e){let{components:t,...n}=e;return(0,r.kt)(o,(0,a.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"This snippet uses ",(0,r.kt)("inlineCode",{parentName:"p"},"Javascript")," language to keep things simple."),(0,r.kt)("p",{parentName:"admonition"},"But ",(0,r.kt)("inlineCode",{parentName:"p"},"@archethicjs/sdk")," can be used in a ",(0,r.kt)("inlineCode",{parentName:"p"},"TypeScript")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"Javascript")," project.")))}c.isMDXComponent=!0},8209:(e,t,n)=>{n(67294)}}]);