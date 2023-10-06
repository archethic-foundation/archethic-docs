---
id: http
title: Http module
sidebar_label: Http
---

The `Http` module contains functions to request data from outside the blockchain via HTTP.

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
We discourage to call services that change their internal state directly (such as writing to a database or notifying a user). Because Archethic **relies on atomic commitment of all storage nodes**, it may happen that atomic commitment is not reached and the transaction resulting of a Smart Contract is not validated.

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
