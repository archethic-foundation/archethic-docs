---
id: examples
title: Smart Contracts - Examples
sidebar_label: Examples
sidebar_position: 6
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

This contract counts the number of votes for list of candidates ("Miss Scarlett", "Colonel Mustard").
For each vote request, it increments the number of votes for the given candidate.
A voter can only vote once because the contract keep track of the voters genesis addresses.

:::info
A public function is available to be able to easily query the number of votes in the system
:::

```elixir
@version 1
condition triggered_by: transaction, on: vote(candidate), as: [
    content: (
      # check incoming vote
      valid_candidate? = List.in?(["Miss Scarlett", "Colonel Mustard"], candidate)

      # check incoming voter
      valid_voter? = !List.in?(
        State.get("voters_genesis_addresses", []),
        Chain.get_genesis_address(transaction.address)
      )

      valid_candidate? && valid_voter?
    )
]

actions triggered_by: transaction, on: vote(candidate) do
    scarlett_votes = State.get("Miss Scarlett", 0)
    mustard_votes = State.get("Colonel Mustard", 0)
    voters = State.get("voters_genesis_addresses", [])

    if candidate == "Miss Scarlett" do
      scarlett_votes = scarlett_votes + 1
    end
    if candidate == "Colonel Mustard" do
      mustard_votes = mustard_votes + 1
    end

    # Add the current voter genesis address to the list
    # So he/she cannot vote twice
    voters = List.prepend(voters, Chain.get_genesis_address(transaction.address))

    State.set("Miss Scarlett", scarlett_votes)
    State.set("Colonel Mustard", mustard_votes)
    State.set("voters_genesis_addresses", voters)
end

export fun get_votes() do
  [
    scarlett: State.get("Miss Scarlett", 0),
    mustard: State.get("Colonel Mustard", 0)
  ]
end
```

## Insurance "at least 25°c"

This Smart Contract holds some funds, and send them all to either the insurance company or the insuree at the end of the stay. The receiver is determined by the average temperature at destination during the stay.

```elixir
@version 1

# float, float, string, string :: List float
fun get_hourly_temperatures(lat, long, start_date, end_date) do
 # TODO: fetch multiple sources
 response = Http.request("https://archive-api.open-meteo.com/v1/archive?latitude=#{lat}&longitude=#{long}&start_date=#{start_date}&end_date=#{end_date}&hourly=temperature_2m")
 if response.status == 200 && Json.is_valid?(response.body) do
   json = Json.parse(response.body)
   json.hourly.temperature_2m
 else
   []
 end
end

# List float -> float
fun average(xs) do
    sum = 0
    count = 0
    for x in xs do
      count = count + 1
      sum = sum + x
    end

 sum / count
end

# Trigger at the end of stay
actions triggered_by: datetime, at: 1694728800 do
  insurance_company_wallet = 0x00002223BBD4EC3D64AE597696C7D7ADE1CEE65C639D885450AD2D7B75592AC76AFA
  insuree_wallet = 0x0000238C3A9CB5BFB7A863D698B71DFFF0C9C5C40CFF21EBDA2D83EBAEDDA1C6E10D
  lat = 41.591
  long = 9.2795
  start_date = "2023-09-08"
  end_date = "2023-09-15"
  threshold = 25
  amount = 4000


  hourly_temperatures = get_hourly_temperatures(lat, long, start_date, end_date)

  if hourly_temperatures == [] do
    # No data? arbitrary decision of splitting 50/50
    # To better deal with that situation, fetch multiple sources instead of a single one
    Contract.set_content("No average temperature available")
    Contract.add_uco_transfer to: insurance_company_wallet, amount: amount / 2
    Contract.add_uco_transfer to: insuree_wallet, amount: amount / 2
  else
    average_temperature = average(hourly_temperatures)

    Contract.set_content("Average temperature was: #{average_temperature}")
    if average_temperature >= threshold do
      Contract.add_uco_transfer to: insurance_company_wallet, amount: amount
    else
      Contract.add_uco_transfer to: insuree_wallet, amount: amount
    end
  end
end
```
