---
id: transaction-form
title: Smart Contracts Playground - Transaction form
sidebar_label: Transaction form
sidebar_position: 99
---

The transaction form is a form that you might encounter at different places:

1. Trigger panel
1. Previous contract panel
1. Deploy panel

The goal of this form is to prepare a transaction payload (everything non-crypto).
We'll describe here every subpart of this form.

## type
This is a selector to choose the transaction's type. It is used to give a hint about what's in the transaction. Some types impose some rules to follow.

Please see the [transaction types](/learn/transaction-types) page for a detailed list. 

## code
This is the text field for the code of the Smart Contract. It may be hidden because in the Smart Contracts Playground, the code is usually at the root level of the user interface.

## content
The content is a text field. It often depends on the transaction's type.
For Smart Contracts, we use it to store the aggregated state. This might change in the very near future (see [AEIP-14](https://github.com/archethic-foundation/aeip/blob/main/AEIP-14.md)).

## uco transfers
This is the list of transfers for the UCOs. Every transfer is defined by 2 fields:

- `amount`: required - float
- `to`: required - hexadecimal address of destination (68 characters)

:::info
The amount accepts 8 decimals maximum.
:::

## token transfers
This is the list of transfers for [AEIP-02](https://github.com/archethic-foundation/aeip/blob/main/AEIP-02.md) tokens. Every transfer is defined by 3-4 fields:

- `amount`: required - float
- `to`: required - hexadecimal address of destination (68 characters)
- `token_address`: required - hexadecimal address of the token's definition (68 characters)
- `token_id`: optional - default: 0 - the index of the token in the token's definition (mainly used for NFTs)

## recipients
This is the list of the Smart Contracts addresses to trigger. Note that the Smart Contracts are executed in dry mode (not writing anything) when the transaction is being validated, which means that if an execution fails, the transaction is invalid.

:::note
For now a Smart Contracts should not trigger other Smart Contracts because the execution is not atomic.
:::

## ownerships
This is the list of secrets with the public keys authorized to decrypt them.
Every secret is defined by 2 fields: 

- `secret`: required - the **non-encrypted** secret  (the SDK will encrypt with a key that is then encrypted for every authorized_public_keys below)
- `authorized_public_keys`: required - the list of public keys allowed to decrypt the secret

:::note
As explained in the [Deploy](/build/smart-contracts/playground/deploy) page, one secret is required for the initial contract's transaction.
