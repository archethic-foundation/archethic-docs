"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8574],{3905:(t,e,n)=>{n.d(e,{Zo:()=>u,kt:()=>f});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function s(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},o=Object.keys(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var c=a.createContext({}),l=function(t){var e=a.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):s(s({},e),t)),n},u=function(t){var e=l(t.components);return a.createElement(c.Provider,{value:e},t.children)},p="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,o=t.originalType,c=t.parentName,u=i(t,["components","mdxType","originalType","parentName"]),p=l(n),m=r,f=p["".concat(c,".").concat(m)]||p[m]||d[m]||o;return n?a.createElement(f,s(s({ref:e},u),{},{components:n})):a.createElement(f,s({ref:e},u))}));function f(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=n.length,s=new Array(o);s[0]=m;var i={};for(var c in e)hasOwnProperty.call(e,c)&&(i[c]=e[c]);i.originalType=t,i[p]="string"==typeof t?t:r,s[1]=i;for(var l=2;l<o;l++)s[l]=n[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},50952:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var a=n(87462),r=(n(67294),n(3905));n(8209);const o={id:"state",title:"Smart Contracts - State",sidebar_label:"State",sidebar_position:3},s=void 0,i={unversionedId:"build/smart-contracts/state",id:"build/smart-contracts/state",title:"Smart Contracts - State",description:"A Smart Contract's state is persisted as an UTXO (unspent output) of the resulting transaction. Because of this, any state modification will result in a new transaction on the Smart Contract's transaction chain.",source:"@site/docs/build/smart-contracts/state.md",sourceDirName:"build/smart-contracts",slug:"/build/smart-contracts/state",permalink:"/build/smart-contracts/state",draft:!1,tags:[],version:"current",lastUpdatedAt:1708513258,formattedLastUpdatedAt:"Feb 21, 2024",sidebarPosition:3,frontMatter:{id:"state",title:"Smart Contracts - State",sidebar_label:"State",sidebar_position:3},sidebar:"docs",previous:{title:"Language",permalink:"/build/smart-contracts/language/legacy/language"},next:{title:"Fees",permalink:"/build/smart-contracts/fees"}},c={},l=[],u={toc:l},p="wrapper";function d(t){let{components:e,...n}=t;return(0,r.kt)(p,(0,a.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"A Smart Contract's state is persisted as an UTXO (unspent output) of the resulting transaction. Because of this, any state modification will result in a new transaction on the Smart Contract's transaction chain."),(0,r.kt)("p",null,"A state is a map with string as keys. You cannot access that map directly, instead, you have to use the module ",(0,r.kt)("a",{parentName:"p",href:"/build/smart-contracts/language/library/state"},"State")," that provides the functions to read and write the state."),(0,r.kt)("p",null,"When a contract is deployed, ",(0,r.kt)("strong",{parentName:"p"},"it cannot have a state"),". There is no initial state. So it's always good to deal with this case by using ",(0,r.kt)("a",{parentName:"p",href:"/build/smart-contracts/language/library/state#get2"},"State.get/2")," where you provide a default value. Here's an example to give you an idea:"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Counter example")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-elixir"},'@version 1\n\ncondition triggered_by: transaction, as: []\nactions triggered_by: transaction do\n  # Retrieve the count from previous contract\'s transaction or default to 0\n  count = State.get("count", 0)\n\n  # Increment the count\n  new_count = count + 1\n\n  # Write the new value in the state\n  State.set("count", new_count)\nend\n')))}d.isMDXComponent=!0},8209:(t,e,n)=>{n(67294)}}]);