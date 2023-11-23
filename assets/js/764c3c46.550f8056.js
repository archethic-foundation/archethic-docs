"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1484],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var i=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,i,n=function(e,t){if(null==e)return{};var a,i,n={},o=Object.keys(e);for(i=0;i<o.length;i++)a=o[i],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)a=o[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=i.createContext({}),c=function(e){var t=i.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},d="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),d=c(a),u=n,m=d["".concat(l,".").concat(u)]||d[u]||h[u]||o;return a?i.createElement(m,s(s({ref:t},p),{},{components:a})):i.createElement(m,s({ref:t},p))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,s=new Array(o);s[0]=u;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r[d]="string"==typeof e?e:n,s[1]=r;for(var c=2;c<o;c++)s[c]=a[c];return i.createElement.apply(null,s)}return i.createElement.apply(null,a)}u.displayName="MDXCreateElement"},2410:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>c});var i=a(7462),n=(a(7294),a(3905));a(8209);const o={id:"aeweb",title:"Archethic Web (AEWeb)"},s=void 0,r={unversionedId:"participate/aeweb/aeweb",id:"participate/aeweb/aeweb",title:"Archethic Web (AEWeb)",description:"Archethic has developed a new solution to host websites on a decentralized network to avoid censorship, increase security and have high-availability and resiliency.",source:"@site/docs/participate/aeweb/README.md",sourceDirName:"participate/aeweb",slug:"/participate/aeweb/",permalink:"/participate/aeweb/",draft:!1,tags:[],version:"current",lastUpdatedAt:1700739326,formattedLastUpdatedAt:"Nov 23, 2023",frontMatter:{id:"aeweb",title:"Archethic Web (AEWeb)"},sidebar:"docs",previous:{title:"Participate",permalink:"/category/participate"},next:{title:"How it works",permalink:"/participate/aeweb/how-it-works"}},l={},c=[{value:"Motivations",id:"motivations",level:2},{value:"Easy",id:"easy",level:3},{value:"Security",id:"security",level:3},{value:"Costly efficient",id:"costly-efficient",level:3},{value:"Target",id:"target",level:2},{value:"Roadmap",id:"roadmap",level:2}],p={toc:c},d="wrapper";function h(e){let{components:t,...a}=e;return(0,n.kt)(d,(0,i.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Archethic has developed a new solution to host websites on a decentralized network to ",(0,n.kt)("strong",{parentName:"p"},"avoid censorship"),", ",(0,n.kt)("strong",{parentName:"p"},"increase security")," and ",(0,n.kt)("strong",{parentName:"p"},"have high-availability and resiliency"),"."),(0,n.kt)("h2",{id:"motivations"},"Motivations"),(0,n.kt)("p",null,"Web hosting is still a subject of innovation nowadays, even with the rise of Web3.\nExisting solutions provides P2P and distributed hosting, but it can lack some important aspects such as ease-of-use, fully on-chain and trust."),(0,n.kt)("h3",{id:"easy"},"Easy"),(0,n.kt)("p",null,"Since its design, ",(0,n.kt)("strong",{parentName:"p"},"AEWeb")," motivation was to allow deployment of websites in just a few steps. No need to transform your website to match our solution. The website you developed and know will be the same one deployed."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Your website will be transformed into transaction without additional work")),(0,n.kt)("h3",{id:"security"},"Security"),(0,n.kt)("p",null,"Web hosting solutions are either centralized and decentralized. The first doesn't provide security, as being centralized and subject to censorship. The latter would be quite often insecure because hosted out of the blockchain, like traditional P2P system (torrents, etc.)"),(0,n.kt)("p",null,"We wanted to make it completely secure and on-chain.\nHence, each of the websites will first be validated across the Archethic network with the ARCH consensus capable to handle even 90% of maliciousness.\nWhile being validated, the websites will be stored and split geographically across the globe for highest data availability and security."),(0,n.kt)("p",null,"Then each delivery of the websites will directly read the data on-chain to deliver to browsers and clients and provide a high confidence of the displayed website."),(0,n.kt)("h3",{id:"costly-efficient"},"Costly efficient"),(0,n.kt)("p",null,"There are rare situations when websites can be hosted on a blockchain due to its costs being based on virtual machine or high fee on a network."),(0,n.kt)("p",null,"Transactions on Archethic are cost-efficient, so hosting websites on-chain will be a cheap solution regarding existing centralized and decentralized protocols."),(0,n.kt)("p",null,"Because of the nature of Web3 and decentralized network, once a website is deployed there is no maintenance cost such as renting a VPS on a centralized system each month for a couple of bucks. As long as the website doesn't need to change, there will be not cost."),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"Example: a VPS can cost around $5/month to host any website. On Archethic a website of 1MB could cost around $2 (with UCO at: $1 and with 200 replicas)."),(0,n.kt)("p",{parentName:"admonition"},"You might think it's more expensive, but the VPS was only a single instance. For the same data availability on centralized hosting you would have to pay around $500 + cost of maintenance")),(0,n.kt)("h2",{id:"target"},"Target"),(0,n.kt)("p",null,"Because of the Web is so wide, we have distinguished what AEWeb is capable to do or not."),(0,n.kt)("admonition",{title:"Website vs WebApp",type:"info"},(0,n.kt)("p",{parentName:"admonition"},"Website are usually not Web app."),(0,n.kt)("p",{parentName:"admonition"},"Websites are often simple static pages (HTML, stylesheets, images, scripts) to create beautiful frontend such a portal, showcase, corporate sites."),(0,n.kt)("p",{parentName:"admonition"},"On the other side Web app (Web Application) are far more complex and provide a complete suite of administration and back-office with authentication and databases.")),(0,n.kt)("p",null,"For now, AEWeb solution only provides website hosting. So any website which contains static files can be hosted on-chain."),(0,n.kt)("p",null,"For more complex web applications, the front-end can still be hosted with AEWeb but the backend or business logic have to be managed in other ways, such as:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"centralized servers and databases"),(0,n.kt)("li",{parentName:"ul"},"blockchain dApp & smart contracts")),(0,n.kt)("p",null,"For instance, today a lot of web apps are leveraging SPA (Single Page Application) with front-end frameworks which are talking to external backend servers (fetching data, or authenticate users, etc.).\nIn that case, once the front-end page have been build from the SPA tooling, instead of being deployed on centralized servers, the generated static files could be hosted on Archethic through AEWeb tooling."),(0,n.kt)("h2",{id:"roadmap"},"Roadmap"),(0,n.kt)("ul",{className:"contains-task-list"},(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Design"),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Blockchain integration",(0,n.kt)("ul",{parentName:"li",className:"contains-task-list"},(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","API"),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","HTTPS & certificates"))),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Command Line Interface (CLI)",(0,n.kt)("ul",{parentName:"li",className:"contains-task-list"},(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","File"),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Folder"),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Complete website"),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Keychain integration"))),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","User Interface",(0,n.kt)("ul",{parentName:"li",className:"contains-task-list"},(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Web or Native application"))),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Domain Name System (DNS)",(0,n.kt)("ul",{parentName:"li",className:"contains-task-list"},(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","DNSLink integration"),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Automation")))),(0,n.kt)("p",null,"The development started few months ago, and we are now in the phase of testing as beta version."),(0,n.kt)("p",null,"Currently we are targeting ",(0,n.kt)("strong",{parentName:"p"},"developers")," throught a ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/archethic-foundation/aeweb-cli"},"CLI")," to help them to test and deploy existing websites."),(0,n.kt)("p",null,"Next achievement is to produce a ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/archethic-foundation/aeweb"},"user interface")," to make webhosting no only for developers but for anyone which have static website to deploy."))}h.isMDXComponent=!0},8209:(e,t,a)=>{a(7294)}}]);