---
id: wallet
title: aeWallet
---

## General 


### ** How to create a wallet on the Archethic blockchain?**

Firstly, <a href="https://www.archethic.net/wallet.html" target="_blank">download the wallet</a> version that corresponds to the platform you want to use it on from the Archethic website or the app stores.
Once installed, you can launch the application.

1) The first page invites you to read and accept [the privacy policy](https://www.archethic.net/privacy-policy-wallet.html).<br/>
2) Once accepted, you can click on "Get started" to begin creating your wallet.<br/>
3) First, give a name to your first account within your future decentralized keychain.<br/>
4) A confirmation popup appears to verify that the account name is to your liking.<br/>
5) The application reminds you of important security information to protect your funds and your secret phrase.<br/>
6) After reading the information, click on "I understand".<br/>
7) The 24 words of your secret phrase will be displayed.<br/>

:::caution 
Do not share them with anyone and write them down so you can confirm them on the following screen.
:::

8) Confirmation requires that the words be put back in order.<br/>
9) Once the process of confirming the order of the words in the secret phrase is done, you can select the means to protect your application (PIN code, password, biometrics, YubiKey).<br/>
10) After a few seconds of waiting, your keychain is created with your first account.<br/>

You can now enjoy the Archethic ecosystem. Enjoy!
### ** How to retrieve the address of my Archethic wallet?**

Firstly, you should be aware that your address changes with each transaction.

But don't worry. If you provide an old address to receive funds or tokens, it will still work, and you will receive what you are expecting.

:::success
If you do not have an Archethic wallet or address yet, we invite you to refer to the section<br/><a href="/FAQ/wallet#-how-to-create-a-wallet-on-the-archethic-blockchain">"How to create a wallet on the Archethic blockchain?"</a>
:::

Once your wallet is created,<br/>

1) select the account on which you wish to receive your funds or tokens via the "Accounts" tab by clicking on the dropdown arrow at the top of the screen to the right of the current profile. A list will appear, showing your accounts and services contained in your decentralized keychain.<br/>
2) Once selected, you will be returned to the "Accounts" tab, where a "Receive" button will be visible.<br/>
3) Click on it, and you will obtain your address, either in the form of a QR Code or as text by clicking on the icon corresponding to the copy action.<br/>

![wallet-address](/img/faq/wallet/wallet-FAQ-display-address.png)


## Troubleshooting

### The Archethic wallet won't start or opens to a black or white screen

To resolve a startup issue with the Archethic wallet, here are some corrective actions:

:::caution
Please note, steps 3 and 4 require you to reimport your wallet afterward by entering your mnemonic phrase.
:::

1) Verify that the application is downloaded from an official source.

For this, please visit the website https://www.archethic.net/wallet.html.
For security and proper functionality, Archethic advises against using the application on jailbroken devices or in developer mode.

2) Uninstall and then reinstall the application.

3) If the issue persists, **for desktop versions**, please delete the wallet's local database. 

To do this, manually delete at least the following files:
- appwallet.hive
- appwallet.lock
- cachemanager.hive
- cachemanager.lock
- contacts.hive
- contacts.lock
- messengerdiscussion.hive
- messengerdiscussion.lock
- _preferencesbox.hive
- _preferencesbox.lock
- _vaultbox.hive
- _vaultbox.lock

In the directories according to your platform:
- macOS: /Users/{user}/Library/Containers/{YourAppName}/Data/Documents/
- Linux: /home/{user}/.local/share/{YourAppName}/
- Windows: C:\Users{user}\AppData\Roaming{YourAppOrganization}\


