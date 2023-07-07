---
id: mock-form
title: Smart Contracts Playground - Mock form
sidebar_label: Mock form
sidebar_position: 100
---

Mocks allow developers to simulate the behaviour of functions that have side-effects. A few examples of side-effect: retrieve the genesis address of a chain, retrieve the date, a random value etc.

The mock form is part of the trigger panel.

![the mock form is display](/img/playground/playground_form_mock.png)


These functions must be mocked to test Smart Contracts that use them:

- [Chain.get_genesis_address/1](/build/smart-contracts/language/library#get_genesis_address1)
- [Chain.get_first_transaction_address/1](/build/smart-contracts/language/library#get_first_transaction_address1)
- [Chain.get_genesis_public_key/1](/build/smart-contracts/language/library#get_genesis_public_key1)
- [Time.now/0](/build/smart-contracts/language/library#now0)
- [Token.fetch_id_from_address/1](/build/smart-contracts/language/library#fetch_id_from_address1)

A function can be mocked multiple times, for example to mock multiple different inputs.

## Example: Time.now/0

Time.now/0 can be mocked to simulate a future execution of the contract. This one is actually optional, the playground will use current time if it is not set.

All you need to do is fill the expected output (seconds since epoch):

![mocking the Time.now/0](/img/playground/playground_form_mock_time_now.png)

Then click on the `Add` button:

![Time.now/0 is mocked](/img/playground/playground_form_mock_time_now2.png)

You may now test a Smart Contract that uses `Time.now/0`: 

```elixir
@version 1
actions triggered_by: interval, at: "* * * * *" do 
  Contract.set_content(Time.now())
end
```

![a contract that used Time.now/0 is tested](/img/playground/playground_form_mock_time_now_example.png)

We can see via the console that the mock was called as expected.

## Example: Chain.get_genesis_address/1

Let's see an example with a function that takes an argument.
In the form you specify the output for a given input. Let's try it!

The screenshot below mocked the function with these values: 
- input: `00002223BBD4EC3D64AE597696C7D7ADE1CEE65C639D885450AD2D7B75592AC76AFA`
- output: `MOCKED`

```elixir
@version 1
actions triggered_by: interval, at: "* * * * *" do
  Contract.set_content(Chain.get_genesis_address(0x00002223bbd4ec3d64ae597696c7d7ade1cee65c639d885450ad2d7b75592ac76afa))  
end
```
![a contract that used Chain.get_genesis_address/1 is tested](/img/playground/playground_form_mock_chain_get_genesis_address.png)

We can see via the console that the mock was called as expected.