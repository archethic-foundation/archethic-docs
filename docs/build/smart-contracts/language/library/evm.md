---
id: evm
title: Evm module
sidebar_label: Evm
---

The `Evm` module contains functions to deal with encoding/decoding ABI from the Ethereum Virtual Machine.

### abi_encode/2

```elixir
Evm.abi_encode(signature, data)
```

Parameters:

- `signature`: the function or tuple signature (ex: "baz(uint,address)")
- `data`: the data to encode

Encodes the given `data` according to the `signature`.

### abi_decode/2

```elixir
Evm.abi_decode(signature, encoded_data)
```

Parameters:

- `signature`: the function or tuple signature (ex: "baz(uint,address)")
- `encoded_data`: the data to decode

Decodes the given `encoded_data` according to the `signature`.
