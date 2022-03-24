---
id: transaction-context
title: Transaction context retrieval
---

When a transaction is under validation, after the [pending transaction validation](/build/core/mining/transaction-validation), the nodes are fetching the context of the transaction.

## Retrieval

This retrieval include multiple queries to be able to perform an efficient validation:
- Get the previous transaction
- Get the unspent outputs
- Get the P2P view of the storage nodes (chain and beacon)

All of thoses queries happen concurrently making efficient the transaction validation.

To be sure the data is fetched faster, an algorithm is provided to first target the closest nodes from the validation node but
also ensure the if node fails to respond, other nodes will take the relay.

However, if for the P2P view query, some node doesn't respond in a timeframe, it will be considered as offline, and through aggregation during the replication tree creation, this node will not receive replication request

## Node distribution

To be sure all the validation will get the best of this retrieval, an algorithm have been developed to ensure a fair distribution of the nodes invovled in those queries.

The storage nodes for the previous chain are split into 2 group: previous transaction and unspent outputs

This way a given node will get several responses ensuring the atomic commitment of the transaction.

The algorithm defines the number of group to have and the number of nodes in each group.

Also it balances the groups to be sure a group have the same number of node without duplication
