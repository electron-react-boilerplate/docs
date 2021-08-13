---
id: dev-tools
title: DevTools
sidebar_label: DevTools
---

### Toggle Chrome DevTools

- OS X: <kbd>Cmd</kbd> <kbd>Alt</kbd> <kbd>I</kbd> or <kbd>F12</kbd>
- Linux: <kbd>Ctrl</kbd> <kbd>Shift</kbd> <kbd>I</kbd> or <kbd>F12</kbd>
- Windows: <kbd>Ctrl</kbd> <kbd>Shift</kbd> <kbd>I</kbd> or <kbd>F12</kbd>

_See [electron-debug](https://github.com/sindresorhus/electron-debug) for more information._

### DevTools extension

This boilerplate includes the following DevTools extensions:

- [Devtron](https://github.com/electron/devtron) - Install via [electron-debug](https://github.com/sindresorhus/electron-debug).
- [React Developer Tools](https://github.com/facebook/react-devtools) - Install via [electron-devtools-installer](https://github.com/GPMDP/electron-devtools-installer).
- [Redux DevTools](https://github.com/zalmoxisus/redux-devtools-extension) - Install via [electron-devtools-installer](https://github.com/GPMDP/electron-devtools-installer).

You can find the tabs on Chrome DevTools.

If you want to update extensions version, please set `UPGRADE_EXTENSIONS` env, just run:

```bash
UPGRADE_EXTENSIONS=1 yarn start

# For Windows
set UPGRADE_EXTENSIONS=1 && yarn start
```
