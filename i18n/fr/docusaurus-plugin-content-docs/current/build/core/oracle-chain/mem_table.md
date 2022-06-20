---
id: memory-table
title: OracleChain Memory Tables
---

OracleChain component provides [scheduler](/build/core/oracle-chain/scheduler) and [services](/build/core/oracle-chain/service) to maintain transaction chain and real world data integration.

But we need a way to access quickly this information for better computation latency.

For this purpose, the OracleChain service maintains a memory table using ETS to hold the information according to their date.

It represented in that way:

| Timestamp | Service | Data |
|-|-|-|

For example for the UCO service we may have:

|Timestamp|Service|Data|
|-|-|-|
| 1622801400 | UCO | %{ "eur" => 0.02 } |


The table is loading after each oracle or oracle summary transaction and during the bootstrap for faster computation.

:::info
The transaction's fee algorithm is using this cached information to provide this computation quickly
:::
