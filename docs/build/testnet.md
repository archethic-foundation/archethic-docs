---
id: testnet
title: Testnet
---

## Local

To test and build on top of Archethic network, we encourage people to test with a local instance.

### Installation

- Clone the repository: 
```
git clone https://github.com/archethic-foundation/archethic-node.git
```

- Setup the dev environment:

  - [Install Elixir](https://elixir-lang.org/install.html)
  - [Install NodeJS](https://nodejs.org/en/download/)
  - [Install GMP](https://gmplib.org)
  - [Install ScyllaDB](https://www.scylladb.com/download/#server)
  
- Fetch the dependencies
```
mix deps.get
```

- Build web assets
```
cd assets ; npm install; cd -
``` 

- Start instance
```
iex -S mix
```

### Get some funds

To be able to fund some addresses, the development mode of the running enable the testnet faucet.

1. Funding

	Browse to the http://localhost:4000/faucet and enter any address to send funds to. 

	It should transfer 100 UCO to the given address.

2. Check the balance

	Go to http://localhost:4000/explorer/transaction/{TYPE_YOUR_ADDRESS_IN_HEXADECIMAL}

	It should display 100 unspent outputs (in the "Ledger inputs" section)

## Public

Public testnet is available at [https://testnet.archethic.net](https://testnet.archethic.net)

### Get some funds

You can then go the [faucet](https://testnet.archethic.net/faucet) to get free UCOs to experiment the Archethic network
