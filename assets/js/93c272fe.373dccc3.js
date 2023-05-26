"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5896],{1338:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var n=a(7462),r=(a(7294),a(3905));a(1839);const i={id:"smart-contracts",title:"Smart Contracts"},o=void 0,s={unversionedId:"build/smart-contracts/smart-contracts",id:"build/smart-contracts/smart-contracts",title:"Smart Contracts",description:"Smart-contracts are in computing what robots are in real life: they perform actions according to events.",source:"@site/docs/build/smart-contracts/README.md",sourceDirName:"build/smart-contracts",slug:"/build/smart-contracts/",permalink:"/build/smart-contracts/",draft:!1,tags:[],version:"current",lastUpdatedAt:1685105553,formattedLastUpdatedAt:"May 26, 2023",frontMatter:{id:"smart-contracts",title:"Smart Contracts"},sidebar:"docs",previous:{title:"Javascript SDK",permalink:"/build/sdk/js"},next:{title:"Reference",permalink:"/build/smart-contracts/reference/"}},c={},l=[{value:"Autonomous",id:"autonomous",level:2},{value:"Modifiable:",id:"modifiable",level:2},{value:"Interpreted",id:"interpreted",level:2},{value:"Stateless",id:"stateless",level:2}],d={toc:l};function h(t){let{components:e,...a}=t;return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Smart-contracts are in computing what robots are in real life: they perform actions according to events.")),(0,r.kt)("p",null,"Archethic Blockchain leverages next generation of smart contract to make the development of decentralized application easier to bring a mass adoption of the Blockchain technology."),(0,r.kt)("p",null,"They introduce new features to this domain:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Completly autonomous and can be triggered from internal states (date, transactions) or real life (OracleChain updates)."),(0,r.kt)("li",{parentName:"ul"},"Entirely modifiable: TransactionChains make update seamless"),(0,r.kt)("li",{parentName:"ul"},"Interpreted: Code is interpreted and atomically verified by the miners"),(0,r.kt)("li",{parentName:"ul"},"Without external reality: They are entirely based on the UTXO model and do not depend on the state of an internal database but only the transactions validated")),(0,r.kt)("p",null,"Archethic Smart Contract is defined by: ",(0,r.kt)("inlineCode",{parentName:"p"},"triggers"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"conditions")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"actions")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Triggers: events will automatically launch the execution of a contract."),(0,r.kt)("li",{parentName:"ul"},"Conditions: define the rules to accept new transactions (chain or UTXO)"),(0,r.kt)("li",{parentName:"ul"},"Actions: operations to perform from a trigger's calls")),(0,r.kt)("h2",{id:"autonomous"},"Autonomous"),(0,r.kt)("p",null,"Archethic smart contracts autonomous behavior is due to the capability to define different kind of triggers:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Datetime: when the current date matches this timestamp"),(0,r.kt)("li",{parentName:"ul"},"Interval: when the current dates matches this cron interval scheduler"),(0,r.kt)("li",{parentName:"ul"},"Transaction: when the contract receive a transaction in input (UTXO model)"),(0,r.kt)("li",{parentName:"ul"},"Oracle: when the OracleChain pushed new data")),(0,r.kt)("p",null,"!> Since smart contracts can be autonomous and create transactions on the behalf of the owner, transaction should authorize nodes to use the cryptographic keys to generate transaction."),(0,r.kt)("p",null,"Then the contract has to specify a ",(0,r.kt)("inlineCode",{parentName:"p"},"inherit conditions")," to accept new changes."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"By default inherit condition will expect the transaction's data values to be the same from the previous ones. This ensures consistency while delegating to the node the contract execution.\nHence, for any specific change regarding transaction's data (ie. code, content, transfers, ...), a inherit condition must be specified.")),(0,r.kt)("h2",{id:"modifiable"},"Modifiable:"),(0,r.kt)("p",null,"Archethic relies on TransactionChain which means that a smart contract can have its own transaction chain."),(0,r.kt)("p",null,"Then, it subjects to the same properties of the transaction chain: any last transaction of a chain is considered as the reference."),(0,r.kt)("p",null,"For example:"),(0,r.kt)("p",null,"We deployed a smart contract with the address ",(0,r.kt)("inlineCode",{parentName:"p"},"0D574D171A484F8DEAC2D61FC3F7CC984BEB52465D69B3B5F670090742CBF5CC"),"."),(0,r.kt)("p",null,"Then we want to add a feature or to fix an issue, we resend a transaction on this chain, and we get the new address: ",(0,r.kt)("inlineCode",{parentName:"p"},"AF28C3D5B3828AD3F8682F1B1D14A8507B829F65F7BE6C50427A6019CCB6801C")),(0,r.kt)("p",null,"But clients which depends on the smart contract don't need to update their code or interaction, as each destination address is forwarded to the last one."),(0,r.kt)("p",null,"So if we send a transaction to ",(0,r.kt)("inlineCode",{parentName:"p"},"0D574D171A484F8DEAC2D61FC3F7CC984BEB52465D69B3B5F670090742CBF5CC"),", the code executed will be at ",(0,r.kt)("inlineCode",{parentName:"p"},"AF28C3D5B3828AD3F8682F1B1D14A8507B829F65F7BE6C50427A6019CCB6801C")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Because we are not relying on internal state and database, and only with the UTXO, we don't need to provide migrations of data or funds, and neither implement cross shard synchronization")),(0,r.kt)("h2",{id:"interpreted"},"Interpreted"),(0,r.kt)("p",null,"Archethic smart contracts are interpreted instead of compiled, here are the reasons:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Interpreted code is understandable by the human, and compiled code are only understandable by the computer.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Intepreted code makes the transparency and audit of smart contracts easier as we do need to provide the source of the contracts")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Interpreted code makes verification and safety checks better, instead to execute a code in blindness, miners can step by step verify the instructions and avoid any security issues"))),(0,r.kt)("h2",{id:"stateless"},"Stateless"),(0,r.kt)("p",null,"Archethic Smart Contracts does not depend on internal state or databases, only the UTXO is used as inputs, it's not possible to make a database with them."),(0,r.kt)("p",null,"For example"),(0,r.kt)("p",null,"in an e-commerce smart contract, the smart-contract issued by a merchant will be able to define stocks, prices and interactions with its customers using a view which is continuously updated by the nodes responsible for storing the smart-contract and based on transactions validated to that same smart-contract"),(0,r.kt)("p",null,'The "UTXO" operation does not give a status within a smart-contract but allows it to be calculated (in the example above, the merchant cannot directly query a smart-contract on the status of orders, but can verify the proven status of orders through validated transactions).'),(0,r.kt)("p",null,"The experience of a user or a merchant is absolutely identical, since each state is irrefutable and unambiguous."),(0,r.kt)("p",null,"However, if required, we could easily make a snapshot data during time to have faster reads for archived data"),(0,r.kt)("admonition",{type:"warning"},(0,r.kt)("p",{parentName:"admonition"},"Any data processed within the contract which is not stored in the next transaction or send somewhere will be lost")))}h.isMDXComponent=!0}}]);