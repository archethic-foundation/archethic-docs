---
title: Swap
id: swap
sidebar_label: Swap
---

# Swapping Your Tokens

aeSwap involves multiple steps:

1. Inputting information to initiate the swap
2. Confirming the entered details
3. Executing the swap, with progress tracking and transaction signing in the Archethic wallet

## Step 1: Swap - Essential Information

![Swap form](/img/tutorial/aeSwap/aeSwap-Swap-Form.png)

**Select tokens to swap**: Click on "Select a token" to access a popup with token info

![Token Selection](/img/tutorial/aeSwap/aeSwap-Select-Token.png)

**Entering Token Amount to swap**: Begin by inputting the amount of one of the two tokens in the pool's pair. The system will automatically calculate the necessary amount of the second token based on the current pool ratio.

**Slippage Tolerance Configuration**: To manage the impact of price fluctuations during your transaction, click on the wheel icon next to "slippage tolerance." Slippage occurs when the price at which your transaction is executed differs from the price when you submitted it. Adjusting your slippage tolerance allows you to control the maximum price variation you're willing to accept.

**Transaction Details**: Once you've set the amounts, the system will display information about your transaction:
- **Fees**: Displayed prominently, this includes the fees charged by liquidity providers for facilitating the swap, as well as any operating costs associated with using the Archethic Public Blockchain. These fees are integral to the transaction cost and contribute to the rewards for liquidity providers.
- **Price Impact**: The system calculates and shows the price impact of your transaction, which is the effect your trade will have on the pool's price for the token pair. The price impact is a crucial metric for understanding how the size of your transaction relative to the pool's liquidity can alter the price of the tokens you are trading. A significant transaction in a pool with limited liquidity can lead to a higher price impact.
:::info
If the price impact exceeds certain thresholds (greater than 1% or 5%), the system issues a warning. This is to alert you that your transaction could significantly alter market prices, potentially leading to less favorable trade conditions.
:::
- **Minimum received**: This figure represents the least amount you can expect to receive as a result of your transaction, taking into account slippage and fees. It ensures that you are aware of the worst-case scenario based on the current market conditions and your specified slippage tolerance.
- **Current TVL of the Pool**: The Total Value Locked (TVL) in the pool is provided, giving you an idea of the pool's size and liquidity. A larger TVL indicates a more significant pool, which generally leads to lower price impact from individual transactions.
- **Current Token Ratio**: Lastly, you will see the current ratio of tokens in the pool. This ratio is vital for understanding the liquidity dynamics and potential price movements within the pool.

**Swap**: Click the "Swap" button to finalize your swap. This action initiates the transaction and swaps your tokens.

### Pre-transaction Validations

Before swapping, the system performs a vital check to ensure:
- **Token Availability**: Verifies that the necessary token to swap is available in your wallet.

:::info
When swapping involving UCO (the native token of the Archethic Public Blockchain), the system automatically calculates and reserves the necessary amount for transaction fees associated with liquidity addition. As a result, the maximum amount of UCO that can be allocated is less than your total UCO balance to accommodate these costs.
:::

## Step 2: Finalizing swap: Confirmation and Validation Steps

After you submit the swap form by clicking the "Swap" button, you will be directed to a confirmation screen. This screen serves a critical role in the swap process, enabling you to:

- **Minimum received**
- **Balances Verification**: Check your account balances before and after the swap to understand the impact of your transaction.
- **Fees**
- **Price impact**
If the details align with your intentions and you are content with the proposed setup, proceed by clicking on the "Confirm swap" button to move forward in the process.

![Swap confirm](/img/tutorial/aeSwap/aeSwap-Swap-Confirm.png)

### Wallet Validations for Swap Transaction

**Transaction Confirmation**: You will need to approve 1 transaction.

**Transaction Address**: Upon successful completion of this transaction, you will be provided with the address and the amount swapped. This address allows you to verify the transaction on the blockchain, ensuring transparency and security in your operation.

![Swap end](/img/tutorial/aeSwap/aeSwap-Swap-End.png)
