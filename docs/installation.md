---
id: installation
title: Installation
sidebar_label: Installation
---

```bash
# First, clone the repo via git:
$ git clone --depth=1 https://github.com/electron-react-boilerplate/electron-react-boilerplate.git your-project-name
$ cd your-project-name
# And then install dependencies with yarn:
$ yarn
```

💡 **If you have installation or compilation issues with this project, please see [our installation debugging guide](installation-debugging-solutions)**

## Run

Start the app in the `dev` environment. This starts the renderer process in [**hot-module-replacement**](https://webpack.js.org/guides/hot-module-replacement/#enabling-hmr) mode and starts a webpack dev server that sends hot updates to the renderer process:

```bash
$ yarn dev
```
