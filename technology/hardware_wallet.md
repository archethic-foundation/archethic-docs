# Ledger Device with ArchEthic Testnet
[TOC]

## Introduction

A blockchain or crypto wallet is a way to manage, secure, and use cryptocurrencies such as UCO, Bitcoin, Ethereum and other digital assets based on a blockchain (for example, an NFT). There are two basic types of blockchain wallets: software wallets and hardware wallets.

Types of software wallets include web (or crypto exchange) wallets, mobile wallets, and desktop wallets. A hardware wallet is a physical device that secures access to your cryptos offline ([source](https://www.fool.com/investing/stock-market/market-sectors/financials/blockchain-stocks/blockchain-wallet/#:~:text=There%20are%20two%20basic%20types,access%20to%20your%20cryptos%20offline.)). This guide explains interaction and testing of hardware wallet, specifically the Ledger Device (Nano S) with archethic testnet.

A Ledger Device is a hardware root of trust based wallet that is considered one of the most secure ways to store your digital assets. Ledger uses an offline, or cold storage, method of generating private keys, making it a preferred method for many crypto users. 


![](https://i.imgur.com/hlFqBsS.png)

As given in the figure, there are 3 important components inorder to support ledger device for a given blockchain.
- Bolos Application
    This application is written in C and resides on the physical Ledger device. For ArchEthic's blockchain, this can be found on [ArchEthic's github](https://github.com/archethic-foundation/archethic-ledger) and the functional documentation for the app can be found on the official [docs repository](https://github.com/archethic-foundation/archethic-docs/blob/docusaurus/development/wallets/hardware/ledger/archethic_bolos_app.md).

- Companion App
    This is the application which acts like a bridge of communication between user/blockchain and the Bolos application mentioned above. For ArchEthic's blockchain, this is [ALCA (CLI)](https://github.com/archethic-foundation/ledger-cli-app) and Flutter based [Wallet (GUI)](https://github.com/archethic-foundation/archethic_wallet).
    
- Remote backend
    This is the node which accepts data (signed transactions) from the Companion app mentioned above inorder to include it into the blockchain. For ArchEthic's blockchain, it is the testnet node. Once transaction is published, the data can be verified on [archethic.net](https://testnet.archethic.net/explorer).
    
    
## Synopsis
This guide will help you to connect your Ledger device to ALCA, dedicated Command Line Interface (CLI). ALCA (ArchEthic Ledger CLI App) enables you to Send and Receive UCOs on ArchEthic Testnet with the Ledger Device.

Soon, ALCA will be replaced by ArchEthic's Wallet, which is GUI-based, thus enabling non-tech users to experiment with ArchEthic's testnet.

:::success
This is a developer guide and not for general public. This guide assumes the reader has a prior knowledge of ArcEthic and Ledger Ecosystem.
:::

## Prerequisites
:::info
A more general public guide will soon be released once security audit for developer release is done and GUI support for Ledger Device is added to current ArchEthic's Wallet (Mobile + Desktop)
:::
Before You Start, Make Sure:
- You’ve [initialized](https://support.ledger.com/hc/en-us/articles/360000613793?docs=true) your Ledger Device.
- The latest firmware is [installed](https://support.ledger.com/hc/en-us/articles/360002731113?docs=true) (Ledger Nano S).
- ArchEthic Bolos App is [loaded](https://github.com/archethic-foundation/archethic-ledger) on Ledger (Tested with Nano S only).
- Install the latest version of [ALCA](https://github.com/archethic-foundation/ledger-cli-app).
- Nodejs (v14.0+)

## Installation Instruction
- Clone the repository from [github](https://github.com/archethic-foundation/ledger-cli-app.git)
- Run `yarn` or `npm install` from root folder of the project
- Run `npm link`
- Use it as ledger_cli (commands)

## Testing
From Terminal use it as ```ledger_cli (about | getAppVersion | getPublicKey | getArchAddress | sendTxn```

## Demo
The demo shows various screens a user will be shown for getting origin public key, onchain wallet address and performing signature on transaction involving single UCO transfer at a time between 2 parties.

![](https://i.imgur.com/gk8Q9Ku.gif)

