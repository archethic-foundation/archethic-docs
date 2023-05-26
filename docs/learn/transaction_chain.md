---
id: transaction-chain
title: TransactionChains
sidebar_position: 4
---

In the Archethic network, there are no blocks but only transactions, as each block is reduced to its atomic form - `transaction` with its own validation evidences.

## Principles

:::note Liveness
Each validated transaction is stored as a chain than can only be updated from the last validation transaction in the chain
The last transaction on a chain becomes the _authoritative_ transaction.
:::

:::note Quantum resistant
For security reason, once the public key is disclosed, it is considered as expired, only the hash of the public key of the next transaction(aka `address`) is announced.
This allows the next public key to be kept until the next transaction on the chain.
:::

:::note Address resolution
Any addresses of a transaction chain can be used as destination address.
It's not necessary to specify the last transaction address in the chain.
:::

:::note Stateless transactions
Transaction are using an _UTXO_ (Unspent Transaction Output) model so, a transaction cannot change state.
There is no reality outside the validated transactions
:::

:::note UTXO mining
List of unspent outputs does not need to be specified by the sender of the transaction
all unspent outputs will be reintegrated directly into the last transaction.
:::

## Transaction structure

- ### Pending transaction

A pending transaction is a transaction that does not have validation.
Its structure is described as below:

```
|-----------|------|------|---------------------|--------------------|------------------|
| Address   | Type    | Data     | Previous public key | Previous signature | Origin signature |
| --------- | ------- | -------- | ------------------- | ------------------ | ---------------- |
|           |
|           |
| --------- | ------  | -------- | ------------        | ------------       |
| Content   | Code    | Ledger   | Ownerships          | Recipients         |
| --------- | ------  | -------- | ------------        | ------------       |
|           |
|           |
| -----     | ------- |          | -----------------   | --------           |
| UCO       | Token   |          | Authorized keys     | Secret             |
| -----     | ------- |          | -----------------   | --------           |


```

- Address: Corresponds to the hash of the public key of the transaction
- Type: Defines the functional role of the transaction
- Data: Contains all the operations to be performed (transfers, smart contracts, key authorizations, etc.)
  - Content: Can contain any kind of data. It can be used to host some data (HTML page, text, image, code, etc.)
  - Code: Defines the smart contract code to be interpreted by the node. More details on [Smart-Contracts](/build/smart-contracts) section.
  - Ledger: Defines several types of ledger operations
    - UCO: for the cryptocurrency transfers
    - Token: for non-financial transactions (intended for P2P uses - as tokens, loyalties, etc.)
  - Ownerships: Define some cryptographic authorizations and delegations
    - Authorized keys: list of authorized keys to be able to decrypt secrets
    - Secrets: Encrypted contents which can be decrypted by the authorized keys
  - Recipients: Additional recipients to target smart contracts
- Previous public key: Corresponds to the public key associated to the previous transaction
- Previous signature: Corresponds to the signature of the private key associated with the mentioned previous public key
- Origin signature: Corresponds to the signature of the device or software that generated the transaction. This is used on the [Proof Of Work](/learn/arch-consensus/proof-of-work) mechanism and is a necessary condition of its validation.

- ### Validated transaction

A validated transaction is a pending transaction completed with the validation proofs required by the Heuristic Algorithms.
Those are defined by the given structure:

```
|------------------|-------------------------|
| Validation Stamp | Cross Validation Stamps |
| ---------------- | ----------------------- |
|                  |
|                  | -----------------       | -----------          |
|                  | Node public key         | Signature            |
|                  | -----------------       | -----------          |
|                  |
| -----------      | ---------------         | -------------------- | ------------------- | ------------------- | ------------ | -------- | ----------- |
| Timestamp        | Proof of Work           | Proof of Integrity   | Proof of Election   | Ledger Operations   | Recipients   | Errors   | Signature   |
| -----------      | ---------------         | -------------------- | ------------------- | ------------------- | ------------ | -------- | ----------- |
|                  |
| -----            | ----------------------- | -----------------    |
| Fee              | Transaction movements   | Unspent outputs      |
| -----            | ----------------------- | -----------------    |

```

- Validation Stamp: Stamp generated by the coordinator node
  - Proof of work: Corresponds to the public key matching the origin signature (More details on the [Proof of Work](/learn/arch-consensus/proof-of-work) section).
  - Proof of integrity: Proves the linkage of the previous transactions
  - Proof of election: Proves the validation node's rotating election and permit to reproduce it later (See [Rotating Election](/learn/arch-consensus#rotating-election))
  - Ledger operations: Contains all the ledger operations that will be taken into account by the network
    - fee: Transaction's fee
    - transaction movements: Issuer and resolved transaction movements
    - Unspent outputs: List of the remaining unspent outputs of the transaction chain after validation
  - Recipients: List of resolved addresses of the recipients
  - Errors: Any errors found in the validation (i.e. pending transaction error)
  - Signature: Cryptographic signature of the entire stamp by the coordinator's key
- Cross validation stamps: To be considered as validated, the `Validation Stamp` must be joined as many `Cross Validation Stamp` as required by the Heuristic Algorithms.
  They are signatures of the given validation stamp.
  - Node public key: Correspond to the node's public key which generate this `Cross Validation Stamp`'s signature
  - Signature: Correspond to the signature of the `Cross Validation Stamp` for the mentioned public key
  - Inconsistencies: In case of inconsistencies or disagreement, it will contain a list of inconsistencies noted
