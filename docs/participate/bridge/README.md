---
id: bridge
title: Archethic Bridge (aeBridge)
---

Archethic has developed a decentralized and P2P bridge to facilitate the exchange of your UCO ERC20 tokens with other blockchains (e.g., Ethereum, Polygon, BSC) and to allow for a simple and secure exchange of assets in the most atomic way.

## Key concepts

### HTLC (Hash Time Lock Contract)

Archethic's bridge relies on atomic swap technology to securely exchange assets in a peer-to-peer and cryptographic manner without intermediaries. It also allows for the reversal and refund of assets after a specified lock time period.

This involves the use of specific contracts known as **Hash Time Lock Contracts (HTLC)**, which lock your funds until a secret is revealed (similar to a secret box) or after a lock time period to provide refund capabilities. These contracts must be deployed on both chains involved in the swap.

Both chains must be ready to transfer assets by revealing the private part of the secret encoded in the contracts, which enables the exchange. Once the secret is revealed on one chain, the other can proceed as the secret is now public.

This atomic swap method ensures secure transfers between chains without a central pool holding all the assets. Instead, it relies on hard-coded recipients and rules within a one-time contract.

### Archethic's cross-chain verification

While conventional atomic swaps rely on HTLC techniques for security through peer-to-peer and cryptographic approaches, Archethic enhances its atomic swap protocol by enabling data retrieval outside of the blockchain. This enhancement makes the process completely decentralized and strengthens the security model.

Archethic's nodes can fetch transaction status on other chains, such as EVM blockchains, to establish the status of a swap with a strong consensus.
Combining HTLC and Archethic's specific capabilities provides a high level of trust in the origin and reveal capabilities of any swap, relying on cryptography and cross-chain data retrieval.

### EVM to Archethic

The process begins with a secret held by a client (in this case, the bridge's dApp) and its hash, which forms a lock upon revealing the secret.

The user deploys an HTLC smart contract on the EVM blockchain through the bridge's EVM pool.

 This pool ensures the capacity of the swap's initiator, lock time period, and the recipient's address for the assets to be bridged.

Similarly, the user must deploy a contract on Archethic under the same conditions while specifying the recipient wallet to receive the funds.

Subsequently, a request is made to the Archethic's pool (which holds the wrapped tokens) to fill the HTLC.

Because the tokens are wrapped on Archethic, the pool will mint new tokens after cross-chain verification ([see Archethic's specific](#archethics-cross-chain-verification)).

The remaining step involves revealing the secret on EVM to transfer the funds to the bridge's recipient wallet and replicating this process on Archethic, ensuring that the action is executed on EVM blockchains through off-chain requests.

This results in both counterparties receiving their funds, achieving parity in the bridged assets.


### Archethic to EVM

To exchange assets from Archethic to EVM, the process follows a similar pattern but in reverse order.
However, a new feature is introduced in the smart contracts. Since EVM cannot request information outside the blockchain, steps are taken to ensure that an action has been performed on Archethic's side. Cryptography is employed to assert the action through a signature and provide non-repudiation proof for the Archethic's pool.

In this scenario, the user creates an HTLC contract on Archethic and funds it with tokens (wrapped or native), specifying the recipient's wallet provided by Archethic's pool, without initially revealing the secret and its lock.

The user then requests the Archethic's pool to obtain a secret, its hash, and a signature confirming the action's completion on Archethic's side.

During this process, the Archethic's pool contacts the HTLC to update its conditions for the secret's reveal by inserting the generated secret's hash from the pool.

On the other side, the user can request the EVM pool to create and provision an HTLC contract based on the proof provided by Archethic's pool regarding an existing and funded HTLC.

The EVM pool can now create and transfer funds to this new contract.

The remaining step is to reveal the secret. The user asks the Archethic's pool to reveal the secret within the HTLC and provide a signature for this action. At this point, the locked tokens will be burnt.

With the secret revealed, the user can also reveal the secret on the EVM HTLC and provide the signature from Archethic's pool, unlocking the assets to the user's wallet registered within the contract.

This process ensures that both counterparties receive their funds, achieving parity in the bridged assets.


## How to access
- **URL**: [https://bridge.archethic.net](https://bridge.archethic.net)
- If you'd like to test the application or take advantage of the latest features under development, you can safely use the application in the testnet: [https://bridge.testnet.archethic.net](https://bridge.testnet.archethic.net)

This document aims to provide a comprehensive guide to using aeBridge, including an introduction to the necessary concepts, step-by-step guides for interacting with the platform, and technical references for deeper integration and development purposes.

## Audit of EVM Smart Contracts

Our EVM smart contracts have been audited by [Hacken](https://hacken.io), a recognized leader in blockchain security. The full audit report is available [here](/audits/aebridge_hacken.pdf).

## FAQ
For further information, please refer to the [FAQ](/FAQ/bridge-2-ways).
