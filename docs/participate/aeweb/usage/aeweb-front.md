---
id: aeweb-front
title: AEWeb - Application Front End
sidebar_label: AEWeb Front End
sidebar_position: 4
---


# aeWeb/aeHosting Front end

Access: https://aeweb.archethic.net<br/>
Source code: https://github.com/archethic-foundation/aeweb

This web application, built with Flutter, can be used to deploy and manage static sites to the Archethic Blockchain.

:::success
Before reading the following tutorials, understand <a href="/participate/aeweb/how-it-works" target="_blank">how aeWeb works</a>. 
:::

## Tutorials

### Deploy for the first time my static site

When you want to deploy a new static website on the Archethic blockchain, simply click on "Add a website" button in the main screen.

A form will then appear, providing you with the necessary information for deploying your site:
- The name of the website. This name will be used to declare the site in your <a href="/learn/decentralized-id/keychain" target="_blank">decentralized keychain</a>. (mandatory)
- The archive file (with .zip, .7z, or .rar extension) containing the content of your website. (mandatory)
- You can specify whether you want to include or exclude files listed in a <a href="/FAQ/aeweb#what-is-the-purpose-of-a-gitignore-file" target="_blank">.gitignore file</a>. (optional)
- The <a href="/participate/aeweb/dns#1-get-the-certificate" target="_blank">public certificate</a> for your domain and the private key associated with the certificate. (optional)

Once the required information is provided and the publication rules are accepted, you can initiate the deployment of your site.

aeWeb will then prompt you, via your Archethic wallet, to:
- Confirm the creation of the site in your keychain.
- Sign the transaction(s) that contain the content of your site.
- Sign the reference transaction of your site in the blockchain.
- Then sign the transaction that allows transferring funds from your current account to the transaction chains that enable your site to function.

The associated fees for the creation will be provided, and once accepted, your site will be permanently published on the blockchain.

:::info
In the beta version currently being deployed, a limit of 3 MB for a site has been set.
:::

### Update my static site

You can update your site by comparing the latest version hosted on the blockchain with a new archive containing your modifications.
To do this, go to the context menu of the currently deployed version (the first row in the site versions table) and click on "Sync from local folder".

After selecting the archive, the application will present you with information about the differences between the blockchain data and your archive. If you are satisfied with the information and agree to the publication rules, you can proceed with the update.

The application will then prompt you to:
- Sign, using your Archethic Wallet, the transaction(s) that contain the content of your new site version.
- Sign the transaction to update the reference transaction of your site in the blockchain.
- Then sign the transaction that allows transferring funds from your current account to the transaction chains that power your site.

The associated fees for the update will be provided, and once accepted, a new version of your site will be published on the blockchain.

### Update the SSL certificate

You can add and update the SSL certificate associated with your site. 
To do this, go to the context menu of the currently deployed version (the first row in the site versions table) and click on "Update the certificate".

After selecting the public certificate for your domain and the private key associated with the certificate, the application will prompt you to:
- Sign, using your Archethic Wallet, the transaction that will update the reference transaction of your site in the blockchain to include the certificate.
- Then sign the transaction that allows transferring funds from your current account to the transaction chain of your site to update the reference transaction.

The associated fees for the update will be provided, and once accepted, the certificate will be published in the content of the reference transaction, and the private key will be stored in a transaction secret.

### Unpublish my static site

You can unpublish your static site to make it no longer accessible. 
To do this, go to the context menu of the currently deployed version (the first row in the site versions table) and click on "Unpublish static site".

After confirming your intention to unpublish your site, the application will prompt you to:
- Sign, using your Archethic Wallet, the transaction that will update the reference transaction of your site in the blockchain to declare the unpublishing.
- Then sign the transaction that allows transferring funds from your current account to the transaction chain of your site to update the reference transaction.

The associated fees for unpublishing will be provided, and once accepted, the site will be unpublished.

### See my static site's informations

For each online version and for each previous version of your website, you can access the following information by clicking on the three dots at the end of each line:
- The file structure of your website that has been deployed on the blockchain.
- The transactions containing the content of your files.

Regarding the SSL certificate content, you can view it by clicking on the shield icon if you have deployed one. If the icon is red, it means that no certificate is available.


### Disconnect aeWeb

When you want to disconnect the aeWeb application from your Archethic Wallet, simply click on the red disconnect button in the section describing the connected account and environment, and then confirm to return to the home screen.
