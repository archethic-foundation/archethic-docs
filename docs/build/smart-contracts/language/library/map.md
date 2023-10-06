---
id: map
title: Map module
sidebar_label: Map
---

The `Map` module contains functions to manipulate maps (dicts). The keys and values can be of any type.

### new/0

```elixir
Map.new() # empty map
```

Returns an empty map. There is no shorthand notation.

### size/1

```elixir
Map.size(key1: "value", key2: "value2") # 2
```

Parameters:

- `map` the map

Returns the number of keys in `map`.

### get/2

```elixir
Map.get([key1: "value", key2: "value2"], "key1") # "value"
Map.get([key1: "value", key2: "value2"], "key3") # nil
```

Parameters:

- `map` the map
- `key` the key

Returns the value at `key` in `map` or `nil` if `key` is not in the `map`.

:::tip
There is a shorthand notation `map.key` when key is not a variable.
:::

### get/3

```elixir
Map.get([key1: "value", key2: "value2"], "key1", "not in map") # "value"
Map.get([key1: "value", key2: "value2"], "key3", "not in map") # "not in map"
```

Parameters:

- `map` the map
- `key` the key
- `default` the default value

Returns the value at `key` in `map` or `default` if `key` is not in the `map`.

### set/3

```elixir
Map.set([key1: "value", key2: "value2"], "key1", "valueX") # [key1: "valueX", key2: "value2"]
Map.get([key1: "value", key2: "value2"], "key3", "value3") # [key1: "value", key2: "value2, key3: "value3"]
```

Parameters:

- `map` the map
- `key` the key
- `value` the value to set

Returns a copy of `map` where the value at `key` is `value`.

### keys/1

```elixir
Map.keys(key1: "value", key2: "value2") # ["key1", "key2"]
```

Parameters:

- `map` the map

Returns the list of keys in `map`.

:::tip
Use it with a `for loop` to iterate on a map!

```elixir
for key in Map.keys(map) do
    ...
    value = map[key]
    ...
end
```

:::

### values/1

```elixir
Map.values(key1: "value", key2: "value2") # ["value", "value2"]
```

Parameters:

- `map` the map

Returns the list of values in `map`.

### delete/2

```elixir
Map.delete([key1: "value", key2: "value2"], "key2") # [key1: "value"]
```

Parameters:

- `map` the map
- `key` the key to remove

Returns a copy of the `map` without the value at given `key`.
