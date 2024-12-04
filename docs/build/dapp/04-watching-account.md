---
id: watch-balance
title: Watching account
sidebar_label: Watching account
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


This example connects to **aeWallet** and watches any update to selected account.

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


```dart
import 'dart:convert';
import 'dart:developer';

import 'package:archethic_wallet_client/archethic_wallet_client.dart';

Future<void> main() async {
  final aewalletClient = await ArchethicDAppClient.auto(
    origin: const RequestOrigin(
      name: 'FlutterDappExample',
    ),
    replyBaseUrl: 'flutterdappexample://dapp.example',
  );

  final subscription =
      await aewalletClient.subscribeCurrentAccount().valueOrThrow;
  subscription.updates.listen((account) {
    log('Account updated : ${jsonEncode(account.toJson())} ...');
  });
  await aewalletClient.connect();

  await Future.delayed(Duration(seconds: 10));

  await aewalletClient.unsubscribeCurrentAccount(subscription.id);
  await aewalletClient.close();
}
```

</TabItem>
</Tabs>




