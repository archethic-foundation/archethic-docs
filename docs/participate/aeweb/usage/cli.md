---
id: cli
title: AEWeb - CLI
sidebar_label: CLI
sidebar_position: 3
---


# AEWeb CLI (Command-Line Interface)

Repository: https://github.com/archethic-foundation/aeweb-cli

This tool, built with NodeJS, can be used to deploy files and websites to the Archethic blockchain.
Once installed, as instructed in the README, the `aeweb` command is available.

## aeweb generate-address 

This command is used to generate an address from a seed. 

:::info Use case
You might use this on TestNet for example, to determine an address to use the [faucet](https://testnet.archethic.net/faucet) on.
:::


```bash
$ aeweb generate-address --seed myseedphrase --index 0
00005da88a4adaf5b40c958a20db981bd168008e03efbb7fc9d35e11be182a0d3065
```



## aeweb deploy

This command is used to deploy the content of a folder or a single file. It will create the [transactions](/participate/aeweb/how-it-works), estimate the fees and, after confirmation, will write the transactions on the network.

Parameters: 
- `seed` The keychain seed, used to prove you are the owner of the transaction chain used to pay the fees
- `endpoint` https://testnet.archethic.net | https://mainnet.archethic.net | http://127.0.0.1:4000
- `path` The path of the folder/file to upload 


```
$ aeweb deploy --seed myseedphrase --endpoint https://testnet.archethic.net --path ./website
Connecting to https://testnet.archethic.net 
Creating file structure and compress content...
Creating transactions ...
Estimating fees ...
Total Fee Requirement would be : 2.58933391 UCO ( $ 0.23 | € 0.22), for 3 transactions.
Do you want to continue. (yes/no) yes
Sending 3 transactions...
Transaction 1...
Waiting transaction validation...
Transaction confirmed !
See transaction in explorer: https://testnet.archethic.net/explorer/transaction/000013c531...
-----------
Transaction 2...
Waiting transaction validation...
Transaction confirmed !
See transaction in explorer: https://testnet.archethic.net/explorer/transaction/0000a78a35...
-----------
Transaction 3...
Waiting transaction validation...
Transaction confirmed !
See transaction in explorer: https://testnet.archethic.net/explorer/transaction/0000f1126e...
-----------
Website is deployed at: https://testnet.archethic.net/api/web_hosting/00007d9167...
```

:::info There Can Be Only One
**There can only be a single deployment per seed.** Which makes it possible to update it by running the exact same command. The endpoint of your deployment will not change. 

If you need to deploy another website, use another seed (and transfer funds to it via the Wallet app).
:::


