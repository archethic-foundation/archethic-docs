---
id: getting-started
title: Getting Started
sidebar_position: 2
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

This guide explains how to create your first smart contract and deploy it on the Archethic testnet.

## Setup

Before creating a smart contract, set up your development environment to use WebAssembly (WASM).

<Tabs>
<TabItem value="assemblyscript" label="AssemblyScript SDK" default>

  You need to have NodeJS & npm installed

  ### Prerequisites

  Ensure you have Node.js and npm installed.

  ### Create a new project

  Run the following command to create a new project:

  ```bash
  npm create @archethicjs/ae-contract-as my_contract
  ```

  This creates a new project in the my_contract folder with the following structure:

  ```
  my_contract/
  ├── assembly/
  │   ├── index.ts         # Main contract code
  │   ├── tsconfig.json    # Typescript configuration for AssemblyScript
  ├── tests
      ├── index.test.ts    # Main test file
  ├── asconfig.json        # AssemblyScript configuration
  ├── package.json         # Project dependencies and scripts
  ├── README.md            # Project documentation
  └── tsconfig.json        # TypeScript configuration
  ```

  ### Install SDK

  Navigate to your project folder and install the SDK:

  ```bash
  cd my_contract
  npm install
  ```

</TabItem>
</Tabs>

## Writing your first contract

<Tabs>
<TabItem value="assemblyscript" label="AssemblyScript SDK" default>

```typescript title="/assembly/index.ts"
import {
    ActionResult,
    Context,
    ContextWithParams,
    TriggerType,
} from "@archethicjs/ae-contract-as/assembly";

// Define the contract state
class State {
    counter: i32 = 0;
}

// Initialize the contract during creation
export function onInit(context: Context<State>): State {
    return new State();
}

class IncArgs {
    value!: u32;
}

// Define an action triggered by a transaction
@action(TriggerType.Transaction)
export function inc(context: ContextWithParams<State, IncArgs>): ActionResult<State> {
    const state = context.state;

    // Validate the input
    if (context.arguments.value == 0)
        throw new Error("increment value must be greater than 0")

    // Update the state
    state.counter += context.arguments.value;

    // Return the updated state
    return new ActionResult<State>().setState(state)
}
```

In this example, the inc function expects an argument to increment the contract's state with each incoming transaction.

</TabItem>
</Tabs>

## Test & Simulation

Contract tests simulate the execution of WASM modules as the blockchain runtime would. Use the `tests` folder to define test cases.

```typescript title="/tests/index.test.ts"
import { describe, it, expect } from 'vitest'
import { readFileSync } from "fs";
import { getContract } from "@archethicjs/ae-contract-test";

describe("inc", () => {
    it("should increment the state", async () => {
        const wasmBuffer = readFileSync("./dist/contract.wasm");
        const contract = await getContract(wasmBuffer);

        // Increment from an undefined state
        let result = contract.inc({ value: 1 });
        expect(result?.state.counter).toBe(1);

        // Increment from a computed state
        result = contract.inc({ value: 1 });
        expect(result?.state.counter).toBe(2);

        // Increment with a predefined state
        result = contract.inc({ value: 1 }, { state: { counter: 2 } });
        expect(result?.state.counter).toBe(3);
    });
});
```

### Simulate state

To simulate a specific state of the contract - in order to speed up the setup - you can hardcode it in the tests

```typescript title="Example of test simulating state"
it("should increment with state", async () => {
  const wasmBuffer = readFileSync("./dist/contract.wasm");
  const contract = await getContract(wasmBuffer);

  // Simulate a specific initial state
  const result = contract.inc({ state: { counter: 2 } });
  expect(result?.state.counter).toBe(3);
});
```

### Simulate constants

To simulate constants such as contract address, genesis, balance, etc.., you can hardcode them in the tests

```typescript title="Example of test simulating state"
it("should display balance as input", async () => {
  const wasmBuffer = readFileSync("./dist/contract.wasm");

  const contract = await getContract(wasmBuffer);
  const result = contract.currentBalance({
    balance: {
      uco: 100_000_000
    }
  })
  expect(result).toBe('UCO: 100000000')
})
```

### Mock Blockchain Calls

```typescript title="Example of test using mock"
it("should fetch balance", async () => {
  const wasmBuffer = readFileSync("./dist/contract.wasm");
  const contract = await getContract(wasmBuffer);

  const address = new Address("0000583a6a1d9a536ed7f3c8e7f3981ed2f7ff8cb3c3f8f2b9eb0c862d81f75d28cb")

  // We simulate getBalance call
  const contract = await getContract(wasmBuffer, {
    ioMocks: {
      getBalance(requestedAddress: Address): Balance {
        if (Address.compare(requestedAddress, address)) {
          return { uco: 100_000_000, token: [] }
        }
        return { uco: 0, token: [] }
      }
    }
  });

  const result = contract.fetchBalance({ address: address })
  expect(result).toBe('UCO: 100000000')
});
```

## Deployment

Configure your deployment environment by creating the following file:

```typescript title="/archethic.config.js"
export default {
  endpoint: process.env["ENDPOINT"] || "https://testnet.archethic.net",
  seed: process.env["SEED"], // Optional if using the Archethic wallet
}
```

Then, we need to create a script to implement the deployment and execute the transactions

```javascript title="/scripts/deploy.js"
import { getContext } from "@archethicjs/ae-contract-test"
import { Utils } from "@archethicjs/sdk"

async function main() {
  const ctx = await getContext()
  const fundingAccount = await ctx.getAccount()

  // Request testnet funds
  await fundingAccount.requestFaucet()

  const contractAccount = ctx.getRandomAccount()

  // Fund the contract's chain
  const fundingTx = ctx.archethicClient.transaction.new()
  .setType("transfer")
  .addUCOTransfer(contractAccount.address, Utils.parseBigInt("1"))

  console.log("Funding contract...")
  await fundingAccount.sendTransaction(fundingTx)

  console.log("Deploying contract...")
  const transactionAddress = await ctx.deployContract(contractAccount)

  console.log(`Contract deployed at: ${transactionAddress}`)
  process.exit(0)
}

main().catch((error) => {
  console.error(error);
  process.exit(1)
});
```

We can finally execute them

```bash
node scripts/deploy.js
```

:::success 
Congratulations! Your first Archethic WASM contract is now live
:::

## Upgrading Contracts

To allow upgrades, specify an authorized address in the configuration:

```typescript title="/archethic.config.js"
export default {
  endpoint: process.env["ENDPOINT"] || "https://testnet.archethic.net",
  seed: process.env["SEED"],
  upgradeAddress: "0000..." // Address authorized for upgrades
}
```

Create an upgrade script:

```javascript title="/scripts/upgrade.js"
import { getContext, getUpgradeContractTx } from "@archethicjs/ae-contract-test"

async function main() {
  const ctx = await getContext()

  if (process.env["CONTRACT"] === undefined) {
    throw new Error("CONTRACT env var is required")
  }

  const fundingAccount = await ctx.getAccount()
  const contractAddress = process.env["CONTRACT"]

  console.log(`Upgrading contract ${contractAddress}`)

  await ctx.updateContract(fundingAccount, contractAddress)

  console.log("Contract upgraded")
  process.exit(0)
}

main().catch((error) => {
  console.error(error);
  process.exit(1)
});
```

Run the upgrade script:

```bash
CONTRACT=ADDRESS_OF_THE_DEPLOYED_CONTRACT node scripts/upgrade.js
```
