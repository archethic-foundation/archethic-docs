# Local Testnet

To test and build on top of ARCHEthic network, we encourage people to test with a local instance.

## Installation

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

## Testnet

To be able to fund some addresses, the development mode of the running enable the `Testnet Faucet`.
Just to browse to the http://localhost:4000/faucet and enter any address to send funds to. 
It will transfer 100 UCO to the given address.

- Check the balance

Go to http://localhost:4000/explorer/transaction/{TYPE_YOUR_ADDRESS_IN_HEXADECIMAL}

It should display 100 unspent outputs (in the "Ledger inputs" section) 
