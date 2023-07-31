---
id: language
title: Smart Contracts - Language
sidebar_label: Language
sidebar_position: 2
---

A Smart Contract is defined as followed: 

- 1 version attribute
- 1 or many [actions](/build/smart-contracts/language/actions) block (maximum, one per [trigger](/build/smart-contracts/language/triggers))
- 0 or 1 [condition inherit](/build/smart-contracts/language/condition#inherit) block
- 0 or 1 [condition transaction](/build/smart-contracts/language/condition#transaction) block
- 0 or 1 [condition oracle](/build/smart-contracts/language/condition#oracle) block

The `actions` blocks contain the code to execute when a specific event is triggered.

The `condition inherit` block is used to check the outgoing transaction (result) of the contract.

The `condition transaction` block is used to check the incoming transaction that triggered the contract.

## Version attribute

A version attribute must be specified on the first line of the code. This version is used by the interpreter to have the right behavior in case of breaking changes.

```elixir
@version 1
# Rest of the code
```

## Basic Types

This language is based on a functional language (elixir), but we added some imperative twist to it, to make it friendlier!

- Comments are lines that start with a `#`
- Strings are double quoted `"I am a string"`
- String interpolation `"hello #{name}"`
- Integers & Floats can use `_` at your convenience `10_000` `10_000.0`
- Floats can use the scientific format: `1.0e2 == 100` 
- Booleans syntax: `true` / `false`
- The absence of value: `nil`

## Hexadecimals

In the Archethic blockchain, we extensively uses hexadecimals to convert all addresses, public keys or hashes on the user-facing interfaces. A Smart Contract is one of these interfaces.

To reduce the possibility of errors when comparing hexadecimals (`"000ABCD" != "000abcd"` even if it's actually the same value), we introduced a new syntax: `0x`. The goal of this syntax is only to facilitate comparaison: `0x000ABCD == 0x000abcd`.

```elixir
# don't 
transaction.address == "000ABCD123"

# do 
transaction.address == 0x000ABCD123 # no quotes!
```

So whenever you write a hexadecimal value by hand, prefix it with `0x`.

### ASCII character in string

If you need to use some specific character in a string, you can use their hexadecimal representation by prefixing the hexadecimal with `\x`

```elixir
"hello" == "\x68\x65\x6C\x6C\x6F"
# true
```

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
- `2.0 - 1.1 == 0.9`
- `1 * 2.0 == 2`
- `1 / 1 == 1.0`
- `1 / 0` contract failure

:::info
The arithmetic is done with the [Decimal library](https://github.com/ericmj/decimal) to ensure there is no floating point precision issue.
**The only thing to keep in mind is that we truncate at decimal 8.**
:::

## Ranges

- `1..5` is equivalent to `[1,2,3,4,5]`

## Loop

- `for name in names do ... end`
- `for i in 1..10 do ... end`

## Variables & Scopes

Variables are not typed, you can assign any value to them.

Variables are mutable, if you update a variable declared in a parent scope, it will also update the value of this variable for the parent scope.

A new scope is created every time you enter a new block (`do .. end`). A scope can access (read/write) the variables declared in its parent's scope, but not its child's scope.

```elixir
names = ["Tom", "Jerry", ""]       
text = ""                           
for name in names do                # ENTER SCOPE 1
    if name != "" do                # ENTER SCOPE 1.1
        new_line = "\n"             
        text = "#{name}#{new_line}" 
    end                             # EXIT SCOPE 1.1
    # new_line does not exists here
end                                 # EXIT SCOPE 1
# test = "Tom\nJerry\n"
# name and new_line does not exists here
```

Here's the tree of scopes and variables for the above example:
```
[SCOPE 0]
├── names
├── text
└── [SCOPE 1]
    ├── name
    └── [SCOPE 1.1]
        └── new_line
```

## Lists

The list is the data structure to work with collections. The syntax is: `[1, 2]`. An empty list is: `[]`.
There is a [List module](/build/smart-contracts/language/library#list) in the library to manipulate lists.

:::info
Lists are actually [Linked Lists](https://en.wikipedia.org/wiki/Linked_list).
:::

## Maps

The map is the key-value data structure in the Smart Contract language. The syntax is: `[key1: 1, key2: 2]` or if key starts with a number: `["00001abc...": 1]`. The keys must be strings.
There is 3 ways to retrieve a value:
- `map.property`
- `map["property"]`
- `Map.get(map, "property")`

We suggest to use the 1st syntax as often as possible. Use the 2nd or 3rd when dealing with dynamic properties.

There is a [Map module](/build/smart-contracts/language/library#map) module in the library to manipulate maps.

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

To see the list of functions available in the Smart Contract Language, check the [Library page](/build/smart-contracts/language/library).


## Reserved keywords

... to be completed
