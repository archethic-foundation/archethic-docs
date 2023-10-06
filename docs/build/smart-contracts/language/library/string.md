---
id: string
title: String module
sidebar_label: String
---

The `String` module contains functions to manipulate strings of text.

### size/1

```elixir
String.size("hello")   # 5
String.size("你好")     # 2
```

Parameters:

- `str` the string

Returns the number of characters in `str`.

### in?/2

```elixir
String.in?("bob,alice,julia", "alice")  # true
String.in?("bob,alice,julia", "fred")   # false
```

Parameters:

- `str1` the haystack
- `str2` the needle

Returns whether the `needle` is in the `haystack`.

### to_number/1

```elixir
String.to_number("12")     # 12
String.to_number("-12")    # -12
String.to_number("12.1")   # 12.1
```

Parameters:

- `str` the string

Returns the number which text representation is `str`.

### from_number/1

```elixir
String.from_number(13)     # "13"
String.from_number(13.2)   # "13.2"
```

Parameters:

- `number` the number

Returns the text representation of `number`.

### to_hex/1

```elixir
String.to_hex("592ac76afa") # "592AC76AFA"
String.to_hex("592AC76AFA") # "592AC76AFA"
String.to_hex("hello") # "68656C6C6F"
```

Parameters:

- `str` the string

Return the text representation of hexadecimal `str`.
If `str` is already an hex it just uppercase it

### to_uppercase/1

```elixir
String.to_uppercase("Arsène Lupin") # "ARSÈNE LUPIN"
```

Parameters:

- `str` the string

Return the `str` in uppercase.

### to_lowercase/1

```elixir
String.to_lowercase("Sherlock Holmes") # "sherlock holmes"
```

Parameters:

- `str` the string

Return the `str` in lowercase.
