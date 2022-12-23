---
id: bootstrapping
title: Bootstrapping
---

Archethic Blockchain by using Network Transaction and Supervised Multicast, requires some actions to be performed 
when a node is bootstrapping. These operations will ensure synchronization and P2P awareness.

## Joining

When a node joins the network for the first time, it will request from a list of preconfigured nodes to reach (called "bootstrapping seeds"), the closest nodes from its position.

Then, it will generate a first node transaction including as data: ip, port, protocol, reward address, key certificate (to ensure the key is coming from a secure element)
Once the network will attest and verify its transaction, the node will be able to start a SelfRepair process

## Updates

When a node rejoins the network after some time, depending on if its previous data expired, it will generate a new transaction with the new information

## Synchronization

Once the transaction is validated, the node will start by requesting the list of nodes.

Then, it will start the [Self-Repair](/learn/p2p/self-repair) sequence to get and synchronize the missing transactions and publish its end of sync to the network.

By this way, the entire will know the existence the readiness of this node.

