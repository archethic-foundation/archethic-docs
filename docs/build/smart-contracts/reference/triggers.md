---
id: triggers
title: Smart Contracts - Triggers
sidebar_label: Triggers
sidebar_position: 1
---

# Triggers
### Contract triggered by a transaction

:::tip
To trigger a SC execution, the incoming transaction must add the SC address in the `recipients` part of the transaction.  
This allow to activate a SC without sending funds to it, or to send funds to it without activating the code execution. As the `recipients` field is a list, you can trigger multiple contract in the same transaction
:::

In this scenario:
- a `condition transaction: []` may be used to check the incoming transaction (before executing the trigger)
- a `transaction` variable is available in the `actions` block.

```elixir 
@version 1
condition transaction: [
    ...
]

actions triggered_by: transaction do
    ...
end
```

### Contract triggered at a specific date

You may trigger a contract at a specific date. You need to specify a [Unix time](https://en.wikipedia.org/wiki/Unix_time) (seconds since epoch). 

```elixir 
@version 1
actions triggered_by: datetime, at: 1676332800 do
    ...
end
```

### Contract triggered every N period

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
- a `condition oracle: []` may be used to check the oracle transaction (to avoid running a contract if the oracle does not contain what you require)
- a `transaction` variable is available in the `actions` block.

```elixir
@version 1
actions triggered_by: oracle do
  # do something with transaction.content
end
```

### Multiple triggers

You may use multiple triggers in the same contract, but you are **limited to one per type**.

DO:
```elixir
@version 1

actions triggered_by: transaction do
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
