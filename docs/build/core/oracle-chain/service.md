---
id: service
title: Oracle Chain Service
---

OracleChain provides a way to extend it and to add more services to the scheduler.

## Behavior 

The [behavior](https://github.com/archethic-foundation/archethic-node/blob/master/lib/archethic/oracle_chain/services/impl.ex) defines functions to extend to support new services

- Fetch: This will perform the data fetching and will return a map of the data to be serialized by the transaction
- Verify: This will let validation nodes asserts the information provided in the new oracle transaction
- Parse data: This will parse the incoming data from the oracle transaction and checks its validatity

### Example

[UCO service behavior](https://github.com/archethic-foundation/archethic-node/blob/master/lib/archethic/oracle_chain/services/uco_price.ex) is implemented in such way:
- Fetch: it request Coingecko to fetch the USD/EUR pair of the Archethic token
- Verify: fetch Coingecko again to gather the token price and compare price using a standard deviation function with a threshold of 0.01
- Parse data: Ensure the data is map with the USD/EUR pair and an amount encoded as float


## Configuration

Along with the definition of the new service, we need to inform how to add this service to the [scheduler](/build/core/oracle_chain/scheduler).
For this we need to add the service in the [configuration (config.exs)](https://github.com/archethic-foundation/archethic-node/blob/master/config/config.exs)

```elixir
config :archethic, ArchEthic.OracleChain,
  services: [
    uco: ArchEthic.OracleChain.Services.UCOPrice,
    mynewservice: ArchEthic.OracleChain.Service.MyNewService # Added line
  ]
```
