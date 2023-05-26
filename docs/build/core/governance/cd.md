---
id: code-proposals-cd
title: CD
---

The `archethic-cd` target produces an image capable of running `archethic_node` release.
The objective of cd is to test the code proposal in a testnet environment which means spawning:

* 5 nodes that run the new version
* 2 validator containers
* 1 prometheus container
* 1 benchmark container

the cd happens in multiple steps:

* first we start by copying the upgrade release and the logs we created in the CI part to a tmp folder
* next we create the subnet and we start all the containers responsible for the CD
* The validator container ensures that every node is up and do a benchmark before we apply the upgrade
* We apply the upgrade
* we start the second round of validation which is responsible for running benchmarks again, running the playbooks and gathering metrics from prometheus.
* we wait for the final validation message and we clean all containers and images we created.

nb: the cleaning phase will happen even in the case of failure.
