---
id: signing-transaction
title: Signing transaction
sidebar_label: Signing transaction
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


This example delegates a **Transaction** signature to **aeWallet**.

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
import Archethic from "https://esm.sh/@archethicjs/sdk";

const archethicClient = new Archethic()
await archethicClient.connect()

const txBuilder = archethicClient.transaction
    .new()
    .setType("token")
    .setCode("")
    .setContent(JSON.stringify({
        name: "NFT 001",
        supply: 100000000,
        type: "non-fungible",
        symbol: "NFT1",
        aeip: [2],
        properties: {},
    }));


await archethicClient.rpcWallet
    .signTransactions(
        /// Replace by an account available on your wallet
        "archethic-wallet-<AccountName>",
        "",
        [
            txBuilder
        ]
    )
    .then((signResult) => {
        console.log(`Command succeed : ${signResult}`);
    })
    .catch((signError) => {
        /// signError is a JSONRPCError instance.
        console.error(`Command failed : ${JSON.stringify(signError)}`);
    })

await archethicClient.rpcWallet.close()
```

</TabItem>
<TabItem value="flutter" label="Flutter">

```dart
import 'dart:convert';
import 'dart:developer';

import 'package:archethic_lib_dart/archethic_lib_dart.dart';
import 'package:archethic_wallet_client/archethic_wallet_client.dart';

Future<void> main() async {
  final aewalletClient = await ArchethicDAppClient.auto(
    origin: const RequestOrigin(
      name: 'FlutterDappExample',
    ),
    replyBaseUrl: 'flutterdappexample://dapp.example',
  );

  await aewalletClient.connect();

  try {
    final response = await aewalletClient.signTransactions(
      SignTransactionRequest(
        /// Replace by an account available on your wallet
        serviceName: "archethic-wallet-<AccountName>", 
        pathSuffix: "",
        description: {
          "en": "This is an English description.",
          "fr": "Ceci est une description en français."
        },
        transactions: [
          SignTransactionRequestData(
            type: "token",
            version: 2,
            data: Data(
              content: """{
                  "name": "NFT 001",
                  "supply": 100000000,
                  "type": "non-fungible",
                  "symbol": "NFT1",
                  "aeip": [2],
                  "properties": {},
                }""",
              code: "",
              ledger: Ledger(
                token: TokenLedger(),
                uco: UCOLedger(),
              ),
            ),
          ),
          SignTransactionRequestData(
            type: "token",
            version: 2,
            data: Data(
              content: """{
                  "name": "NFT 002",
                  "supply": 100000000,
                  "type": "non-fungible",
                  "symbol": "NFT1",
                  "aeip": [2],
                  "properties": {},
                }""",
              code: "",
              ledger: Ledger(
                token: TokenLedger(),
                uco: UCOLedger(),
              ),
            ),
          ),
        ]
      ),
    );
    response.when(
      failure: (failure) {
        log('Command failed', error: failure);
      },
      success: (result) {
        log(
          'Command succeed : ${json.encode(result)}',
        );
      },
    );
  } catch (e) {
    log('Command failed', error: e);
  }


  await aewalletClient.close();
}
```

</TabItem>
</Tabs>




