---
id: faq
title: FAQ
sidebar_label: FAQ
---

## How to test a WebSocket connection locally?

Ensure that the Archethic wallet is running and listening on the correct port. You can use tools like wscat for testing.

## Which browsers are supported?

Currently, only Chrome is supported with the Archethic extension.

## Deeplink RPC limitations

For a **mobile DApp** to communicate with **aeWallet mobile**, the only communication channel is the deeplink.
This means that **aeWallet** will briefly be brought to the foreground during each call made by your **DApp**.

Due to this limitation, we have decided to disable **subscription RPC calls** by **deeplink**.
