---
id: introduction
title: Howto create a DApp
sidebar_label: Introduction
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


This documentation aims to guide beginner and intermediate developers in integrating with **Archethic Wallet** (**aeWallet**). It explains various communication methods and includes code snippets in **Dart (Flutter)** and **TypeScript**.


## Introduction

Archethic wallets enable **DApps (Decentralized Applications)** to interact with the Archethic blockchain. This interaction is essential for:

- Signing transactions.
- Managing accounts.

While keeping your secrets protected in **aeWallet**.


## Communication Channels

Below are the supported communication methods with Archethic wallets:

| **DApp platform**         | **aeWallet platform**     | **Channel**                   | **Typescript Lib**    | **Flutter Lib**          |
|---------------------------|---------------------------|-------------------------------|-----------------------|-----------------------|
| Web (Desktop browser)     | Desktop                   | WebSocket                     | ✅                    | ✅                     |
| Web (aeWallet browser)    | Mobile                    | Web Message Channel           | ⛔️ Not implemented yet| ⛔️ Not implemented yet |
| Web (Desktop browser)     | Chrome Extension          | Web Message Channel           | ✅                    | ✅                     |
| Desktop                   | Desktop                   | WebSocket                     | ✅                    | ✅                     |
| Mobile                    | Mobile                    | DeepLink                      | ⛔️                    | ✅                     |


:::info
Currently, the primary use case is **web desktop DApps** running in browsers like Chrome. In the future, a mobile wallet will support DApps through an embedded browser.
:::



## Tools and Libraries

- **Flutter/Dart:** [archethic_lib_dart](https://pub.dev/packages/archethic_lib_dart)
- **TypeScript:** [@archethicjs/sdk](https://www.npmjs.com/package/@archethicjs/sdk)


## Additional Resources

- [archethic_wallet_client on pub.dev](https://pub.dev/packages/archethic_wallet_client)
- [archethic_lib_dart on pub.dev](https://pub.dev/packages/archethic_lib_dart)
- [@archethicjs/sdk on npm](https://www.npmjs.com/package/@archethicjs/sdk)

