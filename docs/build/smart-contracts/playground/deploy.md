---
id: deploy
title: Smart Contracts Playground - Deploy
sidebar_label: Deploy
sidebar_position: 2
---


:::warning Not mainnet-ready
The communication via the archethic wallet has not been done yet. For this reason we disabled the deployment to the mainnet because it doesn't meet the security standard we expect.
:::

Once the code is written and the triggers are tested, the next step is to deploy the Smart Contract. Please open the deploy panel by clicking on the deploy button:

![the deploy button](/img/playground/playground_button_deploy.png)

The deploy panel opens on the left hand side: 

![the deploy panel](/img/playground/playground_panel_deploy.png)


1. Choose the network where you want to deploy the Smart Contract. This will always be "https://testnet.archethic.net" for now.
1. You'll see that we automatically retrieve the `storage nonce public key` that is used to give ownership of the contract to the authorized nodes (miners).
1. Then specify a seed of a transaction chain that will host the contract. 

While modifying the seed, you can see that the future contract's address is displayed. The contract's genesis address is also displayed. 

:::info Genesis address
The genesis address is the one you'll use in the [faucet](https://testnet.archethic.net/faucet) to transfer funds.
:::

Now you may click on `estimate fees` and then `deploy`. Hopefully you'll see a success message!
You may follow the link to view the     transaction on the explorer.

:::success That's it!
Congratulations on your contract's deployment.
:::
