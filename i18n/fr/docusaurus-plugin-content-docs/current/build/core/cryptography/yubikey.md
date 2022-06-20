---
id: yubikey
title: Yubikey implementation
---

This section explains the HRT Yubikey Library implementation.

:::success
Reference Files:
[uniris-yubikey.c](https://github.com/UNIRIS/yubikey-core/blob/main/uniris-yubikey.c)
[uniris-yubikey.h](https://github.com/UNIRIS/yubikey-core/blob/main/uniris-yubikey.h)
:::

## initializeYK() :
Initializes the context of the yubikey application in the variable g_state and connects to the hardware device. If successful, then gets the key index of Archethic as well as key index of the yubikey device.
## bool checkYK(): 
displays the model of yubikey device used returns true if the device list contains "Yubico Yubikey".
## verifyPinYK(): 
verifies the pin code using ykpiv_verify() required to access PIV interface.
## authenticateYK():
Management key is required to do administrative actions. First it does hex decoding of the management key and authenticates if ykpiv_authenticate() returns 0.
## fetchKey(keyIndex):
A PIV card contains some interoperable seven mandatory and  twenty optional data objects. These objects are identified with their respective ids. We use these twenty optional data objects to store the  key certificates. fetchKey index takes the yubikey key index ykindex as input and fetches the certificate at the key_certificates[ykindex]. This X509 certificate is decoded and public key is extracted from it using X509_get0_pubkey_bitstr and copied to ecc_public_key.
## generateKey(ykIndex): 
It takes the ykIndex and generates an ECC key using ykpiv_util_generate_key(). It generates key at one of the slots {0x82.. 0x95}  pointed by ykindex - key_slots[ykIndex]
## generateCertificate(ykIndex): 
The keys in the slot are attested through  ykpiv_attest() by taking the slot on the index as input. It returns attested key and its length which is then saved into an object pointed by ykIndex using ykpiv_save_object().
## getYKIndex(): 
The YKPIV_OBJ_KEY_HISTORY keeps the count of the keys generated in the yubikey. This fucntion fetches the YKPIV_OBJ_KEY_HISTORY using ykpiv_fetch_object() to get the index_yk and returns it.
## saveIndex(ykIndex, archethicIndex): 
It takes  ykindex and archethicIndex as input and generates index by combining ykindex and archethic index and keeps it in YKPIV_OBJ_HISTORY.
## signECDSA(hashtoSign, ykIndex):
It uses ykpiv_sign_data() to sign hashToSign using YKPIV_ALGO_ECCP256 through the key pointed by ykindex - key_slots[ykindex].
## getECDHPoint(ykIndex, euphermerakley) : 
It generated an ecdh point using ykpiv_decipher_data() for the slot pointed by ykindex key_slots[ykIndex].
## getArchEthicIndex():
Fetches the YKPIV_OBJ_KEY_HISTORY and derives the archethicindex from index_yk saved in key history object.
## incrementIndex(): 
We use the 20 data objects to store 20 keys certificates at once. The 21st key generated on the yubikey is stored in newYKIndex = ykindex % 20. The archethic index is incremented and a new key is generated using newYKindex .A certificate is generated and saved in the slot pointed by newYKindex. Finally it returns true if the current YK index is equal to newYKindex and current archethicindex is equal to newarchethic index .

## getRootKey():
Reads the root key certificate from f9 slot and fetches public key from the certificate. Finally it copies the key into rsa_root_key and returns it.

## getCurrentKey(publicKeySize):
Generates the previous key index by and fetches the key behind previous key index and returns the ecc key.

## getNextKey( publicKeySize):
It fetches the key from the ykIndex and returns the ecc_public_key behind the index.

## getPastKey(archEthicIndex, publicKeySize):
It fetches the keys stored previously in the slot. It first calculates the slot position and then fetches the key at the slot position and return it.
## getRootCertificate( certificateSize):
Reads the certificate of the rootkey from 0xf9 slot, copies it ykcertificate and returns it.

## getCurrentCertificate(certificateSize):
Calculates the curent key index and fetches the certificate from the object pointed by the current key index.

## getNextCertificate(certificateSize):
fetches the certificate of the  key pointed by ykindex and returns it.

## getPastCertificate(archEthicIndex, certificateSize):
calculates the slot posistion according to the offset using archethicindex then fetches the object at the slot position which is a certificate amd returns it.

## signCurrentKey(hashToSign, eccSignSize):
Calculates the current key index then verifies the Yubikey pin using verifyPinYK() and then signs hashToSign using signECDSA(). The signECDSA() signs the key at the currentkeyindex.

## signPastKey(archEthicIndex, hashToSign, eccSignSize):
Calculates the slot position by first calculating the offset by using archethicindex. Then it verifies the yubikey pin and signs the key pointed at the slotPosition.

## ecdhCurrentKey(euphemeralKey, eccPointSize):
Calculates the current key index, verifies the yubikey pin to get the ECDH point through getECDHPoint() fucntion and finally returns it.

## ecdhPastKey( archEthicIndex, euphemeralKey, eccPointSize):
Calculates the offset and slotPosition using archEthicIndex., verifies Yubikey PIN and gets the ECDH point for the key pointed by slotPosiotion and returns it.

