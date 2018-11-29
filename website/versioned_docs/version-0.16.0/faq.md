---
id: version-0.16.0-faq
title: FAQ
sidebar_label: FAQ
original_id: faq
---



### Why is webpack a good idea for electron?
Electron apps face huge hurdles when it comes to matching native performance. There's a number of reasons for that. One of those issues is that a main electron app does not have Ahead-of-Time (AOT) compilation. No optimizations are made to code performance. [`require()`](https://kev.inburke.com/kevin/node-require-is-dog-slow/) is **really** slow. Webpack helps us reduce the amount of calls made to require by bundling all our code (when possible) into single file. [Atom is slow primarily because it makes so many require statements](https://github.com/atom/atom/issues/9720)

## Why use yarn instead of npm? 

`yarn` has some features that `npm` doesn't, such as [module aliasing](https://yarnpkg.com/lang/en/docs/cli/add/#toc-yarn-add-alias), [`workspaces`](https://yarnpkg.com/lang/en/docs/workspaces/), and [`plug'n'play`](https://github.com/yarnpkg/pnp-sample-app). While we're not using any of those features right now, we might in the future.

The collaborators use `yarn` and our CI's use `yarn` as well, so we recommend `yarn` over `npm` to avoid compatibility problems.

There is nothing stopping anyone from using `npm` over `yarn` in their projects, but if they do that and they end up running into bugs because of it, we probably won't be able to help them.