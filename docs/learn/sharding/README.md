---
id: sharding
title: Sharding
---

To become an unlimited decentralized network, Archethic Blockchain is using a feature called `Sharding`, used to split processing and storage power to ensure a scalable system.

Thanks to the `Transaction Chain` paradigm, transactions can be divided into chains, to ensure a concurrent processing 
as the opposite of traditional blockchains.

Other new blockchain networks start to use `Sharding` but sometimes not in a complete form: 
- either storage
- either validation

Archethic Blockchain supports a complete sharding scheme for validation and for storage.

## Validation

Each transaction is validated by a new set of rotating nodes.

This ensures the distribution of validation and processing, to achieve a linear scalability and a high TPS.

Because transaction are using the UTXO model, 
there is no reality out of the transaction, so the network is not subject to issues like:

- cross shards synchronization
- state channels communication

To get the state of a transaction, only the transaction and the transaction inputs will be taken into consideration

## Storage

After the validation of the transaction, validation nodes will be in charge to send the transaction to several pools of nodes:
- Transaction Chain Storage Pool: All the transaction associated with the same chain must be replicated on the storage nodes associated with the new transaction's address.
- I/O Storage Pool: Each validated transaction is replicated on the storage nodes associated with the addresses of the transaction input/outputs:
  - Transaction movements addresses storage pools
  - Node movements public key storage pools
  - Recipients addresses storage pools
- Beacon Storage Pool: Each transaction address must be replicated on the storage nodes of the associated address subset [See BeaconChain](/learn/sharding/beacon-chain)

> For each transaction, the Transaction Chain Storage Pool will change, assuring a completed distribution of nodes and the data replication. Nevertheless, nothing prevents the storage nodes to overlap within the chain.

## Rotating Election

Like the validation nodes election, the storage nodes election is subject to a rotating election.
In other terms, each transaction will have its own shard and storage nodes.

The storage node election is based on:
- the address of the transaction
- the storage nonce: a stable secret known by the network
- the list of nodes

This permits any node to perform this computation autonomously to reproduce this list and to request a transaction from the closest node.

To ensure the best availability of the data, this list is refined by some criteria, such as:
- P2P availability
- Geographical distribution


