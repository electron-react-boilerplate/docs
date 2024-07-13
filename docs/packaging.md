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

## Notarizing

To notarize your macOS app, you will need to set the following environment variables:

- `APPLE_ID` - Your Apple ID
- `APPLE_APP_SPECIFIC_PASSWORD` - Your Apple ID password

In `package.json` -> `build` -> `mac` the `teamId` key needs to be set:

```
"notarize": {
  "teamId": "YOUR_TEAM_ID"
}
```

This above config will automatically get electron-builder to notarize the build.
