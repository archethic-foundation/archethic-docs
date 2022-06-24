---
id: commands
title: ADPU commands
---

## APDU commands

### Get Origin Public Key 
 
APDU Command [bytes]:

|CLA = E0|INS = 02 | P1 = 00| P2 = 00| Lc = 00 | 
|-|-|-|-|-| 
 
APDU Response = Encoded Origin Public Key i.e., encode(o_{pub}) 
 
 
### Get Archethic Account Address 
 
APDU Command [bytes] = 

|CLA = E0|INS = 04 |P1 = hash_type (for addr) [1 byte]|P2 = address_index (for bip44) [4 bytes]|Lc = len(ewk_{aes}+ew_{aes}) [1 byte] |ewk_{aes} [bytes] |ew_{aes} [bytes]  
|-|-|-|-|-|-|-| 
 
APDU Response = Encoded Archethic Account Address i.e., arch_address 
 
### Get Signature 
 
|CLA = E0|INS = 08 | P1 = hash_type (of tx_hash) [1 byte]| P2 = address_index (for bip44) [4 bytes]| Lc = len(tx_hash+ewk_{aes}+ew_{aes}) [1 byte] | tx_hash [bytes]| ewk_{aes} [bytes] | ew_{aes} [bytes] |  
|-|-|-|-|-|-|-|-| 
 
APDU Response = ASN DER Signature || Corresponding public key from whose private key the signature was made, i.e., encode(pub_key) 

