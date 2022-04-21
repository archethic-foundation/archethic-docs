---
id: fee
title: Transaction fee
---

ARCHEthic Blockchain is using specific heuristic algorithms to ensure the best transaction's distribution.

The fees are calculated according to the real costs of the network (size, complexity) and is based on the real value of the UCO (using [Oracle Chain](/learn/oracle-chain))

The entire transaction's fee is burned to make the UCO more rare.
This programmable destruction of the UCO ensure a deflation and increase the value of each token.

This way a fair reward mechanism is put in place for nodes regarding their work and their availability.

## Calculation

The transaction's fee computation is based on some properties:
- Transaction's value
- Number of recipient
- Size of the transaction
- Number of replicas
- Complexity of the smart contract (Coming soon)


:::info Minimun fee
0.1$ of the current UCO price
:::

:::info Transaction value fee
minimum_fee * ( transaction_value / (minimum_fee x 1000) ) 
:::

:::warning
In case, there is no value (no UCO to spend), a minimum fee is applied corresponding to $0.1 of UCO
:::

:::info Transaction size fee
Each byte will cost: 10<sup>-9</sup> of the current UCO's price
:::

:::info Recipient based fee
After one recipient, each recipient will cost: $0.1 of UCO
:::

Overall formula:
```
Transaction Fee = fee_for_value + fee_for_storage + fee_for_complexity + cost_per_recipient
```
