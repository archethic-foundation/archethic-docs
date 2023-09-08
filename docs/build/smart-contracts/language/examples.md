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

This contract the crowdsale of an ICO.

Users can send UCOs to this contract and will receive 10000 times the amount as token from this contract.

It is possible for users to define a different receive address.

The Smart Contract's chain must define a token.

```elixir
@version 1

condition triggered_by: transaction, on: buyToken(recipient_address), as: [
    uco_transfers: check_amount(transaction.uco_movements)
]

actions triggered_by: transaction, on: buyToken(recipient_address) do
    transfers = get_transfered_amount()

    # Get the amount of UCO sent to this contract
    amount_send = number_of_uco_sent()

    # Convert UCO to the number of tokens to credit. Each UCO worth 10000 token
    token_to_credit = number_of_tokens(amount_send)

    Contract.set_type("transfer")

    # Users can specify to send the token in a different address
    Contract.add_token_transfer(to: recipient_address, token_address: token_address(), amount: token_to_credit)
end

fun number_of_tokens(uco_amount) do
  uco_amount * 10000
end

fun number_of_uco_sent() do
  Map.get(transaction.uco_movements, contract.address)
end

fun get_transfered_amount() do
  Map.get(transaction.uco_transfers, contract.address)
end

fun check_amount(transfers) do  
  transfered_amount = Map.get(transfers, contract.address)
  transfered_amount != nil && transfered_amount > 0
end

fun token_address() do
  Chain.get_genesis_address(contract.address)
end

```

## Recurring ICO

This contract will automatically call the ICO contract with 2 UCOs every hours.
The tokens will be transfered in a different chain.

```elixir
@version 1

actions triggered_by: interval, at: "0 * * * *" do

    ico_contract = 0x0000993F3BE0CE40541E47735AA083854ECAC7785B39435C90D8456C777B9E9D81F1

    Contract.set_type("transfer")
    Contract.add_recipient address: ico_contract, action: "buyTokens", args: [0x0000A3A066DD64FBD51AE384F2383684B3803BC72012BFEAA9CD1C93AB7C60F584DC]
    Contract.add_uco_transfer(amount: 2, to: ico_contract)
end
```

## Vote system

This contract counts the number of votes for list of candidates (Mr.X and Mrs.Y).

For each vote request, it increments the number of votes for the given candidate,
and create a new transaction out of it, with the new state in the `content` field of the transaction as JSON document.

:::info
A public function is available to be able to easily query the number of votes in the system
:::

```elixir
@version 1
condition triggered_by: transaction, on: vote(candidate), as: [
    content: List.in?(["X", "Y"], candidate)
]

actions triggered_by: transaction, on: vote(candidate) do
    votes = []

    if contract.content == "" do
      votes = add_vote([x: 0, y: 0], candidate)
    else
      votes = get_votes()
      votes = add_vote(votes, candidate)
    end

    Contract.set_content(Json.to_string(votes))
end

fun add_vote(votes, candidate) do
  if candidate == "X" do
    Map.set(votes, "x", votes.x + 1)
  else
    Map.set(votes, "y", votes.y + 1)
  end
end

export fun get_votes() do
  count_x = Json.path_extract(contract.content, "$.x")
  count_y = Json.path_extract(contract.content, "$.y")
  [x: count_x, y: count_y]
end
```
