---
id: installation-debugging-solutions
title: Installation Debugging Solutions
sidebar_label: Installation Debugging Solutions
---

This  to be a list of solutions for installation issues with this project:
1. Fix `node-gyp` issues:
   Follow the steps in [https://github.com/nodejs/node-gyp#installation](https://github.com/nodejs/node-gyp#installation). You don't need to install `node-gyp` but make sure that you have the correct environment setup for your OS.
2. Test installation against latest yarn/node version
3. Fix Caching Issues
   
   ```
   rm -rf node_modules &&
   yarn cache clean &&
   yarn &&
   yarn electron-rebuild &&
   yarn dev
   ```
4. If you're on Windows, try using [cmder](http://cmder.net)

### Debugging Release Builds

```bash
yarn cross-env DEBUG_PROD=true yarn build && yarn cross-env DEBUG_PROD=true yarn start
```
