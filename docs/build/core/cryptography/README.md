---
id: cryptography
title: Cryptography
---

## Node Keystore

Node cryptography is maintained through keystore which stores the transaction index and reference to the public keys.

A behavior is defined to be able swap and test easily implementations.

There are several implementations of the node keystore:
- Software implementation (used in dev mode and testnet)
- Hardware implementation
	- [TPM](/build/core/cryptography/tpm)
	- [Yubikey](/build/core/cryptography/yubikey)

More details here: [Node keystore](https://github.com/archethic-foundation/archethic-node/blob/master/lib/archethic/crypto/keystore/node.ex)

## Node Shared Secrets Keystore

Along with node keystore, node shared secrets have their own keystore as it used to store secrets as daily nonce, storage nonce and provide the API to leverage them for transaction validation, election algorithm, etc..

A behavior is also provided to be able to swap implementations. Right now only the software implementation is supported.

More details here: [Shared Secrets keystore](https://github.com/archethic-foundation/archethic-node/blob/master/lib/archethic/crypto/keystore/shared_secrets.ex)
