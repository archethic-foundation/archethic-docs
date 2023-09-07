"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9707],{3905:(t,e,n)=>{n.d(e,{Zo:()=>d,kt:()=>f});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function c(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var s=r.createContext({}),l=function(t){var e=r.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},d=function(t){var e=l(t.components);return r.createElement(s.Provider,{value:e},t.children)},u="mdxType",p={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,o=t.originalType,s=t.parentName,d=c(t,["components","mdxType","originalType","parentName"]),u=l(n),m=a,f=u["".concat(s,".").concat(m)]||u[m]||p[m]||o;return n?r.createElement(f,i(i({ref:e},d),{},{components:n})):r.createElement(f,i({ref:e},d))}));function f(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=n.length,i=new Array(o);i[0]=m;var c={};for(var s in e)hasOwnProperty.call(e,s)&&(c[s]=e[s]);c.originalType=t,c[u]="string"==typeof t?t:a,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4261:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var r=n(7462),a=(n(7294),n(3905));n(8209);const o={id:"examples",title:"Smart Contracts - Examples",sidebar_label:"Examples",sidebar_position:5},i=void 0,c={unversionedId:"build/smart-contracts/language/examples",id:"build/smart-contracts/language/examples",title:"Smart Contracts - Examples",description:"Hello World",source:"@site/docs/build/smart-contracts/language/examples.md",sourceDirName:"build/smart-contracts/language",slug:"/build/smart-contracts/language/examples",permalink:"/build/smart-contracts/language/examples",draft:!1,tags:[],version:"current",lastUpdatedAt:1694096451,formattedLastUpdatedAt:"Sep 7, 2023",sidebarPosition:5,frontMatter:{id:"examples",title:"Smart Contracts - Examples",sidebar_label:"Examples",sidebar_position:5},sidebar:"docs",previous:{title:"Library",permalink:"/build/smart-contracts/language/library"},next:{title:"Legacy",permalink:"/build/smart-contracts/language/legacy/"}},s={},l=[{value:"Hello World",id:"hello-world",level:2},{value:"ICO (Initial Coin Offering)",id:"ico-initial-coin-offering",level:2},{value:"Recurring ICO",id:"recurring-ico",level:2},{value:"Counting system",id:"counting-system",level:2}],d={toc:l},u="wrapper";function p(t){let{components:e,...n}=t;return(0,a.kt)(u,(0,r.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"hello-world"},"Hello World"),(0,a.kt)("p",null,'This simple contract will be triggered once, at the specified unix timestamp.\nIt will create a new transaction with a content "Hello world!".'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-elixir"},'@version 1\nactions triggered_by: datetime, at: 1689857160 do\n  Contract.set_content("Hello world!")\nend\n')),(0,a.kt)("h2",{id:"ico-initial-coin-offering"},"ICO (Initial Coin Offering)"),(0,a.kt)("p",null,"Users can send UCOs to this contract and will receive 10000 times the amount as token from this contract.\nIt is possible for users to define a different receive address by specifying it as the content of the transaction.\nThe Smart Contract's chain must define a token."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-elixir"},'@version 1\ncondition triggered_by: transaction, as: []\nactions triggered_by: transaction do\n    # Get the amount of UCO sent to this contract\n    amount_send = Map.get(transaction.uco_movements, contract.address)\n\n    if amount_send > 0 do\n        # Convert UCO to the number of tokens to credit. Each UCO worth 10000 token\n        token_to_credit = amount_send * 10000\n\n        Contract.set_type("transfer")\n\n        # Users can specify to send the token in a different address\n        # default to the trigger transaction\'s chain\n        destination = transaction.address\n        if transaction.content != "" &&\n           String.to_hex(transaction.content) do\n            destination = transaction.content\n        end\n\n        Contract.add_token_transfer(to: destination, token_address: contract.address, amount: token_to_credit)\n    end\nend\n')),(0,a.kt)("h2",{id:"recurring-ico"},"Recurring ICO"),(0,a.kt)("p",null,"This contract will automatically call the ICO contract with 2 UCOs every hours.\nThe tokens will be transfered in a different chain."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-elixir"},'@version 1\nactions triggered_by: interval, at: "0 * * * *" do\n    Contract.set_type("transfer")\n\n    # 0x001234... is the chain to send the tokens to\n    # we put it in the content so the ICO contract will directly send funds there\n    Contract.set_content(0x001234)\n\n    # 0x00ABCD... is the ICO smart contract\'s address\n    Contract.add_recipient(0x00ABCD...)\n    Contract.add_uco_transfer(amount: 2, to: 0x00ABCD...)\nend\n')),(0,a.kt)("h2",{id:"counting-system"},"Counting system"),(0,a.kt)("p",null,'This contract counts the number of times it received a transaction with the content "X" or "Y".\nIt uses a JSON string to persist the state. The initial content of the contract must be ',(0,a.kt)("inlineCode",{parentName:"p"},'{"x": 0, "y": 0}'),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-elixir"},'@version 1\ncondition triggered_by: transaction, as: [\n    content: List.in?(["X", "Y"], transaction.content)\n]\nactions triggered_by: transaction do\n    count_x = Json.path_extract(contract.content, "$.x")\n    count_y = Json.path_extract(contract.content, "$.y")\n\n    if transaction.content == "X" do\n        count_x = count_x + 1\n    else\n        count_y = count_y + 1\n    end\n\n    Contract.set_content(Json.to_string([x: count_x, y: count_y]))\nend\n')))}p.isMDXComponent=!0},8209:(t,e,n)=>{n(7294)}}]);