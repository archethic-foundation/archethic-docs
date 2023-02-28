---
id: condition
title: Smart Contracts - Condition block
sidebar_label: Condition
sidebar_position: 3
---

Conditions are blocks with the goal to check the validity of a transaction. There are 3 types of `condition` block. The condition blocks are not code block, they are maps of what we call "boolean expressions". In this map, the keys are the transaction property, and the values are expressions that must return a boolean or a value. 

Pseudo-code:
```elixir
condition <type>: [
    <prop1>: <value>,
    <prop2>: <boolean>,
    <prop3>: <expr that returns a value>,
    <prop4>: <expr that returns a boolean>
]
```
- `type` is either `inherit`, `condition` or `oracle`.
- `prop` is a property of the transaction or `origin_family`. See [Action's Appendix 1](/build/smart-contracts/reference/actions#appendix-1-the-transaction-map) for the available properties.
- `expr` is a code expression.

Example:
```elixir
condition inherit: [
    # <value>
    type: "contract",

    # <boolean>
    content: true,

    # <expr that returns a value>
    code: 
        if Time.now() > 1677572714 do 
            "condition inherit: []"
        else
            previous.code
        end,

    # <expr that returns a boolean>
    uco_transfers: Map.size() > 0
]
```

## Rules

1. **All "boolean expressions" must pass for the transaction to be valid.**
1. If the expression return true, this "boolean expression" passes.
1. If the expression return false, this "boolean expression" fails.
1. If the expression return a value, this "boolean expression" passes if the property have this value.

:::info
In these blocks, there is also some sugar to automatically add the property as an argument of the functions called. For example `uco_transfers: Map.size() > 0` will automatically expand to `uco_transfers: Map.size(txn.uco_transfers) > 0`.
:::

## Condition inherit

The `condition inherit` purpose is to check the "next transaction", the one resulting from the contract's execution. **It is required on all contracts.**

```elixir
condition inherit: [...]
```

:::tip
If the map is empty `[]`, it means the transaction chain is closed: no transaction will be accepted anymore.
:::

There are 2 global variables for this condition block:
1. `previous` is the transaction of the current contract.
1. `next` is the "next transaction".

See [Action's Appendix 1](/build/smart-contracts/reference/actions#appendix-1-the-transaction-map) for the details of the transaction map.

### Examples

Pass only if it is executed before a timestamp:
```elixir 
condition inherit: [
    timestamp: next.timestamp < 1677598185
]
```

Pass only if a counter (stored in content) was incremented:
```elixir 
condition inherit: [
    content: String.to_int(previous.content) + 1 == String.to_int(next.content)
]
```

Pass only if chain has been closed (the code part) and there is a UCO transfer to an address depending on the time:
```elixir 
condition inherit: [
    code: "condition inherit: []",
    uco_transfers: 
        if Time.now() >= 1674564088 do
            ["00003bafdfb7a8e66b59de5692b79088063853bbd69a7d555faec906e6215e57ff98": 2]
        else
            ["0000ba28ce06631ff2ef4fe3dc89a34be13c0d252f8952bbfa3173b03dbef3c04afd": 2]
        end
]
```


## Condition transaction

The `condition transaction` purpose is to check the transaction that triggered the contract. **It is required if there is a `actions triggered_by: transaction` block in the contract.**

```elixir
condition transaction: [...]
```

There are 2 global variables for this condition block:
1. `contract` is the transaction of the current contract.
1. `transaction` is the transaction that triggered the contract.

See [Action's Appendix 1](/build/smart-contracts/reference/actions#appendix-1-the-transaction-map) for the details of the transaction map.

### Examples

Pass only if the transaction that triggered the contract is a descendant of a specific address:
```elixir 
condition transaction: [
    address: Chain.get_genesis_address() == "00001234ab..."
]
```

Pass only if the transaction that triggered sent 10 UCOs to this contract:
```elixir 
condition transaction: [
    uco_transfers: Map.get(contract.address) == 10
]
```


## Condition oracle

:::danger todo
:::

