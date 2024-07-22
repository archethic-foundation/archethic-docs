---
id: bridge-2-ways
title: aeBridge
---

## General

### What is Archethic Bridge?
The Archethic Bridge is a decentralized, peer-to-peer bridge that enables the seamless exchange of UCO ERC20 tokens and other major cryptocurrencies like ETH, MATIC, and BNB between the Archethic blockchain and various other blockchains, including Ethereum, Polygon, and BSC.

This functionality allows for the transfer of these assets into their equivalent forms on Archethic, such as aeETH, aeMATIC, and aeBNB, providing a secure and straightforward method for exchanging assets. The bridge utilizes atomic swap technology, specifically Hash Time Lock Contracts (HTLC), to facilitate secure and intermediary-free transactions.

Moreover, it incorporates Archethic's unique cross-chain verification technique, enhancing the security and decentralization of these exchanges.

This bridge significantly expands the interoperability between Archethic and other blockchain networks, allowing for greater flexibility and integration within the broader blockchain ecosystem.

### How to access the Archethic Bridge ?
You can access the bridge at : [https://bridge.archethic.net](https://bridge.archethic.net)

### Which blockchain is better to bridge my UCOs?

Using the 3 blockchains, the result will be the same, but fees are not the same between Ethereum, Polygon (PoS) and BSC.
Polygon has the lowest fees.

![bridge-blockchains](/img/faq/bridge/Blockchains.svg)

### What blockchains does the Archethic Bridge support?
The Archethic Bridge currently supports bridging between the Archethic blockchain and various EVM (Ethereum Virtual Machine) compatible blockchains.

### Is the Archethic Bridge available on mobile devices?
No, the Archethic Bridge application is designed exclusively for the moment for desktop use and is compatible with macOS, Linux, and Windows operating systems.

### What is an EVM wallet?
An EVM (Ethereum Virtual Machine) wallet is a digital wallet designed to interact with blockchains that are compatible with the Ethereum Virtual Machine. EVM wallets can store, send, and receive Ether (ETH) and other EVM-compatible tokens, execute smart contracts, and interact with decentralized applications (dApps) on EVM-compatible networks.

### How is the price of $UCO estimated?
The price of $UCO is determined using an Archethic Oracle that consolidates information from various sources, including Coingecko and CoinMarketCap.

### How long is the predetermined time?
The timelock lasts 2 hours.

### Is the bridge audited?

Yes, our EVM smart contracts have been audited by [Hacken](https://hacken.io), a recognized leader in blockchain security. The full audit report is available [here](/audits/Hacken_Archethic_[SCA]%20Archethic%20_%20Bridge-Contracts%20_%20June2024_P-2024-692_1_20240722%2011_07.pdf).


## Key Concepts

### What is an HTLC (Hash Time Lock Contract) in the context of Archethic's bridge?
HTLC stands for Hash Time Lock Contract. In Archethic's bridge, it is a type of contract used in atomic swaps to securely exchange assets in a peer-to-peer manner without intermediaries. These contracts lock funds until a secret is revealed or a specified time period elapses, ensuring a secure and reversible asset exchange.

### How does Archethic's cross-chain verification work?
Archethic's cross-chain verification enhances atomic swaps by allowing data retrieval outside of the blockchain. This makes the process fully decentralized and strengthens the security model. Archethic's nodes can verify transaction status on other chains, like EVM blockchains, establishing a strong consensus on the status of a swap.

## Specifics of Bridging

### How does the process of bridging from EVM to Archethic work?
To bridge from EVM to Archethic, a user deploys an HTLC smart contract on both blockchains. The process involves locking funds using a secret and its hash, verifying the transaction across chains, minting new tokens on Archethic, and transferring funds to respective recipient wallets. The entire process is secured by atomic swaps and Archethic's cross-chain verification.

### What is the process for bridging from Archethic to EVM?
Bridging from Archethic to EVM follows a similar pattern but in reverse. It introduces an additional step where EVM cannot directly request information from the blockchain. Instead, cryptography is used to assert actions through signatures, ensuring non-repudiation. This involves creating and funding HTLC contracts on both blockchains, revealing secrets, and transferring funds securely.

## Wallet

### I’m using the Mainnet network in the Wallet, how can I switch on the Testnet?

The switch is not possible because the seed is not shared between Mainnet and Testnet. Later, the wallet will be multiseeds, but not for the moment. The only way for the moment is to remove the Wallet (don’t forget the 24 words) and create/import a wallet on the Testnet network.

### Why can't I connect to the Archethic wallet with my Brave browser?

Brave includes a shield feature that might block certain local connections.
To successfully connect to the Archethic wallet, you'll need to modify the Brave browser’s shield settings as per its documentation

## Testnet

### How do I set up Ethereum Sepolia, Binance Testnet and Polygon Mumbai in my EVM Wallet?

To configure these networks in your EVM Wallet, you'll need to go to the wallet's settings and manually add each network using the Chain ID and Explorer URL provided above.

Ethereum Sepolia Testnet:<br/>
URL RPC: Choose a RPC server address: [https://chainlist.org/chain/11155111](https://chainlist.org/chain/11155111)<br/>
Chain ID: 11155111<br/>
Symbol: ETH<br/>
Explorer URL: [https://sepolia.etherscan.io/](https://sepolia.etherscan.io/)<br/>

Binance Smart Chain Testnet:<br/>
URL RPC: Choose a RPC server address: [https://chainlist.org/chain/97](https://chainlist.org/chain/97)<br/>
Chain ID: 97<br/>
Symbol: tBNB<br/>
Explorer URL: [https://testnet.bscscan.com/](https://testnet.bscscan.com/)<br/>

Polygon Mumbai Testnet no longer supported. Amoy will be later

### How can I buy $UCO after receiving $ETH, $MATIC, or $BNB?

You will be able to buy some $UCO with $ETH / $MATIC or $BNB using the appropriate decentralized exchange (DEX) for your network.
Remember to set the slippage according to the amount's impact on liquidity.
Here's how you can do it for each network:

ETH : [https://app.uniswap.org/](https://app.uniswap.org/)<br/>
ERC20 UCO contract address: 0x8a3d77e9d6968b780564936d15B09805827C21fa<br/>

Polygon: [https://app.uniswap.org/](https://app.uniswap.org/)<br/>
ERC20 UCO contract address: 0x3c720206bfacb2d16fa3ac0ed87d2048dbc401fc<br/>

BSC: [https://pancakeswap.finance/liquidity?chain=bscTestnet](https://pancakeswap.finance/liquidity?chain=bscTestnet)<br/>
ERC20 UCO contract address: 0xb001f1e7c8bda414ac7cf7ecba5469fe8d24b6de<br/>

Ensure that you connect your wallet to the respective DEX platform and follow the instructions to make the swap.

## Issues management

### What happens if a problem occurs, or I refuse a transaction during the transfer?
During the delay of the acknowledgment, you should wait for the end of the duration, and you can tell the refund of your ERC20 Wallet with the "Refund" button available on your Archethic Bridge application.

### If I sent the tokens to a wrong Mainnet address, what to do?
You lose the tokens if the Mainnet address is not your address. Same thing if you do an error in the address (for example a 0 instead of 1).

### Can I help the developers analyze the problems?
You can help developers improve the application by submitting information that describes the state of the application.
To do this, you can copy/paste your transaction from your local history in the application.

### While a bridge from Archethic to EVM Blockchain, I have an error '1405'
First, rest assured that you will not lose your funds initiated in the bridging process.
Note the address of the Archethic contract indicated under the error message (or available in your local history) and contact Archethic support via social media (Telegram or Discord) who will resolve the issue and help you complete your bridge.

### The bridge does not recognize my EVM wallet. What should I do?

If your EVM wallet is not recognized by the bridge, follow these steps to resolve the issue:

1) **Check your wallet version**: Make sure you are using the latest version of your EVM wallet. Update if necessary.<br/>
2) **Open your wallet**: Ensure that your EVM wallet is open and that you have entered your password.<br/>
3) **Wallet conflicts**: Verify that you do not have multiple EVM wallets active at the same time. Having several wallets open can cause conflicts.<br/>
4) **Deactivate other wallets**: Deactivate all open EVM wallets except the one you want to use. This ensures that only the desired wallet is active, avoiding any conflicts.<br/>

By following these steps, you should be able to resolve the issue of the bridge not recognizing your EVM wallet.

---
