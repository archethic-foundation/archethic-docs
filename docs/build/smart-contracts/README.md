---
id: smart-contracts
title: Smart Contracts
---

_Smart-contracts are in computing what robots are in real life: they perform actions according to events._

Archethic Blockchain leverages next generation of smart contract to make the development of decentralized application easier to bring a mass adoption of the Blockchain technology.

They introduce new features to this domain:

- Completly autonomous and can be triggered from internal states (date, transactions) or real life (OracleChain updates).
- Entirely modifiable: TransactionChains make update seamless
- Interpreted: Code is interpreted and atomically verified by the miners
- Without external reality: They are entirely based on the UTXO model and do not depend on the state of an internal database but only the transactions validated

Archethic Smart Contract is defined by: `triggers`, `conditions` and `actions`

- Triggers: events will automatically launch the execution of a contract.
- Conditions: define the rules to accept new transactions (chain or UTXO)
- Actions: operations to perform from a trigger's calls

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

## Modifiable:

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

## Interpreted

Archethic smart contracts are interpreted instead of compiled, here are the reasons:

- Interpreted code is understandable by the human, and compiled code are only understandable by the computer.

- Intepreted code makes the transparency and audit of smart contracts easier as we do need to provide the source of the contracts

- Interpreted code makes verification and safety checks better, instead to execute a code in blindness, miners can step by step verify the instructions and avoid any security issues

## Stateless

Archethic Smart Contracts does not depend on internal state or databases, only the UTXO is used as inputs and the source of truth relies on the transactions.

For example, in an e-commerce smart contract, the smart-contract issued by a merchant will be able to define stocks, prices and interactions with its customers using a view which is continuously updated by the transactions validated to that same smart-contract.

The contract doesn't hold a given state but allows it to be calculated. In the example above, can verify the proven status of orders through validated transactions.

Hence, each state is irrefutable and unambiguous.

However, if required, we could easily make a snapshot data during time to have faster reads for archived data, by creating a new transaction on the chain.
This operation would serialize the "state" of a contract and be able to be queried by applications.

:::caution Be careful
Any data processed within the contract which is not stored in the next transaction or send somewhere will be lost
:::
