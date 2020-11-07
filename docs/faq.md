---
id: faq
title: FAQ
sidebar_label: FAQ
---

## Why is webpack a good idea for electron?

Electron apps face huge hurdles when it comes to matching native performance. There's a number of reasons for that. One of those issues is that a main electron app does not have Ahead-of-Time (AOT) compilation. No optimizations are made to code performance. [`require()`](https://kev.inburke.com/kevin/node-require-is-dog-slow/) is **really** slow. Webpack helps us reduce the amount of calls made to require by bundling all our code (when possible) into single file. [Atom is slow primarily because it makes so many require statements](https://github.com/atom/atom/issues/9720).

## Why use Yarn instead of NPM?

`yarn` has some features that `npm` doesn't, such as [module aliasing](https://yarnpkg.com/lang/en/docs/cli/add/#toc-yarn-add-alias), [`workspaces`](https://yarnpkg.com/lang/en/docs/workspaces/), and [`plug'n'play`](https://github.com/yarnpkg/pnp-sample-app). While we're not using any of those features right now, we might in the future.

The collaborators use `yarn` and our CI's use `yarn` as well, so we recommend `yarn` over `npm` to avoid compatibility problems.

There is nothing stopping anyone from using `npm` over `yarn` in their projects, but if they do that and they end up running into bugs because of it, we probably won't be able to help them.

## How do I skip building the DLL immediately after install?

Install the dependency with the `--ignore-scripts` flag. Here's an example:
```bash
yarn add some-dep --ignore-scripts
```

To always have the `--ignore-scripts` flag on, you can add this to your yarnrc.
```ignore
# Your .yarnrc file located in the root of the project or any directories above
--ignore-scripts true
```

To always have the `--ignore-scripts` flag on for specific commands:
```ignore
# Your .yarnrc file located in the root of the project or any directories above

# This will set the --ignore-scripts flag whenever running yarn add
--add.ignore-scripts true
```

## Why am I having issues spawning an instance of my app?

There are a few caveats with how `child_process.spawn()` operates in the context of an Electron app. If you are trying to spawn a packaged binary of your ERB app from a develoment instance (e.g. an instance of your app started with `yarn start`), you may find that your packaged app starts with issues. This happens because ERB sets some environment variables in `yarn start` that cause problems when set while spawning a packaged version of the app.

If this is an issue that you face, a workaround is to unset these variables prior to spawning the packaged app:
```js
const newEnvVars = { ...process.env };
delete newEnvVars.HOT;
delete newEnvVars.START_HOT;
newEnvVars.NODE_ENV = 'production';
spawn('path/to/packaged/app.exe', [...args], { ...options, env: { ...newEnvVars } });
```
