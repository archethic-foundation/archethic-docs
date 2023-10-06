---
id: code
title: Code module
sidebar_label: Code
---

The `Code` module contains functions that deal with strings of code.

### is_same?/2

```elixir
code = """
@version

condition triggered_by: transaction, as: []

actions triggered_by: transaction do
  Contract.add_uco_transfer to: 0x1234, amount: 15.5
end
"""

Code.is_same?(code, transaction.code)
```

Parameters:

- `first_code` a string containing a smart contract code
- `second_code` a string containing a smart contract code

Return true if codes are the same, false otherwise.
This function is more accurate than comparing two strings, as it convert code into structured AST and compare only code instruction and not line numbers, carriage return ...

### is_valid?/1

```elixir
code = """
@version

condition triggered_by: transaction, as: []

actions triggered_by: transaction do
  Contract.add_uco_transfer to: 0x1234, amount: 15.5
end
"""

Code.is_valid?(code)
```

Parameters:

- `code` a string containing a smart contract code

Returns true if the code is valid according to Archethic smart contracts language, false otherwise
