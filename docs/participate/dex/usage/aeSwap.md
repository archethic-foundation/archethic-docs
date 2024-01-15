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

![Welcome Screen](/img/tutorial/aeSwap-Welcome.png)  
![aeSWap Main Screen](/img/tutorial/aeSwap-Main-Screen.png)

### Application Menu

A right-hand header menu provides links to essential information and application documentation. It includes an option to send logs to Archethic for troubleshooting purposes.

![Menu](/img/tutorial/aeSwap-Menu.png)

### Feature Access

The top menu grants access to various DEX functionalities:

- Swap assets
- List Pools / Add or remove Liquidity
- Farm

![Menu Features](/img/tutorial/aeSwap-Features.png)

## Swapping Your tokens

The DEX process involves multiple steps:

1. Inputting information to initiate the swap
2. Confirming the entered details
3. Executing the swap, with progress tracking and transaction signing in Archethic wallet

### Step 1: Select tokens

Click on "Select a token" to access to a popup with tokens info

![Token Selection](/img/tutorial/aeSwap-Select-Token.png)

### Step 2: Fill amounts to swap

Fill the amount to swap in the form's input.
You can initialize the field manually or calculate the half or the max of your balance

:::note
The balance of the token is displayed
The amount is automatically calculate 
:::


---