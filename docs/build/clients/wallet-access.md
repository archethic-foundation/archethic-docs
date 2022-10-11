---
id: wallet-access
title: Archethic's wallet access
---

Onchain wallet (aka **Keychain**) is a wallet stored on Archethic blockchain in encrypted form, to allow only the authorized access to read it and build transaction from it.

Also to avoid disclosure of information, access and keychain are using end to end encryption with elliptic curve cryptography to secure it.

Hence any client which would like to support wallet access and transaction building will have to be authorized.

## Access enrollment

When a device or application want to become an access to the wallet, it first have to create a transaction where the keychain transaction's address is encrypted into it. 
This data is stored in the `/data/ownerships` section of the transaction., where the authorized public key is the `transaction's public key` and the secret is an aes encryption of the keychain's address.

Then the keychain will create a new transaction on its chain by encrypting the wallet with a new AES key itself encrypted for the list of authorized access public keys wanted. (For instance the new device or application)

## Keychain retrieval

In order to retrieve the keychain from a device or application perspective, the access transaction's will be generated to be retrieved from the network.

Then the device or application will decrypt the encrypted keychain address to be able to download the keychain transaction.

Once received, the device or application - as being authorized by the keychain - will be able to decrypt the AES key to decrypt the wallet and perform any key derivation and transaction building from it.

Then, because the key have been generated on the fly, the client will forget about the private keys and seeds decrypted.

