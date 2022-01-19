---
id: archethic-intro
title: ARCHEthic
---

## Introduction

ARCHEthic is the next generation of Blockchain which provides a truly decentralized limitless network, using TransactionChain and a new consensus named ARCH (Atomic Rotating Commitment Heuristic),
to be the most secure and scalable decentralized network.

---

ARCHEthic's network is built to overcome the issues faced by other blockchain solutions:

  - Support of billions of transactions
  - Linear scalability
  - Low-energy consumption
  - Mass adoption
  - Low transaction fees

This document aims to provide information and resources about the technology and the usage to build new decentralized applications on top of ARCHEthic.

## Motivations

Given the universal constraints both material and physical, billions of transactions cannot be integrated into a single branch of chained blocks.

Similarly, regardless of the consensus method, it is not possible to ensure universal consensus on billions of transactions by polling all nodes of the network.

Finally, the functioning of current distributed networks (P2P) is such that it is not possible to guarantee the freshness (consistency) of data on an asynchronous network,
unless the network is slowed down excessively by the calculation of the nonce of the block (PoW), as is the case with other blockchain networks.

## Innovations

ARCHEthic Blockchain solved this issues in the following way:

- Transaction Chains:

  Instead of chained blocks of transactions, each block is reduced to its atomic form.
  Therefore, each block contains only one transaction and each transaction will be chained in its own chain.

- Real Sharded Network:

  ARCHEthic is using sharding technology to ensure distribution of transaction processing and storage to provide
  a very high scalability.

- Next-generation consensus:

  ARCHEthic is using an universal consensus called ARCH based on Atomic Commitment using Heuristic Rotating election
  of a tiny set of validation nodes providing the highest level of security

- Optimized Replication and Self Repair:

  Every transaction will be stored in a deterministic way on a set of nodes using a sharded storage layer.
  Thus, every node will autonomously know all the nodes for a given transaction and ease the network by only interrogating the closest elected nodes.

- Distributed network without bottleneck:
 
  ArchEthic rebuild the entire P2P layer to provide an efficient messaging between peers based on the Supervised Multicast
using self discovery mechanism from incoming connection and network transactions.
The system is able to maintain a qualified vision of the network while limiting the generation of requests.
 
