(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6328],{25386:function(e,a,i){"use strict";i.r(a),i.d(a,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return d},toc:function(){return p},default:function(){return m}});var n=i(87462),t=i(63366),o=(i(67294),i(3905)),r=i(93456),s=["components"],l={id:"p2p-sampling",title:"P2P availability sampling"},c=void 0,d={unversionedId:"build/core/beacon-chain/p2p-sampling",id:"build/core/beacon-chain/p2p-sampling",title:"P2P availability sampling",description:"Each beacon chain's subset is responsible to perform verification of the nodes is in charge to monitor.",source:"@site/docs/build/core/beacon-chain/p2p-sampling.md",sourceDirName:"build/core/beacon-chain",slug:"/build/core/beacon-chain/p2p-sampling",permalink:"/archethic-docs/build/core/beacon-chain/p2p-sampling",tags:[],version:"current",lastUpdatedAt:1652362509,formattedLastUpdatedAt:"5/12/2022",frontMatter:{id:"p2p-sampling",title:"P2P availability sampling"},sidebar:"docs",previous:{title:"BeaconChain",permalink:"/archethic-docs/build/core/beacon-chain"},next:{title:"Mining",permalink:"/archethic-docs/build/core/mining"}},p=[{value:"Heartbeat",id:"heartbeat",children:[],level:2},{value:"Aggregation",id:"aggregation",children:[],level:2}],u={toc:p};function m(e){var a=e.components,i=(0,t.Z)(e,s);return(0,o.kt)("wrapper",(0,n.Z)({},u,i,{components:a,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Each beacon chain's subset is responsible to perform verification of the nodes is in charge to monitor."),(0,o.kt)("h2",{id:"heartbeat"},"Heartbeat"),(0,o.kt)("p",null,"So periodically (when a transaction is confirmed or before a slot creation), the nodes of a given subset perform P2P availability sampling of the given peers. "),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"If multiple transactions arrive to a given subset quickly, a timespan of 3s from the previous sampling is used, to determine if we need to sample availability again "))),(0,o.kt)(r.Mermaid,{config:{},chart:"sequenceDiagram\n    Subset node->>+Supervised node: Ping\n    Supervised node->>+Subset node: Ok",mdxType:"Mermaid"}),(0,o.kt)("p",null,"A timeout of 1s is given in which a node should respond otherwise it will considered as locally offline by the beacon chain"),(0,o.kt)("h2",{id:"aggregation"},"Aggregation"),(0,o.kt)("p",null,"During the transaction generation of the BeaconChain summary, we aggregate multiple slots into a common structure."),(0,o.kt)("p",null,"All the aggregated P2P samples are accumulated to determine the frequencies of availability and determine the average."),(0,o.kt)("p",null,"So during the ",(0,o.kt)("a",{parentName:"p",href:"/learn/p2p/self-repair"},"Self-Repair"),", we are using those summary and aggregated data to determine if a node is considered as available for the next epoch/cycle."))}m.isMDXComponent=!0},11748:function(e,a,i){var n={"./locale":89234,"./locale.js":89234};function t(e){var a=o(e);return i(a)}function o(e){if(!i.o(n,e)){var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}return n[e]}t.keys=function(){return Object.keys(n)},t.resolve=o,e.exports=t,t.id=11748}}]);