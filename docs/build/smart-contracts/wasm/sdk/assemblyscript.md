---
id: assemblyscript
title: AssemblyScript
---

:::info
AssemblyScript is a TypeScript-like language targeting WebAssembly's feature set specifically, giving developers low-level control over their code.

Its similarity with TypeScript makes it easy to compile to WebAssembly without learning a new language and
integrates with the existing Web ecosystem - no heavy toolchains to set up. 
:::

AssemblyScript SDK designed for developing smart contracts on the Archethic Public Blockchain.

## Features
- Peace of mind: Abstract WASM in/out complexity by providing a simple API and decorators
- Integrated hooks: Reserved functions (onInit, onUpgrade) to leverage blockchain hooks
- Typed language: Built on AssemblyScript, a TypeScript-like language
- Build-in specification: Integrate a manifest generation to export types and ABI
- Tooling: SDK provides CLI & Test framework to start in minutes smart contract development

## Installation

Generate a new project by using the following commands

```bash
npm create @archethicjs/ae-contract-as my-smart-contract
cd my-smart-contract
npm install
```

## Usage

The SDK abstract communication with the WebAssembly host and provide a set of functions and classes.

### Action definition

To define a action executed from a trigger coming from transaction or self-triggered, you have to create a exported function
annotated as `@action` with the corresponding trigger (`TriggerType`).

The function must return  `ActionResult<T>` object to return new state and/or new transaction.

```typescript title="/assembly/index.ts"
@action(TriggerType.Interval, "0 0 * * *") // Executes daily at midnight
export function tick(ctx: Context<State>): ActionResult<State> {
  // Create a new transaction with content "tick"
  return new ActionResult<State>().setTransaction(
    new TransactionBuilder()
      .setContent("tick")
  );
}
```

To use a self-triggered you have to pass a parameter to the `@action` decorator

```typescript title=/assembly/index.ts
@action(TriggerType.Interval, "0 0 * * *")
export function tick(ctx: Context<State>): ActionResult<State> {
  return new ActionResult<State>().setTransaction(
    return new TransactionBuilder()
      .setContent("tick")
  )
}
```

### TriggerType Options

- **Transaction**: Executes the action when a transaction targets the smart contract.
- **Interval**: Executes the action at specified time intervals. Requires a valid Crontab string as a parameter.
- **DateTime**: Executes the action at a specific UNIX timestamp.
- **Oracle**: Executes the action when an oracle transaction is replicated.

Each of these triggers can be used to define targeted actions based on your specific requirements.

### Readonly functions definition

Along with actions, we can defined readonly functions used to view some state data or do some computation without mutate the state.
You can annotate your function with `@publicFunction` to expose them as readonly.

```typescript title=/assembly/index.ts
@publicFunction() // Expose this function as a readonly method
export function getCounter(ctx: Context<State>): string {
  return `Current counter is ${ctx.state.counter}`;
}
```

### Function parameters

It's possible to accept arguments for the action and readonly function. In that case you have to use another context: 
- `ContextWithParams<State, CustomParams>`: This allow to get the `arguments` field in the `Context` class assigned
- `ContextWithTransaction<State>`: : This allow to get the `transaction` field in the `Context` class assigned
- `ContextWithTransactionAndParams<State, CustomParams>`: This allow to get the both `arguments` and `transaction` in the `Context` class assigned

```typescript title=/assembly/index.ts
class State {
  counter: u32 = 0;
}

class HelloParams {
  name!: string;
}

@action(TriggerType.Transaction)
export function hello(ctx: ContextWithParams<State, HelloParams>): ActionResult<State> {
  const state = ctx.state
  state.counter++

  return new ActionResult<State>()
    .setState(state)
    .setTransaction(new TransactionBuilder().setContent(`Hello from ${ctx.arguments.name}`))
}

@publicFunction()
export function counterStatus(ctx: Context<State>): string {
  return `Current counter is ${ctx.state.counter}`
}

@publicFunction()
export function helloWorld(ctx: ContextWithParams<State, HelloParams>): string {
  return `Hello World from ${ctx.arguments.name}`
}
```

### Transaction builder

The SDK offers a transaction builder to simplify creation of transaction to be returned as result of an action.

First import it:
```typescript
import { TransactionBuilder } from "@archethicjs/ae-contract-as";
```

Then use it to create complex transaction:
```typescript
new TransactionBuilder()
  .setType(TransactionType.Transfer)
  .setContent("Any content")
  .addUCOTransfer(new Address("0000...."), 100000000)
  ...
```

#### API

- **`setType(type: TransactionType)`**  
  _Description_: Defines the type of transaction.  
  _Parameters_:  
    - `type` (`TransactionType`): The type of the transaction (e.g., `Transfer`, `Token`, `Data`, `Contract`).

- **`setContent(data: String)`**  
  _Description_: Sets free-form content for the transaction.  
  _Parameters_:  
    - `data` (`String`): The content to be included in the transaction, as a string.

- **`addUCOTransfer(to: Address, amount: u64)`**  
  _Description_: Adds a UCO (Utility Coin) transfer to the transaction.  
  _Parameters_:  
    - `to` (`Address`): The recipient's address.  
    - `amount` (`u64`): The amount of UCO to transfer. (BigInt format - 10^8: 100000000 = 1 UCO)

- **`addTokenTransfer(to: Address, amount: u64, tokenAddress: Address, tokenId?: u32)`**  
  _Description_: Adds a token transfer to the transaction.  
  _Parameters_:  
    - `to` (`Address`): The recipient's address.  
    - `amount` (`u64`): The amount of tokens to transfer. (BigInt format - 10^8: 100000000 = 1 token)
    - `tokenAddress` (`Address`): The address of the token contract.  
    - `tokenId` (`u32`, optional): The token ID if the token is non-fungible. If omitted, it assumes a fungible token.

- **`addRecipient<T>(address: Address, actionName: string, arg: T)`**  
  _Description_: Adds a recipient for a smart contract call within the transaction.  
  _Parameters_:  
    - `address` (`Address`): The recipient's address.  
    - `actionName` (`string`): The name of the action or function to be called.  
    - `arg` (`T`): The arguments to pass to the smart contract function.

- **`addOwnership(secret: Hex, authorizedKeys: Map<PublicKey, Hex>)`**  
  _Description_: Sets the ownership for the transaction with specified keys.  
  _Parameters_:  
    - `secret` (`Hex`): The encrypted secret
    - `authorizedKeys` (`Map<PublicKey, Hex>`): A map of public keys and their corresponding secrets encrypted for the public keys.

- **`setContract(contract: Contract)`**  
  _Description_: Sets the contract for the transaction.  
  _Parameters_:  
    - `contract` (`Contract`): The contract to be used in the transaction.


### Library (Host functions)

To communicate with the Blockchain or with the external world (off-chain), you can import special functions to fetch external data.


#### Blockchain fetching

```typescript
import {
  getBalance, // Get the balance of user
  getTransaction, // Get a specific transaction
  getGenesisAddress, // Get the genesis address of any address
  getLastAddress, // Get the last address of a chain
  getFirstTransactionAddress, // Get the first transaction of a chain
  getLastTransaction, // Get the last transaction of a chain
  getBurnAddress, // Get the burn address
  getPreviousAddress, // Get the previous address of any public key
  getGenesisPublicKey, // Get the genesis public key of any public key
} from "@archethic/ae-contract-as/assembly";
```

```typescript title="Example to fetch balance"
const balance = getBalance(args.address)

const ucoBalance = balance.uco
const tokenBalance = 0

for (let i = 0; i < balance.token.length; i++) {
  if (Address.compare(
    balance.token[i].tokenAddress,
    new Address("00001FF1733CAA91336976EE7CEF5AFF6BB26C7682213B8E6770AB82272F966DAC35")
  )) {
    tokenBalance += balance.token[i].amount
  }
}
```

:::caution
Each function will crash the problem if any error is raised by the blockchain
:::

#### Crypto operations

```typescript
import {
  hmacWithStorageNonce, // Provide hmac using blockchain storage nonce (shared secret)
  signWithRecovery, // Generate secp256r1 signature with recovery (compatible EVM)
} from "@archethic/ae-contract-as/assembly";
```

```typescript title="Exemple to generate signature"
const sig: Signature = signWithRecovery(new Hex("dataToSign"))
```

:::caution
Each function will crash the problem if any error is raised by the blockchain
:::

#### Contract interaction

```typescript
import {
  callFunction, // To call a smart contract public function (readonly)
} from "@archethic/ae-contract-as/assembly"; 
```

```typescript title="Example to fetch another smart contract function with expected args"
const address = new Address("00000000000000000000000000000000000000000000000000000000000000000000")
const result = callFunction<ContractArgs, u32>(address, "functionName", { arg: 0 }).unwrapWithDefault(1)
```

```typescript title="Example to fetch another smart contract function without expected args"
const address = new Address("00000000000000000000000000000000000000000000000000000000000000000000")
const result = callFunction<NoArgs, u32>(address, "functionName").unwrap()
```

:::caution
Each `callFunction` return a `Result<T>` structure helping you to catch errors or let it crash.
:::

#### HTTP requests

```typescript
import { HttpRequest, request } from "@archethic/ae-contract-as/assembly";
```

```typescript title="Example to fetch off-chain data"
// Fetch data from an off-chain source
const response = request({ uri: "https://api.example.com/data" } as HttpRequest);

assert(response.status === 200, `Failed to fetch data: ${response.status}`)
const body = response.body
// Do something with the body

```

:::caution
Each function will crash the problem if any error is raised by the blockchain
:::

### Errors

Sometimes we want to return meaningfull error messages for incorrect values, in that case the sdk supports two ways of doing that:
- using assertions (`assert`) for non-recoverable logic errors.
- using exceptions  (`throw`) for recoverable or user-defined exceptions.

```typescript title="Example with assert"
@action(TriggerType.Transaction)
export function inc(context: ContextWithParams<UserState, IncArgs>): ActionResult<UserState> {
  const state = context.state;
  assert(state.counter >= 0, "Counter state must not be negative");

  // ...
}
```

```typescript title="Example with throw"
@action(TriggerType.Transaction)
export function inc(context: ContextWithParams<UserState, IncArgs>): ActionResult<UserState> {
  const state = context.state;
  if (state.counter < 0) {
    throw new Error("Counter state must not be negative")
  }

  // ...
}
```

### Binaries

To work with binary such addresses, public keys, signatures, etc., the sdk provides a set of class you can use for this purpose

```typescript
import { Address, Signature, PublicKey, Hex } from "@archethic/ae-contract-as/assembly";

// Compare two addresses
const addr1 = new Address("0000...C1C8");
const addr2 = new Address("0000...BE4A7");
const areSame = Address.compare(addr1, addr2); // Returns false if different

// Format address as a string
console.log(addr1.toString()); // Output: "0000...C1C8"

// Create a new signature
const signature = new Signature("F1B7...FF67");
console.log(signature.toString()); // Output: "F1B7...FF67"
```

### Best pratices

1. Modularize State Updates:

Separate state update logic into helper functions for better readability.

```typescript
function updateCounter(state: State, increment: number): State {
  state.counter += increment;
  return state;
}

@action(TriggerType.Transaction)
export function inc(ctx: Context<State>): ActionResult<State> {
  const updatedState = updateCounter(ctx.state, 1);
  return new ActionResult<State>().setState(updatedState);
}
```

You could also create multiple files and modules if the main files become too big.
Then you could import them in the actions definition

```typescript title=/assembly/counter.ts
export updateCounter(state: State, increment: number): State {
  state.counter += increment;
  return state;
}
```

```typescript title=/assembly/index.ts
import { updateCounter } from "./counter"

@action(TriggerType.Transaction)
export function inc(ctx: Context<State>): ActionResult<State> {
  const updatedState = updateCounter(ctx.state, 1);
  return new ActionResult<State>().setState(updatedState);
}
```

2. Input Validation

- Validate inputs early to prevent unexpected behavior or crashes.
- Use assertions or throw exceptions for invalid inputs.

```typescript
@action(TriggerType.Transaction)
export function setName(ctx: ContextWithParams<State, SetParams>): ActionResult<State> {
  const name = ctx.arguments.name.trim();
  assert(name.length > 0, "Name cannot be empty");

  ctx.state.data.set("name", name);
  return new ActionResult<State>().setState(ctx.state);
}
```

3. Use Typed Classes for Inputs:

Always define clear classes for function arguments to define a structured ABI

```typescript
class HelloParams {
  name!: string; // Use '!' to enforce this property as required
}

@action(TriggerType.Transaction)
export function setName(ctx: ContextWithParams<State, HelloParams>): ActionResult<State> {
  return new ActionResult<State>().setTransaction(
    new TransactionBuilder()
      .setContent(ctx.arguments.name)
  )
}

// Do not
@action(TriggerType.Transaction)
export function setName(ctx: ContextWithParams<State, { name: string }>): ActionResult<State> {
  ...
}
```

4. Use Constants and Enums

- Replace magic numbers or strings with constants or enums for clarity and maintainability.

```typescript
const MAX_RETRY_ATTEMPTS: u8 = 5;

enum TransactionType {
  Transfer = 1,
  ContractCall = 2,
}
```

5. Secure Contract Interactions

- When interacting with other contracts, validate responses and handle errors gracefully.
- Avoid hardcoding addresses unless they are static or genesis addresses.

```typescript
const result = callFunction<NoArgs, u32>(address, "getBalance").unwrapWithDefault(0);
if (result === 0) {
  throw new Error("Failed to fetch balance");
}
```

6. Avoid floating-point arithmetic

The most reliable solution is to avoid floating-point numbers altogether, as they can lead to subtle discrepancies. 
Instead, use fixed-point arithmetic, which represents numbers as integers scaled by a constant factor (e.g., a fixed number of decimal places).

- Representation: For example, represent currency values in the smallest possible value by using integers to avoid floating-point imprecision. UCO or tokens amount must be defined in 10^8 unit (`100000000` for `1` UCO)
- Precision: Choose an appropriate scale factor that matches the precision you need for your application (e.g., 1000 for millisecond precision or 100 for cent precision in financial applications).

Example: If you want to represent 10.25 with two decimal places, store it as 1025 (integer) and scale it by 100.

AssemblyScript provides i32, i64, u32, and u64 types for integer operations that can be used for these calculations.

```typescript
const scaleFactor = 1000;  // For 3 decimal places
let a: i64 = 10250;  // Represents 10.25 (scaled by 1000)
let b: i64 = 15000;  // Represents 15.00 (scaled by 1000)
let sum: i64 = a + b;  // Sum is 25750, representing 25.75 after dividing by scale factor
```

`i64` and `u64` provide operations that work with large numbers. By using integer types in calculations, you ensure the contract behaves deterministically across all environments.

## Tests

To run the suite test you can execute the following command.

```bash
npm run test
```



## CLI

### Build 

To compile the project using the following command

```bash
npm run build 
```

By default the build command is targetting debug mode.
This enables debug information in emitted binaries, usefull in development to help identifying the source of errorness while interacting with the WASM module.
For example, the compiler appends a name section to the binary, containing names of functions, globals, locals and so on. These names will show up in stack traces.

This mode also generate *.wat file, to see the text representation of the wasm module in human readable format.

#### Manifest generation

After the build is successed, the manifest file will be generated with the corresponding ABI for the functions definitions, input/output and state types.

```json title=/dist/manifest.json
{
  "abi": {
    "state": {
      "counter": "u32"
    },
    "functions": {
      "hello": {
        "type": "action",
        "triggerType": "transaction",
        "input": {
          "name": "string"
        },
      },
      "helloWorld": {
        "type": "publicFunction",
        "input": {
          "name": "string"
        },
        "output": "string"
      }
    }
  }
}
```

#### Release mode

To have a more production ready compilation, you can use the following command to compile for release

```bash
npx aewasm build --mode release
```

This will compile the WASM module with the minimal runtime overhead (without garbage collection) and optimize the module compilation for the size. 

### Deploy

Finally to deploy it to a live environment (local, testnet, mainnet), use the following command

```bash
npx aewasm build --mode release && npx aewasm deploy -s <SEED> -e [ENDPOINT]
```
