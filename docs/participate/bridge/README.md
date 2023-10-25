---
id: bridge
title: Archethic's bridge
---

Archethic has developed a decentralized and P2P bridge to ease the swap of your UCO ERC20 tokens from other blockchains (ie. Ethereum, Polygon, BSC) and allow to simply and securly exchange assets in the most atomic way.

:::caution Testnet's only
The current version of the Archethic's bridge is only available on testnet.
You can experiment and start to bridge your assets, go to [bridge.testnet.archethic.net/](https://bridge.testnet.archethic.net/)
:::

## Key concepts

### HTLC

Archethic's bridge relies on atomic swap technology to exchange securely assets in a P2P and cryptographic way without intermediary and allows revert and refund of assets after the lock time period.

This means specific contracts called **HTLC** (*Hash Time Lock Contract*) are used to lock your funds 
until the reveal of the secret (like a secret's box) or after a locktime to provide a refund capability.

On the both chains on the swap, those contract have to be deployed.

The two chains are ready to transfer assets - which consists of revealing the private part of the secret encoded in the contracts, to allow the exchange.

Once the secret is revealed in one chain, the second one can proceed to the reveal, as the secret is now public.

This way atomic swap provides secure transfers between chains as there is no pool holding all the assets but hard-coding of recipients and rules in a one-time contract.

### Archethic's cross-chain verification

Usual atomic swaps are using HTLC techniques to ensure safety through the P2P and cryptography approach.

Nevertheless, thanks to the capability of Archethic to be able to fetch data outside of the blockchain, we enhanced our atomic swap protocol to be compleltely decentralized and increase our security model.

Indeed, Archethic's node are able to fetch transaction's status on other chains (i.e EVM blockchains) to determine the status of a swap in a strong consensus.

With the combination of HTLC and Archethic's specifics, we can have strong trust of the origin/reveal capability of any swap relying on cryptography and cross-chain data retrieval.

### Safety Module

To minimize the risk introduced by bridging assets, we introduce a **Safety Module** as a mechanism designed to address deficiencies that may arise when an unexpected event disrupts the operation of the bridge. 

It acts as a reserve of tokens that can be used if the pool experiences a token loss or if the locked amount varies between both chains.

Upon the launch of any pool, the maximum amount of tokens held by the pool will match the amount held in the safety module. Each pool has its dedicated safety module, which will grow over time, thereby enabling increased liquidity in the bridge pool.

To fund the safety module, a fee will be deducted from each transfer originating from EVM to Archethic. This fee will be deposited directly into the safety module to bolster the reserve. The greater the number of tokens held in the safety module, the lower the fee rate will become.

The safety module is represented by a multisignature wallet managed by the bridge’s governance.

## Usage

TODO


## Specifics

### EVM -> Archethic

Everything start we a secret holded by a client (in our case the bridge's dApp) and its hash (derivated representation of the secret) to form a lock upon the reveal of this secret.

The user deploy HTLC smart contract on EVM blockchain through the bridge's EVM pool.

This pool will ensure the funds capacity of the swap's initiator, the fee distribution ([see Safety Module](#safety-module)), locktime's period and the recipient's address of the assets to bridge.

Symetrically, the user will have to deploy a contract on Archethic using the same conditions 
while indicating its recipient wallet to receive the funds.

Once done, a request will be perfomed on the Archethic's pool (owner of the wrapped tokens) to ask funds to fill the HTLC.

Because the tokens are wrapped on Archethic, the pool will mint new tokens after cross-chain verification ([see Archethic's specific](#archethics-cross-chain-verification))

The remaning part is then the reveal of the secret on EVM to transfer funds to the bridge's recipient wallet (including the safety module).
And reproduce this step on Archethic, which will ensure the action is done on EVM blockchains through off-chain requests.

At the end, the both conterparties will receive their funds creating a parity in the bridged assets.

### Archethic -> EVM 

To exchange assets from Archethic to EVM, we will use the same behavior but ofcourse in reverse order.
However, we will introduce a new feature on the smart contracts, because EVM cannot request information outside of the blockchain, we have
to ensure on EVM's side, an action have been performed on Archethic's side.

To do so, we are using cryptography to assert through signature an action and to give a non-repudation proof for the Archethic's pool.

This time, the user create HTLC contract on Archethic and funds it with its tokens (wrapped or native tokens) indicating the recipient's wallet given by the Archethic's pool but without allocating at first place the secret and its lock.

The user request to the Archethic's pool to get a secret, its hash and a signature asserting the action have been done Archethic. While doing it, the Archethic's pool will contact the HTLC to update its condition for the secret's reveal. (insertion of the generated secret's hash from the pool)

On this other side, the user can request the EVM pool to create and provision HTLC contract based on the proof given by the Archethic's pool about an existing and funded HTLC.
The EVM pool can now create and transfers funds to this new contract.

The remaning part is the reveal of the secret, so the user asks the Archethic's pool to reveal the secret into the HTLC and also provide a signature for this action. 
At this step the locked tokens will be burnt.

As the secret is now revealed, the user can reveal the secret on EVM HTLC and provide the signature of Archethic's pool, unlocking the assets to the user's wallet registered into the contract.

At the end, the both conterparties will receive their funds creating a parity in the bridged assets.
