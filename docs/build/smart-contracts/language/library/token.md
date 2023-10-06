---
id: token
title: Token module
sidebar_label: Token
---

The `Token` module contains functions that deal with tokens.

### fetch_id_from_address/1 `[I/O]` (DEPRECATED)

```elixir
Token.fetch_id_from_address("000012345") # "3C21EF708BF11B4232..."
```

Parameters:

- `address` the token address

Returns the token's id of the token at `address`.
