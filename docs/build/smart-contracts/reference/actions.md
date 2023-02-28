---
id: actions
title: Smart Contracts - Actions block
sidebar_label: Actions
sidebar_position: 2
---

The `actions` block is the code executed when the [trigger](/build/smart-contracts/reference/triggers) is triggered. 
There are many differents triggers, but the only difference to note is, for the trigger **transaction**, you will have a global variable `transaction` available in the code.

## Global variables

### contract 

The `contract` variable is a map of the current contract's transaction. See [Appendix 1](#appendix-1-the-transaction-map).

### transaction

The `transaction` variable is a map of the transaction that triggered the `actions` block. See [Appendix 1](#appendix-1-the-transaction-map). It is only available when the trigger is a transaction: 

```elixir 
actions triggered_by: transaction do 
   ...
end
```


## Examples

:::danger TODO
:::

## Appendix 1: The transaction map

- `address`  is the transaction's address.
- `type` is the transaction's type.
- `content` is the transaction's content (it's a string that can contain anything, for example a smart contract state)
- `code` is the transaction's code (empty string for all non-smart-contract transactions)
- `timestamp` is the transaction's validation timestamp
- `uco_transfers` is a map of UCO transfers grouped by address of the transaction.

```
["00001ab...": 1, "00001bc...": 2]
```

- `token_transfers` is a map of list of token transfers by address of the transaction 

```
["00001ab...": 
    [
        [amount: 1, token_address: "0000ab12..." , token_id: 1],
        [amount: 1, token_address: "0000ab12..." , token_id: 4],
    ]
]
```

:::danger
NOT VERY FRIENDLY USAGE
- `authorized_keys` is a list of [public_key: "" , encoded_secret_key_to_decode_the_secret: ""]
- `authorized_public_keys` is a list of public keys allowed to decode a secret in the transaction
- `secrets` is a list of encrypted secrets
:::



