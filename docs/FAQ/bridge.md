---
id: bridge
title: Archethic Bridge
---

## **Will the Archethic Network be available on Metamask?**

No, Archethic blockchain is not Ethereum Virtual Machine (EVM) compatible.

## **How can I add a network on Metamask?**

Here is a link giving a tutorial to add a custom network RPC on Metamask : [https://metamask.zendesk.com/hc/en-us/articles/360043227612-How-to-add-a-custom-network-RPC](https://metamask.zendesk.com/hc/en-us/articles/360043227612-How-to-add-a-custom-network-RPC)

## **Which blockchain is better to bridge my UCOs?**

Using the 3 blockchains, the result will be the same, but fees are not the same between ETH/MATIC/BSC. MATIC has the lowest fees.

## **How to install Metamask?**

Here is a link giving a tutorial to install Metamask : [https://www.coindesk.com/learn/how-to-set-up-a-metamask-wallet/](https://www.coindesk.com/learn/how-to-set-up-a-metamask-wallet/)

## **How can developers use Archethic bridge to create new decentralized applications?**

Developers can use blockchain bridges to create new decentralized applications by connecting different blockchain networks to enable the movement of assets, data, and information across them. 

This allows for the creation of interoperable DApps that can utilize the features and capabilities of multiple blockchain networks. 

Developers can use smart contract or atomic swap technology to facilitate the transfer of assets across different networks, and can also use cross-chain data oracles to access off-chain data on different networks.

## **Can you explain the process of moving assets across the crypto bridge on the Archethic blockchain?**

Archethic’s bridge leverages Atomic Swap, which is a way to bring safely assets between chains.

By using the bridge, you will create contract on ETH/BSC/MATIC and transfer your UCO in there. This contract is called “Hashed Time-locked contract” where the funds will be locked until the reveal of a secret or after lock time.

Once done, the same will be done on Archethic side. The two chains are now ready to transfer assets.
The transfer itself consists of revealing the private part of the secret encoded in the contracts, to allow the exchange.

Once the secret is revealed in one chain, the second can proceed to the reveal, as the secret is now public. 
Atomic swap provides secure transfers between chains as there is no pool holding all the assets but hard-coding of recipients and rules in a one-time contract.

## **What types of assets can be moved across the crypto bridge on the Archethic blockchain?**

Only UCOs can be “bridged”.

## **What are the fees associated with using the crypto bridge on the Archethic blockchain?**

You would have to pay the fees on ETH/BSC/MATIC to transfers your UCO and proceed to the transfer.
However, you won’t have to pay the fees on Archethic, which is the purpose of the bridge: to get funds on the Archethic’s network.