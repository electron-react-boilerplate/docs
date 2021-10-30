---
id: building
title: Building
sidebar_label: Building
---

Webpack is one of the most crucial parts of ERB's infrastructure as with many other React projects. It provides us with many optimizations such as dead code stripping, tree shaking, and code splitting to name a few. Webpack allows you to scale your application and add many components and layers of abstraction without sacrificing the performance of your app.

## Build an App

Building a production version of your app will optimize the JS, CSS, and SASS of your application.

To create a production build, run `npm run build`:

```bash
npm run build
```

## Inspecting Build Size

If you want to reduce the build size of your app, you can open a treemap of your build:

![treemap bundle example](/img/bundle-analyzer-example.png)

To create a production build, run `OPEN_ANALYZER=true npm run build`:

```bash
OPEN_ANALYZER=true npm run build
```
