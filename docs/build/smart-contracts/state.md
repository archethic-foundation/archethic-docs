---
id: state
title: Smart Contracts - State
sidebar_label: State
sidebar_position: 3
---

A Smart Contract's state is persisted as an UTXO (unspent output) of the resulting transaction. Because of this, any state modification will result in a new transaction on the Smart Contract's transaction chain.

A state is a map with string as keys. You cannot access that map directly, instead, you have to use the module [State](/build/smart-contracts/language/library/state) that provides the functions to read and write the state.

When a contract is deployed, **it cannot have a state**. There is no initial state. So it's always good to deal with this case by using [State.get/2](/build/smart-contracts/language/library/state#get2) where you provide a default value. Here's an example to give you an idea:

> Counter example

```elixir
@version 1

condition triggered_by: transaction, as: []
actions triggered_by: transaction do
  # Retrieve the count from previous contract's transaction or default to 0
  count = State.get("count", 0)

  # Increment the count
  new_count = count + 1

  # Write the new value in the state
  State.set("count", new_count)
end
```
