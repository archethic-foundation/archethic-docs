---
id: dex
title: aeSwap
---

## General 

### How to access the Archethic DEX named aeSwap ?
You can access to aeSwap at : [https://dex.archethic.net](https://dex.archethic.net)

### Is the Archethic DEX available on mobile devices?
Soon!

### How is the price of UCO estimated?
The price of UCO is determined using an Archethic Oracle that consolidates information from various sources, including Coingecko and CoinMarketCap.

### What web browsers are not supported?
The unsupported browsers are Edge and Internet Explorer. 
If you experience issues with other browsers, please inform our teams via social media platforms such as Discord or Telegram, or submit an issue on GitHub. 
All relevant links can be found on the Archethic website. 
Thank you for your assistance.

### Why do I always end up with a dust of tokens when I create a pool, add liquidity, and then drain the pool?
To avoid issues associated with extremely small amounts of liquidity tokens that could cause rounding and precision errors in calculations, the pool creation smart contract burns a small quantity of the first issued liquidity tokens. This means that these tokens are removed from circulation and sent to a contract address from which they cannot be retrieved.

This step of burning minimal liquidity is important because it helps to normalize the values in the pool from the start and prevents manipulation of the pool with very small amounts of liquidity, which could otherwise allow malicious actors to manipulate prices with a very small amount of money.

## Wallet

### I’m using the Mainnet network in the Wallet, how can I switch on the Testnet?
The switch is not possible because the seed is not shared between Mainnet and Testnet. Later, the wallet will be multiseeds, but not for the moment. The only way for the moment is to remove the Wallet (don’t forget the 24 words) and create/import a wallet on the Testnet network.

### Why can't I connect to the Archethic wallet with my Brave browser?
Brave includes a shield feature that might block certain local connections.
To successfully connect to the Archethic wallet, you'll need to modify the Brave browser’s shield settings as per its documentation


---

