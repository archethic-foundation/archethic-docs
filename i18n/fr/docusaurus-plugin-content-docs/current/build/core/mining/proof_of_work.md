---
id: proof-of-work
title: Proof of Work algorithm
---

The Archethic's proof of work algorithm defines way to assert the validity of the origin signature.

It defines two main components:

- List of origin public key candidates
- Lookup of the origin public key to verify the signature

## Origin public key candidates

Origin public keys listed for a given transaction are known by the entire network and are shared between clients and nodes.

However, a given transaction can specify - through [smart-contract](/build/smart-contracts/) the origin family.

By this way, the nodes are able to extract the list of origin public keys to assert with the signature.

## Lookup

A simple algorithm is defined to scan the entire list of public keys candidates and verify the cryptographic origin signature.

Once the public key is found, it becomes the Proof of Work.
If no public key is found, the proof of work is invalid and the transaction as well.

:::info
Telemetry timing is used for this algorithm to indicate how fast the algorithm is with a given number of public keys
:::
