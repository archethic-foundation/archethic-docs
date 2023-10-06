---
id: list
title: List module
sidebar_label: List
---

The `List` module contains functions to deal with lists. Lists are actually [Linked List](https://en.wikipedia.org/wiki/Linked_list).

### at/2

```elixir
List.at(["a", "b", "c"], 0)     # "a"
List.at(["a", "b", "c"], 1)     # "b"
List.at(["a", "b", "c"], 2)     # "c"
List.at([], 0)                  # nil
```

Parameters:

- `list` the list
- `index` the index (zero-based)

Returns the element at `index` in `list`.

### size/1

```elixir
List.size([])           # 0
List.size([1,2,3,4])    # 4
```

Parameters:

- `list` the list

Returns the number of keys in `list`.

### in?/2

```elixir
List.in?(["bob", "alice"], "alice") # true
List.in?(["bob", "alice"], "fred")  # false
```

Parameters:

- `list` the haystack
- `element` the needle

Returns whether the `needle` is in the `haystack`.

### empty?/1

```elixir
List.empty?([])         # true
List.empty?(["apple"])  # false
```

Parameters:

- `list` the list

Returns whether the `list` is empty or not.

### concat/2

```elixir
List.concat([], [])         # []
List.concat([1,2], [3,4])   # [1,2,3,4]
```

Parameters:

- `list1` a list
- `list2` another list

Returns a new list where `list2` is concatenated to `list1`.

### append/2

```elixir
List.append([], 1)    # [1]
List.append([1], 2)   # [1,2]
```

Parameters:

- `list` the list
- `element` the element

Returns a new list where `element` is appended to the end of `list`.

:::tip
If order doesn't matter, we suggest to use `prepend/2` instead (Complexity: O(1) instead of O(n)).
:::

### prepend/2

```elixir
List.prepend([], 1)    # [1]
List.prepend([1], 0)   # [0,1]
```

Parameters:

- `list` the list
- `element` the element

Returns a new list where `element` is appended to the start of `list`.

### join/2

```elixir
List.join([], ", ")    # ""
List.join(["Mike", "Robert", "Joe"], ", ")   # "Mike, Robert, Joe"
```

Parameters:

- `list` the list of strings
- `separator` the separator

Returns a string where all `list`'s elements have been joined with `separator` separator.
