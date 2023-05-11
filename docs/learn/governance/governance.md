---
id: governance
title: Governance
---


Archethic Blockchain is using code proposals to have a way to upgrade current blockchain
code in a automated and tested way. The idea behind the governance on Archethic blockchain is to be able to audit, test and apply code proposals in a automatic, indepedent and secure way across the deployed network.

the process begins when a contributor creates a code proposal, this code proposal will be checked to ensure that it follows the proper form (contains the correct fields for example).

After the code proposal is verified, we start going over the details of the proposal and verifying that it contains correct version, valid appup and valid changes for example.

When the code proposal is considered valid, and after gathering enough approvals from members of the technical council (more than the threshhold) we start the CI (Continuous Integration) part.

The role of the CI part is to check that the proposal passes the CI pipeline (tests, security checks and style).

If the CI is valid then we start the CD part, the aim of this part is to test the proposal in a real world settings by deploying it into a testnet with various nodes performing multiple distinct functions.

after the CI/CD part is done, we launch the next phase which consists of upgrading the actual nodes to the new versions and finally rewarding all the actors that participated in the global process.
