"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2034],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>k});var a=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=a.createContext({}),o=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=o(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,i=e.originalType,s=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),d=o(n),c=l,k=d["".concat(s,".").concat(c)]||d[c]||m[c]||i;return n?a.createElement(k,r(r({ref:t},u),{},{components:n})):a.createElement(k,r({ref:t},u))}));function k(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=n.length,r=new Array(i);r[0]=c;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[d]="string"==typeof e?e:l,r[1]=p;for(var o=2;o<i;o++)r[o]=n[o];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},60097:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>m,frontMatter:()=>i,metadata:()=>p,toc:()=>o});var a=n(87462),l=(n(67294),n(3905));n(8209);const i={id:"list",title:"List module",sidebar_label:"List"},r=void 0,p={unversionedId:"build/smart-contracts/language/library/list",id:"build/smart-contracts/language/library/list",title:"List module",description:"The List module contains functions to deal with lists. Lists are actually Linked List.",source:"@site/docs/build/smart-contracts/language/library/list.md",sourceDirName:"build/smart-contracts/language/library",slug:"/build/smart-contracts/language/library/list",permalink:"/build/smart-contracts/language/library/list",draft:!1,tags:[],version:"current",lastUpdatedAt:1708513258,formattedLastUpdatedAt:"Feb 21, 2024",frontMatter:{id:"list",title:"List module",sidebar_label:"List"},sidebar:"docs",previous:{title:"Json",permalink:"/build/smart-contracts/language/library/json"},next:{title:"Map",permalink:"/build/smart-contracts/language/library/map"}},s={},o=[{value:"at/2",id:"at2",level:3},{value:"size/1",id:"size1",level:3},{value:"in?/2",id:"in2",level:3},{value:"empty?/1",id:"empty1",level:3},{value:"concat/2",id:"concat2",level:3},{value:"append/2",id:"append2",level:3},{value:"prepend/2",id:"prepend2",level:3},{value:"join/2",id:"join2",level:3}],u={toc:o},d="wrapper";function m(e){let{components:t,...n}=e;return(0,l.kt)(d,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"List")," module contains functions to deal with lists. Lists are actually ",(0,l.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Linked_list"},"Linked List"),"."),(0,l.kt)("h3",{id:"at2"},"at/2"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-elixir"},'List.at(["a", "b", "c"], 0)     # "a"\nList.at(["a", "b", "c"], 1)     # "b"\nList.at(["a", "b", "c"], 2)     # "c"\nList.at([], 0)                  # nil\n')),(0,l.kt)("p",null,"Parameters:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"list")," the list"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"index")," the index (zero-based)")),(0,l.kt)("p",null,"Returns the element at ",(0,l.kt)("inlineCode",{parentName:"p"},"index")," in ",(0,l.kt)("inlineCode",{parentName:"p"},"list"),"."),(0,l.kt)("h3",{id:"size1"},"size/1"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-elixir"},"List.size([])           # 0\nList.size([1,2,3,4])    # 4\n")),(0,l.kt)("p",null,"Parameters:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"list")," the list")),(0,l.kt)("p",null,"Returns the number of keys in ",(0,l.kt)("inlineCode",{parentName:"p"},"list"),"."),(0,l.kt)("h3",{id:"in2"},"in?/2"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-elixir"},'List.in?(["bob", "alice"], "alice") # true\nList.in?(["bob", "alice"], "fred")  # false\n')),(0,l.kt)("p",null,"Parameters:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"list")," the haystack"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"element")," the needle")),(0,l.kt)("p",null,"Returns whether the ",(0,l.kt)("inlineCode",{parentName:"p"},"needle")," is in the ",(0,l.kt)("inlineCode",{parentName:"p"},"haystack"),"."),(0,l.kt)("h3",{id:"empty1"},"empty?/1"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-elixir"},'List.empty?([])         # true\nList.empty?(["apple"])  # false\n')),(0,l.kt)("p",null,"Parameters:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"list")," the list")),(0,l.kt)("p",null,"Returns whether the ",(0,l.kt)("inlineCode",{parentName:"p"},"list")," is empty or not."),(0,l.kt)("h3",{id:"concat2"},"concat/2"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-elixir"},"List.concat([], [])         # []\nList.concat([1,2], [3,4])   # [1,2,3,4]\n")),(0,l.kt)("p",null,"Parameters:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"list1")," a list"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"list2")," another list")),(0,l.kt)("p",null,"Returns a new list where ",(0,l.kt)("inlineCode",{parentName:"p"},"list2")," is concatenated to ",(0,l.kt)("inlineCode",{parentName:"p"},"list1"),"."),(0,l.kt)("h3",{id:"append2"},"append/2"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-elixir"},"List.append([], 1)    # [1]\nList.append([1], 2)   # [1,2]\n")),(0,l.kt)("p",null,"Parameters:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"list")," the list"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"element")," the element")),(0,l.kt)("p",null,"Returns a new list where ",(0,l.kt)("inlineCode",{parentName:"p"},"element")," is appended to the end of ",(0,l.kt)("inlineCode",{parentName:"p"},"list"),"."),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"If order doesn't matter, we suggest to use ",(0,l.kt)("inlineCode",{parentName:"p"},"prepend/2")," instead (Complexity: O(1) instead of O(n)).")),(0,l.kt)("h3",{id:"prepend2"},"prepend/2"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-elixir"},"List.prepend([], 1)    # [1]\nList.prepend([1], 0)   # [0,1]\n")),(0,l.kt)("p",null,"Parameters:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"list")," the list"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"element")," the element")),(0,l.kt)("p",null,"Returns a new list where ",(0,l.kt)("inlineCode",{parentName:"p"},"element")," is appended to the start of ",(0,l.kt)("inlineCode",{parentName:"p"},"list"),"."),(0,l.kt)("h3",{id:"join2"},"join/2"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-elixir"},'List.join([], ", ")    # ""\nList.join(["Mike", "Robert", "Joe"], ", ")   # "Mike, Robert, Joe"\n')),(0,l.kt)("p",null,"Parameters:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"list")," the list of strings"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"separator")," the separator")),(0,l.kt)("p",null,"Returns a string where all ",(0,l.kt)("inlineCode",{parentName:"p"},"list"),"'s elements have been joined with ",(0,l.kt)("inlineCode",{parentName:"p"},"separator")," separator."))}m.isMDXComponent=!0},8209:(e,t,n)=>{n(67294)}}]);