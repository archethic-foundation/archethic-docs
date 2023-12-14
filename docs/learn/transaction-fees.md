---
id: fee
title: Transaction fees
sidebar_position: 4
---

Archethic Blockchain is using specific heuristic algorithms to ensure the best transaction's distribution.

The fees are calculated according to the real costs of the network (size, complexity) and is based on a minimal fee ($0.01) indexed to the real UCO's price (using [Oracle Chain](/learn/oracle-chain))

During the transaction validation, the entire fee is burned to make the UCO more rare.
This programmable destruction of the UCO ensures a deflation and increases the value of each token.

This way a fair reward mechanism is put in place for nodes regarding their work and their availability.

## Calculation

The transaction's fee computation is based on some properties:
- Minimum fee: *$0.01 of the current UCO price*
- Number of recipient (for transfers or smart contract calls)
  - 1: no more additional fee 
  - \> 1: each additional recipient will have an additional cost logarithmically. However we want to ensure for a simple transaction, the price doesn't go beyond $0.01. 

    :::note
    We take the assumption than a recipient replication cost is something around 1/3 of the load for a given transaction.
    Indeed, sending transaction to multiple leverages more resources in terms of network load and storage capability as the transaction must be replicated in all the chains.
    To make it more fare, we apply a logarithmic progression, as the cost of replication might be reduced by the overlap of storage node election
    :::

- Size of the transaction: each stored byte will cost 10<sup>-8</sup> of the current UCO's price
- Number of replicas
- Smart contract execution fee:
   - Cost of resulting transaction: During transaction's validation, we simulate the output's transaction from a smart contract execution and apply a transaction fee calculation.
   - Complexity of the smart contract execution (Coming soon)

Overall formula:
```
Transaction Fee = minimum fee (UCO's price)
                 + fee for storage (size * nb of replicas)
                 + fee for cost per recipients
                 + fee for smart contract
```

:::info
Regular transfer of UCO to single person would cost around ~$0.01 (+/- additional information + nb of replicas)
:::

:::caution Important
The $0.01 cost is static only as minimum fee for any transaction. 
Depending on the number of recipients, size, etc. the fee will increase, as it requires more work for the network
:::

## Transaction's type particularities

### Network

All the transactions with a transaction's type such as `node`, `node shared secrets`, `oracle`, `beacon chain`, etc. don't cost fee, as their intent is only for network management.

### Keychain

Transactions to manage keychain for creation, updates or add new access don't cost fee, as this will be blockage to the adoption and there are just meant to ease the wallet management.

### Token 

Archethic supports a token mining through a given type of transaction `token`.
Because during this step validation nodes have to perform some additional work to create new unspent transaction outputs (UTXOs) and deliver them (if multiple - for example in a collection creation).

Hence an additional fee is computed based on the number of UTXO to create.

- Fungible tokens: there will only cost the minimum fee: $0.01 - as it's like doing some UCO transfer

- Non fungible tokens: These are tokens which each collection item have some unique properties and well identified. So a list of UTXO is created for each unique collection items. This creation will consume resources of computation, networking and storage.

An additional fee is determined in that case through the following formula: 

`(log10(number of utxos) + 1) * number of utxos * minimum fee`

So the transaction fee will gradually increase according of the number of unique token to create (= new UTXO)

![](/img/nft_additional_fee.svg)

:::info
Token definition allows to send at the time of minting to list of first recipients.
Hence, the rules to multiple transfers is applied to logarithmically increases the transaction's fee
:::
