--- 
id: wallet-spec
title: Archethic's wallet specification
--- 

Onchain wallet (aka **Keychain**) is a wallet stored on Archethic blockchain in encrypted form. 

This keychain aims to support several way to identify a user and its transaction chains.
It can also support multichains identification through the use of key derivation and derivation path.

A keychain is then a wallet which stores a main master seed, with a list of services (Archethic chains / other crypto identification) encrypted and only accessible by a list of authorized public keys

## Glossary

- `w_{e}` = Encoded Onchain Archethic Wallet
- `wk_{aes}` = AES256 CTR Key used to encrypt w_{e}
- `enc(w_{e})` = AES256 CTR Encryption of `w_{e}` using `wk_{aes}`
- `ew_{aes}` = Encoded `enc(w_{e})`
- `aes_key` = AES256 CBC Key used to encrypt `wk_{aes}`
- `enc(wk_{aes})` = AES256 CBC Encryption of `wk_{aes}` using `aes_key`
- `ewk_{aes}` = Encoded `enc(wk_{aes})`  
- `encode(pub_key)` = Encoded Public Key. 
- `arch_address` = Encoded Account Address. 
- `o_{priv}` = Origin Device Private Key 
- `o_{pub}` = Origin Device Public Key (raw 04xy) 
- `encode(o_{pub})` = Encoded Origin Device Public Key  
- `e_{key}` = Ephemeral Key Pair 
- `e_{pub}` = Ephemeral Public Key (raw 04xy) 
- `e_{priv}` = Ephemeral Private Key 
 
<!-- Origin can be a Software Wallet (Android/iOS/Desktop) or a Hardware wallet (Ledger/Yubikey).  -->

## Cryptography

### Derivation path

Archethic's keychain is using hierarchical derivation key scheme inspired by BIP32 to define a way
to generate keys and addresses.

Because Archethic cryptography and transaction chain paradigm differs from traditional blockchain (used in BIP32/BIP44)
we adapted it to use specific derivation scheme (as describe in the BIP43)

The main derivation path of Archethic keychain is: **m/650'/account'/index`** (where 650 is the Archethic transaction chain purpose - in the BIP43 terminology)

The `account` can be anything, by default `0` is the main uco transaction chain, but it could be customized to create more entropy.

The `index` is the number of transaction in the chain, used to compute the derived keys and addresses

### Key derivation

In order to derive the keys using the derivation path mentioned above, we implemented our own key derivation scheme, which takes inspiration from BIP32 but simplifies it a bit.

#### Replace the derivation path index

Given the derivation path: `m/650'/0'/0'`, we change the last number (the transaction's index in the chain) we some variable provided by the application(ie: `m/650'/'0/1'` will give the 1st transaction's address on the chain)

#### Hash of the derivation path

Once the derivation path index is replaced we hashed it to give a constant size through `SHA256`

```
hashedPath = SHA256(ReplaceDerivationPath(derivationPath, index))
```

#### Derive private key

Then we have to derive the private key based on the hashedPath and the master seed by using HMAC and extracting the first 32 bytes of the result

```
extendedSeed = HMAC-SHA512(Key=MasterSeed, Data=hashedPath)
extendedPrivateKey = extendedSeed.slice(0, 32)
````

#### Derive public key

Now with the given private key we can easily extract the public key for the given curve specified in the Keychain's service

```
{ publicKey, private } = generateKeyPair(extendedPrivateKey, curve)
```

### Encryption

The keychain is using a double encryption scheme where:
- the wallet is encrypted with AES 
- the `aes_key` is encrypted with elliptic curve cryptography using ECIES (Elliptic Curve Integration Encryption Scheme): `wk_{aes}` for the authorized public keys

:::info 
Ephemeral key is used to perform ECDH with authorized public key, in order to derive `aes_key`. This `aes_key` is then used to encrypt the `wk_{aes}`. This is called `ECIESE`(Elliptic Curve Integration Encryption Scheme Ephemeral)
::: 

Then to guarantee the security of the wallet, only the authorized public keys are able to decrypt the encrypted aes key(`enc(aes_key)`) to be able to decrypt the encrypted wallet (`wk_{aes}`)

#### Encrypting the Onchain Wallet 
 
The onchain encoded wallet `w_{e}` is encrypted using symmetric encryption AES256 CTR key `wk_{aes}` as follows: 
 
```
wallet_iv [16 bytes], reserved [16 bytes] = sha256(sha256(wk_{aes})) 
enc(w_{e}) = aes256(mode=ctr, key = wk_{aes}, iv = wallet_iv, data = w_{e}) 
```

#### Encoding of Encrypted Wallet 
The above encrypted wallet `enc(w_{e})` is stored on the Archethic Blockchain with the following format. 
 
|enc(w_{e})  [bytes]| 
|-| 
 
 
#### Encrypting Wallet Encryption Key 
 
The key (`wk_{aes}`) which encrypts the wallet (`w_{e}`) is subsequently encrypted using Elliptic Curve Integrated Encryption Scheme to support different authorized public keys and to reduce the increased space overhead of the encryptions. 
 
Algorithm$ for encrypting `wk_{aes}`=  ECIES (ECDH + AES256 CBC) 
 
``` 
ecdh_secret = ecdh_point_x(e_{pub}, o_{priv}) = ecdh_point_x(e_{priv}, o_{pub}) 
 
aes_key [32 bytes], iv [16 bytes], auth_seed [16 bytes] = sha512(sha512(ecdh\_secret))  
 
enc(wk_{aes}) = aes256(mode=cbc, key = aes\_key, iv = iv, data = wk_{aes}) 
 
auth_key = sha256(auth_seed) 
 
auth_tag [16 bytes], reserved [16 bytes] = hmac256(key = auth_key, data = enc(wk_{aes}))
```
 
#### Encoding of Encrypted Wallet Key 
The above encrypted key `enc(wk_{aes})` is stored on the Archethic Blockchain with the following format. 
 
|e_{pub} 04xy [bytes]|auth_tag [16 bytes]|enc(wk_{aes}) [32 bytes]| 
|-|-|-| 

## Encoding

The wallet before encryption is encoding into a binary format

### Encoding of wallet

| Version | Seed size | Seed | Nb services | Service name size | Service name | Derivation path length | Derivation path | Curve type | Hash type |...|
|-|-|-|-|-|-|-|-|-|-|-|
| 4 bytes | 1 byte | N bytes | 1 byte | 1 byte | N bytes | 1 byte | N bytes | 1 byte | 1 byte |...|

### Encoding of Curve Types 
 
The `curve_type` is a 1 byte long field, hex encoded. Currently, following curves are supported: 
 
- 0: ED25519 
- 1: NISTP256 
- 2: SECP256K1 
 
### Encoding of Hash Types 
 
The `hash_type` is a 1 byte long field, hex encoded. Currently, following hashes are supported: 
 
- 0: SHA256 (sha2) 
- 1: SHA512 (sha2) 
- 2: SHA3_256 (keccak) 
- 3: SHA3_512 (keccak) 
- 4: BLAKE2B  
 

## Transaction representation 
``` 
Transaction 
- Data: 
  - Ownerships: 
         Secret: Encrypted Wallet, 
         Authorized Keys: 
                Public Key: Origin Device / Password Public Key, 
                Encrypted Secret Key: Encrypted AES Key for the authorized public key 
``` 
 
## Format 
### Public Key Format 

When clients have to produce public key, an origin type identification byte have to prepend before the key material as well as the curve type.

| Curve ID | Origin ID | Key material |
|-|-|-|
| 1 byte | 1 byte | N bytes |

The `origin_type` is a 1 byte long field, hex encoded. Currently, following origins are defined: 
 
- 0: Onchain Wallet
- 1: Software Wallet (Node, Mobile App, Desktop, etc.)
- 2: TPM (Node) 
- 3: Yubikey (Node, Hardware Wallet)
- 4: Ledger (Hardware Wallet) 
 
### Account Address Format 

Archethic addresses following a specific format to version algorithms used helping
to evolve easily between curves and hash algorithms.

|Curve Type | Hash algo | hash(encode(pub_key))|
|-|-|-| 
| 1 byte | 1 byte | N bytes |
 
 
<!--
### Transaction Encoding 
 
Version: 4 bytes 
 
Address: ***See address*** 
 
Transaction type: [1 byte] 
 
Transaction data: 
  - Smart contract size: 4 bytes 
  - Smart contract code: X bytes 
  - Content size: 4 bytes 
  - Content: X bytes 
  - Ownerships length: 1 byte 
  - Ownerships: 
  
     Ownership: 
     - Secret size: 4 bytes 
     - Secret: bytes 
     - Authorized keys length: 1 byte 
     - Authorized keys (list of public key + encrypted secret key) 
 
        | authorized_public_key   ***See public key*** | encrypted_key  [bytes]| 
        |-|-| 
 
  - Ledger:  
      - UCO Ledger 
        - Transfers length: 1 byte 
        - Transfers: 
            | recipient   ***see Address*** | amount [8 bytes] | 
            |-|-| 
         
      - NFT Ledger 
          - Transfers length: 1 byte 
          - Transfers 
           
          | nft_address see Address | recipient  ***See address*** | amount  [8 bytes] | 
          |-|-|-| 
 
 
  - Recipients (size): 1 byte 
  - Recipients: bytes 
 
 - Previous public key: ***See public key*** 
 - Previous signature size: 1 byte 
 - Previous signature: bytes 
  
:::info 
This signature is computed from [version, address, type, data] 
::: 
  
 ***May be computed by the host*** 
  
 - Origin signature size: 1 byte 
 - Origin signature: bytes 
  
 :::info 
 This signature is computed from [version, address, type, data, previous public key, previous signature] 
 ::: 
 
 
--- 
 
### Example of encoding 
 
Version | ***Sender Address*** | Tx Type | 0000 (code size) | 0000 (content size) | 0 (ownerships length) | *1 (uco transfers length)* |  
 
00000001 | Sender address | 000000FD | 00000000 | 00000000 | 00000000 |  00000001 | 

---

| ***recipient address*** | ***amount * 10^8*** | 
 
--- 
0 (nft transfers length) | 0 (recipients) 
 
00000000 | 00000000 
 
 
--> 
