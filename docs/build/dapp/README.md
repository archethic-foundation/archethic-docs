---
id: connect-wallet
title: Technical Connection to an Archethic Wallet
sidebar_label: DApp - Connect to Wallet
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Technical Connection to an Archethic Wallet

This documentation aims to guide beginner and intermediate developers in integrating with **Archethic wallets**. It explains various communication methods and includes code snippets in **Dart** and **TypeScript**.

---

## Introduction

Archethic wallets enable **DApps (Decentralized Applications)** to interact with the Archethic blockchain. This interaction is essential for:

- Signing transactions.
- Managing accounts.
- Accessing on-chain data.

:::info
Currently, the primary use case is **web desktop DApps** running in browsers like Chrome. In the future, a mobile wallet will support DApps through an embedded browser.
:::

---

## Communication Channels

Below are the supported communication methods with Archethic wallets:

| **Platform**              | **Channel**                   | **Protocol**            |
|---------------------------|-------------------------------|-------------------------|
| Web Desktop ↔ aeWallet Desktop | WebSocket                   | JSON RPC                |
| Web Desktop ↔ aeWallet Chrome Extension | Web Message Channel        | JSON RPC                |
| Desktop (Flutter) ↔ aeWallet Desktop | WebSocket                   | JSON RPC                |
| Mobile ↔ aeWallet Mobile  | DeepLink                     | JSON RPC                |

---

## Prerequisites

### Tools and Libraries

- **Dart:** [archethic_lib_dart](https://pub.dev/packages/archethic_lib_dart)
- **TypeScript:** [@archethicjs/sdk](https://www.npmjs.com/package/@archethicjs/sdk)

### Supported Environments

- **Languages:** Dart, TypeScript.
- **Browsers:** Chrome (with extension).
- **Frameworks:** Flutter, Node.js for TypeScript examples.

:::info
Ensure that the wallet application (desktop or mobile) is running and listening for connections before attempting integration.
:::

---

## Connection Methods

### Web Desktop ↔ aeWallet Desktop

1. Establish a **WebSocket** connection to the wallet's local server.
2. Send a JSON RPC request to initiate the connection.

<Tabs groupId="sdk">
<TabItem value="typescript" label="TypeScript">

```typescript
import { Archethic } from '@archethicjs/sdk';

// Initialize WebSocket
const websocket = new WebSocket("ws://localhost:PORT");

// Send a JSON RPC request
websocket.onopen = () => {
  const request = {
    jsonrpc: "2.0",
    id: 1,
    method: "wallet_connect",
    params: { app_name: "MyDApp" }
  };
  websocket.send(JSON.stringify(request));
};

// Handle response
websocket.onmessage = (event) => {
  const response = JSON.parse(event.data);
  console.log("Response received:", response);
};
```

</TabItem>
<TabItem value="dart" label="Dart">

```dart
import 'package:archethic_lib_dart/archethic_lib_dart.dart';
import 'dart:io';

// WebSocket connection
void connectToWallet() async {
  final socket = await WebSocket.connect('ws://localhost:PORT');

  // Send JSON RPC request
  final request = {
    'jsonrpc': '2.0',
    'id': 1,
    'method': 'wallet_connect',
    'params': {'app_name': 'MyDApp'}
  };
  socket.add(request);

  // Handle response
  socket.listen((data) {
    print('Response received: $data');
  });
}
```

</TabItem>
</Tabs>


### Web Desktop (Chrome) ↔ aeWallet Chrome Extension


1.	Use the browser’s message channel to send and receive data between the DApp and the extension.

<Tabs groupId="sdk">
<TabItem value="typescript" label="TypeScript">

```typescript
// Listen for responses from the wallet extension
window.addEventListener("message", (event) => {
  if (event.data.type === "WALLET_RESPONSE") {
    console.log("Wallet response:", event.data.payload);
  }
});

// Send a request to the wallet extension
window.postMessage({
  type: "WALLET_REQUEST",
  method: "wallet_connect",
  params: { app_name: "MyDApp" }
}, "*");
```

</TabItem>
</Tabs>


### Mobile ↔ aeWallet Mobile

1.	Use a deep link to open the mobile wallet app and pass the required parameters.


<Tabs groupId="sdk">
<TabItem value="dart" label="Dart">

```dart
import 'package:url_launcher/url_launcher.dart';

// Launch the wallet using a deep link
void launchWallet() async {
  const deepLink = "archethicwallet://connect?app_name=MyDApp";
  if (await canLaunch(deepLink)) {
    await launch(deepLink);
  } else {
    throw 'Unable to open the wallet.';
  }
}
```

</TabItem>
</Tabs>


## Error Handling

:::tip
Always implement error handling for connection failures and unexpected wallet responses.
:::

### Common Errors

1.	WebSocket connection error
	- Ensure the wallet is running and listening on the correct port.
2.	JSON RPC request rejected
	- Validate that the parameters sent are correct.


### Example: Error Handling for WebSocket (TypeScript)

<Tabs groupId="sdk">
<TabItem value="typescript" label="TypeScript">

```typescript
websocket.onerror = (error) => {
  console.error("WebSocket error:", error);
};

websocket.onclose = () => {
  console.log("Connection closed. Attempting to reconnect...");
  // Implement reconnection logic here
};
```

</TabItem>
</Tabs>


### Best Practices

- Always validate JSON RPC responses to detect errors.
- Implement reconnection mechanisms in case of failures.

## Security
1.	**Private Keys:** Never store private keys in your code or on the client-side.
2.	**Secure Channels:** Use secure connections (HTTPS for Web and WSS for WebSocket).
3.	**Permissions:** Limit the permissions your application requests to only what is necessary.

:::info
Following these security best practices is critical to protecting user funds and data.
:::

## Additional Resources

- [Official Archethic Documentation](https://www.archethic.net/)
- [archethic_lib_dart on pub.dev](https://pub.dev/packages/archethic_lib_dart)
- [@archethicjs/sdk on npm](https://www.npmjs.com/package/@archethicjs/sdk)

# FAQ

## How to test a WebSocket connection locally?

Ensure that the Archethic wallet is running and listening on the correct port. You can use tools like wscat for testing.

## Which browsers are supported?

Currently, only Chrome is supported with the Archethic extension.