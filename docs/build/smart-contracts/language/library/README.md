---
id: library
title: Smart Contracts - Library
sidebar_label: Library
sidebar_position: 4
---

The Smart Contract library is composed of many modules with many functions in each.
**Unless it is explicitely written, the functions will not mutate their arguments**:

```elixir
# Don't
sold_items = [1,2,3]
List.concat(sold_items, [4,5,6])

# Do
sold_items = [1,2,3]
sold_items = List.concat(sold_items, [4,5,6])
```

## Function's arity

In this section, the number after the slash indicates the arity of the function (number or arguments).

For example `size/1` means the function `size` has 1 argument.

## Tagged functions

`Transaction`:

Functions tagged as `[Transaction]` are very special:

- They are only available in the `actions` block.
- They mutate an internal state, the "next transaction".
- This "next transaction" is initiated with current contract (all values but transfers are copied)

`I/O`:

Functions tagged as `[I/O]` means they are accessing data outside of the node (inside or outside the blockchain). There is an impact in performance and in fees.

- They are not available in public functions.

## Modules list

- [Chain](/build/smart-contracts/language/library/chain)
- [Code](/build/smart-contracts/language/library/code)
- [Contract](/build/smart-contracts/language/library/contract)
- [Crypto](/build/smart-contracts/language/library/crypto)
- [Evm](/build/smart-contracts/language/library/evm)
- [Http](/build/smart-contracts/language/library/http)
- [Json](/build/smart-contracts/language/library/json)
- [List](/build/smart-contracts/language/library/list)
- [Map](/build/smart-contracts/language/library/map)
- [Math](/build/smart-contracts/language/library/math)
- [Regex](/build/smart-contracts/language/library/regex)
- [State](/build/smart-contracts/language/library/state)
- [String](/build/smart-contracts/language/library/string)
- [Time](/build/smart-contracts/language/library/time)
- [Token](/build/smart-contracts/language/library/token)
