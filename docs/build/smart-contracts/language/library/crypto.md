---
id: crypto
title: Crypto module
sidebar_label: Crypto
---

The `Crypto` module contains functions that deal with cryptography.

### hash/1

Equivalent to [hash/2](#hash2) with the second argument "sha256".

### hash/2

```elixir
Crypto.hash("my text", "sha256") # "7330D2B39CA35EA..."
Crypto.hash("my text", "sha512") # "A3D7E45A0D9BE5F..."
```

Parameters:

- `str` the text to hash
- `algo` the hash algorithm ("sha256", "sha512", "sha3_256", "sha3_512", "blake2b", "keccak256")

Returns the hash of `str` by using `algo` algorithm.

### hmac/1

Equivalent to [hmac/2](#hmac2) with the second argument "sha256".

### hmac/2

Equivalent to [hmac/3](#hmac3) with the third argument being a key created from the contract seed and secret data known by nodes.
The key created is deterministic and will always be the same for a contract.

### hmac/3

```elixir
Crypto.hmac("my text") # "374C7527733556..."
Crypto.hmac("my text", "sha256") # "374C7527733556..."
Crypto.hmac("my text", "sha256", "secret_key") # "901A365FF22B895..."
```

Parameters:

- `data` the data to hash (if the data is hexadecimal it will be decoded in binary)
- `algo` the hash algorithm ("sha256", "sha512", "sha3_256", "sha3_512")
- `key` the key to perform the hmac (if the data is hexadecimal it will be decoded in binary)

Returns the hmac of `data` with `key` using `algo`.

### sign_with_recovery/1

```elixir
signature_payload = Crypto.hash("tintin", "keccak256")
Crypto.sign_with_recovery(signature_payload) # [r: "00ABCD...", s: "00BCDE...", v: 0]
```

Parameters:

- `hash` the hash to sign

Return a signature of the given `hash`.

### decrypt_with_storage_nonce/1

```elixir
ciphertext = 0x374C7527733556
Crypto.decrypt_with_storage_nonce(ciphertext) # Clear text
```

Parameters:

- `ciphertext` The encrypted data to decrypt

Return the cleartext out from the decryption algorithm
