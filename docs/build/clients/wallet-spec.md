--- 
id: wallet-spec
title: ARCHEthic Wallet Specification
--- 

:::info
Onchain wallet is a wallet stored on ArchEthic blockchain in encrypted form. 
:::

``` 
w_{e} = Encoded Onchain ArchEthic Wallet. 
 
wk_{aes} = AES256 CTR Key used to encrypt w_{e}. 
enc(w_{e}) = AES256 CTR Encryption of w_{e} using wk_{aes}. 
ew_{aes} = Encoded enc(w_{e}). 
 
aes_key = AES256 CBC Key used to encrypt wk_{aes}. 
enc(wk_{aes}) = AES256 CBC Encryption of wk_{aes} using aes_key. 
ewk_{aes} = Encoded enc(wk_{aes}). 
 
encode(pub_key) = Encoded Public Key. 
arch_address = Encoded Account Address. 
``` 
 
 
:::info 
Origin can be a Software Wallet (Android/iOS/Desktop) or a Hardware wallet (Ledger/Yubikey). 
::: 
 
``` 
o_{priv} = Origin Device Private Key 
o_{pub} = Origin Device Public Key (raw 04xy) 
encode(o_{pub}) = Encoded Origin Device Public Key  
``` 
 
 
:::warning 
Ephemeral key is used to perform ECDH with Origin Device Key, in order to derive `aes_key`. This `aes_key` is then used to encrypt the `wk_{aes}`. 
::: 
 
``` 
e_{key} = Ephemeral Key Pair 
e_{pub} = Ephemeral Public Key (raw 04xy) 
e_{priv} = Ephemeral Private Key 
``` 
 
:::success 
BIP Path is used for derivation of various keys. 
It is of the form (BIP44): 
path = m / purpose'/ coin_type' / account'/ change’/ address_index’ 
::: 
For the ArchEthic blockchain, following constants have been fixed. 
 
``` 
purpose = 44' (BIP44) 
coin\_type = 650' (UCO of ArchEthic Blockchain) 
 
account = Depends on the intended use of the key.  
Currently fixed values: 0xFFFF for o_{key}, 0x0000 for a simple w_{key}) 
 
change = 0 (0 for external, 1 for internal\ 
address_index = variable (0,1,2,...) 
 
path = m/44'/650'/0'/0'/0' 
```` 
 
## Encoding 
### Encoding of BIP44 Path 
 
Within the Onchain Wallet, only `coin_type` and `account` values are stored as follows (binary, hex encoded): 
 
|coin type [2 bytes]|account [2 bytes] | 
|-|-| 
::: 
 
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
 
### Encoding of Origin Types 
 
The `origin_type` is a 1 byte long field, hex encoded. Currently, following origins are defined: 
 
- 0: Onchain Wallet
- 1: Software Wallet (Node, Mobile App, Desktop, etc.)
- 2: TPM (Node) 
- 3: Yubikey (Node, Hardware Wallet)
- 4: Ledger (Hardware Wallet) 
 
### Encoding of Wallet 
The onchain wallet `w_{e}` is a byte stream, containing the `version`, `master_seed`, `total_services` with `bip44 path` and `curve_type` for each service, with the following format: 

|version=1 [1 byte]|master_seed [32 bytes] |total_services = n [1 byte]| bip44 1 [4 bytes] |curve_type 1 [1 byte]| .. | bip44 n [4 bytes]| curve_type n [1 byte]|  
|-|-|-|-|-|-|-|-| 
 
 
## Onchain Wallet Encryption 
### Encrypting the Onchain Wallet 
 
The onchain encoded wallet `w_{e}` is encrypted using symmetric encryption AES256 CTR key `wk_{aes}` as follows: 
 
```
wallet_iv [16 bytes], reserved [16 bytes] = sha256(sha256(wk_{aes})) 
enc(w_{e}) = aes256(mode=ctr, key = wk_{aes}, iv = wallet_iv, data = w_{e}) 
```

### Encoding of Encrypted Wallet 
The above encrypted wallet `enc(w_{e})` is stored on the ArchEthic Blockchain with the following format. 
 
|enc(w_{e})  [bytes]| 
|-| 
 
 
### Encrypting Wallet Encryption Key 
 
The key (`wk_{aes}`) which encrypts the wallet (`w_{e}`) is subsequently encrypted using Elliptic Curve Integrated Encryption Scheme to support different authorized public keys and to reduce the increased space overhead of the encryptions. 
 
Algorithm$ for encrypting `wk_{aes}`=  ECIES (ECDH + AES256 CBC) 
 
``` 
ecdh_secret = ecdh_point_x(e_{pub}, o_{priv}) = ecdh_point_x(e_{priv}, o_{pub}) 
 
aes_key [32 bytes], iv [16 bytes], auth_seed [16 bytes] = sha512(sha512(ecdh\_secret))  
 
enc(wk_{aes}) = aes256(mode=cbc, key = aes\_key, iv = iv, data = wk_{aes}) 
 
auth_key = sha256(auth_seed) 
 
auth_tag [16 bytes], reserved [16 bytes] = hmac256(key = auth_key, data = enc(wk_{aes}))
```
 
### Encoding of Encrypted Wallet Key 
The above encrypted key `enc(wk_{aes})` is stored on the ArchEthic Blockchain with the following format. 
 
|e_{pub} 04xy [bytes]|auth_tag [16 bytes]|enc(wk_{aes}) [32 bytes]| 
|-|-|-| 
 
### Final Onchain Complete Wallet 
``` 
Transaction 
- Data: 
  - Ownerships: 
         Secret: Encrypted Wallet, 
         Authorized Keys: 
                Public Key: Origin Device Public Key, 
                Encrypted Secret Key: Encrypted AES Key for the Origin Device Public Key 
``` 
 
## Format 
### Public Key Format 

encode(pub_key):

|curve_type [1 byte]|origin_type [1 byte]|raw_key 04xy [bytes]| 
|-|-|-| 
 
 
### Account Address Format 
 
|curve_type [1 byte]| hash_type [1 byte]|hash(encode(pub_key)) [bytes]| 
|-|-|-| 
 
 
## APDU (for Ledger) 
### Get Origin Public Key 
 
APDU Command [bytes]:

|CLA = E0|INS = 02 | P1 = 00| P2 = 00| Lc = 00 | 
|-|-|-|-|-| 
 
APDU Response = Encoded Origin Public Key i.e., encode(o_{pub}) 
 
 
### Get ArchEthic Account Address 
 
APDU Command [bytes] = 

|CLA = E0|INS = 04 |P1 = hash_type (for addr) [1 byte]|P2 = address_index (for bip44) [4 bytes]|Lc = len(ewk_{aes}+ew_{aes}) [1 byte] |ewk_{aes} [bytes] |ew_{aes} [bytes]  
|-|-|-|-|-|-|-| 
 
APDU Response = Encoded ArchEthic Account Address i.e., arch_address 
 
 
 
### Get Signature 
 
|CLA = E0|INS = 08 | P1 = hash_type (of tx_hash) [1 byte]| P2 = address_index (for bip44) [4 bytes]| Lc = len(tx_hash+ewk_{aes}+ew_{aes}) [1 byte] | tx_hash [bytes]| ewk_{aes} [bytes] | ew_{aes} [bytes] |  
|-|-|-|-|-|-|-|-| 
 
APDU Response = ASN DER Signature || Corresponding public key from whose private key the signature was made, i.e., encode(pub_key) 
 
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
 
 
 
