"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6716],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>y});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),s=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},m=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,m=c(e,["components","mdxType","originalType","parentName"]),u=s(a),d=r,y=u["".concat(l,".").concat(d)]||u[d]||p[d]||i;return a?n.createElement(y,o(o({ref:t},m),{},{components:a})):n.createElement(y,o({ref:t},m))}));function y(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[u]="string"==typeof e?e:r,o[1]=c;for(var s=2;s<i;s++)o[s]=a[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},1168:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>d,Bullet:()=>u,SpecifiedBy:()=>p,assets:()=>s,contentTitle:()=>c,default:()=>h,frontMatter:()=>o,metadata:()=>l,toc:()=>m});var n=a(7462),r=a(7294),i=a(3905);a(8209);const o={id:"beacon-chain-summary",title:"beaconChainSummary",hide_table_of_contents:!1},c=void 0,l={unversionedId:"build/api/schema/queries/beacon-chain-summary",id:"build/api/schema/queries/beacon-chain-summary",title:"beaconChainSummary",description:"Query the network to get the value of the summary of beacon chain at a specific time or the last value",source:"@site/docs/build/api/schema/queries/beacon-chain-summary.mdx",sourceDirName:"build/api/schema/queries",slug:"/build/api/schema/queries/beacon-chain-summary",permalink:"/build/api/schema/queries/beacon-chain-summary",draft:!1,tags:[],version:"current",lastUpdatedAt:1688046069,formattedLastUpdatedAt:"Jun 29, 2023",frontMatter:{id:"beacon-chain-summary",title:"beaconChainSummary",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"balance",permalink:"/build/api/schema/queries/balance"},next:{title:"genesisAddress",permalink:"/build/api/schema/queries/genesis-address"}},s={},m=[{value:"Arguments",id:"arguments",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>beaconChainSummary.<b>timestamp</b></code><Bullet /><code>Timestamp</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-beaconchainsummarybtimestampbcodetimestamp-",level:4},{value:"Type",id:"type",level:3},{value:'<code>BeaconChainSummary</code> <Badge class="secondary" text="object"/>',id:"beaconchainsummary-",level:4}],u=()=>(0,i.kt)(r.Fragment,null,(0,i.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),p=e=>(0,i.kt)(r.Fragment,null,"Specification",(0,i.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),d=e=>(0,i.kt)(r.Fragment,null,(0,i.kt)("span",{class:"badge badge--"+e.class},e.text)),y={toc:m,Bullet:u,SpecifiedBy:p,Badge:d},b="wrapper";function h(e){let{components:t,...a}=e;return(0,i.kt)(b,(0,n.Z)({},y,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Query the network to get the value of the summary of beacon chain at a specific time or the last value"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"beaconChainSummary(\n  timestamp: Timestamp\n): BeaconChainSummary\n")),(0,i.kt)("h3",{id:"arguments"},"Arguments"),(0,i.kt)("h4",{id:"code-style-fontweight-normal-beaconchainsummarybtimestampbcodetimestamp-"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"beaconChainSummary.",(0,i.kt)("b",null,"timestamp"))),(0,i.kt)(u,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/build/api/schema/scalars/timestamp"},(0,i.kt)("inlineCode",{parentName:"a"},"Timestamp"))," ",(0,i.kt)(d,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,i.kt)("blockquote",null),(0,i.kt)("h3",{id:"type"},"Type"),(0,i.kt)("h4",{id:"beaconchainsummary-"},(0,i.kt)("a",{parentName:"h4",href:"/build/api/schema/objects/beacon-chain-summary"},(0,i.kt)("inlineCode",{parentName:"a"},"BeaconChainSummary"))," ",(0,i.kt)(d,{class:"secondary",text:"object",mdxType:"Badge"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"[Beacon Chain Summary]"," represents the beacon chain aggregate for a certain date")))}h.isMDXComponent=!0},8209:(e,t,a)=>{a(7294)}}]);