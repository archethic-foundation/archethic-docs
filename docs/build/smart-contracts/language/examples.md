---
id: examples
title: Smart Contracts - Examples
sidebar_label: Examples
sidebar_position: 5
---

## Hello World

This simple contract will be triggered once, at the specified unix timestamp. 
It will create a new transaction with a content "Hello world!".

```elixir
@version 1
actions triggered_by: datetime, at: 1689857160 do
  Contract.set_content("Hello world!")
end
```

## ICO (Initial Coin Offering)

Users can send UCOs to this contract and will receive 10000 times the amount as token from this contract.
It is possible for users to define a different receive address by specifying it as the content of the transaction.
The Smart Contract's chain must define a token.

```elixir 
@version 1
condition transaction: []
actions triggered_by: transaction do
    # Get the amount of UCO sent to this contract
    amount_send = Map.get(transaction.uco_movements, contract.address)

    if amount_send > 0 do
        # Convert UCO to the number of tokens to credit. Each UCO worth 10000 token
        token_to_credit = amount_send * 10000

        Contract.set_type("transfer")

        # Users can specify to send the token in a different address
        # default to the trigger transaction's chain
        destination = transaction.address
        if transaction.content != "" && 
           String.to_hex(transaction.content) do 
            destination = transaction.content
        end

        Contract.add_token_transfer(to: destination, token_address: contract.address, amount: token_to_credit)
    end
end
```

## Recurring ICO 

This contract will automatically call the ICO contract with 2 UCOs every hours.
The tokens will be transfered in a different chain.

```elixir
@version 1
actions triggered_by: interval, at: "0 * * * *" do
    Contract.set_type("transfer")

    # 0x001234... is the chain to send the tokens to
    # we put it in the content so the ICO contract will directly send funds there
    Contract.set_content(0x001234)

    # 0x00ABCD... is the ICO smart contract's address
    Contract.add_recipient(0x00ABCD...)
    Contract.add_uco_transfer(amount: 2, to: 0x00ABCD...) 
end
```

## Counting system

This contract counts the number of times it received a transaction with the content "X" or "Y".
It uses a JSON string to persist the state. The initial content of the contract must be `{"x": 0, "y": 0}`.

```elixir
@version 1
condition transaction: [
    content: List.in?(["X", "Y"], transaction.content)
]
actions triggered_by: transaction do
    count_x = Json.path_extract(contract.content, "$.x")
    count_y = Json.path_extract(contract.content, "$.y")

    if transaction.content == "X" do
        count_x = count_x + 1
    else
        count_y = count_y + 1
    end
    
    Contract.set_content(Json.to_string([x: count_x, y: count_y]))
end
```

