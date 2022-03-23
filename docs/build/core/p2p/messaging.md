---
id: messaging
title: Messaging
---

ARCHEthic Blockchain is used a brand new P2P layer from the [Supervised Multicast](/learn/p2p#archethics-way), but to ensure the best data transmission possible, we are using two modern approaches: `Stream Multiplexer` and `Binary Protocol`. 

Those two features helps to achieve a low latency P2P messaging.

## Stream Multiplexer

Stream Multiplexing allows multiple independent logical streams to share a common underlying transport stream and <br />
there are many independent streams of communication between peers.

Stream Multiplexing amortizes the overhead of establishing a transport connection and helps to distinguish which messages to handle in a concurrent way.

```
|---------|                           |---------|
| Service |                           | Service |
|---------|                           |---------|
    | Msg ID: 2    |------------|         |
    |--------------| Connection |---------| Msg ID: 1
                   |    TCP     |
    |--------------|------------|---------|
    | Msg ID: 1                           | Msg ID: 2
|---------|                           |---------|
| Service |                           | Service |
|---------|                           |---------|
```

In the current implementation, each node connection is backed by a GenServer which serializes the call the remote endpoint, through an established connection.

Even if the calls are serialized, it leverages a non-blocking messaging, so multiple messages can be sent with several independant clients. However after a certain amount of time(timeout: 5s), the message is dropped to reduce the message queue.

## Binary Protocol

Network latency is very important to reach an unlimited and really scalable network and using binary protocol helps to reduce bandwidth.

Different kind of solutions existing for binary protocol: Protobuf, Avro, Thrift, MsgPack, etc.

However, to support a custom and efficient binary serialization, ARCHEthic uses it own binary protocol through the transport layer to reduce and to optimize by the message, the data to send.

This aspect is important, when we are dealing with bits, to reduce byte size.

For example, if we want to serialize this bitstring: 11100000
- With existing solutions, we may end up with a list of 8 bytes
- With a custom solution, we serialize it with only 1 byte

## Message envelop

To support privacy and security, each message is wrapped in a `MessageEnvelop` struct within:
- Message ID: used in the stream multiplexing
- Message to send
- Sender public key: used to determine the liveness of the node from the recipient P2P view

The envelop is then encrypted with the recipient public key (known by the network) using ECIES cryptography protocol.

