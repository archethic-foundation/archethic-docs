"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6544],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=s(n),m=r,k=u["".concat(c,".").concat(m)]||u[m]||p[m]||i;return n?a.createElement(k,l(l({ref:t},d),{},{components:n})):a.createElement(k,l({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=u;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},23338:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return d},default:function(){return u}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),l=["components"],o={id:"language",title:"Smart Contract Language"},c=void 0,s={unversionedId:"build/smart-contracts/language",id:"build/smart-contracts/language",title:"Smart Contract Language",description:"Archethic Blockchain defines a new smart contract language which was designed to resolve the issue of smart contracts:",source:"@site/docs/build/smart-contracts/language.md",sourceDirName:"build/smart-contracts",slug:"/build/smart-contracts/language",permalink:"/archethic-docs/build/smart-contracts/language",tags:[],version:"current",lastUpdatedAt:1652362509,formattedLastUpdatedAt:"5/12/2022",frontMatter:{id:"language",title:"Smart Contract Language"},sidebar:"docs",previous:{title:"Smart Contracts",permalink:"/archethic-docs/build/smart-contracts"},next:{title:"Smart Contract examples",permalink:"/archethic-docs/build/smart-contracts/examples"}},d=[{value:"Triggers/Actions",id:"triggersactions",children:[],level:2},{value:"Conditions",id:"conditions",children:[],level:2},{value:"Global variables",id:"global-variables",children:[],level:2},{value:"Functions",id:"functions",children:[{value:"Utilities",id:"utilities",children:[],level:3},{value:"Statements",id:"statements",children:[],level:3}],level:2}],p={toc:d};function u(e){var t=e.components,n=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Archethic Blockchain defines a new smart contract language which was designed to resolve the issue of smart contracts:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Expressiveness"),(0,i.kt)("li",{parentName:"ul"},"Simplify"),(0,i.kt)("li",{parentName:"ul"},"Security")),(0,i.kt)("p",null,"Along with the new features of Archethic Smart Contracts (triggers, conditions, actions), a new custom language is defined"),(0,i.kt)("h2",{id:"triggersactions"},"Triggers/Actions"),(0,i.kt)("p",null,"To define a trigger, we need to specify an action block with its trigger type and the following parameters (if presents)"),(0,i.kt)("p",null,"For example:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"based on an incoming transaction")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"actions triggered_by: transaction do\n  # do something when a receive transaction\nend\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"based on time interval")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'actions triggered_by: interval, at: "0 8 * * *" do\n  # do something each day at 8AM\nend\n')),(0,i.kt)("h2",{id:"conditions"},"Conditions"),(0,i.kt)("p",null,"To define a condition, we need to specify a condition block with its subject and the list conditions by fields:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"type")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"content")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"code")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"authorized_keys")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"secrets")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"uco_transfers")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"nft_transfers")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"previous_public_key")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"origin_family"))),(0,i.kt)("p",null,"For example:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},'expecting the incoming transaction contains the content "hello"')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'condition transaction: [\n    content: "Hello"\n]\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"expecting all the transaction in the chain should be generated from a biometric device")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"condition inherit: [\n    origin_family: biometric\n]\n")),(0,i.kt)("h2",{id:"global-variables"},"Global variables"),(0,i.kt)("p",null,"Smart Contract can use global variable in the different blocks:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"contract"),": represent the actual contract"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"transaction"),": incoming transaction"),(0,i.kt)("li",{parentName:"ul"},"(inherit condition only) ",(0,i.kt)("inlineCode",{parentName:"li"},"next"),": next transaction on the chain"),(0,i.kt)("li",{parentName:"ul"},"(inherit condition only) ",(0,i.kt)("inlineCode",{parentName:"li"},"previous"),": previous transaction on the chain ")),(0,i.kt)("p",null,"Each of this variables contains the following fields:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"address")," (hex)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"type")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"content")," (abitraty string)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"code")," (abritraty string)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"authorized_keys")," (map of public keys)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"secrets")," (list of encrypted secrets in hex)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"previous_public_key")," (hex) "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"recipients")," (list of smart contract recipients addresses in hex)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"uco_transfers")," (map of the uco transfers: ",(0,i.kt)("inlineCode",{parentName:"li"},"%{ recipient_address => amount }")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"nft_transfers")," (map of the nft transfers: ",(0,i.kt)("inlineCode",{parentName:"li"},"%{ recipient_address => %{ amount: amount, nft_address: nft_to_transfer}}"))),(0,i.kt)("h2",{id:"functions"},"Functions"),(0,i.kt)("p",null,"Archethic Smart Contracts relies on function which can be used on condition or action blocks."),(0,i.kt)("p",null,"There are two categories of functions:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Utilities"),(0,i.kt)("li",{parentName:"ul"},"Statements (for transaction generation)")),(0,i.kt)("h3",{id:"utilities"},"Utilities"),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"In the ",(0,i.kt)("inlineCode",{parentName:"p"},"condition")," block, if no parameter is given, the transaction's field value will be the first one "))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"hash(data)"),": Perform a cryptographic hash")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"condition transaction: [\n    content: hash(contract.code)\n]\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"regex_match?(data, pattern)"),": Verify a regular expression")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'condition transaction: [\n    content: regex_match?("hello")\n]\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"regex_extract(data, pattern)"),": Extract data from a regular expression")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"json_match?: Verify the data matches a JSONPath expression"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'condition oracle: [\n    content: json_match?("$.uco.usd")\n]\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"json_extract(data, pattern)"),": Extract data from a JSONPath expression")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'condition oracle: [\n    content: json_extract("$.uco.usd") > 0.2\n]\n')),(0,i.kt)("h3",{id:"statements"},"Statements"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"set_type"),": Set the transaction type")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"actions triggered_by: transaction do\n    set_type transfer\nend\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"add_uco_transfer"),": Add a new UCO transfer")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'actions triggered_by: transaction do\n    add_uco_transfer to: "F28C3D5B3828AD3F8682F1B1D14A8507B829F65F7BE6C50427A6019CCB6801C", amount: 1.0\nend\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"add_nft_transfer"),": Add a new NFT transfer")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'actions triggered_by: transaction do\n    add_nft_transfer: to: "AF28C3D5B3828AD3F8682F1B1D14A8507B829F65F7BE6C50427A6019CCB6801C", nft: "0D574D171A484F8DEAC2D61FC3F7CC984BEB52465D69B3B5F670090742CBF5CC", amount: 1.0\nend\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"set_content"),": Set the new content")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'actions triggered_by: transaction do\n    set_content "hello"\nend\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"set_code"),": Set the new code")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'actions triggered_by: transaction do\n    set_code """\n    actions triggered_by: transaction do\n      add_uco_transfer to: "0D574D171A484F8DEAC2D61FC3F7CC984BEB52465D69B3B5F670090742CBF5CC", amount: 2.0\n    end\n    """\nend\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"add_ownership"),": Add a new ownership with a secret and its authorized public keys")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'actions triggered_by: transaction do\n    add_ownership secret: "...", secret_key: "...", authorized_public_key: ["0D574D171A484F8DEAC2D61FC3F7CC984BEB52465D69B3B5F670090742CBF5CC"]\nend\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"add_recipient"),": Add a contract address to reach")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'actions triggered_by: datetime, at: 1391309030 do\n    add_recipient "0D574D171A484F8DEAC2D61FC3F7CC984BEB52465D69B3B5F670090742CBF5CC"\nend\n')))}u.isMDXComponent=!0}}]);