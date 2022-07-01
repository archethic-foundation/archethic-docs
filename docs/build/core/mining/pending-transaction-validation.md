---
id: transaction-validation
title: Pending transaction validation
---

When a transaction is under validation a process is started to perform the ARCH consensus workflow.

At the beginning of this workflow, a prior validation is done to detect if the transaction is errornous according of several implementations based on the type of the transactions and other criterias.

1. Check of the previous signature
2. Check if there is smart contract, of its validity
3. Check the content size does not exceed the threshold defined in the configuration
4. Provide verification based on the transaction type

## Smart contract verification

If a transaction contains smart contract, it needs to verify certains things to be sure the smart contract is valid and the nodes will be able to interpret the contract, for example:

- Parse the contract and determines its validity
- If an ownership and its secret have been encoded for the node shared storage nonce public key, so they will be able create new transaction on the chain

## Transaction type verification

### Node transaction verification

Before to join the network, node must submit a transaction with a type "node".
The following checks are performed:
- Decoding of the transaction's content
- Assert the origin key is authorized along with the certification. (See [Hardware Root of Trust](/learn/cryptography/hardware-root-of-trust))
- Check if there are not already existing nodes with the same ip, port and public key

### Node shared secrets transaction verification
 
Periodically the nodes submit a renewal of node shared secrets through a transaction.
The following checks are performed:
- Decoding of the transactio's content
- Check is the new authorized node proposed are available

### Token transaction verification

To create a new asset (Token), a transaction with a type "token" is submitted to the network.

The nodes asserts the content of the Token transactions respects the formatting to be able for the node to interpret it and mint tokens.

### Oracle transaction verification

When the OracleChain polled some external data and build a transaction to propose the new changes, the nodes will assert the content from the services data are correct regarding the service SLA. (See [OracleChain Service](/build/core/oracle-chain/service))

### OracleSummary transaction verification

Periodically, after a cycle/epoch, the nodes submit a transaction which summarizes the entire oracle chain data for this epoch.
Then the nodes have to assert the changes through:
- Fetching the entire oracle chain for this epoch
- Assert the aggregated content in the oracle chain summary matches the data from all the transaction in the oracle chain 

### Code proposal transaction verification

When a new upgrade of the network is proposed, a transaction embeds the changes and is sent to the network. (See: On-Chain Governance 

The following checks are performed:
- Decoding the proposal changes (like Git patch)
- Assert the validity of the changes: format, conformity with the latest Git commit

### Code approval transaction verification

When an updated have been proposed, technical commitee member can vote for a proposal, then a transaction is sent. (See: On-Chain Governance)

The following checks are performed:
- Check if the approver is a member of the technical commitee,
- Check if the proposal exists
- Check if the proposal hasn't been signed by the approver earlier



