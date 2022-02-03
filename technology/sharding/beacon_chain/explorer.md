
# Beacon Chain Explorer

`ARCHEthic` Blockchain leverages `Sharding` to outperform the exiting blockchains using 256 shards [subsets] and BeaconChain Explorer displays the entire transactions across subsets. 
<br />
So, the developers/users can overcome the overhead of searching in each shard.


## Concepts
To better understand about Beacon Chain Explorer one need to first have overview the some basic concepts below: 

### Slot Timer

It is the time interval for a slot. We can explicitly give any time interval based on our testnet/mainnet environmnent.

### Epoch

It is an time interval within ARCHEthic network for the Beacon chain subsets.
One epoch maybe having many slots based on slot timer interval.

### Summary Timer

It is the time interval after which added beacon transactions seals the transaction in the current beacon summary transaction and Replicates the transactions to other nodes.


### Slot

A slot is responsible for transaction being added to the Beacon Chain and shards. [See Slot](/technology/sharding/beacon_chain.md#slot)

### Subset
`ARCHEthic` Blockchain have 256 subsets, from 00 to FF [0-255] (two nimbles) as the byte capacity and the first byte of the transaction.


## Process to get beacon transaction summary
To understand this process better one must have gone through the [Yellow Paper](https://uniris.io/UNIRIS-Yellow-Paper.pdf) and have clear understanding for the beacon chain.

Beacon Chain will store the transactions in beacons and at the beacon summary time the those all transactions are summarizedwill be replicated among the beacon storage nodes which are elected are storage nodes.

 The day 1 will be the next beacon summary date from the first node enrollment date.
 <br/>
 which means, if the first node joins on `02/11/2021 10:00:00`, the beacon chain date to pull will be `03/11/2021 00:00:00`
 <br/>
Let's get deep into the codebase. So, here are the functions we have implemented.
<br/>
In the BeaconChain module to get the previous summary time from the given time. we have previous_summary_time() function which returns the list containing the summary time as list items from the start.
- BeaconChain.previous_summary_time(date)  : to get the list of beacon chain sync date (pages)
<br/>
 For the list of subsets: 
- BeaconChain.list_subsets : to get the list of subsets
 To the the beacon chain summary transaction we have to compute the address first, using summary_transaction_address(subset,date,true)[true is passed just to get the summary address instead of beacon] which takes the above two arguments i.e date and subset and returns the address of beacon summary
- BeaconChain.summary_transaction_address(subset, date, true)  : to get the beacon chain transaction address for a given subset at a given date.

 Now using beacon summary address we can get the transactions but from which storage node that we have to query is given by the heuristic election using the list of subset, date and list of available_nodes. 
- Election.beacon_storage_nodes(subset, date, node_list) : to get the node which stored the transaction
<br/>
- P2P.reply_first(nodes, message)  : to request from the closest node[
Here the message is GetBeaconSummary().]

 Now fetching the data from the right node.
 so, we will pass the node list got from storage nodes election and the message here is GetBeaconSummary(address) which returns the transaction_summaries.

## How to get transactions in realtime

In the subset process when a new transaction is added a message is passed that a transaction got added to the current slot now we have to live feed this transactions instanly.
<br/>
When the transaction is added it will send a P2P message to the subscribed nodes(nodes who want the live feed) and the same is displayed in the UI by adding this to the current page in the beacon chain explorer.

for this a P2P message which will register beacon node for the beacon updates and push the beacon updates to the registered nodes and related transaction added to the current beacon.  

Let's get dive deeper into this:

In BeaconChain, we have BeaconChain.subscribe_for_beacon_updates(subset,node_public_key) which checks the node public key with the utility function which checks whether the node public key exists or not and returns true or false as response. So, if Utils.key_in_node_list?() returns true the 
Subset.subscribe_for_beacon_updates(subset, node_public_key) will add the node public key to the subscribed nodes list of the given subset and return the current slot.
Now when get a new transaction is added to the subset a P2P message is sent to the list of subscribed nodes which has the Beacon Update message containing the transaction summary of the newly added transaction.