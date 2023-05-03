---
id: actions
title: Smart Contracts - Actions block
sidebar_label: Actions
sidebar_position: 3
---

The `actions` block is the code executed when the associated [trigger](/build/smart-contracts/reference/triggers) is triggered. 

## Global variables
Depending on the trigger, there are different global variables accessible.

#### contract 

The `contract` variable is a map of the current contract's transaction. See [Appendix 1](#appendix-1-the-transaction-map).

#### transaction 

The `transaction` variable is a map of the transaction that triggered the `actions` block. See [Appendix 1](#appendix-1-the-transaction-map). **It is only available when the trigger is a transaction or an oracle**.

## Generating the next transaction

The main goal of the action block is to generate a new transaction in the smart contract chain.  
To do so, you can use the [Contract](/build/smart-contracts/reference/library#contract) module that permit to set the transaction field value.

```elixir
# Set uco ATH in content
actions triggered_by: oracle do
    current_ath = String.to_number(contract.content)
    new_price = String.to_number(
        Json.path_extract(transaction.content, "$.uco.usd")
    )

    if new_price > current_ath do
        Contract.set_content(new_price)
    end
end
```

:::info
Note that there is 3 fields that are preset before executing the action code.
- type: set to "contract" by default
- code: set with the previous contract code
- ownerships: set with the previous contract ownerships

So you don't need to set the type, the code and the ownerships each time you generate a new transaction.
:::

## Examples

An ICO (Initial Coin Offering) contract:
```elixir 
actions triggered_by: transaction do
    # Get the amount of UCO send to this contract
    amount_send = Map.get(transaction.uco_transfers, contract.address)

    if amount_send > 0 do
        # Convert UCO to the number of tokens to credit. Each UCO worth 10000 token
        token_to_credit = amount_send * 10000

        Contract.set_type("transfer")
        Contract.add_token_transfer(to: transaction.address, token_address: contract.address, amount: token_to_credit)
    end
end
```

An ICO contract using batching of input transactions:
```elixir
# Run every 10 minutes
actions triggered_by: interval, at: "0 */10 * * *" do
	calls = Contract.get_calls() # list of calls since last tick

    if calls != [] do
        Contract.set_type("transfer")
    end

    for call in calls do
        # Get the amount of UCO send to this contract
        amount_send = Map.get(call.uco_transfers, contract.address)

        if amount_send > 0 do
            # Convert UCO to the number of tokens to credit. Each UCO worth 10000 token
            token_to_credit = amount_send * 10000

            Contract.add_token_transfer(to: call.address, token_address: contract.address, amount: token_to_credit)
        end
    end
end
```

## Appendix 1: The transaction map

- `address`  is the transaction's address.
- `type` is the transaction's type.
- `content` is the transaction's content (it's a string that can contain anything, for example a smart contract state)
- `code` is the transaction's code
- `timestamp` is the transaction's validation timestamp
- `uco_transfers` is a map of UCO transfers grouped by address of the transaction.

```
["00001ab...": 1, "00001bc...": 2]
```

- `token_transfers` is a map of list of token transfers by address of the transaction 

```
["00001ab...": 
    [
        [amount: 1, token_address: "0000ab12..." , token_id: 1],
        [amount: 1, token_address: "0000ab12..." , token_id: 4],
    ]
]
```
