---
id: code-proposals
title: Code Proposals
---

Archethic Blockchain is using code proposals to have a way to upgrade current blockchain
code in a automated and tested way.

A pending code proposal contains the following fields:

* Address: Address of the code proposal
* Approvals: Approvals signed by the users
* Changes: Diff between current version and code proposal
* Description: Description of the code proposal
* Files: Files changed in code proposal
* Previous Public Key
* Timestamp
* Version: target version

For a code proposal to be valid it needs to validate 3 conditions:

* The version in code proposal needs to be a successor version of the current one
* The changes need to contain a valid [appup file](https://www.erlang.org/doc/man/appup.html)
* the code proposal is applicable on the current branch

Code proposals can be visualised in the governance section of the UI.

when a code proposal get enough approvals from members of technical council (more than the threshhold), it automatically launchs the CI/CD process.
