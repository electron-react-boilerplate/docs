---
id: installation
title: Installation
sidebar_label: Installation
---

```bash
# Clone the boilerplate:
git clone --depth=1 \
  https://github.com/electron-react-boilerplate/electron-react-boilerplate \
  your-project-name

cd your-project-name

# Install dependencies:
npm install
```

:::tip
If you have installation or compilation issues with this project, please see [our installation debugging guide](https://github.com/electron-react-boilerplate/electron-react-boilerplate/issues/400)
:::

## Run

Start the app in the `dev` environment. This starts the renderer process in [**hot-module-replacement**](https://webpack.js.org/guides/hot-module-replacement/#enabling-hmr) mode and starts a webpack dev server that sends hot updates to the renderer process:

```bash
npm start
```
