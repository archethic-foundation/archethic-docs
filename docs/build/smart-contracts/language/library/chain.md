---
id: chain
title: Chain module
sidebar_label: Chain
---

The `Chain` module contains functions to fetch data from a Transaction Chain.

### get_genesis_address/1 `[I/O]`

```elixir
Chain.get_genesis_address("000012345...") # "000056789..."
Chain.get_genesis_address("000012345...") # "000012345..."
```

Parameters:

- `address` the transaction address

Returns the genesis address of the transaction chain that contains a transaction at `address`. If there is no transaction at `address`, it returns `address`.

### get_first_transaction_address/1 `[I/O]`

```elixir
Chain.get_first_transaction_address("000012345...") # "000056789..."
```

Parameters:

- `address` the transaction address

Returns the address of the first transaction of the transaction chain that contains a transaction at `address`.

:::danger
[IT CURRENTLY CRASH IF THERE IS NO TRANSACTION]
:::

### get_genesis_public_key/1 `[I/O]`

```elixir
Chain.get_genesis_public_key("00013B08D...") # "000108A5C..."
```

Parameters:

- `public_key` the public key

Returns the genesis public key of `public_key`.

### get_burn_address/0

```elixir
Chain.get_burn_address() # "0000000000..."
```

Returns the burn address.

### get_transaction/1  `[I/O]`

```elixir
Chain.get_transaction(0x00ABCD..) # [address: "00ABCD..", content: "...", uco_transfers: [], ...]
```

Parameters:

- `address` the transaction address

Returns the transaction at `address`. If there is no transaction at `address`, it returns `nil`. See [Appendix 1](/build/smart-contracts/language/actions#appendix-1-the-transaction-map).

### get_last_address/1 `[I/O]`

```elixir
Chain.get_last_address(0x00ABCD..) # "00EFAB..."
```

Parameters:

- `address` the transaction address

Returns the latest transaction address of the chain that contains `address`.

### get_last_transaction/1 `[I/O]`

```elixir
Chain.get_last_transaction(0x00ABCD..) # [address: "00EFAB..", content: "...", uco_transfers: [], ...]
Chain.get_last_transaction(0x00ABCF..) # nil
```

Parameters:

- `address` the transaction address

Returns the latest transaction of the chain that contains the transaction at `address`. May return nil if `address` does not exist. See [Appendix 1](/build/smart-contracts/language/actions#appendix-1-the-transaction-map).

### get_previous_address/1

```elixir
Chain.get_previous_address(0x00ABCD..) # "00EFAB.."
Chain.get_previous_address(transaction) # "0014AC.."
```

Parameters:

- `previous_public_key` or `transaction` either a transaction map or a the previous_public_key

Returns previous transaction's address. Usually called with a `transaction`, it is also possible to call it with the `previous_public_key` directly.

### get_balance/1 `[I/O]`

```elixir
balance = Chain.get_balance(0x00ABCD..)
uco_balance = balance.uco # 181812.87
testcoin_balance = Map.get(balance.tokens, [token_address: 0x00ABCD.., token_id: 0]) # 4756.5401
```

Parameters:

- `address` the address of a transaction in the chain you're interested in

Returns the balance of the chain that contains the transaction at `address`.

The return value is a map with two keys `uco` and `tokens`. The value behind `tokens` is a map where the keys are tokens' identifiers (`[token_address: HEX, token_id: POS_INT]`) and the values are floats.

Useful if you need to retrieve the entire list of tokens (and uco) at the same time.

- If you're only interested at UCO, consider [get_uco_balance/1](#get_uco_balance1-io).
- If you're only interested in a specific token, consider [get_token_balance/2](#get_token_balance2-io).
- If you're only interested in a few specific tokens, consider [get_tokens_balance/2](#get_tokens_balance2-io).

### get_uco_balance/1 `[I/O]`

```elixir
Chain.get_uco_balance(0x00ABCD..) # 14.26239
```

Parameters:

- `address` the address of a transaction in the chain you're interested in

Returns the amount of UCO in the chain that contains the transaction at `address`.

### get_token_balance/2 `[I/O]`

Same as [get_token_balance/3](#get_token_balance3-io) called with `token_id: 0`.

### get_token_balance/3 `[I/O]`

```elixir
transaction_address = 0x00ABCD..
fungible_token_address = 0x00BCDE..
non_fungible_token_address = 0x00FEDC..
Chain.get_token_balance(transaction_address, fungible_token_address, 0) # 14.26239591
Chain.get_token_balance(transaction_address, non_fungible_token_address, 1) # 1
Chain.get_token_balance(transaction_address, non_fungible_token_address, 2) # 0
```

Parameters:

- `address` the address of a transaction in the chain you're interested in
- `token_address` the address of the transaction that defined the token
- `token_id` the index of the element in the collection (0 for fungible tokens)

Returns the token balance of the token defined at `token_address` in the chain that contains the transaction at `address`.
Non-fungible tokens must precise the `token_id` (index of the token in the collection).

### get_tokens_balance/1 `[I/O]`

```elixir
balance = Chain.get_tokens_balance(0x00ABCD..)
abdecoin_balance = Map.get(balance, [token_address: 0x00ABDE.., token_id: 0]) # 8.90800012
defacoin_balance = Map.get(balance, [token_address: 0x00DEFA.., token_id: 0]) # 4.05902597
```

Parameters:

- `address` the address of a transaction in the chain you're interested in

Returns a subset of the token balance of the chain that contains the transaction at `address`.
The return value is a map where the keys are the tokens' identifiers: `[token_address: HEX, token_id: POS_INT]` and the value are floats.

Useful if you need to retrieve many tokens at the same time.

- If you're only interested in a specific token, consider  [get_token_balance/2](#get_token_balance2-io).

### get_tokens_balance/2 `[I/O]`

```elixir
balance = Chain.get_tokens_balance(0x00ABCD.., [
  [token_address: 0x00DEFA.., token_id: 1],
  [token_address: 0x00DEFA.., token_id: 2]
])
nft1 = Map.get(balance, [token_address: 0x00DEFA.., token_id: 1]) # 1
nft2 = Map.get(balance, [token_address: 0x00DEFA.., token_id: 2]) # 0
```

Parameters:

- `address` the address of a transaction in the chain you're interested in
- `tokens_identifiers` the list of tokens' identifiers (`[token_address: HEX, token_id: POS_INT]`) to return

Returns a subset of the token balance of the chain that contains the transaction at `address`.
The return value is a map where the keys are the tokens' identifiers: `[token_address: HEX, token_id: POS_INT]` and the value are floats.

Useful if you need to retrieve many tokens at the same time.

- If you're only interested in a specific token, consider [get_token_balance/2](#get_token_balance2-io).
