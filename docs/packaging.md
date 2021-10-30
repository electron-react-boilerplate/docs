---
id: packaging
title: Packaging
sidebar_label: Packaging
---

To package apps for the local platform:

```bash
npm run package
```

The packaged app will be inside the `release` directory.

## Building to Multiple Platforms

First, refer to [Multi Platform Build](https://www.electron.build/multi-platform-build) for dependencies.

Then,

```bash
npm run package-all
```

To package apps with options:

```bash
npm run package --[option]
# Example: npm run package --mac
```

> You can debug your production build with devtools by simply setting the `DEBUG_PROD` env variable

```bash
npm run cross-env DEBUG_PROD=true npm run package
```

## Running the Production Version of Your App

Sometimes it is useful to run the production version of your app locally. This can be done by running `npm start`:

```bash
npm start
```

## Debugging the Production Build

If your production app isn't working as expected, you can use the `DEBUG_PROD` env variable to build the necessary files and then start the app. It isn't necessary to package the app:

```bash
npm run cross-env DEBUG_PROD=true npm run build
npm run cross-env DEBUG_PROD=true npm start
```
