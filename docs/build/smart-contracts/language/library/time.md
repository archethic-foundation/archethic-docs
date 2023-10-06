---
id: time
title: Time module
sidebar_label: Time
---

The `Time` module contains functions to deal with time & dates.

### now/0

```elixir
Time.now()  # 1677493444
```

Returns an approximation of current time (seconds since epoch).
**It will always return the same value within a contract.**

:::info Why an approximation?
Because we need the Smart Contracts to be determinist.
Many nodes run them and all of them must produce the same transaction to validate a contract's execution.
:::
