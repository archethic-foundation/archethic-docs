---
id: smart-contracts
title: Smart Contracts
---

_Smart-contracts are in computing what robots are in real life: they perform actions according to events._

Archethic Blockchain leverages next generation of smart contract to make the development of decentralized application easier to bring a mass adoption of the Blockchain technology.

They introduce new features to this domain:

- Completly autonomous and can be triggered from internal states (date, transactions) or real life (OracleChain updates).
- Entirely modifiable: TransactionChains make update seamless
- Secured: Sandboxed code execution using [WebAssembly](/build/smart-contracts/wasm/runtime)
- Without external reality: They are entirely based on the UTXO model and do not depend on the state of an internal database but only the transactions validated

Archethic Smart Contract is defined by: `triggers`, `actions`, `functions`

- Triggers: events will automatically launch the execution of a contract.
- Actions: operations to perform from a trigger's calls
- Functions: compute and retrieve readonly data 

## Autonomous

Archethic smart contracts autonomous behavior is due to the capability to define different kind of triggers:

- Datetime: when the current date matches this timestamp
- Interval: when the current dates matches this cron interval scheduler
- Transaction: when the contract receive a transaction in input (UTXO model)
- Oracle: when the OracleChain pushed new data

Transactions are then created on the behalf of the contract's owner which authorized nodes to use the chain's private key to generate transaction.

:::info
To restrict a misusage of the user's cryptographic keys, `inherit conditions` can be defined as a security guard by the contract's owner.

However, in order to make contract development and improve readability, transparent inherit conditions are generated based on the action's code.
This verification is done during the transaction validation and the ARCH consensus with atomic commitment and ensures the next transaction of the chain respects the inherit constraints either :
- mentioned in the code by the contract's owner
- derived by the action's code.

This way, users can delegate the chain's private key to the nodes with the guarantee of a good usage of the chain's identity and signature capability.
:::

## Modifiable

Archethic relies on TransactionChain which means that a smart contract can have its own transaction chain.

Then, it is subject to the same properties of the transaction chain: any last transaction of a chain is considered as the reference.

For example:

We deployed a smart contract with the address `@Contract1`.

Then we want to add a feature or to fix an issue, we resend a transaction on this chain, and we get the new address: `@Contract2`

But clients which depends on the smart contract don't need to update their code or interaction, as each destination address is forwarded to the last one.

So if we send a transaction to `@Contract#`, the code executed will be at `@Contract2`

:::info
Because we are not relying on internal state and database, and only with the UTXO, we don't need to provide migrations of data or funds, and neither implement cross shard synchronization
:::

## Secured

Archethic smart contracts are executed by WebAssembly runtime, here are the reasons:

- Safe: execution is memory-safe and sandboxed environment.
- Fast: Near of the native speed of execution and efficient in terms of size and loading time
- Portable: Many languages can compile into it. No need to reinvent the wheel in terms of language and developer tooling
- Standardized: Part of the W3C Community Group

## State management

Archethic Smart Contracts does not depend on internal state or databases, only the UTXO is used as inputs and the source of truth relies on the transactions.

For example, in an e-commerce smart contract, the smart-contract issued by a merchant will be able to define stocks, prices and interactions with its customers using a view which is continuously updated by the transactions validated to that same smart-contract.

Smart Contract's state is persisted as an UTXO (unspent output) of the resulting transaction. Because of this, any state modification will result in a new transaction on the Smart Contract's transaction chain.

The contract can hold a UTXO state but . Hence, each state is irrefutable, unambiguous and can be re-computed for verification.

:::caution Be careful
Any data processed within the contract which is not stored in the next transaction or send somewhere will be lost
:::
