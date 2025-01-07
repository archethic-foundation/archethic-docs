---
id: introduction
title: Howto create a DApp
sidebar_label: Introduction
sidebar_position: 1
---


This documentation aims to guide developers in integrating with **Archethic Wallet** (**aeWallet**). It explains various communication methods and includes code snippets in **Dart (Flutter)** and **Javacript / TypeScript**.

:::note
If you are more interested in **Archethic Wallet RPC** protocol fundamentals, [check these documents](../../participate/wallet/dapps-communication).
:::

:::caution
Before going further, you **must have a minimal understanding** of the way Archethic blockchain works.

If not, [**these docs are a good start**](../../learn/)
:::


## Introduction

Archethic wallets enable **DApps (Decentralized Applications)** to interact with the Archethic blockchain. This interaction is essential for:

- Signing transactions.
- Managing accounts.

While keeping your secrets protected in **aeWallet**.


## Communication Channels

Below are the supported communication methods with Archethic wallets:

| **DApp platform**     | **aeWallet platform** | **Channel**         | **Typescript Lib**    | **Flutter Lib**       |
| --------------------- | --------------------- | ------------------- | --------------------- | --------------------- |
| Web (Desktop browser) | Desktop               | WebSocket           | ✅                     | ✅                     |
| Web (Mobile browser)  | Mobile                | Web Message Channel | ⛔️ Not implemented yet | ⛔️ Not implemented yet |
| Web (Desktop browser) | Chrome Extension      | Web Message Channel | ✅                     | ✅                     |
| Desktop               | Desktop               | WebSocket           | ✅                     | ✅                     |
| Mobile                | Mobile                | DeepLink            | ⛔️                     | ✅                     |


### Using Deeplinks for Seamless Integration

aeWallet supports opening DApps directly in an in-app webview using deeplinks. This feature enables seamless interaction between DApps and the wallet on mobile devices.

To use this functionality, the URL parameters must be encoded in base64Url before being included in the deeplink.

#### URL Schema

The deeplink follows this schema:

```
aewallet://dapps_webview?[base64Url_encoded_parameters]
```

#### Supported Parameters

- url: The URL of the DApp to be loaded in the webview. (mandatory)
- name: The name of the DApp. (mandatory)
- code: A unique identifier for the DApp. (mandatory)
- iconUrl: The URL of the DApp's icon.
- description: A short description of the DApp.
- category: The category of the DApp (e.g., info, finance, gaming, etc.).

#### Example Workflow

1. **Construct the URL with Required Parameters**

Example:

```
aewallet://dapps_webview?code=aeWebsite&url=https://archethic.net&category=info&description=Archethic Official Website&name=Archethic Website&iconUrl=https://archethic.net/favicon.ico
````

2. **Encode the URL in base64Url**

Ensure all parameters are encoded in base64Url for compatibility. The encoded result might look like this:

```
aewallet://dapps_webview?ZGFwcFVybD1odHRwczovL2FyY2hldGhpYy5uZXQmZGFwcE5hbWU9QXJjaGV0aGljJTIwV2Vic2l0ZSZkYXBwQ29kZT1hZVdlYnNpdGUmY2F0ZWdvcnk9aW5mbyZkZXNjcmlwdGlvbj1BcmNoZXRoaWMlMjBPZmZpY2lhbCUyMFdlYnNpdGUm...
```

3. **Test the Deeplink**

Use the encoded URL in your application or mobile browser to verify that it correctly opens the DApp in the aeWallet webview.


## Tools and Libraries

- **Flutter/Dart:** 
    - [archethic_lib_dart](https://pub.dev/packages/archethic_lib_dart)
    - [archethic_wallet_client](https://pub.dev/packages/archethic_wallet_client)
- **Javascript/TypeScript:** [@archethicjs/sdk](https://www.npmjs.com/package/@archethicjs/sdk)
- [AEIP 4 / Specifications](https://github.com/archethic-foundation/aeip/blob/main/AEIP-04.md)
