---
id: p2p
title: P2P
---

Archethic is a permissionless network where any node can participate into the network as long as they have some hardware requirements such secure element to enclave the private keys
avoiding any disclosure of keys. (See [Hardware Root of Trust](/learn/cryptography/hardware-root-of-trust))

However, the network is able to detect if the new joined nodes should act as validation nodes by authorizing them to validate transactions.

So to achieve an unlimited permissionless network, the entire P2P layer have been redesigned from the ground to be more effective to support higher TPS and adaption.

## Existing solutions

In the current P2P and distributed networks, there are two methods of communication for discovery and data propagation: 

### Gossip

Inspired from the gossip in the social network, Gossip's properties are defined by the knowledge of the outgoing neighbors, which means each node of the network will discover the properties of the other nodes by interrogating them randomly periodically.

While this approach is high available and fault tolerant, it's performing some unnecessary network traffic and sending data through nearest nodes for propagation. This will use most of the bandwidth and is subject to network latency. 

![gossip](/img/gossip.svg)

### Broadcast

Classical and native communication is called Broadcast which is defined by the knowledge of the incoming neighbors dispatch the data through all the nodes.

This mode of communication is efficient in a small network but in a bigger network the complexity time will not scale.

![broadcast](/img/broadcast.svg)

## Archethic's way

Archethic introduces a new concept called: `Supervised Multicast`

![supervised_multicast](/img/supervised_multicast.svg)

Archethic is using a hybrid communication that uses Supervised Multicast, which is closer to the properties of Multicast network.
It uses some kind of Multi Unicast communication protocol, where a node communicates with a group of nodes during several phases: transaction validation/replication, beacon chain, self-repair phases, while keeping the exchanging low if no activity is present. 

### Transaction Validation Process

During transaction validation through mining and replication, nodes communicates and are able to gather information from incoming or outgoing connection.

When a node receives a message or send a message, it can capitalize on this information to determine if the node is available or not, in a local view.
Then through this view, if the node is not considered as available it can pick another node to fetch an information, while data pushing will remain to check/recheck the availability over time.

### Network transaction chains

Network transaction chains are a way to announce information to the network through consensus and replicated throw all the nodes.

Other networks may leverage gossip for P2P information, Archethic uses transaction based node information for P2P connectivity and cryptography.
So when a node joins/rejoins the network or when its IP/Port/Key changed, a new transaction is disseminated to all the nodes in the network after its validation.

Then each node knows the entire list of nodes allowed to participate in the network through the use of Node transaction chains.
To provide a high level of security and privacy, each connection is encrypted and authenticated by the first node public key known from the transaction chains.

### Beacons Chains

[BeaconChain](/learn/sharding/beacon-chain) is a sharded layer able to monitor the entire network and therefore able to snapshot and sample P2P availability/latencies to produce summaries each day to maintain a qualified vision of the network.

The P2P availability can also be broadcasted to the network in a shorter time range (such a epoch/slot times) to provide a fresher node availability.

### Data propagation

Archethic uses a [sharding](/learn/sharding) and distributed replication.
This property limits the number of information and messages sent through the network to reduce bandwidth and data traffic
