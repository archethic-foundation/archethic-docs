---
id: account
title: Account
---

Archethic node provides a high level and fast access to an account assets using primarily memory tables with ETS.

This gives us faster computation and data retrieval to asserts balances and UTXO loading.

## UCO

A memory table is defined to list of the UCO available for a given address

Few functions are provided to be able to query this table in order to:
- get the UCO balance 
- get the UTXOs
- get the total inputs (spent and unspent)
- spend all the UTXOs
- add new UCO UTXO

### Ledger 

Each entry is indexed by a tuple recipient/sender  to identify uniquely an UTXO

| Recipient, Sender | Amount | Spent ? | Date |
|-|-|-|-|

### Index

An index table is provided to be able to retrieve all the sender UTXOs for a given recipient

| Recipient | Sender |
|-|-|


## Token

A memory table is defined to list al the token available for a given address

Few functions are provided to be able to query this table in order to:
- get the token balance s
- get the UTXOs
- get the total inputs (spent and unspent)
- spend all the UTXOs
- add new token UTXO

### Ledger 

Each entry is indexed by a tuple recipient/sender/token address  to identify uniquely an UTXO

| Recipient, Sender, Token | Amount | Spent ? | Date |
|-|-|-|-|

### Index

An index table is provided to be able to retrieve all the sender UTXOs for a given recipient

| Recipient | Sender | Token address
|-|-|-|

## Loading

When a transaction replicated, the storage nodes in charge of storing the new transaction (chain replicas or recipient replicas) will load the transaction in those tables to index the UTXO and build in memory view.

The same goes when a node is bootstraping, a process will load all the transactions from the database to load them  into those tables.
