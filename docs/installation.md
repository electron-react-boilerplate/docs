---
id: installation
title: Installation
sidebar_label: Installation
---

```bash
# Clone the boilerplate:
git clone https://github.com/chentsulin/electron-react-boilerplate.git your-project-name

cd your-project-name

# Install dependencies with yarn:
yarn
```

:::tip
If you have installation or compilation issues with this project, please see [our installation debugging guide](installation-debugging-solutions)
:::

## Run

Start the app in the `dev` environment. This starts the renderer process in [**hot-module-replacement**](https://webpack.js.org/guides/hot-module-replacement/#enabling-hmr) mode and starts a webpack dev server that sends hot updates to the renderer process:

```bash
yarn start
```
