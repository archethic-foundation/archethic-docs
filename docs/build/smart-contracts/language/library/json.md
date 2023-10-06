---
id: json
title: Json module
sidebar_label: Json
---

The `Json` module contains functions to manipulate JSON strings.

### path_extract/2

```elixir
Json.path_extract("{ \"firstName\": \"John\", \"lastName\": \"Doe\"}", "$.firstName") # "John"
```

Parameters:

- `json` the json string
- `path` the path

Returns the data at `path` in `json`.

See the [JSONPath documentation](https://goessner.net/articles/JsonPath/) for more information abouth paths.

### path_match?/2

```elixir
Json.path_match?("{\"1622541930\":{\"uco\":{\"eur\":0.176922,\"usd\":0.21642}}}", "$.*.uco.usd") # true
Json.path_match?("{\"1622541930\":{\"uco\":{\"eur\":0.176922,\"usd\":0.21642}}}", "$.*.uco.aud") # false
```

Parameters:

- `json` the json string
- `path` the path

Returns if there is a value at `path` in `json`.

See the [JSONPath documentation](https://goessner.net/articles/JsonPath/) for more information about paths.

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
