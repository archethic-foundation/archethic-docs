---
id: triggers
title: Smart Contracts - Triggers
sidebar_label: Triggers
sidebar_position: 1
---

### Contract triggered by a transaction

:::tip
To trigger a SC execution, the incoming transaction must add the SC address in the `recipients` part of the transaction.
This allows to activate a SC without sending funds to it, or to send funds to it without activating the code execution. As the `recipients` field is a list, you can trigger multiple contracts in the same transaction
:::

In this scenario:

- a `condition transaction` may be used to check the incoming transaction (before executing the trigger).
- a `transaction` variable is available in the blocks.

```elixir
@version 1
condition triggered_by: transaction, as: [
    ...
]

actions triggered_by: transaction do
    ...
end
```

### Contract triggered by a transaction with a named action

The SC caller may be able to execute a specific "named" action with specified arguments on the Smart Contract.

In this scenario:

- a `condition transaction` may be used to check the incoming transaction (before executing the trigger).
- a `transaction` variable is available in the blocks.
- every `argument` defined is available in the blocks.

```elixir
@version 1
condition triggered_by: transaction, on: vote_for_class_president(firstname, lastname), as: [
    ...
]

actions triggered_by: transaction, on: vote_for_class_president(firstname, lastname) do
    ...
end
```

### Contract triggered at a specific date and time

You may trigger a contract at a specific date and time. You need to specify a [Unix time](https://en.wikipedia.org/wiki/Unix_time) (seconds since epoch).

:::warning The datetime must be rounded to the minute
A contract will not parse if the datetime isn't rounded.
:::

```elixir
@version 1
actions triggered_by: datetime, at: 1676332800 do
    ...
end
```

### Contract triggered at a specific interval

You may trigger a contract at a specific interval. You need to specify a [CRON Format String](https://en.wikipedia.org/wiki/Cron).

:::note
The minimum granularity is the minute. Except in local development where the minimum granularity is the second.
:::

```elixir
@version 1
actions triggered_by: interval, at: "0 8 * * *" do
  # do something each day at 8AM UTC
end
```

### Contract triggered on every Oracle transaction

You may trigger a contract on every Oracle transaction.

In this scenario:

- a `condition oracle` must be used to check the oracle transaction (to avoid running a contract if the oracle does not contain what you require)
- a `transaction` variable is available in the blocks.

```elixir
@version 1
condition triggered_by: oracle, as: [
  # use transaction.content to make sure the oracle has the data you require
]
actions triggered_by: oracle do
  # do something with transaction.content
end
```

### Multiple triggers

Only named action triggers may have multiple triggers. **Other triggers are limited to 1 per type**.

DO:

```elixir
@version 1

actions triggered_by: transaction do
    ...
end

actions triggered_by: transaction, on: upgrade() do
    ...
end

actions triggered_by: transaction, on: calculate(x, y) do
    ...
end

actions triggered_by: interval, at: "0 8 * * *" do
    ...
end
```

DON'T:

```elixir
@version 1

actions triggered_by: interval, at: "0 9 * * *" do
    ...
end

actions triggered_by: interval, at: "0 8 * * *" do
    ...
end
```

DON'T:

```elixir
@version 1

actions triggered_by: transaction do
    ...
end

actions triggered_by: transaction do
    ...
end
```

DON'T:

```elixir
@version 1

actions triggered_by: datetime, at:  1693519200 do
    ...
end

actions triggered_by: datetime, at:  1693605600 do
    ...
end
```
