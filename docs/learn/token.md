---
id: token
title: Tokens
---

Tokens is an important feature on Archethic.
Nowadays, our world is transforming towards digitalisation and tokenization with new use cases and trends (royalties, collection, proof of ownerships, etc.)

Archethic allows users to create and transaction with an unlimited-defined (custom) token natively.

## Native

Archethic tokens are considered as native as for developers, there is no need to create smart contract to mint or transfer tokens.

The transaction's structure supports - by design, asn extension of the ledger model (more than UCO-only transaction)

All the layer of complexity have been removed to make them efficient and performant.

Because of this, the transfer of tokens is as simple as a transfer of UCO (just UTXO), making it fast and cheap.

## Standardized

Archethic's tokens are also unified through specifications to help implementers, developers and users to have a clear understanding of their definition.

The complete specification is composed of many AEIPs:

- [AEIP-02 - Tokens standard](https://github.com/archethic-foundation/aeip/blob/main/AEIP-02.md)
- [AEIP-18 - Tokens resupply](https://github.com/archethic-foundation/aeip/blob/main/AEIP-18.md)
- [AEIP-19 - Tokens minting's recipients](https://github.com/archethic-foundation/aeip/blob/main/AEIP-19.md)

## Creation

In order to create a token, you have to:

1. set the transaction's type to: `token`
2. define in the transaction's content the token's json definition

[The JSON Schema is available on GitHub](https://github.com/archethic-foundation/archethic-node/blob/develop/priv/json-schemas/token-core.json)

:::note
As everything on Archethic, it is a good practice to create a new transaction chain for this token only.
:::

### Fungible

Example of a token that doesn't allow minting (may never be resupplied):

```json
{
  "supply": 100000000000, // 1000 tokens
  "decimals": 8, // 1 token == 10⁸
  "type": "fungible",
  "symbol": "TOKEN_SYMBOL",
  "name": "TOKEN_NAME",
  "properties": {"PROPERTY_NAME": "PROPERTY_VALUE"}
}
```

Example of a token that allows minting (may be resupplied later):

```json
{
  "allow_mint": true, // <------------
  "supply": 100000000000, // 100000 tokens
  "decimals": 6, // 1 token == 10⁶
  "type": "fungible",
  "symbol": "TOKEN_SYMBOL",
  "name": "TOKEN_NAME",
  "properties": {"PROPERTY_NAME": "PROPERTY_VALUE"}
}
```

### Non-fungible

There are 2 definitions for the NFT:

1. either for a single token
1. either for a collection of tokens

:::info
NFTs always have 8 decimals.
:::

Example of a NFT:

```json
{
   "supply": 100000000, // 1 token
   "type": "non-fungible",
   "name": "My NFT",
   "symbol": "MNFT",
   "properties": {
      "image": "base64 of the image",
      "description": "This is a NFT with an image"
   }
}
```

Example of a NFT Collection:

```json
{
  "supply": 300000000, // 3 tokens
  "type": "non-fungible",
  "name": "COLLETION NAME",
  "symbol": "COLLETION_SYMBOL",
  "properties": {"globalProperty": "value"},
  "collection": [
    {"image": "link"},
    {"image": "link"},
    {"image": "link"}
  ]
}
```

During the transaction validation, the miners will understand how to interpret this transaction and create the relative assets and UTXOs to make transfers possible right away.

## Resupply fungible tokens (AEIP-18)

As mentioned above, fungible tokens may accept to be minted at any time. **This transaction must be done in the same transaction chain of the referenced token** (to prove ownership of the token) and it's type must be `token`.

[The JSON Schema is available on GitHub](https://github.com/archethic-foundation/archethic-node/blob/develop/priv/json-schemas/token-resupply.json)

Here's an example of the token resupply transaction's content:

```json
{
  "aeip": [8, 18],
  "supply": 100000000000, // 1000 tokens if referenced token has decimals=8
  "token_reference": "0000C13373C96538B468CCDAB8F95FDC3744EBFA2CD36A81C3791B2A205705D9C3A2"
}
```

## Recipients (AEIP-19)

When creating a token transaction (creation or resupply), it is also possible to specify a list of recipients that will receive all or some of the minted tokens.
In order to do so, a `recipients` field must specified in the transaction's content.

Here's an example for a fungible token resupply:

```json
{
  "aeip": [8, 18, 19],
  "supply": 1000,
  "token_reference": "0000C13373C96538B468CCDAB8F95FDC3744EBFA2CD36A81C3791B2A205705D9C3A2",
  "recipients": [
    {
       "to": "0000f1fd....",
       "amount": 100000000 // 1 token
    }
  ]
}
```

Here's another example for a non-fungible token creation:

```json
{
   "aeip": [2, 8, 19],
   "supply": 100000000, // 1 token
   "type": "non-fungible",
   "name": "My NFT",
   "symbol": "MNFT",
   "properties": {
      "image": "base64 of the image",
      "description": "This is a NFT with an image"
   },
   "recipients": [
    {
       "to": "0000f1fd....",
       "amount": 100000000 // 1 token
    }
  ]
}
```

## Transfer

Now that the tokens are created, there are few ways to move them around:

1. Via a wallet (such as the [Archethic Wallet](https://www.archethic.net/wallet.html))
2. Via the `send-transaction` API
3. Via a Smart Contract

Example of a NFT transfer via the API:

```json
{
  "method": "send_transaction",
  "jsonrpc": "2.0",
  "id": 1,
  "params": {
    "transaction": {
      "version": 2,
      "type": "transfer",
      // [...]
      "data": {
        "ledger": {
          "token": {
            "transfers": [
              {
                "to": "0000ABCD...EF", // recipient's address
                "amount": 100000000, // 1 token
                "tokenAddress": "00001AC8...4F", // token definition address
                "tokenId": 1 // 1st token of the collection
              }
            ]
          }
        }
      }
    }
  }
}
```

Example of a transfer via a Smart Contract:

```elixir
Contract.add_token_transfer(token_address: 0x00001AC8...4F, to: 0x0000ABCD...EF, amount: 100000000)
```
