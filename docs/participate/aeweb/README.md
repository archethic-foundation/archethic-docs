---
id: aeweb
title: Archethic Web (aeHosting)
---

Archethic has developed a new solution to host websites on a decentralized network to **avoid censorship**, **increase security** and **have high-availability and resiliency**.

## Motivations

Web hosting is still a subject of innovation nowadays, even with the rise of Web3.
Existing solutions provides P2P and distributed hosting, but it can lack some important aspects such as ease-of-use, fully on-chain and trust.

### Easy

Since its design, **AEWeb** motivation was to allow deployment of websites in just a few steps. No need to transform your website to match our solution. The website you developed and know will be the same one deployed.

**Your website will be transformed into transaction without additional work**

### Security

Web hosting solutions are either centralized and decentralized. The first doesn't provide security, as being centralized and subject to censorship. The latter would be quite often insecure because hosted out of the blockchain, like traditional P2P system (torrents, etc.)

We wanted to make it completely secure and on-chain.
Hence, each of the websites will first be validated across the Archethic network with the ARCH consensus capable to handle even 90% of maliciousness.
While being validated, the websites will be stored and split geographically across the globe for highest data availability and security.

Then each delivery of the websites will directly read the data on-chain to deliver to browsers and clients and provide a high confidence of the displayed website.

### Costly efficient

There are rare situations when websites can be hosted on a blockchain due to its costs being based on virtual machine or high fee on a network.

Transactions on Archethic are cost-efficient, so hosting websites on-chain will be a cheap solution regarding existing centralized and decentralized protocols.

Because of the nature of Web3 and decentralized network, once a website is deployed there is no maintenance cost such as renting a VPS on a centralized system each month for a couple of bucks. As long as the website doesn't need to change, there will be not cost.

:::info
Example: a VPS can cost around $5/month to host any website. On Archethic a website of 1MB could cost around $2 (with UCO at: $1 and with 200 replicas).

You might think it's more expensive, but the VPS was only a single instance. For the same data availability on centralized hosting you would have to pay around $500 + cost of maintenance
:::

## Target

Because of the Web is so wide, we have distinguished what AEWeb is capable to do or not.

:::info Website vs WebApp
Website are usually not Web app.

Websites are often simple static pages (HTML, stylesheets, images, scripts) to create beautiful frontend such a portal, showcase, corporate sites.

On the other side Web app (Web Application) are far more complex and provide a complete suite of administration and back-office with authentication and databases.
:::

For now, AEWeb solution only provides website hosting. So any website which contains static files can be hosted on-chain.

For more complex web applications, the front-end can still be hosted with AEWeb but the backend or business logic have to be managed in other ways, such as:

- centralized servers and databases
- blockchain dApp & smart contracts

For instance, today a lot of web apps are leveraging SPA (Single Page Application) with front-end frameworks which are talking to external backend servers (fetching data, or authenticate users, etc.).
In that case, once the front-end page have been build from the SPA tooling, instead of being deployed on centralized servers, the generated static files could be hosted on Archethic through AEWeb tooling.

## Try out

### Graphical interface

To test the user interface to deploy websites, visit the [project](https://github.com/archethic-foundation/aeweb) by downloading the app to make webhosting no only for developers but for anyone which have static website to deploy.

### Developers

You can try the [CLI](https://github.com/archethic-foundation/aeweb-cli) to help developers to test and deploy existing websites using terminal.

## Roadmap

- [x] Design
- [x] Blockchain integration
  - [x] API
  - [x] HTTPS & certificates
- [x] Command Line Interface (CLI)
  - [x] File
  - [x] Folder
  - [x] Complete website
  - [x] Keychain integration
- [x] User Interface
  - [x] Web or Native application
- [ ] Domain Name System (DNS)
  - [x] DNSLink integration
  - [ ] Automation


