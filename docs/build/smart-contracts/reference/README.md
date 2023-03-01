---
id: reference
title: Reference
sidebar_label: Reference
sidebar_position: 2
---

A Smart Contract is defined as followed: 

- 1 version attribute
- 1 or many [actions](/build/smart-contracts/reference/actions) block (maximum, one per [trigger](/build/smart-contracts/reference/triggers))
- 1 [condition inherit](/build/smart-contracts/reference/condition#inherit) block
- 0 or 1 [condition transaction](/build/smart-contracts/reference/condition#transaction) block

The `actions` blocks contain the code to execute when a specific event is triggered.

The `condition inherit` block is used to check the resulting transaction of the execution.

The `condition transaction` block is used to check the incoming transaction that triggered the contract.

## Basic Types

This language is based on a functional language (elixir), but we added some imperative twist to it, to make it friendlier!

- Comments are lines that start with a `#`
- Strings are double quoted `"I am a string"`
- String interpolation `"hello #{name}"`
- Integers & Floats can use `_` at your convenience `10_000` `10_000.0`
- Integers & Floats are actually BigInt but this is transparent for you
- Floats can use the scientific format: `1.0e2 == 100` 
- Booleans syntax: `true` / `false`
- The absence of value: `nil`

## Comparaison

We compare by value, which means you can pretty much compare anything and it will work as you expect. 

- `1 == 1.0`
- `[1,2] == [1,2]`
- `[name: "John"] == [name: "John"]`
- `true != false`
- `if <expr> do ... end`
- `if <expr> do ... else ... end`

## Arithmetic

- `1 + 2 == 3`
- `2 - 1 == 1`
- `1 * 2 == 2`
- `1 / 1 == 1.0`
- `div(1, 1) == 1`

## Loop & Ranges

- `for name in names do ... end`
- `for i in 1..10 do ... end`

## Variables & Scopes

```elixir
names = ["Tom", "Jerry", ""]       
text = ""                           
for name in names do                # ENTER SCOPE 1
    if name != "" do                # ENTER SCOPE 2
        new_line = "\n"             
        text = "#{name}#{new_line}" 
    end                             # EXIT SCOPE 2
end                                 # EXIT SCOPE 1
```

Here's the tree of scopes and variables for the above example:
```
[SCOPE 0]
├── names
├── text
└── [SCOPE 1]
    ├── name
    └── [SCOPE 2]
        └── new_line
```

There are many things to note from this example:
- Variables are mutable
- There is a new scope for every `do...end` block
- Scopes can access (read/write) parent scope's variables


## Lists

The list is the data structure to work with collections. The syntax is: `[1, 2]`. An empty list is: `[]`.
There is a [List module](/build/smart-contracts/reference/library#list) in the library to manipulate lists.

:::info
Lists are actually [Linked Lists](https://en.wikipedia.org/wiki/Linked_list).
:::

## Maps

The map is the key-value data structure in the Smart Contract language. The syntax is: `[key1: 1, key2: 2]` or if key starts with a number: `["00001abc...": 1]`. The keys must be strings.
There is a [Map module](/build/smart-contracts/reference/library#map) module in the library to manipulate maps.

:::note
Since the maps and the lists have a very close syntax, it is impossible to differentiate an empty map from an empty list. So, for semantic reasons, to create an empty map, use the `Map.new()` function call.
:::

:::tip
The brackets are mostly optional! `key1: 1, key2: 2` will work as well. But if you have a nested map, you cannot omit them!
:::

## Library

You may use any functions from the library. The syntax is `Module.function(arg1, arg2)`.

:::tip
The parenthesis are actually optional! `Module.function arg1, arg2` will work as well.
:::

To see the list of functions available in the Smart Contract Language, check the [Library page](/build/smart-contracts/reference/library).