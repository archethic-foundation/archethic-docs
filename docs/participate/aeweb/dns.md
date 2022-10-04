---
id: dns
title: AEWeb (DNS)
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

![aeweb_dns](/img/aeweb_dns.svg)
