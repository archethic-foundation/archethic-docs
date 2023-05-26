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

!> Since smart contracts can be autonomous and create transactions on the behalf of the owner, transaction should authorize nodes to use the cryptographic keys to generate transaction.

Then the contract has to specify a `inherit conditions` to accept new changes.

:::info
By default inherit condition will expect the transaction's data values to be the same from the previous ones. This ensures consistency while delegating to the node the contract execution.
Hence, for any specific change regarding transaction's data (ie. code, content, transfers, ...), a inherit condition must be specified.
:::

## Modifiable:

Archethic relies on TransactionChain which means that a smart contract can have its own transaction chain.

Then, it subjects to the same properties of the transaction chain: any last transaction of a chain is considered as the reference.

For example:

We deployed a smart contract with the address `0D574D171A484F8DEAC2D61FC3F7CC984BEB52465D69B3B5F670090742CBF5CC`.

Then we want to add a feature or to fix an issue, we resend a transaction on this chain, and we get the new address: `AF28C3D5B3828AD3F8682F1B1D14A8507B829F65F7BE6C50427A6019CCB6801C`

But clients which depends on the smart contract don't need to update their code or interaction, as each destination address is forwarded to the last one.

So if we send a transaction to `0D574D171A484F8DEAC2D61FC3F7CC984BEB52465D69B3B5F670090742CBF5CC`, the code executed will be at `AF28C3D5B3828AD3F8682F1B1D14A8507B829F65F7BE6C50427A6019CCB6801C`

:::info
Because we are not relying on internal state and database, and only with the UTXO, we don't need to provide migrations of data or funds, and neither implement cross shard synchronization
:::

## Interpreted

Archethic smart contracts are interpreted instead of compiled, here are the reasons:

- Interpreted code is understandable by the human, and compiled code are only understandable by the computer.

- Intepreted code makes the transparency and audit of smart contracts easier as we do need to provide the source of the contracts

- Interpreted code makes verification and safety checks better, instead to execute a code in blindness, miners can step by step verify the instructions and avoid any security issues

## Stateless

Archethic Smart Contracts does not depend on internal state or databases, only the UTXO is used as inputs, it's not possible to make a database with them.

For example

in an e-commerce smart contract, the smart-contract issued by a merchant will be able to define stocks, prices and interactions with its customers using a view which is continuously updated by the nodes responsible for storing the smart-contract and based on transactions validated to that same smart-contract

The "UTXO" operation does not give a status within a smart-contract but allows it to be calculated (in the example above, the merchant cannot directly query a smart-contract on the status of orders, but can verify the proven status of orders through validated transactions).

The experience of a user or a merchant is absolutely identical, since each state is irrefutable and unambiguous.

However, if required, we could easily make a snapshot data during time to have faster reads for archived data

:::warning
Any data processed within the contract which is not stored in the next transaction or send somewhere will be lost
:::
