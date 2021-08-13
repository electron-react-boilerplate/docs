---
id: native-modules
title: Native Modules
sidebar_label: Native Modules
---

This guide covers how to consume native modules. For installing native modules see the [module structure docs](https://electron-react-boilerplate.js.org/docs/adding-dependencies/#module-structure).

## What are Native Modules?

Native node modules are node dependencies that are written in C++, C, or Rust. Native modules may need to be compiled against a specific version of node. If you change your node version then you'll need to recompile your native modules, which will be done automatically on postinstall.

[electron-rebuild](https://github.com/electron/electron-rebuild) will detect and recompile your native modules against the version of node being used by electron. Changing your electron version will require a recompilation.

## Native Modules in electron-react-boilerplate

Native modules in electron-react-boilerplate have special requirements and are thus handled differently than regular modules. Native modules are problematic when bundled with webpack and so electron-react-boilerplate avoids bundling them -- intead they are treated as [webpack externals](https://webpack.js.org/configuration/externals/). Native modules in electron-react-boilerplate are installed to the `./build/app/node_modules` directory and are copied into your electron app before it is packaged. This allows root dependencies in `./node_modules` (such as webpack, babel, and react) to not be packaged with your app, which significantly app bloat.

## Main Process Native Modules

You can import native modules as usual in the main process as you would other modules. Types for native module dependencies (such as `@types/sqlite`) should be installed to your root `package.json` since they are not required in production.

## Renderer Process Native Modules

Loading remote content in the renderer process with node integration enabled is a security vulnerability and is [discouraged by electron's security documentation](https://www.electronjs.org/docs/tutorial/security#2-do-not-enable-nodejs-integration-for-remote-content). Because of this, node integration is disabled by default.

Make the following changes to opt in to node integration:

```diff title="webpack.config.renderer.prod.babel.js"
- target: ['web', 'electron-renderer'],
+ target: 'electron-renderer',
```

```diff title="webpack.config.renderer.dev.babel.js"
- target: ['web', 'electron-renderer'],
+ target: 'electron-renderer',
```

```diff title="webpack.config.renderer.prod.babel.js"
- library: {
-  type: 'umd',
- },
```

```diff title="webpack.config.renderer.dev.babel.js"
- library: {
-  type: 'umd',
- },
```

```diff title="main.ts"
  webPreferences: {
+   nodeIntegration: true,
+   contextIsolation: false,
-   preload: path.join(__dirname, 'preload.js'),
  }
```
