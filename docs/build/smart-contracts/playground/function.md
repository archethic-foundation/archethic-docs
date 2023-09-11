---
id: functions
title: Smart Contracts Playground - Functions
sidebar_label: Function calls
sidebar_position: 3
---

Since 1.3, we introduced the capability to have some public functions in to smart contract code.

The playground have been updated to support this feature and be able to test it by calling those functions.

Let's create a small smart contract that use function to export some data to the user

```elixir
@version 1
condition triggered_by: transaction, on: increment(), as: []

actions triggered_by: transaction, on: increment() do
  counter = String.to_number(contract.content) + 1
  Contract.set_content String.from_number(counter)
end

export fun counter() do
  Json.to_string([counter: contract.content])
end
```

Firstly, we initiate a transaction to increment the counter and update the contract

![a contract that send a transaction to increment a counter](/img/playground/playground_function_example1.png)

Now to test the function, we are going to open the function panel by clicking on the function button:

![the trigger button](/img/playground/playground_button_function.png)

We can see the function panel on the left with the list of function availables to be called

![a function panel opened](/img/playground/playground_function_panel.png)

After clicking on "Execute", we can see in the console the return of the function

![a function executed](/img/playground/playground_function_panel2.png)