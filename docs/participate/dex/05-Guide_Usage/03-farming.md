---
title: Farming
id: farming
sidebar_label: Farming
---

# Farming

Our new farming system is built around levels, each with a different reward distribution weight. The higher the level you choose, the longer the locking period for your liquidity pairs, but the greater the rewards you will earn.

To achieve major milestones by 2026, we’ve revised our token distribution. Initially, we planned to distribute 9 million $UCO per year over 10 years, specifically allocated to staking.

However, we will now distribute the tokens over 4 years to boost APR and liquidity. In the first farming phase over 2 months, we already distributed 2.5 million $UCO. Here is the planned token allocation for the coming years:

- Year 1: 45 million UCO tokens
- Year 2: 22.5 million UCO tokens
- Year 3: 11.25 million UCO tokens
- Year 4: 8.75 million UCO tokens

You can manage the farming from the EARN menu or from pool aeETH/UCO card.

## Detailed Breakdown

### Deposits & Rewards
Deposits begin on 25/07/2024, and rewards start on 01/08/2024.

### Level-Based System
The new farming mechanism involves different levels, each offering a unique reward distribution weight. Higher levels require longer locking periods for your liquidity pairs, but they provide higher rewards and a better Annual Percentage Rate (APR). This system is recalculated in real time to ensure fairness.

### Locking Periods
When depositing your LP tokens, you can choose from the following locking periods, each with specific conditions:

- 0 weeks: No lock period, rewards are calculated and released on an hourly basis.
- 1 week: 7 days lock period.
- 1 month: 30 days lock period.
- 3 months: 90 days lock period.
- 6 months: 180 days lock period.
- 1 year: 365 days lock period.
- 2 years: 730 days lock period.
- 3 years (default value): 1095 days lock period.

### Flexibility to Level Up
UCO holders can choose to level up at any time. When leveling up, you can select the a longer locking period than your current one. This resets the lock duration for your LP tokens to the new chosen period, but it also unlocks your current rewards. If you choose not to level up, both your LP tokens and rewards remain locked until the end of the current period.

### Unlocking Rewards
Rewards are tied to the LP tokens and will be released when the LP tokens are withdrawn at the end of the locking period. However, leveling up allows you to unlock and claim your rewards immediately while committing to a new locking period.

For those who chose “Flexible”, you can claim your rewards at any time.

## Dashboard

![Farm Lock Dashboard](/img/tutorial/aeSwap/aeSwap-FarmLock-Dashboard.png)

When you click on the EARN menu, you are directed to the dedicated farming page related to the aeETH/UCO liquidity pool. The dashboard is divided into several sections:

### Liquidity pool section

![Farm Lock Dashboard - Liquidity pool section](/img/tutorial/aeSwap/aeSwap-FarmLock-Dashboard-Block1.png)

This section pertains to the liquidity pool linked with the farm and provides the following features:

- **Token Pair Display**: Shows the pair of tokens involved in the pool.
- **Info Button**: Allows you to view detailed information about the pool.
- **Add Button**: Enables you to add liquidity directly to the pool.
- **Withdraw Button**: Lets you withdraw your liquidity from the pool.
For more detailed information on managing liquidity pools, [please refer to the liquidity pool documentation](/participate/dex/Guide_Usage/liquidity_pool).

### Farm pool section

![Farm Lock Dashboard - Farm section](/img/tutorial/aeSwap/aeSwap-FarmLock-Dashboard-Block2.png)

This section contains information related to the farm. It describes the **reward token (UCO)** and displays the **3-year APR** (*please refer to the application for the exact percentage*). 

There are three available functions:
- **Farm Legacy Info Button**: Allows you to access the card containing information about the farm that was open between 05/17/2024 and 07/17/2024.
- **Add Button**: Enables you to add LP tokens to the farm for a given period or on a flexible basis.
- **Farm Lock Info Button**: Lets you view the information related to the farm.


#### Navigating Farm Lock Information

aeSwap offers a unique and engaging way to access detailed information about each farm through an interactive card. You can easily explore this card by clicking on the turn icon to "rotate" the view, revealing comprehensive details about the farms in a visually intuitive manner.

##### Front View: Essential Farm Details

![Farm Lock Card - Front](/img/tutorial/aeSwap/aeSwap-FarmLock-Front.png)

When viewing the front of the card, users are provided with a comprehensive overview designed to deliver essential information about each farm quickly and effectively:

- **Token Pair and Logos**: The farm is represented by its token pair, accompanied by their logos when available, for straightforward identification.
- **Farm Address**: Displayed prominently for easy reference. Accompanying the address, an icon for quick copying allows users to easily share or save the address. - Additionally, a separate icon links directly to the blockchain explorer, where users can delve into full details and analytics of the farm. 
- **LP Token Address**: Displayed prominently for easy reference. Accompanying the address, an icon for quick copying allows users to easily share or save the address. - Additionally, a separate icon links directly to the blockchain explorer, where users can delve into full details and analytics of the LP Token. 
- **Reward Token**: The specific token awarded as a reward in the farm is shown, informing users of the type of rewards they can expect.
- **Opening Period**: Indicates the operational timeframe of the farm, letting users know when the farm is active for deposits and reward collection.
- **Remaining reward**: Displays the remaining rewards in the farm.
- **Distributed Rewards**: The total number of rewards that have been distributed to all participants so far, highlighting the farm's generosity and attractiveness.
- **Total Deposited LP Tokens**: Indicates the total amount of LP tokens that have been deposited into the farm by all users, offering a perspective on the farm's scale and user participation.

###### Back View: Additional Farm Insights

![Farm Lock Card - Back](/img/tutorial/aeSwap/aeSwap-FarmLock-Back.png)

On this side of the card, users can explore parameters by level:

- **Holders**: This corresponds to the number of positions held at the level.
- **Weight**: The weight of the level.
- **LP Token Deposited**: The number of LP tokens deposited at the level.

### Balances summary section

This section provides an overview of your balances for the two tokens in the pool (aeETH and UCO), as well as your LP token balance.

![Farm Lock Dashboard - Balances section](/img/tutorial/aeSwap/aeSwap-FarmLock-Dashboard-Block3.png)

### Farmed Tokens Summary section

This section provides a comprehensive overview of your total investment in the farm, expressed in dollars. It includes a detailed breakdown of both the invested capital and the rewards that can be earned.

![Farm Lock Dashboard - Farmed Tokens Summary section](/img/tutorial/aeSwap/aeSwap-FarmLock-Dashboard-Block4.png)

### Deposits table

![Farm Lock Dashboard - Deposist table](/img/tutorial/aeSwap/aeSwap-FarmLock-Dashboard-Block5.png)

The table displays all current deposits. The available information includes:

- **Amount**: The number of LP tokens deposited.
- **Estimated Rewards**: The current estimated rewards. This amount will increase over time until the end of the lock period (if the deposit is not flexible). **Rewards are calculated hourly**.
- **Unlocks In**: The remaining time before the LP tokens and associated rewards are released.
- **Level**: Your current level. If your level is not at the maximum, you have the option to relock your LP tokens at any time for a period longer than the current one. Increasing the lock duration will raise your level.
- **APR**: The estimated Annual Percentage Rate.
- **Level Up Button**: Allows you to increase your level by relocking your LP tokens for a period longer than the current lock duration.
- **Withdraw Button**: This feature is available when the lock period has ended or if the deposit was made on a flexible basis. It allows you to retrieve your LP tokens and send them back to your wallet. You can choose the amount to withdraw. If the maximum amount is withdrawn, the deposit entry disappears. If the amount is not fully withdrawn, rewards will be calculated on the remaining balance. When withdrawing, all calculated rewards for that deposit are provided to the user.
- **Claim Button**: This feature is available when the lock period has ended or if the deposit was made on a flexible basis. It allows you to claim the rewards without affecting the number of deposited LP tokens.



### Interacting with Farms: Available Actions

On aeSwap, participants have the flexibility to engage with farms through a variety of actions, each designed to suit different strategies and needs. Here’s a concise overview of the options available:

**Deposit LP Tokens**: Users can lock their liquidity provider (LP) tokens in a farm to earn rewards. This action contributes to the farm's overall health and rewards the user with tokens based on the farm's current APR. Depositing increases the total value locked (TVL) in the farm and entitles the user to a portion of the rewards generated. The chosen locking period determines the APR percentage, with longer periods yielding higher returns. Once locked, users must wait until the end of the period to obtain their rewards, with no interim retrieval possible unless they choose to level up. This incentivizes users to commit to longer locking periods for more substantial rewards.

**Withdraw LP Tokens**: When participants decide to retrieve their staked LP tokens from a farm, this action enables them to do so. Withdrawing allows users to claim back their tokens along with any rewards earned during the staking period. This action is crucial for managing your investments and realizing potential gains from the accumulation of rewards.

**Claim Rewards**: Specifically for users who want to continue staking their LP tokens but wish to collect earned rewards, this action allows for the claiming of rewards without affecting the staked LP token balance. It is a flexible option for users looking to realize immediate gains while maintaining their position in the farm.

**Relock LP Tokens**: The relock feature allows users to extend the locking period of their LP tokens beyond the initial commitment, effectively resetting the lock duration to a new, longer period. This action not only unlocks and makes available any accumulated rewards up to that point but also commits the user to a new locking period, which comes with a potentially higher APR.


*Detailed information for each action will be provided very soon.*