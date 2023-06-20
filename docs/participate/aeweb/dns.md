---
id: dns
title: AEWeb - Domain names
sidebar_label: Domain Names
sidebar_position: 2
---


DNS (Domain Name System) is a mechanism which resolves websites names to server IP addresses, making website's URL nicer.

This works well for classical websites, however for decentralized websites new solutions need to be found such as: DNSLink, extensions, etc.

## DNSLink

We suggest using a hybrid approach, where ordinary DNS systems would still be used, but would point to Archethic nodes (gateways) instead.

To redirect your domain name to your Archethic hosted website, a simple operation needs to be done.

In your website domain provider administration, you must add two entries:

| NAME                  | TYPE  | VALUE                        |
| --------------------- | ----- | ---------------------------- |
| example.com           | CNAME | mainnet.archethic.net        |
| \_dnslink.example.com | TXT   | dnslink=/archethic/0f1e3.... |

The subdomain `_dnslink` is used to indicate the reference address and will be used by the nodes to redirect to the on-chain version of your website.

![aeweb_CDN](/img/aeweb_dns.svg#gh-light-mode-only)
![aeweb_CDN](/img/aeweb_dns-dark.svg#gh-dark-mode-only)

### Hosting provider integration

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="gandi" label="Gandi" default>
    <p>Click on the "Add record" from the DNS record page</p>
    <img src="/img/gandi_list_dns_record.png" />
    <p>Fill the form with "TXT" record type and with _dnslink entry to point the website to the hosting transaction chain</p>
    <img src="/img/gandi_add_dns_record.png" />
  </TabItem>
  <TabItem value="cloudfare" label="Cloudfare" default>
    <p>Click on the "Add record" from the DNS record page</p>
    <img src="/img/cloudfare_list_dns_record.png" />
    <p>Fill the form with "TXT" record type and with _dnslink entry to point the website to the hosting transaction chain</p>
    <img src="/img/cloudfare_add_dns_record.png" />
  </TabItem>
</Tabs>

## SSL 

We defined above to create a link between a domain and a hosted website on Archethic.

However, if we let it like this the modern browsers will not able to render the website without security warning.

Indeed, we said the example.com should be redirect to mainnet.archethic.net, but the certificate for mainnet.archethic.net can't 
verify example.com

No worry, we can request a SSL certificate and embed it into AEWeb transactions.
The website will then be certified and the blockchain will render the website with security enabled.

To support it, we have to do two things:

### 1. Get the certificate

#### Manual

We recommand to use certbot CLI to perform this task, but we can use any other ACME client to request certificates.

```bash
certbot certonly --manual --domain example.com --preferred-challenges dns
```

This command will request a certificate to Let's Encrypt about `example.com` and will require to prove 
the ownership of the domain with a DNS challenge.

The certificate can be found at: `/etc/letsencrypt/live/example.com/cert.pem` 
and the key at: `/etc/letsencrypt/live/example.com/privatekey.pem`

:::info
We might notice the command gives the end of validity for the certificate.
Before this date, you just have to reply the command to assert you still own the domain to get the new certificate and/or key.
:::

![](/img/acme_dns.png)

### 2. Add the certificate on chain

You need to get the certificate and the private key associated.

:::info
The private key is necessary to sign/encrypt the webpages to match the certificates and be considered as valid.
Only the nodes will have access to this key to allow the servers to use SSL communications.
::: 

If you use the AEWeb CLI, we can perform this by running the command: 

```bash
aeweb deploy --seed XXX --path ./my_website --ssl-certificate ./cert.pem --ssl-key ./key.pem --endpoint https://mainnet.archethic.net 
```

You're website transaction chain will then contains a `Reference` transaction with the ssl certificate in the content
and the private key end to end encrypted for the network.

