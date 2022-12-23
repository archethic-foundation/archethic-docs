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

Archethic's tokens are also unified through a specification to help implementers, developers and users to have a clear understanding of their definition

For more details please take a look at the [AEIP-2](https://github.com/archethic-foundation/aeip/blob/main/AEIP-2.md)

## Creation

In order to create a token, you have to:
1. set the transaction's type to: "token"
2. define in the transaction's data the token definition

### Fungible

Here an example of a fungible token: 
```jsonc
{
  "supply": NB_OF_TOKEN_TO_CREATE, // Specified in 10e8 notation (default to 8 decimals)
  "type": "fungible",
  "symbol": "TOKEN_SYMBOL",
  "name": "TOKEN_NAME",
  "properties": {"PROPERTY_NAME": "PROPERTY_VALUE"}
}
```

### Non-fungible

Here another example of non-fungible token: 
```jsonc
{
  "supply": SIZE_OF_THE COLLECTION, // Must be specified in 10e8 notation
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

## Usage

To make use of those custom tokens, a developer or a user can easily build a new transaction and use the ID in the ledger operations to send this token.

Example of Token ledger operation in the transaction:
```jsonc
{
  "to": "RECIPIENT_ADDRESS",
  "amount": NB_OF_TOKEN_TO_TRANSFER,
  "tokenAddress": "ADDRESS_OF_THE_GENERATED_ADDRESS",
  "tokenId": TOKEN_ID // needed for non-fungible token
} 
```
