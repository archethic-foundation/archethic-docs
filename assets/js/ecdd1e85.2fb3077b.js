"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1696],{3905:(e,t,r)=>{r.d(t,{Zo:()=>h,kt:()=>f});var o=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,o,a=function(e,t){if(null==e)return{};var r,o,a={},n=Object.keys(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=o.createContext({}),l=function(e){var t=o.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},h=function(e){var t=l(e.components);return o.createElement(c.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var r=e.components,a=e.mdxType,n=e.originalType,c=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),u=l(r),d=a,f=u["".concat(c,".").concat(d)]||u[d]||p[d]||n;return r?o.createElement(f,i(i({ref:t},h),{},{components:r})):o.createElement(f,i({ref:t},h))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=r.length,i=new Array(n);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var l=2;l<n;l++)i[l]=r[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}d.displayName="MDXCreateElement"},2768:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>n,metadata:()=>s,toc:()=>l});var o=r(87462),a=(r(67294),r(3905));r(8209);const n={id:"hardware-root-of-trust",title:"Hardware Root of Trust"},i=void 0,s={unversionedId:"learn/cryptography/hardware-root-of-trust",id:"learn/cryptography/hardware-root-of-trust",title:"Hardware Root of Trust",description:"What is hardware root of trust?",source:"@site/docs/learn/cryptography/hardware-root-of-trust.md",sourceDirName:"learn/cryptography",slug:"/learn/cryptography/hardware-root-of-trust",permalink:"/learn/cryptography/hardware-root-of-trust",draft:!1,tags:[],version:"current",lastUpdatedAt:1708513258,formattedLastUpdatedAt:"Feb 21, 2024",frontMatter:{id:"hardware-root-of-trust",title:"Hardware Root of Trust"},sidebar:"docs",previous:{title:"Cryptography",permalink:"/learn/cryptography/"},next:{title:"Decentralized Identity",permalink:"/learn/decentralized-id/"}},c={},l=[{value:"What is hardware root of trust?",id:"what-is-hardware-root-of-trust",level:2},{value:"Why hardware root of trust for Archethic?",id:"why-hardware-root-of-trust-for-archethic",level:2},{value:"Implementation of Hardware Root of Trust (HRT)",id:"implementation-of-hardware-root-of-trust-hrt",level:2},{value:"Placement of HRT in Archethic Blockchain/Ecosystem",id:"placement-of-hrt-in-archethic-blockchainecosystem",level:2}],h={toc:l},u="wrapper";function p(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,o.Z)({},h,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"what-is-hardware-root-of-trust"},"What is hardware root of trust?"),(0,a.kt)("p",null,"A hardware root of trust is the foundation on which all secure operations of a computing system depend. It contains the keys used for cryptographic functions and enables a secure boot process. It is inherently trusted, and therefore must be secure by design. The most secure implementation of a root of trust is in hardware making it immune from malware attacks. As such, it can be a stand-alone security module or implemented as security module within a processor or system on chip (SoC) (",(0,a.kt)("a",{parentName:"p",href:"https://www.rambus.com/blogs/hardware-root-of-trust/#:~:text=for%20my%20application%3F-,What%20is%20hardware%20root%20of%20trust%3F,must%20be%20secure%20by%20design."},"source"),")."),(0,a.kt)("h2",{id:"why-hardware-root-of-trust-for-archethic"},"Why hardware root of trust for Archethic?"),(0,a.kt)("p",null,"The ability to sustain the network even with more than 90% of malicious nodes effectively comes from 2 very important steps."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Identifying the malcious nodes effectively and preemptively."),(0,a.kt)("li",{parentName:"ul"},"Banish and effectively ban the malicious nodes.")),(0,a.kt)("p",null,"While the first part involves complex alogrithms implemented in the software layer, the second part involves uniquely tying node's identity to its hardware. This way, the malicious node, once identified and banished, cannot rejoin the network by changing its representive identity."),(0,a.kt)("p",null,"This second part can be effectively achieved using the concept of hardware root of trust. With hardware root of trust, a unique keypair is injected in the into the wafer at the time of fabrication, thus tying the identity with this keypair. Once, this keypair is certified, the node cannot effectively use another keypair, once banished, thus eliminating identity forgery. This is, in principle, possible due to fact once a key-pair is injected, it cannot be changed for that particular hardware."),(0,a.kt)("p",null,"Further, with this hardware root of trust, we can also ensure that no two nodes have the same public key tied to their identity. Thus, using hardware root of trust, contributes significantly to the increased miner security and makes the Archethic blockchain more resilient against bad actors."),(0,a.kt)("h2",{id:"implementation-of-hardware-root-of-trust-hrt"},"Implementation of Hardware Root of Trust (HRT)"),(0,a.kt)("p",null,"To implement hardware root of Trust, within Archethic ecosystem, two technologies have been used."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Trusted Platform Module (TPM 2.O)"),(0,a.kt)("li",{parentName:"ul"},"Yubico Yubikey (PIV)")),(0,a.kt)("p",null,"Both of these technologies are based on Secure Element (SE) which are certified under Common Criteria (CC)."),(0,a.kt)("h2",{id:"placement-of-hrt-in-archethic-blockchainecosystem"},"Placement of HRT in Archethic Blockchain/Ecosystem"),(0,a.kt)("p",null,"Along with the initial software crypto library, the HRT is now the de-facto crypto engine for all the cryptographic operations carried out by Archethic miners. This includes signature (ECC), verification (ECC), encryption (AES), decryption (AES), hashing (SHA2/SHA3), etc."),(0,a.kt)("p",null,"The Archethic node software delegates all the cryptography operations to the HRT libraries of TPM and Yubikey, which are specially developed for this purpose by Uniris."),(0,a.kt)("p",null,"Given the latency constraints, a new hybrid mechanism have been developed involving usage of software crypto library and the HRT libraries (TPM/Yubikey). In this approach, the root of trust - crypto operation are still HRT based while the stem and branches will be software crypto library based."),(0,a.kt)("p",null,"The advantages of this mechanism over pure HRT based mechanism is:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Possiblity of key aggregation"),(0,a.kt)("li",{parentName:"ul"},"Freedom of using newer elliptic curves that are not yet supported by TPM/Yubikey."),(0,a.kt)("li",{parentName:"ul"},"Scalability without impacting security and performance.")))}p.isMDXComponent=!0},8209:(e,t,r)=>{r(67294)}}]);