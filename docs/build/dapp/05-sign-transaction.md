---
id: signing-transaction
title: Signing transaction
sidebar_label: Signing transaction
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


This example attempts to connect to **aeWallet** and writes a log when connection status is updated.

:::tip
Ensure that the **aeWallet** application is **running and unlocked** before attempting connection.
:::

<Tabs groupId="sdk">
<TabItem value="typescript" label="TypeScript" >

```html title="index.html"
<html>
  <head>
    <script type="module" src="main.js"/>
  </head>
</html>
```

```typescript title="main.js"
import Archethic, { ConnectionState } from "https://esm.sh/@archethicjs/sdk";

/// Creates an Archethic client.
/// This checks aeWallet RPC available transport methods and creates 
/// an ArchethicWalletClient accordingly.
const archethicClient = new Archethic()

/// Listen to rpc wallet connection status changes
archethicClient.rpcWallet.onconnectionstatechange(async (state) => {
    switch (state) {
        case ConnectionState.Connecting:
            console.log("Connecting  ...")
            break
        case ConnectionState.Closed:
            console.log("Connection closed")
            break
        case ConnectionState.Closing:
            console.log("Disconnecting ...")
            break
        case ConnectionState.Open:
            const { endpointUrl } = await archethicClient.rpcWallet.getEndpoint()
            const walletAccount = await archethicClient.rpcWallet.getCurrentAccount()
            console.log(`Connected as ${walletAccount.shortName} to ${endpointUrl}`)
            break
    }
})

/// Connect to aeWallet to check the selected chain.
/// That chain will then be used by `archethicClient`.
await archethicClient.connect()
```

</TabItem>
<TabItem value="flutter" label="Flutter">

By default, `ArchethicDAppClient` will check available communication channels, and choose the most appropriate one.

Alternatively, you may force `ArchethicDAppClient` to use a specific communication channel using the dedicated factory (`ArchethicDAppClient.messageChannel()`, `ArchethicDAppClient.websocket()` ...).


```dart
import 'dart:developer';

import 'package:archethic_wallet_client/archethic_wallet_client.dart';

Future<void> main() async {
  final aewalletClient = await ArchethicDAppClient.auto(
    origin: const RequestOrigin(
      name: 'FlutterDappExample',
    ),
    replyBaseUrl: 'flutterdappexample://dapp.example',
  );

  /// Do not forget to close that subscription later.
  final connectionStateSubscription =
      aewalletClient.connectionStateStream.listen((event) {
    event.when(
      connecting: () {
        log('Connecting ...');
      },
      disconnected: () {
        log('Connection closed');
      },
      disconnecting: () {
        log('Disconnecting ...');
      },
      connected: () async {
        final walletAccount =
            await aewalletClient.getCurrentAccount().valueOrThrow;
        final endpoint = await aewalletClient.getEndpoint().valueOrThrow;
        log('Connected as ${walletAccount.shortName} to ${endpoint.endpointUrl}');
      },
    );
  });

  await aewalletClient.connect();

  await Future.delayed(Duration(seconds: 1));

  await aewalletClient.close();
  connectionStateSubscription.cancel();
}
```

</TabItem>
</Tabs>




