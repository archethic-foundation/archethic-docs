---
id: token
title: Tokens
---

Tokens is an important feature on Archethic. 
Nowadays, our world is transforming towards digitalisation and tokenization with new use cases and trends (royalties, collection, proof of ownerships, etc.)

Archethic allows users to create and transaction with an unlimited-defined (custom) token natively.

## Native 

Archethic tokens are considered as native as for developers, there are not need to create smart contract to mint or transfer tokens.

The transaction's structure support - since its design, asn extension of the ledger model (more than UCO-only transaction)

All the layer of complexity have been removed to make them efficient and performant.

Because of this, the transfer of tokens is simple as a transfer of UCO (just UTXO), making it fast and cheap. 

## Standardized

Archethic's tokens are also unified through a specification to help implementers, develoeprs and users to have clear understanding of their definition

For more details please take a look at the [AEIP-2](https://github.com/archethic-foundation/aeip/blob/main/AEIP-2.md)

## Creation

In order to create a token, you have to:
1. set the transaction's type to: "token"
2. define in the transaction's data the token definition

### Fungible

Here an example of a fungible token: 
```json
{
  "supply": NB_OF_TOKEN_TO_CREATE,
  "type": "fungible",
  "symbol": "TOKEN_SYMBOL",
  "name": "TOKEN_NAME",
  "properties": []
}
```

### Non-fungible

Here another example of non-fungible token: 
```json
{
  "supply": SIZE_OF_THE COLLECTION,
  "type": "non-fungilbe",
  "name": "COLLETION NAME",
  "symbol": "COLLETION_SYMBOL",
  "properties": [
    [ {"name": "image", "value": "link"} ],
    [ {"name": "image", "value": "link"} ] ,
    [ {"name": "image", "value": "link"} ] 
  ]
}
```

During the transaction validation, the miners will understand how to interpret this transaction and create the relative assets and UTXOs to make transfers possible right away.

## Usuability

To make use of those custom tokens, a developer or a user can easily build a new transaction and mentioning in the ledger operations to send this token.

Example of Token ledger operation in the transaction:
```json
{
  to: "RECIPIENT_ADDRESS",
  amount: NB_OF_TOKEN_TO_TRANSFER,
  token_address: "ADDRESS_OF_THE_GENERATED_ADDRESS"
} 
```
