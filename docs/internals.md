---
id: internals
title: Internals
sidebar_label: Internals
---

## Webpack Configurations

Webpack configs are located inside the `./configs` directory

## Internal Scripts

The scripts inside the `.erb/scripts` handle functionality that cannot be written as npm scripts.

The scripts are the following:

* `CheckBuildExists.js`: Check of the main and renderer processes have been built. These processes must be build before running E2E tests
* `CheckNodeEnv.js`: Assert that `NODE_ENV` is the expected value. Throw if assertion fails
* `CheckPortInUse.js`: Finds a free port if default port for ERB is in use
