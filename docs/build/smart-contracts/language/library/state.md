---
id: state
title: State module
sidebar_label: State
---

The `State` module contains functions to read or write the current contract's state.

### get/1

Equivalent to [get/2](#get2) with `default: nil`.

:::info
Because a contract always start without state, you should always use [get/2](#get2) or check for `nil`.
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

### delete/1

```elixir
State.delete(key)
```

Parameters:

- `key`: the key to remove

Removes the key `key` from the state.

:::info
A Smart Contract's state is persisted as an UTXO (unspent output) of the resulting transaction. Because of this, any state modification will result in a new transaction on the Smart Contract's transaction chain.
:::
