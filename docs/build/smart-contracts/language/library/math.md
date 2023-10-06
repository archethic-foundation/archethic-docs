---
id: math
title: Math module
sidebar_label: Math
---

The `Math` module contains mathematical functions.

### pow/2

```elixir
Math.pow(2, 3)
# 8
Math.pow(1.7, 8)
# 69.75757441
```

Parameters:

- `number` the number to apply the power
- `exponent` the exponent of the power

Returns the result of the power of number by exponent.

### trunc/1

```elixir
Math.trunc(8.32)
# 8
```

Parameters:

- `number` the number to truncate

Returns the truncated number as an integer.

### sqrt/1

```elixir
Math.sqrt(16)
# 4
Math.sqrt(12.5)
# 3.53553390
```

Parameters:

- `number` the number to calculate the square root

Returns the square root if the number.

### rem/2

```elixir
Math.rem(2.1, 3)
# 2.1
Math.rem(10, 3)
# 1
Math.rem(-10, 3)
# -1
Math.rem(10.2, 1)
# 0.2
```

Parameters:

- `dividend` the number to divid
- `divisor` the number which divid

Returns the remainder (modulo) of a division.
