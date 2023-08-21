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

:::note function/arity
In this page, the number after the slash indicates the arity of the function (number or arguments).

For example `size/1` means the function `size` has 1 argument.
:::

## String

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
String.to_hex("ZZZ") # nil
```

Parameters:
- `str` the string

Return the text representation of hexadecimal `str` or `nil`.

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

---------

## Map

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

```
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

---------

## List

Lists are actually [Linked List](https://en.wikipedia.org/wiki/Linked_list).

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

---------

## Regex

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

---------

## Json

Functions to manipulate JSON strings.

Useful resources:
- [JSONPath documentation](https://goessner.net/articles/JsonPath/)

### path_extract/2

```elixir
Json.path_extract("{ \"firstName\": \"John\", \"lastName\": \"Doe\"}", "$.firstName") # "John"
```

Parameters:
- `json` the json string
- `path` the path

Returns the data at `path` in `json`.

### path_match?/2

```elixir
Json.path_match?("{\"1622541930\":{\"uco\":{\"eur\":0.176922,\"usd\":0.21642}}}", "$.*.uco.usd") # true
Json.path_match?("{\"1622541930\":{\"uco\":{\"eur\":0.176922,\"usd\":0.21642}}}", "$.*.uco.aud") # false
```

Parameters:
- `json` the json string
- `path` the path

Returns if there is a value at `path` in `json`.

### to_string/1

```elixir
Json.to_string(1)           # "1"
Json.to_string("str")       # "\"str\""
Json.to_string([1,2,3])     # "[1,2,3]"
Json.to_string(foo: "bar")  # "{\"foo\":\"bar\"}"
```
Parameters:
- `any` anything

Returns the Json representation of `any`.

### parse/1

```elixir
Json.parse("1")                     # "1"
Json.parse("\"str\"")               # "str"
Json.parse("[1,2,3]")               # [1,2,3]
Json.parse("{\"foo\":\"bar\"}")     # foo: "bar"
```
Parameters:
- `json` the json string

Returns the value represented by `json`.

### is_valid?/1

```elixir
Json.is_valid?("str")        # false
Json.is_valid?("\"str\"")    # true
```
Parameters:
- `json` the json string

Returns whether the string is valid JSON or not.

---------

## Time

### now/0

```elixir
Time.now()  # 1677493444
```

Returns an approximation of current time (seconds since epoch).
**It will always return the same value within a contract.**

:::info Why an approximation?
Because we need the smart contracts to be determinist.
Many nodes will run them and all of them must produce the same transaction to validate a contract's execution.
:::

---------

## Chain

### get_genesis_address/1

```elixir
Chain.get_genesis_address("000012345...") # "000056789..."
Chain.get_genesis_address("000012345...") # "000012345..."
```

Parameters:
- `address` the transaction address

Returns the genesis address of the transaction chain that contains a transaction at `address`. If there is no transaction at `address`, it returns `address`.

### get_first_transaction_address/1

```elixir
Chain.get_first_transaction_address("000012345...") # "000056789..."
```

Parameters:
- `address` the transaction address

Returns the address of the first transaction of the transaction chain that contains a transaction at `address`.

:::danger
[IT CURRENTLY CRASH IF THERE IS NO TRANSACTION]
:::

### get_genesis_public_key/1

```elixir
Chain.get_genesis_public_key("00013B08D...") # "000108A5C..."
```

Parameters:
- `public_key` the public key

Returns the genesis public key of `public_key`.

---------

## Crypto

### hash/1

Equivalent to [hash/2](#hash2) with the second argument "sha256".

### hash/2

```elixir
Crypto.hash("my text", "sha256") # "7330D2B39CA35EA..."
Crypto.hash("my text", "sha512") # "A3D7E45A0D9BE5F..."
```

Parameters:
- `str` the text to hash
- `algo` the hash algorithm ("sha256", "sha512", "sha3_256", "sha3_512", "blake2b")

Returns the hash of `str` by using `algo` algorithm.

---------

## Token

### fetch_id_from_address/2

```elixir
Token.fetch_id_from_address("000012345") # "3C21EF708BF11B4232..."
```

Parameters:
- `address` the token address

Returns the token's id of the token at `address`.

---------

## Http

### fetch/1

```elixir
response = Http.fetch("https://fakerapi.it/api/v1/addresses?_quantity=1&_seed=watermelon") # [status: 200, body: "..."]
if response.status == 200 do
    # do something with response.body
end
```

Parameters:
- `url` the url to fetch

Fetch the given url (with a `GET`) and returns a map with `status` (integer) and `body` (string).
This status integer can be any [HTTP status code](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status).

- The URL must use HTTPS protocol.
- The response body's size must be less than 256KB.
- The response must be received in less than 2 seconds.
- The response must be idempotent (= identical every time it is called)
- Only 1 call of either `fetch/1` or `fetch_many/1` is allowed per execution.

:::caution
The function raises if these requirements are not meet.
:::


### fetch_many/1

```elixir
responses = Http.fetch_many([
    "https://fakerapi.it/api/v1/users?_quantity=1&_gender=male&_seed=cucumber",
    "https://fakerapi.it/api/v1/users?_quantity=1&_gender=female&_seed=tomato"
])
for r in responses do
    if r.status == 200 do
        # do something with r.body
    end
end
```

Parameters:
- `urls` a list of urls to fetch

Fetch the given urls **in parallel** and returns a list of map with `status` (integer) and `body` (string). Order and length is preserved.
This status integer can be any [HTTP status code](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status).

- The URLs must use HTTPS protocol.
- The sum of response bodies' size must not be bigger than 256KB.
- The responses must be received in less than 2 seconds.
- The responses must be idempotent (= identical every time it is called)
- Only 1 call of either `fetch/1` or `fetch_many/1` is allowed per execution.
- The URLs are limited to 5.

:::caution
The function raises if these requirements are not meet.
:::

---------

## Contract

This module is special in many ways.

- It is only available in the `actions` block.
- All functions mutates an internal state. We call this internal state the "next transaction".
- This "next transaction" is initiated with current contract (all values but transfers are copied)

### set_type/1

```elixir
Contract.set_type("transfer")
```

Parameters:
- `type` the transaction type ("contract", "transfer", "data", "hosting")

**Mutates** the next transaction to be of type `type`.

### set_content/1

```elixir
Contract.set_content("Hello Smart Contract")
```

Parameters:
- `content` the transaction's content (we usually use this as the state of the smart contract)

**Mutates** the next transaction content to be `content`.

:::tip
While `content` is always a string when you read it, it is possible here to send an integer or a float for convenience.
For any other data structure, you should serialize it with the [Json module](/build/smart-contracts/language/library#json) for example.
:::

### set_code/1

```elixir
Contract.set_code("@version 1\ncondition inherit: []")
```

Parameters:
- `code` the code

**Mutates** the next transaction code to be `code`.

:::tip
This example "closes" the contract, by adding an `condition inherit` that doesn't accept anything. It will be impossible to create a new transaction in this chain.
:::

### add_uco_transfer/1

```elixir
Contract.add_uco_transfer(to: "000012345...", amount: 1)
```

Parameters:
- `uco_transfer` a map with two keys:
    - `to`: the destination address
    - `amount`: the number of UCO

**Mutates** the next transaction to add the `uco_transfer`.

### add_uco_transfers/1

Equivalent to call [add_uco_transfer/1](#add_uco_transfer1) for each element of the list

### add_token_transfer/1

```elixir
Contract.add_token_transfer(
    to: "000012345...",
    amount: 1.2,
    token_address: "000023456...")
Contract.add_token_transfer(
    to: "000012345...",
    amount: 1.2,
    token_id: 4,
    token_address: "000023456...")
```

Parameters:
- `token_transfer` a map with three or four keys:
    - `to`: the destination address
    - `amount`: the number of UCO
    - `token_address`: the transaction address of the token
    - `[token_id]`: an optional integer to specify which index in the list (used for the NFTs)

**Mutates** the next transaction to add the `token_transfer`.

### add_token_transfers/1

Equivalent to call [add_token_transfer/1](#add_token_transfer1) for each element of the list

### add_ownership/1

```elixir
Contract.add_ownership(
    secret: "ENCODED_SECRET1",
    authorized_public_keys: ["000108A5C..."],
    secret_key: "___")
```

Parameters:
- `ownership` a map with three keys:
    - `secret`: the encoded secret
    - `authorized_public_keys`: the list of public keys that may decode the secret
    - `secret_key`: the secret key used to encode the secret

**Mutates** the next transaction to add the `ownership`.

:::danger
[PROBABLY REQUIRE AN EXAMPLE OR A BETTER EXPLANATION]
:::

### add_ownerships/1

Equivalent to call [add_ownership/1](#add_ownership1) for each element of the list

### add_recipient/1

```elixir
Contract.add_recipient("000012345...")
```

Parameters:
- `address`: a transaction address (one with a smart contract)

**Mutates** the next transaction to add the `address` in the recipients.

:::info
Recipients are used to trigger smart contracts
:::

### add_recipients/1

Equivalent to call [add_recipients/1](#add_recipient1) for each element of the list
