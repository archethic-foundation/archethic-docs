# Archethic Blockchain Wallet Specifications - V1
[TOC]
## Glossary
:::success
Onchain wallet is a wallet stored on ArchEthic blockchain in encrypted form.
:::

$w_{e}$ = Encoded Onchain ArchEthic Wallet.

$wk_{aes}$ = AES256 CTR Key used to encrypt $w_{e}$.\
$enc(w_{e})$ = AES256 CTR Encryption of $w_{e}$ using $wk_{aes}$.\
$ew_{aes}$ = Encoded $enc(w_{e})$.


$aes\_key$ = AES256 CBC Key used to encrypt $wk_{aes}$.\
$enc(wk_{aes})$ = AES256 CBC Encryption of $wk_{aes}$ using $aes\_key$.\
$ewk_{aes}$ = Encoded $enc(wk_{aes})$.



$encode(pub\_key)$ = Encoded Public Key.\
$arch\_address$ = Encoded Account Address.

:::info
Origin can be a Software Wallet (Android/iOS/Desktop) or a Hardware wallet (Ledger/Yubikey).
:::

$o_{priv}$ = Origin Device Private Key\
$o_{pub}$ = Origin Device Public Key (raw 04xy)\
$encode(o_{pub})$ = Encoded Origin Device Public Key 

:::warning
Ephemeral key is used to perform ECDH with Origin Device Key, in order to derive $aes\_key$. This $aes\_key$ is then used to encrypt the $wk_{aes}$.
:::

$e_{key}$ = Ephemeral Key Pair\
$e_{pub}$ = Ephemeral Public Key (raw 04xy)\
$e_{priv}$ = Ephemeral Private Key

:::success
BIP Path is used for derivation of various keys.
It is of the form (BIP44):
path = m / purpose'/ coin_type' / account'/ change’/ address_index’
:::
For the ArchEthic blockchain, following constants have been fixed.

$purpose = 44'$ (BIP44)\
$coin\_type = 650'$ (UCO of ArchEthic Blockchain)

$account =$ Depends on the intended use of the key. 
Currently fixed values: 0xFFFF for $o_{key}$, 0x0000 for a simple $w_{key}$)

$change = 0$ (0 for external, 1 for internal)\
$address\_index = variable$ (0,1,2,...)

$path$ = $m/44'/650'/0'/0'/0'$

## Encoding
### Encoding of BIP44 Path

Within the Onchain Wallet, only $coin\_type$ and $account$ values are stored as follows (binary, hex encoded):

:::info
$bip44$ [4 bytes] = 
|$coin\_type$ <br> [2 bytes]|$account$ <br> [2 bytes] |
|-:|-:|

:::

### Encoding of Curve Types

The $curve\_type$ is a 1 byte long field, hex encoded. Currently, following curves are supported:

:::warning
$curve\_type$ [1 byte] = 

0: ED25519\
1: NISTP256 (SECP256R1/PRIME256V1)\
2: SECP256K1

:::


### Encoding of Hash Types

The $hash\_type$ is a 1 byte long field, hex encoded. Currently, following hashes are supported:

:::success
$hash\_type$ [1 byte] = 

0: SHA256 (sha2)\
1: SHA512 (sha2)\
2: SHA3_256 (keccak)\
3: SHA3_512 (keccak)\
4: BLAKE2B 

:::

### Encoding of Origin Types

The $origin\_type$ is a 1 byte long field, hex encoded. Currently, following origins are defined:

:::info
$origin\_type$ [1 byte] = 

0: Onchain Wallet\
1: Software Wallet (Node, Mobile App, Desktop, etc.)\
2: TPM (Node)\
3: Yubikey (Node, Hardware Wallet)\
4: Ledger (Hardware Wallet)

:::

### Encoding of Wallet
The onchain wallet is a byte stream, containing the $version$, $master\_seed$, $total\_services$ with $bip44$ path and $curve\_type$ for each service, with the following format:
:::warning
Encoded Wallet $w_{e}$ [1+32+1 + $n$x5 bytes] = 
|$version=1$ <br> [1 byte]|$master\_seed$ <br> [32 bytes] |$total\_services = n$ <br> [1 byte]|  $bip44$ 1 [4 bytes] |$curve\_type$ 1 [1 byte]| .. | $bip44$ n [4 bytes]| $curve\_type$ n [1 byte]| 
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|

:::


## Onchain Wallet Encryption
### Encrypting the Onchain Wallet

The onchain encoded wallet ($w_{e}$) is encrypted using symmetric encryption AES256 CTR key ($wk_{aes}$) as follows:

:::success

$wallet\_iv$ [16 bytes], $\_reserved$ [16 bytes] = $sha256(sha256(wk_{aes}))$

$enc(w_{e})$  = $aes256(mode=ctr, key = wk_{aes}, iv = wallet\_iv, data = w_{e})$

:::


### Encoding of Encrypted Wallet
The above encrypted wallet $enc(w_{e})$ is stored on the ArchEthic Blockchain with the following format.

:::info
Encoded Encrypted Key $ew_{aes}$ [bytes] = 
|$enc(w_{e})$  <br> [bytes]|
|:-:|
:::


### Encrypting Wallet Encryption Key

The key ($wk_{aes}$) which encrypts the wallet ($w_{e}$) is subsequently encrypted using Elliptic Curve Integrated Encryption Scheme to support different authorized public keys and to reduce the increased space overhead of the encryptions.

$Algorithm$ for encrypting $wk_{aes}$=  ECIES (ECDH + AES256 CBC)

:::warning

$ecdh\_secret$ = $ecdh\_point\_x(e_{pub}, o_{priv})$ = $ecdh\_point\_x(e_{priv}, o_{pub})$

$aes\_key$ [32 bytes], $iv$ [16 bytes], $auth\_seed$ [16 bytes] =  $sha512(sha512(ecdh\_secret))$ 

$enc(wk_{aes})$  = $aes256(mode=cbc, key = aes\_key, iv = iv, data = wk_{aes})$

$auth\_key$ = $(sha256(auth\_seed))$

$auth\_tag$ [16 bytes],  $\_reserved$ [16 bytes] = $hmac256(key = auth\_key$, $data = enc(wk_{aes}))$

:::

### Encoding of Encrypted Wallet Key
The above encrypted key $enc(wk_{aes})$ is stored on the ArchEthic Blockchain with the following format.

:::success
Encoded Encrypted Wallet Key $ewk_{aes}$  [bytes] = 
|$e_{pub}$ 04xy <br> [bytes]|$auth\_tag$ <br> [16 bytes]|$enc(wk_{aes})$  <br> [32 bytes]|
|:-:|:-:|:-:|
:::




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

:::info
Encoded Public Key $encode(pub\_key)$ [bytes] = 
|$curve\_type$ <br> [1 byte]| $origin\_type$ <br> [1 byte]|$raw\_key$ 04xy <br> [bytes]|
|:-:|:-:|:-:|
:::


### Account Address Format

:::warning
Encoded Account Address $arch\_address$ [bytes] = 
|$curve\_type$ <br> [1 byte]| $hash\_type$ <br> [1 byte]|$hash(encode(pub\_key))$ <br> [bytes]|
|:-:|:-:|:-:|
:::


## APDU (for Ledger)
### Get Origin Public Key

:::success
APDU Command [bytes] = 
|CLA = E0|INS = 02 | P1 = 00| P2 = 00| Lc = 00 |
|:-:|:-:|:-:|:-:|:-:|

APDU Response = Encoded Origin Public Key i.e., $encode(o_{pub})$.
:::


### Get ArchEthic Account Address

:::info
Very Important: $ewk_{aes}$ is unique per device.

APDU Command [bytes] = 
|CLA = E0|INS = 04 | P1 = 00| P2 = 00 | Lc = $len(address\_index + ewk_{aes}+ew_{aes})$ <br> [1 byte] |$address\_index$ (for $bip44$) <br> [4 bytes]| $ewk_{aes}$ <br> [bytes] | $ew_{aes}$ <br> [bytes] 
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|

APDU Response = Encoded ArchEthic Account Address i.e., $arch\_address$
:::



### Get Signature

:::warning
Very Important: $ewk_{aes}$ is unique per device.

APDU Command [bytes] = 
|CLA = E0|INS = 08 | P1 = 00| P2 = 00 | Lc = $len(address\_index+receipient\_address+amount+ewk_{aes}+ew_{aes})$ <br> [1 byte] | $address\_index$ (for $bip44$) <br> [4 bytes] | $receipient\_address$ <br> [bytes]| $amount$ <br> [8 bytes] | $ewk_{aes}$ <br> [bytes] | $ew_{aes}$ <br> [bytes] | 
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|

APDU Response = Final Tx Hash (SHA256) || Corresponding public key from whose private key the signature was made, i.e., $encode(pub\_key)$ || ASN DER Signature

:::


## Transaction Encoding
:::info
This section decribes the format for transaction encoding. All transactions must be constructed according to this format before being signed for parsing portability across ArchEthic ecosystem.
:::
Version: 4 bytes

Sender Address: [See Address](#Account-Address-Format)

Transaction type: 1 byte

Transaction data:[
  - Smart contract size: 4 bytes
  - Smart contract code: X bytes
  - Content size: 4 bytes
  - Content: X bytes
  - Ownerships length: 1 byte
  - Ownerships:[
     - Secret size: 4 bytes
     - Secret: X bytes
     - Authorized keys length: 1 byte
     - Authorized keys: list[] ([see encoding format](#Encoding-of-Encrypted-Wallet-Key))]
     
  - Ledger: 
      - UCO Ledger
        - Transfers length: 1 byte
        - Transfers:
            |[recipient](#Account-Address-Format)| $amount*10^8$ <br> [8 bytes] |
            |:-:|:-:|
        
      - NFT Ledger
          - Transfers length: 1 byte
          - Transfers:
          
          | [nft_address](#Account-Address-Format) | [recipient](#Account-Address-Format) | $amount*10^8$ <br> [8 bytes] |
          |:-:|:-:|:-:|


  - Recipients (size): 1 byte
  - Recipients: X bytes
  
 - Previous public key: [See public key format](#Public-Key-Format)
 
 - Previous signature: X bytes
 :::info 
 Previous signature is computed from [version, address, type, data]
:::
 
 
 - Origin signature: X bytes (***May be computed by the host***)
 
 :::info
 Origin signature is computed from [version, address, type, data, previous public key, previous signature]
 :::



### Example of encoding:

|00000001|02001AF03FFAA1A3AA81E093FD98AA97B7BB4DCFCBA53CF9933A998E3F74B95F7AE9|FD|00000000|00000000|00|01|020019CA33A6CA9E69B5C29E6E8497CC5AC9675952F847347709AD39C92C1B1B5313|000000038407B700|00|00|02000488AB2302D79C83CDB86EE9F2CC8E65172188DB1F865F3CAB581B9B807CB33D0D2BBCE78CE43BEE7E8A8BD9758725E9047C0D29B309D037B2F07408C84BD14941|3045022100bf450ef3d13b0174c9de4b4d77b2358a82f8c40da44cd3c315fd745f55c1dc7202207cafa1fa8b73751c5ca786b57e6bc2069f76429e7924063e70484e45c2ab0a11|ORGIN SIG |
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|$version$ <br> [4 bytes]|[sender_address](#Account-Address-Format) <br> [34 bytes] | $tx\_type$ <br> [1 byte]| $code\_size$ <br> [4 bytes] | $content\_size$ <br> [4 bytes] | $ownership\_length$ <br> [1 byte] |  $total\_uco\_transfers$ <br> [1 byte]| [receiver_address](#Account-Address-Format) <br> [34 bytes] | $amount * 10^8$ <br> [8 bytes] | $total\_nft\_transfers$ <br> [1 byte] | $total\_recipients$ <br> [1 byte] | $previous\_publickey$ <br> [67 bytes] | $previous\_signature$ <br> [71 bytes] | $origin\_signature$ <br> [70-71 bytes]|
