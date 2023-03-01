---
id: triggers
title: Smart Contracts - Triggers
sidebar_label: Triggers
sidebar_position: 1
---

# Triggers
### Contract triggered by a transaction

You may trigger a contract by creating a transaction with the contract's address in the `recipients` part.

In this scenario:
- a `condition transaction: []` block is required to check the incoming transaction (before executing the trigger)
- a `transaction` variable is available in the `actions` block.

```elixir 
@version 1
condition inherit: [
    ...
]

condition transaction: [
    ...
]

actions triggered_by: transaction do
    ...
end
```

### Contract triggered at a specific date

You may trigger a contract at a specific date. You need to specify a [Unix time](https://en.wikipedia.org/wiki/Unix_time) (secs since epoch). 

```elixir 
@version 1
condition inherit: [
    ...
]

actions triggered_by: datetime, at: 1676332800 do
    ...
end
```

### Contract triggered every N period

You may trigger a contract at a specific interval. You need to specify a [CRON Format String](https://en.wikipedia.org/wiki/Cron).

:::note
On the **MainNet**, the minimum granularity is the minute. On the **TestNet** the minimum granularity is the second.
:::
 

```elixir
@version 1
condition inherit: [
    ...
]

actions triggered_by: interval, at: "0 8 * * *" do
  # do something each day at 8AM UTC
end
```

### Oracle

:::danger TODO
:::

### Multiple triggers

You may use multiple triggers in the same contract, but you are **limited to one per type**.

DO:
```elixir
@version 1
condition inherit: [
    ...
]

condition transaction: [
    ...
]

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
condition inherit: [
    ...
]

actions triggered_by: interval, at: "0 9 * * *" do
    ...
end

actions triggered_by: interval, at: "0 8 * * *" do
    ...
end
```