---
id: aeSwap
title: DEX - Application Front End
sidebar_label: aeSwap
sidebar_position: 1
---


# aeSwap - Tutorial

:::info
Currently, aeSwap is available exclusively on the testnet.
:::

:::info
aeSwap is exclusively available as a web application accessible through internet browsers.
:::

:::caution
The application is compatible only with the desktop versions of the Archethic wallet, which include macOS, Linux, and Windows platforms.
:::

Ensure that you have the appropriate desktop version of the Archethic wallet installed on your system to interact with the application effectively. The Archethic wallet can be downloaded from [here](https://www.archethic.net/wallet/).

:::tip
For optimal performance, it is recommended to use the latest version of your internet browser and keep your desktop wallet updated.
:::


Access: https://dex.testnet.archethic.net<br/>
Source code: https://github.com/archethic-foundation/dex

This Flutter-built web application enables swap assets on-chain, add liquidity and access yield farming.

:::success
Before proceeding, familiarize yourself with [Archethic's DEX Key Concepts](/participate/dex/).
:::


## Welcome Screen

Upon accessing aeSwap, you are greeted with a welcome screen. To begin, click on the 'Go !' button.

![Welcome Screen](/img/tutorial/aeSwap/aeSwap-Welcome.png)  
![aeSWap Main Screen](/img/tutorial/aeSwap/aeSwap-Main-Screen.png)

### Application Menu

A right-hand header menu provides links to essential information and application documentation. It includes an option to send logs to Archethic for troubleshooting purposes.

![Menu](/img/tutorial/aeSwap/aeSwap-Menu.png)

### Feature Access

The top menu grants access to various DEX functionalities:

- Swap assets
- List Pools / Add or remove Liquidity
- Farm

![Menu Features](/img/tutorial/aeSwap/aeSwap-Features.png)

## Swapping Your tokens

The DEX process involves multiple steps:

1. Inputting information to initiate the swap
2. Confirming the entered details
3. Executing the swap, with progress tracking and transaction signing in Archethic wallet

### Step 1: Select tokens

Click on "Select a token" to access to a popup with tokens info

![Token Selection](/img/tutorial/aeSwap/aeSwap-Select-Token.png)

### Step 2: Fill amounts to swap

Fill the amount to swap in the form's input.
You can initialize the field manually or calculate the half or the max of your balance

:::note
The balance of the token is displayed
The amount is automatically calculate 
:::


## Create a pool and add liquidity

You can create a liquidity pool from the liquidity menu via the "Create a pool" button.

![Add pool button](/img/tutorial/aeSwap/aeSwap-AddPool-Btn.png)

### Step 1: Creating a Liquidity Pool: Essential Information

To establish a liquidity pool on the DEX, the following information is necessary:
- **Token Pair**: Identify the two tokens that will constitute the pair within the pool.
- **Initial Investment**: Specify the amount of each token you intend to contribute. This initial contribution determines the pool's initial price ratio.

#### Pre-creation Validations

Before creating a liquidity pool, the system conducts several checks to ensure compliance and feasibility:
- **Unique Pair Check**: Ensures that a pool with the selected token pair does not already exist.
- **Liquidity Requirements**: Confirms that your Archethic wallet holds a sufficient quantity of the tokens intended for liquidity provision.

:::info
When creating a pool involving UCO (the native token of the Archethic blockchain), the system automatically calculates and reserves the necessary amount for transaction fees associated with pool creation and liquidity addition. As a result, the maximum amount of UCO that can be allocated is less than your total UCO balance to accommodate these costs.
:::
---

![Add pool form](/img/tutorial/aeSwap/aeSwap-AddPool-Form.png)

### Step 2: Finalizing Pool Creation: Confirmation and Validation Steps

After you submit the pool creation form by clicking the "Create a new pool" button, you will be directed to a confirmation screen. This screen serves a critical role in the pool creation process, enabling you to:

- **Review Token Ratio**: Examine the initial ratio between the two tokens in your new pool to ensure it aligns with your expectations.
- **Balance Verification**: Check your account balances before and after liquidity is added to understand the impact of your transaction.
If the details align with your intentions and you are content with the proposed setup, proceed by clicking on the "Confirm the creation" button to move forward in the process.

![Add pool confirm](/img/tutorial/aeSwap/aeSwap-AddPool-Confirm.png)

#### Wallet Validations for Liquidity Transactions

The creation of the pool and addition of liquidity to the pool necessitate two separate validations within your Archethic wallet:

**Transaction Confirmation**: You will need to approve two transactions – one for creating the pool and another for adding liquidity to it.

**Transaction Addresses**: Upon successful completion of these transactions, you will be provided with their addresses. These addresses allow you to verify the transactions on the blockchain, ensuring transparency and security in your operations.

![Add pool end](/img/tutorial/aeSwap/aeSwap-AddPool-End.png)

## Navigating Pool Information

Our DEX offers a unique and engaging way to access detailed information about each liquidity pool through an interactive card. You can easily explore this card by clicking on the exclamation mark (!) icon or the house icon to "rotate" the view, revealing comprehensive details about the pools in a visually intuitive manner.

### Front View: Essential Pool Details

![Pool List Front](/img/tutorial/aeSwap//aeSwap-PoolList-Front.png)

When viewing the front of the card, users are presented with a rich set of information designed to provide a quick and informative snapshot of each pool:

- **Token Pair and Logos**: Each pool is represented by its pair of tokens, accompanied by their logos when available, for easy identification.
- **Verification Status**: A green icon signifies that the pool has been officially verified by Archethic, indicating a layer of trust and security.
- **Personal Liquidity Contribution**: If you have added liquidity to a pool, a yellow star icon will highlight your participation, making it easy to track your investments.
- **Total Value Locked (TVL)**: The TVL is displayed in dollars, offering a clear view of the pool's size and the total capital invested.
- **Trading Dynamics**: Detailed statistics on trading volume and fees collected over the last 24 hours and cumulatively are provided to give users insights into the pool's activity and profitability.

### Back View: Exploring Pool Details

![Pool List Back](/img/tutorial/aeSwap/aeSwap-PoolList-Back.png)

You can find in this side of the card:

- **Pool Address**: Displayed prominently for easy reference. Accompanying the address, an icon for quick copying allows users to easily share or save the address. - Additionally, a separate icon links directly to the blockchain explorer, where users can delve into full details and analytics of the pool.
- **Token Holdings**: This section lists the exact number of tokens currently deposited within the pool, providing a clear view of the pool's liquidity depth.
- **Swap Fee Percentage**: The fee charged for swap transactions within this particular pool is displayed as a percentage. This fee contributes to the rewards earned by liquidity providers, representing an essential metric for potential and current investors.

### Interacting with Pools: Available Actions

On our DEX, participants have the flexibility to engage with liquidity pools through a variety of actions, each designed to suit different strategies and needs. Here’s a concise overview of the options available:

**Exchange Pool Tokens**: Users can swap tokens within a pool, utilizing the liquidity available to exchange one token for another. This action is fundamental to the operation of a DEX, allowing users to seamlessly trade assets at current market rates determined by the pool's liquidity and token ratio.

**Add Liquidity**: If you're looking to contribute to a pool, this action enables you to deposit your tokens into the pool. Adding liquidity increases the pool's total value locked (TVL) and, in return, you receive liquidity provider (LP) tokens. These LP tokens represent your share of the pool and entitle you to a portion of the trading fees generated by the pool's activity.

**Remove Liquidity**: When you wish to retrieve your deposited tokens from a pool, this action allows you to do so. By returning your LP tokens, you can claim back your share of the pool, along with any accrued fees, based on the current ratio of tokens within the pool. This action is essential for managing your investments and realizing potential gains from fee accumulation.

## Add Liquidity

Enhancing your portfolio by adding liquidity to a pool is a straightforward process designed for ease of use and efficiency. Here's how you can contribute to the liquidity of your chosen pool:

### Step 1: Adding Liquidity: Essential Information

![Add liquidity form](/img/tutorial/aeSwap/aeSwap-LiquidityAdd-Form.png)

**Entering Token Amounts**: Begin by inputting the amount of one of the two tokens in the pool's pair. The system will automatically calculate the necessary amount of the second token based on the current pool ratio, ensuring your contribution maintains the pool's balance.

**Slippage Tolerance Configuration**: To manage the impact of price fluctuations during your transaction, click on the wheel icon next to "slippage tolerance." Slippage occurs when the price at which your transaction is executed differs from the price when you submitted it. Adjusting your slippage tolerance allows you to control the maximum price variation you're willing to accept.

Transaction Details: Once you've set the amounts, the system will display critical information about your transaction:
- **Minimum Token Amounts**: The least amount of each token that will be added to the pool, considering slippage and transaction timing.
- **Estimated LP Tokens**: An estimation of how many liquidity provider (LP) tokens you'll receive in return. These tokens represent your share of the pool and your entitlement to a portion of the trading fees.

**Add Liquidity**: Click the "Add liquidity" button to finalize your contribution. This action initiates the transaction and adds your tokens to the pool.

#### Pre-transaction Validations

Before adding liquidity, the system performs a vital check to ensure:
- **Token Availability**: Verifies that the necessary tokens are available in your wallet for the liquidity addition.

:::info
When adding liquidity involving UCO (the native token of the Archethic blockchain), the system automatically calculates and reserves the necessary amount for transaction fees associated with iquidity addition. As a result, the maximum amount of UCO that can be allocated is less than your total UCO balance to accommodate these costs.
:::


### Step 2: Finalizing Pool Creation: Confirmation and Validation Steps

After you submit the pool creation form by clicking the "Create a new pool" button, you will be directed to a confirmation screen. This screen serves a critical role in the pool creation process, enabling you to:

- **Review Token Ratio**: Examine the initial ratio between the two tokens in your new pool to ensure it aligns with your expectations.
- **Balance Verification**: Check your account balances before and after liquidity is added to understand the impact of your transaction.
If the details align with your intentions and you are content with the proposed setup, proceed by clicking on the "Confirm the creation" button to move forward in the process.

![Add liquidity confirm](/img/tutorial/aeSwap/aeSwap-LiquidityAdd-Confirm.png)

#### Wallet Validations for Liquidity Transactions

The addition of liquidity to the pool necessitates two separate validations within your Archethic wallet:

**Transaction Confirmation**: You will need to approve 1 transaction.

**Transaction Address**: Upon successful completion of this transaction, you will be provided with the address. This address allows you to verify the transaction on the blockchain, ensuring transparency and security in your operation.

![Add liquidity end](/img/tutorial/aeSwap/aeSwap-LiquidityAdd-End.png)

## Remove Liquidity

After contributing liquidity to a pool, you have the flexibility to withdraw some or all of your deposited tokens at any time. This process involves exchanging your liquidity provider (LP) tokens, which represent your share of the pool, back into the original assets. 

