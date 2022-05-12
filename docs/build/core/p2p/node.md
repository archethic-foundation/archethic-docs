---
id: node
title: Node
---

## Data structure

Archethic is using a structured and open P2P network based on some properties:

A node include a list P2P information such as:
- IP
- P2P Port
- HTTP Port (Web layer - Explorer)
- P2P Protocol (i.e TCP)
- First public key
- Last public key
- GeoPatch (for geographical distribution based on the GeoIP of the IP)
- NetworkPatch (for P2P responsiveness based on the latency to reach it)
- Reward address (the address where the mining rewards should be sent)
- Global availability (from BeaconChain qualification)
- Local availability (from Supervised Multicast)
- Average availability (from BeaconChain qualification)
- Authorized
- Authorization Date

## P2P tables view

The application is stored a P2P view in memory table using ETS (Erlang Term Storage) to support fast query to fetch node information.

When network transaction(node, node shared secrets) are loaded inside the system, `MemTableLoader` module is called to populate the tables. This is also true during the bootstrap of the node to fill up the data as cache.

### Discovery table

| first public key | last public key | IP | P2P port | HTPT port | geo patch | network patch | average availability | availability history | enrollment date | transport | reward ddress |
|-|-|-|-|-|-|-|-|-|-|-|-|


This table contains all the P2P information for a given node index by its first public key

### Availability lookup table

| first public key |
|-|

This table indicates the node availability, if its first public key is present in the table.
The purpose of this short table is to provide a really fast access to determine the availability.

### Authorized nodes table

| first public key | authorization date
|-|-|

All the node public keys presents in this table will be considered at authorized nodes along with their authorization date.

So in order to determine if a node is authorized a fast lookup can be performed.

In the same order, to get the list of authorized nodes by folding this table which can then lookup data from the discovery table to fetch all the information regarding the authorized node.

### Nodes key lookup table

| last public key | first public key |
|-|-|

This is a reverse ordered table where we can have access to the first node public key from its last public key, without traversing the entire discovery table
