---
id: code-proposals-ci
title: CI
---

After a code proposal is received by a node in the network and passes initial validation, the next step in the process is the CI.

The `archethic-ci` target produces an image with build tools.
Its goal is to compile the source code into `archethic_node` release.
The CI part is powered by `scripts/proposal_ci_job.sh`.
The script runs in a container named `archethic-prop-{address}`, it produces: release upgrade of `archethic_node` and combined log of application of a code proposal to the source code, execution of unit tests, and log from linter. The log can be obtained with `docker logs`, the release upgrade and the validator with `docker cp`, after that the container can be disposed.

the script runs multiple commands:

* Creates a branch prop_{proposal_address}
* Apply the changes to the branch
* Add the changes and commit
* Checking if the project is formatted correctly
* Check if the project compiles without warning
* [Credo](https://github.com/rrrene/credo)
* [Sobelow](https://github.com/nccgroup/sobelow)
* [Knigge](https://github.com/sascha-wolf/knigge)
* Runs the test suite
* [Dialyzer](https://github.com/jeremyjh/dialyxir)
* Checks if dependencies are outdated
* And Finally it creates an upgrade release with [Distillery](https://github.com/bitwalker/distillery)
