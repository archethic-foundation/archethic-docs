"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3252],{3905:(e,t,i)=>{i.d(t,{Zo:()=>d,kt:()=>g});var n=i(67294);function a(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function r(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function s(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?r(Object(i),!0).forEach((function(t){a(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function o(e,t){if(null==e)return{};var i,n,a=function(e,t){if(null==e)return{};var i,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||(a[i]=e[i]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),i=t;return e&&(i="function"==typeof e?e(t):s(s({},t),e)),i},d=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var i=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),p=c(i),h=a,g=p["".concat(l,".").concat(h)]||p[h]||u[h]||r;return i?n.createElement(g,s(s({ref:t},d),{},{components:i})):n.createElement(g,s({ref:t},d))}));function g(e,t){var i=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=i.length,s=new Array(r);s[0]=h;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[p]="string"==typeof e?e:a,s[1]=o;for(var c=2;c<r;c++)s[c]=i[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,i)}h.displayName="MDXCreateElement"},82605:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var n=i(87462),a=(i(67294),i(3905));i(8209);const r={id:"usage",title:"aeBridge - Usage",sidebar_label:"Usage",sidebar_position:4},s="aeBridge - Tutorial",o={unversionedId:"participate/bridge/usage",id:"participate/bridge/usage",title:"aeBridge - Usage",description:"The Archethic Bridge application is exclusively available as a web application accessible through internet browsers.",source:"@site/docs/participate/bridge/usage.md",sourceDirName:"participate/bridge",slug:"/participate/bridge/usage",permalink:"/participate/bridge/usage",draft:!1,tags:[],version:"current",lastUpdatedAt:1731085378,formattedLastUpdatedAt:"Nov 8, 2024",sidebarPosition:4,frontMatter:{id:"usage",title:"aeBridge - Usage",sidebar_label:"Usage",sidebar_position:4},sidebar:"docs",previous:{title:"Archethic Bridge (aeBridge)",permalink:"/participate/bridge/"},next:{title:"Archethic's CLI",permalink:"/participate/cli/"}},l={},c=[{value:"Welcome Screen",id:"welcome-screen",level:2},{value:"Application Menu",id:"application-menu",level:3},{value:"Feature Access",id:"feature-access",level:3},{value:"Bridging Your Assets",id:"bridging-your-assets",level:2},{value:"Step 1: Initiating Transfer",id:"step-1-initiating-transfer",level:3},{value:"Step 2: Confirming Details",id:"step-2-confirming-details",level:3},{value:"Step 3: Executing Transfer",id:"step-3-executing-transfer",level:3},{value:"Local History and Management",id:"local-history-and-management",level:2},{value:"Options Include:",id:"options-include",level:3},{value:"Transfer Status Actions:",id:"transfer-status-actions",level:3},{value:"Refund Process",id:"refund-process",level:2}],d={toc:c},p="wrapper";function u(e){let{components:t,...r}=e;return(0,a.kt)(p,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"aebridge---tutorial"},"aeBridge - Tutorial"),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"The Archethic Bridge application is exclusively available as a web application accessible through internet browsers.")),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"The application is compatible with extension chrome or with the desktop versions of the Archethic wallet, which include macOS, Linux, and Windows platforms.")),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"The application is not compatible with Edge, Internet explorer browsers")),(0,a.kt)("p",null,"Ensure that you have the appropriate version of the Archethic wallet installed on your system to interact with the application effectively. The Archethic wallet can be downloaded from ",(0,a.kt)("a",{parentName:"p",href:"https://www.archethic.net/wallet.html"},"here"),"."),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"For optimal performance, it is recommended to use the latest version of your internet browser and keep your desktop wallet updated.")),(0,a.kt)("p",null,"Access: ",(0,a.kt)("a",{parentName:"p",href:"https://bridge.archethic.net"},"https://bridge.archethic.net"),(0,a.kt)("br",null),"\nSource code: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/archethic-foundation/bridge"},"https://github.com/archethic-foundation/bridge")," and ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/archethic-foundation/bridge-contracts"},"https://github.com/archethic-foundation/bridge-contracts")),(0,a.kt)("p",null,"This Flutter-built web application enables seamless asset deposits and withdrawals."),(0,a.kt)("admonition",{type:"success"},(0,a.kt)("p",{parentName:"admonition"},"Before proceeding, familiarize yourself with ",(0,a.kt)("a",{parentName:"p",href:"/participate/bridge/"},"Archethic's Bridge Key Concepts"),".")),(0,a.kt)("h2",{id:"welcome-screen"},"Welcome Screen"),(0,a.kt)("p",null,"Upon accessing aeBridge, you are greeted with a welcome screen. To begin, click on the 'Bridge' button."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Welcome Screen",src:i(11126).Z,width:"2874",height:"1436"}),"\n",(0,a.kt)("img",{alt:"Bridge Button",src:i(87785).Z,width:"2874",height:"1434"})),(0,a.kt)("h3",{id:"application-menu"},"Application Menu"),(0,a.kt)("p",null,"A right-hand header menu provides links to essential information and application documentation. It includes an option to send logs to Archethic for troubleshooting purposes."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Menu",src:i(55273).Z,width:"300",height:"359"})),(0,a.kt)("h3",{id:"feature-access"},"Feature Access"),(0,a.kt)("p",null,"The left-side menu grants access to various bridge functionalities:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Bridging between Archethic and EVM blockchains"),(0,a.kt)("li",{parentName:"ul"},"Viewing local history, resume or refund options, and transaction logs"),(0,a.kt)("li",{parentName:"ul"},"Refunding")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Menu Features",src:i(14136).Z,width:"1334",height:"162"})),(0,a.kt)("h2",{id:"bridging-your-assets"},"Bridging Your Assets"),(0,a.kt)("p",null,"The bridge process involves multiple steps:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Inputting information to initiate the transfer"),(0,a.kt)("li",{parentName:"ol"},"Confirming the entered details"),(0,a.kt)("li",{parentName:"ol"},"Executing the transfer, with progress tracking and transaction signing in both EVM and Archethic wallets")),(0,a.kt)("h3",{id:"step-1-initiating-transfer"},"Step 1: Initiating Transfer"),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Transfer steps remain consistent across all blockchain types and directions.")),(0,a.kt)("p",null,"Firstly, select the originating and target blockchains."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Blockchain Selection",src:i(71353).Z,width:"1326",height:"846"})),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"Ensure both Archethic and your chosen EVM wallets are connected before blockchain selection. Refer to the ",(0,a.kt)("a",{parentName:"p",href:"/category/faq"},"FAQ")," for connectivity issues.")),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Select an EVM blockchain as the source automatically sets Archethic as the target.")),(0,a.kt)("p",null,"Post-selection, a field appears for token selection from available options."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Token Selection",src:i(18962).Z,width:"1330",height:"604"})),(0,a.kt)("p",null,"Next, enter the following information:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The destination address that will receive the bridged tokens (by default, the connected wallet address is filled in)"),(0,a.kt)("li",{parentName:"ul"},"The amount you wish to bridge (before fees are deducted).")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Amount fill",src:i(15115).Z,width:"1382",height:"1026"})),(0,a.kt)("h3",{id:"step-2-confirming-details"},"Step 2: Confirming Details"),(0,a.kt)("p",null,"On the confirmation screen, review:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Entered information summary"),(0,a.kt)("li",{parentName:"ul"},"Fee details"),(0,a.kt)("li",{parentName:"ul"},"Post-fee token quantity")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Confirmation Screen",src:i(17337).Z,width:"1362",height:"1090"})),(0,a.kt)("h3",{id:"step-3-executing-transfer"},"Step 3: Executing Transfer"),(0,a.kt)("p",null,"A transfer tracking popup guides you through the process, prompting for transaction confirmations in your wallets."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Transfer Tracking",src:i(83513).Z,width:"650",height:"503"})),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Transaction signing methods vary per EVM wallet.")),(0,a.kt)("p",null,"In the Archethic wallet, confirmation prompts automatically appear when necessary."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Archethic Wallet Confirmation",src:i(87310).Z,width:"369",height:"803"})),(0,a.kt)("p",null,"After some validations and a few seconds of waiting, a message will inform you that the transfer has completed successfully, and the bridged amount received in your wallet will be displayed"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Archethic Wallet Confirmation",src:i(68458).Z,width:"1306",height:"1022"})),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"The transfer process halts if a transaction is declined or due to insufficient funds. However, it can be resumed later.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Transfer Resumption",src:i(59686).Z,width:"654",height:"499"})),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"HTLC contract addresses are provided for ongoing process tracking.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"HTLC Information",src:i(36064).Z,width:"580",height:"100"})),(0,a.kt)("h2",{id:"local-history-and-management"},"Local History and Management"),(0,a.kt)("p",null,"View transfer history, successful or otherwise, through the application's local history feature."),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"This history is local to your device. Access is not available on other devices.\nAnd if you clear your browser's cache, this list will be emptied.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"History List",src:i(31411).Z,width:"1454",height:"1122"})),(0,a.kt)("h3",{id:"options-include"},"Options Include:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Deleting local history"),(0,a.kt)("li",{parentName:"ul"},"Filtering history entries")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"History Filters",src:i(49751).Z,width:"2870",height:"356"})),(0,a.kt)("h3",{id:"transfer-status-actions"},"Transfer Status Actions:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Remove transfers from local history"),(0,a.kt)("li",{parentName:"ul"},"Resume interrupted transfers"),(0,a.kt)("li",{parentName:"ul"},"Refund for interrupted transfers"),(0,a.kt)("li",{parentName:"ul"},"Access transfer technical details for Archethic team analysis")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"History Options",src:i(81914).Z,width:"260",height:"72"})),(0,a.kt)("h2",{id:"refund-process"},"Refund Process"),(0,a.kt)("p",null,"Retrieve your funds through the refund feature."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Refund Form",src:i(98545).Z,width:"1346",height:"874"})),(0,a.kt)("p",null,"To retrieve your funds, you must wait 2 hours for the tokens to be released.\nAdditionally, you must always use the address of the source blockchain."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Refund Process",src:i(62779).Z,width:"1262",height:"464"})),(0,a.kt)("p",null,"Upon wallet connection and address confirmation, refund eligibility and amount are displayed. Validate the refund to receive your funds, minus transaction fees."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Refund Available",src:i(4861).Z,width:"1256",height:"472"})),(0,a.kt)("p",null,"Once the refund has been processed, you can find your funds in your wallet."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Refund Ok",src:i(86483).Z,width:"1258",height:"896"})),(0,a.kt)("hr",null))}u.isMDXComponent=!0},87310:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/Bridge-2-AEWallet-confirm-a9cd42a1e76765fcb44c927a9be826f0.png"},15115:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/Bridge-2-Amount-fill-909234f54bebdf1fef4f2fe63e2ebd29.png"},71353:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/Bridge-2-BC-Selection-07b306e70c1eca7cd3f1e3ce5b5ab929.png"},87785:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/Bridge-2-Bridge-9eb7acde4ebea9c6521b7632e7db593a.png"},17337:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/Bridge-2-Confirmation-464af0279bee6af2733bf74c931465a1.png"},49751:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/Bridge-2-Filters-ad22375578ac7e00182a4930d8ae6ea7.png"},36064:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/Bridge-2-HTLC-infos-4d0fca3c3cfa62df41c2955dcc808440.png"},81914:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/Bridge-2-History-icons-23d5fe2c9b63339e6e4edd6996777b5c.png"},31411:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/Bridge-2-History-list-eebfa687d9c56acdcaae468f23f65d7e.png"},14136:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/Bridge-2-Menu-features-631dd161fd2344078b62b452861696dd.png"},55273:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/Bridge-2-Menu-c06df1c17eb34ace3cca5d09a6deb28b.png"},4861:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/Bridge-2-Refund-Available-39b848d76f76d0bcb8f3c910ddccb1f9.png"},98545:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/Bridge-2-Refund-Form-fa840e0ac1036ac868d4749bcad41ba2.png"},86483:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/Bridge-2-Refund-Ok-7c45f98fe755a47470515b641fa3d200.png"},62779:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/Bridge-2-Refund-Wait-d345498f7ac0b329cebc250cb7b08423.png"},59686:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/Bridge-2-Resume-dd1b525e16357a1b0e687287a52b3768.png"},68458:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/Bridge-2-Transfer-finish-4ed3b5a2e02fc7ad7dafa8812d38c646.png"},11126:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/Bridge-2-Welcome-1cefe915e52d4bc2b5d9925925a49a4d.png"},83513:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/Bridge-2-status-confirm-wallet-0beed6acd19580574afbe22c6a8876b9.png"},18962:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/Bridge-2-token-Selection-6eaeb7e1dc8f26d7439c9130bd552b9c.png"},8209:(e,t,i)=>{i(67294)}}]);