
# Atomic commitment notification


## Rationale

How to ensure a minimun of confirmation from the storage nodes to ensure the data availability of a given transaction.
If we are not providing this kind of mechanism, we can end up into a network split / mistmatch where shards and beacon aren't cross linked.
Also we do not want to overload the beacon chain by broadcasting it with hundred of messages for single transaction summary.

## Heuristic solution

Each validation node will notify the replications nodes in charge, and wait their confirmations to attest the validity 
and the availability of the transaction in the shard before to notify the beacon chain and the welcome node.

In 1st approx, a single notification from the validation nodes is sufficient to ensure the availability. This attestation will contains a list of signatures, 
from the replication nodes, to status about their commitment to store the transaction. 
However, further attestations and confirmations can be checked later during the time, to provide more security.

For example, a beacon chain receiving 1 attestation from a validation node including X storage confirmations 
will be valid as 3 attestations with their respective confirmations.

Moreover, when we are dealing with recipients for transfer or smart contract calls, we want to support the recipients shards will be notified 
only when the main transaction is validated and stored.
So for example, the replication can be splitted by levels: [ Main Chain ] -> [ Recipient Chains]

Then the welcome node will be notified by a validation node with a given number of replica confirmations.

```
          V1
        /  |  \
Chain: S1  S2  S3
       /     |   \
      Recipient Shards
```

## Further improvements

To reduce the overall size of the attestations and confirmations we can support signature aggregation or cosigning to embed a single transaction with a bitfield
to indicate which nodes signed the transaction replication, which will be signed over by a validation node.

