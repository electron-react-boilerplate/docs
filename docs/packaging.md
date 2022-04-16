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

To package apps with options:

```bash
npm run package -- --[option]
# Example: npm run package -- --mac
```

### Debugging Production Builds

You can debug your production build with devtools by simply setting the `DEBUG_PROD` env variable

```bash
npx cross-env DEBUG_PROD=true npm run package
```
