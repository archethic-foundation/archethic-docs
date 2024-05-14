---
id: aeweb
title: aeHosting
---

## General 

### ** How do I redirect my domain names to my websites deployed on the Archethic Blockchain?**

All the information regarding DNS configuration is available in the <a href="/participate/aeweb/dns" target="_blank">dedicated section</a>.

You will also find <a href="/participate/aeweb/dns#hosting-provider-integration" target="_blank">examples</a> for Gandi, Cloudflare, and OVH services.

### **What is the purpose of a .gitignore file?**

The .gitignore file serves to exclude specific files and directories from version control with Git. In the context of AEWeb, it's used to prevent the upload and synchronization of configuration and development files that are specific to the Git repository. This ensures that only the essential files of the website are transferred during the upload process.

### **When using the Archethic wallet's "link to a file hosted on AEWeb" option to create an NFT with an image, does it require sending funds to the newly created address using AEWeb CLI?**

Currently, the AEWeb CLI is not directly connected to the wallet. Therefore, it is necessary to provision the chain that will host the files in order to pay the transaction fees. However, you can still use the wallet's keychain by retrieving the passphrase and utilizing the wallet's service to send funds to the service hosting the image, just as if you were performing the action directly from the wallet.

Here's an example using the Testnet:

```
aeweb deploy --seed myseedphrase --endpoint https://testnet.archethic.net --path ./website --keychain-funding-service "archethic-wallet-ALICE" --keychain-website-service myImageAEWeb
```
