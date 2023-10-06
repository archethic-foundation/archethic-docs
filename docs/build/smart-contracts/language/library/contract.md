---
id: contract
title: Contract module
sidebar_label: Contract
---

The `Contract` module contains functions that deals with current and other contracts.

### call_function/3 `[I/O]`

```elixir
Contract.call_function(0x0000ABCD..., "add", [1, 2])
```

Parameters:

- `contract_address` the contract's adddress
- `function_name` the function name
- `args` the list of arguments to call the function with

Calls the exported function `function_name` of the Smart Contract at `contract_address` with given `args` and return the result value.

### set_type/1 `[Transaction]`

```elixir
Contract.set_type("transfer")
```

Parameters:

- `type` the transaction type ("contract", "transfer", "data", "hosting")

**Mutates** the next transaction to be of type `type`.

### set_content/1 `[Transaction]`

```elixir
Contract.set_content("Hello Smart Contract")
```

Parameters:

- `content` the transaction's content (we usually use this as the state of the smart contract)

**Mutates** the next transaction content to be `content`.

:::tip
While `content` is always a string when you read it, it is possible here to send an integer or a float for convenience.
For any other data structure, you should serialize it with the [Json module](/build/smart-contracts/language/library#json) for example.
:::

### set_code/1 `[Transaction]`

```elixir
Contract.set_code("@version 1\ncondition inherit: []")
```

Parameters:

- `code` the code

**Mutates** the next transaction code to be `code`.

:::tip
This example "closes" the contract, by adding an `condition inherit` that doesn't accept anything. It will be impossible to create a new transaction in this chain.
:::

### add_uco_transfer/1 `[Transaction]`

```elixir
Contract.add_uco_transfer(to: "000012345...", amount: 1)
```

Parameters:

- `uco_transfer` a map with two keys:
  - `to`: the destination address
  - `amount`: the number of UCO

**Mutates** the next transaction to add the `uco_transfer`.

### add_uco_transfers/1 `[Transaction]`

Equivalent to call [add_uco_transfer/1](#add_uco_transfer1-transaction) for each element of the list

### add_token_transfer/1 `[Transaction]`

```elixir
Contract.add_token_transfer(
    to: "000012345...",
    amount: 1.2,
    token_address: "000023456...")
Contract.add_token_transfer(
    to: "000012345...",
    amount: 1.2,
    token_id: 4,
    token_address: "000023456...")
```

Parameters:

- `token_transfer` a map with three or four keys:
  - `to`: the destination address
  - `amount`: the number of UCO
  - `token_address`: the transaction address of the token
  - `[token_id]`: an optional integer to specify which index in the list (used for the NFTs)

**Mutates** the next transaction to add the `token_transfer`.

### add_token_transfers/1 `[Transaction]`

Equivalent to call [add_token_transfer/1](#add_token_transfer1-transaction) for each element of the list

### add_ownership/1 `[Transaction]`

```elixir
authorized_keys = Map.new()
authorized_keys = Map.set(authorized_keys, public_key, encoded_secret_key)
Contract.add_ownership(
    secret: "ENCODED_SECRET1",
    authorized_keys: authorized_keys
)
```

Parameters:

- `ownership` a map with two keys:
  - `secret`: the encoded secret
  - `authorized_keys`: a map where the keys are the `public_keys` and the values are the `encoded_secret_keys` (the keys to decode the secret encoded by each `public_key`)

:::info
It is the developer's job to encode the secret & the secret key for each authorized key.
:::

**Mutates** the next transaction to add the `ownership`.

### add_ownerships/1 `[Transaction]`

Equivalent to call [add_ownership/1](#add_ownership1-transaction) for each element of the list

### add_recipient/1 `[Transaction]`

```elixir
Contract.add_recipient("000012345...")
```

Parameters:

- `address`: a transaction address (one with a smart contract)

**Mutates** the next transaction to add the `address` in the recipients.

:::info
Recipients are used to trigger smart contracts
:::

### add_recipients/1 `[Transaction]`

Equivalent to call [add_recipients/1](#add_recipient1-transaction) for each element of the list
