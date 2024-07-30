---
title: Farm Lock Smart Contract
id: farm-lock
sidebar_label: Farm Lock
---

## Rewards
The rewards are coming from the Stacking wallet of the tokenomics.

- year 1: 45_000_000 UCO
- year 2: 22_500_000 UCO
- year 3: 11_250_000 UCO
- year 4: 8_750_000 UCO

## Weights
These weights were chosen by the Archetic team to incentivize longer locks.

- level 0 : 0.007
- level 1 : 0.013
- level 2 : 0.024
- level 3 : 0.043
- level 4 : 0.077
- level 5 : 0.138
- level 6 : 0.249
- level 7 : 0.449


## Rewards are calculated every hours
Every deposits' timestamp is rounded to the hour before.
For example a deposit at 12:03 and another one at 12:57 will both be rounded to 12:00 and they will both start earning at 13:00.

The calculation is triggered either:
  - by a scheduler contract that calls the `calculate_rewards` actions every hours.
  - by a deposit/claim/withdraw/relock action.

There is at most 1 calculation per hour.

## State
The state is composed of these properties:
  - `last_calculation_timestamp` the date of the last calculation
  - `deposits` state of the deposits at the moment of last calculation (level and reward_amount will change over time).
  - `lp_tokens_deposited` amount of tokens deposited at the moment of last calculation
  - `lp_tokens_deposited_by_level` amount of tokens deposited grouped by level at the moment of last calculation

## Calculations
When entering the `calculate_new_rewards` function, we check how much hours need to be calculated (should mostly be 1).
Then for every hour:
```javascript
rewardsToAllocateForThisHour = rewardsRemainingAtTheEndOfYear  * (3600 / numberOfSecondsRemainingUtilEndOfYear)
levelRatio = (tokensAmountAtThisLevel * weightOfThisLevel) / sumOfAllWeightedTokens
depositRatioOnItsLevel = (depositTokensAmount * weightOfThisLevel) / (tokensAmountAtThisLevel * weightOfThisLevel)
reward = rewardsToAllocateForThisHour * depositRatioOnItsLevel * levelRatio
```

### An example

Let's take a simple scenario so we can do the maths easily.

Imagine the farm starts (year=1) with these 3 deposits:
 1. 1000 UCO at level 7
 1. 1000 UCO at level 3
 1. 1000 UCO at level 3

To calculate the rewards of the 1st deposit:

```javascript
rewardsToAllocateForThisHour = 45_000_000  * (3600 / 31536000) // 5136.986301369863
levelRatio = (1000 * 0.449) / 535 // 0.8392523364485981
depositRatioOnItsLevel = (1000 * 0.449) / (1000 * 0.449) // 1
reward = 5136.986301369863 * 1 * 0.8392523364485981 // 4311.2277557291
```

Until the state change (year change/level change/deposit/withdraw/relock), the first deposit will be rewarded of 4311.22775572 UCO every hours.

## Giveaways
If the contract have more balance than it's supposed to, the tokens are rewarded linearly over the entire farm's duration.
Example, if someone sends 35040 UCO (= farm's duration in hours) to the farm, there will be 1 more UCO rewarded every hours.
Nothing is wasted.
