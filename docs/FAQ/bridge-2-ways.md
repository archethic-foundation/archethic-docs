---
id: bridge-2-ways
title: Archethic Bridge 2-ways
---

## General 

### What is Archethic Bridge two-ways?
The Archethic Bridge two-ways is a decentralized, peer-to-peer bridge that enables the seamless exchange of UCO ERC20 tokens and other major cryptocurrencies like ETH, MATIC, and BNB between the Archethic blockchain and various other blockchains, including Ethereum, Polygon, and BSC. This functionality allows for the transfer of these assets into their equivalent forms on Archethic, such as aeETH, aeMATIC, and aeBNB, providing a secure and straightforward method for exchanging assets. The bridge utilizes atomic swap technology, specifically Hash Time Lock Contracts (HTLC), to facilitate secure and intermediary-free transactions. Moreover, it incorporates Archethic's unique cross-chain verification technique, enhancing the security and decentralization of these exchanges. This two-way bridge significantly expands the interoperability between Archethic and other blockchain networks, allowing for greater flexibility and integration within the broader blockchain ecosystem.

### How to access the Archethic Bridge ?
You can access the bridge at : [https://bridge.testnet.archethic.net](https://bridge.testnet.archethic.net)

### Which blockchain is better to bridge my UCOs?

Using the 3 blockchains, the result will be the same, but fees are not the same between ETH/MATIC/BSC.
MATIC has the lowest fees.

![bridge-blockchains](/img/faq/bridge/Blockchains.svg)

### What blockchains does the Archethic Bridge support?
The Archethic Bridge currently supports bridging between the Archethic blockchain and various EVM (Ethereum Virtual Machine) compatible blockchains.

### Is the Archethic Bridge available on mobile devices?
No, the Archethic Bridge application is designed exclusively for desktop use and is compatible with macOS, Linux, and Windows operating systems.

### What is an EVM wallet?
An EVM (Ethereum Virtual Machine) wallet is a digital wallet designed to interact with blockchains that are compatible with the Ethereum Virtual Machine. EVM wallets can store, send, and receive Ether (ETH) and other EVM-compatible tokens, execute smart contracts, and interact with decentralized applications (dApps) on EVM-compatible networks.

### How is the price of $UCO estimated?
The price of $UCO is determined using an Archethic Oracle that consolidates information from various sources, including Coingecko and CoinMarketCap.

### How long is the predetermined time?
The timelock lasts 2 hours.

## Key Concepts

### What is an HTLC (Hash Time Lock Contract) in the context of Archethic's bridge?
HTLC stands for Hash Time Lock Contract. In Archethic's bridge, it is a type of contract used in atomic swaps to securely exchange assets in a peer-to-peer manner without intermediaries. These contracts lock funds until a secret is revealed or a specified time period elapses, ensuring a secure and reversible asset exchange.

### How does Archethic's cross-chain verification work?
Archethic's cross-chain verification enhances atomic swaps by allowing data retrieval outside of the blockchain. This makes the process fully decentralized and strengthens the security model. Archethic's nodes can verify transaction status on other chains, like EVM blockchains, establishing a strong consensus on the status of a swap.

### What is the Safety Module in Archethic's bridge?
The Safety Module in Archethic's bridge is a reserve of tokens designed to mitigate risks associated with asset bridging. It addresses potential deficiencies and disruptions in bridge operations by providing a token reserve that matches the amount in each pool at launch. This module is funded by fees from transfers and is managed by a multisignature wallet governed by the bridge's governance.

## Specifics of Bridging

### How does the process of bridging from EVM to Archethic work?
To bridge from EVM to Archethic, a user deploys an HTLC smart contract on both blockchains. The process involves locking funds using a secret and its hash, verifying the transaction across chains, minting new tokens on Archethic, and transferring funds to respective recipient wallets. The entire process is secured by atomic swaps and Archethic's cross-chain verification.

### What is the process for bridging from Archethic to EVM?
Bridging from Archethic to EVM follows a similar pattern but in reverse. It introduces an additional step where EVM cannot directly request information from the blockchain. Instead, cryptography is used to assert actions through signatures, ensuring non-repudiation. This involves creating and funding HTLC contracts on both blockchains, revealing secrets, and transferring funds securely.

## Wallet

### I’m using the Mainnet network in the Wallet, how can I switch on the Testnet?

The switch is not possible because the seed is not shared between Mainnet and Testnet. Later, the wallet will be multiseeds, but not for the moment. The only way for the moment is to remove the Wallet (don’t forget the 24 words) and create/import a wallet on the Testnet network.

## Issues management

### What happens if a problem occurs, or I refuse a transaction during the transfer?
During the delay of the acknowledgment, you should wait for the end of the duration, and you can tell the refund of your ERC20 Wallet with the "Refund" button available on your Archethic Bridge application.

### If I sent the tokens to a wrong Mainnet address, what to do?
You lose the tokens if the Mainnet address is not your address. Same thing if you do an error in the address (for example a 0 instead of 1).

### Can I help the developers analyze the problems?

You can help developers improve the application by submitting information that describes the state of the application. 
To do this, you can copy/paste your transaction from your local history in the application.

---

