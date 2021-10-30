---
id: faq
title: FAQ
sidebar_label: FAQ
---

## Why is webpack a good idea for electron?

Electron apps face huge hurdles when it comes to matching native performance. There's a number of reasons for that. One of those issues is that a main electron app does not have Ahead-of-Time (AOT) compilation. No optimizations are made to code performance. [`require()`](https://kev.inburke.com/kevin/node-require-is-dog-slow/) is **really** slow. Webpack helps us reduce the amount of calls made to require by bundling all our code (when possible) into single file. [Atom is slow primarily because it makes so many require statements](https://github.com/atom/atom/issues/9720).
