---
id: faq
title: FAQ
sidebar_label: FAQ
---

## Why not TypeScript?

If you are looking for an example of electron-react-boilerplate that uses [TypeScript](http://typescriptlang.org), see our [TypeScript example](https://github.com/electron-react-boilerplate/examples/tree/master/examples/typescript).

At the time of the conception of this boilerplate, TypeScript integration with React was experimental and Flow support for React was much better. As time passed, however, TypeScript has matured and has improved it's integration with other open source tooling. For this reason we are considering migrating ERB itself to TypeScript.

## Why is webpack a good idea for electron?

Electron apps face huge hurdles when it comes to matching native performance. There's a number of reasons for that. One of those issues is that a main electron app does not have Ahead-of-Time (AOT) compilation. No optimizations are made to code performance. [`require()`](https://kev.inburke.com/kevin/node-require-is-dog-slow/) is **really** slow. Webpack helps us reduce the amount of calls made to require by bundling all our code (when possible) into single file. [Atom is slow primarily because it makes so many require statements](https://github.com/atom/atom/issues/9720).

## Why use Yarn instead of NPM?

`yarn` has some features that `npm` doesn't, such as [module aliasing](https://yarnpkg.com/lang/en/docs/cli/add/#toc-yarn-add-alias), [`workspaces`](https://yarnpkg.com/lang/en/docs/workspaces/), and [`plug'n'play`](https://github.com/yarnpkg/pnp-sample-app). While we're not using any of those features right now, we might in the future.

The collaborators use `yarn` and our CI's use `yarn` as well, so we recommend `yarn` over `npm` to avoid compatibility problems.

There is nothing stopping anyone from using `npm` over `yarn` in their projects, but if they do that and they end up running into bugs because of it, we probably won't be able to help them.

## How do I skip building the DLL immediately after install?

Install the dependency with the `--ignore-scripts` flag. Here's an example:
```bash
yarn add some-dep --ignore-scripts
```

To always have the `--ignore-scripts` flag on, you can add this to your yarnrc.
```ignore
# Your .yarnrc file located in the root of the project or any directories above
--ignore-scripts true
```

To always have the `--ignore-scripts` flag on for specific commands:
```ignore
# Your .yarnrc file located in the root of the project or any directories above

# This will set the --ignore-scripts flag whenever running yarn add
--add.ignore-scripts true
```
