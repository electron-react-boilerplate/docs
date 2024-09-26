---
id: adding-dependencies
title: Adding Dependencies
sidebar_label: Adding Dependencies
---

## Add modules to the project

You will need to add other modules to this boilerplate, depending on the requirements of your project. For example, you may want to add [node-postgres](https://github.com/brianc/node-postgres) to communicate with PostgreSQL database, or
[material-ui](http://www.material-ui.com/) to reuse React UI components.

:::tip
Please read the following section before installing any dependencies
:::

### Module Structure

This boilerplate uses a [two package.json structure](https://www.electron.build/tutorials/two-package-structure.html). This means you will have two `package.json` files.

1. `./package.json` in the root of your project
2. `./release/app/package.json` relative to the project root

### Which `package.json` file to use

**Rule of thumb** is: all modules go into `./package.json` except for native modules, or modules with native dependencies or peer dependencies. Native modules, or packages with native dependencies should go into `./release/app/package.json`.

1. If the module is native to a platform (like node-postgres), it should be listed under `dependencies` in `./release/app/package.json`
2. If a module is `imported` by another module, include it in `dependencies` in `./package.json`. See [this ESLint rule](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-extraneous-dependencies.md). Examples of such modules are `material-ui`, `redux-form`, and `moment`.
3. Otherwise, modules used for building, testing, and debugging should be included in `devDependencies` in `./package.json`.

### Further Readings

- See [Electron Documentation - Using Native Node Modules](https://www.electronjs.org/docs/tutorial/using-native-node-modules) to see how Electron uses native Node modules.
- See [Node.js Documentation - Addons](https://nodejs.org/api/addons.html) to see what are native Node modules.

For an example app that uses this boilerplate and packages native dependencies, see [erb-sqlite-example](https://github.com/amilajack/erb-sqlite-example).
