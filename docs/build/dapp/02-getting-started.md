---
id: getting-started
title: Installation/Connection
sidebar_label: Getting started
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Installing library

<Tabs groupId="sdk">
<TabItem value="typescript" label="TypeScript" >

```shell
npm install @archethicjs/sdk
```

</TabItem>
<TabItem value="flutter" label="Flutter">

```shell 
flutter pub add archethic_wallet_client
```

</TabItem>
</Tabs>

## Setup Deeplink channel

:::note
For a **mobile DApp** to communicate with **aeWallet mobile**, the only communication channel is the deeplink.
:::

:::tip
This is required only if your **DApp** is an Android or iOS application.
:::

