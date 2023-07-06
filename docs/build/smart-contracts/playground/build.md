---
id: build
title: Smart Contracts Playground - Build
sidebar_label: Build
sidebar_position: 1
---

Let's create a small smart contracts that reacts to two different triggers. We'll then be able to test them separately.

```elixir
@version 1

actions triggered_by: interval, at: "0 * * * *" do 
  Contract.set_content "Hello from interval"
end

condition transaction: []
actions triggered_by: transaction do 
  Contract.set_content "Hello from tx"
end
```

## I. Write the contract

Write the code of the smart contract in the text area:
![the contract is written in the textarea](/img/playground/playground_build_step1.png)

As you write, you might see the console at the bottom reacting with different errors: 

![a parsing error visible in the console](/img/playground/playground_parse_error.png)

## II. Test the triggers

To test a smart contract, you need to test all its triggers. We are going to open the trigger panel by clicking on the trigger button:

![the trigger button](/img/playground/playground_button_trigger.png)

The trigger panel opens on the left hand side: 

![the trigger panel](/img/playground/playground_trigger_panel.png)

You are now able to select which trigger you want to test, for this contract a selector of two triggers is displayed (as per the contract): 

![the trigger selector](/img/playground/playground_trigger_selector.png)

### Test trigger 'interval'

An interval trigger is a contract that triggers automatically at a specific interval. It does not require anything so it's pretty easy to test. Just click on the `trigger` button.

![the resulting transaction is displayed in the console](/img/playground/playground_build_step2a.png)

What you see above is the JSON representation of the output transaction payload. Here I can control that my contract behaved as I expected. The `content` is set to what I expected, the `code` did not change and the other fields are empty.

### Test trigger 'transaction'

This trigger is more complex to test because it requires you to mock the transaction that should trigger the contract. After selecting the `transaction` from the trigger selector, a form appears:

![the transaction form appears in the panel](/img/playground/playground_build_step2b.png)

This form is composed of two forms: 
1. the [transaction form](/build/smart-contracts/playground/transaction-form) 
1. the [mock form](/build/smart-contracts/playground/mock-form) 

Which results in a very big form but we are not going to cover it here. Click on the links if you are interested. For this contract, we'll just submit the form without changing anything. 

![the resulting transaction is displayed in the console](/img/playground/playground_build_step2c.png)

I can now control that the ouput transaction payload is correct.


:::success That's it!
You should now be able to build your own smart contracts and test them! The next step now is to [deploy them](/build/smart-contracts/playground/deploy).
:::