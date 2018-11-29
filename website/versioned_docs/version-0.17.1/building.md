---
id: version-0.17.1-building
title: Building
sidebar_label: Building
original_id: building
---

Webpack is one of the most crucial parts of ERB's infrastructure as with many other React projects. It provides us with many optimizations such as dead code stripping, tree shaking, and code splitting to name a few. In the case that you want to scale your application and add many components and layers of abstraction, Webpack makes this allows you to do this without sacrificing the performance of your app.

## Build an App

Building a production version of your app will optimize the JS, CSS, and SASS of your application. It also 

To create a production build, run `yarn build`:

```bash
$ yarn build
```

## Inspecting Build Size

If you want to reduce the build size of your app, you can open a treemap of your build:

![treemap bundle example](/img/bundle-analyzer-example.png)

To create a production build, run `OPEN_ANALYZER=true yarn build`:

```bash
$ OPEN_ANALYZER=true yarn build
```