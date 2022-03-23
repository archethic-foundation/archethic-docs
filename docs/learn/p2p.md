---
id: p2p
title: P2P
---

ARCHEthic Blockchain redesigned the entire P2P layer to be more effective and support an unlimited permissionless network.

## Exsiting solutions

In the current P2P and distributed networks, there are two methods of communication for discovery and data propagation: 

### Gossip

Gossip mode, whose properties are defined by the knowledge of the outgoing neighbors, which means each node of the network will discover the properties of the other nodes by interrogating them one by one, usually randomly, performing some unnecessary network traffic and sending data through nearest nodes for propagation.

![gossip](/img/gossip.svg)

### Broadcast

Broadcast mode, whose properties are defined by the knowledge of the incoming neighbors, which uses incoming connections and dispatch the data to all the nodes.

![broadcast](/img/broadcast.svg)

## Archethic's way

ArchEthic Blockchain introduces a new concept called: `Supervised Multicast`

![supervised_multicast](/img/supervised_multicast.svg)

ARCHEthic is using a hybrid communication that uses Supervised Multicast, which is closer to the properties of Multicast network.
It using some kind of Multi Unicast communication protocol, where a node communicates with a group of nodes during several phases: transaction validation/replication, beacon chain, self-repair phases, while keeping the exchanging low if no activity is present. 
### Transaction Validation Process

During transaction validation through mining and replication, nodes communicates and are able to gather information from incoming or outgoing connection.

When a node receives a message or send a message, it can capitalize on this information to determine if the node is available or not, in a local view.
Then through this view, if the node is not considered as available it can pick another node to fetch an information, while data pushing will remain to check/recheck the availability over time.

### Network transaction chains

Network transaction chains are a way to annonce information to the network through consensus and replicated throw all the nodes.

Other networks may leverages gossip for P2P information, Archethic uses transaction based node information for P2P connectivity and cryptography.
So when a node joins/rejoins the network or when its IP/Port/Key changed, a new transaction is dissiminated to all the nodes in the network after its validation.

### Beacons Chains

[BeaconChain](/learn/sharding/beacon) is a sharded layer able to monitor the entire network and therefore able to snapshot and sampling P2P availability/latencies to produce summaries each day to maintain a qualify vision of the network.

The P2P availability can also be broadcasted to the network in a shorter time range (such a epoch/slot times) to provide a fresheer node availability.

### Data propogation

Archethic uses a [sharding](/learn/sharding) and distributed replication.
This property limits the number of information and messages sent throw the network to reduce bandwidth and data traffic
