---
id: api
title: Ledger Application API
---

:::success
Reference Repository:
[Archethic BOLOS App](https://github.com/archethic-foundation/archethic-ledger/tree/master/src)
:::


[TOC]

## GET VERSION
[Source File: getVersion.c](https://github.com/archethic-foundation/archethic-ledger/blob/master/src/getVersion.c)
:::info
Get version returns the version of Device Application on Ledger
:::
- Function Signature
     **handleGetVersion(uint8_t p1, uint8_t p2, uint8_t \*dataBuffer, uint16_t dataLength, volatile unsigned int \*flags)**
     - **p1** -> APDU Parameter (Not Concerned in our context)
     - **p2** ->  APDU Parameter (Not Concerned in our context)
     - **\*dataBuffer** -> NULL (Not required for getting version)
     - **dataLength** -> Length of the dataBuffer
     - **\*flags** -> **Modes (respond immediately(sync), process and respond(async))**

    There is a general buffer **G_io_apdu_buffer** (already in ledger SDK) for both input and output, we copy version to this buffer from **APPVERSION** which is defined in Makefile. As we only need integer, so we subtract '0' from the APPVERSION[0 | 2 | 4].
    APPVERSION and APPNAME are defined in the makefile of the project.
    
    **io_exchange_with_code(SW_OK, 3)**
        - It adds status at the end of the Buffer (G_io_apdu_buffer).
        - **SW_OK** (0x9000) adds status code at the end of the buffer.
        - 3 is the length of the data in the buffer. 
     

## GET DEVICE ORIGIN PUBLIC KEY
[Source File: getPublicKey.c](https://github.com/archethic-foundation/archethic-ledger/blob/master/src/getPublicKey.c)

:::info
Gets the hardware(device origin) public key from ledger device.

:::
    
It returns the public key derived from the hardware ledger device seed (**HARDWARE SEED**).

- Function Signature
    **handleGetPublicKey(uint8_t p1, uint8_t p2, uint8_t \*dataBuffer, uint16_t dataLength, volatile unsigned int \*flags)**
    - **\*flags |= IO_ASYNCH_REPLY;** 
        This is added to get response from the user of HID. So needed to be set to the ASYNC.
    - **getOriginPublicKey(cx_ecfp_public_key_t \*publicKey)**
    This calls <strong>deriveArchethicKeyPair</strong> and return it.
    ``` deriveArchethicKeyPair(CX_CURVE_SECP256K1, 650, 0xffff, 0, NULL, 0, NULL, publicKey); ```

:::note
    - First Param** is the curve type which is fixed in our case.
    - Second Param** is the coin type which is defined for the [UCO Token]()
    - 3rd Param** is for the account which account to get,  which is defined as: 
		   - $account =$ Depends on the intended use of the key.
		   - Currently fixed values: 0xFFFF for $o_{key}$, 0x0000 for a simple $w_{key}$
    - 4th Param** is address index 
    - 5th Param** is masterSeed which is set to NULL because we need the device origin master seed.
    - 6th Param** is the master seed Length
    - 7th param** is the structure to store public key
:::
    
- Function Signature
    **deriveArchethicKeyPair(cx_curve_t curve, uint32_t coin_type, uint32_t account, uint32_t address_index, uint8_t \*masterSeed, uint8_t masterSeedLen, cx_ecfp_private_key_t \*privateKey, cx_ecfp_public_key_t \*publicKey)**
    - This function first checks the curve type of the `cx_curve_t`, which sets the mode for the which it needs to perform operation.
    - Next depending upon the account type as defined in the specification (0xffff | 0x0000) it derives the private key from the masterseed.
        - When the account type is `0xffff` then **os_perso_derive_node_with_seed()** function is called which derives the key from the ledger hardware origin key.
        - When account type is `0x0000` then it derives the rawPrivateKey from the from **archethic_derive_with_seed_key()** function which derives the key as per provided params.

    -  Next it checks if there is a **publicKey**
        -  If that is the case then it derives the corresponding public key and generates from the walletPrivateKey
    -  If there is **privateKey** the it simple returns the **privateKey**.
        
:::success

As Public Key is in format: **[curve_type, device_origin, 04xy]**

02 -> Curve Type 04 -> Device Origin 04 -> uncompressed 

X -> 52e77c79bea0f84e2d9c40356932fb0dd31688c23d6b6e9ac99d2869dc407692

Y -> 1e731fb84d0a094c6273fffed68147c381a273c83868cdeb9b81c7ec790c6d38

:::

:::info

Since raw private key is in **bytes** it needs to be converted which is done by the function cx_ecfp_init_private_key(curve, rawPrivateKey, 32, &walletPrivateKey).

:::


## GET ARCHETHIC ADDRESS

[Source File: getAddress.c](https://github.com/archethic-foundation/archethic-ledger/blob/master/src/getAddress.c)

:::info
Return the Archethic address from the ledger including curve type in the start
:::


INS = 04
Lc = Data Length
address_index = 4 bytes (bip44)
ewk<sub>aes</sub> = encrypted wallet key

- Function Signature
    **handleGetAddress(uint8_t p1, uint8_t p2, uint8_t \*dataBuffer, uint16_t dataLength, volatile unsigned int \*flags)**
    + First 4 bytes are address index hence we store then in `address_index` from the data buffer (Converting them according to thier byte ordering.)
    + We performECDH to get the secret pointX on the curve,
        + Fn Signature **performECDH(uint8_t \*ephPublicKey, uint8_t ephPublicKeySize, uint8_t \*ecdhPointX)**
        + This derives an Archethic keypair first with function `deriveArchethicKeyPair` and gets originPrivateKey
        + The performs ecdh with function `cx_ecdh` with the originPrivateKey and takes publickey and finds the ecdhPointX 
        + `cx_ecdh(&originPrivateKey, CX_ECDH_X, ephPublicKey, ephPublicKeySize, ecdhPointX, 32);`
        + publicKey is taken from the `dataBuffer`
    + Now we decrypt the wallet with the ecdhPointX 
        + Fn Signature **decryptWallet(ecdhPointX, sizeof(ecdhPointX), dataBuffer, dataLength, g_wallet.encodedWallet, &g_wallet.walletLen);**
        + Since we have moved pointer we now only have `auth_tag` 16 bytes and enc($wk_{aes}$) 32bytes
            + Inside Decrypt wallet we first calculate the `aes_key_iv_tag` from the ecdhPointX by double hashing it from the sha512 function $sha512(sha512(ecdh\_secret\ or\ PointX))$. 
            + we get 3 parts from above double hashing in 64 bytes which are
                + **aes_key** [32bytes]
                + **iv** [16bytes]
                + **auth_seed** [16bytes]
            + Now we get sha256 has of auth_seed in `auth_key`
            + And now we do hmac(auth_key , enc($wk_{aes}$)) and get `auth_tag` which are first 16 bytes from hmac result. $Rest\ 16\ bytes\ are\ reserved$
            + Now we compare if auth_tag equals to auth_tag supplied in the `dataBuffer` 
                + If if doesn't return `0xBADDECODE`
                + If it does
                    + Decrypt the wallet and return the **encoded wallet**
        + Now get the BIP44Paths from the encoded wallet according to specificaton
            + Fn Signature **getBIP44Path(address_index, g_wallet.encodedWallet, g_wallet.walletLen, 0, g_bip44_path, &bip44pathlen);**
            + This does according to address index which were first 4 bytes of `dataBuffer`
            + This returns the bip44Path in `char* string_bip_44`
        + Now Generate Archethic Address from the Encoded Wallet and set as required. 
            + Fn Signature **generateArchethicAddress(uint8_t hash_type, uint32_t address_index, uint8_t \*encoded_wallet, uint8_t \*wallet_len, uint32_t sequence_no, uint8_t \*address, uint8_t \*address_len)**
            + For now only support hash_type `sha256`
            + Returns address in `uint8_t *address`
                + It generates key from the encoded wallet and storesit in `cx_ecfp_public_key_t` structure
                + Fn Signature **generateKeyFromWallet(address_index, encoded_wallet, wallet_len, sequence_no, &curve_type, NULL, &publicKey)** 
                    + Derives Archethic Keypair depending on the supplied params:
                        + **coin_type**
                        + **account**
                        + **curve**
                        + **address_index**
                        + **publicKey**
                        + **privateKey**
                        

## SIGN TRANSACTION
 
 
[Source File: signHash.c](https://github.com/archethic-foundation/archethic-ledger/blob/master/src/signHash.c)

:::info
Returns APDU response as `Transaction Hash | Public Key | ASN_DER_SIGN` in success
:::

INS = 08
address_index = 4 bytes (bip44)

- Funcion Signature: 
    **handleSignHash(uint8_t p1, uint8_t p2, uint8_t *dataBuffer, uint16_t dataLength, volatile unsigned int \*flags)**
    + First 4 bytes are address index hence we store then in `address_index` from the data buffer (Converting them according to thier byte ordering.)
    + Then we check for addresslength 
        + if %2 == 0 then SHA256 or SHA3_256 and length = 34
        + if %2 == 1 then SHA512 or SHA3_512 and length = 66
    + We copy the recieverAddress upto the addressLength in previous step to `g_tx.recieverAddr`
    + Then get next 8 bytes as amount and convert it to big endian
        + Then for display convert it to float and set in `g_amount` for display
    + performECDH to get ecdhPointX 
       + We performECDH to get the secret pointX on the curve,
            + Fn Signature **performECDH(uint8_t \*ephPublicKey, uint8_t ephPublicKeySize, uint8_t \*ecdhPointX)**
            + This derives an Archethic keypair first with function `deriveArchethicKeyPair` and gets originPrivateKey
            + The performs ecdh with function `cx_ecdh` with the originPrivateKey and takes publickey and finds the ecdhPointX 
            + `cx_ecdh(&originPrivateKey, CX_ECDH_X, ephPublicKey, ephPublicKeySize, ecdhPointX, 32);`
    + Now we decrypt the wallet with the ecdhPointX 
        + Fn Signature **decryptWallet(ecdhPointX, sizeof(ecdhPointX), dataBuffer, dataLength, g_wallet.encodedWallet, &g_wallet.walletLen);**
        + Since we have moved pointer we now only have `auth_tag` 16 bytes and enc($wk_{aes}$) 32bytes
            + Inside Decrypt wallet we first calculate the `aes_key_iv_tag` from the ecdhPointX by double hashing it from the sha512 function $sha512(sha512(ecdh\_secret\ or\ PointX))$. 
            + we get 3 parts from above double hashing in 64 bytes which are
                + **aes_key** [32bytes]
                + **iv** [16bytes]
                + **auth_seed** [16bytes]
            + Now we get sha256 has of auth_seed in `auth_key`
            + And now we do hmac(auth_key , enc($wk_{aes}$)) and get `auth_tag` which are first 16 bytes from hmac result. $Rest\ 16\ bytes\ are\ reserved$
            + Now we compare if auth_tag equals to auth_tag supplied in the `dataBuffer` 
                + If if doesn't return `0xBADDECODE`
                + If it does
                    + Decrypt the wallet and return the **encoded wallet**
    + Now Generate Archethic Address from the Encoded Wallet and set as required. 
        + Fn Signature **generateArchethicAddress(uint8_t hash_type, uint32_t address_index, uint8_t \*encoded_wallet, uint8_t \*wallet_len, uint32_t sequence_no, uint8_t \*address, uint8_t \*address_len)**
        + For now only support hash_type `sha256`
        + Returns address in `uint8_t *address`
    + Now get the BIP44Paths from the encoded wallet according to specificaton
        + Fn Signature **getBIP44Path(address_index, g_wallet.encodedWallet, g_wallet.walletLen, 0, g_bip44_path, &bip44pathlen);**
        + This does according to address index which were first 4 bytes of `dataBuffer`
        + This returns the bip44Path in `char* string_bip_44`
    + Next we calulate the transactionHash
        + Function Signature
            **getTransactionHash(uint8_t \*senderAddr, uint8_t senderAddrLen,
                        uint8_t \*receiveAddr, uint8_t receiveAddrLen,
                        uint8_t \*amount, uint8_t \*txHash, uint8_t \*txHashLen)**
        + Format for Transaction Hash Generation
            + tx_version | senderAddr | tx_type | code_size | content_size | ownership_length | total_uco_transfers | recieverAddr | amount | total_token_transfers | recipients
        + We apply `cx_hash_sha256()` and return the hash in `txHash`
    + We prompt user in GUI to approve the transaction
    + Once approve we performECDSA on the transactionHash
        + Function Signature
            **performECDSA(uint8_t \*txHash, uint8_t txHashLen, uint32_t address_index, uint8_t \*encoded_wallet, uint8_t \*wallet_len, uint8_t sequence_no, uint8_t \*asn_sign, uint8_t \*sign_len)**
        + We generateKey from Wallet Similar to when getting address and give back `publicKey` and `privateKey`
        + We copy curve_type on asn_sign buffer
        + We set 0 to signify onchain wallet
        + We copy the publicKey on asn_sign buffer
        + We sign the txnHash with the privateKet and append signature to asn_sign buffer 
        + We increase sign_len by publicKey length + 2 bytes
    + Once signature is performed we copy the txnHash to the `G_io_apdu_buffer`
    + Then, we copy the contents of encodedWallet on which we have overwritten the signature to the `G_io_apdu_buffer`
    + And we return the APDU with SW_OK and total length as `txnhash length + walletLen`

