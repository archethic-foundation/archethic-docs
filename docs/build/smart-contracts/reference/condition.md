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


## Condition transaction

The `condition transaction` purpose is to check the transaction that triggered the contract. **It is required if there is a `actions triggered_by: transaction` block in the contract.**

```elixir
condition transaction: [...]
```

There are 2 global variables for this condition block:
1. `contract` is the transaction of the current contract.
1. `transaction` is the transaction that triggered the contract.

See [Action's Appendix 1](/build/smart-contracts/reference/actions#appendix-1-the-transaction-map) for the details of the transaction map.

## Condition oracle

:::danger todo
:::

