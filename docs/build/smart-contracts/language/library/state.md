---
id: state
title: State module
sidebar_label: State
---

The `State` module contains functions to read or write the current contract's state.

### get/1

Equivalent to [get/2](#get2) with `default: nil`.

:::info
Because a contract always start without state, you should always use  [get/2](#get2) or check for `nil`.
:::

### get/2

```elixir
State.get(key, default)
```

Parameters:

- `key`: the key to read the state from
- `default`: the value returned if there is no key `key` in the state

Returns the state stored at given `key`, or return `default` if the key does not exist.

### set/2

```elixir
State.set(key, value)
```

Parameters:

- `key`: the key to write the state at
- `value`: the value to store

Writes the `value` in the state at key `key`.

:::info
Because the state is a UTXO (unspent ouput) of a transaction, the state can only be persisted if the contract actually produces a transaction.
:::

### delete/1

```elixir
State.delete(key)
```

Parameters:

- `key`: the key to remove

Removes the key `key` from the state.

:::info
Because the state is a UTXO (unspent ouput) of a transaction, the state can only be persisted if the contract actually produces a transaction.
:::
