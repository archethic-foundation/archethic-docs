---
id: core
title: Core development
---

ARCHEthic Node repository can be found [here](https://github.com/archethic-foundation/archethic-node)


## Technology Stack

ARCHEthic Blockchain node used:
- Elixir
- C
- ScyllaDB

### Why Elixir ?

Elixir is a dynamic, functional language for building scalable and maintainable applications.

It leverages the Erlang VM, known for running low-latency, distributed, and fault-tolerant systems. 

Elixir is successfully used in web development, embedded software, data ingestion, and multimedia processing, across a wide range of industries.

When we are building P2P systems and Blockchain technologies we need to think about fault-tolerance, low-latency, concurrent/parallelism.
Elixir matches all those requirements.

Because all Elixir code runs inside lightweight threads of execution (called processes) that are isolated and exchange information via messages, we can build fast
processing of data which result in a high TPS for a better scalability.

The unavoidable truth about software running in production is that things will go wrong.

Even more when we take network, file systems, and other third-party resources into account.

Elixir provides supervisors which describe how to restart parts of your system when things go awry, going back to a known initial state that is guaranteed to work.

This feature ensures in case of failure, the entire system will not be down, and the isolation provided by the processes and their restarting strategy helps us to achieve it.

Functional programming promotes a coding style that helps developers write code that is short, concise, and maintainable.

Out of the box, Erlang VM provides the capability to hot reload code, which is the best case scenario if we want to provide an on-chain governance without restarting nodes.

### Why C ?

We need to interact with hardware components and C seems the best candidate, so we are using this language to communicate with TPM for instance.

But also, for some intensive task which are really complex in computing, we rely on C to perform those processing.

### Why ScyllaDB ?

ScyllaDB is a NoSQL database built from the idea of Cassandra - Wide Column Database - but with more efficiency in terms of memory consumption and CPU processing.
As it's implemented in C++, it's faster and lightweight and takes advantage of low-level Linux primitives.

We are using a Wide Column Database, but we want to be able to fetch only some part of the data, so a column database fits really well for this kind of purpose.
Moreover, we want a database with a high throughput in writing, and ScyllaDB fits really well with its LSM storage engine.

## Structure

Code base is divided into domains (contexts) for better single responsibility principle:

<!-- Source of the SVG on https://markmap.js.org/repl
## archethic_web 

### Explorer UI

- TransactionChain explorer
- BeaconChain Live
- OracleChain Live
- Node listing
- Metrics/Dashboard
- Governance

### API

#### REST
- Transaction sending
- Transaction fee

#### GraphQL: Transaction queries

## archethic

### Crypto
- Node keystore
- Shared secrets store

### P2P
- InMemory tables
- Messaging

### TransactionChain
- Transaction data
- Transaction building

### Election
- Hypergeometric distribution
- Validation & Storage nodes
- Heuristic constraints

### Mining
- Distributed/Standalone workflow
- Pending transaction validation
- Proof of work
- Transaction fee

### Account
- UCO & NFT Balances
- UTXO lookup

### Contracts
- Interpreter
- Worker

### OracleChain
- Scheduler
- Services

### BeaconChain
- Subset
- Slot
- Summary
- Scheduler

### SharedSecrets
- Scheduler
- Node renewal
- Origin renewal
- InMemory tables

### Bootstrap
- Network initialization
- Node joining

### SelfRepair
- Scheduler
- Sync

### Replication
- Transaction validation
- Transaction downloading

### Networking
- IP lookup
- NAT traversal
- Port forwarding

### Governance
- Proposal analyzer
- Proposal testing
- Pools

### DB
- Storage layer

### Metrics
- Collector
- Scheduler
- Parser
-->

![core structure](/img/core_structure.png)
