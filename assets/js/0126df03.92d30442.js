"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5295],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>b});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),i=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=i(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),p=i(a),u=n,b=p["".concat(s,".").concat(u)]||p[u]||m[u]||l;return a?r.createElement(b,o(o({ref:t},d),{},{components:a})):r.createElement(b,o({ref:t},d))}));function b(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,o=new Array(l);o[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[p]="string"==typeof e?e:n,o[1]=c;for(var i=2;i<l;i++)o[i]=a[i];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},67822:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>m,Bullet:()=>d,Details:()=>b,SpecifiedBy:()=>p,assets:()=>i,contentTitle:()=>c,default:()=>g,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var r=a(87462),n=a(67294),l=a(3905);a(8209);const o={id:"oracle-data",title:"OracleData",hide_table_of_contents:!1},c=void 0,s={unversionedId:"build/api/schema/objects/oracle-data",id:"build/api/schema/objects/oracle-data",title:"OracleData",description:"[OracleData] represents an oracle data.",source:"@site/docs/build/api/schema/objects/oracle-data.mdx",sourceDirName:"build/api/schema/objects",slug:"/build/api/schema/objects/oracle-data",permalink:"/build/api/schema/objects/oracle-data",draft:!1,tags:[],version:"current",lastUpdatedAt:1735315575,formattedLastUpdatedAt:"Dec 27, 2024",frontMatter:{id:"oracle-data",title:"OracleData",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"Node",permalink:"/build/api/schema/objects/node"},next:{title:"OracleServices",permalink:"/build/api/schema/objects/oracle-services"}},i={},d=()=>(0,l.kt)(n.Fragment,null,(0,l.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),p=e=>(0,l.kt)(n.Fragment,null,"Specification",(0,l.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),m=e=>(0,l.kt)(n.Fragment,null,(0,l.kt)("span",{className:e.class},e.text)),u=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>OracleData.<b>services</b></code><Bullet /><code>OracleServices</code> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-oracledatabservicesbcodeoracleservices-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>OracleData.<b>timestamp</b></code><Bullet /><code>Timestamp</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-oracledatabtimestampbcodetimestamp-",level:4},{value:"Returned by",id:"returned-by",level:3}],b=e=>{let{dataOpen:t,dataClose:a,children:o,startOpen:c=!1}=e;const[s,i]=(0,n.useState)(c);return(0,l.kt)("details",(0,r.Z)({},s?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,l.kt)("summary",{onClick:e=>{e.preventDefault(),i((e=>!e))},style:{listStyle:"none"}},s?t:a),s&&o)},f={Bullet:d,SpecifiedBy:p,Badge:m,toc:u,Details:b},y="wrapper";function g(e){let{components:t,...a}=e;return(0,l.kt)(y,(0,r.Z)({},f,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"[OracleData]"," represents an oracle data."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},"type OracleData {\n  services: OracleServices\n  timestamp: Timestamp\n}\n")),(0,l.kt)("h3",{id:"fields"},"Fields"),(0,l.kt)("h4",{id:"code-style-fontweight-normal-oracledatabservicesbcodeoracleservices-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"OracleData.",(0,l.kt)("b",null,"services"))),(0,l.kt)(d,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/build/api/schema/objects/oracle-services"},(0,l.kt)("inlineCode",{parentName:"a"},"OracleServices"))," ",(0,l.kt)(m,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-oracledatabtimestampbcodetimestamp-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"OracleData.",(0,l.kt)("b",null,"timestamp"))),(0,l.kt)(d,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/build/api/schema/scalars/timestamp"},(0,l.kt)("inlineCode",{parentName:"a"},"Timestamp"))," ",(0,l.kt)(m,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h3",{id:"returned-by"},"Returned by"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/build/api/schema/queries/oracle-data"},(0,l.kt)("inlineCode",{parentName:"a"},"oracleData")),"  ",(0,l.kt)(m,{class:"badge badge--secondary",text:"query",mdxType:"Badge"}),(0,l.kt)(d,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/build/api/schema/subscriptions/oracle-update"},(0,l.kt)("inlineCode",{parentName:"a"},"oracleUpdate")),"  ",(0,l.kt)(m,{class:"badge badge--secondary",text:"subscription",mdxType:"Badge"})))}g.isMDXComponent=!0},8209:(e,t,a)=>{a(67294)}}]);