---
id: regex
title: Regex module
sidebar_label: Regex
---

The `Regex` module contains functions to extract data from strings via Regular Expressions.

### extract/2

```elixir
Regex.extract("123456abc", "[0-9]+")    # "123456"
Regex.extract("voodoo", "[abc]")        # ""
```

Parameters:

- `text` the list
- `pattern` the element

Returns the data from `text` extract via the regex `pattern`.

### match?/2

```elixir
Regex.match?("123456", "^[0-9]+$")      # true
Regex.match?("123456abc", "^[0-9]+$")   # false
```

Parameters:

- `text` the list
- `pattern` the element

Returns whether the `pattern` matches the `text` or not.

### scan/2

```elixir
Regex.scan("foo", "bar")                                    # []
Regex.scan("toto,123\ntutu,456\n", "toto,([0-9]+)")         # ["123"]
Regex.scan("toto,123\ntutu,456\n", "t.t.,([0-9]+)")         # ["123", "456"]
Regex.scan("A0B1C2,123\nD3E4F5,456\n", "^(\\w+),(\\d+)$")   # [["A0B1C2", "123"], ["D3E4F5", "456"]]

```

Parameters:

- `text` the list
- `pattern` the element

Returns the data from `text` extract via the regex `pattern`.

:::note
This function requires the usage of capture groups (subexpressions).
:::
