---
id: introduction
title: Howto create a DApp
sidebar_label: Introduction
---


This documentation aims to guide beginner and intermediate developers in integrating with **Archethic Wallet** (**aeWallet**). It explains various communication methods and includes code snippets in **Dart (Flutter)** and **TypeScript**.


## Introduction

Archethic wallets enable **DApps (Decentralized Applications)** to interact with the Archethic blockchain. This interaction is essential for:

- Signing transactions.
- Managing accounts.

While keeping your secrets protected in **aeWallet**.


## Communication Channels

Below are the supported communication methods with Archethic wallets:

| **DApp platform**         | **aeWallet platform**     | **Channel**                   | **Typescript Lib**    | **Flutter Lib**       |
|---------------------------|---------------------------|-------------------------------|-----------------------|-----------------------|
| Web (Desktop browser)     | Desktop                   | WebSocket                     | ✅                    | ✅                     |
| Web (Mobile browser)      | Mobile                    | Web Message Channel           | ⛔️ Not implemented yet| ⛔️ Not implemented yet |
| Web (Desktop browser)     | Chrome Extension          | Web Message Channel           | ✅                    | ✅                     |
| Desktop                   | Desktop                   | WebSocket                     | ✅                    | ✅                     |
| Mobile                    | Mobile                    | DeepLink                      | ⛔️                    | ✅                     |


:::info
Mobile browser are currently not supported. 
In the future, mobile wallet will support Web DApps through an embedded browser.
:::


## Tools and Libraries

- **Flutter/Dart:** 
    - [archethic_lib_dart](https://pub.dev/packages/archethic_lib_dart)
    - [archethic_wallet_client](https://pub.dev/packages/archethic_wallet_client)
- **TypeScript:** [@archethicjs/sdk](https://www.npmjs.com/package/@archethicjs/sdk)
- [AEIP 4 / Specifications](https://github.com/archethic-foundation/aeip/blob/main/AEIP-4.md)
