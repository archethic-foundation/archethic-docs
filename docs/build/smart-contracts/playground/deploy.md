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

The panel is a big form composed of two forms: 

1. the [transaction form](/build/smart-contracts/playground/transaction-form) which is used to define the transaction that holds the contract.
1. the deploy form which specifies which network and keychain to use.

## The transaction form

You may want to define it's `type` to "contract" (not mandatory), you might want to define an initial `content` or some `ownerships`. 

The only thing **required** is to reveal the seed to the nodes in the `secrets`. 
This is because the nodes must know the seed of the contract's transaction chain to be able to create new transactions.
To achieve this, write the seed in the `secret` field and click on the `Load storage nonce public key` button and then click on the `Create secret` button.

![the ownership containing the seed is displayed](/img/playground/playground_sc_ownership.png)


## The deploy form

1. Choose the network where you want to deploy the Smart Contract. Use "local" if you run a node on your computer, "testnet" otherwise. 
1. Then at the bottom specify the seed of a keychain with some funds to pay the fees.

- To generate an address from a seed, use the [address generator](/participate/cli/#generate-address) from the CLI.
- To get funds, use the [faucet](https://testnet.archethic.net/faucet).

Before clicking on the `Deploy` button, you may click on the `Estimate fees` button.
A message should inform you of the status of the deployment. If successful, you'll get a link to the transaction on the [explorer](https://testnet.archethic.net/explorer).

