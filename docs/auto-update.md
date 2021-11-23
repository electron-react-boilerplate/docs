---
id: auto-update
title: Auto Update
sidebar_label: Auto Update
---

## Requirements

- [Apple Developer Certificate](https://www.electron.build/code-signing#where-to-buy-code-signing-certificate) (if targeting macOS)
- [Windows Developer Certificate](https://www.electron.build/code-signing#where-to-buy-code-signing-certificate) (if targeting Windows)

## Auto Updates

Electron works with auto updates out of the box.

**1. Update Env Variables**

To get started you'll need to configure the following environmental variables, which [electron-builder uses to sign your app](https://github.com/electron-react-boilerplate/electron-react-boilerplate/blob/ebf4120619254ec8df1051275b7c95674aa7114b/.github/workflows/publish.yml#L36-L39):

| Variable Name      | How to get it                                                                                  |
| ------------------ | ---------------------------------------------------------------------------------------------- |
| `APPLE_ID`         | Your Apple ID                                                                                  |
| `APPLE_ID_PASS`    | Your Apple password (use an app [specific password](https://support.apple.com/en-us/HT204397)) |
| `CSC_LINK`         | [code-signing](https://www.electron.build/code-signing.html)                                   |
| `CSC_KEY_PASSWORD` | [code-signing](https://www.electron.build/code-signing.html)                                   |

https://github.com/electron-react-boilerplate/electron-react-boilerplate/blob/main/package.json#L34-L35

See electron-builder's docs for more details:

- https://www.electron.build/auto-update
- https://www.electron.build/code-signing.html

**2. Update App Config**

Update the [`productName` and `appId`](https://github.com/electron-react-boilerplate/electron-react-boilerplate/blob/158fb1167b37d5cc74a3a3fbcf8523ece9d29806/package.json#L33-L34).

**3. Configure Your Server**

Auto update assets need to be published somewhere. For open source apps, its convenient and free to publish via [github releases](https://github.com/electron-react-boilerplate/electron-react-boilerplate/releases), which electron-react-boilerplate does out of the box. Electron-builder [doesn't recommend using github releases](https://www.electron.build/auto-update#private-github-update-repo) publish private apps. Instead you should host your releases you can host your own server

See [electron-builder's publish docs](https://www.electron.build/configuration/publish) for more details.
