---
id: archethic-intro
title: Archethic introduction
---
Archethic is the next generation of Blockchain which provides a truly decentralized limitless network, using TransactionChain and a new consensus named ARCH (Atomic Rotating Commitment Heuristic),
to be the most secure and scalable decentralized network.

---

Archethic's network is built to overcome the issues faced by other blockchain solutions:

  - Support of billions of transactions
  - Linear scalability
  - Low-energy consumption
  - Mass adoption
  - Low transaction fees

This document aims to provide information and resources about the technology and the usage to build new decentralized applications on top of Archethic.

## Motivations

Given the universal constraints both material and physical, billions of transactions cannot be integrated into a single branch of chained blocks.

Similarly, regardless of the consensus method, it is not possible to ensure universal consensus on billions of transactions by polling all nodes of the network.

Finally, the functioning of current distributed networks (P2P) is such that it is not possible to guarantee the freshness (consistency) of data on an asynchronous network,
unless the network is slowed down excessively by the calculation of the nonce of the block (PoW), as is the case with other blockchain networks.

## Innovations

Archethic Blockchain solved this issues in the following way:

<details>
  <summary>TransactionChains</summary>
		Instead of chained blocks of transactions, each block is reduced to its atomic form.
		<br />
		Therefore, each block contains only one transaction and each transaction will be chained in its own chain.
</details>

<details>
  <summary>Real Sharded Network</summary>
		Archethic is using sharding technology to ensure distribution of transaction processing and storage to provide
		a very high scalability.
</details>

<details>
  <summary>Next-generation consensus</summary>
		Archethic is using an universal consensus called ARCH based on Atomic Commitment using Heuristic Rotating election
		of a tiny set of validation nodes providing the highest level of security
</details>

<details>
  <summary>Optimized Replication and Self Repair</summary>
		Every transaction will be stored in a deterministic way on a set of nodes using a sharded storage layer.
		<br />
		Thus, every node will autonomously know all the nodes for a given transaction and ease the network by only interrogating the closest elected nodes.
</details>

<details>
  <summary>Distributed network without bottleneck</summary>
		Archethic rebuilds the entire P2P layer to provide an efficient messaging between peers based on the Supervised Multicast
		using self discovery mechanism from incoming connection and network transactions.
		<br />
		The system is able to maintain a qualified vision of the network while limiting the generation of requests.
</details>
