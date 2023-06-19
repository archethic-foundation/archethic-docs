"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8992],{9012:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>p,Bullet:()=>m,SpecifiedBy:()=>k,assets:()=>i,contentTitle:()=>r,default:()=>b,frontMatter:()=>l,metadata:()=>d,toc:()=>c});var n=a(7462),o=a(7294),s=a(3905);a(1839);const l={id:"transaction-movement",title:"TransactionMovement",hide_table_of_contents:!1},r=void 0,d={unversionedId:"build/api/schema/objects/transaction-movement",id:"build/api/schema/objects/transaction-movement",title:"TransactionMovement",description:"[TransactionMovement] represents ledger transaction movement",source:"@site/docs/build/api/schema/objects/transaction-movement.mdx",sourceDirName:"build/api/schema/objects",slug:"/build/api/schema/objects/transaction-movement",permalink:"/build/api/schema/objects/transaction-movement",draft:!1,tags:[],version:"current",lastUpdatedAt:1687181141,formattedLastUpdatedAt:"Jun 19, 2023",frontMatter:{id:"transaction-movement",title:"TransactionMovement",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"TransactionInput",permalink:"/build/api/schema/objects/transaction-input"},next:{title:"TransactionSummary",permalink:"/build/api/schema/objects/transaction-summary"}},i={},c=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>TransactionMovement.<b>amount</b></code><Bullet /><code>Int</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-transactionmovementbamountbcodeint-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>TransactionMovement.<b>to</b></code><Bullet /><code>Address</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-transactionmovementbtobcodeaddress-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>TransactionMovement.<b>tokenAddress</b></code><Bullet /><code>Address</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-transactionmovementbtokenaddressbcodeaddress-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>TransactionMovement.<b>tokenId</b></code><Bullet /><code>Int</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-transactionmovementbtokenidbcodeint-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>TransactionMovement.<b>type</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-transactionmovementbtypebcodestring-",level:4},{value:"Member of",id:"member-of",level:3}],m=()=>(0,s.kt)(o.Fragment,null,(0,s.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),k=e=>(0,s.kt)(o.Fragment,null,"Specification",(0,s.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),p=e=>(0,s.kt)(o.Fragment,null,(0,s.kt)("span",{class:"badge badge--"+e.class},e.text)),u={toc:c,Bullet:m,SpecifiedBy:k,Badge:p};function b(e){let{components:t,...a}=e;return(0,s.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"[TransactionMovement]"," represents ledger transaction movement\nIt includes:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"TO: asset transfer recipient"),(0,s.kt)("li",{parentName:"ul"},"Amount: asset amount"),(0,s.kt)("li",{parentName:"ul"},"Type: UCO/token"),(0,s.kt)("li",{parentName:"ul"},"token address: address of the token if the type is token"),(0,s.kt)("li",{parentName:"ul"},"token id: It is the id for a token which is allocated when the token is minted.")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-graphql"},"type TransactionMovement {\n  amount: Int\n  to: Address\n  tokenAddress: Address\n  tokenId: Int\n  type: String\n}\n")),(0,s.kt)("h3",{id:"fields"},"Fields"),(0,s.kt)("h4",{id:"code-style-fontweight-normal-transactionmovementbamountbcodeint-"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("code",{style:{fontWeight:"normal"}},"TransactionMovement.",(0,s.kt)("b",null,"amount"))),(0,s.kt)(m,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"h4",href:"/build/api/schema/scalars/int"},(0,s.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,s.kt)(p,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,s.kt)("blockquote",null),(0,s.kt)("h4",{id:"code-style-fontweight-normal-transactionmovementbtobcodeaddress-"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("code",{style:{fontWeight:"normal"}},"TransactionMovement.",(0,s.kt)("b",null,"to"))),(0,s.kt)(m,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"h4",href:"/build/api/schema/scalars/address"},(0,s.kt)("inlineCode",{parentName:"a"},"Address"))," ",(0,s.kt)(p,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,s.kt)("blockquote",null),(0,s.kt)("h4",{id:"code-style-fontweight-normal-transactionmovementbtokenaddressbcodeaddress-"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("code",{style:{fontWeight:"normal"}},"TransactionMovement.",(0,s.kt)("b",null,"tokenAddress"))),(0,s.kt)(m,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"h4",href:"/build/api/schema/scalars/address"},(0,s.kt)("inlineCode",{parentName:"a"},"Address"))," ",(0,s.kt)(p,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,s.kt)("blockquote",null),(0,s.kt)("h4",{id:"code-style-fontweight-normal-transactionmovementbtokenidbcodeint-"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("code",{style:{fontWeight:"normal"}},"TransactionMovement.",(0,s.kt)("b",null,"tokenId"))),(0,s.kt)(m,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"h4",href:"/build/api/schema/scalars/int"},(0,s.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,s.kt)(p,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,s.kt)("blockquote",null),(0,s.kt)("h4",{id:"code-style-fontweight-normal-transactionmovementbtypebcodestring-"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("code",{style:{fontWeight:"normal"}},"TransactionMovement.",(0,s.kt)("b",null,"type"))),(0,s.kt)(m,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"h4",href:"/build/api/schema/scalars/string"},(0,s.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,s.kt)(p,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,s.kt)("blockquote",null),(0,s.kt)("h3",{id:"member-of"},"Member of"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"/build/api/schema/objects/ledger-operations"},(0,s.kt)("inlineCode",{parentName:"a"},"LedgerOperations")),"  ",(0,s.kt)(p,{class:"secondary",text:"object",mdxType:"Badge"})))}b.isMDXComponent=!0}}]);