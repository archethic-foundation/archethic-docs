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

:::info Tagged functions

Functions are tagged as `[Transaction]` are special:

- They are only available in the `actions` block.
- They mutate an internal state, the "next transaction".
- This "next transaction" is initiated with current contract (all values but transfers are copied)

Other functions are tagged as `[I/O]` and help to fetch data making network calls by either:

- requesting Archethic
- requesting the outside world

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

### delete/2

```elixir
Map.delete([key1: "value", key2: "value2"], "key2") # [key1: "value"]
```

Parameters:

- `map` the map
- `key` the key to remove

Returns a copy of the `map` without the value at given `key`.

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

### get_genesis_address/1 `[I/O]`

```elixir
Chain.get_genesis_address("000012345...") # "000056789..."
Chain.get_genesis_address("000012345...") # "000012345..."
```

Parameters:

- `address` the transaction address

Returns the genesis address of the transaction chain that contains a transaction at `address`. If there is no transaction at `address`, it returns `address`.

### get_first_transaction_address/1 `[I/O]`

```elixir
Chain.get_first_transaction_address("000012345...") # "000056789..."
```

Parameters:

- `address` the transaction address

Returns the address of the first transaction of the transaction chain that contains a transaction at `address`.

:::danger
[IT CURRENTLY CRASH IF THERE IS NO TRANSACTION]
:::

### get_genesis_public_key/1 `[I/O]`

```elixir
Chain.get_genesis_public_key("00013B08D...") # "000108A5C..."
```

Parameters:

- `public_key` the public key

Returns the genesis public key of `public_key`.

### get_burn_address/0

```elixir
Chain.get_burn_address() # "0000000000..."
```

Returns the burn address

### get_transaction/1  `[I/O]`

```elixir
Chain.get_transaction(0x00ABCD..) # [address: "00ABCD..", content: "...", uco_transfers: [], ...]
```

Parameters:

- `address` the transaction address

Returns the transaction at `address`. If there is no transaction at `address`, it returns `nil`. See [Appendix 1](/build/smart-contracts/language/actions#appendix-1-the-transaction-map).

### get_last_address/1 `[I/O]`

```elixir
Chain.get_last_address(0x00ABCD..) # "00EFAB..."
```

Parameters:

- `address` the transaction address

Returns the latest transaction address of the chain that contains `address`.

### get_last_transaction/1 `[I/O]`

```elixir
Chain.get_last_transaction(0x00ABCD..) # [address: "00EFAB..", content: "...", uco_transfers: [], ...]
Chain.get_last_transaction(0x00ABCF..) # nil
```

Parameters:

- `address` the transaction address

Returns the latest transaction of the chain that contains the transaction at `address`. May return nil if `address` does not exist. See [Appendix 1](/build/smart-contracts/language/actions#appendix-1-the-transaction-map).

### get_previous_address/1

```elixir
Chain.get_previous_address(0x00ABCD..) # "00EFAB.."
Chain.get_previous_address(transaction) # "0014AC.."
```

Parameters:

- `previous_public_key` or `transaction` either a transaction map or a the previous_public_key

Returns previous transaction's address. Usually called with a `transaction`, it is also possible to call it with the `previous_public_key` directly.

### get_balance/1 `[I/O]`

```elixir
balance = Chain.get_balance(0x00ABCD..)
uco_balance = balance.uco # 181812.87
testcoin_balance = Map.get(balance.tokens, [token_address: 0x00ABCD.., token_id: 0]) # 4756.5401
```

Parameters:

- `address` the address of a transaction in the chain you're interested in

Returns the balance of the chain that contains the transaction at `address`.

The return value is a map with two keys `uco` and `tokens`. The value behind `tokens` is a map where the keys are tokens' identifiers (`[token_address: HEX, token_id: POS_INT]`) and the values are floats.

Useful if you need to retrieve the entire list of tokens (and uco) at the same time.

- If you're only interested at UCO, consider [get_uco_balance/1](#get_uco_balance1-io).
- If you're only interested in a specific token, consider [get_token_balance/2](#get_token_balance2-io).
- If you're only interested in a few specific tokens, consider [get_tokens_balance/2](#get_tokens_balance2-io).

### get_uco_balance/1 `[I/O]`

```elixir
Chain.get_uco_balance(0x00ABCD..) # 14.26239
```

Parameters:

- `address` the address of a transaction in the chain you're interested in

Returns the amount of UCO in the chain that contains the transaction at `address`.

### get_token_balance/2 `[I/O]`

Same as [get_token_balance/3](#get_token_balance3-io) called with `token_id: 0`.

### get_token_balance/3 `[I/O]`

```elixir
transaction_address = 0x00ABCD..
fungible_token_address = 0x00BCDE..
non_fungible_token_address = 0x00FEDC..
Chain.get_token_balance(transaction_address, fungible_token_address, 0) # 14.26239591
Chain.get_token_balance(transaction_address, non_fungible_token_address, 1) # 1
Chain.get_token_balance(transaction_address, non_fungible_token_address, 2) # 0
```

Parameters:

- `address` the address of a transaction in the chain you're interested in
- `token_address` the address of the transaction that defined the token
- `token_id` the index of the element in the collection (0 for fungible tokens)

Returns the token balance of the token defined at `token_address` in the chain that contains the transaction at `address`.
Non-fungible tokens must precise the `token_id` (index of the token in the collection).

### get_tokens_balance/1 `[I/O]`

```elixir
balance = Chain.get_tokens_balance(0x00ABCD..)
abdecoin_balance = Map.get(balance, [token_address: 0x00ABDE.., token_id: 0]) # 8.90800012
defacoin_balance = Map.get(balance, [token_address: 0x00DEFA.., token_id: 0]) # 4.05902597
```

Parameters:

- `address` the address of a transaction in the chain you're interested in

Returns a subset of the token balance of the chain that contains the transaction at `address`.
The return value is a map where the keys are the tokens' identifiers: `[token_address: HEX, token_id: POS_INT]` and the value are floats.

Useful if you need to retrieve many tokens at the same time.

- If you're only interested in a specific token, consider  [get_token_balance/2](#get_token_balance2-io).

### get_tokens_balance/2 `[I/O]`

```elixir
balance = Chain.get_tokens_balance(0x00ABCD.., [
  [token_address: 0x00DEFA.., token_id: 1],
  [token_address: 0x00DEFA.., token_id: 2]
])
nft1 = Map.get(balance, [token_address: 0x00DEFA.., token_id: 1]) # 1
nft2 = Map.get(balance, [token_address: 0x00DEFA.., token_id: 2]) # 0
```

Parameters:

- `address` the address of a transaction in the chain you're interested in
- `tokens_identifiers` the list of tokens' identifiers (`[token_address: HEX, token_id: POS_INT]`) to return

Returns a subset of the token balance of the chain that contains the transaction at `address`.
The return value is a map where the keys are the tokens' identifiers: `[token_address: HEX, token_id: POS_INT]` and the value are floats.

Useful if you need to retrieve many tokens at the same time.

- If you're only interested in a specific token, consider [get_token_balance/2](#get_token_balance2-io).

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
- `algo` the hash algorithm ("sha256", "sha512", "sha3_256", "sha3_512", "blake2b", "keccak256")

Returns the hash of `str` by using `algo` algorithm.

### hmac/1

Equivalent to [hmac/2](#hmac2) with the second argument "sha256".

### hmac/2

Equivalent to [hmac/3](#hmac3) with the third argument being a key created from the contract seed and secret data known by nodes.
The key created is deterministic and will always be the same for a contract.

### hmac/3

```elixir
Crypto.hmac("my text") # "374C7527733556..."
Crypto.hmac("my text", "sha256") # "374C7527733556..."
Crypto.hmac("my text", "sha256", "secret_key") # "901A365FF22B895..."
```

Parameters:

- `data` the data to hash (if the data is hexadecimal it will be decoded in binary)
- `algo` the hash algorithm ("sha256", "sha512", "sha3_256", "sha3_512")
- `key` the key to perform the hmac (if the data is hexadecimal it will be decoded in binary)

Returns the hmac of `data` with `key` using `algo`.

### sign_with_recovery/1

```elixir
signature_payload = Crypto.hash("tintin", "keccak256")
Crypto.sign_with_recovery(signature_payload) # [r: "00ABCD...", s: "00BCDE...", v: 0]
```

Parameters:

- `hash` the hash to sign

Return a signature of the given `hash`.

---------

## Token

### fetch_id_from_address/1 `[I/O]`

```elixir
Token.fetch_id_from_address("000012345") # "3C21EF708BF11B4232..."
```

Parameters:

- `address` the token address

Returns the token's id of the token at `address`.

---------

## Code

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

---------

## Math

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

---------

## Http

### request/1 `[I/O]`

Similar to [request/2](#request2-io) with `method: "GET"`.

### request/2 `[I/O]`

Similar to [request/3](#request3-io) with `headers: Map.new()`.

### request/3 `[I/O]`

Similar to [request/4](#request4-io) with `body: nil`.

### request/4 `[I/O]`

```elixir
response = Http.request("https://fakerapi.it/api/v1/addresses?_quantity=1&_seed=watermelon", "GET", Map.new(), nil) # [status: 200, body: "..."]
if response.status == 200 do
    # do something with response.body
end
```

Parameters:

- `url` the url to fetch
- `method` the HTTP method (`"GET"`, `"POST"`, `"PUT"`, `"DELETE"` or `"PATCH"`)
- `headers` the HTTP headers
- `body` the HTTP body

Performs a HTTP request and returns a map with `status` (integer) and `body` (string).

This status integer can be any [HTTP status code](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status).

- The URL must use HTTPS protocol.
- The response body's size must be less than 256KB.
- The response must be received in less than 2 seconds.
- The response must be idempotent (= identical every time it is called)
- Only 1 call of either `request/1,2,3,4` or `request_many/1` is allowed per execution.

:::caution
The function raises if these requirements are not meet.
:::

:::danger Disclaimer
We discourage to call services that change some state directly. Because Archethic **relies on atomic commitment of all storage nodes**, it may happen that atomic commitment is not reached and the transaction resulting of a Smart Contract is not validated.

Instead, you should notify the service of the transaction being validated. The service subscribes to that transaction via the GraphQL API, and once it receives a confirmation, it should act accordingly.
:::

### request_many/1 `[I/O]`

```elixir
responses = Http.request_many([
    [url: "https://fakerapi.it/api/v1/users?_quantity=1&_gender=male&_seed=cucumber"],
    [url: "https://fakerapi.it/api/v1/users?_quantity=1&_gender=female&_seed=tomato", method: "GET", headers: Map.new(), body: nil]
])
for r in responses do
    if r.status == 200 do
        # do something with r.body
    end
end
```

Parameters:

- `request` a list of requests to perform

Performs a HTTP request and returns a map with `status` (integer) and `body` (string). Order and length is preserved.

See [request/4](#request4-io) for rules and more details.

---------

## Contract

### call_function/3 `[I/O]`

```elixir
Contract.call_function(0x0000ABCD..., "add", [1, 2])
```

Parameters:

- `contract_address` the contract's adddress
- `function_name` the function name
- `args` the list of arguments to call the function with

Calls the exported function `function_name` of the Smart Contract at `contract_address` with given `args` and return the result value.

### set_type/1 `[Transaction]`

```elixir
Contract.set_type("transfer")
```

Parameters:

- `type` the transaction type ("contract", "transfer", "data", "hosting")

**Mutates** the next transaction to be of type `type`.

### set_content/1 `[Transaction]`

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

### set_code/1 `[Transaction]`

```elixir
Contract.set_code("@version 1\ncondition inherit: []")
```

Parameters:

- `code` the code

**Mutates** the next transaction code to be `code`.

:::tip
This example "closes" the contract, by adding an `condition inherit` that doesn't accept anything. It will be impossible to create a new transaction in this chain.
:::

### add_uco_transfer/1 `[Transaction]`

```elixir
Contract.add_uco_transfer(to: "000012345...", amount: 1)
```

Parameters:

- `uco_transfer` a map with two keys:
  - `to`: the destination address
  - `amount`: the number of UCO

**Mutates** the next transaction to add the `uco_transfer`.

### add_uco_transfers/1 `[Transaction]`

Equivalent to call [add_uco_transfer/1](#add_uco_transfer1-transaction) for each element of the list

### add_token_transfer/1 `[Transaction]`

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

### add_token_transfers/1 `[Transaction]`

Equivalent to call [add_token_transfer/1](#add_token_transfer1-transaction) for each element of the list

### add_ownership/1 `[Transaction]`

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

### add_ownerships/1 `[Transaction]`

Equivalent to call [add_ownership/1](#add_ownership1-transaction) for each element of the list

### add_recipient/1 `[Transaction]`

```elixir
Contract.add_recipient("000012345...")
```

Parameters:

- `address`: a transaction address (one with a smart contract)

**Mutates** the next transaction to add the `address` in the recipients.

:::info
Recipients are used to trigger smart contracts
:::

### add_recipients/1 `[Transaction]`

Equivalent to call [add_recipients/1](#add_recipient1-transaction) for each element of the list

---------

## Evm

### abi_encode/2

```elixir
Evm.abi_encode(signature, data)
```

Parameters:

- `signature`: the function or tuple signature (ex: "baz(uint,address)")
- `data`: the data to encode

Encodes the given `data` according to the `signature`.

### abi_decode/2

```elixir
Evm.abi_decode(signature, encoded_data)
```

Parameters:

- `signature`: the function or tuple signature (ex: "baz(uint,address)")
- `encoded_data`: the data to decode

Decodes the given `encoded_data` according to the `signature`.
