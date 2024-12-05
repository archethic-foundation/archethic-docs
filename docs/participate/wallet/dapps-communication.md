---
id: dapps-communication
title: Communication with DApps
sidebar_label: Communication with DApps
sidebar_position: 1
---

:::caution
This documentation aims to get an **in-depth understanding** of the **Archethic Wallet RPC** protocol.

If you are more interested in **DApp development**, [check these documents](../../build/dapp).
:::

In the blockchain ecosystem, decentralized applications (dApps) are becoming increasingly popular. To enable reliable and secure communication between these applications and the blockchain, Archethic has developed a communication protocol with its Archethic Wallet application. This protocol allows dApps to delegate secure communication with the blockchain to the wallet and to protect private information within the wallet (seed, private keys) without exposing it to the dApps.

# Point of view on usage

When a dApp wants to perform a transaction that requires the use of private keys, it must call on the user’s wallet to protect this information and avoid unauthorized exposure. There are several ways to do this:

The dApp can solicit the wallet in a “covert” manner without requiring the user’s intervention. For example, it can retrieve information about the current account or services available in the decentralized wallet.

![1](/img/wallet/dapps-communication/1.webp)

The dApp can also listen to the wallet and adapt itself according to the actions performed in it. For example, a change in the current account in the wallet may result in a change in the current account in the dApp.

![2](/img/wallet/dapps-communication/2.webp)

Finally, the dApp can solicit the wallet and ask the user to confirm an action. For example, this could be the signing of a transaction.

![3](/img/wallet/dapps-communication/3.webp)

# Technical point of view

In order not to limit the platforms, Archethic has implemented two protocols to allow an easy integration of its wallet with dApps:

- For Desktop and Web Client platforms, Archethic uses the Local RPC server protocol. A WebSocket server is provided by Archethic Wallet, using the JSON-RPC 2.0 protocol. DApp developers can use the Dart or JS coded communication libraries provided by Archethic to easily integrate this functionality into their dApp.
- For Mobile platforms, Archethic uses DeepLinks via an HTTPS URL to enable communication between the dApp and the Archethic wallet.

For the Dart and Flutter part, these protocols have been implemented within the “Archethic Wallet Client” (AWC) communication library, which therefore allows Dapps to communicate with the Archethic wallet through a unified interface.

![4](/img/wallet/dapps-communication/4.webp)

AWC supports several API methods, including signing and sending transactions to the Archethic blockchain, retrieving the wallet’s endpoint URL, retrieving accounts available on the wallet, adding services to the keychain, and more.

Using AWC allows Dapps developers to focus on developing their application rather than managing communication with the wallet and blockchain. The solution is also cross-platform (macOS, iOS, Android, Web, Windows, Linux), which facilitates the interaction between users and the blockchain and avoids forcing developers to develop their Dapps on a specific platform.

It is worth noting that for the JS part, developers can find the interfaces directly in the “libjs” library of Archethic. This greatly facilitates the integration of the wallet with dApps written in JavaScript.

![5](/img/wallet/dapps-communication/5.webp)


# In conclusion

The communication protocol developed by Archethic allows an easy and secure interaction between dApps and the blockchain by delegating the communication to the user’s wallet. The integration methods proposed are simple and efficient, especially thanks to the “Archethic Wallet Client” (AWC) communication library which facilitates the use of the API. Developers can focus on developing their application without having to manage communication with the wallet and the blockchain. This cross-platform solution is therefore a wise choice for developers who want to write dApps that are compatible with different platforms. Finally, the availability of interfaces in the “libjs” library also facilitates integration for developers of applications written in JavaScript.

Find more information at the following links.

- AEIP 4 / Specifications: https://github.com/archethic-foundation/aeip/blob/main/AEIP-4.md
- AWC Dart lib: https://github.com/archethic-foundation/archethic-wallet-client-dart
- AWC JS lib (into archethic JS lib): https://github.com/archethic-foundation/libjs
