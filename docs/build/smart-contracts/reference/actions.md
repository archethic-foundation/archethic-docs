---
id: actions
title: Smart Contracts - Actions block
sidebar_label: Actions
sidebar_position: 2
---

The `actions` block is the code executed when the [trigger](/build/smart-contracts/reference/triggers) is triggered. 
There are many differents triggers, but the only difference to note is, for the trigger **transaction**, you will have a global variable `transaction` available in the code.

## Global variables

### contract 

The `contract` variable is a map of the current contract's transaction. See [Appendix 1](#appendix-1-the-transaction-map).

### transaction

The `transaction` variable is a map of the transaction that triggered the `actions` block. See [Appendix 1](#appendix-1-the-transaction-map). **It is only available when the trigger is a transaction**:

## Examples

Here's an example implementation of a faucet contract:
```elixir
# every hour
actions triggered_by: interval, at: "0 0 * * *" do
	now = Time.now() # Current time
	faucet_delay = 6 * 60 * 60 # 6 hour delay
	calls = Contract.get_calls() # list of calls since last tick

	# work only if there is at least one call
	if calls != [] do
		# remove the addresses that have waited long enough
		content = ""
		for line: Regex.scan(contract.content, "^(\\w+),(\\d+)$") do
			address = List.at(line, 0)
			at = List.at(line, 1)

			if now - String.to_int(at) <= faucet_delay do
				content = "#{content}#{address},#{at}\n"
			end
		end

		# get the genesis and if allowed, add the transfer
		for call in calls do
			genesis_address = Chain.get_genesis_address(call.address)

			if Regex.extract(content, genesis_address) == "" do
				# transfer 5 uco
				Contract.add_uco_transfer(to: genesis_address, amount: 5)

				# update state
				content = "#{content}#{genesis_address},#{now}\n"
			end
		end

		# update the state
		Contract.set_content(content)
	end
end
```

An ICO (Initial Coin Offering) contract:
```elixir
actions triggered_by: transaction do
  # Get the amount of UCO send to this contract
  amount_send = Map.get(transaction.uco_transfers, contract.address)

  if amount_send > 0 do
      # Convert UCO to the number of tokens to credit. Each UCO worth 10000 token
      token_to_credit = amount_send * 10000

      Contract.add_token_transfer(to: transaction.address, token_address: contract.address, amount: token_to_credit)
  end
end
```


## Appendix 1: The transaction map

- `address`  is the transaction's address.
- `type` is the transaction's type.
- `content` is the transaction's content (it's a string that can contain anything, for example a smart contract state)
- `code` is the transaction's code (empty string for all non-smart-contract transactions)
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

:::danger
NOT VERY FRIENDLY USAGE
- `authorized_keys` is a list of [public_key: "" , encoded_secret_key_to_decode_the_secret: ""]
- `authorized_public_keys` is a list of public keys allowed to decode a secret in the transaction
- `secrets` is a list of encrypted secrets
:::



