"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9782],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>b});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},m="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=c(r),d=a,b=m["".concat(u,".").concat(d)]||m[d]||s[d]||l;return r?n.createElement(b,i(i({ref:t},p),{},{components:r})):n.createElement(b,i({ref:t},p))}));function b(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=d;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o[m]="string"==typeof e?e:a,i[1]=o;for(var c=2;c<l;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},94405:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>s,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var n=r(87462),a=(r(67294),r(3905));r(8209);const l={id:"math",title:"Math module",sidebar_label:"Math"},i=void 0,o={unversionedId:"build/smart-contracts/language/library/math",id:"build/smart-contracts/language/library/math",title:"Math module",description:"The Math module contains mathematical functions.",source:"@site/docs/build/smart-contracts/language/library/math.md",sourceDirName:"build/smart-contracts/language/library",slug:"/build/smart-contracts/language/library/math",permalink:"/build/smart-contracts/language/library/math",draft:!1,tags:[],version:"current",lastUpdatedAt:1708513258,formattedLastUpdatedAt:"Feb 21, 2024",frontMatter:{id:"math",title:"Math module",sidebar_label:"Math"},sidebar:"docs",previous:{title:"Map",permalink:"/build/smart-contracts/language/library/map"},next:{title:"Regex",permalink:"/build/smart-contracts/language/library/regex"}},u={},c=[{value:"pow/2",id:"pow2",level:3},{value:"trunc/1",id:"trunc1",level:3},{value:"sqrt/1",id:"sqrt1",level:3},{value:"rem/2",id:"rem2",level:3}],p={toc:c},m="wrapper";function s(e){let{components:t,...r}=e;return(0,a.kt)(m,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"Math")," module contains mathematical functions."),(0,a.kt)("h3",{id:"pow2"},"pow/2"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-elixir"},"Math.pow(2, 3)\n# 8\nMath.pow(1.7, 8)\n# 69.75757441\n")),(0,a.kt)("p",null,"Parameters:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"number")," the number to apply the power"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"exponent")," the exponent of the power")),(0,a.kt)("p",null,"Returns the result of the power of number by exponent."),(0,a.kt)("h3",{id:"trunc1"},"trunc/1"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-elixir"},"Math.trunc(8.32)\n# 8\n")),(0,a.kt)("p",null,"Parameters:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"number")," the number to truncate")),(0,a.kt)("p",null,"Returns the truncated number as an integer."),(0,a.kt)("h3",{id:"sqrt1"},"sqrt/1"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-elixir"},"Math.sqrt(16)\n# 4\nMath.sqrt(12.5)\n# 3.53553390\n")),(0,a.kt)("p",null,"Parameters:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"number")," the number to calculate the square root")),(0,a.kt)("p",null,"Returns the square root if the number."),(0,a.kt)("h3",{id:"rem2"},"rem/2"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-elixir"},"Math.rem(2.1, 3)\n# 2.1\nMath.rem(10, 3)\n# 1\nMath.rem(-10, 3)\n# -1\nMath.rem(10.2, 1)\n# 0.2\n")),(0,a.kt)("p",null,"Parameters:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"dividend")," the number to divid"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"divisor")," the number which divid")),(0,a.kt)("p",null,"Returns the remainder (modulo) of a division."))}s.isMDXComponent=!0},8209:(e,t,r)=>{r(67294)}}]);