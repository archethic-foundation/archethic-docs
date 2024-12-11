---
id: transaction-types
title: Transaction types
sidebar_position: 4
---

The transaction's type is used to give a hint on what the transaction contains. Some types must respect some conditions. 

There are 2 categories of transaction types, the network transactions and the others:

- network transactions: every nodes in the network must replicate them
- others: only elected nodes must replicate them

## node (network)

Only nodes are allowed to create a node transaction. It contains the information about a running node. It is sent when a node joins or when it changes its network configuration.

## node_shared_secrets (network)

This daily (11:30pm) transaction provides a shared secret to all the running nodes.

## node_rewards (network)

This daily (02:00am) transaction rewards the nodes by sending them some MUCOs based on their uptime.

## mint_rewards (network)

This daily (02:00am) transaction mints some MUCOs. The amount minted is the same as the amount of UCO burned previous day.

## oracle (network)

This transaction fetch some off-chain data and provides it in the content. It is sent every minutes. Please note that the oracle content may not always contain the same information. For example the UCO price is only sent if it changes.

## oracle_summary (network)

This daily (00:00am) transaction aggregates all oracles transaction of the previous day.

## code_proposal (network)

This transaction contains a diff (code change) to be applied on the nodes. It then need to be approved before it is applied.

## code_approval (network)

This transaction is used to approve a `code_proposal`. Once a threshold is passed, the diff is applied to all nodes.

## origin (network)

TODO

## keychain

This transaction is created when creating a wallet. It is used to be able to receive/send UCOs and Tokens.

## keychain_access

This transaction defines the authorization of a `keychain`.

## transfer

This transaction contains either at least, one `uco_transfer`, one `token_transfer` or one `recipient`.

## token

This transaction defines a [Token](/learn/token).

## hosting

This transaction is a [AEWeb](/participate/aeweb) transaction. Read [How it works](/participate/aeweb/how-it-works) for the details.


## data

This transaction contains either a `content` or at least one `ownership`.

## contract

This transaction contains a contract in the `code` or `contract` field.