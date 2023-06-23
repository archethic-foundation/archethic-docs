---
id: language
title: Smart Contract Language
sidebar_label: Language
---

Archethic Blockchain defines a new smart contract language which was designed to resolve the issue of smart contracts:

- Expressiveness
- Simplify
- Security

Along with the new features of Archethic Smart Contracts (triggers, conditions, actions), a new custom language is defined

## Triggers/Actions

To define a trigger, we need to specify an action block with its trigger type and the following parameters (if presents)

For example:

- based on an incoming transaction

```
actions triggered_by: transaction do
  # do something when a receive transaction
end
```

- based on time interval

```
actions triggered_by: interval, at: "0 8 * * *" do
  # do something each day at 8AM
end
```

## Conditions

To define a condition, we need to specify a condition block with its subject and the list conditions by fields:

- `type`
- `content`
- `code`
- `authorized_keys`
- `secrets`
- `uco_transfers`
- `token_transfers`
- `previous_public_key`
- `origin_family`

For example:

- expecting the incoming transaction contains the content "hello"

```
condition transaction: [
    content: "Hello"
]
```

- expecting all the transaction in the chain should be generated from a biometric device

```
condition inherit: [
    origin_family: biometric
]
```

## Global variables

Smart Contract can use global variable in the different blocks:

- `contract`: represent the actual contract
- `transaction`: incoming transaction
- (inherit condition only) `next`: next transaction on the chain
- (inherit condition only) `previous`: previous transaction on the chain

Each of this variables contains the following fields:

- `address` (hex)
- `type`
- `content` (abitraty string)
- `code` (abritraty string)
- `authorized_keys` (map of public keys)
- `secrets` (list of encrypted secrets in hex)
- `previous_public_key` (hex)
- `recipients` (list of smart contract recipients addresses in hex)
- `uco_transfers` (map of the uco transfers: `%{ recipient_address => amount }`
- `token_transfers` (map of the token transfers: `%{ recipient_address => list(%{ amount: amount, token_address: token_to_transfer, token_id: token_id}}) `

## Functions

Archethic Smart Contracts relies on function which can be used on condition or action blocks.

There are two categories of functions:

- Utilities
- Statements (for transaction generation)

### Utilities

:::info
In the `condition` block, if no parameter is given, the transaction's field value will be the first one
:::

- `hash(data)`: Perform a cryptographic hash

```
condition transaction: [
    content: hash(contract.code)
]
```

- `regex_match?(data, pattern)`: Verify a regular expression

```
condition transaction: [
    content: regex_match?("hello")
]
```

- `regex_extract(data, pattern)`: Extract data from a regular expression

- json_match?: Verify the data matches a JSONPath expression

```
condition oracle: [
    content: json_match?("$.uco.usd")
]
```

- `json_extract(data, pattern)`: Extract data from a JSONPath expression

```
condition oracle: [
    content: json_extract("$.uco.usd") > 0.2
]
```

### Statements

- `set_type`: Set the transaction type

```
actions triggered_by: transaction do
    set_type transfer
end
```

- `add_uco_transfer`: Add a new UCO transfer

```
actions triggered_by: transaction do
    add_uco_transfer to: "F28C3D5B3828AD3F8682F1B1D14A8507B829F65F7BE6C50427A6019CCB6801C", amount: 1.0
end
```

- `add_token_transfer`: Add a new token transfer

```
actions triggered_by: transaction do
    add_token_transfer: to: "AF28C3D5B3828AD3F8682F1B1D14A8507B829F65F7BE6C50427A6019CCB6801C", token_address: "0D574D171A484F8DEAC2D61FC3F7CC984BEB52465D69B3B5F670090742CBF5CC", amount: 1.0
end
```

- `set_content`: Set the new content

```
actions triggered_by: transaction do
    set_content "hello"
end
```

- `set_code`: Set the new code

```
actions triggered_by: transaction do
    set_code """
    actions triggered_by: transaction do
      add_uco_transfer to: "0D574D171A484F8DEAC2D61FC3F7CC984BEB52465D69B3B5F670090742CBF5CC", amount: 2.0
    end
    """
end
```

- `add_ownership`: Add a new ownership with a secret and its authorized public keys

```
actions triggered_by: transaction do
    add_ownership secret: "...", secret_key: "...", authorized_public_key: ["0D574D171A484F8DEAC2D61FC3F7CC984BEB52465D69B3B5F670090742CBF5CC"]
end
```

- `add_recipient`: Add a contract address to reach

```
actions triggered_by: datetime, at: 1391309040 do
    add_recipient "0D574D171A484F8DEAC2D61FC3F7CC984BEB52465D69B3B5F670090742CBF5CC"
end

```
